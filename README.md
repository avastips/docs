---
title: 概述
lang: zh-CN
---

# 熔火工坊文档

这是一个OW地图工坊的相关文档网站。

## 教程

| 名称 | 难度 | 说明 |
| --- | --- | --- |
| [零基础入门](tutorial/zero_based.md) | ★☆☆☆☆ | 入门教程，介绍了规则、变量的基本概念和使用 |
| [常见功能](tutorial/common.md) | ★★☆☆☆ | 一些常见的功能是怎么做的 |
| [生化模式](tutorial/mutation.md) | ★★★☆☆ | 一个简单的生化模式是怎么一步一步做出来的 |
| [2D格斗解析](tutorial/2d.md) | ★★☆☆☆ | 解析2D横版格斗的基本规则 |
| [自瞄和透视解析](tutorial/aiming_and_perspective.md) | ★★☆☆☆ | 解析最基本的自瞄和透视的基本规则 |
| [应用观察者模式思想](tutorial/observer.md) | ★★★★☆ | 使用观察者模式的思想，方便我们编写规则 |
| [运行机制推测](tutorial/core.md) | ★★★★★ | 地图工坊内部机制推测 |

另外，Bilibili的UP主也有制作[视频教程](https://www.bilibili.com/video/av53276348)，您可以前往观看。

## 手册

一些功能的查阅。

### 目录

| 名称 | 说明 |
| --- | --- |
| [手册](manual/documents/README.md) | 由昭华整理的官方功能手册，方便快速查阅相关功能 |
| [数组](manual/array.md) | 数组基本使用 |
| [持续事件](manual/continued_event.md) | 持续事件基本使用 |
| [矢量和向量](manual/vector.md) | 矢量向量基本使用和基本运算 |

### 技巧和提示

* 大部分时候，需要使用“位置”，你可以直接使用“事件玩家”而不必使用“位置(事件玩家)”。
* 某些操作连续进行可能会无法达到预期效果。如果你确认规则已运行且编写正确，可以尝试在无效动作前等待很少一段时间。（原因已经在[运行机制推测](tutorial/core.md)中有所推测）
* 有的功能会有“重新赋值”选项，例如HUD文本、效果等。若你在相应内容上使用了变量，并且开启了“重新赋值”，那么当变量变化时，它们就会自动变化，不需要手动重新创建。但是，若你使用的不是变量，则需要手动重新创建。
* “在视野内”表示一个以准心为顶点的圆锥体视野，而“在视线内”则表示不隔墙能看见。
* 有一些功能的翻译并不准确，如“已重生”实际指的是“玩家是否选择英雄”。请先阅读手册。
* 在"持续 - 全局" 事件中用循环连续创建效果可能导致部分效果创建失败，可使用条件 存活玩家数量(所有队伍)>0 来避免这种情况。

## 代码编写辅助工具

因为工坊支持代码转存及粘贴，所以玩家可以使用第三方工具直接编写代码，以此衍生出许多辅助工具，总结如下，需要注意的是，这些工具多为开源版本，作者可能会随时弃坑：

### 代码高亮

| 名称 | 平台 | GitHub | 说明 |
| --- | --- | --- | --- |
| [owlang](https://marketplace.visualstudio.com/items?itemName=vicerust.overwatch) | VSCode | [vicerust/owlang](https://github.com/vicerust/owlang) | VSCode 的代码高亮、补全插件 |
| [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) | VSCode| [CoenraadS/Bracket-Pair-Colorizer-2](https://github.com/CoenraadS/Bracket-Pair-Colorizer-2) | 括号染色匹配插件，标记对应的括号区间 |
| [Overwatch Workshop Syntax Highlight](https://github.com/Mike111177/Overwatch-Workshop-Syntax-Highlight) | Sublime text | [Mike111177/Overwatch-Workshop-Syntax-Highlight](https://github.com/Mike111177/Overwatch-Workshop-Syntax-Highlight) | Sublime text的代码高亮样式 |

### 解释器

| 语言 | GitHub | 说明 |
| --- | --- | --- |
| C# | [ItsDeltin/Overwatch-Script-To-Workshop](https://github.com/ItsDeltin/Overwatch-Script-To-Workshop) | 完成度最高，对其他版本解释器的开发提供了很有价值的参考 |
| C# | [TrueCP6/ostw-method-library](https://github.com/TrueCP6/ostw-method-library) | 上一解释器的函数库 |
| Python | [adapap/OWScript](https://github.com/adapap/OWScript) | 更新比较频繁 |
| Python3 | [fredi-68/OverScript](https://github.com/fredi-68/OverScript) | 已经许久没更新 |
| Typescript | [Beier/Omnium](https://github.com/Beier/Omnium) |  |
| Java | [Groodion/Overwatch-Code](https://github.com/Groodion/Overwatch-Code) | 甚至还有一个界面版转换工具，已经许久没更新 |

### 可视化工具

可视化工具均未有完成品，仅在此记录以待关注

* [hmmhmmhm/dva-engine](https://github.com/hmmhmmhm/dva-engine)
* [fredi-68/OWWvisualScripting](https://github.com/fredi-68/OWWvisualScripting)

### 其他

* [一个不使用射线检测球体碰撞的思路](https://github.com/Corrade/OW-hitscan-spheres-no-raymarching)

## 作品

国服作品请前往[owmod.net](https://www.owmod.net)浏览或提交。

部分外服优秀作品可见[外服作品](foregin.md)。

## 参与

本项目所有人均可参与。参与方式：

* 建议加入QQ群[OW地图工坊交流](https://jq.qq.com/?_wv=1027&k=5J2QSeu)，群号码：464623297。
* 另一个交流群：[守望先锋地图工坊交流群](https://jq.qq.com/?_wv=1027&k=5uVyEyn)，群号码：682132275。
* 文档使用Markdown编写。Markdown是一种非常简单的写作语言，您可以[在此](https://www.jianshu.com/p/191d1e21f7ed)学习。工具使用没有特别限制，您可以使用任何一款Markdown编辑器，如果您不知道如何选择，可以参考[此处](https://www.zhihu.com/question/19637157)
* 协作使用GitHub进行，仓库地址：[GKD-OW/docs](https://github.com/GKD-OW/docs)

更多内容，请参见[贡献指南](contribution.md)

## 使用协议

若您需要使用本站任何内容，您需要遵循以下条件：

* 您不在我们的**黑名单**中。
* 署名 — 您必须给出适当的署名，提供指向本站的链接，同时标明是否（对原始作品）作了修改。您可以用任何合理的方式来署名，但是不得以任何方式暗示许可人为您或您的使用背书。
* 非商业性使用 — 您**不得**将本作品用于商业目的。
* 相同方式共享 — 如果您再混合、转换或者基于本站内容进行创作，您必须基于此协议相同的许可协议分发您的作品。
* 没有附加限制 — 您不得适用法律术语或者技术措施从而限制其他人做许可协议允许的事情。

只要您遵循以上的条件，您就可以：

* 共享 — 在任何媒介以任何形式复制、发行本作品。
* 演绎 — 修改、转换或以本作品为基础进行创作。

如何确定自己的行为是否属于商业目的：

* 以个人身份转载一般不会存在问题（但不绝对）。
* 转载任何内容至公众号、微博、B站、第三方网站/论坛等媒介，维护人员有权**自行认定**是否为商业目的使用。
* 若您无法确定，请联系维护人员确认。联系方式：“OW地图工坊交流”群主或B站私信[泷涯](https://space.bilibili.com/2002598)

另外：

* 原作者对自己作品的任何行为，均不属于上述条件的限制范围。
* 若您不满足上面的需求，但仍然希望使用本站内容，请联系站务组或原作者，取得单独授权。

**若您参与本项目贡献，或使用本项目任何内容，均代表您同意本协议。**

### 黑名单

* owmod.com
