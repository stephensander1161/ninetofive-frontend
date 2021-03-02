import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeekerStatsModalPageRoutingModule } from './seeker-stats-modal-routing.module';

import { SeekerStatsModalPage } from './seeker-stats-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeekerStatsModalPageRoutingModule
  ],
  declarations: [SeekerStatsModalPage]
})
export class SeekerStatsModalPageModule {}
