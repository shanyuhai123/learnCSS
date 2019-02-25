# 前端 CSS : 5# 纯 CSS 实现24小时超市

## 介绍

> [原文链接](https://codepen.io/mrnkzntcv/pen/BGOEBX)
>
> 感謝 [comehope](https://segmentfault.com/u/comehope) 大佬的 [前端每日实战]

## 效果预览

![](../0000-0-images/0166.gif)

> [github.io 浏览](https://shanyuhai123.github.io/learnCSS/0166-24-hours-supermarket/)

## 源代码地址

https://github.com/shanyuhai123/learnCSS/tree/master/0166-24-hours-supermarket

## 代码解读

### 1.  `html` 结构

命名规则使用了 BEM 

```html
<figure class="street">
  <div class="market">
  </div>
</figure>
```

常规样式初始化

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  overflow: hidden;
}
```

### 2. 街道背景

街道背景分为两部分

1. 深蓝色的天空

   ```css
   .street {
     height: 100vh;
     position: relative;
     display: flex;
     justify-content: center;
     align-items: flex-end;
     background-color: #0b2e4e;
     overflow: hidden;
   }
   ```

2. 黑色的地面

   ```css
   .street::before {
     content: "";
     position: absolute;
     bottom: 0;
     left: 0;
     right: 0;
     width: 100%;
     height: 25vh;
     background-color: #000000;
   }
   ```

### 3. 超市

超市, 首先创建一个长方形代表超市

```css
.market {
  position: relative;
  display: flex;
  width: 520px;
  height: 270px;
  background-color: #fffecc;
  border: 4px solid #333333;
}
```

接着给超市增加 24 HOURS 的标识, 需要在 `market` 下增加一个 `span` 标签

```html
<div class="market">
  <span class="market__name">24 hours</span>
</div>
```

生意好的超市必然亮堂堂

```css
.market {
  box-shadow: 0 22px 110px 12px #f5efa1;
}
```

增大超市(正方形的上 `border` ), 用于存放标识

```css
.market {
  border-top-width: 50px;
}
```

将标识定位到上 `border`, 并给其添加发光样式

```css
.market__name {
  position: absolute;
  top: -38px;
  left: 20px;
  font-family: sans-serif;
  font-size: 1.4em;
  letter-spacing: 0.4em;
  color: #bdf8ff;
  text-transform: uppercase;
  text-shadow: 0px 0px 9px #95cfef;
}
```

再给该标识添加闪烁动画

```css
.market__name {
	animation: signboardFlashes 5s infinite alternate linear;
}

/* keyframes */
@keyframes signboardFlashes {
  0% {
    opacity: 1;
  }
  35% {
    opacity: 1;
  }
  36% {
    opacity: 0;
  }
  37% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  72% {
    opacity: 0;
  }
  73% {
    opacity: 1;
  }
  74% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
```

接着需要给超市增加 4 扇门, 并基于基础的样式

```html
<div class="market">
  <span class="market__name">24 hours</span>
  <span class="market__fold"></span>
  <span class="market__fold"></span>
  <span class="market__fold"></span>
  <span class="market__fold"></span>
</div>
```

```css
.market__fold {
  position: relative;
  width: 25%;
  border: 8px solid #000000;
}
/* 此处无法在 .market__fold 使用 inset 替代 */
.market__fold::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2px 1px #f3f1d5;
}
```

门是感应门, 当有生物靠近才会打开, 所以打开的动画等一下完成

### 4. 月亮

在 `market` 中添加 `moon`

```html
<div class="market">
  <span class="moon"></span>
</div>
```

通过绝对定位将其移动到超市的上方, 并添加动画效果

```css
.moon {
  position: absolute;
  top: -125px;
  left: -50px;
  width: 40px;
  height: 40px;
  background-color: #ffffc9;
  border-radius: 50%;
  box-shadow: 0 0 20px 1px #ffffc9;
  animation: moonMoves 360s infinite alternate linear;
}

@keyframes moonMoves {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(300px, -10px);
  }
  100% {
    transform: translate(600px, 0);
  }
}
```

### 5. 原地踏步的猫

在 `market` 添加 `cat`

 ```html
<div class="market">
  <section class="cat"></section>
</div>
 ```

首先给予一个轮廓方便观察

```css
.cat {
  --cat-color: red;
  position: absolute;
  left: -200px;
  bottom: -24px;
  width: 46px;
  height: 30px;
  margin: auto;
  color: var(--cat-color);
  background-color: var(--cat-color);
  border-radius: 30px;
}
```

修改猫的 DOM 结构, 添加头, 尾巴, 四肢

```html
<section class="cat">
  <div class="cat__head"></div>
  <span class="cat__tail"></span>
  <span class="cat__leg"></span>
  <span class="cat__leg"></span>
  <span class="cat__leg"></span>
  <span class="cat__leg"></span>
</section>
```

然后依次给予其样式

首先是头部, 头部使用伪元素形成耳朵, 并添加头部晃动效果

```css
.cat__head {
  position: absolute;
  right: -10px;
  top: -8px;
  width: 24px;
  height: 24px;
  background-color: inherit;
  border-radius: 50%;
  animation: catMovesHead 0.3s infinite linear;
}
.cat__head::before, .cat__head::after {
  content: "";
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  background-color: inherit;
  border-radius: 2px;
}
.cat__head::before {
  left: 2px;
  transform: rotate(16deg);
}
.cat__head::after {
  right: 2px;
  transform: rotate(-16deg);
}

@keyframes catMovesHead {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
```

添加尾巴及动画效果(尾巴由椭圆形的一半构成)

```css
.cat__tail {
  position: absolute;
  left: -18px;
  top: -22px;
  width: 30px;
  height: 42px;
  border-radius: 50%;
  border: 7px solid var(--cat-color);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform-origin: right;
  animation: catMovesTail 0.3s infinite linear;
}

@keyframes catMovesTail {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0);
  }
}
```

猫咪的四肢

```css
.cat__leg {
  position: absolute;
  bottom: -12px;
  width: 6px;
  height: 20px;
  background-color: inherit;
  border-radius: 3px;
  transform-origin: top;
}
```

将四肢分开和添加动画

```html
<span class="cat__leg cat__leg--1"></span>
<span class="cat__leg cat__leg--2"></span>
<span class="cat__leg cat__leg--3"></span>
<span class="cat__leg cat__leg--4"></span>
```

```css
.cat__leg--1, .cat__leg--2 {
  left: 5px;
}
.cat__leg--3, .cat__leg--4 {
  right: 5px;
}
.cat__leg--1, .cat__leg--3 {
  transform: rotate(24deg);
  animation: catMovesLegs 0.6s infinite linear;
}
.cat__leg--2, .cat__leg--4 {
  transform: rotate(-24deg);
  animation: catMovesLegs 0.6s infinite -0.3s linear;
}


