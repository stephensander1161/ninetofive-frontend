import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminProfileModalPageRoutingModule } from './admin-profile-modal-routing.module';

import { AdminProfileModalPage } from './admin-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminProfileModalPageRoutingModule
  ],
  declarations: [AdminProfileModalPage]
})
export class AdminProfileModalPageModule {}
