import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeekerStatsModalPage } from './seeker-stats-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SeekerStatsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeekerStatsModalPageRoutingModule {}
