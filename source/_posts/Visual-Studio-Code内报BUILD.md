---
title: >-
  Visual Studio Code内报BUILD command invoked.   Cannot find LaTeX root file. 
  解决办法
tags:
  - Visual Studio Code
  - LaTeX
  - WSL2
category:
  - LaTeX
abbrlink: '4743966'
date: 2022-04-26 09:43:38
---

---

**创建时间**：2022年4月26日09:42:41
**最新更新**：2022年4月26日09:42:41

---

**Problem Description**：Visual Studio Code Error : BUILD command invoked.   Cannot find LaTeX root file.  Solution

**核心思路**：`settings.json`配置没配置对，或者没选择对应的语言`LaTeX`

---

# 错误原因
* 网上有些教程不是最新的了，记得看时间
* 有2个可能
	* `settings.json`没配置对
	* or没有选择对应的语言`LaTeX`

* 两种错误都是在`Visual Studio Code`内解决

# 错误原因1解决
* 具体见[[WSL2 + Visual Studio Code + LaTeX 配置教程]]
	* 将你的配置和下面这个对比一下，不行直接复制粘贴我下面这个也行
* 在`Visual Studio Code`内按<kbd>F1</kbd>，输入`setjson`，选择`打开设置(json)`
  *  <kbd>F1</kbd>这个快捷键冲突的话，就按<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
  * ![image-20220426095059219](Visual-Studio-Code内报BUILD/image-20220426095059219.png)

* 在`"latex-workshop.intellisense.biblatexJSON.replace": {},`语句下方添加如下语句，然后保存
  * 注意一定要在最外侧的大括号`{}`内添加

```json
    "latex-workshop.latex.tools": [
        {
          "name": "texify",
          "command": "texify",
          "args": [
            "--synctex",
            "--pdf",
            "--tex-option=\"-interaction=nonstopmode\"",
            "--tex-option=\"-file-line-error\"",
            "%DOC%.tex"
          ]
        },
        {
            // 编译工具和命令
            "name": "xelatex",
            "command": "xelatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOC%"
            ]
        },
        {
            "name": "pdflatex",
            "command": "pdflatex",
            "args": [
                "-synctex=1",
                "-interaction=nonstopmode",
                "-file-line-error",
                "%DOC%"
            ]
        },
        {
            "name": "bibtex",
            "command": "bibtex",
            "args": [
                "%DOCFILE%"
            ]
        }
      ],
    "latex-workshop.latex.recipes": [
        {
          "name": "PDFLaTeX",
          "tools": [
            "pdflatex"
          ]
      	},
        {
          "name": "XeLaTeX",
          "tools": [
            "xelatex"
          ]
        },
        {
          "name": "latexmk",
          "tools": [
            "latexmk"
          ]
        },
        {
          "name": "BibTeX",
          "tools": [
            "bibtex"
          ]
        },
        {
          "name": "pdflatex -> bibtex -> pdflatex*2",
          "tools": [
            "pdflatex",
            "bibtex",
            "pdflatex",
            "pdflatex"
          ]
        },
        {
          "name": "xelatex -> bibtex -> xelatex*2",
          "tools": [
            "xelatex",
            "bibtex",
            "xelatex",
            "xelatex"
          ]
        }
    ],
```

# 错误原因2解决
* 看`Visual Studio Code`对应项目右下角，是不是选了`LaTeX`这个语言，如果没有则选择`LaTeX`这个语言
	* ![image-20220426095110150](Visual-Studio-Code内报BUILD/image-20220426095110150.png)



# Ref
* [VScode配置latex时 出现 “Cannot find LaTeX root file”且文本无高亮提示，不显示tex图标](https://blog.csdn.net/weixin_42331859/article/details/109248743)
