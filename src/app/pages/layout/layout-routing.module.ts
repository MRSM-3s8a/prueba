import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
          path: 'home',
          loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
          path: 'calculator',
          loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)
      },
      {
          path: 'welcome',
          loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
          path: '**',
          pathMatch: 'full',
          redirectTo: 'home'
      },
  ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
