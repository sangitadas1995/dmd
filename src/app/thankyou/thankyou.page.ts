import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.page.html',
  styleUrls: ['./thankyou.page.scss'],
})
export class ThankyouPage implements OnInit {

  constructor( public route:ActivatedRoute,
  	public router: Router) { }
  public bookingNo:any='';

  slider= [
    {
      title:"Thank You",
      image:"../../assets/images/thank_you.svg"
    },
    
  ]
  ngOnInit() {
    this.bookingNo = this.route.snapshot.paramMap.get("bookingNo");
  }

}
