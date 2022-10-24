---
title: "Study: Refactoring - Encapsulate"
date: 2020-07-27 18:58:57 +0800
---
讀書會內容-第七節：Encapsulate（封裝）  
該章節提到重構的封裝有以下9種方法  
<!--truncate-->
[Encapsulate Record (封裝紀錄)](#EncapsilateRecord)  
[Encapsulate Collection (封裝集合)](#EncapsulateCollection)  
[Replace Primitive with Object (將基本元素轉換成物件)](#ReplacePrimitivewithObject)   
[Replace Temp with Query (將暫時變數轉換成查詢函式)](#ReplaceTempwithQuery)    
[Extract Class (提取類別) ](#ExtractClass)   
[Inline Class (內聯類別)](#InlineClass)   
[Hide Delegate (隱藏委託)](#HideDelegate)   
[Remove Middle Man (移除中間人)](#RemoveMiddleMan)   
[Substitute Algorithm (替換演算法)](#SubstituteAlgorithm)   



## Encapsilate Record (封裝紀錄)<a name="EncapsilateRecord"></a>


before

``` javascript
    organization = {name: 'sayaku', country: 'Taiwan'};
```

after
``` javascript
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
```

說明：  
1. 用class包裝紀錄變數，並且定義存取的getter, setter  
2. getter回傳原本資料的深副本而不是回傳原始紀錄  
3. 重構時注重setter更新的部分  
4. 自定義更語意化的函式  

## Encapsulate Collection (封裝集合)<a name="EncapsulateCollection"></a>

before

``` javascript
    class Person {
        get courses() { return this._courses;}
        set courses(aList) { this._courses=aList;}
    }
```

after

``` javascript
    class Person {
        get courses() { return this._courses.slice();}
        addCourse(aCourse) { ... }
        removeCourse(aCourse) { ... }
    }
```

說明：  
1. 與前面Encapsilate Record 概念相同，但封裝的對象是集合  
2. 新增對集合操作（ＣＲＵＤ新增查詢修改移除）的函式  
3. 返回集合使用代理或是副本  

## Replace Primitive with Object (將基本元素轉換成物件)<a name="ReplacePrimitivewithObject"></a>


before
``` javascript
    order.filter(o = 'high' === o.priority || 'rush' === o.priority);
```

after
``` javascript
    order.filter(o = o.priority.higherThan(new Priority('normal')));
```

說明：  
1. 對物件的屬性轉換成用物件的形式表示  
2. 語意化getter,setter函式取個不易讓人誤解的名稱,例如：回傳的值是toString()而不是原本預期的屬性,那函式名稱建議在後綴加上toString,語意上比較上是索取字串而不是原本的屬性  
3. 讓程式碼更清楚的表達目的  


## Replace Temp with Query (將暫時變數轉換成查詢函式)<a name="ReplaceTempwithQuery"></a>

before
``` javascript
    const basePrice = this.quantity * this._itemPrice;

    if (basePrice > 1000)
        return basePeice * .95;
    else
        return basePrice * .98;
```

after
``` javascript
    get basePrice() { this.quantity * this._itemPrice;}
    ...
    if (basePrice > 1000)
        return basePeice * .95;
    else
        return basePrice * .98;

```

說明：  
1. 暫時的變數可以儲存某些程式碼的值，將之語意化為唯讀函式  
2. 確定該變數被使用時不會產生不同的值，也就是最初他只會被賦值一次  

## Extract Class (提取類別) <a name="ExtractClass"></a>

before
``` javascript
    class Person {
        get officeAreaCode() {return this._officeAreaCode;}
        get officeNumber() {return this._officeNumber;}
    }
```

after
``` javascript
    class Person {
        get officeAreaCode() {return this._telephoneNumber.areaCode;}
        get officeNumber() {return this._telephoneNumber.number;}
    }

    class Telephone {
        get areaCode(){return this._areaCode;}
        get number(){return this._number;}
    }
```

說明：  
1. 當類別裡已經複雜到需要拆解功能並分門別類時使用  
2. 類別必須是個清晰的抽象， 只應該處理一些明確的功能  
3. 一拆解出來的功能分成一個個子類別，並與父類別產生連結  

## Inline Class (內聯類別)<a name="InlineClass"></a>

before
``` javascript

    class Person {
        get officeAreaCode() {return this._telephoneNumber.areaCode;}
        get officeNumber() {return this._telephoneNumber.number;}
    }

    class Telephone {
        get areaCode(){return this._areaCode;}
        get number(){return this._number;}
    }
```

after
``` javascript
    class Person {
        get officeAreaCode() {return this._officeAreaCode;}
        get officeNumber() {return this._officeNumber;}
    }
```

說明：  
1. 是Extract Class (提取類別)的反向操作  
2. 遇到沒什麼用途且不該存在的子類別，使用inline class合併之  
3. 通常是用於重構後，功能被拆分後移除沒用子類別的實作  

## Hide Delegate (隱藏委託)<a name="HideDelegate"></a>

before
``` javascript
    manager = aPerson.department.manager;
```

after
``` javascript
    manager = aPerson.manager;

    class Person {
        get manager(){return this.depaetment.manager;}
    }
```

說明：  
1. 封裝用意是隱藏不需要被模組知道系統的其他部分  
2. 其實就是隱藏欄位，減少系統內部透明度  
3. 將委託的方法封裝起來，達成隱藏委託  

## Remove Middle Man (移除中間人)<a name="RemoveMiddleMan"></a>
before
``` javascript
    manager = aPerson.manager;

    class Person {
        get manager(){return this.depaetment.manager;}
    }
```
after
``` javascript
    manager = aPerson.department.manager;
```

說明：  
1. 該模式是Hide Delegate (隱藏委託)的逆向操作  
2. 當委託方法越來越多，會發現每新增一個委託方法就要多一個轉傳機制，
方法一多便難以管理,故可以逆向操作使用移除中間人模式來重構  


## Substitute Algorithm (替換演算法)<a name="SubstituteAlgorithm"></a>
before
``` javascript
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
```

after
``` javascript
    function foundPerson(people){
        const candidates = ['Don', 'John', 'Sayaku'];
        return people.find(p => candidates.includes(p)) || '';
    }
```

說明：  
1. 發現重複且枯燥的方法可以重構成明確易懂的方法時使用  
2. 困難化作簡單  