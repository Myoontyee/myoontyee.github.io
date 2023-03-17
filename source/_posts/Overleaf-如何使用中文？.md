---
title: Overleaf 如何使用中文？
tags:
  - LaTeX
  - Overleaf
  - 中文支持
category:
  - LaTeX
  - Overleaf
abbrlink: 3beda872
date: 2022-04-30 17:54:25
---

---

**创建时间**：2022年4月30日17:47:37
**最新更新**：2022年4月30日17:54:00

---

**Problem Description**：How does Overleaf use Chinese?

**核心思路**：
* 添加`\usepackage[UTF8]{ctex}`
* 在菜单设置编辑器为`XeLaTex`

---

# 配置
## 调用库
* 调用库`\usepackage[UTF8]{ctex}`
	* ![image-20220430175443262](Overleaf-如何使用中文？/image-20220430175443262.png)

## 配置编译器
* 配置编译器，点击`Menu`→`∨`→`XeLaTeX`
	* ![image-20220430175447061](Overleaf-如何使用中文？/image-20220430175447061.png)
	* ![image-20220430175450567](Overleaf-如何使用中文？/image-20220430175450567.png)

# 编译一下试试
* 点一下`Recompile`，如下图，可以使用中文了
	* ![image-20220430175455625](Overleaf-如何使用中文？/image-20220430175455625.png)
# Ref
* [overleaf使用问题 - 导入本地模板 、中文的使用](https://blog.csdn.net/FrankAx/article/details/107519135)
