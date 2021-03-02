import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobNewModalPage } from './job-new-modal.page';

const routes: Routes = [
  {
    path: '',
    component: JobNewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobNewModalPageRoutingModule {}
