# 前端 CSS : 2# 纯 CSS 实现粉色爱心

## 介绍

> [原文链接](https://codepen.io/rjmr/pen/bQyMJv)
>
> 感謝 [comehope](https://segmentfault.com/u/comehope) 大佬的 [前端每日实战]

工作三个月觉得糟糕跑路(顺带劝一下像我一样的新人, 不要急于入职, 一定要挑一挑)回家重新补充了一下基础知识及 node, 身为一个前端结果发现 CSS 已经手生了, 为了明年能够找到工作, 所以又开始练习了...

## 效果预览

![](../0000-0-images/0164.gif)

> [github.io 浏览](https://shanyuhai123.github.io/learnCSS/0164-pink-hearts/)

## 源代码地址

https://github.com/shanyuhai123/learnCSS/tree/master/0164-pink-hearts

## 代码解读

### 1. 首先是完成 `html` 结构

我们需要五颗爱心及底部的 footer

```html
<figure class="hearts">
  <section class="heart"></section>
  <section class="heart"></section>
  <section class="heart"></section>
  <section class="heart"></section>
  <section class="heart"></section>
</figure>
<footer>pink hearts</footer>
```

样式初始化及居中

```css
body {
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  overflow: hidden;
}

.hearts {
  width: 100vw;
  height: 20vw;
  border: 1px solid; /* the snippet will be deleted */
  box-sizing: border-box;
  padding: 0 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.heart {
  width: 15vw;
  height: 15vw;
  border: 1px solid; /* the snippet will be deleted */
}

footer {
  margin-top: 10vh;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "verdana";
  font-size: 22px;
  color: #F48FB1;
}
```

### 2. 画出旋转的 粉红正方形

接着在第一个 heart 中添加一个粉红的正方形

添加 DOM 结构

```html
<section class="heart">
  <div class="plane">
    <div class="half-heart"></div>
  </div>
</section>
```

基准面(plane) 定位并完成基础样式

 ```css
.heart {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.plane {
  position: absolute;
  opacity:0.8;
}
.half-heart {
  width: 7.5vw;
  height: 7.5vw;
  background-color: pink;
  transform: rotate(-45deg);
}
 ```

一颗爱心由两个基准面组成

```html
<section class="heart">
  <div class="plane plane-left">
    <div class="half-heart"></div>
  </div>
  <div class="plane plane-right">
    <div class="half-heart"></div>
  </div>
</section>
```

```css
.heart {
  transform-style: preserve-3d;
}

.plane-right {
  transform: rotateY(90deg); /* 因为此处为 90 度垂直, 所以并不可见 */
}
```

接着添加旋转动画(这样我们就可以看到两个基准面了)

```css
.heart {
  animation: rotate 5s ease-in-out infinite;
}
.heart:nth-of-type(1) {
  animation-delay:-5s;
}

/* keyframes */
@keyframes rotate {
  0% {
    transform: rotateY(0deg) rotateZ(25deg) translateY(7.5vw);
  }
  50% {
    transform: rotateY(270deg) rotateZ(25deg) translateY(-7.5vw);
  }
  100% {
    transform: rotateY(360deg) rotateZ(25deg) translateY(7.5vw);
  }
}
```

### 3. 将旋转的两个正方形改为心形

生成两个圆形放置在正方的上方即可(伪元素可解决)

```css
.half-heart:before,
.half-heart:after {
  content: "";
  width: 7.5vw;
  height: 7.5vw;
  background-color: pink;
  border-radius: 100%;
  position: absolute;
}
.half-heart:before {
  top: -3.25vw;
  left: 0;
}
.half-heart:after {
  top: 0;
  left: 3.25vw;
}
```

好了, 这样一个旋转上升的爱心就完成了

### 4. 补完 5 个 heart

修改延迟时间(DOM 结构省略)

```css
.heart:nth-of-type(1) {
  animation-delay:-5s;
}
.heart:nth-of-type(2) {
  animation-delay:-4s;
}
.heart:nth-of-type(3) {
  animation-delay:-3s;
}
.heart:nth-of-type(4) {
  animation-delay:-2s;
}
.heart:nth-of-type(5) {
  animation-delay:-1s;
}
```

### 5. 最后

最后记得把之前确认位置及大小的 border 边框删除即可