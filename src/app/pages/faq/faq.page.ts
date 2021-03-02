import { FaqService } from "./../../services/faq.service";
import { Faq } from "./../../models/faq";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
  styleUrls: ["./faq.page.scss"],
})
export class FaqPage implements OnInit {
  faqs: Faq[];

  constructor(
    private location: Location,
    private router: Router,
    public faqService: FaqService
  ) {}

  ngOnInit() {
    this.getAllFaqs();
  }

  //crud functions
  getAllFaqs() {
    this.faqService.getAllFaqs().subscribe((data: Faq[]) => {
      this.faqs = data;
    });
  }

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
