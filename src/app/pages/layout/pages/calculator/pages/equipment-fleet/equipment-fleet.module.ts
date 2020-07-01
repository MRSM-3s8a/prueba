import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentFleetRoutingModule } from './equipment-fleet-routing.module';
import { EquipmentFleetComponent } from './equipment-fleet.component';


@NgModule({
  declarations: [EquipmentFleetComponent],
  imports: [
    CommonModule,
    EquipmentFleetRoutingModule
  ],
  exports:[EquipmentFleetComponent]
})
export class EquipmentFleetModule { }
