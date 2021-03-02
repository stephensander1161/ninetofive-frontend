import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { SeekerService } from "src/app/services/seeker.service";
import { ProviderService } from "src/app/services/provider.service";
import { Seeker } from "src/app/models/seeker";
import { Provider } from "src/app/models/provider";
import { Skill } from "src/app/models/skill";
import { SkillService } from "src/app/services/skill.service";
import { ModalController } from "@ionic/angular";
import { SkillReportModalPage } from "src/app/modals/skill-report-modal/skill-report-modal.page";
import { Promo } from "src/app/models/promo";
import { PromoService } from "src/app/services/promo.service";
import { NgForm } from "@angular/forms";
import { ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";

@Component({
  selector: "app-admin-payment",
  templateUrl: "./admin-payment.page.html",
  styleUrls: ["./admin-payment.page.scss"],
})
export class AdminPaymentPage implements OnInit {
  allSeekers: User[];
  allProviders: User[];
  provider: Provider;
  seekerSelected: Seeker;
  allSkills: Skill[];
  allPromos: Promo[];

  registerPromoData = {
    _id: null,
    name: "",
    amount: null,
    type: "",
    active: null,
  };

  constructor(
    private router: Router,
    private seekerService: SeekerService,
    private providerService: ProviderService,
    private promoService: PromoService,
    private skillService: SkillService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllSeekers();
    this.getAllProviders();
    this.getAllSkills();
    this.getAllPromos();
  }

  /////chart data/////

  //seeker stats
  chartData: ChartDataSets[] = [
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

  //modal functions
  async skillReportModalClicked() {
    const modal = await this.modalController.create({
      component: SkillReportModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  //form functions

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.skillService.selectedSkill = {
      _id: null,
      name: "",
    };
  }

  //crud functions
  getAllSeekers() {
    this.seekerService.getNewSeekers().subscribe(
      (res) => {
        this.allSeekers = res;
      },
      (err) => console.log(err)
    );
  }

  getAllPromos() {
    this.promoService.getAllPromos().subscribe(
      (res) => {
        this.allPromos = res;
      },
      (err) => console.log(err)
    );
  }

  createPromo(form: NgForm) {
    this.promoService.createPromo(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getAllPromos();
    });
  }

  deletePromo(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.promoService.deletePromo(_id).subscribe((res) => {
        this.getAllPromos();
        this.resetForm(form);
      });
    }
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.allSkills = res;
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
