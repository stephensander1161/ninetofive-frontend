import { Subscriber } from "./../../models/subscriber";
import { ReviewService } from "./../../services/review.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Review } from "src/app/models/review";
import { ModalController } from "@ionic/angular";
import { ReviewNewModalPage } from "src/app/modals/review-new-modal/review-new-modal.page";
import { NgForm } from "@angular/forms";
import { AdminProfileModalPage } from "src/app/modals/admin-profile-modal/admin-profile-modal.page";
import { SubscriberService } from "src/app/services/subscriber.service";
import { EmailSubsModalPage } from "src/app/modals/email-subs-modal/email-subs-modal.page";

@Component({
  selector: "app-admin-outreach",
  templateUrl: "./admin-outreach.page.html",
  styleUrls: ["./admin-outreach.page.scss"],
})
export class AdminOutreachPage implements OnInit {
  allReviews: Review;
  allSubs: Subscriber;

  registerSub = {
    _id: null,
    email: "",
  };

  constructor(
    public modalController: ModalController,
    private router: Router,
    private reviewService: ReviewService,
    public subService: SubscriberService
  ) {}

  ngOnInit() {
    this.getAllReviews();
    this.getAllSubs();
  }

  //modals
  async newReviewModal() {
    const modal = await this.modalController.create({
      component: ReviewNewModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
  //modals
  async emailSubsModal() {
    const modal = await this.modalController.create({
      component: EmailSubsModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  refresh() {
    this.getAllReviews();
  }

  //form functions

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.subService.selectedSub = {
      _id: null,
      email: "",
    };
  }

  //crud functions

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      (res) => {
        this.allReviews = res;
      },
      (err) => console.log(err)
    );
  }

  getAllSubs() {
    this.reviewService.getAllSubs().subscribe(
      (res) => {
        this.allSubs = res;
      },
      (err) => console.log(err)
    );
  }

  createSubscriber(form: NgForm) {
    this.reviewService.postSub(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getAllSubs();
    });
  }

  async seeProfileModal() {
    const modal = await this.modalController.create({
      component: AdminProfileModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  deleteReview(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.reviewService.deleteReview(_id).subscribe((res) => {
        this.getAllReviews();
      });
    }
  }

  deleteSubscriber(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.reviewService.deleteSub(_id).subscribe((res) => {
        this.getAllSubs();
      });
    }
  }

  //header and footer functions

  statsClicked(): void {
    this.router.navigate(["/admin-stats"]);
  }
  homeClicked(): void {
    this.router.navigate(["/admin-home"]);
  }
  usersClicked(): void {
    this.router.navigate(["/admin-users"]);
  }

  servicesClicked(): void {
    this.router.navigate(["/admin-services"]);
  }

  paymentClicked(): void {
    this.router.navigate(["/admin-payment"]);
  }

  templatesClicked(): void {
    this.router.navigate(["/admin-templates"]);
  }

  outreachClicked(): void {
    this.router.navigate(["/admin-outreach"]);
  }

  faqClicked() {
    this.router.navigate(["/faq"]);
  }

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
