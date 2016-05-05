---
layout: post
title: "[筆記]Ruby的RVM,GEM,Bundler是什麼？"
date: 2016-05-05 09:48:54 +0800
comments: true
categories: 
---
初入門Ruby on Rails的時候在做環境設定時

我們總是會遇到RVM,GEM,Bundler這幾個東西

都知道他們是管理套件相關的東西，但都傻傻分不清楚他們到底在管理什麼

今天就來整理一下

<!--more-->

・RVM

這個東西是用來管理Ruby這個程式語言版本的套件

由於Ruby有很多個版本，比如1.8.X~2.3.X 

還有嵌入式系統用輕巧的mruby

或是jruby等等

這麼多ruby的版本如果搞不清楚什麼時候用什麼版本或是切換版本就很麻煩

所以就有這套ＲＶＭ來做Ruby的版本管理

安裝方法可以直接到他們[官網](https://rvm.io/)

將那一串指令貼到終端機上就能安裝了

安裝完後

我們可以使用上面剛安裝好的RVM來安裝其他版本的Ruby

例如我想安裝<code>2.3.0</code>的Ruby可以這樣下

{% codeblock lang:bash %}
    $ rvm install 2.3.0
{% endcodeblock %}

裝好之後

我們可以下

{% codeblock lang:bash %}
    $ ruby --version
    //或是
    $ ruby -v
{% endcodeblock %}

得知目前使用ruby的版本

那我想知道ruby的位置在電腦的哪邊

可以下
{% codeblock lang:bash %}
    $ which ruby
{% endcodeblock %}

因為我們是用rvm管理ruby的關係

所以路徑會是<code>～～～/.rvm/rubies/ruby-2.3.0/bin/ruby </code>>之類的

可以看到ruby不同的版本都會放在<code>～～/.rvm/rubies </code>這個路徑下

要打開該路徑資料夾

可以用open的指令

以我的為例

{% codeblock lang:bash %}
    $ open /Users/sayaku/.rvm/rubies
{% endcodeblock %}

可以看到剛剛下載的<code>ruby-2.3.0</code>的資料夾





・Gem

在Ruby的世界，有很多用Ruby寫成的套件包或是框架可以用

才能造就Ruby這個程式的多樣與豐富性，例如有名Rails就是ruby的套件

那我們要怎麼找尋這些套件並且管理呢？

而Gem就是用來搜尋套件用與管理的玩意

其實我們在安裝Ruby的時候就會內建Gem

用rvm下載ruby的話，Gem的預設位置會在<code>.rvm/gems</code>

而使用gem下載的套件則會安裝到<code>.rvm/gems/{ruby版本}</code>

而要搜尋gem裡面有什麼套件，可以到rubygems的[官網](https://rubygems.org/)搜尋

例如我們想要下載rails這個套件

可以在終端機下指令

{% codeblock lang:bash %}
    $ gem install rails
{% endcodeblock %}

這樣就會幫你把rails下載到預設的gems資料夾裡




・Bundler

bundler也是ruby的套件，可以從gem上面下載

他是用來解決gem套件相依性問題的套件

這樣講好像有點不清楚

這樣說好了，每一個套件的作者，可能每一段時間就會為這個套件推出新的版本

所以即使是rails這個套件也會有很多版本（目前穩定版4.2.6)

而套件有很多個版本在專案上就會有套件版本管理上的問題

例如有一個Ａ專案，他使用Ｂ套件（1.0.0版），而這個Ｂ套件會用到Ｃ套件（1.0.0版）

今天客戶可能搬到新的主機了

主機上也有其他專案，但是用Ｂ套件（2.0.0版），然後這個Ｂ套件會用到Ｃ套件（2.0.0版）

這時候Ａ專案搬到新主機可能就沒辦法RUN

因為Ａ專案需要用到Ｂ套件的1.0.0版，如果只是單純幾個套件那還好改，但通常每個套件都會在用到其他好幾個另外的套件

其他的套件只要版本不符可能都會跑不起來，就會有每個套件版本相依性的問題

而Bundler則是解決這個問題的套件

使用gem安裝bundler

{% codeblock lang:bash %}
    $ gem install bundler
{% endcodeblock %}

裝好以後，你可以在你的專案資料夾下
{% codeblock lang:bash %}
    $ bundle init
{% endcodeblock %}

他會在你的專案資料夾下創一個<code>Gemfile</code>的檔案

你可以在Gemfile裡面聲明專案會用到的RubyGems套件

並且定義在專案裡這些套件要使用的版本

定義好了以後

使用

{% codeblock lang:bash %}
    $ bundle install
    或是
    $ bundle
{% endcodeblock %}

bundler會依照Gemfile所定義的RubyGems套件去下載

並將當前所有套件的版本做一個快照檔Gemfile.lock存起來

未來專案bundle會根據Gemfile.lock快照決定Gemfile是否有修改來進行套件的更新

而Gemfile的寫法細節可以參考[龍哥](http://kaochenlong.com/2016/05/02/gemfile/)

使用bundler就不用去煩惱哪個套件用到哪個版本的其他套件

很方便




