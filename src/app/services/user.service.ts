import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { User } from "./../models/user";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class UserService {
  _userBaseUrl = environment._userBaseUrl;
  _userHomeUrl = environment._userHomeUrl;
  _registerUserUrl = environment._registerUserUrl;

  _getAllUsersUrl = environment._getAllUsersUrl;

  currentUser: User = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: null,
    city: "",
    address: "",
    postalCode: "",
    primarySkill: "",
    secondarySkill: "",
    tertiarySkill: "",
    experience: 0,
    biography: "",
    profilePicture: "",
    pastWorkPictures: [""],
    earliestCanStart: 0,
    daysAvailable: [""],
  };
  constructor(private http: HttpClient) {}

  //crud functions
  createUser(user) {
    return this.http.post<any>(this._registerUserUrl, user);
  }

  getAllUsers() {
    return this.http.get<any>(this._getAllUsersUrl);
  }

  //old functions

  getUserOne(): Observable<User[]> {
    return this.http.get<User[]>(this._userHomeUrl, headerOption);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(
      this._registerUserUrl + "/" + id,
      headerOption
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      this._registerUserUrl + "/" + user.id,
      user,
      headerOption
    );
  }
  updateUserOne(user: User): Observable<User> {
    return this.http.put<User>(
      this._userHomeUrl + "/" + user.id,
      user,
      headerOption
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(this._registerUserUrl + "/" + id, headerOption);
  }
}
