import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaceflightPageRoutingModule } from './spaceflight-routing.module';

import { SpaceflightPage } from './spaceflight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaceflightPageRoutingModule
  ],
  declarations: [SpaceflightPage]
})
export class SpaceflightPageModule {
  
}
