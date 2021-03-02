import { Component, OnInit } from "@angular/core";
import { JobService } from "src/app/services/job.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { Skill } from "src/app/models/skill";
import { SubSkill } from "src/app/models/subSkill";
import { SeekerService } from "src/app/services/seeker.service";
import { ProviderService } from "src/app/services/provider.service";
import { SkillService } from "src/app/services/skill.service";
import { SubSkillService } from "src/app/services/sub-skill.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-job-new-modal",
  templateUrl: "./job-new-modal.page.html",
  styleUrls: ["./job-new-modal.page.scss"],
})
export class JobNewModalPage implements OnInit {
  allSeekers: User[];
  allProviders: User[];
  allSkills: Skill[];
  allSubSkills: SubSkill[];

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

  constructor(
    public jobService: JobService,
    private router: Router,
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
  }
  //modal functions
  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  //crud functions

  postJob() {
    this.jobService.postJob(this.registerJobData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/admin-services"]);
      },
      (err) => console.log(err)
    );
  }

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
