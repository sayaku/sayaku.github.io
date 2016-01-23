---
layout: post
title: "Ruby on Rails入門筆記(1)-TodoMVC"
date: 2016-01-22 16:17:28 +0800
comments: true
categories: [Ruby,Rails,Ruby on Rails]
---
![](https://upload.wikimedia.org/wikipedia/commons/9/9c/Ruby_on_Rails_logo.jpg)
<!--more-->
每一種網頁框架都會有一個簡單的todo的實作

今天來介紹使用ruby on rails的scaffold(鷹架)快速製作一個簡單的Todo範例

並且介紹rails的ＭＶＣ流程

todo範例的內容通常會有讓使用者新增、修改、刪除資料的內容

所以這個範例會做一個簡單通訊錄的內容

使用者可以新增聯絡人然後修改內容或是刪除聯絡人  

至於ruby on rails的環境設定可以參考上一回:[Ruby on Rails入門筆記(0)-開發前環境設定](http://sayaku.github.io/blog/2016/01/20/learnruby/)

在開始之前可以先介紹ruby on rails的哲學

> -依照慣例來打造  
> Convention over Configuration (CoC) 
>
> -不做重複的事情  
> Don't Repeat Yourself (DRY)
>
> -簡單實現資料庫的新增、搜尋、修改、刪除  
> Create, Read, Update, Delete (CRUD) 
>
> -使用設計模式的ＭＶＣ，讓程式碼分離！更好維護  
> Model, View, Controller (MVC)
>

好！開始囉

首先先安裝rails

打開terminal終端機，使用gem來下載rails

輸入指令
{% codeblock lang:bash %}
    $ gem install rails
{% endcodeblock %}

下載完後可以用<code>rails -v</code>來查看目前rails的版本

![](http://pcdn1.rimg.tw/photos/4909233_2nsin36_l.png)

我的版本是4.2.5

接下來創建一個rails的專案todo（當然名字不一定要是todo,隨你喜好命名也可）

{% codeblock lang:bash %}
    $ rails new todo
{% endcodeblock %}

rails會幫你建好專案會用到的資料夾

建好以後還會順便幫你用bundle來更新你gemfile所指定套件的版本

所以大概會花一些時間

建好之後可以發現rails幫你建了一個名為todo的專案資料夾

內容如下

![](http://pcdn1.rimg.tw/photos/4909234_f7cpdtt_l.png)

接下來我們可以用我們上一回已經裝好的編輯器sublime text來開啟這個專案

打開sublime text後直接將todo資料夾拖到sublime text

就能開始開發專案了

![](http://pcdn1.rimg.tw/photos/4909235_zxg4hdg_l.png)）

現在我們將終端機工作目錄移到todo資料夾下

{% codeblock lang:bash %}
    $ cd todo
{% endcodeblock %}

然後開啟rails的測試伺服器

{% codeblock lang:bash %}
    $ rails server

    //縮短寫法
    $ rails s

    //如果是在cloud9上測試的話要用
    $ rails server -p $PORT -b $IP
{% endcodeblock %}

這時候打開自己的瀏覽器輸入伺服器預設網址<code>127.0.0.1:3000</code>

成功的話，就可以預覽剛剛用rails所建出來的第一個網站

![](http://pcdn1.rimg.tw/photos/4909261_7c1kufw_l.png)

如果想關閉伺服器的話可以在終端機輸入<code>ctrl+C</code>

或是直接關閉終端機

一般狀況我會再多開一個終端機的視窗繼續作業

先前我們有提到rails是使用MVC的架構，所以可以在app的資料夾裡看到這三個

要熟悉rails的運作必須要先了解MVC的運作方式

那rails的MVC架構是怎麼運作的呢？

我們來看下圖(圖片與說明參考至[ROR實戰聖經](https://ihower.tw/rails4/basic.html) )

![](https://ihower.tw/rails4/images/basic-mvc-diagram.png)

這張圖示中的執行步驟是：

1. 使用者在瀏覽器發出HTTP request請求給伺服器的Rails
2. 路由(Routing)收到瀏覽器端的請求
   根據收到網址的規則告訴要處理請求的Controller去處理資料
3. Controller收到請求後看是否有需操作Model的資料並去撈取
4. Model收到Controller的請求去存取資料庫或資料處理然後傳回給Controller
5. Controller將得到的資料餵給View樣板
6. 回傳最後的HTML成品給瀏覽器  

其中，路由主要是根據HTTP Method方法(GET、POST或是PATCH、DELETE等)以及網址來決定派往到哪一個Controller的Action。

上面主要是rails運作的流程

#Scaffold

上面說到rails運作流程是用MVC去跑

也就是說我們必須要MVC架構裡的元件一個一個自己去建構嗎？

那也太麻煩了

所以rails有提供一個scaffold可以讓使用者快速建構出自己要的ＭＶＣ架構

再利用scaffold前我們要先確定我們要做通訊錄會有哪些欄位

一般通訊錄大概會有  
1. 姓名  
2. 電話  
3. 電子郵件  

了不起加個地址等....

確定之後就可以開始用scaffold開始架構了

{% codeblock lang:bash %}
    //我們新增一個User的table裡面有name,email,tel的欄位
    $ rails generate scaffold User name:string email:string tel:string

    //縮短寫法
    //如果欄位屬性不填屬性的話預設是string
    $ rails g scaffold User name email tel

{% endcodeblock %}

按下確定後我們會看到rails幫你建了一大堆東西

包含ＭＶＣ架構都一起建好了

接下來我們到todo目錄下有一個db的資料夾，打開裡面migrate資料夾有我們

創建資料表的欄位資訊
![](http://pcdn1.rimg.tw/photos/4909628_iy1u568_l.png)

預設rails會幫你加一個唯一的id與時間戳記

scaffold創建好ＭＶＣ架構，但是還沒幫你創造資料庫的實體並且去做關聯

所以這時可以下

{% codeblock lang:bash %}
rake db:migrate
{% endcodeblock %}

這時做好建構與關聯後

這時回到瀏覽器上（記得要打開伺服器 <code>rails s</code>）

網址輸入<code>127.0.0.1:3000/users</code>

就能看到我們建好的結果了

![](http://pcdn1.rimg.tw/photos/4909640_uasm0dt_l.png)

這時你可以隨意在上面新增修改刪除你要的資料了

當然你可能會覺得我明明在建立tabel時明明就是命名User

他這邊的網址怎麼變成users複數了呢？

這就是我們最上面講的rails的Convention over Configuration (CoC)

依造慣例來打造

因為rails認為這一頁會秀出所有的欄位資訊，所以應該是會有很多user

所以就幫他加上複數

那為什麼我會知道我用scallold建好的資料會在這個網站的users路徑下？

#Route

這時我們在終端機輸入指令<code>rake routes</code>

會跑出以下預設這八種方法

![](http://pcdn1.rimg.tw/photos/4909667_mkeqd8e_l.png)

Prefix：是前綴索引字，未來程式的控制會常用到   
Verb：是瀏覽器傳送資料的方法，目前瀏覽器只有GET,POST兩種其他動作是rails幫我們定義的  
URI Pattern：對照網址的相對位置  
Controller#Action：則是每個route根據URI Pattern所對應到的位置指定controller的方法

所有新增查詢修改刪除的動作我們會發現在使用rails scaffold時通通都幫我們做掉了

那這個8個方法是怎麼來的？

接下來我們可以到todo目錄下config資料夾打開routes.rb的檔案

![](http://pcdn1.rimg.tw/photos/4909641_emlejei_l.png)

我們可以看到<code>resources :users</code>

resources會幫我們製造這八種方法

後面的users是複數則是rails的慣例

如果我們不想使用resources創造出來的八種方法

也可以自己定義想要的名字進入指定的頁面

我們回到routes.rb的檔案內

加入
{% codeblock lang:ruby %}
  get '/sayaku' ,to: 'users#index'
  #另一種寫法是
  #get '/sayaku' => 'users#index'
{% endcodeblock %}

這段的意思就是我在網址的路徑後面加上<code>sayaku</code>就會指定controller去做指定的方法

所以我們打<code>127.0.0.1:3000/sayaku</code>

一樣會連到剛剛的那個頁面

換個角度想如果想要打<code>127.0.0.1:3000</code>就直接進入這個頁面

也可以下成
{% codeblock lang:ruby %}
  get '/' ,to: 'users#index'
{% endcodeblock %}

當然rails也提供另一個方法可以指定首頁
{% codeblock lang:ruby %}
  root 'users#index'
{% endcodeblock %}

效果也是一樣的

當然也有人利用route來作惡搞

例如利用route來偽裝成php或是asp做的網頁

{% codeblock lang:ruby %}
  get '/sayaku.aspx' ,to: 'users#index'
{% endcodeblock %}

甚至還可以做傳接值的動作

這樣別人不仔細看還以為是asp做的網站

這就是rails裡面route的應用，其用途就是在接收到網址去找對應的controller

#Controller

我們由上面得知rails在接收到訊息會找指定的Controller

而這些Controller會放在todo目錄下app的資料夾

app資料夾下面則包含了rails實作出來MVC

而所有指定的controller會放到controllers的目錄下

以剛剛route接收到訊息並且呼叫<code>users#index</code>

前面的<code>users</code>route會自己幫我們找在controllers下有沒有叫做users_controller.rb的檔案

後面的<code>#index</code>，會在users_controller.rb裡面找有沒有叫做index的方法並且去執行它

#Model
在rails運作時期不一定要有model才能運作

如果Controller在使用過程中會存取到資料庫資訊時

則會去尋找對應的Model

因為這次我們有建構通訊錄欄位

在用scallold建構時欄位時

rails就有在app下面的models資料夾裡建構了一個user.rb

這邊的命名又回到單數了，因為rails一個table只會有一個user

所以這裡就是rails的慣例

還記得我們剛剛所做好的通訊錄嗎？

如果今天我們想要限制使用者如果沒有填特定資料就不給與寫入資料庫

不然有人要惡搞的話就一直新增空白資料

所以必須做個驗證

以前的方法可能是直接在前端做判斷然後擋下來

不過rails一樣也是有可以用簡單的方法來做過濾

例如今天我希望姓名欄位不能留白

我們可以在Model在寫入資料時做驗證

我們可以在user.rb裡下驗證的語法

{% codeblock lang:ruby %}
  class User < ActiveRecord::Base
	validates(:name, presence: true)
  end
{% endcodeblock %}

這個意思就是指定name欄位會去做驗證

這邊有很多關於ruby的語法，改天會開一篇來介紹這邊就先不理他

所以我們在打開瀏覽器新增一筆資料然後什麼都不填並且送出

這時我們就會看到rails告訴你“你的名字欄位不能留白喔”等警告

![](http://pcdn1.rimg.tw/photos/4909700_q3jmrpk_l.png)

#View
剛剛有提到，在Rails的ＭＶＣ運作下Model是不一定要存在的

以上面Model做驗證後會將資訊結果回傳給Controller

但是Controller本身無法給使用者看到

所以必須產出一個View讓使用者可以看到

在rails的ＭＶＣ架構下只有view的檔案不是ruby的rb檔案

而是html的樣板檔，所以如果想要達成前後端分離，

前端工程師美術設計要修改就可以直接在view去做修改

而產出的view預設會放在app的views的資料夾下

裡面會有layout跟controller對應的view資料夾

也就是我們一開始用scaffold時rails就一起幫我們建好了

這是非常的方便


scaffold雖然方便，但一次幫我們產出了我們很多不要的檔案

所以後面的筆記會來記錄自己一步一步純手工打造

而以目前做出來的todo範例，雖然該有的功能都有了，但整個介面實在是太醜了

所以美化使用者介面則在下一個單元來做介紹

#總結
回顧今天要快速建一個通訊錄我們要做的步驟如下
{% codeblock lang:bash %}
   //1.建構專案
   $rails new todo
   //2.建構欄位ＭＶＣ
   $rails g scaffold User name email tel
   //3.建立實體資料庫並作關聯
   $rake db:migrate

   //結束
{% endcodeblock %}

三個指令一次全部做完一個簡易通訊錄

大概花不到十秒吧！

在做個簡易的驗證還有頁面美化跟修改

大概十分鐘就完成了

rails真的很強大！！！




















