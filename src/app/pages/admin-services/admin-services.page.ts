import { JobDetailsModalPage } from "./../../modals/job-details-modal/job-details-modal.page";
import { JobService } from "src/app/services/job.service";
import { JobNewModalPage } from "./../../modals/job-new-modal/job-new-modal.page";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SkillService } from "src/app/services/skill.service";
import { SubSkillService } from "src/app/services/sub-skill.service";
import { Skill } from "src/app/models/skill";
import { SubSkill } from "src/app/models/subSkill";
import { ModalController, NavController } from "@ionic/angular";
import { SkillAddDeleteModalPage } from "src/app/modals/skill-add-delete-modal/skill-add-delete-modal.page";
import { SubSkillAddDeleteModalPage } from "src/app/modals/sub-skill-add-delete-modal/sub-skill-add-delete-modal.page";
import { Job } from "src/app/models/job";

@Component({
  selector: "app-admin-services",
  templateUrl: "./admin-services.page.html",
  styleUrls: ["./admin-services.page.scss"],
})
export class AdminServicesPage implements OnInit {
  allSkills: Skill[];
  allJobs: Job[];

  allSubSkills: SubSkill[];
  constructor(
    private router: Router,
    private skillService: SkillService,
    private jobService: JobService,
    private subSkillService: SubSkillService,
    public modalController: ModalController,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.getAllSkills();
    this.getAllSubSkills();
    this.getAllJobs();
  }
  //refresh button
  refresh() {
    this.getAllJobs();
  }
  //modal functions

  async editSkillModalClicked() {
    const modal = await this.modalController.create({
      component: SkillAddDeleteModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async editSubSkillModalClicked() {
    const modal = await this.modalController.create({
      component: SubSkillAddDeleteModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async editJobModal() {
    const modal = await this.modalController.create({
      component: JobDetailsModalPage,
      componentProps: {
        _id: 2,
      },
    });
    modal.present();
  }

  async newJobModal() {
    const modal = await this.modalController.create({
      component: JobNewModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
  //form functions

  //crud functions

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.allSkills = res;
      },
      (err) => console.log(err)
    );
  }

  getAllJobs() {
    this.jobService.getAllJobs().subscribe(
      (res) => {
        this.allJobs = res;
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

  //header and footer functions

  homeClicked(): void {
    this.router.navigate(["/admin-home"]);
  }

  statsClicked(): void {
    this.router.navigate(["/admin-stats"]);
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
