import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManpowerComponent } from './manpower.component';


const routes: Routes = [
  { path: '', component: ManpowerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManpowerRoutingModule { }
