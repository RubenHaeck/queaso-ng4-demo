import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-spotify-search',
  templateUrl: './spotify-search.component.html',
  styleUrls: ['./spotify-search.component.css']
})
export class SpotifySearchComponent implements OnInit {

  @Output()
  search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onClick(search: string): void {
    console.log('button is been clicked! ' + search);
    this.search.emit(search);
  }

}
