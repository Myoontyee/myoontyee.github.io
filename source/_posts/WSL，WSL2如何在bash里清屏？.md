---
title: WSL，WSL2如何在bash里清屏？
tags:
  - WSL
  - WSL2
  - Linux
  - Windows Terminal
category:
  - WSL
  - Linux
abbrlink: 5a59e8a1
date: 2022-04-22 17:54:49
---

---

**创建时间**：2022年4月22日17:51:29
**最新更新**：2022年4月22日17:54:37

---

**Problem Description**：WSL, WSL2 how to clear screen in bash?

**核心思路**：`bash`内输入`clear`或者`reset`

---

# 清屏
* 打开`bash`，输入`clear`或`reset`

* `bash`本质是让终端后翻一页，速度较快，在`Windows Terminal`内直观效果与`reset`差别不大
* `reset`本质是屏幕刷新，清空前面的信息，速度稍慢


# Ref
* [Linux shell清屏](https://blog.csdn.net/u010178308/article/details/77414023)
* [linux 清屏命令（3种方式）](https://blog.csdn.net/magoyang/article/details/78940767)
