import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumablesRoutingModule } from './consumables-routing.module';
import { ConsumablesComponent } from './consumables.component';


@NgModule({
  declarations: [ConsumablesComponent],
  imports: [
    CommonModule,
    ConsumablesRoutingModule
  ],
  exports:[ConsumablesComponent]
})
export class ConsumablesModule { }
