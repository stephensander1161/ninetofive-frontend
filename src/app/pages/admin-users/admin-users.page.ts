import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { ModalController } from "@ionic/angular";
import { SeekerNewModalPage } from "src/app/modals/seeker-new-modal/seeker-new-modal.page";
import { ProviderNewModalPage } from "src/app/modals/provider-new-modal/provider-new-modal.page";
import { ProviderService } from "src/app/services/provider.service";
import { SeekerService } from "src/app/services/seeker.service";
import { AdminService } from "src/app/services/admin.service";
import { AdminProfileModalPage } from "src/app/modals/admin-profile-modal/admin-profile-modal.page";

@Component({
  selector: "app-admin-users",
  templateUrl: "./admin-users.page.html",
  styleUrls: ["./admin-users.page.scss"],
})
export class AdminUsersPage implements OnInit {
  allSeekers: User[];
  allProviders: User[];
  allAdmins: User[];

  slideOpts = {
    autoplay: true,
    loop: true,
  };

  constructor(
    private router: Router,
    private providerService: ProviderService,
    private seekerService: SeekerService,
    private adminService: AdminService,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllSeekers();
    this.getAllProviders();
    this.getAllAdmins();
  }
  //refresh button
  refresh() {
    this.getAllSeekers();
    this.getAllProviders();
    this.getAllAdmins();
  }
  //modals
  async newSeekerModal() {
    const modal = await this.modalController.create({
      component: SeekerNewModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async seeProfileModal() {
    const modal = await this.modalController.create({
      component: AdminProfileModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  async newProviderModal() {
    const modal = await this.modalController.create({
      component: ProviderNewModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
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

  getAllProviders() {
    this.providerService.getNewProviders().subscribe(
      (res) => {
        this.allProviders = res;
      },
      (err) => console.log(err)
    );
  }

  getAllAdmins() {
    this.adminService.getNewAdmins().subscribe(
      (res) => {
        this.allAdmins = res;
      },
      (err) => console.log(err)
    );
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
