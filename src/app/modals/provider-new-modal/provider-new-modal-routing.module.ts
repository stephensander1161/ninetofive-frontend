import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderNewModalPage } from './provider-new-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderNewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderNewModalPageRoutingModule {}
