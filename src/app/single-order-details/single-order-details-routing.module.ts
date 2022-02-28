import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleOrderDetailsPage } from './single-order-details.page';

const routes: Routes = [
  {
    path: '',
    component: SingleOrderDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleOrderDetailsPageRoutingModule {}
