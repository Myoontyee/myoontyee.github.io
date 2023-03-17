---
title: Geant4 提示 adding row has failed 解决办法
tags:
  - Geant4
  - B5
  - CERN ROOT
category:
  - Geant4
  - CERN ROOT
abbrlink: ee2299fd
date: 2022-04-20 10:59:44
---

---

**创建时间**：2022年4月20日10:47:11
**最新更新**：2022年4月20日10:58:46

---

**Problem Description**：Geant4 prompts `adding row has failed` solution

**核心思路**：`column`这个表头名字缩短点就行，比如`worldPos_LD_2_EmCal_Hits`改成`LD.2_Hits`

---

# 背景故事

* 我代码写的开开心心的，列数＞19列就报错，说没法添加新的行
* 一开始以为是哪里限定了`ntuple`的最大列数，但是19这个数字又怪怪的，搜源码又搜不到
* 骚就骚在，导说那既然是`ntuple`的问题，咱们新建一个`ntuple`，再往里头放另外的19列不就好了咩，我一试，好家伙，一样的错
* 然后我就上Geant4论坛问CERN的大佬，听说人家数理基础极好
* 人回复说，我们`ntuple`没有最大上限`columns`数啊？
* 人还做了个测试
* 好家伙，然后我才头一次正式复现了我的BUG，发现是**列名太长的问题**
* Well，总之大家也明白解决方法了，如果不太明白，可以看下面的具体操作

# 报错信息
* 报错信息如下
	* 这个报错信息意味着生成数据表时添加新的一行发生错误
	* 对应的代码是`src/B5EventAction.cc`中`void B5EventAction::EndOfEventAction(const G4Event *event)`的`analysisManager->AddNtupleRow();`
		* 意思就是`AddNtupleRow()`这个函数执行过程中出错了
```bash
-------- WWWW ------- G4Exception-START -------- WWWW -------
*** G4Exception : Analysis_W022
      issued by : G4RootPNtupleManager::AddNtupleRow()
       ntupleId 0adding row has failed.
*** This is just a warning message. ***
-------- WWWW -------- G4Exception-END --------- WWWW -------
```

* 另外我还测试了，是否是数据表生成时的问题？
	* 对应的是`src/B5RunAction.cc`中`B5RunAction::B5RunAction(B5EventAction* eventAction) : G4UserRunAction(), fEventAction(eventAction)`的`analysisManager->CreateNtuple("B5", "Hits"); // ntuple Id = 0`及下面的`analysisManager->CreateNtupleIColumn`部分
* 测试完发现这部分代码是能正常运行的
* 即报错对应的是`src/B5EventAction.cc`中的代码
* 错误实际上发生在`src/B5RunAction.cc`中
* 咋测试的？
	* `G4cout`在代码块的头和尾部打印看看能不能正常执行
	* 不能正常执行肯定就没法`G4cout`了

# 解决办法

* 核心问题是表头的名字太长了，估计超出了啥变量类型的上限，溢出了，炸了
* 原本的列名如下
	* 我添加了别的列，此处是部分切片
	* 原本B5只有不到10列，我加七七八八加到21多列

```C++

analysisManager->CreateNtupleIColumn("worldPos_LD_2_EmCal_Hits");  // column Id = 18
analysisManager                                   // column Id = 19
->CreateNtupleDColumn("worldPos_LD_2_EmCal_x"); 
analysisManager                                   // column Id = 20
->CreateNtupleDColumn("worldPos_LD_2_EmCal_y"); 
analysisManager                                   // column Id = 21
->CreateNtupleDColumn("worldPos_LD_2_EmCal_z"); 
```

* 改成类似如下的

```C++
analysisManager->CreateNtupleIColumn("LD2_Hits");  // column Id = 18
analysisManager                                   // column Id = 19
->CreateNtupleDColumn("LD2_x"); 
analysisManager                                   // column Id = 20
->CreateNtupleDColumn("LD2_y"); 
analysisManager                                   // column Id = 21
->CreateNtupleDColumn("LD2_z"); 
```

* 即，修改前后对比如下

<div style="overflow:auto;width:100%"> <table width="auto" style="white-space:nowrap">
<tr>
<td> <div align = center> <strong>修改前</strong></div> </td> <td> <div align = center> <strong>修改后</strong></div> </td>
</tr>
<tr>
<td>
```C++
analysisManager->CreateNtupleIColumn("worldPos_LD_2_EmCal_Hits");  // column Id = 18
analysisManager                                   // column Id = 19
->CreateNtupleDColumn("worldPos_LD_2_EmCal_x"); 
analysisManager                                   // column Id = 20
->CreateNtupleDColumn("worldPos_LD_2_EmCal_y"); 
analysisManager                                   // column Id = 21
->CreateNtupleDColumn("worldPos_LD_2_EmCal_z"); 
```
</td>
<td>
```C++
analysisManager->CreateNtupleIColumn("LD2_Hits");  // column Id = 18
analysisManager                                   // column Id = 19
->CreateNtupleDColumn("LD2_x"); 
analysisManager                                   // column Id = 20
->CreateNtupleDColumn("LD2_y"); 
analysisManager                                   // column Id = 21
->CreateNtupleDColumn("LD2_z"); 
```
</td>
</table>
</div>


# Ref
* [When columns ID >19 , AddNtupleRow gets failed!](https://geant4-forum.web.cern.ch/t/when-columns-id-19-addntuplerow-gets-failed/7698/5)
