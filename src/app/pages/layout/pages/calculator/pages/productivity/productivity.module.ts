import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductivityRoutingModule } from './productivity-routing.module';
import { ProductivityComponent } from './productivity.component';


@NgModule({
  declarations: [ProductivityComponent],
  imports: [
    CommonModule,
    ProductivityRoutingModule
  ],
  exports:[ProductivityComponent]
})
export class ProductivityModule { }
