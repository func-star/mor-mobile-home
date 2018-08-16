# Toast

## 使用指南
```jsx
import { Toast } from 'mona';

Toast(options)
```

## 代码演示

### • 文字提示
```jsx
Toast.config({
	message: 'Toast'
})
```

### • 成功提示
```jsx
Toast.config({
	message: '成功咯',
	type: 'success'
})
```

### • 失败提示
```jsx
Toast.config({
	message: '出错了',
	type: 'error'
})
```

### • 自定义提示持续时间
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
