import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authUrl = environment._loginUrl;

  constructor(private http: HttpClient, private _router: Router) {}

  loginUser(user) {
    return this.http.post<any>(this.authUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(["/welcome"]);
  }
}
