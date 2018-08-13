import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/noMatch'
import Home from 'pages/home'
import ReactRouter from 'pages/react/router'
import ComponentLayout from 'pages/component/layout'

export default {
	index: 'home',
	routeList: [
		{
			layout: DefaultLayout,
			routes: {
				'home': Home
			}
		},
		{
			layout: DefaultLayout,
			routes: {
				'component/test': NoMatch
			}
		},
		{
			layout: DefaultLayout,
			routes: {
				'component/layout': ComponentLayout
			}
		},
		{
			layout: DefaultLayout,
			routes: {
				'react/router': ReactRouter
			}
		}
	]
}
