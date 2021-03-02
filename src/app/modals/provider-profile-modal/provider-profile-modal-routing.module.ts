import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderProfileModalPage } from './provider-profile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderProfileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderProfileModalPageRoutingModule {}
