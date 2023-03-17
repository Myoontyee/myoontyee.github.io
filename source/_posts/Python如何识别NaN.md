---
title: Python如何识别NaN
tags:
  - Python
  - numpy
category:
  - 函数
abbrlink: 6682865e
date: 2022-04-09 11:37:06
---

---

**创建时间**：2022年4月9日11:37:06
**最新更新**：2022年4月9日11:43:20

---

**核心思路**：`np.nan` or `np.isnan()`

---

**输入**：数值
**输出**：`bool`值，`true`或者`false`

---

# 分块
## 导入库
* 调用`numpy`库
```Python
import numpy as np
```

## 进行判别
* 如果`Num`是`NaN`，返回`true`
```Python
Num == np.nan
```

* 当然，也可以用`np.isnan()`
	* 如果是，返回`true`
	* 注意`np.isnan()`无法处理小数

```Python
np.isnan(Num)
```


# 整体代码
```Python
# 导入库
import numpy as np

# 进行判别
# 方式1
Num == np.nan

# 方式2
# 无法处理小数
np.isnan(Num)
```


# Ref
* [How can I check for NaN values?](https://stackoverflow.com/questions/944700/how-can-i-check-for-nan-values)
