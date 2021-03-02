import { JobService } from "./../../services/job.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Job } from "src/app/models/job";
import { Material } from "src/app/models/material";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.page.html",
  styleUrls: ["./progress.page.scss"],
  providers: [JobService],
})
export class ProgressPage implements OnInit {
  public jobs = [];
  job: Job;

  taskCompleted: boolean = false;
  materialsAdded1: boolean = false;
  materialsAdded: boolean = false;
  materials: Material[] = [];

  currentDate = new Date();

  registerJobData = {
    id: null,
    seekerId: null,
    providerId: null,
    type: "",
    subType: [""],
    size: "",
    city: "",
    address: "",
    estimate: null,
    description: "",
    priority: "",
    date: "",
    time: "",
    completed: null,
  };

  public listJobs: Job = {
    _id: 10,
    seekerId: 11,
    providerId: 12,
    type: "plumbing",
    subType: "clogs",
    size: "1hr",
    city: "calgary",
    address: "5443 67 street",
    estimate: 100,
    description: "my toilet is backed up",
    priority: "urgent",
    date: "june 24",
    time: "11:00AM",
    completed: false,
  };

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private router: Router,
    private http: HttpClient
  ) {}

  openFaq() {
    this.router.navigate(["/faq"]);
  }

  openContactUs() {
    this.router.navigate(["/contact-us"]);
  }

  openJob() {
    this.router.navigate(["/post-job"]);
  }

  openTerms() {
    this.router.navigate(["/terms"]);
  }

  startClicked() {
    this.taskCompleted = true;
  }

  addClicked() {
    this.materialsAdded1 = true;
  }

  completedClicked() {
    this.materialsAdded = true;
  }

  ngOnInit() {
    this.jobService.getJobs().subscribe((data) => (this.jobs = data.jobs));
  }
}
