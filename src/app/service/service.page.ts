import { Component, OnInit } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  public category = [];
  
  constructor( 
    public api: ApiserviceService,
  	public router: Router
    ) { }

  ngOnInit() {
    this.getCat()
  }
  async getCat(){
    var data = await this.api.allCategory().subscribe((res)=>{
      this.category = res.data;
    });
    
  }

}
