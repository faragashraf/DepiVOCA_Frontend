import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { IndexDbService } from 'src/app/shared/services/index-db.service';
import { MsgsService } from 'src/app/shared/services/msgs.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AuthSubjectService } from '../auth-subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  wavzToolTip: string = 'WAVZ |\n Digital Transformation'
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private jwtHelper: JwtHelperService, private router: Router, private indexDbService: IndexDbService,
    private spinnerService: SpinnerService, private msgsService: MsgsService,private authSubjectService: AuthSubjectService) {
    this.indexDbService.dbName = 'VOCA-AuthDb';          // Database Name
    this.indexDbService.ObjectStoreName = 'AuthStore'; // Table Name
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.indexDbService.initIndexedDB().then(c => {
      // this.indexDbService.createObjectStore(this.indexDbService.ObjectStoreName)
    })
    const { username, password } = this.loginForm.value;
    this.spinnerService.show($localize`Signing In ...`)
    if (this.loginForm.valid && username == 'test' && password == 'test') {
      setTimeout(() => {
        this.indexDbService.add({ id: 'AuthObject', object: { name: 'Ashraf', id: '1' } })
        localStorage.setItem('VOCAToken', 'token')
        this.spinnerService.hide();
        this.authSubjectService.authObject$.next(true)
        this.router.navigate(['/']);
      }, 2000);
    }
    else {
      this.authSubjectService.authObject$.next(false)
      this.spinnerService.hide()
      this.msgsService.msgError('Invalid User Name Or Password', 'Error')
    }
  }
  loginWithFacebook() {
    // Add Facebook login integration logic here
    console.log('Login with Facebook clicked');
  }

  loginWithGoogle() {
    // Add Gmail login integration logic here
    console.log('Login with Gmail clicked');
  }
}
