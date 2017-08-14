import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, BaseRequestOptions, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          SpotifyService,
          {
              provide: XHRBackend, useClass: MockBackend
          }
        ],
      imports : [HttpModule]
    });
  });

  it('should be created', inject([SpotifyService], (service: SpotifyService) => {
    expect(service).toBeTruthy();
  }));

  it('should return an Observable<Paging>',
    inject([SpotifyService, XHRBackend], (service: SpotifyService, mockBackend: MockBackend) => {
        const mockResponse = {
            artists : {
                href: 'http://localhost/spotify/search',
                items : [ ]
            }
        };
        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify(mockResponse)
          })));
        });
        // my test who's failing
        service.searchArtist('hello').subscribe((artists) => {
            expect(artists).toBeTruthy();
            expect(artists.href).toEqual('http://localhost/spotify/search');
            console.log(artists);
        });
    }));
});
