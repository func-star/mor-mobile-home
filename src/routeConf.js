import DefaultLayout from 'views/layout/default'
import NoMatch from 'pages/noMatch'
import Home from 'pages/home'
import ComponentView from 'pages/component'

const routeList = {
	index: 'home',
	routeList: [{
		layout: DefaultLayout,
		routes: {
			'home': Home
		}
	}, {
		routes: {
			'404': NoMatch
		}
	}]
}

const componentList = ['layout', 'toast', 'modal', 'list-view', 'loading', 'tabs', 'swiper', 'popup', 'date-picker', 'date-picker-range', 'modal-select', 'picker-select', 'hammer', 'picker-view']

componentList.forEach(v => {
	let routes = {}
	routes['component/' + v] = ComponentView
	routeList.routeList.push({
		layout: DefaultLayout,
		routes
	})
})

export default routeList
