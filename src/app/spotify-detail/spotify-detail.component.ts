import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spotify-detail',
  templateUrl: './spotify-detail.component.html',
  styleUrls: ['./spotify-detail.component.css']
})
export class SpotifyDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Start initializing SpotifyDetailComponent');
  }

}
