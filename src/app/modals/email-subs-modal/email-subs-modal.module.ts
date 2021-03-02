import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { EmailSubsModalPageRoutingModule } from "./email-subs-modal-routing.module";

import { EmailSubsModalPage } from "./email-subs-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EmailSubsModalPageRoutingModule,
  ],
  declarations: [EmailSubsModalPage],
})
export class EmailSubsModalPageModule {}
