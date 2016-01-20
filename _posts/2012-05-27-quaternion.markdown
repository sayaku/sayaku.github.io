---
layout: post
title: "Away3d Quaternion 使用四元數來處理空間中的旋轉"
date: 2012-05-27 20:55:21 +0800
comments: true
categories: [Away3D,ActionScript3.0]
---

<iframe src="https://dl.dropboxusercontent.com/u/68443214/QuaternionRotation/bin/index.html" width="640" height="480" frameborder="o"></iframe>

<!--more-->

大家好我是阿邪!

最近因為要計算一些空間中的位移與旋轉

不得不要理解一些數學的運算

要了解3D引擎如何在空間中運算

了解向量與矩陣的基礎知識是必要的

因為大學不是相關科系的

距離上一次算這些東西大概是高中指考前

所以現在關於這些數學觀念全還給高中老師了

標題提到的四元數必須要了解這些概念才會比較好懂!

所以最近幾天都在算數學

##向量

其實向量概念很簡單

它可以表示一個座標點、方向跟長度

假設一原點<code>O(0,0)</code> 與<code>P(a,b)</code>

則OP向量我們可以用P點的座標來表示


空間中的兩點:

空間中有兩點 <code>A(a,b,c)</code> 與 <code>B(d,e,f)</code>

則AB向量是 <code>AB( d-a , e-b , f-c )</code>

這是個簡單的向量


###向量長度:

向量A(a,b,c)

長度=<code>Math.sqr(a*a+b*b+c*c)</code>


##向量的運算

###向量的加減(位移):

A向量(a,b,c) , B向量(d,e,f)
{% codeblock 向量加法%}
加法: A向量+B向量 = (a+d , b+e , c+f);
{% endcodeblock %}
{% codeblock 向量減法%}
減法: A向量 - B向量= (a-d , b-e , c-f);
{% endcodeblock %}

##向量的運算滿足交換律與結合律

{% codeblock 向量交換律 %}
交換律:A+B=B+A
{% endcodeblock %}

{% codeblock 向量結合律 %}
結合律:A+(B+C)=(A+B)+C
{% endcodeblock %}

###向量的乘法(縮放):

{% codeblock 向量的乘法 %}
常數x乘與向量A(a,b,c)=(x*a , x*b , x*c);
{% endcodeblock %}

###向量的內積(點積):

符號是<code>‧</code>
兩向量的內積為一個純數
也代表A向量投影在B向量上的分量

向量A(a,b,c)與向量B(d,e,f)

則向量<code>A ‧ B</code>
{% codeblock 向量內積 %}
A ‧ B=(a*d + b*e + c*f)=A向量的長度*B向量的長度*cosq;
{% endcodeblock %}

我們可以使用內積來求兩向量的夾角!

###向量的外積(叉積):

符號是<code>X</code>

向量的外積還是一個向量

向量A(a,b,c)與向量B(d,e,f)

則<code>A X B</code>
{% codeblock 向量外積 %}
A X B=(a*f-c*e ,  c*d-a*f , a*e-b*d)
{% endcodeblock %}

得出來的新向量會垂直於A向量與B向量

所以也是A向量與B向量構成的平面上的法向量

另外向量的外積是不滿足交換律的

<code>A X B</code>與<code>B X A</code>是不同的!但是兩個得出來的方向剛好相反


##矩陣

我們可以將向量轉成矩陣

去運算在空間中的平移與旋轉

空間中的平移會用到矩陣的加法與減法

旋轉會用到矩陣的相乘

所以我們3D引擎裡的rotation X,Y,Z其實背後都是在做旋轉矩陣的運算!

