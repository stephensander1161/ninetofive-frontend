import { FaqService } from "./../../services/faq.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Faq } from "src/app/models/faq";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.page.html",
  styleUrls: ["./contact-us.page.scss"],
})
export class ContactUsPage implements OnInit {
  currentDate = new Date();

  constructor(private router: Router, public faqService: FaqService) {}

  ngOnInit() {}

  //crud functions
  createFaq(faq: Faq) {
    this.faqService.createFaq(faq).subscribe();
    this.router.navigate(["/welcome"]);
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
