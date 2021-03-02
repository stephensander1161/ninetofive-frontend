import { ReviewService } from "./../../services/review.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-review-new-modal",
  templateUrl: "./review-new-modal.page.html",
  styleUrls: ["./review-new-modal.page.scss"],
})
export class ReviewNewModalPage implements OnInit {
  registerReviewData = {
    id: null,
    firstName: "",
    lastName: "",
    rating: null,
    type: "",
    content: "",
    dateSubscribed: "",
    lastLogin: "",
  };

  constructor(
    private router: Router,
    public modalController: ModalController,
    public reviewService: ReviewService
  ) {}

  ngOnInit() {}

  //modal functions
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  //crud functions
  postReview() {
    this.reviewService.createProviderReview(this.registerReviewData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/admin-outreach"]);
        this.dismiss();
      },
      (err) => console.log(err)
    );
  }
}
