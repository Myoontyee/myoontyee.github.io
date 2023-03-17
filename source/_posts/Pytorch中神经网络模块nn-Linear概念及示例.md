---
title: Pytorch中神经网络模块nn.Linear概念及示例
tags:
  - Pytorch
  - Neural Network
  - Linear
category:
  - Neural Network
mathjax: true
abbrlink: a2c031de
date: 2022-05-30 11:22:58
---

---

**创建时间**：2022年5月30日09:55:15
**最新更新**：2022年5月30日17:38:01

---

**Problem Description**：Concept and example of neural network module `nn.Linear` in Pytorch

**核心思路**：
* 对输入数据应用线性变换：$ y=xA^{T}+b $ 
  * 或者说 $ Y=XW^{T}+b $
    * $ W $ 就是我们关注的权重矩阵
    * $ b $ 就是我们关注的偏置
* `torch.nn.Linear(in_features, out_features, bias=True)`
  * 第一个参数是输入矩阵的列数
  * 第二个参数是输出矩阵的列数
  * 第三个参数是有没有偏置 $ bias $

---

* 文本内容参考了[yanghh](https://www.cnblogs.com/yanghh/p/14054163.html)的工作
	* 他写的真棒👍！

# 定义
```Python
class
torch.nn.Linear(in_features, out_features, bias=True, device=None, dtype=None)
```

* 用途
	* 对输入数据应用线性变换：$ y=xA^{T}+b $ 
	* 用于设置网络中的全连接层
* 注意
	* 输入与输出都是二维张量
		* 二维张量的一般形状为 $ [batch \ size, \ size] $

## 输入与输出
* 输入
	* $ ( ∗ , H_{ in } ) $
		* 其中 $ * $ 代表任意数量的维度，可以取None
	* $ ( * , H_{ out } ) $
		* 除了最后一个维度（指 $ H_{ out } $ ）之外的所有维度都与输入的形状相同，并且 $  H_{out} = out \ features $

## 参数
* 先关注一下核心公式：
	* $ y=xA^{T}+b $
	* $ Y=XA^{T}+b $
* `in_features`
	* 每个输入样本的大小，即输入矩阵的列数
	* 对应输入二维张量形状 $ [batch \ size, input \ size] $ 中的 $ input \  size $
	* 代表每个样本 $ x $ 的特征数
		* 也是输入层神经元的个数
* `out_features`
	* 每个输出样本的大小，即输出矩阵的列数
	* 对应输出二维张量形状 $ [batch \ size，output \ size] $ 中的 $ output \  size $
	* 代表每个样本输出 $ y $ 的特征数
		* 也是输出层神经元的个数
* `bias`
	* 如果设置为 `False`，该层将不会学习附加偏差
	* 默认值：`True`
		* 如果为 `True`，则网络的输出需要再加上一个偏置向量，维度为 $ output \ size $


# 示例与实现
## 示例
* 示例内容来自[yanghh](https://www.cnblogs.com/yanghh/p/14054163.html)，详见Ref

* 在将`Transformer`布到`FPGA`上头时，我们其实需要知道权重矩阵`W`和偏置`bias`，单看[手册](https://pytorch.org/docs/stable/generated/torch.nn.Linear.html#linear)还不晓得是咋回事（刚入门嘛...），发觉[yanghh](https://www.cnblogs.com/yanghh/p/14054163.html)写的极好的，下面就是他的工作内容
* 官方手册写的该函数功能为对输入数据应用线性变换：$ y = xA^{T} + b $ 
	* 这个不直观，实际上做的是如下变换

$$ \begin{equation}\label{eq1}
Y = XW^{T}+b

\end{equation} 

$$
* 其中
	* $ X $ 是一个矩阵而非向量
		* 通常来自于一个 $ batch $ 中的样本，用这个样本组成一个输入矩阵
		* 矩阵 $ X $ 的每一行代表一个输入样本，如下


$$ \tag{2}

\begin{matrix}

&Y 

\\ 

&\left[\begin{array}{cccccccccc}

? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ?

\end{array}\right]_{4 \times 10}

\\

&X   &W^{T} &+ &b

\\
=

&
\left[\begin{array}{llllll}

1 & 3 & 1 & 2 & 5 & 6 \\
2 & 3 & 1 & 5 & 3 & 1 \\
1 & 2 & 4 & 4 & 2 & 3 \\
7 & 8 & 1 & 3 & 5 & 9

\end{array}\right]_{4 \times 6}

&
\left[\begin{array}{llllllllll}

1 & 3 & 5 & 2 & 3 & 4 & 5 & 6 & 7 & 3 \\
2 & 3 & 5 & 6 & 3 & 5 & 6 & 7 & 8 & 6 \\
5 & 4 & 3 & 6 & 3 & 4 & 2 & 4 & 7 & 4 \\
6 & 4 & 2 & 4 & 6 & 7 & 8 & 6 & 4 & 5 \\
6 & 4 & 3 & 2 & 6 & 7 & 8 & 2 & 1 & 7 \\
2 & 4 & 5 & 6 & 3 & 6 & 7 & 4 & 7 & 2

\end{array}\right]_{6 \times 10}

&+

&
\left[\begin{array}{llllllllll}

1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10

\end{array}\right]_{1 \times 10}

\end{matrix}

$$

* (2)式中
	* 输入是一个 $ shape $ 为$(4,6)$的矩阵$X$
		* 即这个矩阵由 $ 4 $ 个样本组成
		* 每个样本有 $ 6 $ 个维度的特征
	* $ W^{T} $ 代表全连接层的权重矩阵，$ shape $ 为 $ (6, 10) $
		* 即每个输入样本（ $ X $ 的每一行）在这个矩阵 $ W^{T} $ 的作用下，输出维度变为 $ 10 $（输出一个向量）
	* 即输入层有 $ 6 $ 个神经元，输出层有 $ 10 $ 个神经元
	* $ b $ 是偏置向量，是 $ bias $ ，它的维度等于输出神经元的个数 $ 10 $
	* **广播机制（broadcast mechanism）**
		* 解释具体见
		* $ b $ 是 $ 1×10 $ 的向量， $ XW^{T} $ 的输出是一个 $ 4×10 $ 的矩阵
			* 按理来说其没法和一个向量相加啊？
			* 这里应用的是 $ Tensor $ 的**广播机制（broadcast mechanism）**
				* 就你平常直接从`GitHub`上搞神经网络代码下来跑，报`broadcast`错误的那个机制 
			* $ (4, 10) $ 的矩阵和 $ (1, 10) $ 向量相乘，由于缺失，触发广播机制，把向量 $ b $ 由 $ (1, 10) $ 变成 $ (4, 10) $ 的矩阵 $ b' $，最终执行的实际操作如下

$$\tag{3}
\begin{matrix}
&Y 


\\ 
&\left[\begin{array}{cccccccccc}
? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ? \\
? & ? & ? & ? & ? & ? & ? & ? & ? & ?
\end{array}\right]_{4 \times 10}
\\
&X   &W^{T} &+ &b'
\\
&=
\left[\begin{array}{llllll}
1 & 3 & 1 & 2 & 5 & 6 \\
2 & 3 & 1 & 5 & 3 & 1 \\
1 & 2 & 4 & 4 & 2 & 3 \\
7 & 8 & 1 & 3 & 5 & 9
\end{array}\right]_{4 \times 6}

&\left[\begin{array}{llllllllll}
1 & 3 & 5 & 2 & 3 & 4 & 5 & 6 & 7 & 3 \\
2 & 3 & 5 & 6 & 3 & 5 & 6 & 7 & 8 & 6 \\
5 & 4 & 3 & 6 & 3 & 4 & 2 & 4 & 7 & 4 \\
6 & 4 & 2 & 4 & 6 & 7 & 8 & 6 & 4 & 5 \\
6 & 4 & 3 & 2 & 6 & 7 & 8 & 2 & 1 & 7 \\
2 & 4 & 5 & 6 & 3 & 6 & 7 & 4 & 7 & 2
\end{array}\right]_{6 \times 10}

&+

&\left[\begin{array}{cccccccccc}
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 \\
1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10
\end{array}\right]_{4 \times 10}


\end{matrix}

$$

## 实现

* 代码来自[yanghh](https://www.cnblogs.com/yanghh/p/14054163.html)

```Python
import torch
 
X = torch.randn(128, 20)          # 输入的维度是（128，20）
model = torch.nn.Linear(20, 30)   # 20,30 是指维度
Y = model(X)
print('model.weight.shape: ', model.weight.shape)  # 矩阵
print('model.bias.shape: ', model.bias.shape)      # 向量
print('output.shape: ', Y.shape)                   # 矩阵
 
# 等价于下面的
ans = torch.mm(X, model.weight.t()) + m.bias # Y = XW.T + b
print('ans.shape: ', ans.shape)
 
"""
model.weight.shape:  torch.Size([30, 20])
model.bias.shape:  torch.Size([30])
output.shape:  torch.Size([128, 30])
ans.shape:  torch.Size([128, 30])
"""
```

---

# Ref
* [Linear](https://pytorch.org/docs/stable/generated/torch.nn.Linear.html#linear)
* [Source code for torch.nn.modules.linear](https://pytorch.org/docs/stable/_modules/torch/nn/modules/linear.html#Linear)
* [Pytorch 神经网络模块之 Linear Layers](https://www.cnblogs.com/yanghh/p/14054163.html)
