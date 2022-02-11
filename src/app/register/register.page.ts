import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  registerForm = this.formBuilder.group({
    name: [""],
    phone: [""],
    email: [""],
    password: [""]
  })
  
  public submit(){
    console.log(this.registerForm.value)
  }

  ngOnInit() {
  }

}
