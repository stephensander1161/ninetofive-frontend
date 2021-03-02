import { HttpClient, HttpHeaders } from "@angular/common/http";
import { About } from "./../models/about";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AboutService {
  currentAbout: About = {
    id: null,
    content: "",
  };

  _aboutBaseUrl = environment._aboutBaseUrl;

  constructor(private http: HttpClient) {}

  //crud functions

  deleteAbout(id: number): Observable<About> {
    return this.http.delete<About>(this._aboutBaseUrl + "/" + id, headerOption);
  }

  createAbout(about: About): Observable<About> {
    return this.http.post<About>(this._aboutBaseUrl, about, headerOption);
  }

  updateAbout(about: About): Observable<About> {
    return this.http.put<About>(
      this._aboutBaseUrl + "/" + about.id,
      about,
      headerOption
    );
  }

  getAboutById(id: number): Observable<any> {
    return this.http.get<About>(this._aboutBaseUrl + "/" + id, headerOption);
  }

  getAllAbouts(): Observable<any> {
    return this.http.get<About[]>(this._aboutBaseUrl, headerOption);
  }
}
