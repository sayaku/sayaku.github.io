---
layout: post
title: "Away3D歐拉旋轉所造成的GimbalLock現象"
date: 2012-06-30 00:08:17 +0800
comments: true
categories: [Away3D,ActionScript3.0]
---

<iframe src="https://dl.dropboxusercontent.com/u/68443214/gimbalLock/GimbalLock.html" width="640" height="500" frameborder="o"></iframe>

<!--more-->

所謂的gimballock我們稱為萬向鎖、萬向節鎖或稱平橫軸死鎖

這是在歐拉旋轉系統可能會碰到的一個惱人問題!!

歐拉旋轉系統是一般3D製圖軟體最基礎的旋轉系統

雖然3D軟體裡執行物件旋轉時看不出歐拉系統的旋轉軸

然而電腦背後還是使用歐拉旋轉系統來做旋轉

所以一般3D繪圖軟體所標的旋轉軸線也只是參考用。



在歐拉旋轉系統中

它把空間中的旋轉獨立成roll,pitch,yaw這三個軸向的旋轉。

![rpy](http://pcdn1.rimg.tw/photos/2593243_608qk49_l.png)

這三個軸向在不同座標系分別代表不同的軸向

如果以笛卡兒座標系來說

roll代表空間中物體X軸向的旋轉

pitch代表空間中物體Y軸向的旋轉

yaw代表空間中物體Z軸向的旋轉


而在Flash away3D裡的座標系

roll代表空間中物體Z軸向的旋轉

pitch代表空間中物體X軸向的旋轉

yaw代表空間中物體Y軸向的旋轉

而歐拉旋轉是有順序與階層性的

例如先轉X軸再轉Y軸與先轉Y軸再轉X軸的結果是不同的

而階層性，可以用旋轉順序來定義

如果旋轉順序是X→Y→Z

則X旋轉時會同時牽動子階層Y、Z軸

Y軸旋轉時會牽動子階層Z軸但不會牽動到父階層X軸

而Z旋轉時只有本身的旋轉並不會影響到它的父階層X、Y軸


所以這時三軸各自旋轉時就有可能會造成GimbalLock現象

例如本篇文章最上面的範例裡

旋轉到第二步驟會發現Z軸跟X軸重疊於同一個平面

所以你不論你去轉Z軸跟X軸就相當是在同一個軸向上旋轉

也代表失去一個軸向的自由度(三軸旋轉變成兩軸旋轉!!)

在旋轉時可能造成旋轉效果不如預期的問題

即使轉換成矩陣旋轉一樣也避免不了GimbalLock的問題

所以這時處理空間中的旋轉，我們可以使用四元數旋轉來避免GimbalLock



