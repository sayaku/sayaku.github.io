---
layout: post
title: "AirKinect 簡易手指偵測"
date: 2013-01-29 20:26:19 +0800
comments: true
categories: [kinect,ActionScript3.0] 
---

<iframe class="youtube" width="640" height="360" src="//www.youtube.com/embed/DSHgjOvAFiA?rel=0" frameborder="0" allowfullscreen></iframe>
<!--more-->
為了完成直覺與精準的Kinect操作方式，想要做到手部的細節辨識

由於Kinect與其他webcam的差別就在於它多了一個深度資訊的攝影機

所以其實關於姿勢辨識或是手指辨識的東西還是得靠自己寫!

完全沒有圖學背景的我就開始從網路上找一些手指辨識的資料

認識到OpenCV強大的影像處理類別庫，且大多數手指辨識似乎都是用這套類別庫完成的

於是我也到網路上找了OpenCV在AS3上的應用~找到有個神人寫了OpenCV的ANE

....不過.....是mac only的...

好吧....使用windows os還是得靠自己...

好好理解關於手指辨識的流程

也試著用as3來實做出來

最後也成功做出一個堪用的版本~

###實作手指偵測的步驟

**1.利用骨架關節定位出右手(或左手)的區域範圍** 

**2.擷取該區域範圍的深度影像來做影像處理，一方面可以減少大範圍的雜訊二方面可以提升辨識效能**

**3.利用右手座標得到該像素的色彩值並搭配bitmapData.threshold可以保留手部輪廓範圍** 

**4.將得到的手部輪廓再做模糊化，用意是去除雜訊** 

**5.將處理完的輪廓取出輪廓線** 

**6.將輪廓線像素作順時針排列** 

**7.使用K曲率(k-curvature)來作手指偵測** 




這樣就能做出一個簡單的手指偵測與簡單的Open/Close

雖然還是有些小問題!不過也堪用了!

靜態圖片偵測效果如下圖:

![手指偵測](http://pcdn1.rimg.tw/photos/3340521_pezfyhu_l.jpg)

原始碼在這: [點我](http://dl.dropbox.com/u/68443214/AirKinectFingerDetectionDemo.rar)

小弟本人程度較差!可能寫了很多冗碼!

所以其實可以優化的地方還很多!請自己做修改!

由上圖可以看到抓指尖同時還會將凹陷處辨認為指尖!

這邊可以用手心與半徑範圍去辨識是指間還是凹陷處!


#How to use?

{% codeblock lang:as3 %}
var kfd:KinectFingerDetection = new KinectFingerDetection();

kfd.onFingerDetection({"深度影像"}, {"要偵測的手掌關節座標"});

//手掌張開時會觸發的事件
kfd.addEventListener(KinectFingerEvent.HAND_OPEN, onkinectOpen);
//手掌握拳時會觸發的事件
kfd.addEventListener(KinectFingerEvent.HAND_CLOSE, onkinectClose);
{% endcodeblock %}

