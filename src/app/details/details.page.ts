import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { ActivatedRoute, Router  } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  looking = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };
  
  public details = []
  public id:any;
  public category = [];
  public service_image_url:any;
  public name:any;
  public description:any;
  public price:any;
  public categoryId:any;
   
  constructor(
    public api: ApiserviceService,
    public route:ActivatedRoute,
  	public router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    //console.log(this.id);
    this.getServiceDetailsData(this.id)
  }

  async getServiceDetailsData(id:any){
    var data = await this.api.getServiceDetailsById(id).subscribe((res)=>{
      this.details            = res.data;
      this.category           = res.data.category;
      this.service_image_url  = res.data.service_image_url;
      this.name               = res.data.name;
      this.description        = res.data.description;
      this.price              = res.data.price;
      this.id                 = res.data.id;
      this.categoryId         = res.data.category.id;
      //console.log(this.category);
    });
  }

}
