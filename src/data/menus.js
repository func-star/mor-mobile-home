import Components from './components'

class Menus {
	constructor () {
		this.setMenus()
	}
	
	menus = [{
		name: '开发指南',
		url: 'home'
	}, {
		name: '快速使用',
		url: 'component/test'
	}]
	
	menusLast = [{
		name: 'react 系列产品',
		children: [{
			name: 'moreact-router',
			name2: '单页面路由管理',
			url: 'react/router'
		}, {
			name: 'mona-event',
			name2: '事件管理',
			url: 'test'
		}, {
			name: 'mona-redux',
			name2: '全局状态管理',
			url: 'test'
		}]
	}]
	
	setMenus () {
		const components = Components.getIndexData()
		components.forEach(v => {
			let children = []
			v.list.forEach(i => {
				let name = i.name.split(' - ')
				children.push({
					name: name[0],
					name2: name[1],
					url: 'component/' + i.url
				})
			})
			this.menus.push({
				name: v.name,
				children
			})
		})
		this.menus = this.menus.concat(this.menusLast)
	}
	
	getMenus () {
		return this.menus
	}
}

export default new Menus
