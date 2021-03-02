import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { IonSlides } from "@ionic/angular";
import { ViewChild } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.page.html",
  styleUrls: ["./gallery.page.scss"],
})
export class GalleryPage implements OnInit {
  @ViewChild("slides") slides: IonSlides;

  constructor(private router: Router) {}

  ngOnInit() {}

  //slideshow buttons
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  //header and footer functions
  openFaq() {
    this.router.navigate(["/faq"]);
  }

  openTerms() {
    this.router.navigate(["/terms"]);
  }

  openContactUs() {
    this.router.navigate(["/contact-us"]);
  }

  openJob() {
    this.router.navigate(["/post-job"]);
  }
}
