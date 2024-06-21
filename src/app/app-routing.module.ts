import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent
  },
  { path: 'Auth', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'Ticket', loadChildren: () => import('./Modules/tickets/tickets.module').then(m => m.TicketsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
