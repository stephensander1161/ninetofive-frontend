import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SubSkill } from "../models/subSkill";

@Injectable({
  providedIn: "root",
})
export class SubSkillService {
  selectedSubSkill: SubSkill;
  subSkills: SubSkill[];
  _getAllSubSkillsUrl = environment._getAllSubSkillsUrl;
  _registerSubSkillUrl = environment._registerSubSkillUrl;
  _subSkillBaseUrl = environment._subSkillBaseUrl;

  constructor(private http: HttpClient) {}

  getAllSubSkills() {
    return this.http.get<any>(this._getAllSubSkillsUrl);
  }
  createSubSkill(subSkill) {
    return this.http.post<any>(this._registerSubSkillUrl, subSkill);
  }

  deleteSubSkill(_id: string) {
    return this.http.delete(this._subSkillBaseUrl + `/${_id}`);
  }
}
