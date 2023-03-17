---
title: GitHub的个人博客，blog，GitHub Pages如何修改地址，如何修改published site？
abbrlink: b3031f8a
date: 2022-03-29 19:53:25
tags:
  - Hexo
  - Chic
category:
  - 博客搭建
---

---

**创建时间**：2022年3月29日19:53:25
**最新更新**：2022年3月29日19:53:37


---

**核心思路**：

1.改仓名
2.调**Blog源码根目录**配置文件

---

# 改仓名

* 进入设置页面修改代码仓名，`Settings`→`General`→`Repository name`→`Rename`，修改为对应的`.github.io`路径
![image-20220329195625984](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195625984.png)
# 调整Blog源码根目录下配置文件

* 调配置文件，打开**Blog源码根目录**的配置文件，下图是用`Visual Studio Code`打开整个文件夹，选中`_config.yml`配置文件
	* 修改url后面的地址为上面对应的仓名
	* 修改对应的repo地址为对应仓地址，进入代码仓→`Code`→复制→到**Blog源码目录**下的配置文件里repo后面粘贴

![image-20220329195637088](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195637088.png)
![image-20220329195643350](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195643350.png)

![image-20220329195648919](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195648919.png)

![image-20220329195655481](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195655481.png)

# 确认代码仓Source源
* 回到代码仓，确认Source源，点击`Settings`→`Pages`→`Source`看是否选中了对应的`Branch`
	* 这个主要是因为此处用另外一个`Branch`备份Blog源码
* 点开网址，即可

![image-20220329195702504](GitHub的个人博客，blog，GitHub-Pages如何修改地址，如何修改published-site？/image-20220329195702504.png)





# 额外的话

* 目前我采用的是公仓放网页部署后的码，另一个私仓放源码，分离开操作更稳
