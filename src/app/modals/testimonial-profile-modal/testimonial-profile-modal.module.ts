import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestimonialProfileModalPageRoutingModule } from './testimonial-profile-modal-routing.module';

import { TestimonialProfileModalPage } from './testimonial-profile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestimonialProfileModalPageRoutingModule
  ],
  declarations: [TestimonialProfileModalPage]
})
export class TestimonialProfileModalPageModule {}
