import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact-provider",
  templateUrl: "./contact-provider.page.html",
  styleUrls: ["./contact-provider.page.scss"],
})
export class ContactProviderPage implements OnInit {
  contactProviderForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactProviderForm = this.fb.group({
      name: [""],
      email: [""],
      comment: [""],
    });
  }

  ngOnInit() {}

  //crud functions

  logForm() {
    console.log(this.contactProviderForm.value);
    this.router.navigate(["/home"]);
    alert("Thank You! Your Message Has Been Sent.");
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
