import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubSkillAddDeleteModalPageRoutingModule } from './sub-skill-add-delete-modal-routing.module';

import { SubSkillAddDeleteModalPage } from './sub-skill-add-delete-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubSkillAddDeleteModalPageRoutingModule
  ],
  declarations: [SubSkillAddDeleteModalPage]
})
export class SubSkillAddDeleteModalPageModule {}
