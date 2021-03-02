import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewNewModalPage } from './review-new-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewNewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewNewModalPageRoutingModule {}
