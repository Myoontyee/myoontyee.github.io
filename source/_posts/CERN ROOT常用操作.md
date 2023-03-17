---
layout: cern
title: CERN ROOT常用操作
date: 2021-09-13 21:46:44
abbrlink: c75d34a5
tags:
- 常用操作
- CERN ROOT

category:
- 查找表

---



| 重要性 | 功能                              | 按键                                                         | 参考                                                         |
| ------ | --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ★      | WSL中打开ROOT的图形界面           | 控制台输入```DISPLAY=:0 root```                              | [新手Linux子系统方案：WSL+Xming+cmder+zsh与高能物理Cern Root的安装](https://zhuanlan.zhihu.com/p/81622442) |
|        | 在Windows10中快速打开对应控制提啊 | 在地址栏输入```bash```或```cmder```等                        | -                                                            |
|        | 在WSL中打开ROOT                   | 控制台输入```root```                                         | [新手Linux子系统方案：WSL+Xming+cmder+zsh与高能物理Cern Root的安装](https://zhuanlan.zhihu.com/p/81622442) |
|        | 在ROOT中读取文件                  | 进入ROOT后，在控制台输入```TFile file("文件名")``` file可以修改成其他值，代表变量名，此处读取的是```.root```文件 | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |
|        | 在ROOT中打开可视化界面            | 进入ROOT后，且读取文件后，在控制台输入```new TBrowser```     | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |
|        | 在ROOT实现清除覆盖读入文件        | 进入ROOT后，在控制台输入```TFile file("文件名","recreate")``` file可以修改成其他值，代表变量名，此处读取的是```.root```文件 | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |
|        | 在ROOT实现后续附加读入文件        | 进入ROOT后，在控制台输入```TFile file("文件名","update")``` file可以修改成其他值，代表变量名，此处读取的是```.root```文件 | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |
|        | 在ROOT中浏览读入的文件信息        | 进入ROOT后，且读取文件后，在控制台输入```存放读取文件的参数名.ls()```，如```file.ls()``` | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |
|        | 在ROOT中打印读入的文件信息        | 进入ROOT后，且读取文件后，在控制台输入```存放读取文件的参数名.Print()```，如```file.Print()``` | [CERN ROOT 数据处理工具包_root文件读取](https://www.bilibili.com/video/BV1fz411B7SG/) |