import { Component, OnInit } from '@angular/core';
import { SpotifyAuthorizationService } from './../spotify-authorization.service';

@Component({
  selector: 'queaso-spotify-login',
  templateUrl: './spotify-login.component.html',
  styleUrls: ['./spotify-login.component.css']
})
export class SpotifyLoginComponent implements OnInit {

  constructor(private spotifyAuthorizationService: SpotifyAuthorizationService) { }

  ngOnInit() {
  }

  public login(): void {
    console.log('dit is login');
    this.spotifyAuthorizationService.requestAuthorization();
  }

}
