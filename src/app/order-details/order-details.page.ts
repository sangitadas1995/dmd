import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  constructor(public modalcontroller:ModalController) { }

  ngOnInit() {
  }

  userData: any = {
    image: 'assets/images/krishana.jpg',
    name: 'UserName',
    email: 'test1@test.com'
  };

  orderDetails = [
    {
    image: 'assets/images/krishana.jpg',
    productName: 'Bike',
    pNO: '436474758'
  },
  {
    image: 'assets/images/krishana.jpg',
    productName: 'Car',
    pNO: '45667'
  }
  ]

  productDetails(){
    this.modalcontroller.dismiss();
  }

 
}
