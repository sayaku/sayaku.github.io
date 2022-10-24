"use strict";(self.webpackChunksayaku=self.webpackChunksayaku||[]).push([[131],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=r,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7209:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),i=["components"],o={title:"Study: Refactoring - Encapsulate",date:"2020-07-27 18:58:57 +0800"},p=void 0,s={permalink:"/blog/2020/07/27/study-refactoring",editUrl:"https://github.com/sayaku/sayaku.github.io/edit/main/blog/2020-07-27-study-refactoring/index.md",source:"@site/blog/2020-07-27-study-refactoring/index.md",title:"Study: Refactoring - Encapsulate",description:"\u8b80\u66f8\u6703\u5167\u5bb9-\u7b2c\u4e03\u7bc0\uff1aEncapsulate\uff08\u5c01\u88dd\uff09",date:"2020-07-27T18:58:57.000Z",formattedDate:"2020\u5e747\u670827\u65e5",tags:[],readingTime:5.685,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Study: Refactoring - Encapsulate",date:"2020-07-27 18:58:57 +0800"},nextItem:{title:"2019-Mt.\u5bcc\u58eb\u30d2\u30eb\u30af\u30e9\u30a4\u30e0\u306b\u6311\u6226\uff01",permalink:"/blog/2019/09/20/fujisan-ni-nobotta"}},c={authorsImageUrls:[]},u=[{value:'Encapsilate Record (\u5c01\u88dd\u7d00\u9304)<a name="EncapsilateRecord"></a>',id:"encapsilate-record-\u5c01\u88dd\u7d00\u9304",level:2},{value:'Encapsulate Collection (\u5c01\u88dd\u96c6\u5408)<a name="EncapsulateCollection"></a>',id:"encapsulate-collection-\u5c01\u88dd\u96c6\u5408",level:2},{value:'Replace Primitive with Object (\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6)<a name="ReplacePrimitivewithObject"></a>',id:"replace-primitive-with-object-\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6",level:2},{value:'Replace Temp with Query (\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f)<a name="ReplaceTempwithQuery"></a>',id:"replace-temp-with-query-\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f",level:2},{value:'Extract Class (\u63d0\u53d6\u985e\u5225) <a name="ExtractClass"></a>',id:"extract-class-\u63d0\u53d6\u985e\u5225-",level:2},{value:'Inline Class (\u5167\u806f\u985e\u5225)<a name="InlineClass"></a>',id:"inline-class-\u5167\u806f\u985e\u5225",level:2},{value:'Hide Delegate (\u96b1\u85cf\u59d4\u8a17)<a name="HideDelegate"></a>',id:"hide-delegate-\u96b1\u85cf\u59d4\u8a17",level:2},{value:'Remove Middle Man (\u79fb\u9664\u4e2d\u9593\u4eba)<a name="RemoveMiddleMan"></a>',id:"remove-middle-man-\u79fb\u9664\u4e2d\u9593\u4eba",level:2},{value:'Substitute Algorithm (\u66ff\u63db\u6f14\u7b97\u6cd5)<a name="SubstituteAlgorithm"></a>',id:"substitute-algorithm-\u66ff\u63db\u6f14\u7b97\u6cd5",level:2}],m={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8b80\u66f8\u6703\u5167\u5bb9-\u7b2c\u4e03\u7bc0\uff1aEncapsulate\uff08\u5c01\u88dd\uff09",(0,l.kt)("br",{parentName:"p"}),"\n","\u8a72\u7ae0\u7bc0\u63d0\u5230\u91cd\u69cb\u7684\u5c01\u88dd\u6709\u4ee5\u4e0b9\u7a2e\u65b9\u6cd5  "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#EncapsilateRecord"},"Encapsulate Record (\u5c01\u88dd\u7d00\u9304)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#EncapsulateCollection"},"Encapsulate Collection (\u5c01\u88dd\u96c6\u5408)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#ReplacePrimitivewithObject"},"Replace Primitive with Object (\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#ReplaceTempwithQuery"},"Replace Temp with Query (\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#ExtractClass"},"Extract Class (\u63d0\u53d6\u985e\u5225) "),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#InlineClass"},"Inline Class (\u5167\u806f\u985e\u5225)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#HideDelegate"},"Hide Delegate (\u96b1\u85cf\u59d4\u8a17)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#RemoveMiddleMan"},"Remove Middle Man (\u79fb\u9664\u4e2d\u9593\u4eba)"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"#SubstituteAlgorithm"},"Substitute Algorithm (\u66ff\u63db\u6f14\u7b97\u6cd5)"),"   "),(0,l.kt)("h2",{id:"encapsilate-record-\u5c01\u88dd\u7d00\u9304"},"Encapsilate Record (\u5c01\u88dd\u7d00\u9304)",(0,l.kt)("a",{name:"EncapsilateRecord"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    organization = {name: 'sayaku', country: 'Taiwan'};\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Organization {\n        constructor(data){\n            this._name= data.name;\n            this._country= data.country;\n        }\n\n        get name(){return this._name;}\n        set name(arg){this._name=arg;}\n        get country(){this._country;}\n        set country(arg){this._country=arg;}\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7528class\u5305\u88dd\u7d00\u9304\u8b8a\u6578\uff0c\u4e26\u4e14\u5b9a\u7fa9\u5b58\u53d6\u7684getter, setter  "),(0,l.kt)("li",{parentName:"ol"},"getter\u56de\u50b3\u539f\u672c\u8cc7\u6599\u7684\u6df1\u526f\u672c\u800c\u4e0d\u662f\u56de\u50b3\u539f\u59cb\u7d00\u9304  "),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u69cb\u6642\u6ce8\u91cdsetter\u66f4\u65b0\u7684\u90e8\u5206  "),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u7fa9\u66f4\u8a9e\u610f\u5316\u7684\u51fd\u5f0f  ")),(0,l.kt)("h2",{id:"encapsulate-collection-\u5c01\u88dd\u96c6\u5408"},"Encapsulate Collection (\u5c01\u88dd\u96c6\u5408)",(0,l.kt)("a",{name:"EncapsulateCollection"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Person {\n        get courses() { return this._courses;}\n        set courses(aList) { this._courses=aList;}\n    }\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Person {\n        get courses() { return this._courses.slice();}\n        addCourse(aCourse) { ... }\n        removeCourse(aCourse) { ... }\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8207\u524d\u9762Encapsilate Record \u6982\u5ff5\u76f8\u540c\uff0c\u4f46\u5c01\u88dd\u7684\u5c0d\u8c61\u662f\u96c6\u5408  "),(0,l.kt)("li",{parentName:"ol"},"\u65b0\u589e\u5c0d\u96c6\u5408\u64cd\u4f5c\uff08\uff23\uff32\uff35\uff24\u65b0\u589e\u67e5\u8a62\u4fee\u6539\u79fb\u9664\uff09\u7684\u51fd\u5f0f  "),(0,l.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u96c6\u5408\u4f7f\u7528\u4ee3\u7406\u6216\u662f\u526f\u672c  ")),(0,l.kt)("h2",{id:"replace-primitive-with-object-\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6"},"Replace Primitive with Object (\u5c07\u57fa\u672c\u5143\u7d20\u8f49\u63db\u6210\u7269\u4ef6)",(0,l.kt)("a",{name:"ReplacePrimitivewithObject"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    order.filter(o = 'high' === o.priority || 'rush' === o.priority);\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    order.filter(o = o.priority.higherThan(new Priority('normal')));\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c0d\u7269\u4ef6\u7684\u5c6c\u6027\u8f49\u63db\u6210\u7528\u7269\u4ef6\u7684\u5f62\u5f0f\u8868\u793a  "),(0,l.kt)("li",{parentName:"ol"},"\u8a9e\u610f\u5316getter,setter\u51fd\u5f0f\u53d6\u500b\u4e0d\u6613\u8b93\u4eba\u8aa4\u89e3\u7684\u540d\u7a31,\u4f8b\u5982\uff1a\u56de\u50b3\u7684\u503c\u662ftoString()\u800c\u4e0d\u662f\u539f\u672c\u9810\u671f\u7684\u5c6c\u6027,\u90a3\u51fd\u5f0f\u540d\u7a31\u5efa\u8b70\u5728\u5f8c\u7db4\u52a0\u4e0atoString,\u8a9e\u610f\u4e0a\u6bd4\u8f03\u4e0a\u662f\u7d22\u53d6\u5b57\u4e32\u800c\u4e0d\u662f\u539f\u672c\u7684\u5c6c\u6027  "),(0,l.kt)("li",{parentName:"ol"},"\u8b93\u7a0b\u5f0f\u78bc\u66f4\u6e05\u695a\u7684\u8868\u9054\u76ee\u7684  ")),(0,l.kt)("h2",{id:"replace-temp-with-query-\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f"},"Replace Temp with Query (\u5c07\u66ab\u6642\u8b8a\u6578\u8f49\u63db\u6210\u67e5\u8a62\u51fd\u5f0f)",(0,l.kt)("a",{name:"ReplaceTempwithQuery"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    const basePrice = this.quantity * this._itemPrice;\n\n    if (basePrice > 1000)\n        return basePeice * .95;\n    else\n        return basePrice * .98;\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    get basePrice() { this.quantity * this._itemPrice;}\n    ...\n    if (basePrice > 1000)\n        return basePeice * .95;\n    else\n        return basePrice * .98;\n\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u66ab\u6642\u7684\u8b8a\u6578\u53ef\u4ee5\u5132\u5b58\u67d0\u4e9b\u7a0b\u5f0f\u78bc\u7684\u503c\uff0c\u5c07\u4e4b\u8a9e\u610f\u5316\u70ba\u552f\u8b80\u51fd\u5f0f  "),(0,l.kt)("li",{parentName:"ol"},"\u78ba\u5b9a\u8a72\u8b8a\u6578\u88ab\u4f7f\u7528\u6642\u4e0d\u6703\u7522\u751f\u4e0d\u540c\u7684\u503c\uff0c\u4e5f\u5c31\u662f\u6700\u521d\u4ed6\u53ea\u6703\u88ab\u8ce6\u503c\u4e00\u6b21  ")),(0,l.kt)("h2",{id:"extract-class-\u63d0\u53d6\u985e\u5225-"},"Extract Class (\u63d0\u53d6\u985e\u5225) ",(0,l.kt)("a",{name:"ExtractClass"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Person {\n        get officeAreaCode() {return this._officeAreaCode;}\n        get officeNumber() {return this._officeNumber;}\n    }\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Person {\n        get officeAreaCode() {return this._telephoneNumber.areaCode;}\n        get officeNumber() {return this._telephoneNumber.number;}\n    }\n\n    class Telephone {\n        get areaCode(){return this._areaCode;}\n        get number(){return this._number;}\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7576\u985e\u5225\u88e1\u5df2\u7d93\u8907\u96dc\u5230\u9700\u8981\u62c6\u89e3\u529f\u80fd\u4e26\u5206\u9580\u5225\u985e\u6642\u4f7f\u7528  "),(0,l.kt)("li",{parentName:"ol"},"\u985e\u5225\u5fc5\u9808\u662f\u500b\u6e05\u6670\u7684\u62bd\u8c61\uff0c \u53ea\u61c9\u8a72\u8655\u7406\u4e00\u4e9b\u660e\u78ba\u7684\u529f\u80fd  "),(0,l.kt)("li",{parentName:"ol"},"\u4e00\u62c6\u89e3\u51fa\u4f86\u7684\u529f\u80fd\u5206\u6210\u4e00\u500b\u500b\u5b50\u985e\u5225\uff0c\u4e26\u8207\u7236\u985e\u5225\u7522\u751f\u9023\u7d50  ")),(0,l.kt)("h2",{id:"inline-class-\u5167\u806f\u985e\u5225"},"Inline Class (\u5167\u806f\u985e\u5225)",(0,l.kt)("a",{name:"InlineClass"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\n    class Person {\n        get officeAreaCode() {return this._telephoneNumber.areaCode;}\n        get officeNumber() {return this._telephoneNumber.number;}\n    }\n\n    class Telephone {\n        get areaCode(){return this._areaCode;}\n        get number(){return this._number;}\n    }\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    class Person {\n        get officeAreaCode() {return this._officeAreaCode;}\n        get officeNumber() {return this._officeNumber;}\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u662fExtract Class (\u63d0\u53d6\u985e\u5225)\u7684\u53cd\u5411\u64cd\u4f5c  "),(0,l.kt)("li",{parentName:"ol"},"\u9047\u5230\u6c92\u4ec0\u9ebc\u7528\u9014\u4e14\u4e0d\u8a72\u5b58\u5728\u7684\u5b50\u985e\u5225\uff0c\u4f7f\u7528inline class\u5408\u4f75\u4e4b  "),(0,l.kt)("li",{parentName:"ol"},"\u901a\u5e38\u662f\u7528\u65bc\u91cd\u69cb\u5f8c\uff0c\u529f\u80fd\u88ab\u62c6\u5206\u5f8c\u79fb\u9664\u6c92\u7528\u5b50\u985e\u5225\u7684\u5be6\u4f5c  ")),(0,l.kt)("h2",{id:"hide-delegate-\u96b1\u85cf\u59d4\u8a17"},"Hide Delegate (\u96b1\u85cf\u59d4\u8a17)",(0,l.kt)("a",{name:"HideDelegate"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    manager = aPerson.department.manager;\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    manager = aPerson.manager;\n\n    class Person {\n        get manager(){return this.depaetment.manager;}\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c01\u88dd\u7528\u610f\u662f\u96b1\u85cf\u4e0d\u9700\u8981\u88ab\u6a21\u7d44\u77e5\u9053\u7cfb\u7d71\u7684\u5176\u4ed6\u90e8\u5206  "),(0,l.kt)("li",{parentName:"ol"},"\u5176\u5be6\u5c31\u662f\u96b1\u85cf\u6b04\u4f4d\uff0c\u6e1b\u5c11\u7cfb\u7d71\u5167\u90e8\u900f\u660e\u5ea6  "),(0,l.kt)("li",{parentName:"ol"},"\u5c07\u59d4\u8a17\u7684\u65b9\u6cd5\u5c01\u88dd\u8d77\u4f86\uff0c\u9054\u6210\u96b1\u85cf\u59d4\u8a17  ")),(0,l.kt)("h2",{id:"remove-middle-man-\u79fb\u9664\u4e2d\u9593\u4eba"},"Remove Middle Man (\u79fb\u9664\u4e2d\u9593\u4eba)",(0,l.kt)("a",{name:"RemoveMiddleMan"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    manager = aPerson.manager;\n\n    class Person {\n        get manager(){return this.depaetment.manager;}\n    }\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    manager = aPerson.department.manager;\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a72\u6a21\u5f0f\u662fHide Delegate (\u96b1\u85cf\u59d4\u8a17)\u7684\u9006\u5411\u64cd\u4f5c  "),(0,l.kt)("li",{parentName:"ol"},"\u7576\u59d4\u8a17\u65b9\u6cd5\u8d8a\u4f86\u8d8a\u591a\uff0c\u6703\u767c\u73fe\u6bcf\u65b0\u589e\u4e00\u500b\u59d4\u8a17\u65b9\u6cd5\u5c31\u8981\u591a\u4e00\u500b\u8f49\u50b3\u6a5f\u5236\uff0c\n\u65b9\u6cd5\u4e00\u591a\u4fbf\u96e3\u4ee5\u7ba1\u7406,\u6545\u53ef\u4ee5\u9006\u5411\u64cd\u4f5c\u4f7f\u7528\u79fb\u9664\u4e2d\u9593\u4eba\u6a21\u5f0f\u4f86\u91cd\u69cb  ")),(0,l.kt)("h2",{id:"substitute-algorithm-\u66ff\u63db\u6f14\u7b97\u6cd5"},"Substitute Algorithm (\u66ff\u63db\u6f14\u7b97\u6cd5)",(0,l.kt)("a",{name:"SubstituteAlgorithm"})),(0,l.kt)("p",null,"before"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    function foundPerson (people) {\n        for (let i=0; i< people.length; i++){\n            if(people[i] === 'Don'){\n                return 'Don';\n            }\n\n            if(people[i] === 'John'){\n                return 'John';\n            }\n\n            if(people[i] === 'Sayaku'){\n                return 'Sayaku';\n            }\n        }\n        return '';\n    }\n")),(0,l.kt)("p",null,"after"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"    function foundPerson(people){\n        const candidates = ['Don', 'John', 'Sayaku'];\n        return people.find(p => candidates.includes(p)) || '';\n    }\n")),(0,l.kt)("p",null,"\u8aaa\u660e\uff1a  "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u767c\u73fe\u91cd\u8907\u4e14\u67af\u71e5\u7684\u65b9\u6cd5\u53ef\u4ee5\u91cd\u69cb\u6210\u660e\u78ba\u6613\u61c2\u7684\u65b9\u6cd5\u6642\u4f7f\u7528  "),(0,l.kt)("li",{parentName:"ol"},"\u56f0\u96e3\u5316\u4f5c\u7c21\u55ae")))}k.isMDXComponent=!0}}]);