import { Job } from "./../models/job";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class JobService {
  _getAllJobsUrl = environment._getAllJobsUrl;
  _postJobUrl = environment._postJobUrl;
  _jobBaseUrl = environment._jobBaseUrl;
  _jsonServerJobUrl = environment._jsonServerJobUrl;
  private listJobs: Job[] = [
    {
      _id: 10,
      seekerId: 11,
      providerId: 12,
      type: "plumbing",
      subType: "clogs",
      size: "1hr",
      city: "calgary",
      address: "5443 67 street",
      estimate: 100,
      description: "my toilet is backed up",
      priority: "urgent",
      date: "june 24",
      time: "11:00AM",
      completed: false,
    },
  ];

  currentJob: Job = {
    _id: null,
    seekerId: null,
    providerId: null,
    type: "",
    subType: "",
    size: "",
    city: "",
    address: "",
    estimate: 100,
    description: "",
    priority: "",
    date: "",
    time: "",
    completed: false,
  };

  constructor(private http: HttpClient) {}

  //crud functions
  getAllJobs() {
    return this.http.get<any>(this._getAllJobsUrl);
  }
  getJobById(id: number) {
    return this.http.get<Job>(this._jobBaseUrl + "/" + id);
  }

  postJob(job) {
    return this.http.post<any>(this._postJobUrl, job);
  }

  //old functions
  deleteJob(id: number): Observable<Job> {
    return this.http.delete<Job>(this._jobBaseUrl + "/" + id, headerOption);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this._jobBaseUrl, job, headerOption);
  }

  updateJob(job: Job): Observable<Job> {
    return this.http.put<Job>(
      this._jobBaseUrl + "/" + job._id,
      job,
      headerOption
    );
  }

  getJobs(): Observable<any> {
    return this.http.get(this._jsonServerJobUrl);
  }

  save(job: Job) {
    this.listJobs.push(job);
  }

  post(job: Job): Observable<Job> {
    return this.http.post<Job>(this._jsonServerJobUrl, job, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    });
  }
}
