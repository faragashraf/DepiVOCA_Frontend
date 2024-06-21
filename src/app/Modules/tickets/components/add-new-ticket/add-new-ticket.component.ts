import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { MsgsService } from 'src/app/shared/services/msgs.service';
import { TreeNode } from 'primeng/api';
import { VOCAController, TicketRequestDto, CdCategoryMandDto, CdmendDto } from '../../services/Tickets.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndexDbService } from 'src/app/shared/services/index-db.service';

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

  validationMessages: any = {
    tkCategoryCd: {
      'required': 'Please Select Your Ticket Category'
    },
    tkCompSrc: { 'required': 'Please Select Your Ticket Source' },
    tkDetails: { 'required': 'Please Enter Your Ticket Details' },
    tkCreateUser: '',
    _mendField: { 'required': 'XXXXXXXXXXXXXXXXXX' }
  }


  formErrors: any = {
    tkCategoryCd: '',
    tkCompSrc: '',
    tkDetails: '',
    tkCreateUser: '',
    _mendField: '',
  }

  logValidationErrors(group: FormGroup = this.ticketForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.dirty || abstractControl.touched)) {
        const messages = this.validationMessages[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey]
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
    await this.getMandatoryAll();
    await this.getMandatoryMetaDate()

    await this.ticketForm.valueChanges.subscribe((data) => {
      this.logValidationErrors();
    })
  }
  initForm() {
    this.ticketForm = this.fb.group({
      tkCategoryCd: [null, Validators.required],
      tkCompSrc: [null, Validators.required],
      tkDetails: ['', Validators.required],
      tkCreateUser: [null],
      mandFileds: this.fb.array([])
    });
  }
  getMandatoryMetaDate() {
    this.vOCAController.getMandatoryMetaDate()
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          if (res.isSuccess) {
            this.cdmendDto = res.data as CdmendDto[]
            //  this.indexDbService.add({ id: 'MandatoryMeta', object: res.data })
          }
          else {
            let errors = "";
            console.log('res', res);
            res.errors.forEach(e => {
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
  getMandatoryAll() {
    this.vOCAController.getMandatoryAll()
      .subscribe({
        next: (res) => {
          this.spinner.hide();
          // this.indexDbService.add({ id: 'MandatoryFileds', object: res.data })
          if (res.isSuccess) {
            this.cdCategoryMandDto = res.data as CdCategoryMandDto[]
            res.data?.forEach(mandatory => {
              this.addMandFiled(mandatory.mendField)
            })
          }
          else {
            let errors = "";
            console.log('res', res);
            res.errors.forEach(e => {
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
    return this.ticketForm.get('mandFileds') as FormArray;
  }

  addMandFiled(metaFiled: string): void {
    let _mandData = this.cdmendDto.find(f => f.cdmendTxt == metaFiled)
    this.mandFileds.push(this.fb.group({
      _mendField: ['', Validators.required]
    }));
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
