---
title: Hexo + Chic busuanzi未显示阅读字数、时长等情况下的等待图标添加（旋转菊花等）
tags:
  - Hexo
  - busuanzi
  - Chic
category:
  - 博客搭建
abbrlink: 785e20b9
date: 2022-03-19 15:21:42
---

---

**创建时间**：2022年3月19日15:21:42
**最新更新**：2022年3月27日21:20:33


---

**核心思路**：引入**font-awesome**字体，调用`fa-spinner`旋转小菊花

---

# 引用样式
* 用代码编辑器（如`Visual Studio Code`）打开`themes\Chic\_config.yml`，将等待logo的样式进行全局引用

```yml
# stylesheets loaded in the <head>
stylesheets:
  - /css/style.css
  - //cdn.bootcss.com/font-awesome/4.3.0/css/font-awesome.min.css # 访客量的旋转等待logo
```

# 调整样式
* 用代码编辑器打开`themes\Chic\layout\_plugins\site-visitor.ejs`，按如下内容调整样式

<div style="overflow:auto;width:100%"> <table width="auto" style="white-space:nowrap">
    <tr>
        <td><div align = center>修改前</center></td>
        <td><div align = center>修改后</center></td>
    </tr>
    <tr>
        <td>
```C++
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<% if (theme.visit_counter.site_uv) { %>
<span class="site-uv">
    | 总访客量:
    <i class="busuanzi-value" id="busuanzi_value_site_uv"></i>
</span>&nbsp;
<% } %>
<% if (theme.visit_counter.site_pv) { %>
<span class="site-pv">
    | 总访问量:
    <i class="busuanzi-value" id="busuanzi_value_site_pv"></i>
</span>
<% } %>
```
</td>
<td>
```C++
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<% if (theme.visit_counter.site_uv) { %>
<span class="site-uv">
    | 总访客量:
    <i class="busuanzi-value" id="busuanzi_value_site_uv"><i class="fa fa-spinner fa-spin"></i></i>
</span>&nbsp;
<% } %>
<% if (theme.visit_counter.site_pv) { %>
<span class="site-pv">
    | 总访问量:
    <i class="busuanzi-value" id="busuanzi_value_site_pv"><i class="fa fa-spinner fa-spin"></i></i>
</span>
<% } %>
```
</td>
</tr>
</table>
</div>
​	

# 最终样式
* 如下图

![image-20220327213431115](Hexo-Chic-busuanzi未显示阅读字数、时长等情况下的等待图标添加（旋转菊花等）/image-20220327213431115.png)



# Ref
* [不蒜子](http://ibruce.info/2015/04/04/busuanzi/)
