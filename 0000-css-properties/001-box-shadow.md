## 属性

`box-shadow`

## 取值

### 0. inset

默认阴影在边框外

使用 `inset` 后, 阴影在边框内 (即使是透明边框), 背景之上内容之下

### 1. offset-x

设置水平偏移量, 如果是负值则阴影位于元素左边

### 2. offset-y

设置垂直偏移量, 如果是负值则阴影位于元素上边

### 3. blur-radius

这是第三个 `<length>` 值

值越大, 模糊面积越大,阴影就越大越淡

不能为负值, 默认为0, 此时阴影边缘锐利

### 4. spread-radius

这是第四个 `<length>` 值

取正值时, 阴影扩大; 取负值时,阴影收缩

默认为0, 此时阴影与元素同样大(也就是说我们可以利用此效果使box-shadow复制元素本身, 再通过前两个元素进行位置偏移)

### 资料来源

> 1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow