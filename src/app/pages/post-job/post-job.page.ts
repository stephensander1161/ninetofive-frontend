import { Router } from "@angular/router";
import { JobService } from "./../../services/job.service";
import { Job } from "./../../models/job";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.page.html",
  styleUrls: ["./post-job.page.scss"],
})
export class PostJobPage implements OnInit {
  job: Job;
  newJob: Job = {
    _id: null,
    seekerId: null,
    providerId: null,
    type: null,
    subType: null,
    size: null,
    city: null,
    address: null,
    estimate: null,
    description: null,
    priority: null,
    date: null,
    time: null,
    completed: null,
  };

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = [
    "s\u00f8n",
    "man",
    "tir",
    "ons",
    "tor",
    "fre",
    "l\u00f8r",
  ];
  customPickerOptions: any;

  typeOptions: any = {
    header: "What Kind of Job is it?",
    subHeader: "Please select one",
    translucent: true,
  };

  subTypeOptions: any = {
    header: "What Sub Categories Can We Include With Your Job?",
    subHeader: "Select All That Apply",
    translucent: true,
  };

  ngOnInit() {}

  constructor(
    private http: HttpClient,
    public jobService: JobService,
    private router: Router
  ) {
    this.customPickerOptions = {
      buttons: [
        {
          text: "Save",
          handler: () => console.log("Clicked Save!"),
        },
        {
          text: "Log",
          handler: () => {
            console.log("Clicked Log. Do not Dismiss.");
            return false;
          },
        },
      ],
    };
  }

  // crud functions
  createJob(job: Job) {
    this.jobService.createJob(job).subscribe();
    this.router.navigate([
      "/search-providers" + "/" + this.jobService.currentJob.type,
    ]);
  }

  //header and footer functions
  submitClicked(): void {
    this.router.navigate(["/search-providers"]);
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