@keyframes catMovesLegs {
  0% {
    transform: rotate(36deg);
  }
  50% {
    transform: rotate(-36deg);
  }
  100% {
    transform: rotate(36deg);
  }
}
```

### 6. 猫过门开

给予猫一个整体的动画

```css
.cat {
  animation: catRuns 20s infinite linear;
}

@keyframes catRuns {
  0% {
    transform: translateX(0) rotateY(0);
  }
  70% {
    transform: translateX(800px) rotateY(0);
  }
  71% {
    transform: translateX(1000px) rotateY(180deg);
  }
  100% {
    transform: translateX(0) rotateY(180deg);
  }
}
```

修改超市门的 DOM 上的 class

```html
<span class="market__fold"></span>
<span class="market__fold market__fold--left"></span>
<span class="market__fold market__fold--right"></span>
<span class="market__fold"></span>
```

再增加开关门的效果, 根据上方猫的花费时间进行计算, 取一样的时间更方便一些

```css
.market__fold--left {
  animation: doorMovesLeft 20s infinite linear;
}

.market__fold--right {
  animation: doorMovesRight 20s infinite linear;
}

@keyframes doorMovesLeft {
  0% {
    transform: translateX(0);
  }
  28% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-90%);
  }
  54% {
    transform: translateX(-90%);
  }
  56% {
    transform: translateX(0);
  }
  83% {
    transform: translateX(0);
  }
  85% {
    transform: translateX(-90%);
  }
  97% {
    transform: translateX(-90%);
  }
  99% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes doorMovesRight {
  0% {
    transform: translateX(0);
  }
  28% {
    transform: translateX(0);
  }
  30% {
    transform: translateX(90%);
  }
  54% {
    transform: translateX(90%);
  }
  56% {
    transform: translateX(0);
  }
  83% {
    transform: translateX(0);
  }
  85% {
    transform: translateX(90%);
  }
  97% {
    transform: translateX(90%);
  }
  99% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}
```

最后就这样大功告成了

不过记得把猫的颜色改回来

```css
/* 猫 */
.cat {
  --cat-color: #000000;
}
```

### 7. 补充

最后切换为移动端时注意到 超市会横向占满, 通过 padding 设置一个空隙即可

```css
.street {
  padding: 0 6vw 115px;
}
```

