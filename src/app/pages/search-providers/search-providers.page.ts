import { JobService } from "src/app/services/job.service";
import { ProviderService } from "./../../services/provider.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Job } from "src/app/models/job";
import { Provider } from "src/app/models/provider";
import { ModalController } from "@ionic/angular";
import { ProviderProfileModalPage } from "src/app/modals/provider-profile-modal/provider-profile-modal.page";

@Component({
  selector: "app-search-providers",
  templateUrl: "./search-providers.page.html",
  styleUrls: ["./search-providers.page.scss"],
})
export class SearchProvidersPage implements OnInit {
  allProviders: Provider[];
  currentProvider: Provider = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    phoneNumber: null,
    city: "",
    address: "",
    postalCode: "",
    primarySkill: "",
    secondarySkill: "",
    tertiarySkill: "",
    experience: null,
    biography: "",
  };

  constructor(
    private jobService: JobService,
    public providerService: ProviderService,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.getAllProviders();
  }
  //modal functions
  async seeProfileModal() {
    const modal = await this.modalController.create({
      component: ProviderProfileModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }
  //crud functions

  updateJob(job: Job) {
    this.jobService.updateJob(job).subscribe();
  }

  getAllProviders() {
    this.providerService.getAllProviders().subscribe(
      (res) => {
        this.allProviders = res;
      },
      (err) => console.log(err)
    );
  }

  bookClicked(): void {
    this.router.navigate([
      "/contact-provider/" + this.providerService.currentProvider.id,
    ]);
  }

  //header and footer functions

  claim() {
    console.log("claimed");
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
