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
export class EmailsService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'emails/';
    this.httpOptions = this.core.httpOptions;
  }


  getEmails(
  ): Promise<any> {
    let url = this.apiUrl;
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** PUT: update a currenciess basic data  */
  addEmail(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'email';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.email)) {
      params.append("email", dataObject.email);
    }

    if (!this.core.isEmptyOrNull(dataObject.primary)) {
      params.append("primary", dataObject.primary);
    }

    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }




  getSingleEmail(id: any
  ): Promise<any> {
    let url = this.apiUrl + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  /** PUT: update a currenciess basic data  */
  updateEmail(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + 'up-email/' + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.email)) {
      params.append("email", dataObject.email);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }


  verifyEmail(id: any): Promise<any> {
    let url = this.apiUrl + 'verify-email/' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** PUT: update a currenciess basic data  */
  setPrimaryEmail(id: any): Promise<any> {
    let url = this.apiUrl + 'set-primary/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }


  /** DELETE: delete a currencies  */
  deleteEmail(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + 'del-email/' + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
