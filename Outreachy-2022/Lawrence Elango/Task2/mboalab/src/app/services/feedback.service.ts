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
export class FeedbackService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'feedbacks/';
    this.httpOptions = this.core.httpOptions;
  }


  getFeedbacks(
  ): Promise<any> {
    let url = this.apiUrl;
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  getUserFeedbacks(
  ): Promise<any> {
    let url = this.apiUrl + 'user-feedbacks';
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** PUT: update a currenciess basic data  */
  addFeedback(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'feedback';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.message)) {
      params.append("message", dataObject.message);
    }

    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }

  respondFeedback(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + 'respond/' + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.message)) {
      params.append("message", dataObject.message);
    }


    return this.core.makeRemoteRequest(url, "put", params, null);
  }



  getSingleFeedback(id: any
  ): Promise<any> {
    let url = this.apiUrl + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** DELETE: delete a currencies  */
  deleteFeedback(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + 'del-feedback/' + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
