import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open';
  arr:any=[
    ["../../assets/Get Paid Instantly.png",'Quick cash disbursement','Get terms loans that your business needs within 72 hrs'],
    ["../../assets/Low interest rate.png",'Low-interest rate','Achieve your financial goals with an amazing interest rate starting at 13% per annum'],
    ["../../assets/Secure Payments.png",'Zero Paperwork','Get started instantly by submitting only your basic details & bank statements'],
    ["../../assets/freelancer_feature_icon_6@1.5x.png",'Ace your business finances','Manage banking, accounting & everything in between, on one platform'],
    ["../../assets/Covid.png",'Loans to fight COVID-19','Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh']
  ];

  save(){
    console.log(this.arr);
    console.log(this.arr[0]);
    console.log(this.arr[0][0]);
  }
}
