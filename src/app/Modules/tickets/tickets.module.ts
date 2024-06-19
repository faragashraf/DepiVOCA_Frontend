import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { CategoryTreeComponent } from './components/category-tree/category-tree.component';


@NgModule({
  declarations: [
    CategoryTreeComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketsModule { }
