---
title: 从外部复制粘贴代码进Obsidian，格式发生错乱是为啥？如何处理？
tags:
  - Hexo
  - Chic
  - 表格
  - Obsidian
  - Typora
  - markdown
category:
  - 博客搭建
  - Obsidian
  - Typora
  - markdown
abbrlink: 3af48a75
date: 2022-04-04 11:09:35
---

---

**创建时间**：2022年4月4日11:09:35
**最新更新**：2022年4月4日11:14:42

---

**核心思路**：直接粘贴，会发生`HTML to Markdown`的变换，用`粘贴为纯文本`就可以了，快捷键是`Ctrl`+`Shift`+`V`

---

* 直接粘贴，会发生`HTML to Markdown`的变换，用`粘贴为纯文本`就可以了，快捷键是`Ctrl`+`Shift`+`V`


# 效果

* 使用平台是`Visual Studio Code`，源码如下

![image-20220404115544021](从外部复制粘贴代码进Obsidian，格式发生错乱是为啥？如何处理？/image-20220404115544021.png)

# Ctrl+V
```C++
#include "B5EmCalorimeterHit.hh"

  

#include "G4VVisManager.hh"

#include "G4VisAttributes.hh"

#include "G4Colour.hh"

#include "G4AttDefStore.hh"

#include "G4AttDef.hh"

#include "G4AttValue.hh"

#include "G4UIcommand.hh"

#include "G4UnitsTable.hh"

#include "G4SystemOfUnits.hh"

#include "G4ios.hh"
```

# 到Typora里，再Ctrl+V到Obsidian里
```C++
#include "B5EmCalorimeterHit.hh"

#include "G4VVisManager.hh"
#include "G4VisAttributes.hh"
#include "G4Colour.hh"
#include "G4AttDefStore.hh"
#include "G4AttDef.hh"
#include "G4AttValue.hh"
#include "G4UIcommand.hh"
#include "G4UnitsTable.hh"
#include "G4SystemOfUnits.hh"
#include "G4ios.hh"
```

# Ctrl+Shift+V
```C++
#include "B5EmCalorimeterHit.hh"

#include "G4VVisManager.hh"
#include "G4VisAttributes.hh"
#include "G4Colour.hh"
#include "G4AttDefStore.hh"
#include "G4AttDef.hh"
#include "G4AttValue.hh"
#include "G4UIcommand.hh"
#include "G4UnitsTable.hh"
#include "G4SystemOfUnits.hh"
#include "G4ios.hh"
```

# Ref
* [idea 复制代码到obsidian后格式错乱](https://forum-zh.obsidian.md/t/topic/769)
