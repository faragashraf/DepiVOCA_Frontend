import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewTicketComponent } from './components/add-new-ticket/add-new-ticket.component';

const routes: Routes = [
  {
    path: 'AddNewTicket',
    component: AddNewTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
