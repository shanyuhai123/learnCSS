# 前端 CSS : 1# 纯 CSS 实现万圣节 toggle 控件
## 介绍
> [原文](https://codepen.io/anon/pen/WayjPJ)
> [设计来源](https://dribbble.com/shots/1789464-It-s-Halloween)
感謝 [comehope](https://segmentfault.com/u/comehope) 大佬的 [前端每日实战](https://segmentfault.com/blog/comehope) 对我的启蒙

该文仅对是原文进行一部分的分析及分享, 有兴趣的建议查看原文

## 效果预览

![0159.png](../0000-0-images/0159.png)

> [github.io 浏览](https://shanyuhai123.github.io/learnCSS/0159-halloween-switcher/)

## 源代码地址

https://github.com/shanyuhai123/learnCSS/tree/master/0159-halloween-switcher

## 代码解读

定义容器 `halloween-switcher` , 通过 `checkbox` 来实现切换

```html
<section class="halloween-switcher">
  <input type="checkbox" id="halloween-input">
  <label for="switch-input" class="halloween-label">
    <div class="pumpkin-container"></div>
    <div class="vampire-container"></div>
  </label>
</section>
```

引入字体, 居中显示: 

```css
@import url('https://fonts.googleapis.com/css?family=Kodchasan');

* {
  font-family: 'Kodchasan';
}

html {
  font-size: 20px;
}

body {
  width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
  background: #081219;
  overflow: hidden;
}
```

设置实际容器 `label` 大小

```css
.halloween-label {
  width: 30rem;
  height: 10rem;
  border: 3px solid #E56D48;
  border-radius: 10rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}
```

增加两种容器的配色

```css
html {
  --pumpkin-color: #E56D48;
  --vampire-color: #4D7C99;
}
```

定义 `pumpkin-container` , `vampire-container` 容器 及 文字

```css
.halloween-input ~ .halloween-label::before,
.halloween-input:checked ~ .halloween-label::before {
  position: absolute;
  font-size: 2.5rem;
  text-transform: uppercase;
}
.halloween-input ~ .halloween-label::before {
  content: 'Pumpkin';
  color: var(--pumpkin-color);
  left: 70%;
  transform: translateX(-70%);
}
.halloween-input:checked ~ .halloween-label::before {
  content: 'Vampire';
  color: var(--vampire-color);
  left: 25%;
  transform: translateX(-25%);
}

.halloween-input ~ .halloween-label .pumpkin-container,
.halloween-input ~ .halloween-label .vampire-container {
  width: 9.5rem;
  height: 9.5rem;
  border-radius: 50%;
  position: absolute;
  left: 0.25rem;
  overflow: hidden;
}
.halloween-input ~ .halloween-label .pumpkin-container {
  background-color: var(--pumpkin-color);
  filter: opacity(1);
}
.halloween-input ~ .halloween-label .vampire-container {
  background-color: var(--vampire-color);
  filter: opacity(0);
}
.halloween-input:checked ~ .halloween-label .pumpkin-container {
  left: calc(100% - 0.25rem);
  transform: translateX(-100%);
  filter: opacity(0);
}
.halloween-input:checked ~ .halloween-label .vampire-container {
  left: calc(100% - 0.25rem);
  transform: translateX(-100%);
  filter: opacity(1);
}
```

增加 `label`容器 颜色渐变

```css
.halloween-label {
  border: 3px solid var(--label-border-color);
  transition: .5s ease-in-out;
}
.halloween-label {
  --label-border-color: var(--pumpkin-color);
}
.halloween-input:checked ~ .halloween-label {
  --label-border-color: var(--vampire-color);
}
```

 `pumpkin-container` , `vampire-container` 容器 及 文字

动画效果

```css
.halloween-input ~ .halloween-label::before,
.halloween-input:checked ~ .halloween-label::before {
  transition: .5s ease;
}
.halloween-input ~ .halloween-label .pumpkin-container,
.halloween-input ~ .halloween-label .vampire-container {
  transition: .5s ease;
}
```

先绘画 `pumpkin` , 补全 `pumpkin-container`

```html
<div class="pumpkin-container">
  <div class="pumpkin__eyes-n-nose"></div>
  <div class="pumpkin__mouth-n-teeths"></div>
</div>
```

新增果肉颜色

```css
html {
  --pumkin-pulp-color: #330A0F;
}
```

绘画 `pumpkin` 的 `pumpkin__eyes-n-nose` 

伪元素画出眼睛

```css
.pumpkin__eyes-n-nose {
  position: absolute;
  top: 20%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0.8rem 1.6rem 0.8rem;
  color: var(--pumpkin-color);
  border-bottom-color: var(--pumkin-pulp-color);
  background-color: var(--pumkin-pulp-color);
}
.pumpkin__eyes-n-nose::before,
.pumpkin__eyes-n-nose::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: var(--pumkin-pulp-color);
  border-radius: 50%;
  top: 0.5rem;
  left: 0;
}
.pumpkin__eyes-n-nose::before {
  margin-left: -3.25rem;
}
.pumpkin__eyes-n-nose::after {
  margin-left: 2.25rem;
}
```

绘画 `pumpkin` 的 `pumpkin__mouth-n-teeths` 

伪元素画出牙齿

```css
.pumpkin__mouth-n-teeths {
  position: absolute;
  width: 6.5rem;
  height: 3.25rem;
  bottom: 10%;
  background-color: var(--pumkin-pulp-color);
  border-radius: 0 0 6.5rem 6.5rem;
}
.pumpkin__mouth-n-teeths::before,
.pumpkin__mouth-n-teeths::after {
  content: '';
  position: absolute;
  height: 0.75rem;
  width: 1rem;
  background-color: var(--pumpkin-color);
}
.pumpkin__mouth-n-teeths::before {
  top: 0;
  left: 1.25rem;
}
.pumpkin__mouth-n-teeths::after {
  height: 1rem;
  bottom: 0;
  right: 1.25rem;
}
```

再绘画 `vampire` , 补全 `vampire-container`

```html
<div class="vampire-container">
  <div class="vampire__eyes"></div>
  <div class="vampire__mouth">
    <div class="vampire__teeths"></div>
    <div class="vampire__tongue"></div>
  </div>
</div>
```

利用 伪元素 绘出 `vampire-container` 的脸

```css
.vampire-container::before,
.vampire-container::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #c2def2;  /* face color */
  border-radius: 45% 45% 0 0;
  top: 0.75rem;
}
.vampire-container::before {
  left: -4rem;
}
.vampire-container::after {
  right: -4rem;
}
```

伪元素绘出 `vampire__eyes `

```css
.vampire__eyes {
  top: 20%;
  position: absolute;
  z-index: 1;
}
.vampire__eyes::before,
.vampire__eyes::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  background-color: #d63e49; /* eye-color */
  border-radius: 50%;
  top: 0.5rem;
  left: 0;
}
.vampire__eyes::before {
  margin-left: -3.25rem;
}
.vampire__eyes::after {
  margin-left: 2.25rem;
}
```

绘出 `vampire__mouth `

```css
.vampire__mouth {
  position: absolute;
  width: 6.5rem;
  height: 3.25rem;
  background-color: var(--pumkin-pulp-color);
  bottom: 10%;
  border-radius: 0 0 6.5rem 6.5rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
}
```

绘出 `vampire__teeths ` 门牙, 伪元素绘出牙齿

```css
.vampire__teeths {
  position: absolute;
  width: 100%;
  height: 1rem;
  background-color: #fffae6;
  top: -1px;
}
.vampire__teeths::before,
.vampire__teeths::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  color: transparent;
  border-style: solid;
  border-width: 0.65rem 0.375rem 0 0.375rem;
  border-top-color: #fffae6;
  top: 0.95rem;
}
.vampire__teeths::before {
  left: 1rem;
}
.vampire__teeths::after {
  right: 1rem;
}
```

绘出 `vampire__tongue `

```css
.vampire__tongue {
  position: absolute;
  width: 3.5rem;
  height: 1.75rem;
  background-color: #d63e49;
  bottom: -0.75rem;
  border-radius: 3.5rem 3.5rem 0 0;
}
```

再接着把 `checkbox` 隐藏掉即可

```css
.halloween-input {
  display: none;
}
```

增加微笑动画 `smile`

```css
.vampire__teeths {
  animation: smile 2s ease-in-out infinite;
}
.vampire__tongue {
  animation: smile 3s ease-in-out infinite;
}
@keyframes smile {
  50% {
    transform: scaleY(1.5);
  }
}
```

## 最后

这样就大功告成了