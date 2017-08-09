import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-search-result',
  templateUrl: './spotify-search-result.component.html',
  styleUrls: ['./spotify-search-result.component.css']
})
export class SpotifySearchResultComponent implements OnInit {
  public result: any = [
    {name: 'JLo', album: 'Jenny from the block'},
    {name: 'Sash!', album: 'Trilenium'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
