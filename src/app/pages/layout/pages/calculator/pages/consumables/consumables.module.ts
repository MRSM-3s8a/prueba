import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumablesRoutingModule } from './consumables-routing.module';
import { ConsumablesComponent } from './consumables.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [ConsumablesComponent],
  imports: [
    CommonModule,
    ConsumablesRoutingModule,
    NgZorroModule
  ],
  exports:[ConsumablesComponent]
})
export class ConsumablesModule { }
