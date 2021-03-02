import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobDetailsModalPage } from './job-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: JobDetailsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobDetailsModalPageRoutingModule {}
