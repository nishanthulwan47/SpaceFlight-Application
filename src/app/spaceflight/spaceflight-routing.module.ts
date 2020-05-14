import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaceflightPage } from './spaceflight.page';

const routes: Routes = [
  {
    path: '',
    component: SpaceflightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceflightPageRoutingModule {}
