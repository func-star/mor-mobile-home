# ListView

✨✨支持下拉触发和上滑触底触发

## 使用指南
```jsx
import { ListView } from 'mona'
```

## 代码演示

```jsx
export default class Test extends Component {
	componentWillMount () {
		this.getList()
	}

	list = []

	getList () {
		this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}

	onRefresh (done) {
		setTimeout(() => {
			this.getList()
			this.isEnd = this.list.length > 20
			this.setState({})
			done() // call done
		}, 2000)
	}

	onInfinite (done) {
		setTimeout(() => {
			this.list = this.list.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
			this.isEnd = this.list.length > 40
			this.setState({})
			done()
		}, 1500)
	}

	toTop () {
		ListView.toTop()
	}

	render () {
		return (
			<ListView
				style={{ height: '100%' }}
				onRefresh={this.onRefresh.bind(this)}
				onInfinite={this.onInfinite.bind(this)}
				isEnd={this.isEnd}>
				<div className="list-view-group">
					<For of={this.list} each="item" index="index">
						<div className="list-view-item flex-center-y" onClick={this.toTop.bind(this)} key={index}>
							<img className="avatar r-circle" src="https://avatars3.githubusercontent.com/u/13312192?s=40&v=4" alt="" />
							<div className="info flex-1">杨玺 - {index}</div>
						</div>
					</For>
					<If condition={this.isEnd}>
						<div className="flex-center" style={{ height: 80 }}>没有更多了哟～</div>
					</If>
				</div>
			</ListView>
		)
	}
}
```

## 方法

| 参数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :-- |
| toTop | 返回顶部 | - | - |

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| enableInfinite | 是否允许下滑加载更多 | `Boolean` | `true` | - |
| infiniteTimer | 下滑触底检测频率 | `Number` | 200 | - |
| bottomEmit | 距离底部多少像素触发回调 | `Number` | 100 | - |
| onInfinite(done) | 下滑触底钩子函数，done函数是通知回调 | `Function` | - | - |
| enableRefresh | 是否允许下拉刷新 | `Boolean` | `true` | - |
| offset | 下拉多少距离触发下拉刷新回调 | `Number` | 50 | - |
| onRefresh (done)| 拉刷新触发钩子函数，done函数是通知回调 | `Function` | - | - |
| isEnd| 是否已经加载完毕，不再触发下滑事件 | `Boolean` | `false` | - |
| children | 内容区域视图 | `String` `Node` | - | - |
| className | className属性 | `String` | - | - |
