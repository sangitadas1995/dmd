import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CommonService } from '../common/common.service';
import { ActivatedRoute, Router  } from '@angular/router';
///import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mobile:any ='';
  public password:any ='';
  public userId:any='';
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router, 
    public common: CommonService,

    ) { }

  async submit(fromValue){
    var data = await this.api.login(fromValue).subscribe((res)=>{
      if(res.success === false){
        this.common.Toast(res.message);
      }else{
       this.userId =  res.data.id;
        this.common.Toast(res.message);
        this.router.navigate(['/order-details/'+this.userId]);
      }
    });
  //this.router.navigate(['/order-details']);
  }

  ngOnInit() {
  }

}
