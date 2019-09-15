(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{242:function(_,v,i){"use strict";i.r(v);var l=i(0),a=Object(l.a)({},(function(){var _=this,v=_.$createElement,i=_._self._c||v;return i("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[i("h1",{attrs:{id:"生化模式"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#生化模式","aria-hidden":"true"}},[_._v("#")]),_._v(" 生化模式")]),_._v(" "),i("p",[_._v("本文将介绍如何从零开始创造一个“生化模式”——相信很多人都玩过CSOL的生化模式。在阅读本文前，建议你先简单阅读"),i("a",{attrs:{href:"https://ow.blizzard.cn/article/news/1307",target:"_blank",rel:"noopener noreferrer"}},[_._v("官方说明"),i("OutboundLink")],1),_._v("，对地图工坊有初步了解，或者进入游戏，简单看看官方的几个示例。")]),_._v(" "),i("h2",{attrs:{id:"选择基本模版"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#选择基本模版","aria-hidden":"true"}},[_._v("#")]),_._v(" 选择基本模版")]),_._v(" "),i("p",[_._v("OW基本模式有：推车、占点、AB点、混合。除此之外，还有个人死斗、团队死斗、夺旗模式、突击模式。我们先想一下，哪个模式最合适？因为我们需要动态的修改敌对关系，所以我们只能选择个人死斗作为基础模式。")]),_._v(" "),i("h2",{attrs:{id:"从基本功能开始"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#从基本功能开始","aria-hidden":"true"}},[_._v("#")]),_._v(" 从基本功能开始")]),_._v(" "),i("p",[_._v("如何走出第一步？我建议从基本功能开始。“生化模式”的基本功能应该是感染。这个过程是什么样的？")]),_._v(" "),i("ul",[i("li",[_._v("僵尸抓了人一下")]),_._v(" "),i("li",[_._v("把人变成僵尸")])]),_._v(" "),i("p",[_._v("所以，我们应该有一个这样的规则：")]),_._v(" "),i("ul",[i("li",[_._v("事件：玩家受到伤害")]),_._v(" "),i("li",[_._v("条件：受伤玩家是人，攻击方是僵尸")]),_._v(" "),i("li",[_._v("动作：受伤玩家变成僵尸")])]),_._v(" "),i("p",[_._v("如何判断玩家是僵尸还是人类？考虑到人类英雄可能不止一个，用英雄来判断不是一个好的选择。我们可以用一个玩家变量(例如B)来标记一个玩家是人类还是僵尸，那么条件就是：")]),_._v(" "),i("ul",[i("li",[_._v("玩家变量(事件玩家, B) == 真")]),_._v(" "),i("li",[_._v("玩家变量(攻击方, B) == 假")])]),_._v(" "),i("p",[_._v("动作：")]),_._v(" "),i("ul",[i("li",[_._v("设置玩家变量(事件玩家, B, 假)")]),_._v(" "),i("li",[_._v("开始强制玩家选择英雄(事件玩家, 英雄(僵尸英雄))")]),_._v(" "),i("li",[_._v("修改玩家分数(攻击方, 1)")])]),_._v(" "),i("h2",{attrs:{id:"完善整体框架"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#完善整体框架","aria-hidden":"true"}},[_._v("#")]),_._v(" 完善整体框架")]),_._v(" "),i("p",[_._v("我们想想这个模式框架还要些什么：")]),_._v(" "),i("ul",[i("li",[_._v("倒计时后随机母体僵尸")]),_._v(" "),i("li",[_._v("获胜判定")])]),_._v(" "),i("h3",{attrs:{id:"倒计时后随机母体僵尸"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#倒计时后随机母体僵尸","aria-hidden":"true"}},[_._v("#")]),_._v(" 倒计时后随机母体僵尸")]),_._v(" "),i("p",[_._v("查询手册，我们知道有一个值是“总计消耗时间”。它似乎和我们的要求一致。但仔细想想：它包括了准备时间和攻防转换时间。这和我们的要求有很大差别。目前没有直接能用的值，我们只能用变量来模拟：")]),_._v(" "),i("ul",[i("li",[_._v("有一个变量，一开始是30")]),_._v(" "),i("li",[_._v("游戏开始后，每秒将它-1")]),_._v(" "),i("li",[_._v("当它是0时，就代表时间到了")])]),_._v(" "),i("p",[_._v("于是，我们写出这样一个规则：")]),_._v(" "),i("p",[_._v("事件")]),_._v(" "),i("ul",[i("li",[_._v("持续 - 全局")])]),_._v(" "),i("p",[_._v("条件")]),_._v(" "),i("ul",[i("li",[_._v("游戏正在进行中 == 真")]),_._v(" "),i("li",[_._v("全局变量(C) >= 0")])]),_._v(" "),i("p",[_._v("动作")]),_._v(" "),i("ul",[i("li",[_._v("根据条件跳过(比较(全局变量(C), >, 0), 3)")]),_._v(" "),i("li",[_._v("设置全局变量(Z, 数组随机值(所有玩家(所有队伍)))")]),_._v(" "),i("li",[_._v("设置玩家变量(全局变量(Z), B, 假)")]),_._v(" "),i("li",[_._v("开始强制玩家选择英雄(全局变量(Z), 英雄(僵尸英雄))")]),_._v(" "),i("li",[_._v("修改全局变量(C, 减, 1)")]),_._v(" "),i("li",[_._v("等待(1, 无视条件)")]),_._v(" "),i("li",[_._v("如条件为“真”则循环")])]),_._v(" "),i("p",[_._v("当然，这只是最核心的部分，你可以加上如倒计时提示等功能，来改善游戏体验。")]),_._v(" "),i("h3",{attrs:{id:"获胜判定"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#获胜判定","aria-hidden":"true"}},[_._v("#")]),_._v(" 获胜判定")]),_._v(" "),i("p",[_._v("有两种获胜情况：")]),_._v(" "),i("ul",[i("li",[_._v("僵尸感染了全部人类，僵尸获胜")]),_._v(" "),i("li",[_._v("人类坚持到了最后一秒，人类获胜")])]),_._v(" "),i("p",[_._v("考虑到游戏中可能有玩家进入、退出，我们最好这样判断：")]),_._v(" "),i("p",[_._v("事件")]),_._v(" "),i("ul",[i("li",[_._v("持续 - 全局")])]),_._v(" "),i("p",[_._v("条件")]),_._v(" "),i("ul",[i("li",[_._v("游戏正在进行中 == 真")]),_._v(" "),i("li",[_._v("全局变量(C) < 0")]),_._v(" "),i("li",[_._v("空数组 == 已过滤的数组(所有玩家(所有队伍), 玩家变量(当前数组元素，B))")])]),_._v(" "),i("p",[_._v("动作")]),_._v(" "),i("ul",[i("li",[_._v("宣告玩家胜利(全局变量(Z))")])]),_._v(" "),i("p",[_._v("事件")]),_._v(" "),i("ul",[i("li",[_._v("持续 - 全局")])]),_._v(" "),i("p",[_._v("条件")]),_._v(" "),i("ul",[i("li",[_._v("游戏正在进行中 == 真")]),_._v(" "),i("li",[_._v("全局变量(C) < 0")]),_._v(" "),i("li",[_._v("比赛时间 <= 0.200")]),_._v(" "),i("li",[_._v("空数组 != 已过滤的数组(所有玩家(所有队伍), 玩家变量(当前数组元素，B))")])]),_._v(" "),i("p",[_._v("动作")]),_._v(" "),i("ul",[i("li",[_._v("设置全局变量(Y，数组中的值(已排序的数组(已过滤的数组(所有玩家(所有队伍), 玩家变量(当前数组元素，B)), 分数(当前数组元素，B))，0))")]),_._v(" "),i("li",[_._v("宣告玩家胜利(全局变量(Y))")])]),_._v(" "),i("h2",{attrs:{id:"完善游戏逻辑"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#完善游戏逻辑","aria-hidden":"true"}},[_._v("#")]),_._v(" 完善游戏逻辑")]),_._v(" "),i("p",[_._v("这个时候我们的“生化模式”已经可以玩了！但是当你作为第一批玩家试玩时，你会发现少了一些东西：")]),_._v(" "),i("ul",[i("li",[_._v("有队友伤害")]),_._v(" "),i("li",[_._v("没有击退效果")]),_._v(" "),i("li",[_._v("僵尸不能自己回复生命值")]),_._v(" "),i("li",[_._v("僵尸死亡没有自动复活")])]),_._v(" "),i("h3",{attrs:{id:"队友伤害"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#队友伤害","aria-hidden":"true"}},[_._v("#")]),_._v(" 队友伤害")]),_._v(" "),i("p",[_._v("我们只要保证同类型的玩家间无法互相伤害：")]),_._v(" "),i("ul",[i("li",[_._v("事件：玩家受到伤害")]),_._v(" "),i("li",[_._v("条件：玩家变量(事件玩家, B) == 玩家变量(攻击方, B)")]),_._v(" "),i("li",[_._v("动作：治疗(事件玩家, 无, 事件伤害)")])]),_._v(" "),i("h3",{attrs:{id:"击退效果"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#击退效果","aria-hidden":"true"}},[_._v("#")]),_._v(" 击退效果")]),_._v(" "),i("p",[_._v("我们想一下CSOL中是什么样的：")]),_._v(" "),i("ul",[i("li",[_._v("僵尸一瞬间的移动速度变得很慢")]),_._v(" "),i("li",[_._v("往人类-僵尸的方向上移动一小段距离")])]),_._v(" "),i("p",[_._v("因此，我们可以写出这样的规则：")]),_._v(" "),i("p",[_._v("事件")]),_._v(" "),i("ul",[i("li",[_._v("玩家受到伤害")]),_._v(" "),i("li",[_._v("双方 全部")])]),_._v(" "),i("p",[_._v("条件")]),_._v(" "),i("ul",[i("li",[_._v("玩家变量(事件玩家, B) == 假")]),_._v(" "),i("li",[_._v("玩家变量(攻击方, B) == 真")])]),_._v(" "),i("p",[_._v("动作")]),_._v(" "),i("ul",[i("li",[_._v("设置移动速度(事件玩家，10)")]),_._v(" "),i("li",[_._v("施加推力(事件玩家，向量(位置(攻击方), 位置(事件玩家)), 3，至地图, 取消相反运动)")]),_._v(" "),i("li",[_._v("等待(0.500, 无视条件)")]),_._v(" "),i("li",[_._v("设置移动速度(事件玩家, 100)")])]),_._v(" "),i("h3",{attrs:{id:"僵尸回复生命值"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#僵尸回复生命值","aria-hidden":"true"}},[_._v("#")]),_._v(" 僵尸回复生命值")]),_._v(" "),i("p",[_._v("CSOL中有一个有意思的设定：僵尸在原地停三秒钟，就可以回复生命值，并且原地跳跃不算移动。我们不能直接知道玩家在几秒内有没有动，也不知道玩家几秒前的坐标。但我们可以换一个思路：我们每秒记一下玩家的位置。如果X、Z坐标与上一秒相同，那么我们就可以给计数器+1。计数器>3时，就可以给玩家回复生命值。")]),_._v(" "),i("p",[_._v("事件")]),_._v(" "),i("ul",[i("li",[_._v("持续 - 每名玩家")]),_._v(" "),i("li",[_._v("双方 全部")])]),_._v(" "),i("p",[_._v("条件")]),_._v(" "),i("ul",[i("li",[_._v("玩家变量(事件玩家, B) == 假")])]),_._v(" "),i("p",[_._v("动作")]),_._v(" "),i("ul",[i("li",[_._v("// 标记玩家的X坐标、Z坐标与上一秒钟的坐标是否相同")]),_._v(" "),i("li",[_._v("设置玩家变量(事件玩家, G, 比较(X方向分量(位置(事件玩家)), ==, 玩家变量(事件家，D)))")]),_._v(" "),i("li",[_._v("设置玩家变量(事件玩家, H, 比较(Z方向分量(位置(事件玩家)), ==, 玩家变量(事件家，E)))")]),_._v(" "),i("li",[_._v("// 如果任意一个坐标不相同，则跳过下一条给计数器+1的语句")]),_._v(" "),i("li",[_._v("根据条件跳过(或(非(玩家变量(事件玩家, G)), 非(玩家变量(事件玩家, H)), 1)")]),_._v(" "),i("li",[_._v("修改玩家变量(事件玩家, F, 加, 1)")]),_._v(" "),i("li",[_._v("// 如果两个坐标都相同，则跳过下面重置计数器与坐标的语句")]),_._v(" "),i("li",[_._v("根据条件跳过(与(玩家变量(事件玩家, G), 玩家变量(事件玩家, H)), 3)")]),_._v(" "),i("li",[_._v("设置玩家变量(事件玩家, F, 0)")]),_._v(" "),i("li",[_._v("设置玩家变量(事件玩家, D, X方向分量(位置(事件玩家)))")]),_._v(" "),i("li",[_._v("设置玩家变量(事件玩家, E, Z方向分量(位置(事件玩家)))")]),_._v(" "),i("li",[_._v("// 如果计数器 < 3 或 玩家达到最大生命值，则跳过回复生命值的语句")]),_._v(" "),i("li",[_._v("根据条件跳过(或(比较(玩家变量(事件玩家, F), <, 3), 比较(最大生命值(事件玩家), ==, 生命值(事件玩家))), 1)")]),_._v(" "),i("li",[_._v("治疗(事件玩家，无，180)")]),_._v(" "),i("li",[_._v("// 等一秒后继续检查")]),_._v(" "),i("li",[_._v("等待(1, 无视条件)")]),_._v(" "),i("li",[_._v("如条件为“真”则循环")])]),_._v(" "),i("h3",{attrs:{id:"僵尸死亡自动复活"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#僵尸死亡自动复活","aria-hidden":"true"}},[_._v("#")]),_._v(" 僵尸死亡自动复活")]),_._v(" "),i("p",[_._v("OW本身就提供了重生的函数，并且同时支持原地重生和随机地点重生，因此我们的规则也非常简单：")]),_._v(" "),i("ul",[i("li",[_._v("事件：玩家阵亡")]),_._v(" "),i("li",[_._v("条件：玩家变量(事件玩家, B) == 假")]),_._v(" "),i("li",[_._v("动作：重生(事件玩家)")])]),_._v(" "),i("h2",{attrs:{id:"初始化规则"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#初始化规则","aria-hidden":"true"}},[_._v("#")]),_._v(" 初始化规则")]),_._v(" "),i("p",[_._v("初始化规则并不是一个一开始就设计好的，或者说单独存在的规则。它服务于我们的其他规则。例如，在上面的那么多规则里面，我们需要初始化一些变量：")]),_._v(" "),i("ul",[i("li",[_._v("全局变量C默认是倒计时秒数")]),_._v(" "),i("li",[_._v("玩家变量B默认是真")]),_._v(" "),i("li",[_._v("玩家变量F默认是0")])]),_._v(" "),i("p",[_._v("以及，我们需要关闭游戏预置的模式内容：")]),_._v(" "),i("ul",[i("li",[_._v("关闭游戏预设完成模式")]),_._v(" "),i("li",[_._v("关闭游戏预设计分模式")]),_._v(" "),i("li",[_._v("关闭游戏预设重生模式")])]),_._v(" "),i("p",[_._v("我们将初始化规则写成两条，一条是全局规则，包括对整个游戏都生效的初始化内容。一条是玩家规则，包括对单个玩家生效的内容。事件分别是“持续 - 全局”和“持续 - 每名玩家”。原因是，“持续 - 全局”中不能使用“事件玩家”，操作每名玩家非常麻烦。而“持续 - 每名玩家”会对每名玩家都运行一遍，如果把初始化全局变量的功能放在这里面，就有可能引起变量的混乱。")]),_._v(" "),i("h2",{attrs:{id:"总结"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),i("p",[_._v("目前为止，我们的“生化模式”已经基本完成了，我们可以在此基础上完善一些细节，例如不同英雄的击退距离不一样等。这些就留给各位自行发挥了。")]),_._v(" "),i("p",[_._v("各位如果想自己设计一个有意思的模式，请记住：不要急于上手。建议各位仿照本文，将自己的模式分割为很多个小功能，然后一步一步完善。")]),_._v(" "),i("p",[_._v("另外给大家一个个人建议：在编写规则的时候，最好开一个记事本，记一下自己的变量都用来干什么了。否则规则一多，变量维护起来会很麻烦。例如本文中，我们用到了这些变量：")]),_._v(" "),i("ul",[i("li",[_._v("玩家变量B：是否是人类")]),_._v(" "),i("li",[_._v("玩家变量D：最后停止移动的X坐标")]),_._v(" "),i("li",[_._v("玩家变量E：最后停止移动的Z坐标")]),_._v(" "),i("li",[_._v("玩家变量F：停止移动计数器")]),_._v(" "),i("li",[_._v("玩家变量G、H：停止移动判断（方便编写规则）")]),_._v(" "),i("li",[_._v("全局变量C：开始倒计时")]),_._v(" "),i("li",[_._v("全局变量Y：胜利人类玩家")]),_._v(" "),i("li",[_._v("全局变量Z：母体僵尸玩家")])])])}),[],!1,null,null,null);v.default=a.exports}}]);