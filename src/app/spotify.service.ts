import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Paging } from './models/paging';

@Injectable()
export class SpotifyService {

  private spotifyUrl = 'http://localhost:8014/artists';

  constructor(private http: Http) { }

  public searchArtist(search: string): Observable<Paging> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('q', search);
    params.set('type', 'artist');

    return this.http.get(this.spotifyUrl, {
      search : params
    })
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
