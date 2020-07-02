import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentFleetRoutingModule } from './equipment-fleet-routing.module';
import { EquipmentFleetComponent } from './equipment-fleet.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [EquipmentFleetComponent],
  imports: [
    CommonModule,
    EquipmentFleetRoutingModule,
    NgZorroModule
  ],
  exports:[EquipmentFleetComponent]
})
export class EquipmentFleetModule { }
