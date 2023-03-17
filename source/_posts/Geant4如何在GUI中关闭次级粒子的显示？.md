---
title: Geant4如何在GUI中关闭次级粒子的显示？
tags:
  - Geant4
  - GUI
  - marco
category:
  - Geant4
mathjax: true
abbrlink: 209412b0
date: 2022-04-22 17:22:20
---

---

**创建时间**：2022年4月22日17:20:27
**最新更新**：2022年4月22日17:23:12

---

**Problem Description**：How can Geant4 turn off the display of secondary particles in the GUI?

**核心思路**：用宏指令~

---

* 效果是红色的和绿色的粒子都会关闭显示，仅保留显示蓝色粒子
	* 红色表示负电荷
	* 绿色表示中性电荷（如伽马射线）
	* 蓝色表示正电荷（如质子、$ e^{ + } $等）


# 关闭次级粒子显示
* 在GUI内输入以下指令

```bash
/vis/filtering/trajectories/create/attributeFilter secondaries
/vis/filtering/trajectories/secondaries/setAttribute PID
/vis/filtering/trajectories/secondaries/addValue 0
```

# 在此之后想再打开次级粒子的显示
* 在GUI内输入以下指令

```bash
/vis/filtering/trajectories/secondaries/invert true
```

# Ref
* [Filter primary particles](https://geant4-forum.web.cern.ch/t/filter-primary-particles/4327)
