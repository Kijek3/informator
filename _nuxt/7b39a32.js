(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{470:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("16ab5ffe",content,!0,{sourceMap:!1})},476:function(t,e,r){"use strict";r(470)},477:function(t,e,r){var n=r(18)(!1);n.push([t.i,".with-background[data-v-f4fd3f90]{background-repeat:no-repeat;background-position:50%;background-size:cover}",""]),t.exports=n},478:function(t,e,r){"use strict";r(4),r(7),r(10),r(11);var n=r(1),c=(r(24),r(5),r(28),r(58),r(170),r(16),r(32),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(34),r(29),r(6),r(69),r(231),r(2)),o=r(49),l=r(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),j=h.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(j)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=y.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],c=w(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),y.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},506:function(t,e,r){"use strict";r.r(e);var n=r(56),c={computed:{drawer:Object(n.d)("ui/drawer"),background_img:function(){return this.$img("/images/uj_novum_blue.jpg",{fit:"inside",quality:50,width:1500,height:1500})},uj_logo_img:function(){return this.$img("/images/uj_white.png",{fit:"inside",quality:80,width:200,height:200})}}},o=(r(476),r(37)),l=r(43),f=r.n(l),d=r(233),h=r(215),v=r(478),m=r(451),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"fill-height"},[r("v-card",{staticClass:"fill-height",attrs:{flat:"",tile:"",dark:"",color:"#005ca7"}},[r("v-row",{staticClass:"py-5 d-flex align-content-center flex-wrap fill-height with-background",style:'background-image: url("'+t.background_img+'");'},[r("v-col",{staticClass:"text-center"},[r("div",[r("img",{staticClass:"mb-2",attrs:{src:t.uj_logo_img,height:"150rem",alt:"Collegium Novum"}}),t._v(" "),r("h1",{staticClass:"text-h2"},[t._v(t._s(t.$t("studentguide")))]),t._v(" "),r("h2",{staticClass:"text-h5"},[t._v(t._s(t.$t("ssuj")))]),t._v(" "),r("v-btn",{staticClass:"mt-4 hidden-lg-and-up",attrs:{outlined:"","x-large":""},on:{click:function(e){t.drawer=!0}}},[t._v("Spis treści")])],1)])],1)],1)],1)}),[],!1,null,"f4fd3f90",null);e.default=component.exports;f()(component,{VBtn:d.a,VCard:h.a,VCol:v.a,VRow:m.a})}}]);