---
title: 'Hexo 报ssh: connect to host github.com port 22: Connection timed out错误解决办法'
tags:
  - Hexo
  - deploy
category:
  - 博客搭建
abbrlink: b1a1bc5b
date: 2022-04-30 12:51:03
---

---

**创建时间**：2022年4月30日12:45:27
**最新更新**：2022年4月30日12:50:02

---

**Problem Description**：Hexo reports ssh: connect to host github.com port 22: Connection timed out error solution

**核心思路**：`ssh`部署不上去，换`https`

---

* 很骚，我在实验室的网就行，用热点也行，神特么到寝室就不行了
* 简单来说，`ssh`部署不上去，咱们就不走`ssh`，换`https`，妈妈的

# 报错全文
```bash
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
FATAL {
  err: Error: Spawn failed
      at ChildProcess.<anonymous> (..\node_modules\hexo-util\lib\spawn.js:51:21)
      at ChildProcess.emit (node:events:520:28)
      at ChildProcess.cp.emit (..\node_modules\cross-spawn\lib\enoent.js:34:29)
      at Process.ChildProcess._handle.onexit (node:internal/child_process:291:12) {
    code: 128
  }
} Something's wrong. Maybe you can find the solution here: %s https://hexo.io/docs/troubleshooting.html
```

# 解决
* 用代码编辑器打开`_config.yml`，你项目根目录下的，有`deploy`的那个，将`repo`后面的`ssh`路径改为`https`路径，比如`https://github.com/`+`你的仓名`

<div style="overflow:auto;width:100%"> <table width="auto" style="white-space:nowrap">
<tr>
<td> <div align = center> <strong>修改前</strong></div> </td> <td> <div align = center> <strong>修改后</strong></div> </td>
</tr>
<tr>
<td>
```yml
repo: git@github.com:你的仓
```
</td>
<td>
```yml
repo: https://github.com/你的仓
```
</td>
</table>
</div>



# Ref
* [Win10使用ssh的hexo deploy到github報錯](https://github.com/hexojs/hexo/issues/3339)
