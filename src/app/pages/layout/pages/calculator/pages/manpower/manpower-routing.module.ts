import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManpowerComponent } from './manpower.component';


const routes: Routes = [
  { path: 'loaders', component: ManpowerComponent, data:{menuOption:'loaders'}},
  { path: 'trucks', component: ManpowerComponent, data:{menuOption:'trucks'} },
  { path: 'jumbos', component: ManpowerComponent, data:{menuOption:'jumbos'} },
  { path: 'longhole', component: ManpowerComponent, data:{menuOption:'longhole'} },
  { path: 'charger', component: ManpowerComponent, data:{menuOption:'charger'} },
  { path: 'forklifts', component: ManpowerComponent, data:{menuOption:'forklifts'} },
  { path: 'lvs', component: ManpowerComponent, data:{menuOption:'lvs'} },
  { path: 'others', component: ManpowerComponent, data:{menuOption:'others'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManpowerRoutingModule { }
