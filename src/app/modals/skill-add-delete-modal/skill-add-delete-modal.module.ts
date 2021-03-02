import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillAddDeleteModalPageRoutingModule } from './skill-add-delete-modal-routing.module';

import { SkillAddDeleteModalPage } from './skill-add-delete-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillAddDeleteModalPageRoutingModule
  ],
  declarations: [SkillAddDeleteModalPage]
})
export class SkillAddDeleteModalPageModule {}
