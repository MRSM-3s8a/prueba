import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OreParametersRoutingModule } from './ore-parameters-routing.module';
import { OreParametersComponent } from './ore-parameters.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [OreParametersComponent],
  imports: [
    CommonModule,
    OreParametersRoutingModule,
    NgZorroModule
  ],
  exports:[OreParametersComponent]
})
export class OreParametersModule { }
