import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactProviderPageRoutingModule } from './contact-provider-routing.module';

import { ContactProviderPage } from './contact-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactProviderPageRoutingModule
  ],
  declarations: [ContactProviderPage]
})
export class ContactProviderPageModule {}
