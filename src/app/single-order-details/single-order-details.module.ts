import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleOrderDetailsPageRoutingModule } from './single-order-details-routing.module';

import { SingleOrderDetailsPage } from './single-order-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleOrderDetailsPageRoutingModule
  ],
  declarations: [SingleOrderDetailsPage]
})
export class SingleOrderDetailsPageModule {}
