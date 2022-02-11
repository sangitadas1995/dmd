import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeServicelistPage } from './bike-servicelist.page';

const routes: Routes = [
  {
    path: '',
    component: BikeServicelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeServicelistPageRoutingModule {}
