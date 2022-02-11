import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  cart=[

    {
      id:1,
      image:"../../assets/images/pic3.jpg",
      heading:"Bike",
      price:"300",
      sortdetails:"Wishing all body"
    }
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
