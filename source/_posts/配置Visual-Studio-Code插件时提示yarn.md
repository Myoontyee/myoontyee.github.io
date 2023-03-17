---
title: 配置Visual Studio Code插件时提示'yarn' 不是内部或外部命令，也不是可运行的程序 解决办法
tags:
  - Visual Studio Code
  - Plugins
  - yarn
category:
  - Visual Studio Code
abbrlink: a88b7358
date: 2022-04-28 23:31:40
---

---

**创建时间**：2022年4月28日23:24:26
**最新更新**：2022年4月28日23:25:16

---

**Problem Description**：When configuring the Visual Studio Code plug-in, 'yarn' is not an internal or external command, nor is it a runnable program Solution

**核心思路**：`npm install -g yarn`

---

* 估计是没装`yarn`

# 解决
* 打开`Bash`，我用的`Git-Bash`，输入如下指令即可

```bash
npm install -g yarn
```

# Ref
* [yarn安装后提示‘yarn‘ 不是内部或外部命令，也不是可运行的程序的解决方法](https://blog.csdn.net/weixin_45264991/article/details/109059952)
