import { GenericProfileModalPage } from "./../../modals/generic-profile-modal/generic-profile-modal.page";
import { JobService } from "src/app/services/job.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Job } from "src/app/models/job";
import { IonSlides, ModalController } from "@ionic/angular";
import { Experience } from "src/app/models/experience";
import { Skill } from "src/app/models/skill";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { SkillService } from "src/app/services/skill.service";
import { SubSkill } from "src/app/models/subSkill";
import { SubSkillService } from "src/app/services/sub-skill.service";
import { SeekerService } from "src/app/services/seeker.service";
import { ProviderService } from "src/app/services/provider.service";
import { ReviewService } from "src/app/services/review.service";
import { Review } from "src/app/models/review";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  allSeekers: User[];
  allProviders: User[];
  allReviews: Review;

  @ViewChild("slides") slides: IonSlides;
  provider: boolean = false;

  registerReviewData = {
    id: null,
    firstName: "",
    lastName: "",
    rating: "",
    type: "",
    content: "",
    dateSubscribed: "",
    lastLogin: "",
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
  allSubSkills: SubSkill[];

  leads: Job[];
  allJobs: Job[];
  userId: User[];
  user: User;
  public myJobs = [];
  public myLeads = [];

  editInformation: boolean = false;

  profile: boolean = true;
  jobs: boolean = false;
  wallet: boolean = false;
  history: boolean = false;
  reviews: boolean = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  galleryOpts = {
    autoplay: true,
    loop: true,
  };

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

  experience: Experience[] = [
    { experienceId: 1, name: "1" },
    { experienceId: 1, name: "1-3" },
    { experienceId: 1, name: "3-5" },
    { experienceId: 1, name: "5-7" },
    { experienceId: 1, name: "7+" },
  ];

  skills: Skill[];

  public rating: number = 0;
  public isHover: boolean = false;

  constructor(
    private router: Router,
    public jobService: JobService,
    public userService: UserService,
    private skillService: SkillService,
    private subSkillService: SubSkillService,
    private seekerService: SeekerService,
    private providerService: ProviderService,
    public reviewService: ReviewService,
    public modalController: ModalController
  ) {}

  rate = (r) => (this.rating = r);

  ngOnInit() {
    this.jobService.getJobs().subscribe((data) => (this.myJobs = data.myJob));
    this.jobService.getJobs().subscribe((data) => (this.myLeads = data.leads));
    this.getUserOne();
    this.getAllJobs();
    this.getAllSkills();
    this.getAllSubSkills();
    this.getAllSeekers();
    this.getAllProviders();
    this.getAllReviews();
  }

  private readonly MAX_NUMBER_OF_STARS = 5;

  private get numberOfFullStars(): number {
    return Math.floor(this.rating);
  }

  private get numberOfEmptyStars(): number {
    return this.MAX_NUMBER_OF_STARS - Math.ceil(this.rating);
  }

  get fullStars(): any[] {
    return Array(this.numberOfFullStars);
  }

  get emptyStars(): any[] {
    return Array(this.numberOfEmptyStars);
  }

  get hasAnHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }
  //modal functions
  async seeProfileModal() {
    const modal = await this.modalController.create({
      component: GenericProfileModalPage,
      cssClass: "my-custom-class",
    });
    return await modal.present();
  }

  refresh() {
    this.getAllReviews();
  }

  //crud functions

  getAllReviews() {
    this.reviewService.getAllReviews().subscribe(
      (res) => {
        this.allReviews = res;
      },
      (err) => console.log(err)
    );
  }

  deleteReview(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete this record?") == true) {
      this.reviewService.deleteReview(_id).subscribe((res) => {
        this.getAllReviews();
      });
    }
  }

  postReview() {
    this.reviewService.createProviderReview(this.registerReviewData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.getAllReviews();
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

  getAllSubSkills() {
    this.subSkillService.getAllSubSkills().subscribe(
      (res) => {
        this.allSubSkills = res;
      },
      (err) => console.log(err)
    );
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.skills = res;
      },
      (err) => console.log(err)
    );
  }

  postJob() {
    this.jobService.postJob(this.registerJobData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
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
  createJob(job: Job) {
    this.jobService.createJob(job).subscribe();
    this.router.navigate([
      "/search-providers" + "/" + this.jobService.currentJob.type,
    ]);
  }
  getUserOne() {
    this.userService.getUserOne().subscribe((data: User[]) => {
      this.userId = data;
    });
  }
  //getUser() {
  //this._auth.getUser(this.user).subscribe(
  //  (res) => {
  //    this.user = res;
  //   },
  //    (err) => console.log(err)
  //  );
  // }
  updateUserOne(user: User) {
    this.userService.updateUserOne(user).subscribe();
    this.editInformation = false;
  }

  editClicked(user) {
    this.editInformation = true;
    this.userService.currentUser = Object.assign({}, user);
  }
  acceptClicked(): void {
    alert("Job Added!");
    this.router.navigate(["/progress"]);

    console.log("job added to your profile");
  }
  cancelJob() {
    console.log("job cancelled");
  }
  changePhotoClicked() {
    console.log("changephotoclicked");
  }
  addPhotos() {
    console.log("addphotosclicked");
  }
  claimJob() {
    console.log("job claimed");
  }

  //gallery buttons
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  //header and footer functions

  providerClicked() {
    this.provider = true;
  }

  seekerClicked() {
    this.provider = false;
  }

  reviewsClicked() {
    this.profile = false;
    this.jobs = false;
    this.wallet = false;
    this.history = false;
    this.reviews = true;
  }
  profileClicked() {
    this.profile = true;
    this.jobs = false;
    this.wallet = false;
    this.history = false;
    this.reviews = false;
  }

  jobsClicked() {
    this.profile = false;
    this.jobs = true;
    this.wallet = false;
    this.history = false;
    this.reviews = false;
  }

  walletClicked() {
    this.profile = false;
    this.jobs = false;
    this.wallet = true;
    this.history = false;
    this.reviews = false;
  }

  historyClicked() {
    this.profile = false;
    this.jobs = false;
    this.wallet = false;
    this.history = true;
    this.reviews = false;
  }

  payProviderClicked() {
    this.router.navigate(["/pay"]);
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

  submitClicked(): void {
    this.router.navigate(["/search-providers"]);
  }
}
