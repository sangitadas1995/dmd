import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeServicelistPageRoutingModule } from './bike-servicelist-routing.module';

import { BikeServicelistPage } from './bike-servicelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeServicelistPageRoutingModule
  ],
  declarations: [BikeServicelistPage]
})
export class BikeServicelistPageModule {}
