import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { CategoryTreeComponent } from './components/category-tree/category-tree.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/Modules/primeng.module';
import { AddNewTicketComponent } from './components/add-new-ticket/add-new-ticket.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { VOCAController } from './services/Tickets.service';


@NgModule({
  declarations: [
    CategoryTreeComponent,
    AddNewTicketComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimengModule
  ], providers: [VOCAController, SpinnerService]
})
export class TicketsModule { }
