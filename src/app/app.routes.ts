// import { Injector } from '@angular/core';
import { UIRouter, Ng2StateDeclaration } from '@uirouter/angular';
import { visualizer } from '@uirouter/visualizer';

import { showVisualizer } from './config';

import { SpotifyComponent } from './spotify/spotify.component';
import { AboutComponent } from './about/about.component';
import { SpotifyDetailComponent } from './spotify-detail/spotify-detail.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const helloState: Ng2StateDeclaration = {
    name: 'hello',
    url: '/hello',
    component: SpotifyComponent
};

const helloStateDetail: Ng2StateDeclaration = {
    name: 'hello.detail',
    url: '/:id',
    component: SpotifyDetailComponent
};

const aboutState: Ng2StateDeclaration = {
    name: 'about',
    url: '/about',
    component: AboutComponent
};

const personState: Ng2StateDeclaration = {
    name: 'person',
    url: '/person',
    component: PersonComponent
};

const personDetailState: Ng2StateDeclaration = {
    name: 'person.detail',
    url: '/:personId',
    component: PersonDetailComponent
};

// Exports of UIRouter states & config
export const appModuleStates: Array<Ng2StateDeclaration> = [
    helloState,
    helloStateDetail,
    aboutState,
    personState,
    personDetailState
];

export function uiRouterConfigFn(router: UIRouter) {
    router.urlService.rules.otherwise({ state : helloState });
    if (showVisualizer) {
        visualizer(router);
    }
}
