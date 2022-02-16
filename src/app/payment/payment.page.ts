import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public service_details =[];
  public id:any;
  public bookingInfo =[];
  public name:any;
  public description:any;
  public price:any;
  public service_image_url:any;
  public subTotal:any;
  public tax:any;
  public total_amount:any;
  public serviceId:any;

  constructor( public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router) { }

  ngOnInit() {
    this.id = atob(this.route.snapshot.paramMap.get("serviceId"));
    this.getBookingDetailsData(this.id);
  }

  async getBookingDetailsData(id:any){
    var data = await this.api.getBookingDetails(id).subscribe((res)=>{
      this.service_details    = res.data.service_details;
      this.bookingInfo        = res.data;
      this.name               = res.data.service_details.name;
      this.description        = res.data.service_details.description;
      this.price              = res.data.service_details.price;
      this.service_image_url  = res.data.service_details.service_image_url;
      this.serviceId          = res.data.service_details.id;
      this.subTotal           = res.data.subtotal;
      this.tax                = res.data.tax;
      this.total_amount       = res.data.total_amount;
    });
  }

}
