import { Component, OnInit } from '@angular/core';
import { StateParams } from '@uirouter/angular';

@Component({
  selector: 'app-spotify-detail',
  templateUrl: './spotify-detail.component.html',
  styleUrls: ['./spotify-detail.component.css']
})
export class SpotifyDetailComponent implements OnInit {

  constructor(private stateParams: StateParams) { }

  ngOnInit() {
    console.log(this.stateParams['id']);
  }

}
