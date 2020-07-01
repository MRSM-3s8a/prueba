import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator.component';


const routes: Routes = [
  { 
    path: '', 
    component: CalculatorComponent,
    children: [
      {
          path: 'equipment-fleet',
          loadChildren: () => import('./pages/equipment-fleet/equipment-fleet.module').then(m => m.EquipmentFleetModule)
      },
      // {
      //     path: 'calculator',
      //     loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)
      // },
      // {
      //     path: 'welcome',
      //     loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      // },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/home'
      // },
      {
          path: '**',
          pathMatch: 'full',
          redirectTo: 'equipment-fleet'
      },
  ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
