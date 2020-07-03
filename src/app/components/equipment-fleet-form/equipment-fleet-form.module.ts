import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentFleetFormComponent } from './equipment-fleet-form.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';



@NgModule({
  declarations: [EquipmentFleetFormComponent],
  imports: [
    CommonModule,
    NgZorroModule
  ],
  exports:[EquipmentFleetFormComponent]
})
export class EquipmentFleetFormModule { }
