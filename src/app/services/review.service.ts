import { Injectable } from "@angular/core";
import { environment } from "./../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subscriber } from "../models/subscriber";

@Injectable({
  providedIn: "root",
})
export class ReviewService {
  _getAllSubsUrl = environment._getAllSubsUrl;
  _postSubUrl = environment._postSubUrl;
  _subBaseUrl = environment._subBaseUrl;

  _getAllReviewsUrl = environment._getAllReviewsUrl;

  _registerProviderReviewUrl = environment._registerProviderReviewUrl;

  _registerSeekerReviewUrl = environment._registerSeekerReviewUrl;

  constructor(private http: HttpClient) {}

  getAllReviews() {
    return this.http.get<any>(this._getAllReviewsUrl);
  }

  createProviderReview(user) {
    return this.http.post<any>(this._registerProviderReviewUrl, user);
  }

  createSeekerReview(user) {
    return this.http.post<any>(this._registerSeekerReviewUrl, user);
  }

  deleteReview(_id: string) {
    return this.http.delete(this._getAllReviewsUrl + `/${_id}`);
  }
  //subscriber crud functions
  //crud functions
  getAllSubs() {
    return this.http.get<any>(this._getAllSubsUrl);
  }
  getSubById(id: number) {
    return this.http.get<Subscriber>(this._subBaseUrl + "/" + id);
  }

  postSub(sub) {
    return this.http.post<any>(this._postSubUrl, sub);
  }
  deleteSub(_id: string) {
    return this.http.delete(this._subBaseUrl + `/${_id}`);
  }
}
