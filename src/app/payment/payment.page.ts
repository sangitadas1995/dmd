import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CommonService } from '../common/common.service';
import { ActivatedRoute, Router  } from '@angular/router';
import { ModalController,NavParams } from '@ionic/angular';

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

  public first_name:any='';
  public last_name:any='';
  public house_no:any='';
  public city:any='';
  public state:any='';
  public pin:any='';
  public phone:any='';
  public address:any='';
  public email:any='';
  public timeData:any='';
  public myDate:any='';
  public bookingTime:any='';
  public bookingDate:any='';
  public userId:any='';
  public service_id:any ='';
  public user_id:any;
  public bookingNo:any='';

  modalVisible = false;
  constructor( public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router, 
    public common: CommonService) { }
    public modalController: ModalController
   

  ngOnInit() {
    this.id               = atob(this.route.snapshot.paramMap.get("serviceId"));
    this.bookingTime      = atob(this.route.snapshot.paramMap.get("time"));
    this.bookingDate      = this.route.snapshot.paramMap.get("date");
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

  async checkout(formData) {
    await this.api.saveCustomerInfo(formData).subscribe(res=>{
      if(res.success === false){
        if(this.first_name === ''){
          this.common.Toast(res.message.first_name);
        }
        if(this.last_name === ''){
          this.common.Toast(res.message.last_name);
        }

        if(this.email === ''){
          this.common.Toast(res.message.email);
        }

        if(this.phone === ''){
          this.common.Toast(res.message.phone);
        }
      }else{
        this.userId = res.data.user_id;
        this.common.Toast(res.message);
        this.common.modaldismiss();
      }
    });
  }

    
  async getBookingNo(hiddenFromData){
    var data = await this.api.saveBookingInfo(hiddenFromData).subscribe((res)=>{
      if(res.success === false){
        this.common.Toast(res.message);
      }else{
        this.common.Toast(res.message);
        this.bookingNo = res.data.uniqueId;
        this.router.navigate(['/thankyou/'+this.bookingNo]);
      }
    });
  }



  
 
  
}
