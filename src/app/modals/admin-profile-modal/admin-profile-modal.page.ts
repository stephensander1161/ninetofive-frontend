import { Component, OnInit } from "@angular/core";
import { Review } from "src/app/models/review";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ReviewService } from "src/app/services/review.service";

@Component({
  selector: "app-admin-profile-modal",
  templateUrl: "./admin-profile-modal.page.html",
  styleUrls: ["./admin-profile-modal.page.scss"],
})
export class AdminProfileModalPage implements OnInit {
  allReviews: Review;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.getAllReviews();
  }

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      (res) => {
        this.allReviews = res;
      },
      (err) => console.log(err)
    );
  }
}
