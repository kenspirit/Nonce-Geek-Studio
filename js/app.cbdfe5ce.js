(function(t){function e(e){for(var a,r,i=e[0],o=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);p&&p(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s={app:0},c=[];function i(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-32736bca":"1fbf713c","chunk-45e4d800":"fab429dd","chunk-c677454e":"47000574","chunk-da7c901e":"c2b1c2f3"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-32736bca":1,"chunk-45e4d800":1,"chunk-c677454e":1,"chunk-da7c901e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-32736bca":"2491aa7d","chunk-45e4d800":"bb999e12","chunk-c677454e":"5d79ce10","chunk-da7c901e":"73fc88f9"}[t]+".css",s=o.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],p.parentNode.removeChild(p),n(c)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}s[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"099d":function(t,e,n){},"0fe5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("8bbf"),r=n.n(a),s=n("f23d"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TopBar"),n("Navs"),n("div",{staticClass:"page"},[n("router-view")],1),n("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-bar"},[n("div",{staticClass:"logo"},[n("div",{staticClass:"nonce"},[t._v("NoNcE")]),n("div",{staticClass:"geek-studio"},[t._v("GEEK STUDIO")])])])}],l={name:"TopBar"},f=l,p=(n("c872"),n("2877")),d=Object(p["a"])(f,o,u,!1,null,"4936072e",null),v=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navs"},t._l(t.$router.options.routes,(function(e){return n("router-link",{key:e.path,staticClass:"nav",attrs:{to:e.path}},[t._v(t._s(e.meta.title))])})),1)},m=[],_={name:"Navs"},b=_,C=(n("ce55"),Object(p["a"])(b,h,m,!1,null,"02e9ac29",null)),g=C.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("span",{staticClass:"copyright"},[t._v("© 2021")]),n("span",{staticClass:"project-name"},[t._v("NONCE GEEK STUDIO.")]),n("span",{staticClass:"all-rights"},[t._v("All rights reserved")])])}],k={name:"Footer"},O=k,S=(n("62ee"),Object(p["a"])(O,E,y,!1,null,"468f2485",null)),w=S.exports,j={components:{TopBar:v,Navs:g,Footer:w}},x=j,$=(n("5c0b"),Object(p["a"])(x,c,i,!1,null,null,null)),T=$.exports,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6389")),N=n.n(A),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro"},[t._m(0),n("div",{staticClass:"section"},[n("div",{staticClass:"section-name"},[n("center",[t._v("我们的认知")])],1),n("p",{staticClass:"para"},[t._v("公链领域中， Ethereum、Substrate、Avalanche 等公链框架在成为下一区块链框架的道路上前行。")]),n("p",{staticClass:"para"},[t._v("联盟链领域中，FISCO BCOS 等联盟链框架在成为下一代区块链框架的道路上前行。")]),n("p",{staticClass:"para"},[t._v("在下一代区块链框架这件事上，我们难以预测未来。")]),n("p",{staticClass:"para"},[t._v("我们认为，相对而言，「下一代区块链基础设施」的未来更加明晰。")]),n("p",{staticClass:"para"},[t._v("下一代区块链基础设施将具备如下特征：")]),t._m(1),n("p",{staticClass:"para"},[t._v("与Ethereum、Substrate等公链、FISCO BCOS 等联盟链兼容。")]),t._m(2),n("p",{staticClass:"para"},[t._v("函数式编程与区块链更配。")]),t._m(3),n("p",{staticClass:"para"},[t._v("多个公链将会共用一套基础设施！典型的例子：Metamask。")]),t._m(4),n("p",{staticClass:"para"},[t._v("有了工具箱，我们才能构建出 Amazing 的产品。")])]),n("div",{staticClass:"section"},[n("div",{staticClass:"section-name"},[n("center",[t._v("原则")])],1),n("p",{staticClass:"para"},[t._v("在构建下一代区块链基础设施的时候，我们遵循如下的「Principles」：")]),t._m(5),n("p",{staticClass:"para"},[t._v("我们不会为了迎合热点去随便成立一个项目。有时候看似我们的项目追上了热点，其实是因为我们的战略方向刚好和热点一致：）。")]),t._m(6),n("p",{staticClass:"para"},[t._v("我们构建的区块链基础设施可能在现在是「反共识」的。例如很多公链开发者认为联盟链是伪命题，但我们认为基础设施兼容联盟链和公链是必要的。")]),t._m(7),n("p",{staticClass:"para"},[t._v("就像巴菲特认为假设一生只投资二十次。同样的，我们公布项目的时候也会非常谨慎！我们只公布我们认为极具价值的且我们会100%投入的项目！")])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"main"},[t._v("Nonce Geek Studio")]),n("div",{staticClass:"sub"},[t._v("——构建下一代区块链基础设施")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("超强通用型")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("函数式编程焕发生命力")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("下一代区块链基础设施是区块链世界的重要组成部分")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("给上层的无限想象与无限商业空间提供支撑")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("不迎合热点")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("可能反共识")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",{staticClass:"list"},[n("b",[t._v("谨慎")])])])}],I={name:"Intro",data:function(){return{}}},F=I,L=(n("d2ff"),Object(p["a"])(F,P,B,!1,null,"488c1a00",null)),D=L.exports;r.a.use(N.a);var M=[{path:"/",name:"Intro",component:D,meta:{title:"Introduction"}},{path:"/taishang",name:"TaiShang",component:function(){return n.e("chunk-32736bca").then(n.bind(null,"3746"))},meta:{title:"TaiShang Series"}},{path:"/dapp",name:"DApp",component:function(){return n.e("chunk-c677454e").then(n.bind(null,"b04e"))},meta:{title:"Web3.0 dApp Camp"}},{path:"/buidlers",name:"Buidlers",component:function(){return n.e("chunk-45e4d800").then(n.bind(null,"7b7e"))},meta:{title:"Buidlers"}},{path:"/about",name:"About",component:function(){return n.e("chunk-da7c901e").then(n.bind(null,"f820"))},meta:{title:"About"}}],G=new N.a({routes:M}),K=G,U=n("5880"),V=n.n(U);r.a.use(V.a);var q=new V.a.Store({state:{},mutations:{},actions:{},modules:{}});n("202f");r.a.config.productionTip=!1,r.a.use(s["a"]),new r.a({router:K,store:q,render:function(t){return t(T)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"5aa2":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"62ee":function(t,e,n){"use strict";n("099d")},6389:function(t,e){t.exports=VueRouter},7624:function(t,e,n){"use strict";n.r(e);var a=n("f942"),r=n.n(a);n.d(e,"CloseCircleFill",(function(){return r.a}));var s=n("44b9"),c=n.n(s);n.d(e,"LeftCircleOutline",(function(){return c.a}));var i=n("e150"),o=n.n(i);n.d(e,"RightCircleOutline",(function(){return o.a}))},"8bbf":function(t,e){t.exports=Vue},"9c0c":function(t,e,n){},c32d:function(t,e){t.exports=moment},c872:function(t,e,n){"use strict";n("0fe5")},ce55:function(t,e,n){"use strict";n("f99f")},d2ff:function(t,e,n){"use strict";n("5aa2")},f99f:function(t,e,n){}});