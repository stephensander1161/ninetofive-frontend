import { Component, OnInit } from "@angular/core";
import { Experience } from "src/app/models/experience";
import { Skill } from "src/app/models/skill";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { SkillService } from "src/app/services/skill.service";

@Component({
  selector: "app-provider-new-modal",
  templateUrl: "./provider-new-modal.page.html",
  styleUrls: ["./provider-new-modal.page.scss"],
})
export class ProviderNewModalPage implements OnInit {
  registerUserData = {
    id: null,
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

  experience: Experience[] = [
    { experienceId: 1, name: "1" },
    { experienceId: 1, name: "1-3" },
    { experienceId: 1, name: "3-5" },
    { experienceId: 1, name: "5-7" },
    { experienceId: 1, name: "7+" },
  ];

  skills: Skill;

  constructor(
    public userService: UserService,
    private router: Router,
    public modalController: ModalController,
    public skillService: SkillService
  ) {}

  ngOnInit() {
    this.getAllSkills();
  }

  getAllSkills() {
    this.skillService.getAllSkills().subscribe(
      (res) => {
        this.skills = res;
      },
      (err) => console.log(err)
    );
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  registerUser() {
    this.userService.createUser(this.registerUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/admin-users"]);
      },
      (err) => console.log(err)
    );
  }
}
