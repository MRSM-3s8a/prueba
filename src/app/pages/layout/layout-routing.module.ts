import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
          path: '',
          redirectTo: 'home'
      },
      {
          path: 'home',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
          path: 'calculator',
          loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)
      }
  ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
