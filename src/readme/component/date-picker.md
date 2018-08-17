# DatePicker
✨✨一款非常方便的日期区间选择器

## 使用指南
```jsx
import { DatePicker } from 'mona'

DatePicker.config(options)
```

## 代码演示

### • 基础用法

```jsx
DatePicker.config({
	onConfirm: (data) => {
		this.value = data
		this.setState({})
	},
	onCancel: type => {
		console.log(type)
	}
})
```

### • 设定初始化时间
通过`date`属性可以初始化设定默认时间

```jsx
//'2019-01-02 00:00:00' 时间戳
this.value = 1546358400000

DatePicker.config({
	format: 'second',
	date: this.value,
	onConfirm: (data) => {
		this.value = data
		this.setState({})
	}
})
```

### • 指定时间格式
通过`format`属性可以指定时间格式，默认精确到秒

```jsx
// 选择到月
DatePicker.config({
	format: 'month',
	onConfirm: (data) => {
		this.value = data
		this.setState({})
	},
	onCancel: type => {
		console.log(type)
	}
})
```

```jsx
// 选择到天
DatePicker.config({
	format: 'day',
	onConfirm: (data) => {
		this.value = data
		this.setState({})
	},
	onCancel: type => {
		console.log(type)
	}
})
```

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| format | 时间精度，选择时间的维度 | `String` | `second` | `second` `minute` `hour` `day` `month` |
| date | 初始化设定时间，接受13位（ms）时间戳 | `Number` | 当前时间戳 | - |
| onConfirm(date) | 点击确认之后的回调，返回13位（ms）时间戳 | `Function` | - | - |
| onCancel(type) | 点击取消之后的回调，返回取消类型 | `Function` | - | - |
