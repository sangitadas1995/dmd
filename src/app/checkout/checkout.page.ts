import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }


  checkForm = this.formBuilder.group({
    f_name: [""],
    last_name: [""],
    email: [""],
    password: [""]
  })
  
  public checkout(){
    console.log(this.checkForm.value)
  }
  ngOnInit() {
  }
 

  
}
