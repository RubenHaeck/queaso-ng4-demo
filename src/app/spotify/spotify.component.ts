import { Component, OnInit } from '@angular/core';

import { SpotifyService } from './../spotify.service';
import { Paging} from './../models/paging';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {

  artists: Paging;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  public onSearching(searchValue: string): void {
    console.log(searchValue);
    this.spotifyService
                .searchArtist(searchValue)
                .subscribe(c => {
                  this.artists = c;
                  console.log('loading artists...');
                  console.log(c);
                });
  }

}
