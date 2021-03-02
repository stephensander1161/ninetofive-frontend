import { Faq } from "./../models/faq";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { About } from "../models/about";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class FaqService {
  currentFaq: Faq = {
    id: null,
    name: "",
    email: "",
    date: null,
    question: "",
  };

  _aboutBaseUrl = environment._aboutBaseUrl;

  _faqBaseUrl = environment._faqBaseUrl;

  constructor(private http: HttpClient) {}

  //crud functions

  deleteFaq(id: number): Observable<Faq> {
    return this.http.delete<Faq>(this._faqBaseUrl + "/" + id, headerOption);
  }

  createFaq(faq: Faq): Observable<Faq> {
    return this.http.post<Faq>(this._faqBaseUrl, faq, headerOption);
  }

  updateFaq(faq: Faq): Observable<Faq> {
    return this.http.put<Faq>(
      this._faqBaseUrl + "/" + faq.id,
      faq,
      headerOption
    );
  }

  getFaqById(id: number): Observable<any> {
    return this.http.get<Faq>(this._faqBaseUrl + "/" + id, headerOption);
  }

  getAllFaqs(): Observable<any> {
    return this.http.get<Faq[]>(this._faqBaseUrl, headerOption);
  }
}
