import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchProvidersPage } from './search-providers.page';

const routes: Routes = [
  {
    path: '',
    component: SearchProvidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchProvidersPageRoutingModule {}
