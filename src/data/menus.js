import Components from './components'

class Menus {
	constructor () {
		this.setMenus()
	}
	
	menus = [{
		name: '快速使用',
		url: 'how-to-use'
	}]
	
	menusLast = [{
		name: 'react 系列产品',
		children: [{
			name: 'moreact-router',
			name2: '单页面路由管理',
			url: 'https://github.com/func-star/mo-react-router'
		}, {
			name: 'mona-redux',
			name2: '全局状态管理',
			url: 'test'
		}, {
			name: 'mona-event',
			name2: '事件管理',
			url: 'https://github.com/func-star/mona-events'
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
