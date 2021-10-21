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
export class NotificationsService {

  public apiUrl: string;
  public httpOptions;

  constructor(
    private http: HttpClient,
    private urlService: UrlsService,
    public core: CoreService
  ) {

    this.apiUrl = `${this.urlService.apiUrl}`;
    this.httpOptions = this.core.httpOptions;
  }


  getNotifications(
  ): Promise<any> {
    let url = this.apiUrl + 'notifications';
    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }


  getSingleNotification(id: any
  ): Promise<any> {
    let url = this.apiUrl + 'notifications/' + id;

    return this.core.makeRemoteRequest(url, "get", null, httpOptions);
  }

  /** PUT: read notification  */
  markAsRead(id: any): Promise<any> {
    let url = this.apiUrl + 'notifications/mark-read/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  markAsUnread(id: any): Promise<any> {
    let url = this.apiUrl + 'notifications/mark-unread/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }

  markAsDeleted(id: any): Promise<any> {
    let url = this.apiUrl + 'notifications/mark-del/' + id;

    return this.core.makeRemoteRequest(url, "put", null, null);
  }


  /** DELETE: delete a notification  */
  deleteNotification(id: any): Promise<any> {
    let url = '';

    // let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });
    if (!this.core.isEmptyOrNull(id)) {
      url = this.apiUrl + 'notifications/del-notification/' + id;
    }

    return this.core.makeRemoteRequest(url, "delete", null, this.httpOptions);
  }

}
