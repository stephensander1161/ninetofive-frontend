import { SubSkillService } from "src/app/services/sub-skill.service";
import { SkillService } from "src/app/services/skill.service";
import { ProviderService } from "src/app/services/provider.service";
import { JobService } from "src/app/services/job.service";
import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";
import { User } from "src/app/models/user";
import { Job } from "src/app/models/job";
import { SeekerService } from "src/app/services/seeker.service";
import { Skill } from "src/app/models/skill";
import { SubSkill } from "src/app/models/subSkill";

@Component({
  selector: "app-job-details-modal",
  templateUrl: "./job-details-modal.page.html",
  styleUrls: ["./job-details-modal.page.scss"],
})
export class JobDetailsModalPage implements OnInit {
  passedId = null;
  passedSeekerId = null;
  passedProviderId = null;
  passedType = null;
  passedSubType = null;
  passedCity = null;
  passedDate = null;
  passedCompleted = null;

  currentJob: Job;

  allSeekers: User[];
  allProviders: User[];
  allSkills: Skill[];
  allSubSkills: SubSkill[];

  constructor(
    private navParams: NavParams,
    private jobService: JobService,
    private seekerService: SeekerService,
    private providerService: ProviderService,
    private skillService: SkillService,
    private subSkillService: SubSkillService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllSeekers();
    this.getAllProviders();
    this.getAllSkills();
    this.getAllSubSkills();

    this.passedId = this.navParams.get("_id");

    this.jobService.getJobById(this.passedId).subscribe(
      (res) => {
        this.currentJob = res;
      },
      (err) => console.log(err)
    );
  }

  //modal functions
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  //

  getAllSeekers() {
    this.seekerService.getNewSeekers().subscribe(
      (res) => {
        this.allSeekers = res;
      },
      (err) => console.log(err)
    );
  }

  getAllProviders() {
    this.providerService.getAllProviders().subscribe(
      (res) => {
        this.allProviders = res;
      },
      (err) => console.log(err)
    );
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.allSkills = res;
      },
      (err) => console.log(err)
    );
  }

  getAllSubSkills() {
    this.subSkillService.getAllSubSkills().subscribe(
      (res) => {
        this.allSubSkills = res;
      },
      (err) => console.log(err)
    );
  }
}
