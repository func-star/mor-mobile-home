class Components {
	constructor () {
		this.setIndexData()
	}
	
	components = {
		base: {
			name: '基础组件',
			map: {
				layout: { name: 'layout - 布局组件', url: 'layout' },
				toast: { name: 'Toast - 提示', url: 'toast' },
				modal: { name: 'Modal - 弹框', url: 'modal' },
				listView: { name: 'ListView - 瀑布流容器', url: 'list-view' },
				tabs: { name: 'Tabs - 切换面板', url: 'tabs' },
				swiper: { name: 'Swiper - 轮播组件', url: 'swiper' },
				loading: { name: 'Loading - 加载', url: 'loading' },
				popup: { name: 'popup - 弹层', url: 'popup' },
				datePicker: { name: 'DatePicker - 时间日期事件选择器', url: 'date-picker' },
				datePickerRange: { name: 'DatePickerRange - 日期区间选择器', url: 'date-picker-range' },
				modalSelect: { name: 'ModalSelect - 列表数据选择器', url: 'modal-select' },
				pickerSelect: { name: 'PickerSelect - 列表数据选择器', url: 'picker-select' }
			}
		},
		other: {
			name: '其他',
			map: {
				hammer: { name: 'Hammer - 手势库', url: 'hammer' },
				pickerView: { name: 'PickerView - 滚动面板', url: 'picker-view' }
			}
		}
	}
	
	setIndexData () {
		this.indexData = []
		this.allData = {}
		for (let v in this.components) {
			let res = {}
			const item = this.components[v]
			res.name = item.name
			let list = []
			for (let i in item.map) {
				list.push(item.map[i])
				this.allData[i] = item.map[i]
			}
			res.list = list
			this.indexData.push(res)
		}
	}
	
	getIndexData () {
		return this.indexData
	}
	
	getComponentItemInfo (name) {
		return this.allData[name]
	}
}

export default new Components
