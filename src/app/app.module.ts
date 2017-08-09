import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifySearchComponent } from './spotify-search/spotify-search.component';
import { SpotifySearchResultComponent } from './spotify-search-result/spotify-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    SpotifySearchComponent,
    SpotifySearchResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
