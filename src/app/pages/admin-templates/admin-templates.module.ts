import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminTemplatesPageRoutingModule } from "./admin-templates-routing.module";

import { AdminTemplatesPage } from "./admin-templates.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTemplatesPageRoutingModule,
  ],
  declarations: [AdminTemplatesPage],
})
export class AdminTemplatesPageModule {}
