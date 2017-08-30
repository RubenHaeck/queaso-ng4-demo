import { Observable } from 'rxjs/Rx';

import { Paging } from './models/paging';

export interface ISpotifyService {
    searchArtist(search: string): Observable<Paging>;
}
