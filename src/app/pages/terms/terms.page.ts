import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.page.html",
  styleUrls: ["./terms.page.scss"],
})
export class TermsPage implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  //back to previous page
  backClicked() {
    this.location.back();
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
