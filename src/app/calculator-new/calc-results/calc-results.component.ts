import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.css']
})
export class CalcResultsComponent implements OnInit {

  @Input()
  first: string;

  @Input()
  second: string;

  @Input()
  ops: string;

  @Input()
  result: string;

  constructor() { }

  ngOnInit(): void {
  }

}
