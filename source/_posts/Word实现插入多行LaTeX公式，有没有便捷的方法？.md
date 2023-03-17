---
title: Word实现插入多行LaTeX公式，有没有便捷的方法？
tags:
  - word
  - office
category:
  - 论文
  - office
abbrlink: cb2e0f17
date: 2022-04-09 17:20:08
---

---

**创建时间**：2022年4月9日17:20:08
**最新更新**：2022年4月9日19:44:09

---

**Problem Description**：Word implements inserting multi-line LaTeX formulas, is there a convenient way?

**核心思路**：和`MathPix`联用，<kbd>Shift</kbd>+<kbd>Enter</kbd>

---

# MathPix识别，导出为.docx
* 先OCR，`Export .docx`
  * ![image-20220409194503729](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194503729.png)
  * ![image-20220409194508606](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194508606.png)


# .docx里头变成同一个公式快
* 打开这个`.docx`，这是2行公式块
  * ![image-20220409194514275](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194514275.png)


* 在第一行公式块后输入` #()`（注意有一个空格），然后回车
	* 这一步目的是为了拓展公式块宽度，同时也是多行公式的准备
	  * ![image-20220409194518729](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194518729.png)
* 光标移到`(`前，按<kbd>Shift</kbd>+<kbd>Enter</kbd>，粘贴第二行的公式，如下下图，删除最后面的`#()`，得到多行公式块如下下下图
  * ![image-20220409194522258](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194522258.png)
  * ![image-20220409194526494](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194526494.png)
  * ![image-20220409194530375](Word实现插入多行LaTeX公式，有没有便捷的方法？/image-20220409194530375.png)




# Ref
* [Word多行公式的换行、对齐与编号](https://zhuanlan.zhihu.com/p/439988361)
