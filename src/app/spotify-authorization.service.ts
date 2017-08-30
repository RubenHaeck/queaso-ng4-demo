import { Injectable, Inject } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import { clientId, redirectUri, scope, responseType } from './config';

@Injectable()
export class SpotifyAuthorizationService {

  private authorizationUrl = 'https://accounts.spotify.com/authorize';

  constructor(private http: Http, @Inject(DOCUMENT) private document: Document) { }

  public requestAuthorization(): any {

    const queryString = `client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
    this.document.location.href = this.authorizationUrl + '?' + queryString;
    // const params: URLSearchParams = new URLSearchParams();
    // params.set('client_id', clientId);
    // params.set('client_id', 'code');
    // params.set('redirect_uri', 'http://localhost:4200/#/callback');

    // return this.http.get(this.authorizationUrl, {
    //   search : params
    //   }).map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
    
  }

}
