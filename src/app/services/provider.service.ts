import { environment } from "./../../environments/environment";
import { Provider } from "src/app/models/provider";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

const headerOption = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class ProviderService {
  _providerJsonServerUrl = environment._providerJsonServerUrl;
  _providerBaseUrl = environment._providerBaseUrl;
  _providerHomePageUrl = environment._providerHomePageUrl;
  _getAllProvidersUrl = environment._getAllProvidersUrl;
  _getNewProvidersUrl = environment._getNewProvidersUrl;

  private listProvider: Provider[] = [
    {
      id: 100,
      firstName: "Sandy",
      lastName: "Sur",
      email: "sandy.sur@gmail.com",
      password: "123",
      phoneNumber: 406559649392,
      city: "calgary",
      address: "123 fake street",
      postalCode: "T65E4E",
      primarySkill: "plumbing",
      secondarySkill: "other",
      tertiarySkill: "landscaping",
      experience: 5,
      biography: "blah blah blah",
    },
  ];

  currentProvider: Provider = {
    id: null,
    firstName: null,
    lastName: null,
    email: "",
    password: "",
    phoneNumber: null,
    city: "",
    address: "",
    postalCode: "",
    primarySkill: "",
    secondarySkill: "",
    tertiarySkill: "",
    experience: null,
    biography: "",
  };

  constructor(private http: HttpClient) {}

  //crud functions
  getAllProviders() {
    return this.http.get<any>(this._getAllProvidersUrl);
  }

  getNewProviders() {
    return this.http.get<any>(this._getNewProvidersUrl);
  }

  //old functions

  getProviderOne(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this._providerHomePageUrl, headerOption);
  }

  deleteProvider(id: number): Observable<Provider> {
    return this.http.delete<Provider>(
      this._providerBaseUrl + "/" + id,
      headerOption
    );
  }

  createProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(
      this._providerBaseUrl,
      provider,
      headerOption
    );
  }

  updateProvider(provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(
      this._providerBaseUrl + "/" + provider.id,
      provider,
      headerOption
    );
  }
  updateProviderOne(provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(
      this._providerHomePageUrl + "/" + provider.id,
      provider,
      headerOption
    );
  }

  getProviderById(id: number): Observable<Provider> {
    return this.http.get<Provider>(
      this._providerBaseUrl + "/" + id,
      headerOption
    );
  }

  getProviders(): Observable<any> {
    return this.http.get(this._providerJsonServerUrl);
  }

  save(provider: Provider) {
    this.listProvider.push(provider);
  }
}
