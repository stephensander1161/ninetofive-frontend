import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderNewModalPageRoutingModule } from './provider-new-modal-routing.module';

import { ProviderNewModalPage } from './provider-new-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderNewModalPageRoutingModule
  ],
  declarations: [ProviderNewModalPage]
})
export class ProviderNewModalPageModule {}
