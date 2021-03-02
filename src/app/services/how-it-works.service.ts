import { HowItWork } from "src/app/models/howItWork";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HowItWorksService {
  _getAllHowItWorksUrl = environment._getAllHowItWorksUrl;
  _postHowItWorksUrl = environment._postHowItWorksUrl;
  _HowItWorksBaseUrl = environment._HowItWorksBaseUrl;

  selectedHiw: HowItWork;

  constructor(private http: HttpClient) {}

  //crud functions
  getAllHowItWorks() {
    return this.http.get<any>(this._getAllHowItWorksUrl);
  }

  postHiw(hiw) {
    return this.http.post<any>(this._postHowItWorksUrl, hiw);
  }
  deleteHiw(_id: string) {
    return this.http.delete(this._HowItWorksBaseUrl + `/${_id}`);
  }
}
