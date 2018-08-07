import DefaultLayout from 'views/layout/default';
import NoMatch from 'pages/noMatch';
import Home from 'pages/home';

export default {
	index: 'home',
	history: 'browserHistory',
	routeList: [
		{
			layout: DefaultLayout,
			routes: {
				'home': Home,
			},
		},
		{
			routes: {
				'404': NoMatch,
			},
		},
	],
};
