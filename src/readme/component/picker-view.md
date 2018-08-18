# PickerView

## 使用指南
```jsx
import { PickerView } from 'mona'
```

## 代码演示

### • 基础用法

```jsx

export default class Test extends Component {
	data = Data.getComponentItemInfo('pickerView')

	value = '2018年'

	getValue (value) {
		this.value = value
	}

	source = []

	componentWillMount () {
		for (let i = 0; i < 100; i++) {
			this.source.push(2000 + i + '年')
		}
	}

	render () {
		return (
			<PickerView
				source={this.source}
				isKv={false}
				defaultValue={this.value}
				onChange={this.getValue.bind(this)} />
		)
	}
}
```

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| source | 列表数据源 | `Array` | `[]` | - |
| isKv | 数组中的每一项的数据类型，区分是否为key-value | `Boolean` | `true` | - |
| nameKey | 若`isKv === true`，`nameKey`表示展示字段的key | `String` | `name` | - |
| valueKey | 若`isKv === true`，`valueKey`表示取值字段的key | `String` | `value` | - |
| defaultValue | 初始值 | `String` `Object` | - | - |
| cellHeight | 单元格高度 | `Number` | `34` | - |
| onChange(data) | 切换之后的回调，返回数组中的被选中项 | `Function` | - | - |
