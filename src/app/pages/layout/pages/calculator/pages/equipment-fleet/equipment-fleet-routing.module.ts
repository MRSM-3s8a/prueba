import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentFleetComponent } from './equipment-fleet.component';


const routes: Routes = [
  { path: '', component: EquipmentFleetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentFleetRoutingModule { }
