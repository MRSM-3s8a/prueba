import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductivityFormComponent } from './productivity-form.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';



@NgModule({
  declarations: [ProductivityFormComponent],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [ProductivityFormComponent]
})
export class ProductivityFormModule { }
