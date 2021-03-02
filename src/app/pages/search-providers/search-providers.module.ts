import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchProvidersPageRoutingModule } from './search-providers-routing.module';

import { SearchProvidersPage } from './search-providers.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    SearchProvidersPageRoutingModule
  ],
  declarations: [SearchProvidersPage]
})
export class SearchProvidersPageModule {}
