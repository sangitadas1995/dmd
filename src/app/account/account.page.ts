import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor() { }

  userData: any = {
    image: 'assets/images/krishana.png',
    name: 'UserName',
    email: 'test1@test.com'
  };

  ngOnInit() {
  }

}
