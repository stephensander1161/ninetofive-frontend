import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactProviderPage } from './contact-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ContactProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactProviderPageRoutingModule {}
