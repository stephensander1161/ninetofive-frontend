import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminOutreachPage } from './admin-outreach.page';

const routes: Routes = [
  {
    path: '',
    component: AdminOutreachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminOutreachPageRoutingModule {}
