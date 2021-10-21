import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UrlsService } from "../core/urls.service";
import { CoreService } from "../core/core.service";
import { CustomHttpParamEncoder } from "../core/custom-http-param-encoder";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
  }),
};


@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'payments/';
    this.httpOptions = this.core.httpOptions;
  }

  /** POST: update a currenciess basic data  */
  makePayment(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'pay';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.currency_sending)) {
      params.append("currency_sending", dataObject.currency_sending);
    }

    if (!this.core.isEmptyOrNull(dataObject.currency_receiving)) {
      params.append("currency_receiving", dataObject.currency_receiving);
    }

    if (!this.core.isEmptyOrNull(dataObject.from)) {
      params.append("from", dataObject.from);
    }

    if (!this.core.isEmptyOrNull(dataObject.to)) {
      params.append("to", dataObject.to);
    }

    if (!this.core.isEmptyOrNull(dataObject.amount)) {
      params.append("amount", dataObject.amount);
    }

    if (!this.core.isEmptyOrNull(dataObject.phone)) {
      params.append("receiver_phone", dataObject.phone);
    }

    if (!this.core.isEmptyOrNull(dataObject.request)) {
      params.append("request", dataObject.request);
    }

    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }

  /*Retry payment*/
  retryPayment(id: any): Promise<any> {
    let url = this.apiUrl + 'retry';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(id)) {
      params.append("id", id);
    }

    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }


}
