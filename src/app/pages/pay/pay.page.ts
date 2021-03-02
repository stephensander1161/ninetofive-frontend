import { User } from "./../../models/user";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProviderService } from "src/app/services/provider.service";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.page.html",
  styleUrls: ["./pay.page.scss"],
})
export class PayPage implements OnInit {
  seekerPayForm: FormGroup;
  allProviders: User[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private providerService: ProviderService
  ) {
    this.seekerPayForm = this.fb.group({
      fullName: [""],
      email: [""],
      address: [""],
      city: [""],
      province: [""],
      postalCode: [""],
      promoCode: [""],
      nameOnCard: [""],
      cardNumber: [""],
      expMonth: [""],
      expYear: [""],
      cvv: [""],
    });
  }

  ngOnInit() {
    this.getAllProviders();
  }

  //crud functions
  getAllProviders() {
    this.providerService.getAllProviders().subscribe(
      (res) => {
        this.allProviders = res;
      },
      (err) => console.log(err)
    );
  }

  continueClicked(): void {
    this.router.navigate(["/post-job"]);
  }

  confirmClicked() {
    alert("Thanks! You will be redirected shortly");
    this.router.navigate(["/provider-home"]);
  }

  logForm() {
    console.log(this.seekerPayForm.value);
  }

  //header and footer functions

  openTerms() {
    this.router.navigate(["/terms"]);
  }

  openFaq() {
    this.router.navigate(["/faq"]);
  }

  openContactUs() {
    this.router.navigate(["/contact-us"]);
  }

  openJob() {
    this.router.navigate(["/post-job"]);
  }
}
