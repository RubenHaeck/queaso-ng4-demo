import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyLoginComponent } from './spotify-login.component';
import { SpotifyAuthorizationService } from './../spotify-authorization.service';

describe('SpotifyLoginComponent', () => {
  let component: SpotifyLoginComponent;
  let fixture: ComponentFixture<SpotifyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyLoginComponent ],
      imports: [SpotifyAuthorizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
