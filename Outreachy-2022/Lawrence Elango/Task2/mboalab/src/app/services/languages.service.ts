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
export class LanguagesService {

  public apiUrl: string;
  public httpOptions;
  public httpTimeout = 30 * 1000;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}`;
    this.httpOptions = this.core.httpOptions;
  }


  getLanguages(
  ): Promise<any> {
    let url = this.apiUrl + 'languages';
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  getSingleLanguage(id: any
  ): Promise<any> {
    let url = this.apiUrl + 'languages/' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

}

