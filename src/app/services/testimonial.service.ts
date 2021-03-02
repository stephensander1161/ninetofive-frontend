import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TestimonialService {
  _getAllTestimonialsUrl = environment._getAllTestimonialsUrl;
  _getAllHowItWorksUrl = environment._getAllHowItWorksUrl;

  constructor(private http: HttpClient) {}

  getAllTestimonials() {
    return this.http.get<any>(this._getAllTestimonialsUrl);
  }

  getAllHowItWorks() {
    return this.http.get<any>(this._getAllHowItWorksUrl);
  }
}
