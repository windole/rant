# 更新日志

### 介绍

rc-ui-lib 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

### 提示

当前文档为 rc-ui-lib 的更新日志

**发布节奏**

- 修订号：每周都会发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：无固定的发布时间，包含不兼容更新和重大功能更新。

## 更新内容

### [v2.0.7](https://github.com/windole/rant/compare/v2.0.6...v2.0.7)

`2023-08-09`
### [v2.0.6](https://github.com/windole/rant/compare/6860a8cf72e008e34652ac6be2d3546b4bebb449...v2.0.6)

`2023-08-09`

**Bug Fixes**

- 修改test workflow [350688](https://github.com/windole/rant/commit/3506887a589cf1ad513417ec5d0f072d542b1294)
- delete snap [09ca90](https://github.com/windole/rant/commit/09ca908bc6c22044b1c57e05e79671b996875ac1)

**Document**

- 更新README [519458](https://github.com/windole/rant/commit/5194581ae2773cb008cfb6d3e7632db0bd01b660)
- update shields [47d749](https://github.com/windole/rant/commit/47d749d880a7949a0b78326ef3919c5e27821fda)

- Update test.yml [866808](https://github.com/windole/rant/commit/866808507693bc47f9f0d8cf8c3e991149ac6aba)
- Update test.yml [3eedbe](https://github.com/windole/rant/commit/3eedbee96e5f0ab47eba3bd036a9b0ee3689e8f5)
- Update test.yml [ec8de1](https://github.com/windole/rant/commit/ec8de11df4a87a13b8de86b647f98951047699c5)
- Update test.yml [ea1aec](https://github.com/windole/rant/commit/ea1aec558fa66b56c42c0dcde5711643cbe909f0)
- Update test.yml [71f1ad](https://github.com/windole/rant/commit/71f1add589f580054f20d5f0991a6581561c2f67)
- Update test.yml [2ff838](https://github.com/windole/rant/commit/2ff838fbb2e1a1f9e0a094e650a11a85b0d46586)
- Update test.yml [398d3d](https://github.com/windole/rant/commit/398d3d6ab774f4864f5b4c9f83a18011220a276c)
- Update test.yml [c32cb0](https://github.com/windole/rant/commit/c32cb0b1362a94ceb04584ac1e61939868afa019)
- Update test.yml [7f1bc9](https://github.com/windole/rant/commit/7f1bc93393eac0f2027f285260a6017904fffcd5)
- Update test.yml [308e74](https://github.com/windole/rant/commit/308e74ef2a70b52da4ba82aef6278d9508f2f4f3)
- Update test.yml [11aeab](https://github.com/windole/rant/commit/11aeabdb6bd6d336c08b48e1610fa47550d9a57d)
- Update test.yml [29e9bd](https://github.com/windole/rant/commit/29e9bddf30ed87305ec04698cc12579b025473b5)
- Update test.yml [8b6a82](https://github.com/windole/rant/commit/8b6a827679d9304b308382ebca1b609150919597)
- Update test.yml [347dae](https://github.com/windole/rant/commit/347daed7b225bb89f12f611765937dfbf7b849e5)
- Update test.yml [dac1e5](https://github.com/windole/rant/commit/dac1e59e6375e0f713b433821cd906ebba7f1c2c)
- Update test.yml [7f3b8e](https://github.com/windole/rant/commit/7f3b8ebbf683ea6e30b0e97c0cf07465fd6fec07)
- Update test.yml [a86d1e](https://github.com/windole/rant/commit/a86d1ed8114a03afb4d987c853ed213460b8813b)
- Update test.yml [b1550b](https://github.com/windole/rant/commit/b1550b98c5ac8ec241f805c3bdd5a6975b69973a)
- Update test.yml [1fb0c5](https://github.com/windole/rant/commit/1fb0c58172c935853316e0380bba032c987e51fc)
- Update test.yml [5c71ce](https://github.com/windole/rant/commit/5c71ced60ba7783d05641a389db51652e337b270)
- Create test.yml [6860a8](https://github.com/windole/rant/commit/6860a8cf72e008e34652ac6be2d3546b4bebb449)

**Feature**

- 删除不校验代码 [479209](https://github.com/windole/rant/commit/479209ae4b986adb7c7326eeef5bd037d4a4da3b)
- 添加弹窗组件 [969870](https://github.com/windole/rant/commit/969870d28237cffee39194e62dbe2b6338ab0ea0)
- add flex component [ad9e08](https://github.com/windole/rant/commit/ad9e084e2d970febc36d860e987b65ead32104ed)
- add Grid [200a53](https://github.com/windole/rant/commit/200a53d256e1aeb58615e4292b5d14750085e533)

### [2.0.5](https://github.com/rancui/rc-ui-lib/compare/v2.0.4...v2.0.5)

`2023-08-04`

**Bug Fixes**

- PasswordInput： 修复组件阻止默认事件问题
- DateTimePicker：修改 atePicker 中 confirm 时拿不到最新值的问题

### [2.0.4](https://github.com/rancui/rc-ui-lib/compare/v2.0.3...v2.0.4)

`2023-07-28`

**Bug Fixes**

- DateTimePicker: useRefState hook 判断逻辑的调整 以及 修复设置 value 无效问题

**Features**

- DateTimePicker: 新增清空输入框 ref 函数

### [2.0.3](https://github.com/rancui/rc-ui-lib/compare/v2.0.2...v2.0.3)

`2023-06-20` **Features**

- PasswordInput: 新增可清空输入框内容的 ref 函数 ([24a5331](https://github.com/rancui/rc-ui-lib/commit/24a53317f5000accf65854284ec01f5492b28540))

### [2.0.2](https://github.com/rancui/rc-ui-lib/compare/v2.0.1...v2.0.2)

`2023-06-14` **Features**

- DateTimePicker: 新增嵌套功能、添加 stopPropagation 属性([4dd65dd](https://github.com/rancui/rc-ui-lib/commit/4dd65dd73de8eaaa61c42f569279bb82e8a331ec))

### [2.0.1](https://github.com/rancui/rc-ui-lib/compare/v1.3.6...v2.0.0)

`2023-04-25` **Bug Fixes**

- DateTimePicker: 修复级联选择选项没有刷新的问题

### [2.0.0](https://github.com/rancui/rc-ui-lib/compare/v1.3.6...v2.0.0)

`2023-03-08` **Features**

- 新增 TextEllipsis 组件

### [1.3.6](https://github.com/rancui/rc-ui-lib/compare/v1.3.5...v1.3.6)

`2022-11-23` **Bug Fixes**

- Form: 修复 Field 组件中 onChange 事件无法触发的问题

### [1.3.5](https://github.com/rancui/rc-ui-lib/compare/v1.3.4...v1.3.5)

`2022-11-22`

- 新增 CountDown 倒计时组件([831e59f](https://github.com/rancui/rc-ui-lib/commit/831e59f1062f6d591bd7d3e690b9b6315b0b4770))

- 新增 Progress 进度条组件([41ca9f4](https://github.com/rancui/rc-ui-lib/commit/41ca9f483a4a9b707a263dc63e4b70073b91f9c9))

### [1.3.4](https://github.com/rancui/rc-ui-lib/compare/v1.3.3...v1.3.4)

`2022-06-27`

**Bug Fixes**

- 显性增加 children 属性，修复部分场景出错([829569d](https://github.com/rancui/rc-ui-lib/commit/829569df7479b7b6967b55b8d4e557424d69fece))

### [1.3.3](https://github.com/rancui/rc-ui-lib/compare/v1.3.1...v1.3.3)

`2022-06-13`

**Bug Fixes**

- Swiper: 修复 height 导致的显示异常 ([28b1906](https://github.com/rancui/rc-ui-lib/commit/28b1906f6bb054156acfd4e6a4d5072c979c692a))

- Collapse: children 设为可选 ([34afa91](https://github.com/rancui/rc-ui-lib/commit/34afa91792ccddb94f1ddc14df8e49ebe0c3305f))

### [v1.3.1](https://github.com/rancui/rc-ui-lib/compare/v1.3.0...v1.3.1)

`2022-02-20`

**Features**

- DateTimePicker: 自定义 indicator 颜色 ([da1277a](https://github.com/rancui/rc-ui-lib/commit/64f424b37b96cedcb3c17bd25e9d603c5da1277a))

### [v1.3.0](https://github.com/rancui/rc-ui-lib/compare/v1.2.0...v1.3.0)

`2022-02-20`

**Features**

- 新增 DateTimePicker 组件 ([d643ff2](https://github.com/rancui/rc-ui-lib/commit/1be03ab3d06c008a137824a6e21c31acdd643ff2))

### [v1.2.0](https://github.com/rancui/rc-ui-lib/compare/v1.1.0...v1.2.0)

`2022-01-29`

**Bug Fixes**

- Popup: 修改 是否阻止 onMouseDown 事件 ([#36](https://github.com/rancui/rc-ui-lib/issues/36))

**Features**

- 新增 Calendar 组件 ([b6a256c](https://github.com/rancui/rc-ui-lib/commit/b6a256cb457291220850761292bd21c34912f1d0))
- 新增 Lazyload 组件 ([6426d1c](https://github.com/rancui/rc-ui-lib/commit/6426d1ce03a86b608f7a4c5d5dc0e7a8dadcfe0c))
- 新增 Picker 组件 ([0ed372c](https://github.com/rancui/rc-ui-lib/commit/0ed372ca08e0bcbccd9b98d26be38f4e50771fef))
- 新增 Popover 组件 ([34739bf](https://github.com/rancui/rc-ui-lib/commit/34739bf705347270ce8e2463a9d71f45fac6060d))

### [v1.1.0](https://github.com/rancui/rc-ui-lib/compare/v1.0.1...v1.1.0)

`2022-01-11`

**Features**

- Popup: 新增 onMouseDown 事件，防止 onBlur 事件冒泡 ([5647f3f](https://github.com/rancui/rc-ui-lib/commit/5647f3faa583045e75d717ed58aec95407c30167))
- 新增 Sidebar 组件 ([e19838e](https://github.com/rancui/rc-ui-lib/commit/e19838ee23d998f4b0e81ba627047c892fa806a4))
- 新增 SwipeCell 组件 ([845b25d](https://github.com/rancui/rc-ui-lib/commit/845b25d81b24c0d25a8c3f7aff735e7256dcbf65))
- 新增 NumberKeyboard 组件 ([cc3eb5d](https://github.com/rancui/rc-ui-lib/commit/cc3eb5ddce1062ca72ee1adbf5212c5aa606c263))
- 新增 PasswordInput 组件 ([f89d842](https://github.com/rancui/rc-ui-lib/commit/f89d842de239f4f35a963a6239d1ddf9087ed6cc))

### [v1.0.0](https://github.com/rancui/rc-ui-lib/compare/v0.3.0...v1.0.0)

`2021-12-27`

**Bug Fixes**

- List: 修复错误重新加载不触发 bug ([9644a30](https://github.com/rancui/rc-ui-lib/commit/9644a30050963b83091f97663420920bcd7fdffb))
- Cascader: 修复销毁组件后仍然 setData 的问题 ([feafcfe](https://github.com/rancui/rc-ui-lib/commit/feafcfe8ab6ba593ef569a0195db9a454a48b0b9))
- StepsItem: 修复在非激活状态标题的字体颜色 bug ([55e587f](https://github.com/rancui/rc-ui-lib/commit/55e587fc942ea2cf6d26ccf94d6ed7798fe347c2))
- imagePreview: 修复组件关闭报错 bug ([059f6a1](https://github.com/rancui/rc-ui-lib/commit/059f6a1d90890540acfccffb5cd76a564982ec4d))

**Feature**

- 完成全部 42 个组件功能的查缺补漏及单元测试，测试覆盖率超过 96%。

### [v0.3.0](https://github.com/rancui/rc-ui-lib/compare/v0.2.5...v0.3.0)

`2021-12-08`

**Feature**

- 新增 Swiper 组件[a91908](https://github.com/rancui/rc-ui-lib/commit/a91908ba478294fd8204e86dd061a663a8248955)

### [v0.2.5](https://github.com/rancui/rc-ui-lib/compare/v0.2.4...v0.2.5)

`2021-12-03`

**Bug Fixes**

- Popup： 修复 visibl 初始值为 true 时,点击 overlay 或 closeIcon 关闭不了 [211680](https://github.com/rancui/rc-ui-lib/commit/21168035996381d3bea28bc4f39d11b253931238)

### [v0.2.3](https://github.com/rancui/rc-ui-lib/compare/v0.2.2...v0.2.3)

`2021-12-02`

**Perf**

- Slider: 优化 Slider 组件代码, 并显性增加 onTouchMove 事件。[2d6fc4](https://github.com/rancui/rc-ui-lib/commit/2d6fc48986a70ad9111e85bbca2502082a9b1c4a)

### [v0.2.2](https://github.com/rancui/rc-ui-lib/compare/v0.2.1...v0.2.2)

`2021-12-01`

**Bug Fixes**

- Toast: 允许同时存在多个 Toast，当 toast = Toast({ onClose }) 且 toast.clear() 时 onClose 被调用两次 [85e808](https://github.com/rancui/rc-ui-lib/commit/85e808c69df4c0f2ee801ca08638aac2cb61610a)

### [v0.2.1](https://github.com/rancui/rc-ui-lib/compare/v0.2.0...v0.2.1)

`2021-12-01`

**Perf**

- Rate: 提升 touchmove 时被选中/取消的流畅度 [ff412f](https://github.com/rancui/rc-ui-lib/commit/ff412fe469d039492a57fd355fcbf46be62fb75a)

### [v0.2.0](https://github.com/rancui/rc-ui-lib/compare/v0.1.59...v0.2.0)

`2021-11-26`

**Bug Fixes**

- Image: onError 方法中 props.onLoad 改成 props.onError [3138a5](https://github.com/rancui/rc-ui-lib/commit/3138a515763d14826c83e63372d2f0511c8b249c)
- Popup: 修复在 iOS 13 中 Transition 被触发两次 [3fc1a8](https://github.com/rancui/rc-ui-lib/commit/3fc1a83cb942cf83b3a302374e8cba96fc2e1fbf)

### [v0.1.59](https://github.com/rancui/rc-ui-lib/compare/v0.1.58...v0.1.59)

`2021-11-23`

**Bug Fixes**

- Popup: 修复在 iPhone7 中 Popup 出现时闪动两次 [a2eb3b](https://github.com/rancui/rc-ui-lib/commit/a2eb3b9f5071e6723e1f9dd8298e33a3ba831260)

**Style**

- Popup: 增加 CSSTransition 的 appear 样式 [957dde](https://github.com/rancui/rc-ui-lib/commit/957dde3a9245ae18d4b1ac09ad78cecfc30b071a)

### [v0.1.58](https://github.com/rancui/rc-ui-lib/compare/v0.1.57...v0.1.58)

`2021-11-18`

**TypeScript**

- Grid: 删除 PropsType.ts 中多余的 className & style 属性 [536e9f](https://github.com/rancui/rc-ui-lib/commit/536e9fa28d5fd66bb4dcbb68f74283cc0be9f263)
- Flex: 删除组件的 disabled 和 onClick 属性 [720cd1](https://github.com/rancui/rc-ui-lib/commit/720cd10dd8087a0727836eb08ec6c10e998da24a)
- Badge: 完善属性 content 的类型 [acbe45](https://github.com/rancui/rc-ui-lib/commit/acbe45c88d4bd4816cf5cc30bdc1eeedd3862df7)

### [v0.1.57](https://github.com/rancui/rc-ui-lib/compare/v0.1.56...v0.1.57)

`2021-11-17`

**Bug Fixes**

- Overlay: 修复滑动时页面跟着滚动的问题 [620da5](https://github.com/rancui/rc-ui-lib/commit/620da517eda3b78b8723dfb6706af0cc4ad78809)

### [v0.1.56](https://github.com/rancui/rc-ui-lib/compare/v0.1.55...v0.1.56)

`2021-11-16`

**Bug Fixes**

- body: 修复初始化完成时 body 被加上类名 rc-overflow-hidden [810c72](https://github.com/rancui/rc-ui-lib/commit/810c72abd17d0f7bddfd1186a33e2dcd0406b754)

### [v0.1.55](https://github.com/rancui/rc-ui-lib/compare/v0.1.54...v0.1.55)

`2021-11-16`

**Bug Fixes**

- Popup: 修复 lockScroll 背景滚动问题 [31ce63](https://github.com/rancui/rc-ui-lib/commit/31ce63248d09c4e05722aca4fe661c21ed123f99)

### [v0.1.54](https://github.com/rancui/rc-ui-lib/compare/v0.1.53...v0.1.54)

`2021-11-10`

**Bug Fixes**

- Toast: 修复 onClose 无法被调用 [e2cd15](https://github.com/rancui/rc-ui-lib/commit/e2cd15e68513d4a79e189a51f0b91d0be0196143)

### [v0.1.53](https://github.com/rancui/rc-ui-lib/compare/v0.1.52...v0.1.53)

`2021-11-07`

**Feature**

- Popup: 新增关闭图标的类型，并使其正确渲染 [0d25a9](https://github.com/rancui/rc-ui-lib/commit/0d25a9c4ccac67b62f751da96b5ffb2d6d174a8c)

**Bug Fixes**

- Dialog: 修复 closeIcon 渲染不正确[ec2a6e](https://github.com/rancui/rc-ui-lib/commit/ec2a6eb24fe53a6911005aa5e7ae304c85924860)

### [v0.1.51](https://github.com/rancui/rc-ui-lib/compare/v0.1.50...v0.1.51)

`2021-10-28`

**Feature**

- Circle: 增加 linearGradient 的类名 [945f0db](https://github.com/rancui/rc-ui-lib/commit/945f0dbf6d389c2278179c44e1e87f28cd552c1e)

### [v0.1.50](https://github.com/rancui/rc-ui-lib/compare/v0.1.49...v0.1.50)

`2021-10-28`

**Bug Fixes**

- Popup: 修复的 z-index 显示 [5ddd28](https://github.com/rancui/rc-ui-lib/commit/5ddd28b4ca48523ecc400954649c73d2769b13c8)
- Swipe: swiper 的 css 变量未加分号引起打包失败 [fc318f](https://github.com/rancui/rc-ui-lib/commit/fc318fdecf9c5e8fab869ac09ce6c3355b79daf8)

### [v0.1.49](https://github.com/rancui/rc-ui-lib/compare/v0.1.48...v0.1.49)

`2021-10-27`

**Refactor**

- Tag: 代码优化[2404278](https://github.com/rancui/rc-ui-lib/commit/2404278663ea40edea326610729ff0effaffa098)
- Icon: 代码优化[2ab01fb](https://github.com/rancui/rc-ui-lib/commit/2ab01fb8617fbf3f4b3a57b386697903271f5a9f)

**Document**

- Tag: 更新 README.md 文档[ba19760](https://github.com/rancui/rc-ui-lib/commit/ba197609552e3f45f7808ddccc38075a6a28a503)

### [v0.1.48](https://github.com/rancui/rc-ui-lib/compare/v0.1.47...v0.1.48)

`2021-10-26`

**Document**

- Form & Slider & Popup : 更新 README.md 文档[e333e84](https://github.com/rancui/rc-ui-lib/commit/e333e84d50be57028eff53cc007f2da81dbb565e)

### [v0.1.47](https://github.com/rancui/rc-ui-lib/compare/v0.1.46...v0.1.47)

`2021-10-25`

**Refactor**

- Overlay & Popup: 代码优化 [aab94b5](https://github.com/rancui/rc-ui-lib/commit/aab94b5792d2f02780c65d3ce8f56653edd02318)

### [v0.1.46](https://github.com/rancui/rc-ui-lib/compare/v0.1.44...v0.1.46)

`2021-10-25`

**Refactor**

- Popup: 代码优化 [a6dc09c](https://github.com/rancui/rc-ui-lib/commit/a6dc09c67b18c9bde9b34bc7045e5da6de791ea8)

### [v0.1.45](https://github.com/rancui/rc-ui-lib/compare/v0.1.44...v0.1.46)

`2021-10-20`

**Refactor**

- Checkbox: 优化 BaseCheckerProps[7ac8e81](https://github.com/rancui/rc-ui-lib/commit/7ac8e816103660daf9f96385455bdca33af5b711)

### [v0.1.44](https://github.com/rancui/rc-ui-lib/compare/v0.1.43...v0.1.44)

`2021-10-19`

**Bug Fixes**

- Swiper: 修复样式引入报错问题 [07a134d](https://github.com/rancui/rc-ui-lib/commit/07a134d81443ffdadd28802a3343cca242b15770)

### [v0.1.43](https://github.com/rancui/rc-ui-lib/compare/v0.1.42...v0.1.43)

`2021-10-19`

**Document**

- 主题定制: 更新 theme.zh-CN.md [e59407](https://github.com/rancui/rc-ui-lib/commit/e59407a83eb92a30652b8df8f6471fd739de9370)
- 配置: 删除 sync-gitee.yml [66d2059](https://github.com/rancui/rc-ui-lib/commit/66d20594005fcf968c1a450b581c83ed5495a922)

**Feature**

- Form: 提供 FormItem 标签供使用 [6d4d6d](https://github.com/rancui/rc-ui-lib/commit/6d4d6d17effc164787c8daabc316daca2e43deef)

### [v0.1.41](https://github.com/rancui/rc-ui-lib/compare/v0.1.40...v0.1.41)

`2021-10-19`

**Feature**

- 增加 Form 组件 [b2e7249](https://github.com/rancui/rc-ui-lib/commit/b2e7249ec660da3479d6bed6ba23779ae1bc1bb7)

### [v0.1.35](https://github.com/compare/v0.1.34...v0.1.35)

`2021-10-13`

**Features**

- Button: 增加分组组件的命名 [b5abda](https://github.com/rancui/rc-ui-lib/commit/b5abda80e56dafbc809568b747311a310ad7a5cd)
- Button: 更新 demo [5bd85c](https://github.com/rancui/rc-ui-lib/commit/5bd85c29950b343af479e89d946f70084146da91)

### [v0.1.34](https://github.com/compare/v0.1.33...v0.1.34)

`2021-10-13`

**Features**

- Checkbox: 移除属性 onToggle [ebacf9](https://github.com/rancui/rc-ui-lib/commit/ebacf9bb8fe084701b3b3a34ba296d8b90000af6)

### [v0.1.33](https://github.com/rancui/rc-ui-lib/compare/v0.1.31...v0.1.33)

`2021-10-12`

**Document**

- Cell: 更新使用说明 [7c9b4e](https://github.com/rancui/rc-ui-lib/commit/7c9b4e590565f60cce36210e5938aa95053cba45)

### [v0.1.26](https://github.com/rancui/rc-ui-lib/compare/v0.1.25...rc-ui-lib@0.1.26)

`2021-09-28`

**Build**

- 更改各组件代码实现，构建工具体系及相关依赖[dc9776f](https://github.com/rancui/rc-ui-lib/commit/dc9776f237d00c3cefd1d66f8f8b31edb5131c53)
