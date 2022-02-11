import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-bike-servicelist',
  templateUrl: './bike-servicelist.page.html',
  styleUrls: ['./bike-servicelist.page.scss'],
})
export class BikeServicelistPage implements OnInit {
  public services = []
  public id:any;
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    //console.log(this.id);
    this.getServiceData(this.id)
    
  }

  async getServiceData(id:any){
      var data = await this.api.getServiceListById(id).subscribe((res)=>{
        this.services = res.data;
       // console.log(res.data);
      });
    }
  }
