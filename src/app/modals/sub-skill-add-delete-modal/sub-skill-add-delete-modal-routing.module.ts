import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubSkillAddDeleteModalPage } from './sub-skill-add-delete-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SubSkillAddDeleteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubSkillAddDeleteModalPageRoutingModule {}
