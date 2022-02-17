import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router} from '@angular/router';
import { CommonService } from '../common/common.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
    public first_name:any='';
    public last_name:any='';
    public house_no:any='';
    public city:any='';
    public state:any='';
    public pin:any='';
    public phone:any='';
    public address:any='';
    public email:any='';
    public serviceId:any='';
    public timeData:any='';
    public myDate:any='';
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router,
    public common: CommonService) { }
    

  ngOnInit() {
    //this.checkout(formData)
    
  }

  async checkout(formData) {
    // this.serviceId = this.route.snapshot.paramMap.get("serviceId");
    // this.timeData = this.route.snapshot.paramMap.get("time");
    // this.myDate = this.route.snapshot.paramMap.get("date");
    // console.log(this.serviceId);
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
      }
    });
  }
 

  
}
