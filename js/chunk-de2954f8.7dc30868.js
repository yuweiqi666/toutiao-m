(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de2954f8"],{"25fe":function(t,e,n){},"332c":function(t,e){},"6b01":function(t,e,n){"use strict";n("fbaa8")},7775:function(t,e,n){"use strict";n("25fe")},"8cde":function(t,e,n){},"9c1e":function(t,e,n){"use strict";n("cd98")},cd98:function(t,e,n){},df59:function(t,e,n){"use strict";n("8cde")},eab1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-data"},[n("van-nav-bar",{attrs:{title:"个人信息","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),n("van-cell",{attrs:{"is-link":""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(" 头像 ")]),n("div",{attrs:{slot:"default"},slot:"default"},[n("van-image",{attrs:{width:"30",height:"30",src:t.userProfit.photo,round:"",fit:"cover"}})],1)]),n("van-cell",{attrs:{"is-link":"",title:"昵称",value:t.userProfit.name},on:{click:function(e){return t.showPopup("username")}}}),n("van-cell",{attrs:{"is-link":""},on:{click:function(e){return t.showPopup("gender")}}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._v(" 性别 ")]),n("div",{attrs:{slot:"default"},slot:"default"},[0==t.userProfit.gender?n("span",[t._v("男")]):1==t.userProfit.gender?n("span",[t._v("女")]):t._e()])]),n("van-cell",{attrs:{"is-link":"",title:"生日",value:t.userProfit.birthday},on:{click:function(e){return t.showPopup("birthday")}}}),n("van-popup",{ref:"vanPopup",staticClass:"bg",attrs:{id:"popupBottom",position:"bottom"},model:{value:t.popShow,callback:function(e){t.popShow=e},expression:"popShow"}},["username"==t.editItemShow?n("edit-name",{attrs:{username:t.userProfit.name},on:{closeEditPopup:t.handleCloseEditPopup}}):"gender"==t.editItemShow?n("edit-gender",{on:{closeEditPopup:t.handleCloseEditPopup}}):"birthday"==t.editItemShow?n("edit-birthday",{on:{closeEditPopup:t.handleCloseEditPopup}}):t._e()],1)],1)},i=[],o=n("1da1"),a=(n("96cf"),n("fed0")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-name"},[n("van-nav-bar",{attrs:{title:"昵称","left-text":"取消","right-text":"完成"},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("van-form",[n("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"7",placeholder:"请输入留言","show-word-limit":"",rules:[{required:!0,message:"名称必须为1~7个字符"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1)},c=[],s={methods:{onClickLeft:function(){this.$emit("closeEditPopup")},onClickRight:function(){}}},l=n("332c"),d=n.n(l),f={name:"EditName",mixins:[s],data:function(){return{rules:d.a}},props:{username:{type:String}},methods:{}},p=f,h=(n("9c1e"),n("2877")),m=Object(h["a"])(p,u,c,!1,null,"79222db2",null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-gender"},[n("van-nav-bar",{attrs:{title:"性别","left-text":"取消","right-text":"完成"},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1)},w=[],k={name:"EditGender",mixins:[s]},E=k,g=(n("7775"),Object(h["a"])(E,b,w,!1,null,"1ba43f54",null)),P=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-birthday"},[n("van-nav-bar",{attrs:{title:"生日","left-text":"取消","right-text":"完成"},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}})],1)},x=[],C={name:"EditBirthday",mixins:[s]},O=C,j=(n("6b01"),Object(h["a"])(O,_,x,!1,null,"2fb1d096",null)),S=j.exports,T={name:"EditData",data:function(){return{popShow:!1,userProfit:{},editItemShow:"",username:""}},components:{EditName:v,EditGender:P,EditBirthday:S},methods:{showPopup:function(t){var e=this;this.editItemShow=t,this.popShow=!0,this.$nextTick((function(){var n=e.$refs.vanPopup.$el;n.style.height="username"===t?"100%":"30%"}))},handleCloseEditPopup:function(){this.popShow=!1}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["f"])();case 2:n=e.sent,r=n.data,console.log("个人信息",r.data),t.userProfit=r.data;case 6:case"end":return e.stop()}}),e)})))()}},y=T,$=(n("df59"),Object(h["a"])(y,r,i,!1,null,"5b297871",null));e["default"]=$.exports},fbaa8:function(t,e,n){},fed0:function(t,e,n){"use strict";n.d(e,"i",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"j",(function(){return a})),n.d(e,"g",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"f",(function(){return p}));var r=n("b775"),i=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})},o=function(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})},a=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},u=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/channels"})},s=function(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:t})},l=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(t)})},d=function(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:t})},f=function(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})},p=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}}}]);
//# sourceMappingURL=chunk-de2954f8.7dc30868.js.map