import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Skill } from "../models/skill";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SkillService {
  _getAllSkillsUrl = environment._getAllSkillsUrl;
  _registerSkillUrl = environment._registerSkillUrl;
  _putSkillsUrl = environment._putSkillsUrl;
  _skillBaseUrl = environment._skillBaseUrl;

  selectedSkill: Skill;
  skills: Skill[];
  constructor(private http: HttpClient) {}

  getAllSkills() {
    return this.http.get<any>(this._getAllSkillsUrl);
  }

  createSkill(skill) {
    return this.http.post<any>(this._registerSkillUrl, skill);
  }

  putSkill(skill: Skill) {
    return this.http.put(this._putSkillsUrl + `/${skill._id}`, skill);
  }

  deleteSkill(_id: string) {
    return this.http.delete(this._skillBaseUrl + `/${_id}`);
  }
}
