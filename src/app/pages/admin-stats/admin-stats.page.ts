import { SubSkillService } from "./../../services/sub-skill.service";
import { SeekerStatsModalPage } from "./../../modals/seeker-stats-modal/seeker-stats-modal.page";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Seeker } from "src/app/models/seeker";
import { ModalController } from "@ionic/angular";
import { Skill } from "src/app/models/skill";
import { SubSkill } from "src/app/models/subSkill";
import { User } from "src/app/models/user";
import { SkillService } from "src/app/services/skill.service";
import { ProviderService } from "src/app/services/provider.service";
import { ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import * as Chart from "chart.js";

@Component({
  selector: "app-admin-stats",
  templateUrl: "./admin-stats.page.html",
  styleUrls: ["./admin-stats.page.scss"],
})
export class AdminStatsPage implements OnInit {
  allProviders: User[];

  newSeekers: Seeker[];
  ytd;
  month;
  week;
  day;

  allSkills: Skill[];

  allSubSkills: SubSkill[];

  /////chart data/////

  //seeker stats
  chartData: ChartDataSets[] = [
    {
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,

      data: [30, 57, 63, 19, 43, 78, 87, 88, 99],

      label: "This Week",
    },
    {
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,

      data: [45, 50, 60, 100, 43, 78, 87, 88, 99],

      label: "This Month",
    },
    {
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,

      data: [20, 20, 50, 70, 30, 56, 65, 76, 87],

      label: "This Year",
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
  chartType = "bar";
  showLegend = true;

  //9ineTo5iver chart
  providerChartData: ChartDataSets[] = [
    {
      data: [30, 57, 63, 19, 43, 78, 87, 88, 99],

      label: "This Week",
    },
    {
      data: [45, 50, 60, 100, 43, 78, 87, 88, 99],

      label: "This Month",
    },
    {
      data: [20, 20, 50, 70, 30, 56, 65, 76, 87],

      label: "This Year",
    },
  ];
  providerChartLabels: Label[];

  providerChartOptions = {
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
  providerChartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#187625",
    },
  ];
  providerChartType = "bar";
  providerChartshowLegend = true;

  //tasks chart
  taskChartData: ChartDataSets[] = [
    {
      data: [30, 57, 63, 19, 43, 78, 87, 88, 99],

      label: "This Week",
    },
    {
      data: [45, 50, 60, 100, 43, 78, 87, 88, 99],

      label: "This Month",
    },
    {
      data: [20, 20, 50, 70, 30, 56, 65, 76, 87],

      label: "This Year",
    },
  ];
  taskChartLabels: Label[];

  taskChartOptions = {
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
  taskChartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#187625",
    },
  ];
  taskChartType = "bar";
  taskChartshowLegend = true;

  //earnings chart
  earningsChartData: ChartDataSets[] = [
    {
      data: [30, 57, 63, 19, 43, 78, 87, 88, 99],

      label: "This Week",
    },
    {
      data: [45, 50, 60, 100, 43, 78, 87, 88, 99],

      label: "This Month",
    },
    {
      data: [20, 20, 50, 70, 30, 56, 65, 76, 87],

      label: "This Year",
    },
  ];
  earningsChartLabels: Label[];

  earningsChartOptions = {
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
  earningsChartColors: Color[] = [
    {
      borderColor: "#000000",
      backgroundColor: "#187625",
    },
  ];
  earningsChartType = "bar";
  earningsChartshowLegend = true;

  constructor(
    private router: Router,
    private providerService: ProviderService,

    private skillService: SkillService,
    private subSkillService: SubSkillService,

    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllSkills();
    this.getAllSubSkills();
    this.getAllProviders();
  }

  async seekerYTDModalClicked() {
    const modal = await this.modalController.create({
      component: SeekerStatsModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async nineToFiverYTDModalClicked() {
    const modal = await this.modalController.create({
      component: SeekerStatsModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async tasksYTDModalClicked() {
    const modal = await this.modalController.create({
      component: SeekerStatsModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  subSkillsClicked() {
    this.router.navigate(["/admin-services"]);
  }

  skillsClicked() {
    this.router.navigate(["/admin-services"]);
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

  getAllProviders() {
    this.providerService.getNewProviders().subscribe(
      (res) => {
        this.allProviders = res;
      },
      (err) => console.log(err)
    );
  }

  seekersClicked(): void {
    this.router.navigate(["/admin-users"]);
  }
  nineToFiversClicked() {
    this.router.navigate(["/admin-users"]);
  }

  tasksClicked() {
    this.router.navigate(["/admin-services"]);
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
