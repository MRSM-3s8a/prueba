import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManpowerRoutingModule } from './manpower-routing.module';
import { ManpowerComponent } from './manpower.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';
import { ManpowerFormModule } from 'src/app/components/manpower-form/manpower-form.module';


@NgModule({
  declarations: [ManpowerComponent],
  imports: [
    CommonModule,
    ManpowerRoutingModule,
    NgZorroModule,
    ManpowerFormModule
  ],
  exports:[ManpowerComponent]
})
export class ManpowerModule { }
