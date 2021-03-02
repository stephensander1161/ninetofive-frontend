import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeekerNewModalPageRoutingModule } from './seeker-new-modal-routing.module';

import { SeekerNewModalPage } from './seeker-new-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeekerNewModalPageRoutingModule
  ],
  declarations: [SeekerNewModalPage]
})
export class SeekerNewModalPageModule {}
