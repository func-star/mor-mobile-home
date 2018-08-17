# DatePickerRange
✨✨一款非常方便的时间日期选择器

## 使用指南
```jsx
import { DatePickerRange } from 'mona'

DatePickerRange.config(options)
```

## 代码演示

### • 基础用法

```jsx
DatePickerRange.config({
	onConfirm: (data) => {
		this.valueStart = data.start
		this.valueEnd = data.end
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
this.valueStart = 1514851200000
this.valueEnd = 1546358400000

DatePickerRange.config({
	date: {
		start: this.valueStart,
		end: this.valueEnd
	},
	onConfirm: (data) => {
		this.valueStart = data.start
		this.valueEnd = data.end
		this.setState({})
	}
})
```

### • 指定时间格式
通过`format`属性可以指定时间格式，默认精确到天

```jsx
// 选择到月
DatePickerRange.config({
	format: 'month',
	onConfirm: (data) => {
		this.valueStart = data.start
		this.valueEnd = data.end
		this.setState({})
	}
})
```

```jsx
// 选择到年
DatePickerRange.config({
	format: 'year',
	onConfirm: (data) => {
		this.valueStart = data.start
		this.valueEnd = data.end
		this.setState({})
	}
})
```

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| format | 时间精度，选择时间的维度 | `String` | `second` | `second` `minute` `hour` `day` `month` |
| date | 初始化设定时间，`start`和`end`属性接受13位（ms）时间戳 | `Object` | `{ start: '', end: '' }` 当前时间戳 | - |
| onConfirm(date) | 点击确认之后的回调，`start`和`end`属性返回13位（ms）时间戳 | `Function` | - | - |
| onCancel(type) | 点击取消之后的回调，返回取消类型 | `Function` | - | - |
