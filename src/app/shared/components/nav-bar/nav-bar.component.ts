import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem, MessageService } from 'primeng/api';
import { AuthSubjectService } from 'src/app/Modules/auth/auth-subject.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userProfileItems: MenuItem[] = [];
  items1: MegaMenuItem[] = [];

  constructor(private router: Router, private authSubjectService: AuthSubjectService) { }
  ngOnInit() {
    this.userProfileItems = [
      {
        label: '',
        items: [
          {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
              this.Profie();
            }
          },
          {
            label: 'Reset Password',
            icon: 'pi pi-refresh',
            command: () => {
              this.ResetPassword();
            }
          }, {
            label: 'Sign Out',
            icon: 'pi pi-refresh',
            command: () => {
              this.SignOut();
            }
          }
        ]
      },
    ];
    this.items1 = [
      {
        label: 'Tickets',
        icon: 'pi pi-fw pi-pencil',
        items: [
          [
            {
              label: 'Tickets',
              items: [{ label: 'Add New Ticket', routerLink: 'Ticket/AddNewTicket' }, { label: 'Video 1.2' }]
            }
          ]
        ]
      },
      {
        label: 'Test',
        icon: 'pi pi-fw pi-exclamation-triangle',
        items: [
          [
            {
              items: [{ label: 'Add New Ticket', routerLink: 'Ticket/AddNewTicket' }, { label: 'Video 1.2' }]
            }
          ]
        ]
      }
    ];

  }
  Profie() {

  }

  ResetPassword() {

  }
  SignOut() {
    localStorage.removeItem('VOCAToken');
    this.authSubjectService.authObject$.next(false)
    this.router.navigate(['/Auth/Login']);
  }
}
