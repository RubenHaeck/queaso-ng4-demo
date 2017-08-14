import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SpotifyComponent } from './spotify.component';
import { SpotifySearchComponent } from './../spotify-search/spotify-search.component';
import { SpotifySearchResultComponent } from './../spotify-search-result/spotify-search-result.component';

import { SpotifyService } from './../spotify.service';

describe('SpotifyComponent', () => {
  let component: SpotifyComponent;
  let fixture: ComponentFixture<SpotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpotifyComponent,
        SpotifySearchComponent,
        SpotifySearchResultComponent ],
      providers : [ SpotifyService ],
      imports : [ HttpModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();  
  });
});
