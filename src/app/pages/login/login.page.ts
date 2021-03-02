import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Provider } from "src/app/models/provider";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  provider: Provider;
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  loginUserData = {
    email: null,
    password: null,
  };

  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit() {}

  //validators
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

  //crud functions

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.router.navigate(["/home", this.loginForm.get("email").value]);
      },
      (err) => console.log(err)
    );

    
  }

 
  goToAdminHome() {
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

  seekerClicked() {
    this.router.navigate(["/seeker-login"]);
  }

  providerClicked() {
    this.router.navigate(["/provider-login"]);
  }
}
