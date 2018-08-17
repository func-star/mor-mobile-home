# Loading

## 使用指南
```
import { Loading } from 'mona'
```

## 代码演示

### • 基础用法

```jsx
// 显示
Loading.show()

// 隐藏
Loading.hide()
```

### • 展示蒙层，默认不展示蒙层
通过设置`isHaveMask`属性来控制蒙层展示，默认不展示蒙层

```jsx
Loading.show({
	isHaveMask: true
})
```

### • 自定义提示文案
通过设置`loadingText`来自定义提示文案，默认文案'加载中'

```jsx
Loading.show({
	loadingText: '别急哟'
})
```

### • 自定义内容区域视图
通过设置`template`来自定义内容区域视图

```jsx
const temp = <div className="demo-loading-template flex-center">加载中..</div>
Loading.show({
	template: temp
})
```

## 方法

| 参数 | 说明 | 参数 | 返回值 |
| --- | --- | --- | :-- |
| show | 显示loading | `options` | - |
| hide | 隐藏loading | - | - |

## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| loadingText | 自定义提示文案 | `String` | 加载中 | - |
| isHaveMask | 是否显示背景蒙层 | `Boolean` | `false` | - |
| template | 自定义内容区域视图 | `String` `Node` | - | - |
