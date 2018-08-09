import Components from './components'

class Menus {
	constructor () {
		this.setMenus()
	}
	
	menus = [{
		name: '开发指南',
		children: [{
			name: '介绍',
			url: 'home'
		}, {
			name: '快速上手',
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
	}
	
	getMenus () {
		return this.menus
	}
}

export default new Menus
