---
title: DataFrame与np.array的相互转换，从读取如.csv数据集开始的DataFrame转矩阵
tags:
  - Python
  - numpy
  - pandas
  - Matrix
category:
  - 函数
abbrlink: d47898d0
date: 2022-04-01 17:25:24
---

---

**创建时间**：2022年4月1日17:25:24
**最新更新**：2022年4月8日21:54:19

---

**核心思路**：`.values`和`pd.DataFrame()`的使用

---

# DataFrame → np.array

---

**输入**：DataFrame
**输出**：np.array

---


* 函数块
	* 其中右侧`df`是待转换的`DataFrame`
	* 左侧`array`是生成的`np.array`

* 注意数据读入时的`header=None`
```python
df = pd.read_csv('./data_input.csv', header=None) # 读入数据
array = df.values #直接转成矩阵
```

# np.array

---

**输入**：np.array
**输出**：DataFrame

---

* 函数块
	* 其中`array`是待转换的`np.array`
	* `df`是生成的`DataFrame`
```python
df = pd.DataFrame(array)
```

# Ref
* [Pandas中把dataframe和np.array的相互转换](https://blog.csdn.net/weixin_39223665/article/details/79935467)
* [dataframe转换成矩阵](https://blog.csdn.net/u010916338/article/details/84065958)
