import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.page.html",
  styleUrls: ["./testimonials.page.scss"],
})
export class TestimonialsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  //header andf footer functions
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
