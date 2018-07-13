import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ApiService {

  clientId = '[CLIENT_ID]'

  constructor(
    private http: Http
  ) {}

  get(url, attachClientId?) {
    // Should attach client ID
    let u;
    attachClientId ? u = this.prepareUrl(url) : u = url;

    return this.http.get(u);
  }

  prepareUrl(url){
    // Attach client id to stream url
    return `${url}?client_id=${this.clientId}`
  }
}
