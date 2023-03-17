---
title: >-
  Hexo安装插件遇上5 vulnerabilities (2 moderate, 2 high, 1 critical)类似的报错，让使用npm
  fund寻求更多细节，如何解决
tags:
  - Chic
  - Hexo
category:
  - 博客搭建
abbrlink: 9762d0c6
date: 2022-03-12 17:30:04
---

---

**创建时间**：2022年3月12日17:30:04
**最新更新**：2022年3月29日20:04:34

---

**核心思路**：`Git-Bash`输入`npm install --no-audit`即可

---

如果`Git-Bash`内在安装后出现如下提示，则在`Git-Bash`内输入`npm install --no-audit`

```bash

up to date, audited 293 packages in 4s

19 packages are looking for funding
  run `npm fund` for details

5 vulnerabilities (2 moderate, 2 high, 1 critical)
```

* 输入如下代码即可
```bash
npm install --no-audit
```


# Ref
* [How to fix npm vulnerabilities manually?](https://stackoverflow.com/questions/51377148/how-to-fix-npm-vulnerabilities-manually)
