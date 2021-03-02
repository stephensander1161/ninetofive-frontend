import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillAddDeleteModalPage } from './skill-add-delete-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SkillAddDeleteModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillAddDeleteModalPageRoutingModule {}
