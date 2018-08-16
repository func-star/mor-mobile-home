# modal 具备 dialog 功能

## 使用指南
```
import { Modal } from 'mona';

Toast(options)
```

## 代码演示

### • 节点插入方式
提供`onConfirm`和`onCancel`两个确认和取消时的钩子函数

```jsx
export default class Test extends Component {
	show = false

	confirm () {
		// do something
	}

	cancel (type) {
		console.log(type)
		// ...
	}

	render () {
		return (
			<Modal
            	visible={this.show}
            	title="基础用法"
            	onCancel={this.cancel.bind(this)}
            	onConfirm={this.confirm.bind(this)}>
            	demo1 - 基础用法
            </Modal>
		)
	}
}

```

### • 自定义title模版

```jsx
<Modal
	visible={this.show}
	title={<span style={{ color: 'red' }}>自定义用法</span>}
	onCancel={this.cancel.bind(this)}
	onConfirm={this.confirm.bind(this)}>
	<div>demo2 - 自定义title模版</div>
</Modal>
```

### • 自定义确认和取消文案、无title

```jsx
<Modal
	visible={this.show}
	confirmText="知道了"
	cancelText="算了吧"
	onCancel={this.cancel.bind(this)}
	onConfirm={this.confirm.bind(this)}>
	<div>demo3 - 自定义确认和取消文案、无title</div>
</Modal>
```

### • 无底部，可以根据需求自定义底部

```jsx
<Modal
	visible={this.show}
	title="自定义用法"
	confirmText="知道了"
	cancelText="算了吧"
	maskClosable={false}
	footer={false}
	onCancel={this.cancel.bind(this)}
	onConfirm={this.confirm.bind(this)}>
	<div>demo4 - 无底部，且蒙层不可关闭</div>
	<div style={{ margin: 15, color: '#333' }} onClick={this.hide.bind(this)}>点我关闭</div>
</Modal>
```

### • 无取消按钮

```jsx
<Modal
	visible={this.show}
	title="自定义用法"
	enableCancel={false}
	confirmText="知道了"
	onCancel={this.cancel.bind(this)}
	onConfirm={this.confirm.bind(this)}>
	<div>demo5 - 无取消按钮</div>
</Modal>
```

### • api调用方式, `dialog`功能

> api 调用方式和节点插入方式提供的所有属性参数都一致，可参考上述demo进行自定义

```jsx
Modal.confirm({
	title: <span style={{ color: 'red' }}>自定义用法(dialog)</span>,
	content: <div>所有参数和'节点插入方式'提供的一致</div>,
	confirmText: '知道了',
	cancelText: '不要了',
	onConfirm () {
		console.log('confirm')
	},
	onCancel (type) {
		console.log(type)
	}
})
```


## 方法

| 参数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :-- |
| confirm | 确认框（dialog） | `options` | - |

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| visible | 控制打开关闭 | `Boolean` | `false` | - |
| cancelText | 取消文案 | `String` | 取消 | - |
| confirmText | 确定文案 | `String` | 确定 | - |
| enableCancel | 是否展示取消按钮 | `Boolean` | `true` | - |
| isHaveMask | 是否显示背景蒙层 | `Boolean` | `true` | - |
| maskClosable | 是否允许背景点击关闭 | `Boolean` | `true` | - |
| onConfirm | 点击确认之后的回调 | `Function` | null | - |
| onCancel | 点击取消之后的回调 | `Function` | null | - |
| footer | 是否需要底部bar | `Boolean` | `true` | - |
| title | 头部展示视图或者文案 | `String` `Dom` | - | - |
| children | 内容区域视图 | `String` `Dom` | - | - |
