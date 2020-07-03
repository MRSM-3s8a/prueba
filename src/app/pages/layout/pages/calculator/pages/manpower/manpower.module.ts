import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManpowerRoutingModule } from './manpower-routing.module';
import { ManpowerComponent } from './manpower.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [ManpowerComponent],
  imports: [
    CommonModule,
    ManpowerRoutingModule,
    NgZorroModule
  ],
  exports:[ManpowerComponent]
})
export class ManpowerModule { }
