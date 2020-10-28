import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

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
}
