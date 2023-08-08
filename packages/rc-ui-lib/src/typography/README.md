# Typography 文本

### 介绍

文本的基本格式。

### 引入

```js
import { Typography } from 'rc-ui-lib';
```

## 代码演示

### 基础用法

```jsx
<Typography.Text>这是一条文本</Typography.Text>
<Typography.Title>这是一条标题</Typography.Title>
<Typography.Link>这是一条链接</Typography.Link>
```

### 类型

设置 `type` 属性后，文本会展示不同的 ui 状态。

```jsx
<Typography.Text type="danger">这是一条文本</Typography.Text>
<Typography.Text type="primary">这是一条文本</Typography.Text>
<Typography.Text type="warning">这是一条文本</Typography.Text>
<Typography.Text type="secondary">这是一条文本</Typography.Text>
```

## API

### Typography.Text Typography.Link Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型，可选值`danger` ` secondary` `light` `primary` `success` `warning ` | _string_ | - |
| size | 文本大小，可选值`xs` `sm` `md` `lg` `xl` `xxl` | _boolean_ | `md` |
| disabled | 禁用文本 | _boolean_ | `false` |
| ellipsis | 文本省略 | _boolean_ _number_ | `false` |
| delete | 添加删除线样式 | _boolean_ | `false` |
| underline | 添加下划线样式 | _boolean_ | `false` |
| center | 文本居中 | _boolean_ | `false` |
| strong | 文本加粗 | _boolean_ | `false` |
| onClick | 点击事件 | _function_ | - |

### Typography.Title Props

| 参数  | 说明                                 | 类型     | 默认值 |
| ----- | ------------------------------------ | -------- | ------ |
| level | 重要程度，可选值 `1` `2` `3` `4` `5` | _number_ | `4`    |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                            | 默认值                     | 描述 |
| ------------------------------- | -------------------------- | ---- |
| --rc-typography-color           | _var(--rc-text-color)_     | -    |
| --rc-typography-link-color      | _var(--rc-primary-color)_  | -    |
| --rc-typography-font-size       | _var(--rc-font-size-md)_   | -    |
| --rc-typography-line-height     | _var(--rc-line-height-md)_ | -    |
| --rc-typography-primary-color   | _var(--rc-primary-color)_  | -    |
| --rc-typography-danger-color    | _var(--rc-danger-color)_   | -    |
| --rc-typography-success-color   | _var(--rc-success-color)_  | -    |
| --rc-typography-warning-color   | _var(--rc-warning-color)_  | -    |
| --rc-typography-secondary-color | _var(--rc-gray-6)_         | -    |
| --rc-typography-disabled-color  | _var(--rc-gray-5)_         | -    |
| --rc-typography-light-color     | _var(--rc-white-color)_    | -    |
