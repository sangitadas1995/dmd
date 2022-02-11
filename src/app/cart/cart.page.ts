import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cart=[

    {
      id:1,
      image:"../../assets/images/pic3.jpg",
      heading:"Bike",
      price:"300",
      sortdetails:"Wishing all body"
    },
    {
      id:2,
      image:"../../assets/images/pic5.jpg",
      heading:"Car",
      price:"800",
      sortdetails:"Wishing all body"
    }
     
  ]

  
  // currentNo = 1;

  // inc() {
  //   this.currentNo++;
  //   }

  // dec () {
  //   if(this.currentNo>0){
  //       this.currentNo--;}
  // }
}
