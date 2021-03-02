import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchJobsPageRoutingModule } from './search-jobs-routing.module';

import { SearchJobsPage } from './search-jobs.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    SearchJobsPageRoutingModule
  ],
  declarations: [SearchJobsPage]
})
export class SearchJobsPageModule {}
