---
layout: post
title: "Ruby on Rails入門筆記-開發前環境設定"
date: 2016-01-20 14:09:46 +0800
comments: true
categories: [Ruby]
---
<img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png" width="300px">
<!--more-->
#什麼要學Ruby?

Ruby是由日本人**松本行弘**（まつもとゆきひろ）以Ｃ語言為基礎所創造出來的程式語言

Ruby知名於Ruby on Rails,是個可以用簡短的程式快速創造出網站的框架
>注意：Ruby on Rails不是程式語言,他只是基於Ruby所製作出來的框架

Ruby on Rails近年來也越來越火紅，也越來越多大神在使用

既然要學好Ruby on Rails，那Ruby學好是必須的！

而學習Ruby有趣的地方，則在於他的語法簡單易懂

有基礎程式概念的人還蠻容易上手的

當然Ruby除了Rails以外還可以做其他的事

最近開始上Ruby on Rails的課程

寫這篇當作筆記也當作複習

好好的來體驗吧！

#環境設定

Ruby支援**Windows / Mac / Linux**平台

在安裝使用上建議使用 Mac / Linux 平台

如果是windows平台的使用者，可以下載rubyinstaller來安裝[官網下載](http://rubyinstaller.org/)

像小弟我本身使用Mac來開發，系統本身就有內建ruby了

但使用系統內建的ruby會有權限問題，每打個指令就很常需要用到sudo來通過系統權限

很麻煩，所以可以自己下載不同版本的ruby來使用

既然會有多不同版本的ruby，自然就會有控制Ruby版本的東西

首先打開terminal(windows平台叫命令提示字元)輸入指令

mac找不到的話，可以使用程式搜尋來尋找terminal.app

其實如果只是想打打Ruby語言，可以直接跳到step.5

另外也可以使用雲端環境cloud9來使用ruby,[cloud9](https://c9.io/?redirect=0)

#step1.安裝RVM

RVM是管理Ruby版本用的套件

安裝方式可以RVM的[官網下載](http://rvm.io/)

安裝方法需要使用<code>terminal</code>輸入指令安裝



#step2.安裝Homebrew

Homebrew可以用來下載系統需要的套件包，例如MySql等等套件

安裝RVM過程中可能會出錯，需要透過homebrew來安裝套件包

Homebrew的[官網](http://brew.sh/)

裝好RVM的話，可以使用指令來下載最新的Ruby（截稿前最新版本2.3.0)

{% codeblock lang:bash %}
    $ rvm install 2.3.0
{% endcodeblock %}

裝好後可以下指令來當做預設版本
{% codeblock lang:bash %}
    $ rvm 2.3.0 --default
{% endcodeblock %}

#step3.安裝Bundler

Bundler是Ruby套件的版本管理套件包，會根據所指定版本的套件來更新

可以先用ruby內建的gem來安裝

gem是管理ruby套件的套件

有需要ruby的套件如rails都可以透過它來下載

有需要Ruby其他的套件也可以上他們官網去搜尋

RubyGem的[官網](https://rubygems.org/)

第一件事情就是更新Gem的版本囉
{% codeblock lang:bash %}
 $ gem update --system
{% endcodeblock %}

更新好gem接下來就是利用gem來安裝bundler
{% codeblock lang:bash %}
$ gem install bundler
{% endcodeblock %}

#step4. 安裝 Rake

Rake是可以將Ruby指令簡化的一個套件

未來在開發的過程中會很常使用

可以透過Gem來下載這個套件

{% codeblock lang:bash %}
$ gem install rake
{% endcodeblock %}

裝完後基本上該設定的環境也都差不多設定好了

我們可以試著來打打看Ruby語言

#step5. Ruby的第一個Hello World

首先在terminal上鍵入irb

irb是個可以處理與顯示ruby語法的互動介面

可以做簡單的ruby運算

第一個ruby的APP!印出Hello World


{% codeblock lang:ruby  %}
    puts 'hello world!'
{% endcodeblock %}

會印出
{% codeblock lang:ruby  %}
    hello world
 => nil
{% endcodeblock %}

如果要離開irb互動介面的話

可以按下<code>ctrl</code>+<code>D</code>

irb在處理ruby比較麻煩，一次就只能輸出一行

如果要編輯多行的話可以使用編輯器來編輯ruby的文件

編輯ruby小弟推薦sublime text這套編輯器

#step6.安裝Sublime Text編輯器

sublime text編輯器[下載](http://www.sublimetext.com/3)

下載安裝後，打開編輯器，新增一的檔案並且存檔想要的檔名

例如：<code>rubyTest.rb</code>

並在直接在內容輸入
{% codeblock lang:ruby  %}
    puts 'hello world!'
{% endcodeblock %}

存檔後

開啟terminal

輸入指令
{% codeblock lang:ruby  %}
    $ ruby rubyTest.rb 
{% endcodeblock %}

結果是一樣的

不過每改完一次還要再打開terminal輸入這個才能看到結果實在是太麻煩了

所以可以直接在sublime text編輯畫面直接按下<code>command</code>+<code>B</code>

sublime text可以直接顯示輸出結果

下個單元再來介紹ruby語言的基礎介紹


