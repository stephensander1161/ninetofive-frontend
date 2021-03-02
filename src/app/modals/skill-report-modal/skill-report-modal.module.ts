import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillReportModalPageRoutingModule } from './skill-report-modal-routing.module';

import { SkillReportModalPage } from './skill-report-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillReportModalPageRoutingModule
  ],
  declarations: [SkillReportModalPage]
})
export class SkillReportModalPageModule {}
