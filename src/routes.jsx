import App from './containers/app/app';
import HomePage from './containers/home-page/home-page';
import EventsPage from './containers/events/events-page';
import SpeakersPage from './containers/speakers/speakers-page';
import ContributorsPage from './containers/contributors/contributors-page';

export default [{
    component: App,

    routes: [
        {
            path: '/',
            exact: true,
            component: HomePage,
        },
        {
            path: '/events',
            component: EventsPage,
        },
        {
            path: '/speakers',
            component: SpeakersPage,
        },
        {
            path: '/contributors',
            component: ContributorsPage,
        },
    ],
}];
