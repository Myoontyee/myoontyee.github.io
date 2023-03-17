---
title: >-
  VS Code + SSH 远程连接后无法选择kernel，无法使用conda activate应如何处理？报错CommandNotFoundError:
  Your shell has not been properly configured to use 'conda
  activate'.的解决办法。在一台电脑可以SSH连上服务器设定好kernel，在另一台电脑通过SSH连上服务器无法使用、选择kernel
tags:
  - SSH
  - Visual Studio Code
abbrlink: 170bcd41
date: 2022-04-01 17:06:40
category:
  - SSH
  - Visual Studio Code
---

---

**创建时间**：2022年4月1日17:01:00
**最新更新**：2022年4月1日17:05:02

---

**核心思路**：`Jupyter:指定本地或远程Jupyter服务器的连接`

---

# 配置方案

* 在`Visual Studio Code`内，通过ssh连上远程主机后，按`Ctrl`+`Shift`+`P`，选`Jupyter:指定本地或远程Jupyter服务器的连接`，接下来选默认的那个，回车，就能选kernel了

![image-20220401170731630](VS-Code-SSH-远程连接后无法选择kernel，无法使用conda-activate应如何处理？/image-20220401170731630.png)
![image-20220401170735765](VS-Code-SSH-远程连接后无法选择kernel，无法使用conda-activate应如何处理？/image-20220401170735765.png)

# 成功效果
* 如下图，可以正常选择kernel。
![image-20220401170747090](VS-Code-SSH-远程连接后无法选择kernel，无法使用conda-activate应如何处理？/image-20220401170747090.png)

# Ref
* [Vscode连接通过ssh远程调试jupyter内核错误！](https://blog.csdn.net/sinat_33909696/article/details/117405827)
