---
title: WSL子系统个人常用操作
tags:
  - WSL
  - 常用操作
category:
  - 查找表
abbrlink: ab81a167
date: 2021-08-18 15:29:32
---

---

**创建日期**：2021年8月18日
**最后更新**：2021年12月21日

---

| 重要性 | 功能                                              | 按键                                                         | 参考                                                         |
| ------ | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ★      | Obsidian Advanced Tables 侧边栏                   | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>                | [使用Markdown实现键盘按钮和流程图](https://blog.csdn.net/weixin_43557605/article/details/105403398) |
|        | Windows10文件管理器中直接进入WSL目录              | <kbd>Win</kbd>+<kbd>R</kbd>或地址栏直接输入````\\wsl$````    | [windows10 的linux子系统（windows subsystem for linux)WSL 文件位置](https://www.cnblogs.com/lepeCoder/p/wsl_dir.html) |
| ★      | LaTeX公式OCR                                      | -                                                            | [LaTeX-OCR](https://github.com/lukas-blecher/LaTeX-OCR)      |
|        | Windows10 Linux WSL迁移到C盘以外的盘              | -                                                            | [把你的子系统(WSL)搬到非系统盘](https://cloud.tencent.com/developer/article/1594940) |
|        | Windows10 Linux WSL安装 Anaconda                  | -                                                            | [在WSL内安装Anaconda](https://www.jianshu.com/p/ad49c4405fe7) |
| ★      | WSL通过VIM打开文件                                | <kbd>vim</kbd>+文件名                                        | [如何在Vim/Vi中保存文件并退出编辑器](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/) |
| ★      | VIM进入编辑模式                                   | <kbd>i</kbd>                                                 | [如何在Vim/Vi中保存文件并退出编辑器](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/) |
| ★      | VIM保存文件                                       | 按<kbd>ESC</kbd>，后按<kbd>:w</kbd>，再按<kbd>Enter</kbd>    | [如何在Vim/Vi中保存文件并退出编辑器](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/) |
| ★      | VIM保存文件并退出                                 | 按<kbd>ESC</kbd>，后按<kbd>:wq</kbd>，再按<kbd>Enter</kbd>   | [如何在Vim/Vi中保存文件并退出编辑器](https://www.myfreax.com/how-to-save-file-in-vim-quit-editor/) |
| ★      | 在mermaid流程图中使用()                           | ``` "()"```两边加上双引号就能使用括号                        | [Mermaid 语法里需要输入括号怎么办](https://ask.csdn.net/questions/1099408) |
|        | mermaid的子图                                     | ```subgraph```+```end```                                     | [[关于写作那些事之快速上手Mermaid流程图](https://segmentfault.com/a/1190000022544565)](https://segmentfault.com/a/1190000022544565) |
| ★      | conda查看有多少虚拟环境                           | ```conda env list```<br>```conda info -e```                  | [Anaconda-用conda创建python虚拟环境](https://zhuanlan.zhihu.com/p/94744929) |
| ★      | conda创建虚拟环境                                 | ```conda create -n your_env_name python=x.x```               | [Anaconda-用conda创建python虚拟环境](https://zhuanlan.zhihu.com/p/94744929) |
| ★      | conda删除虚拟环境                                 | ```conda remove -n your_env_name --all```                    | [Anaconda-用conda创建python虚拟环境](https://zhuanlan.zhihu.com/p/94744929) |
|        | Markdown表格换行                                  | ```<br>```                                                   | [markdown表格内如何进行换行？](https://blog.csdn.net/microcosmv/article/details/51868178) |
|        | Obsidian表格进入下一个单元格                      | <kbd>Tab</kbd>                                               | -                                                            |
|        | Obsidian表格进入下一行的第一个单元格              | <kbd>Enter</kbd>                                             | -                                                            |
|        | Windows10下安装Anaconda后Jupyter Notebook无法使用 | 需要另其自动打开浏览器，同时将```NotebookApp.allow_root```取消注释并设为True | [[Windows10下安装Anaconda后Jupyter Notebook无法启动，403Get，Kernel Error解决办法]] |
|        | Windows10下便捷调整窗口大小，将其紧贴窗口边框     | <kbd>Win</kbd>+<kbd>Tab</kbd>                                | -                                                            |
| ★      | Windows10下快速进入对应目录的WSL控制台窗口        | 在对应目录下的地址栏输入```bash```                           | [在Win 10子系统（WSL）中安装 Geant 4和Cern Root 的方法整理](https://blog.csdn.net/budong_2017/article/details/102865543) |
|        | WSL查看jupyter notebook配置文件所在路径           | 在控制台内输入指令```jupyter notebook --generate-config```   | [Jupyter Notebook 文件默认目录的查看](https://blog.csdn.net/u012654981/article/details/89460307) |
|        | WSL查看系统支持的shell                            | 在控制台内输入```cat /etc/shells```                          | [linux中查看现在使用的shell是ksh还是bash？以及怎样修改？](https://blog.csdn.net/Rainnnbow/article/details/47153021) |
|        | WSL查看现在使用的shell                            | 在控制台内输入```echo $0```或```echo $SHELL```               | [linux中查看现在使用的shell是ksh还是bash？以及怎样修改？](https://blog.csdn.net/Rainnnbow/article/details/47153021) |
| ★      | WSL修改默认shell                                  | 在控制台内输入```chsh -s```加上上面显示的支持的shell，如```chsh -s /bin/bash``` | [linux中查看现在使用的shell是ksh还是bash？以及怎样修改？](https://blog.csdn.net/Rainnnbow/article/details/47153021) |
| ★      | WSL修改shell启动时执行的内容                      | 打开```\\wsl$\Ubuntu-20.04\root\.bash_profile```，添加对应内容，如```source ~/.bashrc```，需要关闭zsh也是在此处设置 |                                                              |
|        | Windows10实现快速窗口布局/系统分屏                | <kbd>Win</kbd>+<kbd>←</kbd>/<kbd>→</kbd>可以将应用窗口缩小一半，其可以左右调整位置<br>  在上一步的基础上，通过<kbd>Win</kbd>+<kbd>↑</kbd>/<kbd>↓</kbd>可以实现窗口按显示器四分之一大小显示 | [Windows 10 让窗口布局更有效率](http://www.haibianshibei.com/1117.html) |
| ★      | 通过xfce运行WSL桌面GUI/显示桌面                   | ```DISPLAY=:0 startxfce4```<br>或<br>```export=:0 startxfce4``` | [win10子系统(wsl 2)安装图形界面，显示桌面，win+linux，是时候告别虚拟机了](https://blog.csdn.net/Ginger2330/article/details/109390573) |
|        | 在xfce的WSL桌面GUI内打开文件夹                    | ```mimeopen -d ~/Desktop/```                                 | ["Failed to execute default File Manager: Input/output error"](https://askubuntu.com/questions/42682/failed-to-execute-default-file-manager-input-output-error) |
| ★      | 在WSL中进入prompt                                 | ```source activate```                                        | [Anaconda使用conda activate激活环境出错（待完全解决）2018-06-09](https://www.jianshu.com/p/cd0096b24b43) |
|        | 获取管理员权限                                    | `sudo -i`                                                    | -                                                            |
|        |                                                   |                                                              |                                                              |
