import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UIRouterModule } from '@uirouter/angular';

import { SpotifyDetailComponent } from './spotify-detail.component';

describe('SpotifyDetailComponent', () => {
  let component: SpotifyDetailComponent;
  let fixture: ComponentFixture<SpotifyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyDetailComponent ],
      imports : [ UIRouterModule.forRoot({ useHash: true})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
