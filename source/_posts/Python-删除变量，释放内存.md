---
title: Python 删除变量，释放内存
tags:
  - Python
  - gc
category:
  - 函数
abbrlink: c2c9be22
date: 2022-04-08 21:33:34
---

---

**创建时间**：2022年4月8日21:33:34
**最新更新**：2022年4月8日21:44:11

---

**Problem Description**：Python delete variable, free memory

**核心思路**：`gc`库，`del`+`gc.collect()`

---

**输入**：任意Python内变量
**输出**：对应变量删除并释放内存

---

* 前提是不存在其他对象对该对象的引用


# 步骤
## 导入库
```Python
import gc
```

## 示例数据
* 此处可以换为任意形式的任意变量，以`DataFrame`为例
```Python
import pandas as pd
val = pd.read_csv('./test.csv')
```

## 实现
* 删除变量，释放空间
```Python
del val # 待删除的变量
gc.collect()
```

# 完整代码
```Python
# 导入库
import gc

# 此处可以换为任意形式的任意变量
import pandas as pd
val = pd.read_csv('./test.csv')

# 删除变量
del val # 待删除的变量
gc.collect()
```

# Ref
* [在Jupyter里按需删除大内存变量并且释放内存](https://blog.csdn.net/qq_37966884/article/details/120195325)
