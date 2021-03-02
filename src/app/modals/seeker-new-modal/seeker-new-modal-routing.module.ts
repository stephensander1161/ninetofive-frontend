import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekerNewModalPage } from './seeker-new-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SeekerNewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeekerNewModalPageRoutingModule {}
