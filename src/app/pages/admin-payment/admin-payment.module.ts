import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPaymentPageRoutingModule } from "./admin-payment-routing.module";
import { ChartsModule } from "ng2-charts";

import { AdminPaymentPage } from "./admin-payment.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPaymentPageRoutingModule,
    ChartsModule,
  ],
  declarations: [AdminPaymentPage],
})
export class AdminPaymentPageModule {}
