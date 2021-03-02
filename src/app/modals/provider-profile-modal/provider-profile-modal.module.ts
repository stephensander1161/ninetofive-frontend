import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderProfileModalPageRoutingModule } from './provider-profile-modal-routing.module';

import { ProviderProfileModalPage } from './provider-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderProfileModalPageRoutingModule
  ],
  declarations: [ProviderProfileModalPage]
})
export class ProviderProfileModalPageModule {}
