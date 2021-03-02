import { Injectable } from "@angular/core";
import { Guarantee } from "../models/guarantee";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class GuaranteeService {
  _getAllGuaranteesUrl = environment._getAllGuaranteesUrl;
  _postGuaranteeUrl = environment._postGuaranteeUrl;
  _GuaranteeBaseUrl = environment._GuaranteeBaseUrl;

  selectedGuarantee: Guarantee;

  constructor(private http: HttpClient) {}

  //crud functions
  getAllGuarantees() {
    return this.http.get<any>(this._getAllGuaranteesUrl);
  }

  postGuarantee(guarantee) {
    return this.http.post<any>(this._postGuaranteeUrl, guarantee);
  }
  deleteGuarantee(_id: string) {
    return this.http.delete(this._GuaranteeBaseUrl + `/${_id}`);
  }
}
