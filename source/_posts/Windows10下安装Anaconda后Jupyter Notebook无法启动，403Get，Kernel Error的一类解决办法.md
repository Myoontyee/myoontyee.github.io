---
layout: windows10下安装anaconda后jupyter
title: Windows10下安装Anaconda后Jupyter Notebook无法启动，403Get，Kernel Error的一类解决办法
date: 2021-08-16 11:13:18
abbrlink: a8f28d7b
category:
 - Python
tags:
 - Win10
 - Python
 - Jupyter Notebook
---

---

核心思路：此处解决方法主要针对非root身份打开Jupyter Notebook时候存在的问题，在Win10早期版本、老电脑中安装可能遇上



---

**针对情况**：此处解决方法主要针对非root身份打开Jupyter Notebook时候存在的问题，在Win10早期版本、老电脑中安装可能遇上

---



* 找到根目录
  * Linux系统文件路径：```./rootfs/root/.jupyter/jupyer_notebook_config.py```
  * Windows系统文件路径：
* 添加以下代码，chrome可以改成Firefox，路径也需要做对应修改

```Python
import webbrowser
webbrowser.register("chrome", None, webbrowser.GenericBrowser(u"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"))
c.NotebookApp.browser = 'chrome'
```
* 将```c.NotebookApp.allow_root```取消注释，并改为True
	* 意味着是否允许用户以root身份运行笔记本。
