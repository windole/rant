# Swiper 轮播

### 介绍

用于循环播放一组图片或内容。

### 引入

```js
import { Swiper } from 'rc-ui-lib';
```

## 代码演示

### 基础用法

每个 Swiper.Item 代表一张轮播卡片，可以通过 `autoplayInterval` 属性设置自动轮播的间隔。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper className="my-swipe" autoplayInterval={3000}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.my-swipe .rc-swiper-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: #3f45ff;
}
```

### 监听 onIndexChange 事件

在每一页轮播结束后，会触发 `onIndexChange` 事件。

```jsx
import React from 'react';
import { Swiper, Toast } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper onIndexChange={(index) => Toast(`当前 Swipe 索引： + ${index}`)}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 纵向滚动

设置 `direction="vertical"` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper direction="vertical">
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 自定义滑块大小

滑块默认宽度为 `100%`，可以通过 `slideSize` 属性改变滑块宽度。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 滑块居中

通过 `trackOffset` 改变滑块偏移量实现居中展示。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 垂直滑块居中

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper style={{ height: 150 }} direction="vertical" slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 自定义指示器

通过 `indicator` 属性可以自定义指示器的样式。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper
      indicator={(total, current) => (
        <div className="custom-indicator">
          {current + 1}/{total}
        </div>
      )}
    >
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
}
```

## API

### Swipe Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplayInterval | 自动轮播间隔，单位为 ms | _number \| boolean_ | `false` |
| autoplayIntervalInterval | 动画时长，单位为 ms | _number_ | `300` |
| defaultIndex | 初始位置索引值 | _number_ | `0` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| direction | 滚动方向 | _DirectionTypes_ | `horizontal` |
| touchable | 是否可以通过手势滑动 | _boolean_ | `true` |
| slideSize | 滑块的宽度百分比 | _number_ | `100` |
| trackOffset | 滑块轨道整体的偏移量百分比 | _number_ | `0` |
| stuckAtBoundary | 是否在边界两边卡住，避免出现空白，仅在非 `loop` 模式且 `slideSize` < 100 时生效 | _boolean_ | `false` |
| indicator | 自定义指示器 | _boolean \| (total, current) => ReactNode_ | - |
| indicatorProps | 指示器属性 | _IndicatorProps_ | - |
| stopPropagation | 阻止某些事件的冒泡[2.0.2] | _PropagationEvent[]_ | [] |

```ts
type PropagationEvent = 'mouseup' | 'mousemove' | 'mousedown';
```

### DirectionTypes 格式

| 名称                 | 说明     | 类型     |
| -------------------- | -------- | -------- |
| horizontal           | 水平方向 | _string_ |
| direction="vertical" | 垂直方向 | _string_ |

### IndicatorProps 格式

| 名称      | 说明       | 类型     |
| --------- | ---------- | -------- |
| className | 指示器类名 | _string_ |
| style     | 指示器样式 | _string_ |

### Swiper Events

| 事件名        | 说明                 | 回调参数            |
| ------------- | -------------------- | ------------------- |
| onIndexChange | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwiperItem Events

| 事件名  | 说明       | 回调参数            |
| ------- | ---------- | ------------------- |
| onClick | 点击时触发 | _event: MouseEvent_ |

### Swiper 方法

通过 ref 可以获取到 Swiper 实例并调用实例方法。

| 方法名    | 说明           | 参数            | 返回值 |
| --------- | -------------- | --------------- | ------ |
| swipePrev | 切换到上一轮播 | -               | -      |
| swipeNext | 切换到下一轮播 | -               | -      |
| swipeTo   | 切换到指定位置 | _index: number_ | -      |

### 类型定义

组件导出以下类型定义：

```js
import type { SwiperInstance } from 'rc-ui-lib';
```

`SwiperInstance` 是组件实例的类型，用法如下：

```js
import { useRef } from 'react';
import type { SwiperInstance } from 'rc-ui-lib';

const swipeRef = useRef < SwipeInstance > null;

swipeRef.current?.swipeNext();
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                           | 默认值                    | 描述 |
| ---------------------------------------------- | ------------------------- | ---- |
| --rc-swipe-slide-size                          | _100%_                    | -    |
| --rc-swipe-track-offset                        | _0%_                      | -    |
| --rc-swipe-border-radius                       | _0px_                     | -    |
| --rc-swipe-indicator-size                      | _6px_                     | -    |
| --rc-swipe-indicator-margin                    | _var(--rc-padding-sm)_    | -    |
| --rc-swipe-indicator-active-opacity            | _1_                       | -    |
| --rc-swipe-indicator-inactive-opacity          | _0.3_                     | -    |
| --rc-swipe-indicator-active-background-color   | _var(--rc-primary-color)_ | -    |
| --rc-swipe-indicator-inactive-background-color | _var(--rc-border-color)_  | -    |
