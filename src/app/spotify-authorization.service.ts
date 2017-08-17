import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { clientId } from './config';

@Injectable()
export class SpotifyAuthorizationService {

  private authorizationUrl = 'https://accounts.spotify.com/authorize';

  constructor(private http: Http) { }

  public requestAuthorization(): any {
    const params: URLSearchParams = new URLSearchParams();
    params.set('client_id', clientId);
    params.set('client_id', 'code');
    params.set('redirect_uri', 'http://localhost:4200/#/callback');

    return this.http.get(this.authorizationUrl, {
      search : params
      }).map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
