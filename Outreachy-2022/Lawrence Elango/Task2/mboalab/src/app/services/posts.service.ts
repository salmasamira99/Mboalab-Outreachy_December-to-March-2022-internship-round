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
export class PostsService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}` + 'posts/';
    this.httpOptions = this.core.httpOptions;
  }

  getPosts(dataObject: any
  ): Promise<any> {
    let url = this.apiUrl + '?';


    if (!this.core.isEmptyOrNull(dataObject.start)) {
      url += `&start=${encodeURIComponent(dataObject.start)}`
    }

    if (!this.core.isEmptyOrNull(dataObject.end)) {
      url += `&end=${encodeURIComponent(dataObject.end)}`
    }

    if (!this.core.isEmptyOrNull(dataObject.status)) {
      url += `&status=${encodeURIComponent(dataObject.status)}`
    }

    if (!this.core.isEmptyOrNull(dataObject.author)) {
      url += `&author=${encodeURIComponent(dataObject.author)}`
    }

    if (!this.core.isEmptyOrNull(dataObject.category)) {
      url += `&category=${encodeURIComponent(dataObject.category)}`
    }

    if (!this.core.isEmptyOrNull(dataObject.count)) {
      url += `&count=${encodeURIComponent(dataObject.count)}`
    }

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  /** PUT: update a currenciess basic data  */
  addPost(dataObject: any): Promise<any> {
    let url = this.apiUrl + 'create-post';

    let params = new FormData();

    if (!this.core.isEmptyOrNull(dataObject.title)) {
      params.append("title", dataObject.title);
    }

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.content)) {
      params.append("content", dataObject.content);
    }

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.category)) {
      params.append("category", dataObject.category);
    }

    if (!this.core.isEmptyOrNull(dataObject.file)) {
      params.append("file", dataObject.file);
    }


    return this.core.makeRemoteRequest(url, "post", params, this.httpOptions);
  }

  getNextPost(id: any
  ): Promise<any> {
    let url = this.apiUrl + 'next/' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  getPreviousPost(id: any
  ): Promise<any> {
    let url = this.apiUrl + 'previous/' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  getSinglePost(id: any
  ): Promise<any> {
    let url = this.apiUrl + '' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  getSinglePostBySlug(slug: string
  ): Promise<any> {
    let url = this.apiUrl + 'slug/' + slug;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }



  /** PUT: update a currenciess basic data  */
  updatePost(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + 'update-post/' + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.title)) {
      params.append("title", dataObject.title);
    }

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.content)) {
      params.append("content", dataObject.content);
    }

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.category)) {
      params.append("category", dataObject.category);
    }

    if (!this.core.isEmptyOrNull(dataObject.file)) {
      params.append("file", dataObject.file);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }

  /** PUT: update a currenciess basic data  */
  likePost(id: any): Promise<any> {
    let url = this.apiUrl + 'like-post/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  /** PUT: update a currenciess basic data  */
  unlikePost(id: any): Promise<any> {
    let url = this.apiUrl + 'unlike-post/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  favoritePost(id: any): Promise<any> {
    let url = this.apiUrl + 'favorite-post/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  unfavoritePost(id: any): Promise<any> {
    let url = this.apiUrl + 'unfavorite-post/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  processPost(dataObject: any, id: any): Promise<any> {
    let url = this.apiUrl + 'process-post/' + id;

    let params = new FormData();

    // These parameters are always passed
    if (!this.core.isEmptyOrNull(dataObject.status)) {
      params.append("status", dataObject.status);
    }

    return this.core.makeRemoteRequest(url, "put", params, null);
  }


  /** DELETE: delete a currencies  */
  deletePost(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + 'delete-post/' + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
