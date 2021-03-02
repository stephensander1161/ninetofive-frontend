import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonialProfileModalPage } from './testimonial-profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TestimonialProfileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialProfileModalPageRoutingModule {}
