import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgZorroModule } from '../../modules/ng-zorro/ng-zorro.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgZorroModule,
    IconsProviderModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
