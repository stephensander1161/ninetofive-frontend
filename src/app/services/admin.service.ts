import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  _getAllAdminsUrl = environment._getAllAdminsUrl;
  constructor(private http: HttpClient, private _router: Router) {}

  getAllAdmins() {
    return this.http.get<any>(this._getAllAdminsUrl);
  }

  getNewAdmins() {
    return this.http.get<any>(this._getAllAdminsUrl);
  }
}
