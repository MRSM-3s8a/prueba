import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipmentFleetComponent } from './equipment-fleet.component';


const routes: Routes = [
  { path: 'loaders', component: EquipmentFleetComponent, data:{menuOption:'loaders'}},
  { path: 'trucks', component: EquipmentFleetComponent, data:{menuOption:'trucks'} },
  { path: 'jumbos', component: EquipmentFleetComponent, data:{menuOption:'jumbos'} },
  { path: 'longhole', component: EquipmentFleetComponent, data:{menuOption:'longhole'} },
  { path: 'charger', component: EquipmentFleetComponent, data:{menuOption:'charger'} },
  { path: 'forklifts', component: EquipmentFleetComponent, data:{menuOption:'forklifts'} },
  { path: 'lvs', component: EquipmentFleetComponent, data:{menuOption:'lvs'} },
  { path: 'others', component: EquipmentFleetComponent, data:{menuOption:'others'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentFleetRoutingModule { }
