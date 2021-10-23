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
export class CategoriesService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'categories/';
    this.httpOptions = this.core.httpOptions;
  }


  getCategories(
  ): Promise<any> {
    let url = this.apiUrl;
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** PUT: update a currenciess basic data  */
  addCategory(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'create-category';

    let params = new FormData();

    if (!this.core.isEmptyOrNull(dataObject.name)) {
      params.append("name", dataObject.name);
    }

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.description)) {
      params.append("description", dataObject.description);
    }

    if (!this.core.isEmptyOrNull(dataObject.file)) {
      params.append("file", dataObject.file);
    }


    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }




  getSingleCategory(id: any
  ): Promise<any> {
    let url = this.apiUrl + '' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }



  /** PUT: update a currenciess basic data  */
  updateCategory(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + 'update-category/' + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.name)) {
      params.append("name", dataObject.name);
    }

    if (!this.core.isEmptyOrNull(dataObject.description)) {
      params.append("description", dataObject.description);
    }

    if (!this.core.isEmptyOrNull(dataObject.file)) {
      params.append("file", dataObject.file);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }

  /** PUT: update a currenciess basic data  */
  followCategory(id: any): Promise<any> {
    let url = this.apiUrl + 'follow-category/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

   /** PUT: update a currenciess basic data  */
   unfollowCategory(id: any): Promise<any> {
    let url = this.apiUrl + 'unfollow-category/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  /** DELETE: delete a currencies  */
  deleteCategory(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + 'delete-category/' + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
