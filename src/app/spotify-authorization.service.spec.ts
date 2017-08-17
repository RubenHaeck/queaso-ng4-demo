import { TestBed, inject } from '@angular/core/testing';

import { SpotifyAuthorizationService } from './spotify-authorization.service';

describe('SpotifyAuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyAuthorizationService]
    });
  });

  it('should be created', inject([SpotifyAuthorizationService], (service: SpotifyAuthorizationService) => {
    expect(service).toBeTruthy();
  }));
});
