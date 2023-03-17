---
title: Hexo生成时提示FATAL Permission denied. You can't use port 4000.解决办法
abbrlink: 9e13174d
date: 2022-03-29 20:07:15
tags:
  - Hexo
  - Chic
category:
  - 博客搭建
---

---

**创建时间**：2022年3月29日20:07:15
**最新更新**：2022年3月29日20:07:20


---


**核心思路**：端口被占用，切换端口

---

* 打开`Git-Bash`，进入对应文件夹，输入以下指令，使用5000端口运行

```bash

hexo s -g -p 5000

```

# Ref
* [FATAL Permission denied. You can't use port 4000.](https://blog.csdn.net/weixin_42429718/article/details/104310410)