一些算式在這邊都有:[點我](http://www.nicoptere.net/noobie_ninja/lib/doc/3d_cheatsheet.pdf)

關於矩陣的運算與原理

可以看這些:[點我](http://book.51cto.com/art/200808/84772.htm)

呼!打好久!接下來終於要進入本篇的主題:四元數

四元數不是個數!它是一個數學的模型!

是由愛爾蘭學家威廉·盧雲·哈密頓發現的

有興趣可以去看維基百科:[點我](http://zh.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B8)

看了以後!發現還是看不懂!只知道他有4個分量<code>w</code>,<code>x</code>,<code>y</code>,<code>z</code>

x,y,z是虛數,w是實數

那跟旋轉有甚麼關係呢?

還好在空間中的四元數不需要從數學的角度去理解(因為我看了好久還是看不懂)

四元數在空間中可以儲存四種分量!畢竟叫四元數就是有四個元素組成

簡單來說可以把四元數表示成:

x,y,z是一個向量!而w是以這個向量為旋轉軸所繞的角度

所以我們可以利用四元數來計算空間中的旋轉

那為什麼要用四元數呢?

以前一般來作空間中的旋轉式使用旋轉矩陣來運算

但它很不好清楚的表示出X,Y,Z的旋轉角度

於是有了歐拉角(Euler)來表示旋轉角度!

但使用歐拉角來表示空間中的旋轉!會有一個很大的問題!

就是萬向死鎖(Gimbal Lock)

簡單來說就是經過3軸旋轉以後~可能會演變成旋轉軸重疊!導至只能轉一個方向

這邊有一個影片可以說明萬向鎖

<iframe class="youtube" width="480" height="480" src="//www.youtube.com/embed/zc8b2Jo7mno?rel=0" frameborder="0" allowfullscreen></iframe>

所以在四元數的實作中可以避免掉萬向鎖的問題

基本上還蠻多地方會用到四元數

比如3D模型的骨架

它們骨塊關節的旋轉都是運用四元數


我們這邊使用四元數來實作一個地球任意方向的旋轉

這邊使用的是away3d 4 beta的3D引擎

{% codeblock lang:as3 %}
package  
{
import away3d.cameras.Camera3D;
import away3d.containers.Scene3D;
import away3d.containers.View3D;
import away3d.core.math.Quaternion;
import away3d.entities.Mesh;
import away3d.lights.PointLight;
import away3d.materials.lightpickers.StaticLightPicker;
import away3d.materials.TextureMaterial;
import away3d.primitives.SphereGeometry;
import away3d.textures.BitmapTexture;
import away3d.tools.utils.Ray;
import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Matrix3D;
import flash.geom.Vector3D;
/**
 * ...
 * @author sayaku
 */
[SWF(frameRate="60",width="800",height="600")]
public class QuaternionEarth extends Sprite
{
	[Embed(source = "../bin/assets/earth.jpg")]
	private var EarthSkin:Class;
	private var view:View3D;
	private var camera:Camera3D;
	private var scene:Scene3D;
	private var mesh:Mesh;
	private var light:PointLight;
	private var lightPicker:StaticLightPicker;
	private var ray:Ray;//直線運算
	private var SPEED:Number = .97;//減速度
	private var radius:Number = 350;

	public function QuaternionEarth() 
	{
		
	if (stage) init(null);
	else addEventListener(Event.ADDED_TO_STAGE, init);
	
	}
		
	private function init(e:Event):void 
	{
	removeEventListener(Event.ADDED_TO_STAGE, init);
	initEngine();
	initLight();		
        initObj3D();
	initListener()
	}
		
	private function initEngine():void 
	{
	view = new View3D();
	scene = view.scene;
	camera = view.camera;
		
	addChild(view);
	}
		
	private function initLight():void 
	{
	light = new PointLight();
	light.y = 5000;
	light.x = -3000;
	light.ambient = .5;
	scene.addChild(light);
	lightPicker = new StaticLightPicker([light]);
	}
		
	private function initObj3D():void 
	{
	var sphere:SphereGeometry = new SphereGeometry(radius,50,50);
	var mt:TextureMaterial = new TextureMaterial(new BitmapTexture(new EarthSkin().bitmapData));
	mt.specular = .5;
        mt.gloss = 20;
	mt.ambientColor = 0x333333;
	mt.ambient = 5;
	mt.lightPicker = lightPicker;
	mesh = new Mesh();
	mesh.geometry = sphere;
	mesh.material = mt;
	scene.addChild(mesh);
	ray = new Ray();

	}
		
	private function initListener():void 
	{
	addEventListener(Event.ENTER_FRAME, onRender);
	}
		
	private function onRender(e:Event):void 
	{
	view.render();
	updataRotation();
		   
	}
		
	private function updataRotation():void 
	{
 var mouse3DPos:Vector3D = view.unproject(view.mouseX, view.mouseY);
    //利用反投影得到2D平面的滑鼠位置轉換成3D空間中的點
 var currentEarthMt:Matrix3D = mesh.transform;
//取得現在地球在空間中的矩陣
//============================================	 
//宣告一個XY平面的四個頂點
	 var v1:Vector3D = new Vector3D( -1000, 1000, 0);
	 var v2:Vector3D = new Vector3D( 1000, 1000, 0);
	 var v3:Vector3D = new Vector3D( 1000, -1000, 0);
	 var v4:Vector3D = new Vector3D( -1000, -1000, 0);
//============================================		 
	 var interSection:Vector3D = new Vector3D;
//相機到空間中滑鼠點的向量與XY平面的交點(也代表原點到此交點的向量)
		 
	if (ray.getRayToTriangleIntersection(camera.position, mouse3DPos, v1, v2, v3)) 
	{
	interSection = ray.getRayToTriangleIntersection(camera.position, mouse3DPos, v1, v2, v3);	
	}
	else
	{		
	interSection = ray.getRayToTriangleIntersection(camera.position, mouse3DPos, v1, v4, v3);	
	}
	interSection ||= new Vector3D;
        //如果是null就NEW一個出來

	interSection.scaleBy(SPEED);
         //向量乘以一個倍數來表示旋轉速度	
	var distance:Number = interSection.length;
        //計算長度		
	var normalDir:Vector3D = new Vector3D(0, 0, 1);
        //XY平面的法向量
	var rotationAxis:Vector3D = interSection.crossProduct(normalDir);
        //兩向量作外積可得到垂直於兩向量的向量(即我們需要的旋轉軸)
	rotationAxis.normalize();
        //旋轉軸記得要正規化!不然轉起來會頓頓
	var q:Quaternion = new Quaternion();
        //四元數
	q.fromAxisAngle(rotationAxis, (distance / radius));
	q.normalize();
        //如果沒有再作其他四元數的運算,不正規化也沒關係
	
	currentEarthMt.append(q.toMatrix3D());
        //矩陣運算(兩矩陣相乘)改變目前地球的旋轉角度
	mesh.transform=currentEarthMt ;
        //再指定給現在的地球
	}
		
   }

}
{% endcodeblock %}


看一下這個地球旋轉用到的概念

![er](http://pcdn1.rimg.tw/photos/2483131_4oc2t9o_l.jpg)

從這張圖可以講解這個DEMO的基本概念

基本上我們的目的就是要算出地球的旋轉軸

首先我們利用unproject將2D的滑鼠位置轉成在空間中的位置,轉換後z值是20,我也不知道為什麼!蠻特殊的轉換法

接下來有了滑鼠在空間中的點就能算攝影機到這個點的向量

然後要算出這個向量跟XY平面的交點則是利用Ray類別裡的<code>getRayToTriangleIntersection()</code>方法

這個方法只能算你給的三角形面與這個向量的交點(其實平面就是兩個三角型組成的)

getRayToTriangleIntersection()的參數分別是<code>("向量的起點","向量的終點","三角形的三個頂點")</code>

如果沒有交點的話會回傳null

所以將我們定義的XY平面的頂點拆成兩個三角形去用if來判斷現在是在哪個平面有交點

算出交點後~就表示地球是要往你那個交點方向旋轉

那要算出旋轉軸就很簡單了

只要交點這個向量與Z軸向量作外積就可以做出垂直於這兩個向量的向量也就是我們要的旋轉軸

得到向量的旋轉軸要做正規化的動作

因為我們只需要這個向量的方向~不需要它的長度跟座標!所以將它正規化

正規化的意義就是使這個向量的長度為1,如果你不做正規化!在運算時可能會超出範圍!

所以務必要使用向量正規化!正規化後原本的座標與長度就被蓋掉了!這點要注意

然後再用四元數去處理旋轉就OK了

基本上四元數能算旋轉但是不能直接給出角度!所以還是要轉成矩陣去做矩陣運算

原始碼下載:[點我](https://www.box.com/s/ffcnoi5km4g05vqtnfme)

如果數學概念有錯的話請指正:)

