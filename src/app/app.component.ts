import { Component, OnInit } from '@angular/core';
import { MsgsService } from './shared/services/msgs.service';
import { WindowsNotificationService } from './shared/services/windowsNotification.service';
import { SpinnerService } from './shared/services/spinner.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { IndexDbService } from './shared/services/index-db.service';
import { AuthSubjectService } from './Modules/auth/auth-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('shadowAnimation', [
      state('small', style({
        boxShadow: '0 0 20px rgba(33, 150, 243, 0.5)'
      })),
      state('big', style({
        boxShadow: '0 0 100px rgba(33, 150, 243, 0.7)',
      })),
      transition('small <=> big', animate('1s ease-in-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  currentYear: number=0;

  spinnerLoading: string = 'Loading ...'
  IndexedDBCompatibility: boolean = false;
  instructionVisible: boolean = false;
  isAuth: boolean = false;

  constructor(private jwtHelper: JwtHelperService, private router: Router, private indexDbService: IndexDbService,
    private spinnerService: SpinnerService, private msgsService: MsgsService, private authSubjectService: AuthSubjectService,
    private NotificationService: WindowsNotificationService) {
    this.indexDbService.dbName = 'VOCA-AuthDb';
    this.indexDbService.ObjectStoreName = 'AuthStore';
  }
  
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.authSubjectService.authObject$.subscribe(auth => {
      this.isAuth = auth
    })
    this.spinnerService.spinnerLoading$.subscribe(spinnerLoading => {
      this.spinnerLoading = spinnerLoading
    })
    if ('indexedDB' in window) {
      this.IndexedDBCompatibility = true;
    } else {
      this.msgsService.msgError('المتصفح لا يدعم العديد من امكانيات التطبيق', 'يرجى ترقية المتصفح أو استخدام إصدار أحدث', true);
    }

    // this.indexDbService.connectIndexedDB().then(th => {
    //   this.indexDbService.read('AuthObject').then(_auth => {
    //     if (_auth != null)
    //       this.isAuth = true;
    //   });
    //   console.log('DB Connected From Side Bare');
    // })
    let token = localStorage.getItem('VOCAToken')
    if (token != null) {
      this.isAuth = true;
      //  this.spinnerService.show('جاري الإتصال بالـ HubSync');
    }
    else {
      this.isAuth = false;
      this.router.navigate(['/Auth/Login']);
    }

    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission !== 'granted') {
          if ('Notification' in window && Notification.permission !== 'granted') {
            this.instructionVisible = true;
          }
        }
      })
    }
    this.NotificationService.requestNotificationPermission();

  }

  shadowState = 'small';
  animateShadow() {
    setInterval(() => {
      this.shadowState = (this.shadowState === 'small') ? 'big' : 'small';
    }, 1000);
  }
}
