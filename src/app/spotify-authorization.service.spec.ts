import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SpotifyAuthorizationService } from './spotify-authorization.service';

describe('SpotifyAuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [SpotifyAuthorizationService],
      imports: [HttpModule]
    });
  });

  // it('should be created', inject([SpotifyAuthorizationService], (service: SpotifyAuthorizationService) => {
  //   expect(service).toBeTruthy();
  // }));
});
