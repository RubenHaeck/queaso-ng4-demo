import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Paging } from './models/paging';
import { clientId, clienSecret } from './config';
import { ISpotifyService } from './spotify-service';

@Injectable()
export class SpotifyService implements ISpotifyService {

  private spotifyUrl = 'https://api.spotify.com/v1/search';

  constructor(private http: Http) { }

  public searchArtist(search: string): Observable<Paging> {

    const authorizationHeader: Headers = new Headers();
    authorizationHeader.set('Authorization', 'Basic ' + btoa(clientId + ':' + clienSecret));

    const params: URLSearchParams = new URLSearchParams();
    params.set('q', search);
    params.set('type', 'artist');

    return this.http.get(this.spotifyUrl, {
      search : params,
      headers : authorizationHeader
    })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error) || 'Server error');
  }

}
