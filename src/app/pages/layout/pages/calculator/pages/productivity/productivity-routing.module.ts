import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductivityComponent } from './productivity.component';


const routes: Routes = [
  { path: 'loaders', component: ProductivityComponent, data:{menuOption:'loaders'}},
  { path: 'trucks', component: ProductivityComponent, data:{menuOption:'trucks'} },
  { path: 'jumbos', component: ProductivityComponent, data:{menuOption:'jumbos'} },
  { path: 'longhole', component: ProductivityComponent, data:{menuOption:'longhole'} },
  { path: 'charger', component: ProductivityComponent, data:{menuOption:'charger'} },
  { path: 'forklifts', component: ProductivityComponent, data:{menuOption:'forklifts'} },
  { path: 'lvs', component: ProductivityComponent, data:{menuOption:'lvs'} },
  { path: 'others', component: ProductivityComponent, data:{menuOption:'others'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductivityRoutingModule { }
