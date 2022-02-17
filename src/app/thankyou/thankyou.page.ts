import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor() { }
  

  slider= [
    {
      title:"Thank You",
      image:"../../assets/images/thank_you.svg"
    },
    
  ]
  ngOnInit() {
  }

}
