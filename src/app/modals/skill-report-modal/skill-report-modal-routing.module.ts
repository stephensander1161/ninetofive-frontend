import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillReportModalPage } from './skill-report-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SkillReportModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillReportModalPageRoutingModule {}
