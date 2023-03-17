---
title: Python DataFrame转为矩阵，DataFrame中包含行列等坐标信息和值信息，如何转换为numpy矩阵？（为OpenCV使用提供方便）
tags:
  - Python
  - pandas
  - numpy
  - Matrix
category:
  - 函数
abbrlink: bbfbe18f
date: 2022-03-23 16:05:04
---

---

**创建时间**：2022年3月23日16:05:04
**最新更新**：2022年3月30日20:30:09


---

**核心思路**：
* 针对的情况是坐标是整数的情况
* 三个方法
  * 法1：for循环嵌套，按对应索引输入元素
  * 法2：`pivot`+`fillna`+`reindex`+`values`
  * 法3：`set_index`+`unstack`
* 注意法1需要矩阵`Mat`初始化，法2、法3不用

---

**输入**：DataFrame
**输出**：Matrix（np.array）

---

# 通用

* 导入库

```Python
# 基础库
import pandas as pd
import numpy as np

# 进度条
from tqdm import tqdm_notebook

# warnings设置
import warnings
warnings.filterwarnings('ignore')
```

* 读一个测试用数据

```Python
df = pd.read_excel('./meshgridTest.xlsx')
```
* 测试用的数据长这样，`row`代表行索引，`col`代表列索引，`value`代表对应索引要填入的元素值
	* 注意`Python`的索引是从0开始
```bash
	row	col	value
0	1	1	2
1	2	1	3
2	3	2	1
```

# 法1
## 具体使用
* 注意法1需要矩阵`Mat`初始化，法2、法3不用
* 生成矩阵，并显示进度条

```Python
rows = df['row'].max()+1
cols = df['col'].max()+1

Mat = np.zeros((rows,cols),np.uint8)


for row in tqdm_notebook(range(rows)):
    for col in range(0, cols):
        value = df[(df['row'] == row) & (df['col'] == col)]['value'].values

        if value:
            Mat[row, col] = value
        else:
            pass
```

```Bash
array([[0, 0, 0],
       [0, 2, 0],
       [0, 3, 0],
       [0, 0, 1]], dtype=uint8)
```

## 完整代码块
```Python
# 基础库
import pandas as pd
import numpy as np

# 进度条
from tqdm import tqdm_notebook

# warnings设置
import warnings
warnings.filterwarnings('ignore')

# ====================================================
# 数据集在这改
# ====================================================
# 读数据集
df = pd.read_excel('./meshgridTest.xlsx')
# ====================================================

# 功能块
rows = df['row'].max()+1
cols = df['col'].max()+1

Mat = np.zeros((rows,cols),np.uint8)

# 运行
for row in tqdm_notebook(range(rows)):
    for col in range(0, cols):
        value = df[(df['row'] == row) & (df['col'] == col)]['value'].values

        if value:
            Mat[row, col] = value
        else:
            pass	
```

* 输出
```Bash
array([[0, 0, 0],
       [0, 2, 0],
       [0, 3, 0],
       [0, 0, 1]], dtype=uint8)
```

# 法2
* 注意法1需要矩阵`Mat`初始化，法2、法3不用
* `pivot`+`fillna`+`reindex`+`values`

## 具体使用

```Python
rows = np.arange(df.row.max()+1)
cols = np.arange(df.col.max()+1)

Mat = df.pivot('row', 'col', 'value').fillna(0).reindex(index=rows, columns=cols, fill_value=0).values
print(Mat)
```
```Bash
[[0. 0. 0.]
 [0. 2. 0.]
 [0. 3. 0.]
 [0. 0. 1.]]
```

## 完整代码块
```Python
# 基础库
import pandas as pd
import numpy as np

# 进度条
from tqdm import tqdm_notebook

# warnings设置
import warnings
warnings.filterwarnings('ignore')

# ====================================================
# 数据集在这改
# ====================================================
# 读数据集
df = pd.read_excel('./meshgridTest.xlsx')
# ====================================================

# 功能块
rows = np.arange(df.row.max()+1)
cols = np.arange(df.col.max()+1)

Mat = df.pivot('row', 'col', 'value').fillna(0).reindex(index=rows, columns=cols, fill_value=0).values

# 打印
print(Mat)
```

* 输出
```Bash
[[0. 0. 0.]
 [0. 2. 0.]
 [0. 3. 0.]
 [0. 0. 1.]]
```

# 法3
* 注意法1需要矩阵`Mat`初始化，法2、法3不用
* `set_index`+`unstack`

## 具体使用

```Python
rows = np.arange(df.row.max()+1)
cols = np.arange(df.col.max()+1)

Mat = df.set_index(['row', 'col'])['value'].unstack(fill_value=0).reindex(index=rows, columns=cols, fill_value=0).values
print(Mat)
```
```Bash
array([[0, 0, 0],
       [0, 2, 0],
       [0, 3, 0],
       [0, 0, 1]])
```

## 完整代码块
```Python
# 基础库
import pandas as pd
import numpy as np

# 进度条
from tqdm import tqdm_notebook

# warnings设置
import warnings
warnings.filterwarnings('ignore')

# ====================================================
# 数据集在这改
# ====================================================
# 读数据集
df = pd.read_excel('./meshgridTest.xlsx')
# ====================================================

# 功能块
rows = np.arange(df.row.max()+1)
cols = np.arange(df.col.max()+1)

Mat = df.set_index(['row', 'col'])['value'].unstack(fill_value=0).reindex(index=rows, columns=cols, fill_value=0).values

# 打印
print(Mat)
```

* 输出

```Bash
array([[0, 0, 0],
       [0, 2, 0],
       [0, 3, 0],
       [0, 0, 1]])
```

# Ref
* [How do I put values od dataframe column in 2d matrix?](https://stackoverflow.com/questions/45646966/how-do-i-put-values-od-dataframe-column-in-2d-matrix)
