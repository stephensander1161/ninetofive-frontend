import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericProfileModalPageRoutingModule } from './generic-profile-modal-routing.module';

import { GenericProfileModalPage } from './generic-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericProfileModalPageRoutingModule
  ],
  declarations: [GenericProfileModalPage]
})
export class GenericProfileModalPageModule {}
