import { Time } from "@angular/common";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public _welcomeClicked = false;
  currentTime = new Date();

  public selectedIndex = 0;
  public appPages = [
    {
      title: "Test",
      url: "/landing",
      icon: "grid",
    },
    {
      title: "Welcome",
      url: "/welcome",
      icon: "grid",
    },

    {
      title: "Login",
      url: "/login",
      icon: "people-circle",
    },

    {
      title: "Signup",
      url: "signup",
      icon: "archive",
    },

    {
      title: "Gallery",
      url: "/gallery",
      icon: "tv",
    },

    {
      title: "Search Providers",
      url: "/search-providers",
      icon: "briefcase",
    },
    {
      title: "Contact Us",
      url: "/contact-us",
      icon: "earth",
    },
  ];
  public homePage = [
    {
      title: "Home Page",
      url: "/home",
      icon: "albums",
    },
  ];

  public adminPages = [
    {
      title: "Admin Home",
      url: "/admin-home",
      icon: "albums",
    },

    {
      title: "Site Statistics",
      url: "/admin-stats",
      icon: "analytics",
    },

    {
      title: "Users",
      url: "/admin-users",
      icon: "at",
    },

    {
      title: "Services",
      url: "/admin-services",
      icon: "magnet",
    },

    {
      title: "Outreach",
      url: "/admin-outreach",
      icon: "leaf",
    },
    {
      title: "Payment",
      url: "/admin-payment",
      icon: "cash",
    },

    {
      title: "Templates",
      url: "/admin-templates",
      icon: "images",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public _authService: AuthService
  ) {
    this.initializeApp();
  }

  ngOnInit() {}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  postJobClicked() {
    this.router.navigate(["/post-job"]);
  }

  buildClicked(): void {
    this.router.navigate(["/post-job"]);
  }
  welcomeClicked() {
    this.router.navigate(["/welcome"]);
  }

  signupClicked() {
    this.router.navigate(["signup"]);
  }

  contactUsClicked() {
    this.router.navigate(["/contact-us"]);
  }

  homeClicked() {
    this.router.navigate(["/home"]);
  }

  adminDashboardClicked() {
    this.router.navigate(["/admin-home"]);
  }

  loginClicked() {
    this.router.navigate(["/login"]);
  }

  titleClicked() {
    this.router.navigate(["/welcome"]);
  }
}
