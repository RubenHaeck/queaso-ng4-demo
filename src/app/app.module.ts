import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifySearchComponent } from './spotify-search/spotify-search.component';
import { SpotifySearchResultComponent } from './spotify-search-result/spotify-search-result.component';
import { AboutComponent } from './about/about.component';

const helloState: Ng2StateDeclaration = { name: 'hello', url: '/hello', component: SpotifyComponent};
const aboutState: Ng2StateDeclaration = { name: 'about', url: '/about', component: AboutComponent};

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    SpotifySearchComponent,
    SpotifySearchResultComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [helloState, aboutState], useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
