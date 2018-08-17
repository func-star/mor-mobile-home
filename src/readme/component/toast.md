# Toast

## 使用指南
```jsx
import { Toast } from 'mona';

Toast(options)
```

## 代码演示

### • 文字提示
通过`message`属性来设置提示文案

```jsx
Toast.config({
	message: 'Toast'
})
```

### • 成功提示
通过设置`type: 'success'`属性来展示成功类型提示

```jsx
Toast.config({
	message: '成功咯',
	type: 'success'
})
```

### • 失败提示
通过设置`type: 'error'`属性来展示失败类型提示

```jsx
Toast.config({
	message: '出错了',
	type: 'error'
})
```

### • 自定义提示持续时间
通过设置`duration`属性来修改提示展示时间

```jsx
Toast.config({
	message: '成功咯',
	duration: 3000,
	type: 'success'
})
```


## options

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| duration | 持续展示事件(ms) | `Number` | 2000 | - |
| message | 提示信息 | `String` | - | - |
| type | 信息类型 | String | `info` | `success` `error` `info` |
