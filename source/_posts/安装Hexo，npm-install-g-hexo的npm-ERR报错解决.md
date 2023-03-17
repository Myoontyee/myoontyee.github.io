---
title: 安装Hexo，npm install -g hexo的npm ERR报错解决
abbrlink: f63f7dc2
date: 2022-03-29 20:08:31
tags:
  - Hexo
  - Chic
category:
  - 博客搭建
---

---

**创建时间**：2022年3月29日20:08:51
**最新更新**：2022年3月29日20:08:58

---

**环境**：

* Windows 10

* Linux 20.04 ( WSL2 )

---

**报错信息**

```bash
root@I:/mnt/e/001Code/MyBlog# npm install -g hexo
npm ERR! Cannot read property 'resolve' of undefined

npm ERR! A complete log of this run can be found in:
npm ERR!     /mnt/nodejs/node_cache/_logs/2022-03-06T11_47_24_966Z-debug.log
```

---


* 错误原因：这个错误是在使用WSL时出现的，需要使用Windows下的Windows Terminal或者Git-Bash安装。
* 具体解决方法见[Hexo安装+个人网站建立+推送至GitHub](./4f595d21.html)
