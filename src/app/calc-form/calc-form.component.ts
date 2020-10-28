import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {

  firstNo: string;

  secondNo: string;

  operation: string;

  result: string;

  @Output()
  calculated: EventEmitter<any>;

  constructor() {
    this.firstNo = '300';
    this.secondNo = '200';
    this.operation = '-';
    this.result = null;
    this.calculated = new EventEmitter();
  }

  // isDisabled property is dependent on `firstNo` and `secondNo` property
  get isDisabled() {
    const firstNo = this.firstNo;
    const secondNo = this.secondNo;

    return !firstNo || isNaN(parseInt(firstNo)) || !secondNo || isNaN(parseInt(secondNo));
  }

  onCalculate(): void {
    // collect the value entered in the first field
    const firstNo = this.firstNo;

    // collect the value entered in the second field
    const secondNo = this.secondNo;

    // get the operation that the user has selected
    const operation = this.operation;

    // logic
    const iFirstNo = parseInt(firstNo);
    const iSecondNo = parseInt(secondNo);

    let ans;
    if (operation == '+') {
      ans = iFirstNo + iSecondNo;
    } else if (operation == '-') {
      ans = iFirstNo - iSecondNo;
    } else {
      ans = iFirstNo * iSecondNo;
    }

    this.result = ans;

    // time to emit the data to my parent component
    this.calculated.emit({
      first: firstNo,
      second: secondNo,
      operation: operation,
      result: ans,
    })
  }

  ngOnInit(): void {
  }

}
