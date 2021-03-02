import { ThemeService } from "./../../services/theme.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { HowItWorksService } from "src/app/services/how-it-works.service";
import { GuaranteeService } from "src/app/services/guarantee.service";
import { NgForm } from "@angular/forms";
import { Guarantee } from "src/app/models/guarantee";
import { HowItWork } from "src/app/models/howItWork";
import { About } from "src/app/models/about";
import { AboutService } from "src/app/services/about.service";

@Component({
  selector: "app-admin-templates",
  templateUrl: "./admin-templates.page.html",
  styleUrls: ["./admin-templates.page.scss"],
})
export class AdminTemplatesPage implements OnInit {
  allGuarantees: Guarantee[];
  allAbouts: About[];

  allHowItWorks: HowItWork[];

  about: About = {
    id: null,
    content: "",
  };

  registerHiw = {
    _id: null,
    content: "",
  };

  registerGuarantee = {
    _id: null,
    content: "",
  };
  moreAbout: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  //color palette
  themes = {
    one: {
      primary: "#2e294e",
      secondary: "#387d7a",
      tertiary: "#fdfffc",
      success: "#1A936F",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    two: {
      primary: "#FCDE9C",
      secondary: "#E07A5F",
      tertiary: "#3D405B",
      success: "#81B29A",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    three: {
      primary: "#e07a5f",
      secondary: "#4CE0B3",
      tertiary: "#96C3CE",
      success: "#80CFA9",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    four: {
      primary: "#453750",
      secondary: "#a393bf",
      tertiary: "#9882AC",
      success: "#73648A",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    five: {
      primary: "#61988e",
      secondary: "#493843",
      tertiary: "#A0B2A6",
      success: "#CBBFBB",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#493843",
      light: "#f4f5f8",
    },
    six: {
      primary: "#39BFBD",
      secondary: "#EBBAB9",
      tertiary: "#C9C5BA",
      success: "#97B1A6",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
    seven: {
      primary: "#39BFBD",
      secondary: "#FCDE9C",
      tertiary: "#FFA552",
      success: "#BA5624",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#381D2A",
      light: "#f4f5f8",
    },

    default: {
      primary: "#156535",
      secondary: "#f5f5f5",
      tertiary: "#effaf9",
      success: "#279156",
      warning: "#ffc409",
      danger: "#eb445a",
      dark: "#222428",
      medium: "#989aa2",
      light: "#f4f5f8",
    },
  };

  constructor(
    private storage: Storage,
    private router: Router,
    private themeService: ThemeService,
    public howItWorksService: HowItWorksService,
    public guaranteeService: GuaranteeService,
    private aboutService: AboutService
  ) {}

  ngOnInit() {
    this.setTheValue();
    this.getTheValue();
    this.getAllHowItWorks();
    this.getAllGuarantees();
    this.getAbout(1);
  }

  setTheValue() {
    this.storage.set("name", "ironman");
  }

  getTheValue() {
    this.storage.get("name").then((val) => {
      console.log("value is " + val);
    });
  }

  oneTheme() {
    this.themeService.setTheme(this.themes.one);
  }

  twoTheme() {
    this.themeService.setTheme(this.themes.two);
  }

  threeTheme() {
    this.themeService.setTheme(this.themes.three);
  }
  fourTheme() {
    this.themeService.setTheme(this.themes.four);
  }

  fiveTheme() {
    this.themeService.setTheme(this.themes.five);
  }

  sixTheme() {
    this.themeService.setTheme(this.themes.six);
  }
  sevenTheme() {
    this.themeService.setTheme(this.themes.seven);
  }

  defaultTheme() {
    this.themeService.setTheme(this.themes.default);
  }

  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.howItWorksService.selectedHiw = {
      _id: null,
      content: "",
    };
  }

  //crud functions

  getAbout(id: number) {
    this.aboutService.getAboutById(id).subscribe((data: About) => {
      this.about = data;
    });
  }
  deleteHiw(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.howItWorksService.deleteHiw(_id).subscribe((res) => {
        this.getAllHowItWorks();
      });
    }
  }

  createHowItWork(form: NgForm) {
    this.howItWorksService.postHiw(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getAllHowItWorks();
    });
  }

  deleteGuarantee(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.guaranteeService.deleteGuarantee(_id).subscribe((res) => {
        this.getAllGuarantees();
      });
    }
  }

  createGuarantee(form: NgForm) {
    this.guaranteeService.postGuarantee(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getAllGuarantees();
    });
  }

  getAllHowItWorks() {
    this.howItWorksService.getAllHowItWorks().subscribe(
      (res) => {
        this.allHowItWorks = res;
      },
      (err) => console.log(err)
    );
  }

  getAllGuarantees() {
    this.guaranteeService.getAllGuarantees().subscribe(
      (res) => {
        this.allGuarantees = res;
      },
      (err) => console.log(err)
    );
  }

  createAndUpdateAbout(about: About) {
    console.log(about);
    if (about.id != null) {
      console.log("update");
      this.updateAbout(about);
    } else {
      console.log("create");
      this.createAbout(about);
    }
    //this.aboutService.updateAbout(about).subscribe();
  }

  createAbout(about: About) {
    this.aboutService.createAbout(about).subscribe();
  }

  updateAbout(about: About) {
    this.aboutService.updateAbout(about).subscribe();
  }

  //header and footer functions

  statsClicked(): void {
    this.router.navigate(["/admin-stats"]);
  }
  homeClicked(): void {
    this.router.navigate(["/admin-home"]);
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
