import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductivityRoutingModule } from './productivity-routing.module';
import { ProductivityComponent } from './productivity.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';
import { ProductivityFormModule } from 'src/app/components/productivity-form/productivity-form.module';


@NgModule({
  declarations: [ProductivityComponent],
  imports: [
    CommonModule,
    ProductivityRoutingModule,
    NgZorroModule,
    ProductivityFormModule
  ],
  exports:[ProductivityComponent]
})
export class ProductivityModule { }
