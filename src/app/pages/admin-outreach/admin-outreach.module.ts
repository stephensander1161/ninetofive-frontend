import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminOutreachPageRoutingModule } from "./admin-outreach-routing.module";

import { AdminOutreachPage } from "./admin-outreach.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminOutreachPageRoutingModule,
  ],
  declarations: [AdminOutreachPage],
})
export class AdminOutreachPageModule {}
