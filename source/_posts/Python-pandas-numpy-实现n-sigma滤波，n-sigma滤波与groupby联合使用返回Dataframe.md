---
title: Python pandas numpy 实现n-sigma滤波，n-sigma滤波与groupby联合使用返回Dataframe
tags:
  - Python
  - pandas
  - numpy
category:
  - 函数
abbrlink: ccd63a75
date: 2022-03-24 15:24:17
---

---

**创建时间**：2022年3月24日15:16:08
**最新更新**：2022年3月26日14:23:02


---

**核心思路**：符合条件返回索引，取符合条件的索引

---

# 引入所需库
```Python
import pandas as pd
import numpy as np
import math
```

# 函数块
```Python
def n_sigma(data,n):
    '''
    进行3sigma剔除
    :param data:传入的数据
    :return:剔除之后的数据，或者剔除异常值之后的行索引名称
    '''
    #均值-标准差
    #如果结果在（u-3sigma，u+3sigma）之间则认为是正确数据。
    if math.isnan(data.std()):
        bool_num = ((data.mean()-n*0) <= data) & ((data.mean()+n*0) >= data)
    else:
        bool_num = ((data.mean()-n*data.std()) <= data) & ((data.mean()+n*data.std()) >= data)

    #按布尔类型返回正确的数据
    return bool_num
    # return data.loc[bool_num,:]
```


# 使用
* 读数据
```Python
df = pd.read_csv('./test.csv')
```

## 独立使用
* 针对整体DataFrame的某一列数值（列名是下面代码的`colName`，对应替换即可），进行使用
```Python
# 3sigma滤波
df_3sigma = df.loc[n_sigma(df.loc[:,'colName'], n = 3),:]
```

# 与groupby结合使用
* 与`groupby`结合使用，即先分组，再对每组的特定列进行n-sigma滤波，最后返回一个DataFrame（返回的不是group结果，是一个Dataframe）
	* `groupbyName`修改为`groupby`所针对的列的列名
	* `colName`修改为进行3sigma滤波的列的列名
```Python
df = df.groupby('groupbyName').apply(lambda x:x.loc[n_sigma(x.loc[:,'colName'], n = 3)]) # 3sigma滤波
df = df.reset_index(drop=True)
df.index.name = None
```


# 完整代码
```Python
# 导入库
import pandas as pd
import numpy as np
import math

# 函数定义
def n_sigma(data,n):
    '''
    进行3sigma剔除
    :param data:传入的数据
    :return:剔除之后的数据，或者剔除异常值之后的行索引名称
    '''
    #均值-标准差
    #如果结果在（u-3sigma，u+3sigma）之间则认为是正确数据。
    if math.isnan(df['b'].std()):
        bool_num = ((data.mean()-n*0) <= data) & ((data.mean()+n*0) >= data)
    else:
        bool_num = ((data.mean()-n*data.std()) <= data) & ((data.mean()+n*data.std()) >= data)
        # print("(data.mean()-n*data.std())",(data.mean()-n*data.std()))
        # print("(data.mean()-n*data.std())",(data.mean()+n*data.std()))

    #按布尔类型返回正确的数据
    return bool_num
    # return data.loc[bool_num,:]


# 读数据
df = pd.read_csv('./test.csv')

# 使用
df_3sigma = df.loc[n_sigma(df.loc[:,'colName'], n = 3),:]


df = df.groupby('groupbyName').apply(lambda x:x.loc[n_sigma(x.loc[:,'colName'], n = 3)]) # 3sigma滤波
df = df.reset_index(drop=True)
df.index.name = None
```


# Ref
* [用3-sigma原则处理DataFrame中的异常值](https://blog.csdn.net/baidu_38963740/article/details/117547331)
