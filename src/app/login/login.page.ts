import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private formBuilder: FormBuilder) { }

loginForm = this.formBuilder.group({
  name: [""],
  password: [""]
})

public submit(){
  console.log(this.loginForm.value)
}
  
  ngOnInit() {
  }

}
