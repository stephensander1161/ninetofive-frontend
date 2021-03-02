import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PromoService {
  _getAllPromosUrl = environment._getAllPromosUrl;
  _registerPromoUrl = environment._registerPromoUrl;
  _promoBaseUrl = environment._promoBaseUrl;

  constructor(private http: HttpClient) {}

  //crud functions
  getAllPromos() {
    return this.http.get<any>(this._getAllPromosUrl);
  }

  createPromo(promo) {
    return this.http.post<any>(this._registerPromoUrl, promo);
  }

  deletePromo(_id: string) {
    return this.http.delete(this._promoBaseUrl + `/${_id}`);
  }
}
