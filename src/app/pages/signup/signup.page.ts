import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Provider } from "src/app/models/provider";
import { Experience } from "src/app/models/experience";
import { Skill } from "src/app/models/skill";
import { SkillService } from "src/app/services/skill.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  registerUserData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: null,
    city: "",
    address: "",
    postalCode: "",
    primarySkill: "",
    secondarySkill: "",
    tertiarySkill: "",
    experience: "",
    earliestCanStart: "",
    daysAvailable: [""],
    biography: "",
    profilePicture: "",
    pastWorkPictures: "",
  };
  provider: Provider;

  experience: Experience[] = [
    { experienceId: 1, name: "1" },
    { experienceId: 1, name: "1-3" },
    { experienceId: 1, name: "3-5" },
    { experienceId: 1, name: "5-7" },
    { experienceId: 1, name: "7+" },
  ];

  skills: Skill[];

  constructor(
    private skillService: SkillService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllSkills();
  }

  //crud functions

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.skills = res;
      },
      (err) => console.log(err)
    );
  }

  registerUser() {
    this.userService.createUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/home"]);
      },
      (err) => console.log(err)
    );
  }

  //header and footer functions
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
