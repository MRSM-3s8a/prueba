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
      {
          path: 'consumables',
          loadChildren: () => import('./pages/consumables/consumables.module').then(m => m.ConsumablesModule)
      },
      {
          path: 'manpower',
          loadChildren: () => import('./pages/manpower/manpower.module').then(m => m.ManpowerModule)
      },
      {
          path: 'ore-parameters',
          loadChildren: () => import('./pages/ore-parameters/ore-parameters.module').then(m => m.OreParametersModule)
      },
      {
          path: 'productivity',
          loadChildren: () => import('./pages/productivity/productivity.module').then(m => m.ProductivityModule)
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
          redirectTo: 'equipment-fleet/loaders'
      },
  ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
