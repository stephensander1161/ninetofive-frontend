import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobNewModalPageRoutingModule } from './job-new-modal-routing.module';

import { JobNewModalPage } from './job-new-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobNewModalPageRoutingModule
  ],
  declarations: [JobNewModalPage]
})
export class JobNewModalPageModule {}
