import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobDetailsModalPageRoutingModule } from './job-details-modal-routing.module';

import { JobDetailsModalPage } from './job-details-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobDetailsModalPageRoutingModule
  ],
  declarations: [JobDetailsModalPage]
})
export class JobDetailsModalPageModule {}
