"use strict";(self.webpackChunksayaku=self.webpackChunksayaku||[]).push([[477],{10:function(n){n.exports=JSON.parse('{"blogPosts":[{"id":"/2020/07/27/study-refactoring","metadata":{"permalink":"/blog/2020/07/27/study-refactoring","editUrl":"https://github.com/sayaku/sayaku.github.io/edit/main/blog/2020-07-27-study-refactoring/index.md","source":"@site/blog/2020-07-27-study-refactoring/index.md","title":"Study: Refactoring - Encapsulate","description":"\u8b80\u66f8\u6703\u5167\u5bb9-\u7b2c\u4e03\u7bc0\uff1aEncapsulate\uff08\u5c01\u88dd\uff09","date":"2020-07-27T18:58:57.000Z","formattedDate":"2020\u5e747\u670827\u65e5","tags":[],"readingTime":5.685,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Study: Refactoring - Encapsulate","date":"2020-07-27 18:58:57 +0800"},"nextItem":{"title":"2019-Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u306b\u6311\u6226\uff01","permalink":"/blog/2019/09/20/fujisan-ni-nobotta"}},"content":"\u8b80\u66f8\u6703\u5167\u5bb9-\u7b2c\u4e03\u7bc0\uff1aEncapsulate\uff08\u5c01\u88dd\uff09  \\n\u8a72\u7ae0\u7bc0\u63d0\u5230\u91cd\u69cb\u7684\u5c01\u88dd\u6709\u4ee5\u4e0b9\u7a2e\u65b9\u6cd5  \\n\x3c!--truncate--\x3e\\n[Encapsulate Record (\u5c01\u88dd\u7d00\u9304)](#EncapsilateRecord)  \\n[Encapsulate Collection (\u5c01\u88dd\u96c6\u5408)](#EncapsulateCollection)  \\n[Replace Primitive with Object (\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6)](#ReplacePrimitivewithObject)   \\n[Replace Temp with Query (\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f)](#ReplaceTempwithQuery)    \\n[Extract Class (\u63d0\u53d6\u985e\u5225) ](#ExtractClass)   \\n[Inline Class (\u5167\u806f\u985e\u5225)](#InlineClass)   \\n[Hide Delegate (\u96b1\u85cf\u59d4\u8a17)](#HideDelegate)   \\n[Remove Middle Man (\u79fb\u9664\u4e2d\u9593\u4eba)](#RemoveMiddleMan)   \\n[Substitute Algorithm (\u66ff\u63db\u6f14\u7b97\u6cd5)](#SubstituteAlgorithm)   \\n\\n\\n\\n## Encapsilate Record (\u5c01\u88dd\u7d00\u9304)<a name=\\"EncapsilateRecord\\"></a>\\n\\n\\nbefore\\n\\n``` javascript\\n    organization = {name: \'sayaku\', country: \'Taiwan\'};\\n```\\n\\nafter\\n``` javascript\\n    class Organization {\\n        constructor(data){\\n            this._name= data.name;\\n            this._country= data.country;\\n        }\\n\\n        get name(){return this._name;}\\n        set name(arg){this._name=arg;}\\n        get country(){this._country;}\\n        set country(arg){this._country=arg;}\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u7528class\u5305\u88dd\u7d00\u9304\u8b8a\u6578\uff0c\u4e26\u4e14\u5b9a\u7fa9\u5b58\u53d6\u7684getter, setter  \\n2. getter\u56de\u50b3\u539f\u672c\u8cc7\u6599\u7684\u6df1\u526f\u672c\u800c\u4e0d\u662f\u56de\u50b3\u539f\u59cb\u7d00\u9304  \\n3. \u91cd\u69cb\u6642\u6ce8\u91cdsetter\u66f4\u65b0\u7684\u90e8\u5206  \\n4. \u81ea\u5b9a\u7fa9\u66f4\u8a9e\u610f\u5316\u7684\u51fd\u5f0f  \\n\\n## Encapsulate Collection (\u5c01\u88dd\u96c6\u5408)<a name=\\"EncapsulateCollection\\"></a>\\n\\nbefore\\n\\n``` javascript\\n    class Person {\\n        get courses() { return this._courses;}\\n        set courses(aList) { this._courses=aList;}\\n    }\\n```\\n\\nafter\\n\\n``` javascript\\n    class Person {\\n        get courses() { return this._courses.slice();}\\n        addCourse(aCourse) { ... }\\n        removeCourse(aCourse) { ... }\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u8207\u524d\u9762Encapsilate Record \u6982\u5ff5\u76f8\u540c\uff0c\u4f46\u5c01\u88dd\u7684\u5c0d\u8c61\u662f\u96c6\u5408  \\n2. \u65b0\u589e\u5c0d\u96c6\u5408\u64cd\u4f5c\uff08\uff23\uff32\uff35\uff24\u65b0\u589e\u67e5\u8a62\u4fee\u6539\u79fb\u9664\uff09\u7684\u51fd\u5f0f  \\n3. \u8fd4\u56de\u96c6\u5408\u4f7f\u7528\u4ee3\u7406\u6216\u662f\u526f\u672c  \\n\\n## Replace Primitive with Object (\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6)<a name=\\"ReplacePrimitivewithObject\\"></a>\\n\\n\\nbefore\\n``` javascript\\n    order.filter(o = \'high\' === o.priority || \'rush\' === o.priority);\\n```\\n\\nafter\\n``` javascript\\n    order.filter(o = o.priority.higherThan(new Priority(\'normal\')));\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u5c0d\u7269\u4ef6\u7684\u5c6c\u6027\u8f49\u63db\u6210\u7528\u7269\u4ef6\u7684\u5f62\u5f0f\u8868\u793a  \\n2. \u8a9e\u610f\u5316getter,setter\u51fd\u5f0f\u53d6\u500b\u4e0d\u6613\u8b93\u4eba\u8aa4\u89e3\u7684\u540d\u7a31,\u4f8b\u5982\uff1a\u56de\u50b3\u7684\u503c\u662ftoString()\u800c\u4e0d\u662f\u539f\u672c\u9810\u671f\u7684\u5c6c\u6027,\u90a3\u51fd\u5f0f\u540d\u7a31\u5efa\u8b70\u5728\u5f8c\u7db4\u52a0\u4e0atoString,\u8a9e\u610f\u4e0a\u6bd4\u8f03\u4e0a\u662f\u7d22\u53d6\u5b57\u4e32\u800c\u4e0d\u662f\u539f\u672c\u7684\u5c6c\u6027  \\n3. \u8b93\u7a0b\u5f0f\u78bc\u66f4\u6e05\u695a\u7684\u8868\u9054\u76ee\u7684  \\n\\n\\n## Replace Temp with Query (\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f)<a name=\\"ReplaceTempwithQuery\\"></a>\\n\\nbefore\\n``` javascript\\n    const basePrice = this.quantity * this._itemPrice;\\n\\n    if (basePrice > 1000)\\n        return basePeice * .95;\\n    else\\n        return basePrice * .98;\\n```\\n\\nafter\\n``` javascript\\n    get basePrice() { this.quantity * this._itemPrice;}\\n    ...\\n    if (basePrice > 1000)\\n        return basePeice * .95;\\n    else\\n        return basePrice * .98;\\n\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u66ab\u6642\u7684\u8b8a\u6578\u53ef\u4ee5\u5132\u5b58\u67d0\u4e9b\u7a0b\u5f0f\u78bc\u7684\u503c\uff0c\u5c07\u4e4b\u8a9e\u610f\u5316\u70ba\u552f\u8b80\u51fd\u5f0f  \\n2. \u78ba\u5b9a\u8a72\u8b8a\u6578\u88ab\u4f7f\u7528\u6642\u4e0d\u6703\u7522\u751f\u4e0d\u540c\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u6700\u521d\u4ed6\u53ea\u6703\u88ab\u8ce6\u503c\u4e00\u6b21  \\n\\n## Extract Class (\u63d0\u53d6\u985e\u5225) <a name=\\"ExtractClass\\"></a>\\n\\nbefore\\n``` javascript\\n    class Person {\\n        get officeAreaCode() {return this._officeAreaCode;}\\n        get officeNumber() {return this._officeNumber;}\\n    }\\n```\\n\\nafter\\n``` javascript\\n    class Person {\\n        get officeAreaCode() {return this._telephoneNumber.areaCode;}\\n        get officeNumber() {return this._telephoneNumber.number;}\\n    }\\n\\n    class Telephone {\\n        get areaCode(){return this._areaCode;}\\n        get number(){return this._number;}\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u7576\u985e\u5225\u88e1\u5df2\u7d93\u8907\u96dc\u5230\u9700\u8981\u62c6\u89e3\u529f\u80fd\u4e26\u5206\u9580\u5225\u985e\u6642\u4f7f\u7528  \\n2. \u985e\u5225\u5fc5\u9808\u662f\u500b\u6e05\u6670\u7684\u62bd\u8c61\uff0c \u53ea\u61c9\u8a72\u8655\u7406\u4e00\u4e9b\u660e\u78ba\u7684\u529f\u80fd  \\n3. \u4e00\u62c6\u89e3\u51fa\u4f86\u7684\u529f\u80fd\u5206\u6210\u4e00\u500b\u500b\u5b50\u985e\u5225\uff0c\u4e26\u8207\u7236\u985e\u5225\u7522\u751f\u9023\u7d50  \\n\\n## Inline Class (\u5167\u806f\u985e\u5225)<a name=\\"InlineClass\\"></a>\\n\\nbefore\\n``` javascript\\n\\n    class Person {\\n        get officeAreaCode() {return this._telephoneNumber.areaCode;}\\n        get officeNumber() {return this._telephoneNumber.number;}\\n    }\\n\\n    class Telephone {\\n        get areaCode(){return this._areaCode;}\\n        get number(){return this._number;}\\n    }\\n```\\n\\nafter\\n``` javascript\\n    class Person {\\n        get officeAreaCode() {return this._officeAreaCode;}\\n        get officeNumber() {return this._officeNumber;}\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u662fExtract Class (\u63d0\u53d6\u985e\u5225)\u7684\u53cd\u5411\u64cd\u4f5c  \\n2. \u9047\u5230\u6c92\u4ec0\u9ebc\u7528\u9014\u4e14\u4e0d\u8a72\u5b58\u5728\u7684\u5b50\u985e\u5225\uff0c\u4f7f\u7528inline class\u5408\u4f75\u4e4b  \\n3. \u901a\u5e38\u662f\u7528\u65bc\u91cd\u69cb\u5f8c\uff0c\u529f\u80fd\u88ab\u62c6\u5206\u5f8c\u79fb\u9664\u6c92\u7528\u5b50\u985e\u5225\u7684\u5be6\u4f5c  \\n\\n## Hide Delegate (\u96b1\u85cf\u59d4\u8a17)<a name=\\"HideDelegate\\"></a>\\n\\nbefore\\n``` javascript\\n    manager = aPerson.department.manager;\\n```\\n\\nafter\\n``` javascript\\n    manager = aPerson.manager;\\n\\n    class Person {\\n        get manager(){return this.depaetment.manager;}\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u5c01\u88dd\u7528\u610f\u662f\u96b1\u85cf\u4e0d\u9700\u8981\u88ab\u6a21\u7d44\u77e5\u9053\u7cfb\u7d71\u7684\u5176\u4ed6\u90e8\u5206  \\n2. \u5176\u5be6\u5c31\u662f\u96b1\u85cf\u6b04\u4f4d\uff0c\u6e1b\u5c11\u7cfb\u7d71\u5167\u90e8\u900f\u660e\u5ea6  \\n3. \u5c07\u59d4\u8a17\u7684\u65b9\u6cd5\u5c01\u88dd\u8d77\u4f86\uff0c\u9054\u6210\u96b1\u85cf\u59d4\u8a17  \\n\\n## Remove Middle Man (\u79fb\u9664\u4e2d\u9593\u4eba)<a name=\\"RemoveMiddleMan\\"></a>\\nbefore\\n``` javascript\\n    manager = aPerson.manager;\\n\\n    class Person {\\n        get manager(){return this.depaetment.manager;}\\n    }\\n```\\nafter\\n``` javascript\\n    manager = aPerson.department.manager;\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u8a72\u6a21\u5f0f\u662fHide Delegate (\u96b1\u85cf\u59d4\u8a17)\u7684\u9006\u5411\u64cd\u4f5c  \\n2. \u7576\u59d4\u8a17\u65b9\u6cd5\u8d8a\u4f86\u8d8a\u591a\uff0c\u6703\u767c\u73fe\u6bcf\u65b0\u589e\u4e00\u500b\u59d4\u8a17\u65b9\u6cd5\u5c31\u8981\u591a\u4e00\u500b\u8f49\u50b3\u6a5f\u5236\uff0c\\n\u65b9\u6cd5\u4e00\u591a\u4fbf\u96e3\u4ee5\u7ba1\u7406,\u6545\u53ef\u4ee5\u9006\u5411\u64cd\u4f5c\u4f7f\u7528\u79fb\u9664\u4e2d\u9593\u4eba\u6a21\u5f0f\u4f86\u91cd\u69cb  \\n\\n\\n## Substitute Algorithm (\u66ff\u63db\u6f14\u7b97\u6cd5)<a name=\\"SubstituteAlgorithm\\"></a>\\nbefore\\n``` javascript\\n    function foundPerson (people) {\\n        for (let i=0; i< people.length; i++){\\n            if(people[i] === \'Don\'){\\n                return \'Don\';\\n            }\\n\\n            if(people[i] === \'John\'){\\n                return \'John\';\\n            }\\n\\n            if(people[i] === \'Sayaku\'){\\n                return \'Sayaku\';\\n            }\\n        }\\n        return \'\';\\n    }\\n```\\n\\nafter\\n``` javascript\\n    function foundPerson(people){\\n        const candidates = [\'Don\', \'John\', \'Sayaku\'];\\n        return people.find(p => candidates.includes(p)) || \'\';\\n    }\\n```\\n\\n\u8aaa\u660e\uff1a  \\n1. \u767c\u73fe\u91cd\u8907\u4e14\u67af\u71e5\u7684\u65b9\u6cd5\u53ef\u4ee5\u91cd\u69cb\u6210\u660e\u78ba\u6613\u61c2\u7684\u65b9\u6cd5\u6642\u4f7f\u7528  \\n2. \u56f0\u96e3\u5316\u4f5c\u7c21\u55ae"},{"id":"/2019/09/20/fujisan-ni-nobotta","metadata":{"permalink":"/blog/2019/09/20/fujisan-ni-nobotta","editUrl":"https://github.com/sayaku/sayaku.github.io/edit/main/blog/2019-09-20-fujisan-ni-nobotta/index.md","source":"@site/blog/2019-09-20-fujisan-ni-nobotta/index.md","title":"2019-Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u306b\u6311\u6226\uff01","description":"\u6bcf\u5e74\u4e00\u6b21\u7684\u65e5\u672c\u55ae\u8eca\u65c5\u904a\uff0c\u5728\u540c\u4e8b\u7684\u616b\u607f\u4e0b","date":"2019-09-20T23:56:12.000Z","formattedDate":"2019\u5e749\u670820\u65e5","tags":[],"readingTime":13.48,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2019-Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u306b\u6311\u6226\uff01","date":"2019-09-20 23:56:12 +0800"},"prevItem":{"title":"Study: Refactoring - Encapsulate","permalink":"/blog/2020/07/27/study-refactoring"}},"content":"![](fujisan/24.jpg)\\n\u6bcf\u5e74\u4e00\u6b21\u7684\u65e5\u672c\u55ae\u8eca\u65c5\u904a\uff0c\u5728\u540c\u4e8b\u7684\u616b\u607f\u4e0b\\n\\n\u9019\u6b21\u4f86\u9ad4\u9a57\u770b\u770b\u65e5\u672c\u7576\u5730\u7684\u55ae\u8eca\u6311\u6230\u8cfd\\n\\n\u4e5f\u662f\u53f0\u7063\u8eca\u53cb\u53bb\u65e5\u672c\u6bd4\u8cfd\u4e00\u5b9a\u6703\u53c3\u52a0\u7684\u6311\u6230\u8cfd- Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\\n\\n<font color=\\"#7b7b7b\\" size=\\"2\\">\u8a71\u8aaa...\u592a\u4e45\u6c92\u4f86\u66f4\u65b0\u7db2\u8a8c\uff0c\u767c\u73fe\u539f\u672c\u7684\u7684\u5716\u5e8a\u5df2\u7d93\u7d50\u675f\u71df\u696d\u6536\u6389\u4e86...  \\n\u5716\u7247\u5b8c\u5168\u6c92\u6709\u5099\u4efd...\u5e6b\uff31\uff31,\u61f6\u5f97\u91cd\u5beb...\u4e7e\u8106\u780d\u6389\u6587\u7ae0  \\n\u7136\u5f8cgit\u53e6\u958b\u5206\u652f\u91cd\u5bebBlog</font>\\n\\n\\n\x3c!--truncate--\x3e\\n\u7531\u65bc\u4e4b\u524d\u6709\u74b0\u904e\u65e5\u672c\u56db\u570b\uff0c\u95dc\u897f\u5730\u5340\u5305\u542b\u7435\u7436\u6e56\u4e00\u5468(\u62b1\u6b49\u6587\u7ae0\u5df2\u780d,\u61f6\u5f97\u91cd\u5beb)\\n\\n\u6240\u4ee5\u5e36\u8eca\u53bb\u65e5\u672c\u9a0e\u8eca\u7684\u7d93\u9a57\u5df2\u7d93\u7b97\u662f\u975e\u5e38\u8c50\u5bcc\uff08\u5439\u5653\u8c8c\uff09\\n\\n\u9019\u6b21\u56e0\u70ba\u8981\u53c3\u52a0\u6bd4\u8cfd\u4e0d\u662f\u5c6c\u65bc\u9577\u9014\u65c5\u884c\uff0c\u53c8\u662f\u7b2c\u4e00\u6b21\u5e36\u5c0f\u7da0\u53bb\u65e5\u672c\\n\\n\u6240\u4ee5\u9019\u6b21\u9078\u64c7\u79df\u7528\u55ae\u8eca\u822a\u7a7a\u7bb1\uff0c\u7562\u7adf\u9ad8\u50f9\u55ae\u8eca\u78b0\u50b7\u5212\u4e0d\u4f86\uff08\u78b0\u50b7\u5927\u6982\u4e5f\u6c92\u5fc3\u60c5\u7e7c\u7e8c\u65c5\u7a0b\u4e86\uff09\\n\\n![](fujisan/01.jpg)\\n\\n\u5927\u6982\u5c31\u9019\u9ebc\u5927\\n\\n![](fujisan/02.jpg)\\n\\n\u8eca\u5b50\u88dd\u7bb1\u5f8c\u9084\u6709\u7a7a\u9593\u9806\u4fbf\u585e\u4e86\u6253\u6c23\u7b52\u8ddf\u8eca\u8863\u8eca\u8932\u9084\u6709\u7dad\u4fee\u5de5\u5177\\n\\n![](fujisan/03.jpg)\\n\\n\u63a5\u4e0b\u4f86\u5e36\u53bb\u6a5f\u5834\uff0c\u4e00\u5982\u5f80\u5e38\u6c92\u904e\uff38\u5149\u6a5f\uff08\u4f46\u65e5\u672c\u7684\u6703\u904e\uff09\u5c31\u4e0a\u62d6\u8eca\u4e86\\n\\n\u7d93\u904e\u7d04\u83ab3\u5c0f\u6642\u7684\u98db\u884c\uff0c\u4eba\u751f\u7b2c\u4e8c\u6b21\u4f86\u5230\u6771\u4eac\u6210\u7530\u6a5f\u5834\uff08\u662f\u7684\u6211\u7b2c\u4e8c\u6b21\u4f86\u6771\u4eac\uff09\\n\\n![](fujisan/04.jpg)\\n\\n\u672c\u4f86\u8981\u76f4\u63a5\u642d\uff2a\uff32\u53bb\u65b0\u5bbf\uff0c\u5f8c\u4f86\u770b\u5230\u8a0a\u606f\u8aaa\u5c71\u624b\u7dda\u767c\u751f\u4eba\u8eab\u4e8b\u6545...\u53ea\u597d\u8f49\u5176\u4ed6\u4ea4\u901a\u5de5\u5177\\n\\n\u5728\u7b2c\u4e8c\u822a\u5ec8\u6709\u76f4\u9054\u65b0\u5bbf\u7684\u5df4\u58eb\uff083300\u5186/\u7247\u9053\uff09,\u55ae\u7a0b\u53ef\u4ee5\u5403\u98df\u3079\u653e\u984c\u4e86...\\n\\n\u662f\u8aaa\u4e00\u4e0b\u98db\u6a5f\u5c31\u4e00\u76f4\u4e0b\u96e8\uff0c\u5230\u4e86\u65b0\u5bbf\u4e5f\u662f\u5929\u6c23\u4e0d\u7f8e\u9e97\\n\\n\u96a8\u624b\u67e5\u4e86\u98df\u3079\u30ed\u30b0..\u767c\u73fe\u9644\u8fd1\u6709\u4e00\u9593\u5206\u6578\u9084\u4e0d\u932f\u9ad8\u7684\u62c9\u9eb5\\n\\n![](fujisan/05.jpg)\\n\\n\u306f\u3084\u3057\u7530\u3089\u3041\u9eba\\n\\n![](fujisan/06.jpg)\\n\\n\u771f\u7684\u597d\u5403\u5566\uff01\uff01\\n\\n\u9694\u5929\u76f4\u63a5\u5230\u65b0\u5bbf\u7ad9\u642d\u5bcc\u58eb\u6025\u884c\u7684\u30d0\u30b9\\n\\n\u76f4\u9054\u6cb3\u53e3\u6e56\\n\\n\u904b\u6c23\u883b\u597d\uff0c\u78b0\u5230\u53ef\u4ee5\u585e\u55ae\u8eca\u7bb1\u7684\u8eca\u5b50\uff0c\u4e0d\u7136\u807d\u805e\u4ee5\u524d\u7684\u8eca\u53cb\u5e38\u5e38\u4e0a\u4e0d\u4e86\\n\\n\u62b5\u9054\u6cb3\u53e3\u6e56\u5f8c\uff0c\u9084\u8981\u518d\u62d6\u8457\u7b28\u91cd\u7684\u55ae\u8eca\u7bb1\u8d702\u516c\u91cc\u5230\u4eca\u665a\u5165\u5bbf\u7684\u65c5\u9928...\\n\\n![](fujisan/07.jpg)\\n\\n\u65c5\u9928\u662f\u4e2d\u570b\u4eba\u958b\u7684\uff0c\u56e0\u70ba\u73fe\u5728\u662f\u6cb3\u53e3\u6e56\u7684\u65fa\u5b63\uff0c\u771f\u7684\u6c92\u6709\u534a\u5e74\u524d\u8a02\u623f\u6839\u672c\u8a02\u4e0d\u5230\\n\\n\u611f\u8b1d\u9019\u6b21\u8ddf\u6211\u540c\u884c\u7684\u540c\u4e8b-\u99ac\u514b\u6709\u8a02\u5230\u9019\u9593\uff08\u96d6\u7136\u8d70\u5f97\u9060\u4e86\u9ede\uff09\\n\\n\u4e0d\u7136\u5c31\u8981\u7761\u8eca\u7ad9\u4e86\\n\\n![](fujisan/08.jpg)\\n\\n\u65c5\u9928\u662f\u50b3\u7d71\u548c\u5ba4\uff0c\u305f\u305f\u307f\u7684\u85fa\u8349\u5473\u5f88\u6fc3\u5f88\u9999\\n\\n\u884c\u674e\u5b89\u7f6e\u597d\u5f8c\u4e0b\u53bb\u524d\u5ead\uff0c\u65c5\u9928\u4e3b\u4eba\u540c\u610f\u8b93\u6211\u5011\u5728\u9019\u908a\u7d44\u55ae\u8eca\\n\\n![](fujisan/09.jpg)\\n\\n\u7d44\u5b8c\u5f8c\u6e96\u5099\u53bb\u6703\u5834\u62ff\u53d6\u660e\u5929\u5bcc\u58eb\u5c71\u6311\u6230\u8cfd\u7684\u7269\u8cc7\u4ee5\u53ca\u865f\u78bc\u5e03\\n\\n![](fujisan/10.jpg)\\n\\n\u4eab\u53d7\u4e00\u4e0b\u9019\u77ed\u66ab\u7684\u967d\u5149\uff08\u56e0\u70ba\u4e4b\u5f8c\u5e7e\u5929\u5728\u4e0b\u96e8...\uff09\\n\\n\u65c5\u9928\u8ddd\u96e2\u6703\u5834\u5927\u698210\u516c\u91cc\uff0c\u722c\u5347\u7d04300\u516c\u5c3a\\n\\n\u6703\u5834\u5728\u5bcc\u58eb\u5c71\u7684\u5c71\u8173\u4e0b\\n\\n\u5230\u73fe\u5834\u5df2\u7d93\u4eba\u5c71\u4eba\u6d77\u4e86\\n![](fujisan/11.jpg)\\n\\n\u5927\u5bb6\u8eca\u5b50\u96a8\u4fbf\u9760\u8457\u5c31\u53bb\u62ff\u7269\u8cc7\u4e86\\n\\n\u96a8\u4fbf\u5e7e\u53f0\u90fd10\u842c\u4ee5\u4e0a\u7684\u540d\u8eca\u554a...\\n\\n\u771f\u4e0d\u6127\u662f\u65e5\u672c\u4eba\uff01\uff01\\n\\n\u7576\u7136\u4e5f\u6709\u5e7e\u500b\u53f0\u7063\u4eba\u7d44\u5718\u4f86\u6bd4\u8cfd\\n\\n![](fujisan/11-1.jpg)\\n\\n\u9818\u4e86\u865f\u78bc\u5e03\uff0c\u9019\u6578\u5b57\u4e0d\u932f\uff01\uff01\\n\\n![](fujisan/11-2.jpg)\\n\\n\u884c\u674e\u9001\u4e0a\u4e0b\u5c71\u5c08\u7528\u888b\uff0c\u4f60\u53ef\u4ee5\u9a0e\u8eca\u6642\u5148\u628a\u5916\u5957\u7b49\u884c\u674e\u653e\u88e1\u9762\\n\\n\u5230\u5c71\u9802\u7684\u6642\u5019\u7d71\u4e00\u9818\u53d6\uff08\u56e0\u70ba\u4eca\u5e74\u5c71\u9802\u771f\u7684\u51b7\uff09\\n\\n![](fujisan/11-3.jpg)\\n\\n\u6703\u5834\u6839\u672c\u5c31\u662f\u55ae\u8eca\u754c\u5927\u62dc\u62dc\\n\\n\u62ff\u5b8c\u7269\u8cc7\u5f8c\u5929\u6c23\u9084\u4e0d\u932f\uff0c\u628a\u63e1\u73fe\u5728\u7684\u597d\u5929\u6c23\u53bb\u7e5e\u7e5e\u6cb3\u53e3\u6e56\\n\\n![](fujisan/20.jpg)\\n\\n\u4f86\u5230\u5bcc\u58eb\u5fa1\u5ba4\u6d45\u9593\u795e\u793e\u7948\u79b1\u660e\u5929\u9a0e\u4e58\u9806\u5229\\n\\n\u9806\u4fbf\u6c42\u4e86\u5fa1\u6731\u5370\\n\\n![](fujisan/19.jpg)\\n![](fujisan/18.jpg)\\n\\n\u62dc\u5b8c\u5f8c\u5c31\u9006\u6642\u91dd\u74b0\u6e56\u5566\uff01\u70ba\u4ec0\u9ebc\u8981\u9006\u6642\u91dd\uff1f\\n\\n\u56e0\u70ba\u65e5\u672c\u9053\u8def\u9760\u5de6\u884c\u99db\uff0c\u9006\u6642\u91dd\u6703\u96e2\u6e56\u6bd4\u8f03\u8fd1\\n\\n\u5230\u4e86\u6cb3\u53e3\u6e56\u8457\u540d\u62cd\u651d\u9006\u5bcc\u58eb\u7684\u666f\\n\\n![](fujisan/13.jpg)\\n\\n\u4f46\u904b\u6c23\u5f88\u4e0d\u597d\uff0c\u5bcc\u58eb\u5c71\u88ab\u539a\u539a\u7684\u96f2\u906e\u4f4f\\n\\n\u5176\u5be6\u6211\u9019\u8f29\u5b50\u9084\u6c92\u770b\u904e\u5bcc\u58eb\u5c71\u7684\u672c\u5c0a...\\n\\n\u4e0d\u7136\u9019\u500b\u9ede\u53ef\u4ee5\u770b\u5230\u5bcc\u58eb\u5c71\u6642\u61c9\u8a72\u662f\u9577\u9019\u6a23\uff08\u53d6\u81eagoogle\u8857\u666f\uff09 \\n![](fujisan/13-1.png)\\n\\n![](fujisan/12.jpg)\\n\\n\u967d\u5149\u7051\u4e0b\u4f86,\u5176\u5be6\u6211\u6bd4\u8f03\u671f\u5f85\u96f2\u6563\u958b\u53ef\u4ee5\u770b\u898b\u5bcc\u58eb\u5c71\\n\\n![](fujisan/14.jpg)\\n![](fujisan/15.jpg)\\n\\n\u597d\u5427\uff01\u770b\u4e0d\u5230\u5c31\u662f\u770b\u4e0d\u5230...\\n\\n\u665a\u9910\u4e5f\u4e0d\u77e5\u8981\u5403\u5565\uff0c\u53ef\u80fd\u662f\u89c0\u5149\u5340\u7684\u95dc\u4fc2\\n\\n\u6771\u897f\u90fd\u9760\u676f\u8cb4\uff01\uff01\\n\\n\u53ea\u597d\u96a8\u4fbf\u627e\u9593\u9023\u9396\u5e97\u4f86\u5403\\n\\n![](fujisan/17.jpg)\\n\\n\u8eca\u5b50\u505c\u597d\uff0c\u525b\u597d\u9047\u5230\u4e00\u500b\u963f\u676f\u53f0\u7063\u4eba\u8ff7\u8def\\n\\n\u4e0d\u6703\u65e5\u6587\u7684\u963f\u676f\u807d\u5230\u6211\u5011\u505c\u8eca\u6642\u8b1b\u4e2d\u6587\u5c31\u597d\u50cf\u9047\u5230\u6551\u661f\\n\\n\u4ed6\u624b\u6a5f\u5feb\u6c92\u96fb\u53c8\u8207\u5718\u54e1\u5931\u806f\\n\\n\u9084\u597d\u540c\u4e8b\u99ac\u514b\u96a8\u8eab\u651c\u5e36\u5145\u96fb\u5c3f\u888b\u61c9\u61c9\u6025\u9806\u4fbf\u5e6b\u4ed6\u627e\u4ed6\u4f4f\u5bbf\u7684\u65c5\u9928\u600e\u9ebc\u8d70\\n\\n\u963f\u676f\u70ba\u4e86\u7b54\u8b1d\u6211\u5011\u8acb\u6211\u5011\u5403\u665a\u9910\\n\\n\u6211\u4e5f\u4e0d\u5ba2\u6c23\u9ede\u4e86\u5f88\u591a\uff08\u6211\u771f\u7684\u597d\u610f\u601d\uff01\uff09\\n\\n![](fujisan/16.jpg)\\n![](fujisan/16-1.jpg)\\n\\n\u5403\u5b8c\u5f8c\u6211\u53ea\u80fd\u8aaa\u963f\u676f\u4f60\u771f\u597d\uff0c\u4f60\u4e00\u5b9a\u6703\u9806\u5229\u627e\u5230\u56de\u53bb\u7684\u8def\u7684\uff01\uff01\\n\\n\u7136\u5f8c\u660e\u5929\u958b\u5fc3\u5b8c\u8cfd\\n\\n\u771f\u7684\u5403\u5f97\u5f88\u6f8e\u6e43\u5c31\u662f\u4e86XD\\n\\n\u5403\u5b8c\u56de\u65c5\u9928\u9806\u4fbf\u53bb\u8d85\u5e02\u5e36\u4e86\u4e00\u76d2\u5bb5\u591c\uff0c\u4f46\u624b\u8173\u592a\u6162\u6436\u4e0d\u5230\u534a\u984d\\n\\n![](fujisan/21.jpg)\\n\\n\u6b64\u6642\u665a\u4e0a\u7684\u6cb3\u53e3\u6e56\u7a81\u7136\u958b\u59cb\u4e0b\u8d77\u96e8\u4f86\\n\\n\u53ea\u597d\u7948\u79b1\u660e\u5929\u6bd4\u8cfd\u80fd\u5920\u597d\u5929\u6c23\\n\\n\u4f46\u901a\u5e38\u6703\u6709\u9019\u7a2e\u60f3\u6cd5\\n\\n\u8001\u5929\u723a\u5c31\u6703\u7d66\u4f60\u4e0b\u5230\u4e0d\u8981\u4e0d\u8981\u7684\\n\\n\u5929\u525b\u4eae...\u65c5\u9928\u9694\u58c1\u5e7e\u9593\u4f3c\u4e4e\u4e5f\u662f\u8eca\u53cb\\n\\n\u65e9\u65e9\u5c31\u51fa\u9580\u4e86\uff01\\n\\n\u5f80\u5916\u770b\u770b\u8def\u9762\\n\\n\u679c\u7136\u6211\u5fc3\u4e2d\u7684\u8001\u5929\u723a\u6c92\u8b93\u6211\u5931\u671b\\n\\n\u5730\u662f\u6fd5\u7684....\u4f46\u6c92\u4e0b\u96e8\\n\\n\u5f88\u597d\uff01\u5c31\u8d81\u9019\u6bb5\u7a7a\u64cb\u8d95\u5feb\u6bba\u5230\u6bd4\u8cfd\u6703\u5834\\n\\n![](fujisan/22.jpg)\\n\\n\u5230\u4e86\u6703\u5834\u767c\u73fe\u5176\u5be6\u6211\u5011\u7b97\u5f88\u665a\u5230\u4e86\\n\\n\u9023\u4e0a\u5c71\u884c\u674e\u5df4\u58eb\u90fd\u5df2\u7d93\u958b\u4e0a\u5c71\u53bb\u4e86...\\n\\n\u5176\u5be6\u81ea\u5df1\u7c21\u7ae0\u4e5f\u6c92\u4ed4\u7d30\u770b\u6e05\u695a\u884c\u674e\u914d\u9001\u6642\u9593...\u6028\u4e0d\u5f97\u4eba...\\n\\n\u958b\u8cfd\u524d\u958b\u59cb\u4e0b\u8d77\u96e8\u4f86\uff0c\u6c23\u6eab\u4e5f\u8b8a\u4f4e\u5f88\u591a\\n\\n\u5176\u5be6\u4e00\u76f4\u641e\u4e0d\u61c2\u70ba\u4f55\u9019\u500b\u6bd4\u8cfd\u8981\u8fa6\u5728\u65e5\u672c\u7684\u6885\u96e8\u5b63\u5462\uff1f\\n\\n![](fujisan/23.jpg)\\n\\n\u8868\u5b9a7:30\u51fa\u767c\uff0c\u7531\u65bc\u51fa\u767c\u4eba\u6578\u773e\u591a\uff08\u807d\u805e\u67091\u842c\u4eba\uff09\\n\\n\u6211\u88ab\u5b89\u6392\u5728\u7b2c19\u68af\u6b21\u51fa\u767c\uff0c\u5dee\u4e0d\u591a8:30\u624d\u8f2a\u5230\u6211\u5011\\n\\n\u8a71\u8aaa\u6211\u540c\u4e8b\u99ac\u514b\u7684\u68af\u6b21\u6bd4\u8f03\u524d\u9762\u65e9\u621130\u5206\u9418\u51fa\u767c\\n\\n\u5176\u5be6\u7b49\u5230\u51fa\u767c\u7684\u6642\u5019\u8eab\u9ad4\u5df2\u7d93\u5b8c\u5168\u51b7\u6389\u4e86\\n\\n![](fujisan/23-1.jpg)\\n\\n\u7d42\u65bc\u8f2a\u5230\u6211\u5011\u51fa\u767c\u4e86\\n\\n\u5bcc\u58eb\u5c71\u6311\u6230\u8cfd\\n\\n\u8d77\u9ede\u7531\u5bcc\u58eb\u5317\u9e93\u516c\u5712\u9678\u4e0a\u7af6\u6280\u5834\uff0c\u5230\u7d42\u9ede\u5bcc\u58eb\u5c71\u4e94\u5408\u76ee\uff08\u6a19\u9ad82305m\uff09\\n\\n\u5168\u957723.4km,\u7e3d\u722c\u53471200m,\u4ee5\u96e3\u5ea6\u4f86\u8aaa\u5927\u6982\u5c31\u662f\u53f0\u7063\u5b9c\u862d\u7684\u592a\u5e73\u5c71\u5dee\u4e0d\u591a\\n\\n\u74b0\u6cd5\u5761\u5ea6\u7b49\u7d1a\u662f\u6700\u9ad8\u7d1a\u7684\uff28\uff23\u7d1a\\n\\n\u5168\u7a0b\u9664\u4e86\u88dc\u7d66\u52a0\u6c34\u4e4b\u5916\u5c31\u6c92\u6709\u843d\u5730\u4e86\uff08\u6240\u4ee5\u5c31\u6c92\u6709\u9a0e\u4e58\u904e\u7a0b\u7684\u7167\u7247\u4e86\uff09\\n\\n\u662f\u8aaa\u5929\u5019\u60e1\u52a3\u6574\u8def\u8d77\u9727\u4e0b\u96e8\u6839\u672c\u770b\u4e0d\u5230\u4ec0\u9ebc\u666f\u8272\u5c31\u662f\u4e86\\n\\n\u597d\u4e0d\u5bb9\u6613\u5728\u9019\u60e1\u52a3\u53c8\u4f4e\u6eab\u7684\u5929\u5019\u7d42\u65bc\u9a0e\u4e0a\u7d42\u9ede\u5bcc\u58eb\u4e94\u5408\u76ee\\n\\n\u4e0a\u9762\u7684\u6eab\u5ea6\u53ea\u67099\u5ea6\uff0c\u56e0\u70ba\u4e0b\u96e8\u53c8\u5927\u98a8\u9ad4\u611f\u6eab\u5ea6\u5927\u69823~4\u5ea6\u5427\\n\\n![](fujisan/23-2.jpg)\\n\u5230\u7d42\u9ede\u5f8c\u96e8\u4e0b\u66f4\u5927\u4e86\\n\\n![](fujisan/25.jpg)  \\n\u5403\u500b\u51b0\u6dc7\u6dcb\u58d3\u58d3\u9a5a\\n\\n![](fujisan/26.jpg)\\n\u6709\u9ede\u5f8c\u6094\u6c92\u4f86\u9019\u500b\u795e\u793e\u84cb\u6731\u5370\\n\\n![](fujisan/24.jpg)\\n\u53c8\u4e00\u500b\u4eba\u751f\u6e05\u55ae\u9054\u6210\uff01\\n\\n\u5728\u9644\u8fd1\u8ce3\u5e97\u5403\u5b8c\u6771\u897f\u5f8c\u5c31\u8d95\u7dca\u4e0b\u5c71\u4e86\\n\\n\u4e0d\u7136\u5c71\u4e0a\u96e8\u8ddf\u9727\u8d8a\u4f86\u8d8a\u5927\uff0c\u6eab\u5ea6\u4e5f\u8d8a\u4f86\u8d8a\u4f4e\\n\\n\u4e0b\u5c71\u53ef\u4ee5\u9078\u64c7\u63a5\u99c1\u4e0b\u5c71\u6216\u662f\u81ea\u5df1\u9a0e\u4e0b\u5c71\\n\\n\u4e0b\u5c71\u4e5f\u662f\u5206\u68af\u6b21\uff0c\u7136\u5f8c\u4e0b\u5c71\u771f\u7684\u9760\u676f\u51b7....(\u5f8c\u6094\u6c92\u642d\u63a5\u99c1\u8eca)\\n\\n\u56de\u5230\u5c71\u8173\u7684\u8d77\u9ede\u6703\u6709\u71b1\u70cf\u9f8d\u9eb5\uff08\u4f46\u6211\u6c92\u770b\u5230\uff09\\n\\n\u56e0\u70ba\u6211\u6025\u5fd9\u53bb\u670d\u52d9\u53f0\u8fa6\u7406\u8b49\u660e\u60f3\u8aaa\u65e9\u9ede\u56de\u53bb\u6d17\u6fa1\\n\\n\u5b8c\u8cfd\u8b49\u660e\u7684\u90e8\u5206\\n\\n![](fujisan/27.jpg)\\n\\n\u6709\u5b8c\u8cfd\u7684\u4eba\u6703\u6709\u4e00\u500b\u91d1\u5c6c\u7684\u9f8d\u982d\u588a\u5708\uff08\u55ae\u8eca\u7684\u4e00\u500b\u96f6\u4ef6\uff09\\n\\n\u6c92\u6709\u734e\u724c\u53ea\u6709\u5b8c\u8cfd\u8b49\u660e\\n\\n\u7136\u5f8c\u90a3\u500b\u9f8d\u982d\u588a\u5708\u6709\u5206\\n\\n\u91d1\u74b0\uff1a65\u5206\u9418\u5167\u5b8c\u8cfd  \\n\u9280\u74b0\uff1a75\u5206\u9418\u5167\u5b8c\u8cfd  \\n\u9285\u74b0\uff1a90\u5206\u9418\u5167\u5b8c\u8cfd  \\n\u85cd\u74b0\uff1a\u7537\u5b50\u7d44\u5b8c\u8cfd  \\n\u7c89\u74b0\uff1a\u5973\u5b50\u7d44\u5b8c\u8cfd  \\n\\n\u672c\u5ee2\u7269\u9a0e\u4e86141\u5206\u9418...\u53ea\u80fd\u9818\u85cd\u74b0\\n\\n\u5927\u6703\u9084\u8aaa\u6b77\u5e74\u5b8c\u8cfd\u7387\u662f99% (\u6211\u958b\u59cb\u61f7\u7591\u9019\u500b\u8aaa\u6cd5\u4e86...)\\n\\n\u7b97\u4e86\uff01\u6211\u672c\u4f86\u5c31\u662f\u4f86\u8f15\u9b06\u9a0e\u7684\\n\\n\u9019\u6b21\u6311\u6230\u7684\u8def\u7dda\uff08\u4e0a\u5c71+\u4e0b\u5c71\uff09\\n\\n<iframe height=\'405\' width=\'590\' frameborder=\'0\' allowtransparency=\'true\' scrolling=\'no\' src=\'https://www.strava.com/activities/2435246405/embed/5237a9b224bb00a0d3aa3625acedcb90dc693fe0\'></iframe>\\n\\nRelive\u5f71\u7247-\u6211\u662f\u4e0d\u77e5\u9053\u90a3\u500b\u6700\u9ad8\u901f123km/h\u600e\u9ebc\u4f86\u7684XD\\n\\n<blockquote class=\\"embedly-card\\" data-card-controls=\\"0\\" data-card-key=\\"f1631a41cb254ca5b035dc5747a5bd75\\"><h4><a href=\\"https://www.relive.cc/view/vKv244Rxk46?r=embed-site\\">Relive \'\u5bcc\u58eb\u5c71\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\'</a></h4></blockquote>\\n<script async src=\\"https://cdn.embedly.com/widgets/platform.js\\" charset=\\"UTF-8\\"><\/script>\\n\\n\\n\u53e6\u5916\u5fc5\u9808\u88dc\u5145\u5f88\u91cd\u8981\u7684\u4e00\u9ede\\n\\n<font color=\\"#dd0000\\" size=\\"6\\">Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u9019\u500b\u6311\u6230\u8cfd\u5168\u7a0b\u7684\u88dc\u7d66\u53ea\u6709\\"\u6c34\\"</font>\\n\\n<font color=\\"#dd0000\\" size=\\"6\\">Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u9019\u500b\u6311\u6230\u8cfd\u5168\u7a0b\u7684\u88dc\u7d66\u53ea\u6709\\"\u6c34\\"</font>\\n\\n<font color=\\"#dd0000\\" size=\\"6\\">Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u9019\u500b\u6311\u6230\u8cfd\u5168\u7a0b\u7684\u88dc\u7d66\u53ea\u6709\\"\u6c34\\"</font>\\n\\n\\n\u5f88\u91cd\u8981,\u8b1b\u4e09\u904d!\\n\\n\u6c92\u932f\u5c31\u53ea\u6709\u6c34\uff0c\u6c92\u6709\u5176\u4ed6\u4efb\u4f55\u88dc\u7d66\uff0c\u7c21\u7ae0\u4e0a\u4e5f\u6c92\u5beb\uff0c\u6240\u4ee5\u57fa\u672c\u4e0a\u6211\u9a0e\u5230\u56db\u5408\u76ee\u6642\u5c31\u6c92\u529b\u4e86\\n\\n\u56e0\u70ba\u6211\u6c92\u5e36\u88dc\u7d66\u54c1\uff0c\u65e9\u9910\u53ea\u5403\u4e00\u500b\u83e0\u863f\u8ddf\u4e00\u676f\u5496\u5561\u5c31\u4e0a\u4e86\\n\\n\u7136\u5f8c\u56e0\u70ba\u6bd4\u8f03\u665a\u51fa\u767c\u7684\u95dc\u4fc2\\n\\n\u722c\u5230\u4e00\u534a\u5df2\u7d93\u6709\u4eba\u4e0b\u6ed1\u4e86\\n\\n\u800c\u4e14\u53c8\u5dee\u9ede\u88ab\u5225\u4eba\u4e82\u4e1f\u7684\u6c34\u58fa\u62cc\u5012\\n\\n\u6709\u5728\u9a0e\u8eca\u7684\u4eba\u61c9\u8a72\u77e5\u9053\u9019\u7a2e\u5fc3\u60c5\u6703\u5f88\u5dee\\n\\n\u96d6\u7136\u77e5\u9053\u5728\u570b\u5916\u9a0e\u8eca\u4e0d\u80fd\u8ddf\u53f0\u7063\u672c\u5730\u8cfd\u4e8b\u505a\u6bd4\u8f03\\n\\n\u4f46\u8001\u5be6\u8aaaMt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u5728\u9019\u65b9\u9762\u505a\u5f97\u4e26\u4e0d\u597d\\n\\n\u4e5f\u5fc5\u9808\u5f37\u8abf\u4e0d\u662f\u65e5\u672c\u4eba\u8fa6\u7684\u6d3b\u52d5\u5c31\u4e00\u5b9a\u5f88\u597d\\n\\n\u6211\u540c\u4e8b\u4e5f\u662f\u56e0\u70ba\u6c92\u6709\u88dc\u7d66\u9a0e\u5230\u56db\u5408\u76ee\u76f4\u63a5\u9032\u9910\u5ef3\u98fd\u9910\u4e00\u9813\u518d\u4e0a\u5c71\\n\\n\u4e0b\u5c71\u5f8c\u56de\u5230\u65c5\u9928\uff0c\u6574\u500b\u9a0e\u7684\u5f88\u72fc\u72fd\\n\\n![](fujisan/28.jpg)\\n\\n\u9084\u597d\u6211\u662f\u5e36\u92c1\u5408\u91d1\u8f2a\u7d44\u4f86\uff08\u4e0d\u7136\u9019\u7a2e\u60e1\u52a3\u5929\u6c23\u4e0b\u5761\u7528\u78b3\u7e96\u7dad\u8f2a\u7d44\u5f88\u50b7\uff09\\n\\n\u8f9b\u82e6\u4e86\u6211\u7684\u5c0f\u7da0\uff01\uff01\\n\\n\u56de\u5230\u65c5\u9928\u6c92\u4e8b\u5c31\u5148\u628a\u8eca\u62c6\u4e00\u62c6\u88dd\u56de\u8eca\u7bb1\\n\\n\u6e96\u5099\u660e\u5929\u56de\u5230\u6771\u4eac\\n\\n\u7136\u5f8c\u5728\u9019\u908a\u611f\u8b1d\u5728\u65c5\u9928\u6253\u5de5\u7684\u7576\u5730\u4f4f\u6c11-\u5c71\u4e2d\u5148\u751f\\n\\n\u8acb\u4ed6\u8f09\u6211\u5011\u8ddf\u8eca\u7bb1\u904b\u5230\u8eca\u7ad9\uff08\u6211\u53ef\u4e0d\u60f3\u5728\u96e8\u4e2d\u62d6\u8457\u8eca\u7bb1\u8d70\u5230\u8eca\u7ad9\uff09\\n\\n\u56de\u7a0b\u9014\u4e2d\uff0c\u5c71\u4e2d\u5148\u751f\u8aaa\u6211\u5011\u904b\u6c23\u5f88\u5dee\uff0c\u525b\u597d\u4f86\u7684\u9019\u5e7e\u5929\u90fd\u5728\u4e0b\u96e8\\n\\n![](fujisan/29.jpg)  \\n\u679c\u7136\u4e5f\u4e00\u5806\u4eba\u64e0\u5728\u6cb3\u53e3\u6e56\u7ad9\\n\\n\u96e8\u5929\u54ea\u4e5f\u53bb\u4e0d\u4e86\\n\\n![](fujisan/30.jpg)\\n\\n\u4e00\u6a23\u4e5f\u662f\u642d\u5bcc\u58eb\u6025\u884c\u7684\u30d0\u30b9\u56de\u5230\u65b0\u5bbf\\n\\n\u56de\u5230\u65b0\u5bbf\u4f9d\u7136\u5728\u4e0b\u96e8\\n\\n\u8d95\u7dca\u5230\u5165\u4f4f\u7684\u65c5\u9928\u653e\u884c\u674e\\n\\n\u623f\u9593\u4e00\u500b\u4eba\u4f4f\u5f88\u53ef\u4ee5\\n\\n![](fujisan/31.jpg)\\n\\n\u56e0\u70ba\u7b97\u662f\u883b\u5e38\u4f86\u65e5\u672c\u7684\u5176\u5be6\u4e5f\u6c92\u4ec0\u9ebc\u8cfc\u7269\u884c\u7a0b\\n\\n\u5c31\u96a8\u4fbf\u901b\u901b\\n\\n\u53bb\u795e\u793e\u53c3\u62dc\u84cb\u500b\u6731\u5370\\n\\n![](fujisan/32.jpg)\\n\\n\u665a\u4e0a\u6700\u5f8c\u4e00\u9910\u5c31\u7528\u65b0\u5bbf\u62c9\u9eb5\u540d\u5e97-\u98a8\u96f2\u5152\u505a\u70ba\u7d50\u675f\uff01\uff01\uff01\\n\\n![](fujisan/33.jpg)\\n\\n\u7136\u5f8c\u4eba\u751f\u6700\u6f1a\u5c31\u662f\\n\\n\u9694\u5929\u8981\u56de\u53f0\u7063\u5929\u6c23\u624d\u653e\u6674\\n\\n.....\u611f\u89ba\u662f\u5632\u7b11\u6211\u50bb\u554a.....\\n\\n![](fujisan/34.jpg)\\n\\n\u9019\u8d9f\u65c5\u884c\u53c8\u9054\u6210\u4e86\u4e00\u500b\u6210\u5c31\\n\\n\u4f86\u5230\u5bcc\u58eb\u5c71\uff0c\u722c\u4e0a\u5bcc\u58eb\u5c71\uff0c\u4f46\u537b\u6c92\u770b\u904e\u5bcc\u58eb\u5c71\\n\\n\u770b\u4f86\u6211\u771f\u7684\u6c92\u7de3\u4efd\u5462\uff01"}]}')}}]);