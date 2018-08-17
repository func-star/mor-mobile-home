# Tabs

✨✨一款支持手势左右滑动来切换视图的组件，支持按需加载

## 使用指南
```jsx
import { Tabs } from 'mona'

const TabItem = Tabs.item
```

## 代码演示

### • 基础用法

```jsx
export default class Test extends Component {
	afterChange (index) {
		console.log(index)
	}

	tabs = [
		{ title: 'Tab - 1' },
		{ title: 'Tab - 2' },
		{ title: 'Tab - 2' }
	]

	render () {
		return (
			<Tabs style={{ height: 200 }} tabs={this.tabs} afterChange={this.afterChange.bind(this)} className="tabs-pannel">
				<TabItem className="flex-center">第一面板</TabItem>
				<TabItem className="flex-center">第二面板</TabItem>
				<TabItem className="flex-center">第三面板</TabItem>
			</Tabs>
		)
	}
}
```

### • 调用api切换面板，初始化在第二面板

通过`tabs`实例上的`changeIndex`方法来切换面板

```jsx
export default class Test extends Component {
	tab (index) {
		this.refs.tabs.changeIndex(index)
	}

	render () {
		return (
			<Tabs style={{ height: 200 }} ref="tabs" defaultIndex={1} tabs={this.tabs} afterChange={this.afterChange.bind(this)} className="tabs-pannel">
            	<TabItem className="flex-center">
            		<DemoButton onClick={this.tab.bind(this, 1)}>切换wrap to 1</DemoButton>
            	</TabItem>
            	<TabItem className="flex-center">
            		<DemoButton onClick={this.tab.bind(this, 0)}>切换wrap to 0</DemoButton>

            	</TabItem>
            	<TabItem className="flex-center">
            		<DemoButton onClick={this.tab.bind(this, 0)}>切换wrap to 0</DemoButton>
            	</TabItem>
            </Tabs>
		)
	}
}

```

### • 禁用手势

通过`enableTouch`属性可以达到禁用手势的目的

```jsx
<Tabs style={{ height: 200 }} enableTouch={false} tabs={this.tabs} afterChange={this.afterChange.bind(this)} className="tabs-pannel">
	<TabItem className="flex-center">第一面板</TabItem>
	<TabItem className="flex-center">第二面板</TabItem>
	<TabItem className="flex-center">第三面板</TabItem>
</Tabs>
```

### • 禁用弹性阻尼效果，左滑到底或者右滑到底没有反弹动画效果

通过`enableDamp`属性可以达到禁用弹性阻尼的目的

```jsx
<Tabs style={{ height: 200 }} enableDamp={false} tabs={this.tabs} afterChange={this.afterChange.bind(this)} className="tabs-pannel">
	<TabItem className="flex-center">第一面板</TabItem>
	<TabItem className="flex-center">第二面板</TabItem>
	<TabItem className="flex-center">第三面板</TabItem>
</Tabs>
```

### • 取消默认头部，可根据需求自定义头部导航

通过设置`tabs`属性为`false`来隐藏默认头部，根据`afterChange`返回的位置信息来自定义头部导航

```jsx
<Tabs style={{ height: 200 }} tabs={false} afterChange={this.afterChange.bind(this)} className="tabs-pannel">
	<TabItem className="flex-center">第一面板</TabItem>
	<TabItem className="flex-center">第二面板</TabItem>
	<TabItem className="flex-center">第三面板</TabItem>
</Tabs>
```

## API

### Tabs

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| beforeChange | 在视图切换之前触发 | `Function` | - | - |
| afterChange | 在视图切换之后触发 | `Function` | - | - |
| enableDamp | 是否允许弹性阻尼效果 | `Boolean` | true | - |
| enableTouch | 是否允许手势左右滑动切换视图 | `Boolean` | true | - |
| defaultIndex | 默认定位在第几个视图 | `Number` | 0 | - |
| tabs | 头部切换栏，不传则隐藏 | `Array` | null | - |
