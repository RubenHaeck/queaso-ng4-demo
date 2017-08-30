import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifySearchComponent } from './spotify-search/spotify-search.component';
import { SpotifySearchResultComponent } from './spotify-search-result/spotify-search-result.component';
import { AboutComponent } from './about/about.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';

import { SpotifyService } from './spotify.service';
import { SpotifyAuthorizationService } from './spotify-authorization.service';

import { appModuleStates, uiRouterConfigFn } from './app.routes';
import { SpotifyDetailComponent } from './spotify-detail/spotify-detail.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SpotifyComponent,
    SpotifySearchComponent,
    SpotifySearchResultComponent,
    AboutComponent,
    SpotifyLoginComponent,
    SpotifyDetailComponent,
    PersonComponent,
    PersonDetailComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UIRouterModule.forRoot({ states: appModuleStates, useHash: true, config: uiRouterConfigFn })
  ],
  providers: [
    SpotifyService,
    SpotifyAuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
