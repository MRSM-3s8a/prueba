import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';
import { ManpowerFormComponent } from './manpower-form.component';



@NgModule({
  declarations: [ManpowerFormComponent],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports: [ManpowerFormComponent]
})
export class ManpowerFormModule { }
