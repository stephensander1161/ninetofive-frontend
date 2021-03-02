import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewNewModalPageRoutingModule } from './review-new-modal-routing.module';

import { ReviewNewModalPage } from './review-new-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewNewModalPageRoutingModule
  ],
  declarations: [ReviewNewModalPage]
})
export class ReviewNewModalPageModule {}
