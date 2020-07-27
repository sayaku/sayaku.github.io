---
layout: post
title: "Study: Refactoring - Encapsulate"
date: 2020-07-27 18:58:57 +0800
comments: true
categories: [讀書會, 重構, 封裝]
---
讀書會內容-第七節：Encapsulate（封裝）  
該章節提到重構的封裝有以下9種方法  
<!-- more -->
>
[Encapsilate Record (封裝紀錄)](#EncapsilateRecord)  
[Encapsulate Collection (封裝集合)](#EncapsulateCollection)  
[Replace Primitive with Object (將基本元素轉換成物件)](#ReplacePrimitivewithObject)   
[Replace Temp with Query (將暫時變數轉換成查詢函式)](#ReplaceTempwithQuery)    
[Extract Class (提取類別) ](#ExtractClass)   
[Inline Class (內聯類別)](#InlineClass)   
[Hide Delegate (隱藏委託)](#HideDelegate)   
[Remove Middle Man (移除中間人)](#RemoveMiddleMan)   
[Substitute Algorithm (替換演算法)](#SubstituteAlgorithm)   



# Encapsilate Record (封裝紀錄)<a name="EncapsilateRecord"></a>

## before
{% codeblock lang:javascript %}
    organization = {name: 'sayaku', country: 'Taiwan'};
{% endcodeblock %}
## after
{% codeblock lang:javascript %}
    class Organization {
        constructor(data){
            this._name= data.name;
            this._country= data.country;
        }

        get name(){return this._name;}
        set name(arg){this._name=arg;}
        get country(){this._country;}
        set country(arg){this._country=arg;}
    }
{% endcodeblock %}

# Encapsulate Collection (封裝集合)<a name="EncapsulateCollection"></a>

## before

{% codeblock lang:javascript %}
    class Person {
        get courses() { return this._courses;}
        set courses(aList) { this._courses=aList;}
    }
{% endcodeblock %}

## after

{% codeblock lang:javascript %}
    class Person {
        get courses() { return this._courses.slice();}
        addCourse(aCourse) { ... }
        removeCourse(aCourse) { ... }
    }
{% endcodeblock %}

# Replace Primitive with Object (將基本元素轉換成物件)<a name="ReplacePrimitivewithObject"></a>


## before
{% codeblock lang:javascript %}
    order.filter(o = 'high' === o.priority || 'rush' === o.priority);
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    order.filter(o = o.priority.higherThan(new Priority('normal')));
{% endcodeblock %}


# Replace Temp with Query (將暫時變數轉換成查詢函式)<a name="ReplaceTempwithQuery"></a>

## before
{% codeblock lang:javascript %}
    const basePrice = this.quantity * this._itemPrice;

    if (basePrice > 1000)
        return basePeice * .95;
    else
        return basePrice * .98;
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    get basePrice() { this.quantity * this._itemPrice;}
    ...
    if (basePrice > 1000)
        return basePeice * .95;
    else
        return basePrice * .98;

{% endcodeblock %}

# Extract Class (提取類別) <a name="ExtractClass"></a>

## before
{% codeblock lang:javascript %}
    class Person {
        get officeAreaCode() {return this._officeAreaCode;}
        get officeNumber() {return this._officeNumber;}
    }
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    class Person {
        get officeAreaCode() {return this._telephoneNumber.areaCode;}
        get officeNumber() {return this._telephoneNumber.number;}
    }

    class Telephone {
        get areaCode(){return this._areaCode;}
        get number(){return this._number;}
    }
{% endcodeblock %}

# Inline Class (內聯類別)<a name="InlineClass"></a>

## before
{% codeblock lang:javascript %}

    class Person {
        get officeAreaCode() {return this._telephoneNumber.areaCode;}
        get officeNumber() {return this._telephoneNumber.number;}
    }

    class Telephone {
        get areaCode(){return this._areaCode;}
        get number(){return this._number;}
    }
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    class Person {
        get officeAreaCode() {return this._officeAreaCode;}
        get officeNumber() {return this._officeNumber;}
    }
{% endcodeblock %}

# Hide Delegate (隱藏委託)<a name="HideDelegate"></a>

## before
{% codeblock lang:javascript %}
    manager = aPerson.department.manager;
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    manager = aPerson.manager;

    class Person {
        get manager(){return this.depaetment.manager;}
    }
{% endcodeblock %}

# Remove Middle Man (移除中間人)<a name="RemoveMiddleMan"></a>
## before
{% codeblock lang:javascript %}
    manager = aPerson.manager;

    class Person {
        get manager(){return this.depaetment.manager;}
    }
{% endcodeblock %}
## after
{% codeblock lang:javascript %}
    manager = aPerson.department.manager;
{% endcodeblock %}

# Substitute Algorithm (替換演算法)<a name="SubstituteAlgorithm"></a>
## before
{% codeblock lang:javascript %}
    function foundPerson (people) {
        for (let i=0; i< people.length; i++){
            if(people[i] === 'Don'){
                return 'Don';
            }

            if(people[i] === 'John'){
                return 'John';
            }

            if(people[i] === 'Sayaku'){
                return 'Sayaku';
            }
        }
        return '';
    }
{% endcodeblock %}

## after
{% codeblock lang:javascript %}
    function foundPerson(people){
        const candidates = ['Don', 'John', 'Sayaku'];
        return people.find(p => candidates.includes(p)) || '';
    }
{% endcodeblock %}

