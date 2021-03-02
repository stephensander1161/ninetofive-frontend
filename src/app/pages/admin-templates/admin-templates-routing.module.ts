import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTemplatesPage } from './admin-templates.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTemplatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTemplatesPageRoutingModule {}
