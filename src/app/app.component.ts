import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public userid:any ='';

  constructor(public router:Router) {}
  login(){
    this.router.navigateByUrl('/login')
  }

  order(){
    this.router.navigateByUrl('/order-details')
  }
  home(){
    this.router.navigateByUrl('/home')
  }

  ngOnInit() {
    this.userid = localStorage.getItem('user_details');
    //this.logout();
  }
  async logout(){
    console.log('kjh');
    localStorage.removeItem("user_details");
    this.router.navigateByUrl('/login');
  }
}


