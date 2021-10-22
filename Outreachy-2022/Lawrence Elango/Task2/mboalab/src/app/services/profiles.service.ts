import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { UrlsService } from "../core/urls.service";
import { CoreService } from "../core/core.service";
import { timeout } from 'rxjs/operators';
import { CustomHttpParamEncoder } from "../core/custom-http-param-encoder";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  }),
};


@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  public apiUrl: string;
  public httpOptions;
  public httpTimeout = 30 * 1000;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'profiles/';
    this.httpOptions = this.core.httpOptions;
  }

  /** PUT: update a currenciess basic data  */
  createProfile(): Promise<any> {
    let url = this.apiUrl + 'create-profile';
    return this.core.makeRemoteRequest(url, "post", null, this.httpOptions);
  }


  getProfile(username: any
  ): Promise<any> {
    let url = this.apiUrl + '' + username;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  getUserProfile(
  ): Promise<any> {
    let url = this.apiUrl + 'my-profile';

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  /** PUT: update a users basic data  */
  updateUser(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.firstName)) {
      params.append("firstname", dataObject.firstName);
    }

    if (!this.core.isEmptyOrNull(dataObject.lastName)) {
      params.append("lastname", dataObject.lastName);
    }

    if (!this.core.isEmptyOrNull(dataObject.userName)) {
      params.append("username", dataObject.userName);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }

  /** PUT: update a users basic data  */
  updateAddress(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'update-profile';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.country)) {
      params.append("country", dataObject.country);
    }

    if (!this.core.isEmptyOrNull(dataObject.language)) {
      params.append("language", dataObject.language);
    }

    if (!this.core.isEmptyOrNull(dataObject.timezone)) {
      params.append("timezone", dataObject.timezone);
    }


    if (!this.core.isEmptyOrNull(dataObject.address)) {
      params.append("address", dataObject.address);
    }

    if (!this.core.isEmptyOrNull(dataObject.bio)) {
      params.append("bio", dataObject.bio);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }

  /** PUT: update a users basic data  */
  updatePhoto(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'update-profile';

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.file)) {
      params.append("file", dataObject.file);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }

  /** DELETE: delete a user  */
  deleteUser(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });

    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}

