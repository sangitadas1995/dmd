import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  looking = {
    initialSlide: 0,
    speed: 200,
    autopaly:2000,
    slidesPerView: 1,
    autoplay:true
    
  };
  constructor() {}

}

