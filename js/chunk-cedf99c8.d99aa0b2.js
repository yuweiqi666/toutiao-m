(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cedf99c8"],{"5eed":function(t,s,e){},"6f29":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"chat"},[e("van-nav-bar",{attrs:{title:"小智同学","left-arrow":""},on:{"click-left":function(s){return t.$router.back()}}}),e("van-list",{staticClass:"content"},t._l(t.msgList,(function(s,n){return e("van-cell",{key:n,staticClass:"msgItem"},[e("div",{attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(s)+" ")]),e("div",{attrs:{slot:"default"},slot:"default"},[t._v(" "+t._s(s)+" ")])])})),1),e("van-cell",{staticClass:"field-bottom"},[e("div",{attrs:{slot:"title"},slot:"title"},[e("van-field",{attrs:{placeholder:"请输入消息"},model:{value:t.msg,callback:function(s){t.msg=s},expression:"msg"}})],1),e("div",{staticClass:"send-btn",attrs:{slot:"right-icon"},slot:"right-icon"},[e("van-button",{attrs:{type:"primary"},on:{click:t.sendMsg}},[t._v("发送")])],1)])],1)},a=[],l={name:"chat",data:function(){return{msg:"",msgList:[]}},methods:{sendMsg:function(){console.log("chatText",this.msg)}}},i=l,c=(e("bb16"),e("2877")),o=Object(c["a"])(i,n,a,!1,null,"612e825a",null);s["default"]=o.exports},bb16:function(t,s,e){"use strict";e("5eed")}}]);
//# sourceMappingURL=chunk-cedf99c8.d99aa0b2.js.map