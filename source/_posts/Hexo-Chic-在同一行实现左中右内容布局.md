---
title: Hexo + Chic 在同一行实现左中右内容布局，Markdown（Typora）与Obsidian亦可参考
tags:
  - Hexo
  - Chic
  - CV
  - HTML
  - CSS
  - Obsidian
  - Markdown
  - Typora
category:
  - 博客搭建
  - Obsidian
  - Typora
  - Markdown
abbrlink: 46fb7fa8
date: 2022-04-27 10:24:47
---

---

**创建时间**：2022年4月27日10:05:49
**最新更新**：2022年4月27日10:22:44

---

**Problem Description**：Hexo + Chic achieve left-center-right content layout on the same line

**核心思路**：用`HTML`语法

---

* 后头做简历页面基于这个教程


# 实现代码及效果
```html
<div style="float: left">左边</div>
<div style="float: right">右边</div>
<div style="margin: 0 auto; width: 100px;">中间是我~</div>
```

<div style="float: left">左边</div>
<div style="float: right">右边</div>
<div style="margin: 0 auto; width: 100px;">中间是我~</div>


# 更复杂一点
```html
<div style="display:table; width:100%;">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text</div>
        <div style="display:table-cell; text-align:center; width:50%;">center text</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>

<div class="table">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text with a label that is quite a bit longer</div>
        <div style="display:table-cell; text-align:center; width:50%;">center text</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>
<div style="display:table; width:100%;">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text with a label that is quite a bit longer</div>
        <div style="display:table-cell; text-align:center; width:50%;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>
```


<div style="display:table; width:100%;">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text</div>
        <div style="display:table-cell; text-align:center; width:50%;">center text</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>

<div class="table">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text with a label that is quite a bit longer</div>
        <div style="display:table-cell; text-align:center; width:50%;">center text</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>
<div style="display:table; width:100%;">
    <div style="display:table-row">
        <div style="display:table-cell; width:25%">left text with a label that is quite a bit longer</div>
        <div style="display:table-cell; text-align:center; width:50%;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</div>
        <div style="display:table-cell; text-align:right; width:25%;">right text</div>
    </div>
</div>








# Ref
* [Left-, center-, and right-aligned text on the same line](https://stackoverflow.com/questions/8523028/left-center-and-right-aligned-text-on-the-same-line)
* [【Typora】如何使用Markdown插入一段文字，部分左对齐，部分右对齐](https://www.csdn.net/tags/OtTaMg3sMzIwNzUtYmxvZwO0O0OO0O0O.html)
