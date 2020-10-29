import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNo: string;

  secondNo: string;

  operation: string;

  result: string;

  constructor () {
    this.firstNo = null;
    this.secondNo = null;
    this.operation = null;
    this.result = null;
  }

  onCalculationDone(data): void {
    this.firstNo = data.first;
    this.secondNo = data.second;
    this.operation = data.operation;
    this.result = data.result;
  }

  ngOnInit(): void {
  }

}
