import { Component } from '@angular/core';

@Component({
  selector: 'app-eligible',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent {

    months: Months[] = [
        {value: '2 Months', viewValue: '2 Months'},
        {value: '4 Months', viewValue: '4 Months'},
        {value: '6 Months', viewValue: '6 Months'}
      ];

      value:any=100000;
      expense:any=50000;
}

interface Months {
    value: string;
    viewValue: string;
  }