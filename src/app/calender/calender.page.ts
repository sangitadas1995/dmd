import { Component, OnInit,ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CommonService } from '../common/common.service';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.page.html',
  styleUrls: ['./calender.page.scss'],
})
export class CalenderPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  constructor(public modalCtrl: ModalController,
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router,
    public common: CommonService) {
  }
  
  public timesidule =[]
  public time:any;
  public selectedTime:any;
  public serviceId:any;
  public timeGet   = new Date();
//past date disable fiexd//
date = new Date();
  minDate =  new Date(this. date.getTime() - 
              this.date.getTimezoneOffset()*60000).toISOString().substring(0, 10);

  // time local fiexd//
  
  myDate: String = new Date(this.date.getTime() - 
                   this.date.getTimezoneOffset()*60000).toISOString().substring(0, 10);
                              

  // data get//
  datechange(value){
    this.getTimeByDate();
  }
 //time//
 timedata(timevalue){
  this.selectedTime = timevalue;
 }

  ngOnInit() {
    this.serviceId = this.route.snapshot.paramMap.get("serviceid");
    this.getTimeByDate();
    //console.log('selected_date',this.myDate);
  }

   async getTimeByDate(){
    //console.log(this.myDate);
    var data = await this.api.dateWiseTime(this.myDate).subscribe((res)=>{
      this.timesidule = res.data;
      this.time = true;
      if(res.success === false){
        this.common.Toast(res.message);
        this.time = false;
      }
     });
   }
   goToPaymentPage() {
    var encode_time = btoa(this.selectedTime);
    var serviceId   = btoa(this.serviceId);
    //var decode_time = atob(encode_time);
   // console.log('+9+989',encode_time);
    //sconsole.log('nnnnnnnnnnn',decode_time);
    this.router.navigate(['/payment/'+serviceId+'/'+encode_time+'/'+this.myDate]);
  }
  
}
