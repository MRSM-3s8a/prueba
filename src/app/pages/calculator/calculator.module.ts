import { NgModule } from '@angular/core';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CalculatorRoutingModule
  ],
  exports:[CalculatorComponent]
})
export class CalculatorModule { }
