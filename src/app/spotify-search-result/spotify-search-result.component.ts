import { Component, OnInit, Input } from '@angular/core';

import { Paging } from './../models/paging';

@Component({
  selector: 'app-spotify-search-result',
  templateUrl: './spotify-search-result.component.html',
  styleUrls: ['./spotify-search-result.component.css']
})
export class SpotifySearchResultComponent implements OnInit {
  @Input()
  public result: Paging;

  constructor() { }

  ngOnInit() {
  }

}
