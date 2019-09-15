(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{220:function(e,a,v){"use strict";v.r(a);var t=v(0),_=Object(t.a)({},(function(){var e=this,a=e.$createElement,v=e._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"玩家"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#玩家","aria-hidden":"true"}},[e._v("#")]),e._v(" 玩家")]),e._v(" "),v("h2",{attrs:{id:"传送-teleport"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传送-teleport","aria-hidden":"true"}},[e._v("#")]),e._v(" 传送    TELEPORT")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家传送到指定位置.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将被传送.")]),e._v(" "),v("li",[v("code",[e._v("位置")]),e._v("玩家将被传送到的位置.如果此处填入一名玩家,则使用此玩家所在的位置.")])]),e._v(" "),v("h2",{attrs:{id:"伤害-damage"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#伤害-damage","aria-hidden":"true"}},[e._v("#")]),e._v(" 伤害    DAMAGE")]),e._v(" "),v("p",[v("em",[e._v("立刻为一名或多名玩家造成伤害,可能会杀死玩家.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将受到伤害.")]),e._v(" "),v("li",[v("code",[e._v("伤害者")]),e._v('伤害视为此名玩家造成的.如果"伤害者"设置为"空"则此伤害不会归到任何玩家名下.')]),e._v(" "),v("li",[v("code",[e._v("伤害量")]),e._v("造成的伤害量.此数值可能会受到增益、减益状态或护甲的影响.")])]),e._v(" "),v("h2",{attrs:{id:"重生-适当位置-respawn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重生-适当位置-respawn","aria-hidden":"true"}},[e._v("#")]),e._v(" 重生(适当位置)    RESPAWN")]),e._v(" "),v("p",[v("em",[e._v("使一名或多名玩家在适当的重生位置重生并恢复至最大生命值,对仍然存活的玩家依然有效.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将重生.")])]),e._v(" "),v("h2",{attrs:{id:"重生-原地重生-resurrect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重生-原地重生-resurrect","aria-hidden":"true"}},[e._v("#")]),e._v(" 重生(原地重生)    RESURRECT")]),e._v(" "),v("p",[v("em",[e._v("立即使一名到多名玩家在其死亡的位置复活,无需等待时间.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将被复活.")])]),e._v(" "),v("h2",{attrs:{id:"击杀-kill"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#击杀-kill","aria-hidden":"true"}},[e._v("#")]),e._v(" 击杀    KILL")]),e._v(" "),v("p",[v("em",[e._v("立即杀死一名或多名玩家.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将被杀死.")]),e._v(" "),v("li",[v("code",[e._v("击杀者")]),e._v('击杀视为此名玩家造成的.如果"击杀者"设置为"空"则此击杀不会归到任何玩家名下.')])]),e._v(" "),v("h2",{attrs:{id:"修改玩家分数-modify-player-score"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#修改玩家分数-modify-player-score","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改玩家分数   MODIFY PLAYER SCORE")]),e._v(" "),v("p",[v("em",[e._v("修改一名或多名玩家的分数(击杀数).此动作只会在自由混战模式中生效.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的分数被改变.")]),e._v(" "),v("li",[v("code",[e._v("得分")]),e._v("增加或减少的分数.如果为正数则增加分数,为负数则减少分数.")])]),e._v(" "),v("h2",{attrs:{id:"停止伤害调整-stop-all-damage-modifications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止伤害调整-stop-all-damage-modifications","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止伤害调整    STOP ALL DAMAGE MODIFICATIONS")]),e._v(" "),v("p",[v("em",[e._v('停止由"开始伤害调整"动作开始的一个伤害调整.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("伤害调整ID")]),e._v('指定要结束的伤害调整副本.此ID可以是"上一个伤害调整ID",或一个之前储存"上一个伤害调整ID"的变量.')])]),e._v(" "),v("h2",{attrs:{id:"停止加速-stop-accelerating"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止加速-stop-accelerating","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止加速    STOP ACCELERATING")]),e._v(" "),v("p",[v("em",[e._v('停止"开始加速"动作造成的加速效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将停止加速.")])]),e._v(" "),v("h2",{attrs:{id:"停止强制玩家选择英雄-stop-forcing-player-to-be-hero"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止强制玩家选择英雄-stop-forcing-player-to-be-hero","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止强制玩家选择英雄    STOP FORCING PLAYER TO BE HERO")]),e._v(" "),v("p",[v("em",[e._v("停止强制一名或多名玩家使用指定的英雄.此行动不会使玩家重生只会在其下次选择英雄时恢复可用的其他英雄")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将不再被强制使用指定英雄.")])]),e._v(" "),v("h2",{attrs:{id:"停止所有伤害调整-stop-all-damage-modifications"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止所有伤害调整-stop-all-damage-modifications","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止所有伤害调整    STOP ALL DAMAGE MODIFICATIONS")]),e._v(" "),v("p",[v("em",[e._v('停止所有由"开始伤害调整"动作开始的伤害调整.')])]),e._v(" "),v("h2",{attrs:{id:"停止所有持续伤害-stop-all-damage-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止所有持续伤害-stop-all-damage-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止所有持续伤害    STOP ALL DAMAGE OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('停止一个或多个玩家身上所有由"开始持续伤害"给予的持续伤害.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("停止下列玩家身上程序给予的持续伤害.")])]),e._v(" "),v("h2",{attrs:{id:"停止所有持续治疗-stop-all-heal-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止所有持续治疗-stop-all-heal-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止所有持续治疗    STOP ALL HEAL OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('停止一个或多个玩家身上所有由"开始持续治疗"给予的持续治疗.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("停止下列玩家身上程序给予的持续治疗.")])]),e._v(" "),v("h2",{attrs:{id:"停止持续伤害-stop-damage-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止持续伤害-stop-damage-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止持续伤害    STOP DAMAGE OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('停止一个由"开始持续伤害"动作创建的持续伤害副本.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("持续伤害ID")]),e._v('指定要结束的持续伤害副本.此ID可以是"上一个持续伤害ID",或一个之前储存"上一个持续伤害ID"的变量.')])]),e._v(" "),v("h2",{attrs:{id:"停止持续治疗-stop-heal-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止持续治疗-stop-heal-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止持续治疗    STOP HEAL OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('停止一个由"开始持续治疗"动作创建的持续治疗副本.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("持续治疗ID")]),e._v('指定要结束的持续治疗副本.此ID可以是"上一个持续治疗ID",或一个之前储存"上一个持续治疗ID"的变量.')])]),e._v(" "),v("h2",{attrs:{id:"停止按下按钮-stop-holding-button"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止按下按钮-stop-holding-button","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止按下按钮    STOP HOLDING BUTTON")]),e._v(" "),v("p",[v("em",[e._v('取消"开始按下按钮"动作的效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家不再持续按下虚拟按钮.")]),e._v(" "),v("li",[v("code",[e._v("按钮")]),e._v("不再持续按下的虚拟按钮.")])]),e._v(" "),v("h2",{attrs:{id:"停止朝向-stop-facing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止朝向-stop-facing","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止朝向    STOP FACING")]),e._v(" "),v("p",[v("em",[e._v('停止"开始转向"动作造成的转向效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将停止转向.")])]),e._v(" "),v("h2",{attrs:{id:"停止镜头-stop-camera"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止镜头-stop-camera","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止镜头    STOP CAMERA")]),e._v(" "),v("p",[v("em",[e._v("无描述")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("将下列玩家的镜头恢复至默认视角.")])]),e._v(" "),v("h2",{attrs:{id:"停止限制阈值-stop-forcing-throttle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止限制阈值-stop-forcing-throttle","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止限制阈值    STOP FORCING THROTTLE")]),e._v(" "),v("p",[v("em",[e._v('取消"开始限制阈值"动作的效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的移动恢复正常.")])]),e._v(" "),v("h2",{attrs:{id:"对所有玩家启用死亡回放-enable-death-spectate-all-players"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对所有玩家启用死亡回放-enable-death-spectate-all-players","aria-hidden":"true"}},[e._v("#")]),e._v(" 对所有玩家启用死亡回放    ENABLE DEATH SPECTATE ALL PLAYERS")]),e._v(" "),v("p",[v("em",[e._v("使一名或多名玩家死亡后可以观看所有玩家的比赛,而不止是自己的队友.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将可以观看所有玩家.")])]),e._v(" "),v("h2",{attrs:{id:"对所有玩家禁用死亡回放-disable-death-spectate-all-players"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对所有玩家禁用死亡回放-disable-death-spectate-all-players","aria-hidden":"true"}},[e._v("#")]),e._v(" 对所有玩家禁用死亡回放    DISABLE DEATH SPECTATE ALL PLAYERS")]),e._v(" "),v("p",[v("em",[e._v('取消"对所有玩家启用死亡回放"动作的效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家死亡后观战的行为将恢复正常.")])]),e._v(" "),v("h2",{attrs:{id:"开始伤害调整-start-damage-modification"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始伤害调整-start-damage-modification","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始伤害调整    START DAMAGE MODIFICATION")]),e._v(" "),v("p",[v("em",[e._v('开始调整一名或多名受伤害者从一个或多个伤害者受到的伤害.如果想指定此伤害调整,可以使用"上一个伤害调整ID"的值.如果已经开始了太多的伤害调整,此动作可能会失败.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("受伤害者")]),e._v('修正下列玩家受到的伤害(被"伤害者"攻击时).')]),e._v(" "),v("li",[v("code",[e._v("伤害者")]),e._v('修正下列玩家造成的伤害(攻击"受伤害者"时).')]),e._v(" "),v("li",[v("code",[e._v("伤害百分比")]),e._v("伤害者对受伤害者造成伤害将调整至此百分比.")]),e._v(" "),v("li",[v("code",[e._v("重新赋值")]),e._v("指定此动作的某个输入值被持续重新赋值.此动作会要求输入新的数值,并用输入的数值进行重新赋值.")])]),e._v(" "),v("h2",{attrs:{id:"开始加速-start-accelerating"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始加速-start-accelerating","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始加速    START ACCELERATING")]),e._v(" "),v("p",[v("em",[e._v("开始令一名或多名玩家向指定方向加速.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将开始加速.")]),e._v(" "),v("li",[v("code",[e._v("方向")]),e._v("施加加速度的单位方向.此值将进行内部归一化.")]),e._v(" "),v("li",[v("code",[e._v("速率")]),e._v("加速度,单位为米/秒.需要较大的加速度才能够克服引力和/或表面摩擦力.")]),e._v(" "),v("li",[v("code",[e._v("最大速度")]),e._v("玩家达到此速度后会停止(加速)*.由于引力和/或表面摩擦力的存在,可能将无法达到此速度.")]),e._v(" "),v("li",[v("code",[e._v("相对")]),e._v("确定此方向是相对于地图坐标还是玩家的本地坐标.")]),e._v(" "),v("li",[v("code",[e._v("重新赋值")]),e._v("指定此动作的某个输入值被持续重新赋值.此动作会要求输入新的数值,并用输入的数值进行重新赋值.")])]),e._v(" "),v("h2",{attrs:{id:"开始强制玩家选择英雄-start-forcing-player-to-be-hero"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始强制玩家选择英雄-start-forcing-player-to-be-hero","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始强制玩家选择英雄    START FORCING PLAYER TO BE HERO")]),e._v(" "),v("p",[v("em",[e._v('开始强制一名或多名玩家使用指定的英雄,如有必要,使这些玩家立即在当前位置重生.这名或这些玩家只能使用指定的英雄,直到执行"停止强制玩家选择英雄"动作为止.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家被强制使用指定英雄.")]),e._v(" "),v("li",[v("code",[e._v("英雄")]),e._v("玩家将被强制使用的英雄.")])]),e._v(" "),v("h2",{attrs:{id:"开始持续伤害-start-damage-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始持续伤害-start-damage-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始持续伤害    START DAMAGE OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('开始一个持续伤害副本.此持续伤害会持续一段指定长度的时间,直到被程序中止.如果想指定此持续伤害,可以使用"上一个持续伤害ID"的返还值.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("在下列玩家身上施加持续伤害效果.")]),e._v(" "),v("li",[v("code",[e._v("伤害者")]),e._v(' 伤害视为此名玩家造成的.如果"伤害者"设置为"空"则此伤害不会归到任何玩家名下.')]),e._v(" "),v("li",[v("code",[e._v("持续时间")]),e._v("持续伤害的持续时间,以秒为单位.如果要让状态持续到被程序终止为止,可以提供一个*较长的持续时间,如9999.")]),e._v(" "),v("li",[v("code",[e._v("每秒伤害")]),e._v("持续伤害每秒造成的伤害值.")])]),e._v(" "),v("h2",{attrs:{id:"开始持续治疗-start-heal-over-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始持续治疗-start-heal-over-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始持续治疗    START HEAL OVER TIME")]),e._v(" "),v("p",[v("em",[e._v('开始一个持续治疗副本.此持续治疗会持续一段指定长度的时间,直到被程序中止.如果想指定此持续治疗,可以使用"上一个持续治疗ID"的返还值.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家会受到持续治疗.")]),e._v(" "),v("li",[v("code",[e._v("治疗者")]),e._v('治疗视为此名玩家造成的.如果"治疗者"设置为"空"则此治疗不会归到任何玩家名下.')]),e._v(" "),v("li",[v("code",[e._v("持续时间")]),e._v("持续治疗的持续时间,以秒为单位.如果要让状态持续到被程序终止为止,可以提供一个*较长的持续时间,如9999.")]),e._v(" "),v("li",[v("code",[e._v("每秒治疗")]),e._v("此持续治疗每秒造成的治疗.")])]),e._v(" "),v("h2",{attrs:{id:"开始按下按钮-start-holding-button"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始按下按钮-start-holding-button","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始按下按钮    START HOLDING BUTTON")]),e._v(" "),v("p",[v("em",[e._v('强制一名或多名玩家按下一个虚拟按钮,直到被"停止按下按钮"动作取消.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家持续按下虚拟按钮.")]),e._v(" "),v("li",[v("code",[e._v("按钮")]),e._v("设置按下的虚拟按钮.")])]),e._v(" "),v("h2",{attrs:{id:"开始朝向-start-facing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始朝向-start-facing","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始朝向    START FACING")]),e._v(" "),v("p",[v("em",[e._v("开始强制一名或多名玩家转向面对指定的方向.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将开始转向.")]),e._v(" "),v("li",[v("code",[e._v("方向")]),e._v("玩家最终将面朝的单位方向.此值将进行内部归一化.")]),e._v(" "),v("li",[v("code",[e._v("角速率")]),e._v("角速率,单位为度/秒.")]),e._v(" "),v("li",[v("code",[e._v("相对")]),e._v("确定此方向是相对于地图坐标还是玩家的本地坐标.")]),e._v(" "),v("li",[v("code",[e._v("重新赋值")]),e._v("指定此动作的某个输入值被持续重新赋值.此动作会要求输入新的数值,并用输入的数值进行重新赋值.")])]),e._v(" "),v("h2",{attrs:{id:"开始镜头-start-camera"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始镜头-start-camera","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始镜头    START CAMERA")]),e._v(" "),v("p",[v("em",[e._v("将你的镜头放置在一个位置,面向一个角度.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("将下列玩家的镜头放置于此.")]),e._v(" "),v("li",[v("code",[e._v("眼睛位置")]),e._v("镜头的位置.持续重新赋值.")]),e._v(" "),v("li",[v("code",[e._v("望向位置")]),e._v("镜头望向的位置.持续重新赋值.")]),e._v(" "),v("li",[v("code",[e._v("转动速度")]),v("s",[e._v("位置移动时镜头转动速度的快慢.0意味着不转动镜头方向,只改变其位置")]),e._v('.(当镜头的"眼睛位置"移动时镜头转向 "望向位置"速度的快慢.0意味着镜头完全没有转向过程,并且直接立即移动其"眼睛位置".)*')])]),e._v(" "),v("h2",{attrs:{id:"开始限制阈值-start-forcing-throttle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始限制阈值-start-forcing-throttle","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始限制阈值    START FORCING THROTTLE")]),e._v(" "),v("p",[v("em",[e._v("定义玩家移动输入的最大值和最小值,可能会强迫或阻止玩家移动.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将被强制或限制移动.")]),e._v(" "),v("li",[v("code",[e._v("向前最小")]),e._v("设置向前行进的最小速度.设为0时玩家可以停下,设为1时将强迫玩家全速向前移动")]),e._v(" "),v("li",[v("code",[e._v("向前最大")]),e._v("设置向前行进的最大速度.设为0时玩家将无法前进,设为1时玩家可以全速向前移动")]),e._v(" "),v("li",[v("code",[e._v("向后最小")]),e._v("设置向后行进的最小速度.设为0时玩家可以停下,设为1时将强迫玩家全速向后移动.")]),e._v(" "),v("li",[v("code",[e._v("向后最大")]),e._v("设置向后行进的最大速度.设为0时玩家将无法后退,设为1时玩家可以全速向后移动")]),e._v(" "),v("li",[v("code",[e._v("侧向最小")]),e._v("设置侧向*行进的最小速度.设为0时玩家可以停下,设为1时将强迫玩家全速向侧向移动.")]),e._v(" "),v("li",[v("code",[e._v("侧向最大")]),e._v("设置侧向*行进的最大速度.设为0时玩家无法侧移,设为1时玩家可以全速向侧向移动.")])]),e._v(" "),v("h2",{attrs:{id:"开始转换阈值-start-transforming-throttle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#开始转换阈值-start-transforming-throttle","aria-hidden":"true"}},[e._v("#")]),e._v(" 开始转换阈值    START TRANSFORMING THROTTLE")]),e._v(" "),v("p",[v("em",[e._v("开始转换（放大并旋转）一名或多名玩家的阈值（方向输入控制）。取消所有已存在的“开始转换阈值”动作。")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("转换下列玩家阈值。")]),e._v(" "),v("li",[v("code",[e._v("X轴缩放")]),e._v("下列玩家的X轴（左右方向）将会乘以此数值，然后转换到新的相对方向。这个值会不断重新赋值（每一帧都会更新）。")]),e._v(" "),v("li",[v("code",[e._v("Y轴缩放")]),e._v("下列玩家的Y轴（前后方向）将会乘以此数值，然后转换到新的相对方向。这个值会不断重新赋值（每一帧都会更新）。")]),e._v(" "),v("li",[v("code",[e._v("相对方向")]),e._v("应用轴向缩放时,玩家的阈值将会被转换为相对此单位方向的矢量。例如，如果阈值转换至对摄像机视角，则以摄像机的朝向为基准计算方向，这个值会不断被重新赋值（每一帧都会更新）。")])]),e._v(" "),v("h2",{attrs:{id:"停止转换阈值-stop-transforming-throttle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停止转换阈值-stop-transforming-throttle","aria-hidden":"true"}},[e._v("#")]),e._v(" 停止转换阈值    STOP TRANSFORMING THROTTLE")]),e._v(" "),v("p",[v("em",[e._v("停止由“开始转换阈值”所开始的转换效果。")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("停止转换下列玩家的阈值。")])]),e._v(" "),v("h2",{attrs:{id:"按下按键-press-button"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#按下按键-press-button","aria-hidden":"true"}},[e._v("#")]),e._v(" 按下按键    PRESS BUTTON")]),e._v(" "),v("p",[v("em",[e._v("强制一名或多名玩家按下虚拟按键,持续一帧.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将强制按下按腱.")]),e._v(" "),v("li",[v("code",[e._v("按钮")]),e._v("要按下的按键.")])]),e._v(" "),v("h2",{attrs:{id:"施加推力-apply-impulse"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#施加推力-apply-impulse","aria-hidden":"true"}},[e._v("#")]),e._v(" 施加推力    APPLY IMPULSE")]),e._v(" "),v("p",[v("em",[e._v("立即使一名或多名玩家的移动速度发生改变.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的速度被改变.")]),e._v(" "),v("li",[v("code",[e._v("方向")]),e._v("施加推力的单位方向.此值进行内部归一化.")]),e._v(" "),v("li",[v("code",[e._v("速度")]),e._v("玩家速度改变的数值.")]),e._v(" "),v("li",[v("code",[e._v("相对")]),e._v("确定此方向是相对于地图坐标还是玩家的本地坐标.")]),e._v(" "),v("li",[v("code",[e._v("运动")]),e._v("确定在施加推力前是否首先消除已有的与此方向相反的速度.")])]),e._v(" "),v("h2",{attrs:{id:"启用死亡回放时目标的hud-enable-death-spectate-target-hud"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#启用死亡回放时目标的hud-enable-death-spectate-target-hud","aria-hidden":"true"}},[e._v("#")]),e._v(" 启用死亡回放时目标的HUD   ENABLE DEATH SPECTATE TARGET HUD")]),e._v(" "),v("p",[v("em",[e._v("使一名或多名玩家在死亡后观战时看到目标的HUD信息,而不是他们自己的.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家在死亡后观战时看到观战目标的HUD信息.")])]),e._v(" "),v("h2",{attrs:{id:"禁用死亡回放时目标的hud-disable-death-spectate-target-hud"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#禁用死亡回放时目标的hud-disable-death-spectate-target-hud","aria-hidden":"true"}},[e._v("#")]),e._v(" 禁用死亡回放时目标的HUD    DISABLE DEATH SPECTATE TARGET HUD")]),e._v(" "),v("p",[v("em",[e._v('取消"死亡回放时启用目标的HUD"动作的效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家在死亡后观战时看到他们自己的HUD信息.")])]),e._v(" "),v("h2",{attrs:{id:"交流-communicate"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交流-communicate","aria-hidden":"true"}},[e._v("#")]),e._v(" 交流    COMMUNICATE")]),e._v(" "),v("p",[v("em",[e._v("使一名或多名玩家使用一个表情、语音或其他已装备的方式进行交流.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将自动开始交流.")]),e._v(" "),v("li",[v("code",[e._v("类型")]),e._v("交流的类型.")])]),e._v(" "),v("h2",{attrs:{id:"治疗-heal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#治疗-heal","aria-hidden":"true"}},[e._v("#")]),e._v(" 治疗    HEAL")]),e._v(" "),v("p",[v("em",[e._v("立刻为一名或多名玩家恢复生命值.此治疗效果不会复活已死亡的玩家.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将恢复生命值.")]),e._v(" "),v("li",[v("code",[e._v("治疗者")]),e._v('治疗视为此名玩家造成的.如果"治疗者"设置为"空"则此治疗不会归到任何玩家名下.')]),e._v(" "),v("li",[v("code",[e._v("治疗量")]),e._v("造成的治疗量.此数值可能会受到增益或减益状态的影响.治疗量不会超过每名玩家的最大生命值.")])]),e._v(" "),v("h2",{attrs:{id:"清除状态-clear-status"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#清除状态-clear-status","aria-hidden":"true"}},[e._v("#")]),e._v(" 清除状态    CLEAR STATUS")]),e._v(" "),v("p",[v("em",[e._v('清除一个或多个玩家身上由"设置状态"动作施加的一个状态.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的状态将被清除.")]),e._v(" "),v("li",[v("code",[e._v("状态")]),e._v("从指定玩家身上清除的状态.")])]),e._v(" "),v("h2",{attrs:{id:"禁用按钮-disallow-button"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#禁用按钮-disallow-button","aria-hidden":"true"}},[e._v("#")]),e._v(" 禁用按钮    DISALLOW BUTTON")]),e._v(" "),v("p",[v("em",[e._v("禁用一名或多名玩家的逻辑按键,按下此按键后不会产生效果.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的按钮将被禁用.")]),e._v(" "),v("li",[v("code",[e._v("按钮")]),e._v("禁用的逻辑按钮.")])]),e._v(" "),v("h2",{attrs:{id:"可用按钮-allow-button"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可用按钮-allow-button","aria-hidden":"true"}},[e._v("#")]),e._v(" 可用按钮    ALLOW BUTTON")]),e._v(" "),v("p",[v("em",[e._v('取消"禁用按钮"动作的效果.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的按钮重新启用.")]),e._v(" "),v("li",[v("code",[e._v("按钮")]),e._v("将要重新启用的逻辑按键.")])]),e._v(" "),v("h2",{attrs:{id:"设置不可见-set-invisible"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置不可见-set-invisible","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置不可见    SET INVISIBLE")]),e._v(" "),v("p",[v("em",[e._v("使一名或多名玩家变为隐形,此效果可对所有玩家生效,也可以只对敌人生效.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将变得隐形.")]),e._v(" "),v("li",[v("code",[e._v("不可见对象")]),e._v("将要对下列玩家隐形.")])]),e._v(" "),v("h2",{attrs:{id:"设置主要攻击模式启用-set-primary-fire-enabled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置主要攻击模式启用-set-primary-fire-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置主要攻击模式启用    SET PRIMARY FIRE ENABLED")]),e._v(" "),v("p",[v("em",[e._v("启用或禁用一名或多名玩家的主要攻击模式.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的主要攻击模式受到影响.")]),e._v(" "),v("li",[v("code",[e._v("启用")]),e._v('指定一名或多名玩家是否能够使用主要攻击模式.此处应为一个布尔值,如"真"/"假"或"比较式".')])]),e._v(" "),v("h2",{attrs:{id:"设置受到伤害-set-damage-received"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置受到伤害-set-damage-received","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置受到伤害    SET DAMAGE RECEIVED")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家受到的伤害设置为其原始受到伤害的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家受到的伤害.")]),e._v(" "),v("li",[v("code",[e._v("受到伤害百分比")]),e._v("将玩家所受到的伤害设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置受到治疗-set-healing-received"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置受到治疗-set-healing-received","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置受到治疗    SET HEALING RECEIVED")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家受到的治疗效果设置为其原始受到治疗的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家受到的治疗.")]),e._v(" "),v("li",[v("code",[e._v("受到治疗百分比")]),e._v("将玩家所受到的治疗设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置启用技能-1-set-ability-1-enabled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置启用技能-1-set-ability-1-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置启用技能 1    SET ABILITY 1 ENABLED")]),e._v(" "),v("p",[v("em",[e._v("启用或禁用一名或多名玩家的技能1.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的技能1受到影响.")]),e._v(" "),v("li",[v("code",[e._v("启用")]),e._v('玩家是否可以使用技能1.此处应为一个布尔值,如"真"、"假"或"比较式".')])]),e._v(" "),v("h2",{attrs:{id:"设置启用技能-2-set-ability-2-enabled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置启用技能-2-set-ability-2-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置启用技能 2    SET ABILITY 2 ENABLED")]),e._v(" "),v("p",[v("em",[e._v("启用或禁用一名或多名玩家的技能2.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的技能2将受到影响.")]),e._v(" "),v("li",[v("code",[e._v("启用")]),e._v('玩家是否可以使用技能2.此处应为一个布尔值,如"真"、"假"或"比较式".')])]),e._v(" "),v("h2",{attrs:{id:"设置启用终极技能-set-ultimate-ability-enabled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置启用终极技能-set-ultimate-ability-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置启用终极技能    SET ULTIMATE ABILITY ENABLED")]),e._v(" "),v("p",[v("em",[e._v("启用或禁用一名或多名玩家的终极技能.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的终极技能受到影响.")]),e._v(" "),v("li",[v("code",[e._v("启用")]),e._v('玩家是否可以使用终极技能.此处应为一个布尔值,如"真"、"假"或"比较式".')])]),e._v(" "),v("h2",{attrs:{id:"设置引力-set-gravity"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置引力-set-gravity","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置引力    SET GRAVITY")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的行动引力设置为正常行动引力的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的行动引力.")]),e._v(" "),v("li",[v("code",[e._v("引力百分比")]),e._v("将玩家个人的行动引力设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置弹道引力-set-projectile-gravity"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置弹道引力-set-projectile-gravity","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置弹道引力    SET PROJECTILE GRAVITY")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的弹道引力设置为正常弹道引力的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的弹道引力.")]),e._v(" "),v("li",[v("code",[e._v("弹道引力百分比")]),e._v("将玩家个人的弹道引力设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置弹道速度-set-projectile-speed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置弹道速度-set-projectile-speed","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置弹道速度    SET PROJECTILE SPEED")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的弹道速度设置为正常弹道速度的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的弹道速度.")]),e._v(" "),v("li",[v("code",[e._v("弹道速度百分比")]),e._v("将玩家个人的弹道速度设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置最大生命值-set-max-health"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置最大生命值-set-max-health","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置最大生命值    SET MAX HEALTH")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的最大生命值设置为其原始最大生命值的一定百分比.此动作会保证玩家当前的生命值不会超过其新的最大生命值.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的最大生命值将被设定.")]),e._v(" "),v("li",[v("code",[e._v("生命百分比")]),e._v("将这些玩家的最大生命值设为其原始最大生命值的百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置最大重生时间-set-respawn-max-time"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置最大重生时间-set-respawn-max-time","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置最大重生时间    SET RESPAWN MAX TIME")]),e._v(" "),v("p",[v("em",[e._v("设置一名或多名玩家死亡与重生之间的持续时间.对此动作执行时已经死亡的玩家,此效果将在他们下次死亡时生效.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的最大重生时间.")]),e._v(" "),v("li",[v("code",[e._v("时间")]),e._v("死亡与重生之间的持续时间,以秒为单位.")])]),e._v(" "),v("h2",{attrs:{id:"设置朝向-set-facing"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置朝向-set-facing","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置朝向    SET FACING")]),e._v(" "),v("p",[v("em",[e._v("设置一名或多名玩家面向的方向.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家面朝的方向.")]),e._v(" "),v("li",[v("code",[e._v("方向")]),e._v("玩家面朝的单位方向.此值进行内部归一化.")]),e._v(" "),v("li",[v("code",[e._v("相对")]),e._v("确定此方向是相对于地图坐标还是玩家的本地坐标.")])]),e._v(" "),v("h2",{attrs:{id:"设置状态-set-status"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置状态-set-status","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置状态    SET STATUS")]),e._v(" "),v("p",[v("em",[e._v('对一名或多名玩家施加一个状态.此状态会持续指定的"持续时间或直到被"清除状态"动作清除.')])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家将被施加此状态.")]),e._v(" "),v("li",[v("code",[e._v("助攻者")]),e._v('如果在效果持续期间受到影响的玩家被击杀,则视为此名玩家完成的助攻.如"助攻者"设置为"空"则此助攻不会归到任何玩家名下.')]),e._v(" "),v("li",[v("code",[e._v("状态")]),e._v("对指定玩家施加此状态.此状态与玩家使用英雄技能时施放的状态效果相同.")]),e._v(" "),v("li",[v("code",[e._v("持续时间")]),e._v('状态持续时间,以秒为单位.如果要让状态持续直到执行"清除状态"动作为止可以输入较长的持续时间,如9999.')])]),e._v(" "),v("h2",{attrs:{id:"设置玩家分数-set-player-score"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置玩家分数-set-player-score","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置玩家分数    SET PLAYER SCORE")]),e._v(" "),v("p",[v("em",[e._v("设置一名或多名玩家的分数(击杀数).此动作只在自由混战模式中生效.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的分数.")]),e._v(" "),v("li",[v("code",[e._v("分数")]),e._v("要设置的分数.")])]),e._v(" "),v("h2",{attrs:{id:"设置玩家可选的英雄-set-player-allowed-heroes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置玩家可选的英雄-set-player-allowed-heroes","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置玩家可选的英雄    SET PLAYER ALLOWED HEROES")]),e._v(" "),v("p",[v("em",[e._v("设置一名或多名玩家可用的英雄列表.如果玩家当前所使用的英雄变得不可用,则此玩家将被强制选择另一名英雄,并在适当的重生位置重生.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的英雄列表.")]),e._v(" "),v("li",[v("code",[e._v("英雄")]),e._v("可供选择的英雄.如果没有提供英雄,此动作无效.")])]),e._v(" "),v("h2",{attrs:{id:"设置瞄准速度-set-aim-speed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置瞄准速度-set-aim-speed","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置瞄准速度    SET AIM SPEED")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的瞄准速度设置为其原始瞄准速度的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的瞄准速度.")]),e._v(" "),v("li",[v("code",[e._v("转向速度百分比")]),e._v("将玩家的瞄准速度设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置移动速度-set-move-speed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置移动速度-set-move-speed","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置移动速度    SET MOVE SPEED")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的移动速度设置为其原始移动速度的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的移动速度.")]),e._v(" "),v("li",[v("code",[e._v("移动速度百分比")]),e._v("将玩家的移动速度设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置终极技能充能-set-ultimate-charge"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置终极技能充能-set-ultimate-charge","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置终极技能充能    SET ULTIMATE CHARGE")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家的终极技能充能设为最大充能的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家的终极技能充能.")]),e._v(" "),v("li",[v("code",[e._v("充能百分比")]),v("s",[e._v("最大的充能百分比")]),e._v(' 充能的最大百分比,可以使用大多数基于数值的"值"语法. *')])]),e._v(" "),v("h2",{attrs:{id:"设置辅助攻击模式启用-set-secondary-fire-enabled"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置辅助攻击模式启用-set-secondary-fire-enabled","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置辅助攻击模式启用    SET SECONDARY FIRE ENABLED")]),e._v(" "),v("p",[v("em",[e._v("启用或禁用一名或多名玩家的辅助攻击模式.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的辅助攻击模式受到影响.")]),e._v(" "),v("li",[v("code",[e._v("启用")]),e._v('指定一名或多名玩家是否能够使用辅助攻击模式.此处应为一个布尔值,如"真"、"假"或"比较式".')])]),e._v(" "),v("h2",{attrs:{id:"设置造成伤害-set-damage-dealt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置造成伤害-set-damage-dealt","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置造成伤害    SET DAMAGE DEALT")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家造成的伤害设置为其原始造成伤害的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家造成的伤害.")]),e._v(" "),v("li",[v("code",[e._v("造成伤害百分比")]),e._v("将玩家所造成的伤害设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"设置造成治疗-set-healing-dealt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#设置造成治疗-set-healing-dealt","aria-hidden":"true"}},[e._v("#")]),e._v(" 设置造成治疗    SET HEALING DEALT")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家造成的治疗效果设置为其原始造成治疗的一定百分比.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("设置下列玩家造成的治疗.")]),e._v(" "),v("li",[v("code",[e._v("造成治疗百分比")]),e._v("将玩家所造成的治疗设置为此百分比.")])]),e._v(" "),v("h2",{attrs:{id:"重置玩家英雄可选状态-reset-player-hero-availability"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重置玩家英雄可选状态-reset-player-hero-availability","aria-hidden":"true"}},[e._v("#")]),e._v(" 重置玩家英雄可选状态    RESET PLAYER HERO AVAILABILITY")]),e._v(" "),v("p",[v("em",[e._v("将一名或多名玩家可用的英雄列表恢复至游戏设置所指定的英雄列表.如果玩家当前所使用的英雄变得不可用,则此玩家将被强制选择另一名英雄,并在适当的重生位置重生.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v("下列玩家的英雄列表将被重置.")])]),e._v(" "),v("h2",{attrs:{id:"预加载英雄-preload-hero"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#预加载英雄-preload-hero","aria-hidden":"true"}},[e._v("#")]),e._v(" 预加载英雄    PRELOAD HERO")]),e._v(" "),v("p",[v("em",[e._v("预先为指定的玩家将指定的英雄及皮肤加载入内存.当需要经常改变英雄且已知接下来要使用哪个英雄时适用.")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("玩家")]),e._v('下列玩家将开始预载一名或多名英雄.对每名玩家,同一时间只能有一个"预载英雄"动作生效.')]),e._v(" "),v("li",[v("code",[e._v("英雄")]),e._v("为指定的玩家加载下列英雄.当选择了包含多个英雄的数组时,靠前的英雄将被优先加载.")])])])}),[],!1,null,null,null);a.default=_.exports}}]);