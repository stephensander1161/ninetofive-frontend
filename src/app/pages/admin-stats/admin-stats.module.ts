import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminStatsPageRoutingModule } from "./admin-stats-routing.module";

import { AdminStatsPage } from "./admin-stats.page";
import { ChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminStatsPageRoutingModule,
    ChartsModule,
  ],
  declarations: [AdminStatsPage],
})
export class AdminStatsPageModule {}
