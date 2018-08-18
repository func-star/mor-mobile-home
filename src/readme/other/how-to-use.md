# 快速使用

## 安装

### NPM

```bash
npm i mor-mobile --save
```

### 引入组件

* 使用 babel-plugin-import

`babel-plugin-import` 是一款 `babel` 插件，它会在编译过程中将 `import` 的写法自动转换为按需引入的方式

```bash
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -dev
```

```
// 在 .babelrc 中添加插件配置
{
  "plugins": [
    ["import", {
      "libraryName": "mor-mobile",
      "libraryDirectory": "lib",
    }]
  ]
}
```

✨✨接着你可以在代码中直接引入 Mor-mobile 组件

```
import { Row, Col } from 'mor-mobile';
```

