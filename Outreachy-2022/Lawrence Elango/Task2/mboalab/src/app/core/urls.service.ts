import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {
  public get apiUrl() {
    return 'https://mboalab-api.herokuapp.com/';   //https://mboalab-api.herokuapp.com/ http://localhost:5000/ https://api.mboalab.org/
  }
  constructor() { }
}
