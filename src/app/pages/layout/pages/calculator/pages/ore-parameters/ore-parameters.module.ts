import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OreParametersRoutingModule } from './ore-parameters-routing.module';
import { OreParametersComponent } from './ore-parameters.component';


@NgModule({
  declarations: [OreParametersComponent],
  imports: [
    CommonModule,
    OreParametersRoutingModule
  ],
  exports:[OreParametersComponent]
})
export class OreParametersModule { }
