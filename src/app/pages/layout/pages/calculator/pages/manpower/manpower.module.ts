import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManpowerRoutingModule } from './manpower-routing.module';
import { ManpowerComponent } from './manpower.component';


@NgModule({
  declarations: [ManpowerComponent],
  imports: [
    CommonModule,
    ManpowerRoutingModule
  ],
  exports:[ManpowerComponent]
})
export class ManpowerModule { }
