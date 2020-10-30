import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcFormComponent } from './calc-form/calc-form.component';
import { CalcResultsComponent } from './calc-results/calc-results.component';
import { CalculatorNewRoutingModule } from './calculator-new-routing.module';
import { CommonUtilitiesModule } from '../common-utilities/common-utilities.module';



@NgModule({
  declarations: [CalculatorComponent, CalcFormComponent, CalcResultsComponent],
  imports: [
    CommonModule,
    CalculatorNewRoutingModule,
    FormsModule,
    CommonUtilitiesModule
  ]
})
export class CalculatorNewModule { }
