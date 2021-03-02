import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-seeker-new-modal",
  templateUrl: "./seeker-new-modal.page.html",
  styleUrls: ["./seeker-new-modal.page.scss"],
})
export class SeekerNewModalPage implements OnInit {
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

  constructor(
    public userService: UserService,
    private router: Router,
    public modalController: ModalController
  ) {}

  ngOnInit() {}

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
