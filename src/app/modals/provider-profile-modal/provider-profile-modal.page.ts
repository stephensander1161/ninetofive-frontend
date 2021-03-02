import { Component, OnInit } from "@angular/core";
import { ReviewService } from "src/app/services/review.service";
import { Review } from "src/app/models/review";

@Component({
  selector: "app-provider-profile-modal",
  templateUrl: "./provider-profile-modal.page.html",
  styleUrls: ["./provider-profile-modal.page.scss"],
})
export class ProviderProfileModalPage implements OnInit {
  allReviews: Review;

  constructor(private reviewService: ReviewService) {}

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
