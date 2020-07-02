import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  // { path: 'calculator', loadChildren: () => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule) },
  // //{ path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  // { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: '**', pathMatch: 'full', redirectTo: '/home' },
    
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
      path: '',
      loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
      //canActivate: [AuthGuard]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
