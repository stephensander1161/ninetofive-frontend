import { environment } from "./../../environments/environment";
import { Seeker } from "./../models/seeker";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class SeekerService {
  _jsonServerSeekerUrl = environment._jsonServerSeekerUrl;
  _getAllSeekersUrl = environment._getAllSeekersUrl;
  _getNewSeekersUrl = environment._getNewSeekersUrl;

  _jsonServerSeekersBaseUrl = environment._jsonServerSeekersBaseUrl;
  _jsonServerSeekersHomePageUrl = environment._jsonServerSeekersHomePageUrl;

  currentSeeker: Seeker = {
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: null,
    email: "",
    password: "",
    city: "",
    address: "",
    postalCode: "",
  };

  constructor(private http: HttpClient) {}

  //crud functions
  getAllSeekers() {
    return this.http.get<any>(this._getAllSeekersUrl);
  }
  getNewSeekers() {
    return this.http.get<any>(this._getNewSeekersUrl);
  }

  //old functions

  deleteSeeker(id: number): Observable<Seeker> {
    return this.http.delete<Seeker>(
      this._jsonServerSeekersBaseUrl + "/" + id,
      headerOption
    );
  }

  createSeeker(seeker: Seeker): Observable<Seeker> {
    return this.http.post<Seeker>(
      this._jsonServerSeekersBaseUrl,
      seeker,
      headerOption
    );
  }

  updateSeeker(seeker: Seeker): Observable<Seeker> {
    return this.http.put<Seeker>(
      this._jsonServerSeekersBaseUrl + "/" + seeker.id,
      seeker,
      headerOption
    );
  }

  updateSeekerOne(seeker: Seeker): Observable<Seeker> {
    return this.http.put<Seeker>(
      this._jsonServerSeekersHomePageUrl + "/" + seeker.id,
      seeker,
      headerOption
    );
  }

  getSeekerById(id: number): Observable<any> {
    return this.http.get<Seeker>(
      this._jsonServerSeekersBaseUrl + "/" + id,
      headerOption
    );
  }

  //get from json server
  getSeekerOne(): Observable<Seeker[]> {
    return this.http.get<Seeker[]>(
      this._jsonServerSeekersHomePageUrl,
      headerOption
    );
  }

  //local get from db.json file
  getSeekers(): Observable<any> {
    return this.http.get(this._jsonServerSeekerUrl);
  }
}
