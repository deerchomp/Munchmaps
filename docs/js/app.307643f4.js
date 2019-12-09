(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/serve-vue-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),s=i.n(n);s.a},2666:function(t,e,i){},"2fc3":function(t,e,i){"use strict";var n=i("6916"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("food-card")],1)},a=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[t.errorStr?n("div",[t._v("\n  Sorry, but the following error\n  occurred: "+t._s(t.errorStr)+"\n")]):t._e(),t.isHidden?n("div",[t.loading?n("img",{staticClass:"fixed fixed--center",attrs:{src:i("cf1c")}}):n("div",[t.current?n("div",{staticClass:"fixed fixed--center",staticStyle:{"z-index":"3"}},[t.isVisible?n("Vue2InteractDraggable",{staticClass:"rounded-borders card card--one",attrs:{"interact-out-of-sight-x-coordinate":500,"interact-max-rotation":15,"interact-x-threshold":200,"interact-y-threshold":200},on:{draggedRight:t.right,draggedLeft:t.left}},[n("div",{staticStyle:{height:"100%"}},[n("img",{staticClass:"rounded-borders",attrs:{src:t.current.image_url}}),n("div",{staticClass:"text"},[n("h2",{staticClass:"text-3xl"},[t._v(t._s(t.current.name))]),n("i",{staticClass:"text-xl"},[t._v("Distance: "+t._s((t.current.distance/1609).toFixed(2))+" (mi)")])])])]):t._e()],1):t._e(),t.next?n("div",{staticClass:"rounded-borders card card--two fixed fixed--center",staticStyle:{"z-index":"2"}},[n("div",{staticStyle:{height:"100%"}},[n("img",{staticClass:"rounded-borders",attrs:{src:t.next.image_url}}),n("div",{staticClass:"text"},[n("h2",{staticClass:"text-3xl"},[t._v(t._s(t.next.name))]),n("i",{staticClass:"text-xl"},[t._v("Distance: "+t._s((t.next.distance/1609).toFixed(2))+" (mi)")])])])]):t._e(),n("button",{staticClass:"bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-8 m-2 rounded text-2xl fixed fixed--center",attrs:{onclick:"location.reload();"}},[t._v("Refresh")])])]):n("div",[n("button",{staticClass:"bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-8 m-2 rounded text-2xl",on:{click:t.callApi}},[t._v("Let's Munch!")]),n("div",{staticClass:"flex flex-row justify-center"},[n("img",{staticClass:"py-2 px-4",attrs:{src:i("9b6d")}})])])])},o=[],c=i("66b6"),l=i("bc3a"),d=i.n(l),u=new n["a"],f={name:"SwipeableCards",components:{Vue2InteractDraggable:c["Vue2InteractDraggable"]},data:function(){return{myJson:[],loading:!0,errored:!0,isVisible:!0,index:0,location:null,gettingLocation:!1,errorStr:null,isHidden:!1,radius:1609}},created:function(){var t=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){t.gettingLocation=!1,t.location=e}),(function(e){t.gettingLocation=!1,t.errorStr=e.message})):this.errorStr="Geolocation is not available."},computed:{current:function(){return this.myJson.businesses[this.index]},next:function(){return this.myJson.businesses[this.index+1]}},mounted:function(){var t=this;u.$on("i-got-clicked",(function(e){t.radius=e}))},methods:{callApi:function(){var t=this;this.isHidden=!0,d.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search"),{headers:{Authorization:"Bearer uK5jXy6Dqs7d0YzLK_2tV0DT1bQK5Q-PihFW13vzdmQ7cU4gIkXBuzhtMpyEPhq3d7kLo-RhCw_Kx4GiEMHQDB7ZrbCy3EQP5zZW_HDNkQ6O1n0E_U6CJMXUUtykXXYx"},params:{term:"restaurants",latitude:this.location.coords.latitude,longitude:this.location.coords.longitude,radius:this.radius,open_now:!0}}).then((function(e){var i,n,s;for(t.myJson=e.data,s=t.myJson.businesses.length-1;s>0;s--)i=Math.floor(Math.random()*(s+1)),n=t.myJson.businesses[s],t.myJson.businesses[s]=t.myJson.businesses[i],t.myJson.businesses[i]=n})).catch((function(t){console.log(t)})).finally((function(){t.loading=!1}))},right:function(){var t=this,e="http://maps.google.com/?q=",i=this.current.location.address1;window.open(e+i,"_blank"),setTimeout((function(){return t.isVisible=!1}),200),setTimeout((function(){t.index++,t.isVisible=!0}),300)},left:function(){var t=this;setTimeout((function(){return t.isVisible=!1}),200),setTimeout((function(){t.index++,t.isVisible=!0}),300)}}},m=f,p=(i("2fc3"),i("2877")),v=Object(p["a"])(m,r,o,!1,null,"6d2cb2ed",null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-row justify-between px-16 py-2 items-center"},[n("Slide",{attrs:{disableOutsideClick:"",width:"175"}},[n("div",{staticClass:"block items-center"},[n("h1",{staticClass:"text-4xl items-center mr-8"},[t._v("Distance")]),n("div",{staticClass:"mt-4"},[n("div",[n("ul",[n("label",{staticClass:"inline flex items-center"},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],staticClass:"form-radio",attrs:{type:"radio",name:"distance",value:"800"},domProps:{checked:t._q(t.radius,"800")},on:{change:[function(e){t.radius="800"},t.emitGlobalClickEvent]}}),n("span",{staticClass:"ml-2"},[t._v("4 Blocks")])])]),n("br"),n("label",{staticClass:"inline flex items-center"},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],staticClass:"form-radio",attrs:{type:"radio",name:"distance",value:"1609"},domProps:{checked:t._q(t.radius,"1609")},on:{change:[function(e){t.radius="1609"},t.emitGlobalClickEvent]}}),n("span",{staticClass:"ml-2"},[t._v("1 Mile")])])]),n("br"),n("label",{staticClass:"inline flex items-center"},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],staticClass:"form-radio",attrs:{type:"radio",name:"distance",value:"3200"},domProps:{checked:t._q(t.radius,"3200")},on:{change:[function(e){t.radius="3200"},t.emitGlobalClickEvent]}}),n("span",{staticClass:"ml-2"},[t._v("2 Miles")])])]),n("br"),n("label",{staticClass:"inline flex items-center"},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],staticClass:"form-radio",attrs:{type:"radio",name:"distance",value:"8000"},domProps:{checked:t._q(t.radius,"8000")},on:{change:[function(e){t.radius="8000"},t.emitGlobalClickEvent]}}),n("span",{staticClass:"ml-2"},[t._v("5 Miles")])])]),n("br"),n("label",{staticClass:"inline flex items-center"},[n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.radius,expression:"radius"}],staticClass:"form-radio",attrs:{type:"radio",name:"distance",value:"16000"},domProps:{checked:t._q(t.radius,"16000")},on:{change:[function(e){t.radius="16000"},t.emitGlobalClickEvent]}}),n("span",{staticClass:"ml-2"},[t._v("10 Miles")])])]),n("br")])])])])]),n("h1",{staticClass:" ml-8 text-orange-700",staticStyle:{"text-shadow":"1px 1px black","font-size":"84px"},attrs:{id:"center"}},[t._v("Munchmaps")]),n("img",{staticStyle:{height:"100px",width:"100px"},attrs:{src:i("973b"),alt:"BurgerLogo"}})],1),n("div",{staticClass:"bg-gray-800",staticStyle:{"padding-top":".1rem","padding-bottom":".1rem"}}),n("br")])},b=[],x=i("db0f"),y={name:"Header",components:{Slide:x["Slide"]},data:function(){return{radius:1609}},methods:{emitGlobalClickEvent:function(){u.$emit("i-got-clicked",this.radius)}}},C=y,_=(i("a740"),Object(p["a"])(C,g,b,!1,null,null,null)),w=_.exports,k=(i("6a5a"),{name:"app",components:{Header:w,FoodCard:h}}),S=k,O=(i("034f"),Object(p["a"])(S,s,a,!1,null,null,null)),P=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"64a9":function(t,e,i){},6916:function(t,e,i){},"6a5a":function(t,e,i){},"973b":function(t,e,i){t.exports=i.p+"img/burgerLogo.63f04f69.png"},"9b6d":function(t,e,i){t.exports=i.p+"img/phone_map.71efdf59.png"},a740:function(t,e,i){"use strict";var n=i("2666"),s=i.n(n);s.a},cf1c:function(t,e,i){t.exports=i.p+"img/loading.5572838d.gif"}});
//# sourceMappingURL=app.307643f4.js.map