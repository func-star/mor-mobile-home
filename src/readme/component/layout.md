# Layout && Flex 布局

提供了`Row`和`Col`两个组件来进行行列布局

## 使用指南
```
import {Row, Col} from 'mona'
```

## 代码演示

### • 基础用法
Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比

```jsx
<Row>
	<Col span={12}>span: 12</Col>
	<Col span={12}>span: 12</Col>
</Row>
<Row>
	<Col span={8}>span: 8</Col>
	<Col span={8}>span: 8</Col>
	<Col span={8}>span: 8</Col>
</Row>
<Row>
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
</Row>
```

### • 每列元素之间增加间隙
通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```jsx
<Row gutter={10}>
	<Col span={12}>
		<div>gutter: 10px</div>
	</Col>
	<Col span={12}>
		<div>gutter: 10px</div>
	</Col>
</Row>
```

### • flex布局，水平垂直居中
通过`align`和`justify`属性可以分别设置水平方向和垂直方向的 flex 布局方式，`Row`不一定要包裹`Col`

```jsx
<Row align="center" justify="center">
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
</Row>
```

### • flex布局，垂直布局
通过`direction`属性可以选择是 flex 水平布局还是 flex 垂直布局

```jsx
<Row gutter={10} direction="column" align="center" justify="center">
	<Col span={6}>span: 6</Col>
	<Col span={6}>span: 6</Col>
</Row>
```

## API

### Row

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| gutter | 列元素之间的间距（单位为px） | `Number` | 0 | - |
| justify | 水平布局类型 justify-content: * | `String` | - | `start|center|end|space-between|space-around` |
| align | 垂直布局类型，匹配 align-items: * | `String` | - | `flex-start|flex-end|center|baseline|stretch` |
| direction | 水平布局或者垂直布局，匹配 flex-direction: * | `String` | - | `column|row` |


### Col

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| span | 单元格宽度 | `Number|String` | - | - |
