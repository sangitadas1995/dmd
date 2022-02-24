import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public userid:any;
  public orderDetails:any;
  public userData:any;
  public name:any ='';
  public email:any = '';
  public mobile:any ='';
  public userImage:any=''; 
  constructor(public modalcontroller:ModalController,
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router) { }

  ngOnInit() {
    this.userid = localStorage.getItem('user_details');
    this.getBookingDetailsData(this.userid);
    this.getserdetails(this.userid);
  }

  productDetails(){
    this.modalcontroller.dismiss();
  }

  async getBookingDetailsData(id){
    var data = await this.api.getUserBookingDetailsById(id).subscribe((res)=>{
      this.orderDetails = res.data;
      //console.log(res);
    });
  }
  async getserdetails(id){
    var data = await this.api.getUserDetails(id).subscribe((res)=>{
      console.log(res);
      this.userData  = res.data;
      this.name      = res.data.name;
      this.userImage = res.data.user_image_url;
      this.email     = res.data.email;
      this.mobile    = res.data.mobile;
    });
  }


 
}
