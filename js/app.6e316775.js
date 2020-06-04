(function(e){function t(t){for(var n,i,c=t[0],d=t[1],s=t[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var d=a[c];0!==r[d]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19cd":function(e,t,a){"use strict";var n=a("82ab"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},c=i,d=a("2877"),s=a("6544"),l=a.n(s),u=a("7496"),p=Object(d["a"])(c,r,o,!1,null,null,null),f=p.exports;l()(p,{VApp:u["a"]});a("a434");var g=a("2f62");n["a"].use(g["a"]);var v=JSON.parse(localStorage.getItem("cards")),b=new g["a"].Store({state:{cards:v||[{name:"Name1",description:"description1"},{name:"Name2",description:"description2"}]},mutations:{addCard:function(e,t){e.cards.push(t),localStorage.setItem("cards",JSON.stringify(e.cards))},replaceCard:function(e,t){e.cards.splice(t.to,0,e.cards.splice(t.from,1)[0]),localStorage.setItem("cards",JSON.stringify(e.cards))}},actions:{},modules:{}}),m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-btn",{attrs:{to:"/add"}},[e._v("add")]),a("v-switch",{attrs:{label:"dragbble"},model:{value:e.draggble,callback:function(t){e.draggble=t},expression:"draggble"}}),a("v-row",{staticClass:"text-center"},e._l(e.cards,(function(t,n){return a("v-col",{key:n,attrs:{cols:"3"}},[a("v-card",{staticClass:"scroll",attrs:{height:"200",id:n,draggable:e.draggble},on:{dragstart:function(t){return e.dragStart(n,t)},dragover:function(e){e.preventDefault()},dragend:e.dragEnd,drop:function(t){return e.dragFinish(n)}}},[a("h1",[e._v(e._s(t.name))]),a("div",[e._v(e._s(t.description))])]),a("v-btn",{attrs:{text:"",color:"deep-purple accent-3"},on:{click:function(t){return e.openDialog(n)}}},[e._v("Просмотр")])],1)})),1),a("v-dialog",{attrs:{scrollable:"","max-width":"800"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.cards[e.openItem]?a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(e._s(e.cards[e.openItem].name))]),a("v-card-text",[e._v(e._s(e.cards[e.openItem].description))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("закрыть")])],1)],1):e._e()],1)],1)},_=[],x=a("5530"),w={name:"Dashboard",data:function(){return{draggble:!0,dragging:-1,openItem:-1,dialog:!1}},computed:Object(x["a"])({},Object(g["b"])(["cards"])),methods:{dragStart:function(e,t){this.draggble&&(t.dataTransfer.setData("index",this.id),this.dragging=e)},dragEnd:function(){this.dragging=-1},dragFinish:function(e){this.draggble&&this.$store.commit("replaceCard",{to:e,from:this.dragging})},openDialog:function(e){this.openItem=e,this.dialog=!0}}},y=w,O=(a("19cd"),a("8336")),V=a("b0af"),j=a("99d9"),C=a("62ad"),S=a("a523"),k=a("169a"),I=a("0fd9"),T=a("2fa4"),P=a("b73d"),$=Object(d["a"])(y,h,_,!1,null,null,null),D=$.exports;l()($,{VBtn:O["a"],VCard:V["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:C["a"],VContainer:S["a"],VDialog:k["a"],VRow:I["a"],VSpacer:T["a"],VSwitch:P["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",[a("v-text-field",{attrs:{label:"Название",placeholder:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-textarea",{attrs:{name:"input-7-1",label:"Описание",value:"",hint:"Hint text"},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)],1),a("v-btn",{attrs:{to:"/"}},[e._v("Отмена")]),a("v-btn",{on:{click:e.add}},[e._v("Добавить")])],1)},J=[],N=(a("a4d3"),a("e01a"),a("b0c0"),{name:"Edit",data:function(){return{name:"",description:""}},computed:Object(x["a"])({},Object(g["b"])(["cards"])),methods:{add:function(){var e={name:this.name,description:this.description};this.$store.commit("addCard",e),console.log("added"),this.$router.push("/")}}}),M=N,A=a("8654"),F=a("a844"),B=Object(d["a"])(M,E,J,!1,null,null,null),H=B.exports;l()(B,{VBtn:O["a"],VCol:C["a"],VContainer:S["a"],VRow:I["a"],VTextField:A["a"],VTextarea:F["a"]}),n["a"].use(m["a"]);var R=[{path:"/",name:"Home",component:D},{path:"/add",name:"add",component:H}],q=new m["a"]({mode:"history",base:"/",routes:R}),z=q,G=a("f309");n["a"].use(G["a"]);var K=new G["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:b,router:z,vuetify:K,render:function(e){return e(f)}}).$mount("#app")},"82ab":function(e,t,a){}});
//# sourceMappingURL=app.6e316775.js.map