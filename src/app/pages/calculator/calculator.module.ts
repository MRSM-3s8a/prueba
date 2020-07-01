import { NgModule } from '@angular/core';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { NgZorroModule } from 'src/app/modules/ng-zorro/ng-zorro.module';


@NgModule({
  declarations: [CalculatorComponent],
  imports: [
    CalculatorRoutingModule,
    NgZorroModule
  ],
  exports:[CalculatorComponent]
})
export class CalculatorModule { }
