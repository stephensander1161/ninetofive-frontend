import { UserService } from "src/app/services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "src/app/models/user";

@Component({
  selector: "app-email-subs-modal",
  templateUrl: "./email-subs-modal.page.html",
  styleUrls: ["./email-subs-modal.page.scss"],
})
export class EmailSubsModalPage implements OnInit {
  allUsers: User[];

  emailSubsForm: FormGroup;
  emailUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.emailSubsForm = this.fb.group({
      subject: [""],
      body: [""],
    });

    this.emailUserForm = this.fb.group({
      subject: [""],
      body: [""],
    });
  }

  ngOnInit() {
    this.getAllUsers();
  }

  //crud functions

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      (res) => {
        this.allUsers = res;
      },
      (err) => console.log(err)
    );
  }

  logForm() {
    console.log(this.emailSubsForm.value);
    this.router.navigate(["/admin-outreach"]);
    alert("Thank You! Your Message Has Been Sent.");
  }
}
