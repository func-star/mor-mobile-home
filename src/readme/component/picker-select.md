# PickerSelect
✨✨弹框数据滚动选择器

## 使用指南
```jsx
import { PickerSelect } from 'mona'

PickerSelect.config(options)
```

## 代码演示

### • 基础用法

```jsx
this.source = [{
  n: 'item - 1', v: 1
}, {
  n: 'item - 2', v: 2
}, {
  n: 'item - 3', v: 3
}, {
  n: 'item - 4', v: 4
}, {
  n: 'item - 5', v: 5
}]

PickerSelect.config({
	source: this.source,
	nameKey: 'n', // 默认 name
	valueKey: 'v', // 默认 value
	defaultValue: this.value, // 或者ths.value.v
	onConfirm: (data) => {
		this.value = data.v
		this.setState({})
	},
	onCancel: (type) => {
		console.log(type)
	}
})
```

### • 设定初始值
通过`defaultValue`属性可以设定初始值

```jsx
this.value = 2

PickerSelect.config({
	source: [1, 2, 3, 4, 5, 6],
	defaultValue: this.value,
	isKv: false,
	onConfirm: (data) => {
		this.value = data
		this.setState({})
	}
})
```

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| source | 列表数据源 | `Array` | `[]` | - |
| isKv | 数组中的每一项的数据类型，区分是否为key-value | `Boolean` | `true` | - |
| nameKey | 若`isKv === true`，`nameKey`表示展示字段的key | `String` | `name` | - |
| valueKey | 若`isKv === true`，`valueKey`表示取值字段的key | `String` | `value` | - |
| defaultValue | 初始值 | `String` `Object` | - | - |
| onConfirm(date) | 点击确认之后的回调，返回数组中的被选中项 | `Function` | - | - |
| onCancel(type) | 点击取消之后的回调，返回取消类型 | `Function` | - | - |
