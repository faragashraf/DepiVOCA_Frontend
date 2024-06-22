import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { MsgsService } from 'src/app/shared/services/msgs.service';
import { TreeNode } from 'primeng/api';
import { VOCAController, TicketRequestDto, CdCategoryMandDto, CdmendDto, CdmendDtoIEnumerableCommonResponse, CdCategoryMandDtoIEnumerableCommonResponse } from '../../services/Tickets.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexDbService } from 'src/app/shared/services/index-db.service';
import { forkJoin } from 'rxjs';

interface Validator {
  key: string;
  value: string;
}

interface ValidationMessage {
  key: string;
  validators: Validator[];
}

interface formErrors {
  key: string,
  value: string
}
@Component({
  selector: 'app-add-new-ticket',
  templateUrl: './add-new-ticket.component.html',
  styleUrls: ['./add-new-ticket.component.scss']
})
export class AddNewTicketComponent implements OnInit {
  categoryTree: TreeNode[] = [];
  ticketForm!: FormGroup;
  cdCategoryMandDto: CdCategoryMandDto[] = []
  cdmendDto: CdmendDto[] = []


  validationMessages: ValidationMessage[] = [
    {
      key: 'tkCategoryCd',
      validators: [{ key: 'required', value: 'Please Select Category' }]
    },
    {
      key: 'tkCompSrc',
      validators: [{ key: 'required', value: 'Please Select Source' }]
    },
    {
      key: 'tkDetails',
      validators: [{ key: 'required', value: 'Please Enter Details' }, { key: 'minlength', value: 'Details must be greater than 20 characters' }]
    }
  ];

  formErrors: formErrors[] = [
    {
      key: 'tkCategoryCd',
      value: ''
    },
    {
      key: 'tkCompSrc',
      value: ''
    },
    {
      key: 'tkDetails',
      value: ''
    }
  ]

  returnFormErrors(key: string) {
    const error = this.formErrors?.find(f => f.key == key)?.value
    return error
  }

  logValidationErrors(group: FormGroup = this.ticketForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors.map(m => {
        if (m.key == key) {
          m.value = ''
        }
      });

      if (abstractControl && !abstractControl.valid &&
        (abstractControl.dirty || abstractControl.touched)) {
        const messages_X = this.validationMessages.find(f => f.key == key)?.validators;

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors.map(m => {
              if (m.key == key) {
                m.value += m.value.length > 0 ? ' - ' : '' + messages_X?.find(f => f.key == errorKey)?.value
              }
            })
          }
        }
      }

      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }

      if (abstractControl instanceof FormArray) {
        for (const control of abstractControl.controls)
          if (control instanceof FormGroup) {
            this.logValidationErrors(control);
          }
      }
    })
  }

  constructor(private vOCAController: VOCAController, private indexDbService: IndexDbService,
    private spinner: SpinnerService, private msg: MsgsService,
    private fb: FormBuilder) {
    // this.indexDbService.dbName = 'VOCA-TicketDb';          // Database Name
    // this.indexDbService.ObjectStoreName = 'MandatoryStore'; // Table Name
  }

  async ngOnInit(): Promise<void> {

    await this.initForm()
    await this.GetData()

    await this.ticketForm.valueChanges.subscribe((data) => {
      this.logValidationErrors();
    })
  }
  initForm() {
    this.ticketForm = this.fb.group({
      tkCategoryCd: [null, Validators.required],
      tkCompSrc: [null, Validators.required],
      tkDetails: ['', [Validators.required, Validators.minLength(10)]],
      mandFileds: this.fb.array([])
    });
  }
  GetData() {
    this.spinner.show();
    const Obs1$ = this.vOCAController.getMandatoryAll();
    const Obs2$ = this.vOCAController.getMandatoryMetaDate();
    const Obs3$ = forkJoin<[CdCategoryMandDtoIEnumerableCommonResponse, CdmendDtoIEnumerableCommonResponse]>(Obs1$, Obs2$)
    Obs3$
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res[0].isSuccess && res[1].isSuccess) {
            this.cdCategoryMandDto = res[0].data as CdCategoryMandDto[]

            this.cdmendDto = res[1].data as CdmendDto[]

            res[0].data?.forEach(mandatory => {
              this.addFormArrayWithValidators(mandatory.mendField)
            })
          }
          else {
            let errors = "";
            res[0].errors.forEach(e => {
              errors += e.message + '\n';
            });
            res[1].errors.forEach(e => {
              errors += e.message + '\n';
            });
            this.msg.msgError('Error', '<h5>' + errors + '</h5>', true)
          }
        },
        error: (error) => {
          this.spinner.hide();
          this.msg.msgError('Error', '<h5>' + error + '</h5>', true)
        },
        complete: () => {
          this.spinner.hide();
        }
      })
  }

  get mandFileds(): FormArray {
    return this.ticketForm.controls['mandFileds'] as FormArray;
  }

  addFormArrayWithValidators(metaFiled: string): void {
    let _mandData = this.cdmendDto.find(f => f.cdmendTxt == metaFiled)
    this.formErrors.push({ key: metaFiled, value: '' })
    this.validationMessages.push({
      key: metaFiled, validators: [
        { key: 'required', value: 'Please Enter ' + metaFiled },
        { key: 'minlength', value: `${metaFiled} must be greater than ${_mandData?.cdmendLenght} characters` }
      ]
    })


    const NestedForm = this.fb.group({
      [metaFiled]: ['', Validators.required]
    });

    // Set validators dynamically
    const nestedControl = NestedForm.get(metaFiled);
    const currentValidators = nestedControl?.validator ? [nestedControl.validator] : [];
    if (nestedControl) {
      nestedControl.setValidators([...currentValidators, Validators.minLength(Number(_mandData?.cdmendLenght))]);
      nestedControl.updateValueAndValidity(); 
    }

    this.mandFileds.push(NestedForm);

  }

  setValidators(controlName: string) {
    const frm = <FormArray>this.mandFileds.get(controlName)
    frm.controls?.forEach((f: AbstractControl) => {
      f.setValidators(Validators.required);
      f.updateValueAndValidity();
    })
    // this.ticketForm.get(controlName)?.setValidators([Validators.minLength(1)]);
    // this.ticketForm.get('countryId')?.clearValidators();
    //this.updateValidation();
  }
  updateValidation() {
    // Iterate through all the controls in the form
    Object.keys(this.mandFileds.controls).forEach((controlName) => {
      const control = this.mandFileds.get(controlName);
      // Trigger reevaluation of the value and validation status for each control
      control?.updateValueAndValidity();
    });
  }
  removeMandFiled(index: number): void {
    this.mandFileds.removeAt(index);
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketRequest: TicketRequestDto = this.ticketForm.value;
      console.log(ticketRequest);
      // Handle the form submission
    }
  }
}
