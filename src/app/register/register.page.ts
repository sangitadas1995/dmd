import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { CommonService } from '../common/common.service';
import { ActivatedRoute, Router  } from '@angular/router';
//import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public first_name:any       ='';
  public last_name:any        ='';
  public mobile:any           ='';
  public email:any            ='';
  public password             ='';
  public confirm_password:any ='';
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router, 
    public common: CommonService) { }

  ngOnInit() {
  }

  async submit(fromValue){
    //console.log(fromValue);
    var data = await this.api.registration(fromValue).subscribe((res)=>{
      ///console.log(res)
      if(res.success === false){
        this.common.Toast(res.message);
      }else{
        this.common.Toast(res.message);
        this.router.navigate(['/login']);
      }
    });
  }

}
