import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public userid:any ='';
  public usercheck:any;
 public usercheck1:any;
  constructor(public router:Router) {
    this.userid = localStorage.getItem('user_details');
    
  
   
  }
  login(){
    this.router.navigateByUrl('/login')
  }

  order(){
    this.router.navigateByUrl('/order-details')
  }
  home(){
    this.router.navigateByUrl('/home')
  }


  async logout(){
    console.log('kjh');
    localStorage.removeItem("user_details");
    if (!(this.userid)) {
      console.log("DOH!");
      this.usercheck =true;
   
  }else{
    console.log("D0000OH!");
    this.usercheck = true;
  }
    this.router.navigateByUrl('/login');
  }
  // 8240030693
  

  ngOnInit() {
    this.userid = localStorage.getItem('user_details');
    if (!(this.userid)) {
      console.log("DOH!");
      this.usercheck =false;
     this.usercheck1=true
  }else{
    console.log("D0000OH!");
    this.usercheck1 = false;
    this.usercheck= true
  }
  }
}


