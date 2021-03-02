import { Router } from "@angular/router";
import { JobService } from "./../../services/job.service";
import { Component, OnInit } from "@angular/core";
import { Job } from "src/app/models/job";

@Component({
  selector: "app-search-jobs",
  templateUrl: "./search-jobs.page.html",
  styleUrls: ["./search-jobs.page.scss"],
  providers: [JobService],
})
export class SearchJobsPage implements OnInit {
  allJobs: Job[];

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit() {
    this.getAllJobs();
  }
  //crud functions
  getAllJobs() {
    this.jobService.getAllJobs().subscribe((data: Job[]) => {
      this.allJobs = data;
    });
  }

  //header and footer functions
  claim() {
    console.log("claimed");
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
