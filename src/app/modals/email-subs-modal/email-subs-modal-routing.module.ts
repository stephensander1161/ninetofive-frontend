import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailSubsModalPage } from './email-subs-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EmailSubsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailSubsModalPageRoutingModule {}
