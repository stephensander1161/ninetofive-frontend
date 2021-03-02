import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Subscriber } from "../models/subscriber";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SubscriberService {
  _getAllSubsUrl = environment._getAllSubsUrl;
  _postSubUrl = environment._postSubUrl;
  _subBaseUrl = environment._subBaseUrl;
  selectedSub: Subscriber;
  subs: Subscriber[];

  constructor(private http: HttpClient) {}

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
  deleteSub(id: string) {
    return this.http.delete(this._subBaseUrl + `/${id}`);
  }
}
