# Hammer

✨✨一款轻量级的手势库组件

✨✨在原来的event事件的基础之上添加了角度、速度以及偏移量等数据，帮助你更方便的实现交互功能

## 使用指南
```jsx
import { Hammer } from 'mona'
```

## 代码演示
### 常规用法

```jsx
export default class Test extends Component {
	pan (e) {
		console.log(e)
	}

	render () {
		return (
			<Hammer
				pan={this.pan.bind(this)}
				className="full flex-center">
				触控板 - 滑动
			</Hammer>
		)
	}
}
```

### 长按事件
```jsx
export default class Test extends Component {
	press (e) {
    		console.log(e)
    		console.log('长按事件')
    	}

	render () {
		return (
			<Hammer
				press={this.press.bind(this)}
				className="full flex-center">
				触控板 - 长按
			</Hammer>
		)
	}
}
```

## API

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| pan | `touchmove`的第一次和最后一次触发 | `Function` | - | - |
| scroll | 滚动时触发 | `Function` | - | - |
| touchstart | `touchstart`动时触发 | `Function` | - | - |
| panstart | `touchmove`的第一次触发 | `Function` | - | - |
| panmove | `touchmove`动时触发 | `Function` | - | - |
| panend | `touchmove`的最后一次触发 | `Function` | - | - |
| press | 长按时触发 | `Function` | - | - |
| pancancel | `touchCancel`时触发 | `Function` | - | - |
| children | 内容区域视图 | `String` `Node` | - | - |
| className | className属性 | `String` | - | - |
