import Url from 'core/url';
import Events from 'components/events';

class Route extends Events {
	setConf (routeConf) {
		this.routeConf = Object.assign({
			history: 'hashHistory',
		}, routeConf);
		this.format();
		if (this.routeConf.history == 'browserHistory') {
			window.addEventListener('popstate', this.format.bind(this), false);
			this.on('popstate', this.format.bind(this));
		}
		if (this.routeConf.history == 'hashHistory') {
			window.addEventListener('hashchange', this.format.bind(this), false);
		}
	}
	
	format () {
		let url;
		if (this.routeConf.history == 'hashHistory') {
			let p = location.hash.substring(1);
			if (p.charAt(0) != '/') {
				p = '/' + p;
			}
			url = new Url(p);
		}
		if (this.routeConf.history == 'browserHistory') {
			url = new Url(location.href);
		}
		let routePath = url.pathname.length > 1 ? url.pathname.substring(1) : this.routeConf.index;
		
		let routeInfo = this.matchRoute(routePath);
		
		if (!routeInfo) {
			this.switchPage('404');
			return;
		}
		
		const params = Url.parseParam(url.search);
		this.current = Object.assign({}, routeInfo, {
			routePath: routePath,
			params: Object.assign({}, params, routeInfo.params),
			url: url,
		});
		this.emit('change', this.current);
	}
	
	parseStrToRegExp (str) {
		let params = [];
		let reg = str.replace(/\/\:([^\/]+)/g, function (t, k) {
			params.push(k);
			return '/([^\/]*)';
		});
		return {
			regExp: new RegExp('^' + reg + '$'),
			params: params,
		};
	}
	
	matchRoute (path) {
		if (!this.routeInfo) {
			this.routeInfo = [];
			this.routeConf.routeList.forEach((ri) => {
				let keys = Object.keys(ri.routes);
				this.routeInfo = this.routeInfo.concat(keys.map((v) => {
					let info = {
						layout: ri.layout,
						path: v,
						page: ri.routes[v],
					};
					return Object.assign(info, this.parseStrToRegExp(v));
				}));
			});
		}
		
		let l = this.routeInfo.length;
		for (let i = 0; i < l; i++) {
			let regInfo = this.routeInfo[i].regExp.exec(path);
			if (regInfo) {
				let paramData = regInfo.slice(1);
				let params = {};
				this.routeInfo[i].params.forEach((v, j) => {
					params[v] = paramData[j];
				});
				return Object.assign({}, this.routeInfo[i], {
					routePath: path,
					params: params,
				});
			}
		}
		return false;
	}
	
	changeFinish () {
		this.emit('changeFinish');
	}
	
	//不修改hash，跳页面
	switchPage (path, data, title = '', state = {}) {
		if (this.routeConf.history == 'hashHistory') {
			window.location.replace('#' + path + (data ? '?' + Url.param(data) : ''));
		}
		if (this.routeConf.history == 'browserHistory') {
			window.history.replaceState(state, title, path + (data ? '?' + Url.param(data) : ''));
			this.emit('popstate');
		}
		
	}
	
	href (path, data) {
		if (this.routeConf.history == 'hashHistory') {
			return '#' + path + (data ? '?' + Url.param(data) : '');
		}
		if (this.routeConf.history == 'browserHistory') {
			return '/' + path + (data ? '?' + Url.param(data) : '');
		}
	}
	
	go (path, data, title = '', state = {}) {
		if (this.routeConf.history == 'hashHistory') {
			window.logger.goTo('#' + path + (data ? '?' + Url.param(data) : ''));
		}
		if (this.routeConf.history == 'browserHistory') {
			window.history.pushState(state, title, path + (data ? '?' + Url.param(data) : ''));
			this.emit('popstate');
		}
	}
}

export default new Route;
