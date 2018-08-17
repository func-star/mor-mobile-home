# Swiper

✨✨一款支持你各种需求的跑马灯-轮播组件

## 使用指南
```jsx
import { Swiper } from 'mona'

const SwiperItem = Swiper.item
```

## 代码演示

### • 基础用法

```jsx
export default class Test extends Component {
	afterChange (index) {
		console.log(index)
	}

	render () {
		return (
			<Swiper afterChange={this.afterChange.bind(this)}>
				<SwiperItem style={{ background: '#8bc34a' }}>第一面板</SwiperItem>
				<SwiperItem style={{ background: '#03a9f4' }}>第二面板</SwiperItem>
				<SwiperItem style={{ background: '#ff9800' }}>第三面板</SwiperItem>
			</Swiper>
		)
	}
}
```

### • 支持循环播放

通过设置`loop`来控制是否允许循环轮播

```jsx
<Swiper loop={true}>
	<SwiperItem style={{ background: '#8bc34a' }}>第一面板</SwiperItem>
	<SwiperItem style={{ background: '#03a9f4' }}>第二面板</SwiperItem>
	<SwiperItem style={{ background: '#ff9800' }}>第三面板</SwiperItem>
</Swiper>

```

### • 修改轮播区域宽度

✨通过`childWidth`来控制每次切换的区域宽度
✨通过这个属性可以实现一些比较高阶的轮播交互

```jsx
<Swiper loop={true} childWidth={260}>
	<SwiperItem style={{ padding: '0 10px' }}>
		<div style={{ background: '#8bc34a' }}>第一面板</div>
	</SwiperItem>
	<SwiperItem style={{ padding: '0 10px' }}>
		<div style={{ background: '#03a9f4' }}>第二面板</div>
	</SwiperItem>
	<SwiperItem style={{ padding: '0 10px' }}>
		<div style={{ background: '#ff9800' }}>第三面板</div>
	</SwiperItem>
</Swiper>
```

### • 去除下标小圆点，可以根据场景自己实现

通过`dots`属性来控制是否展示默认下标

```jsx
<Swiper dots={false}>
	<SwiperItem style={{ background: '#8bc34a' }}>第一面板</SwiperItem>
	<SwiperItem style={{ background: '#03a9f4' }}>第二面板</SwiperItem>
	<SwiperItem style={{ background: '#ff9800' }}>第三面板</SwiperItem>
</Swiper>
```

## API

### Swiper

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| beforeChange | 在视图切换之前触发 | `Function` | - | - |
| afterChange | 在视图切换之后触发 | `Function` | - | - |
| enableDamp | 是否允许弹性阻尼效果 | `Boolean` | true | - |
| enableTouch | 是否允许手势左右滑动切换视图 | `Boolean` | true | - |
| loop | 是否允许循环播放 | `Boolean` | false | - |
| autoplay | 是否自动轮播 | `Boolean` | true | - |
| autoplayInterval | 自动轮播时间间隔 | `Number` | 3000 | - |
| dots | 是否展示默认下标小圆点 | `Boolean` | true | - |
| defaultIndex | 默认定位在第几个视图 | `Number` | 0 | - |
| childWidth | 每次切换的区域宽度 | `Number` | 0 | - |
| className | className属性 | `String` | - | - |


### SwiperItem

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| children | 内容区域视图 | `String` `Node` | - | - |
| className | className属性 | `String` | - | - |
