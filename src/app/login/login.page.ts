import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(
    private formBuilder: FormBuilder,
    public route:ActivatedRoute,
  	public router: Router, 
    ) { }

loginForm = this.formBuilder.group({
  name: [""],
  password: [""]
})

public submit(){
  console.log(this.loginForm.value)
  this.router.navigate(['/order-details']);
}
  

// OnClickFunction()
// {
//   this.router.navigate(['/order-details']);
// }
  ngOnInit() {
  }

}
