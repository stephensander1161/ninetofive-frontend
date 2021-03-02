import { UserService } from "src/app/services/user.service";
import { SubSkillService } from "./../../services/sub-skill.service";
import { Subscriber } from "./../../models/subscriber";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Seeker } from "src/app/models/seeker";
import { User } from "src/app/models/user";
import { Provider } from "src/app/models/provider";
import { SeekerService } from "src/app/services/seeker.service";
import { ProviderService } from "src/app/services/provider.service";
import { AdminService } from "src/app/services/admin.service";
import { ReviewService } from "src/app/services/review.service";
import { EmailSubsModalPage } from "src/app/modals/email-subs-modal/email-subs-modal.page";
import { ModalController } from "@ionic/angular";
import { SkillReportModalPage } from "src/app/modals/skill-report-modal/skill-report-modal.page";
import { Skill } from "src/app/models/skill";
import { SkillService } from "src/app/services/skill.service";
import { SubSkill } from "src/app/models/subSkill";
import { ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";

@Component({
  selector: "app-admin-home",
  templateUrl: "./admin-home.page.html",
  styleUrls: ["./admin-home.page.scss"],
})
export class AdminHomePage implements OnInit {
  chartData: ChartDataSets[] = [
    {
      data: [30, 57, 63, 19, 43, 78, 87, 88, 99],

      label: "New Users This Week",
    },
    {
      data: [45, 50, 60, 100, 43, 78, 87, 88, 99],

      label: "Earnings",
    },
    {
      data: [20, 20, 50, 70, 30, 56, 65, 76, 87],

      label: "New Jobs This Week",
    },
  ];
  chartLabels: Label[];

  chartOptions = {
    responsive: true,

    title: {
      display: true,
      text: "Data Quick Look",
    },
    pan: {
      enabled: "true",
      mode: "xy",
    },
    zoom: {
      enabled: true,
      mode: "xy",
    },
  };
  chartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#187625",
    },
  ];
  chartType = "line";
  showLegend = false;

  newSeekers: Seeker[];
  newProviders: Provider[];
  newAdmins: User[];
  newUsers: User[];

  allSubs: Subscriber;
  allSkills: Skill[];
  allSubSkills: SubSkill[];

  slideOpts = {
    autoplay: true,
    loop: true,
  };

  constructor(
    private router: Router,
    private seekerService: SeekerService,
    private providerService: ProviderService,
    private adminService: AdminService,
    private reviewService: ReviewService,
    public modalController: ModalController,
    private skillService: SkillService,
    private subSkillService: SubSkillService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.getNewSeekers();
    this.getNewProviders();
    this.getNewAdmins();
    this.getAllSubs();
    this.getAllSkills();
    this.getAllSubSkills();
    this.getNewUsers();
  }

  //modals
  async emailSubsModal() {
    const modal = await this.modalController.create({
      component: EmailSubsModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
  async skillReportModalClicked() {
    const modal = await this.modalController.create({
      component: SkillReportModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  typeChanged(e) {
    const on = e.detail.checked;
    this.chartType = on ? "line" : "bar";
  }

  //crud functions
  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.allSkills = res;
      },
      (err) => console.log(err)
    );
  }

  getNewUsers() {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.newUsers = res;
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

  getNewSeekers() {
    this.seekerService.getNewSeekers().subscribe(
      (res) => {
        this.newSeekers = res;
      },
      (err) => console.log(err)
    );
  }

  getNewProviders() {
    this.providerService.getNewProviders().subscribe(
      (res) => {
        this.newProviders = res;
      },
      (err) => console.log(err)
    );
  }

  getNewAdmins() {
    this.adminService.getNewAdmins().subscribe(
      (res) => {
        this.newAdmins = res;
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
