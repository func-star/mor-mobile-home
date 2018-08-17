# Popup

## 使用指南
```jsx
import { Popup } from 'mona';
```

## 代码演示

### • 基础用法
通过设置`placement`属性来控制弹出点

```jsx
// 底部弹出
export default class Test extends Component {
	show = false

	hide () {
		this.show = false
		this.setState({})
	}

	render () {
		return (
			<Popup visible={this.show} placement="bottom" onClose={this.hide.bind(this)}>
				<div style={{ height: '286px' }}>
					<button onClick={this.hide.bind(this)}>关闭</DemoButton>
				</div>
			</Popup>
		)
	}
}
```

```jsx
// 顶部弹出
<Popup visible={this.show} placement="top" onClose={this.hide.bind(this)}>
	<div style={{ height: '286px' }}>
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>}
```

```jsx
// 右侧弹出
<Popup visible={this.show} placement="right" onClose={this.hide.bind(this)}>
	<div style={{ width: '200px' }} className="h-full">
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>
```

```jsx
// 左侧弹出
<Popup visible={this.show} placement="left" onClose={this.hide.bind(this)}>
	<div style={{ width: '200px' }} className="h-full">
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>
```

### • 是否展示动画效果
通过`animate`属性来控制是否有动画弹出效果

```jsx
<Popup visible={this.show} animate={false} onClose={this.hide.bind(this)}>
	<div style={{ height: '286px' }}>
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>
```

### • 是否显示背景蒙层
通过`isHaveMask`属性来控制是否显示背景蒙层

```jsx
<Popup visible={this.show} isHaveMask={false} onClose={this.hide.bind(this)}>
	<div style={{height: '286px'}}>
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>
```

### • 是否允许背景点击关闭
通过`maskClosable`属性来控制是否允许背景点击关闭

```jsx
<Popup visible={this.show} maskClosable={false} onClose={this.hide.bind(this)}>
	<div style={{ height: '286px' }}>
		<button onClick={this.hide.bind(this)}>关闭</DemoButton>
	</div>
</Popup>
```

## 方法

| 参数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :-- |
| confirm | 确认框（dialog） | `options` | - |

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| visible | 控制打开关闭 | `Boolean` | `false` | - |
| placement | 控制弹出点 | `String` | `bottom` | `bottom` `top` `right` `left` |
| isHaveMask | 是否显示背景蒙层 | `Boolean` | `true` | - |
| maskClosable | 是否允许背景点击关闭 | `Boolean` | `true` | - |
| animate | 是否展示动画效果 | `Boolean` | `true` | - |
| onClose | 点击蒙层关闭的回调 | `Function` | null | - |
| children | 内容区域视图 | `String` `Node` | - | - |
| className | className属性 | `String` | - | - |
