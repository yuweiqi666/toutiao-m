(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-755754f8"],{3771:function(e,t,n){"use strict";n("3c41")},"3c41":function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("van-nav-bar",{attrs:{title:"注册 / 登录","left-arrow":""},on:{"click-left":function(t){return e.$router.back()}}}),n("van-form",{ref:"loginForm",attrs:{"validate-first":"","show-error":!1,"show-error-message":!1}},[n("van-field",{attrs:{name:"mobile","left-icon":"shouji iconfont","icon-prefix":"toutiao",placeholder:"请输入手机号",rules:e.fromRules.mobileRule},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),n("van-field",{attrs:{name:"code","left-icon":"yanzhengma iconfont","icon-prefix":"toutiao",placeholder:"请输入验证码",rules:e.fromRules.codeRule},scopedSlots:e._u([{key:"button",fn:function(){return[n("van-button",{staticClass:"send-btn",attrs:{size:"mini",type:"default",round:""},on:{click:e.handleSendCode}},[e._v("发送验证码")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),n("div",{staticClass:"login-btn-wrapper"},[n("van-button",{attrs:{type:"info",block:""},on:{click:e.handleLogin}},[e._v("登录")])],1),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"account"},[n("p",[e._v("测试账号 / 万能验证码")]),n("p",[e._v("13911111111 / 246810")]),n("p",[e._v("13611111111 / 246810")]),n("p",[e._v("13922222222 / 246810")])])}],a=n("1da1"),c=(n("96cf"),n("fed0")),s=function(e){var t=60;e.target.disabled=!0;var n=function(){if("0 s"===e.target.innerText)return t=60,e.target.innerText="发送验证码",e.target.disabled=!1,clearInterval(r),!1;t--,e.target.innerText=t+" s"};n();var r=setInterval(n,1e3)},u=/^1[3456789]\d{9}$/,i=function(e){return u.test(e)},l=[{required:!0,message:"请输入手机号"},{validator:i,message:"手机号格式有误"}],d=[{required:!0,message:"请输入验证码"}],f={mobileRule:l,codeRule:d},p={name:"login",data:function(){return{user:{mobile:"",code:""},fromRules:f}},methods:{handleLogin:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.loginForm.validate();case 3:return e.$toast.loading({message:"登录中...",forbidClick:!0,duration:0}),t.prev=4,t.next=7,Object(c["i"])(e.user);case 7:n=t.sent,r=n.data,console.log("请求返回",r),e.$toast.success("登陆成功"),e.$store.commit("removeAcaheView","layout"),e.$store.commit("setUser",r.data),e.$router.push(e.$route.query.redirect||"/"),t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](4),console.log("登陆失败",t.t0),e.$toast.fail("登陆失败 手机号或验证码错误");case 20:t.next=25;break;case 22:t.prev=22,t.t1=t["catch"](0),t.t1[0]&&(console.log(t.t1,"err"),o=t.t1[0].message,e.$toast({message:o,position:"top"}));case 25:case"end":return t.stop()}}),t,null,[[0,22],[4,16]])})))()},handleSendCode:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$refs.loginForm.validate("mobile");case 3:return s(e),n.prev=4,n.next=7,Object(c["h"])(t.user.mobile);case 7:r=n.sent,console.log("验证码返回",r),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](4),t.$toast({message:"发送验证码失败，请稍后再试",position:"top"});case 14:n.next=21;break;case 16:n.prev=16,n.t1=n["catch"](0),console.log(n.t1,"err"),o=n.t1.message,t.$toast({message:o,position:"top"});case 21:case"end":return n.stop()}}),n,null,[[0,16],[4,11]])})))()}}},m=p,v=(n("3771"),n("2877")),b=Object(v["a"])(m,r,o,!1,null,"0663875e",null);t["default"]=b.exports},fed0:function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"j",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"f",(function(){return p}));var r=n("b775"),o=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:e})},a=function(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(e)})},c=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})},s=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})},u=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/channels"})},i=function(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/channels",data:e})},l=function(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/channels/".concat(e)})},d=function(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:e})},f=function(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})},p=function(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}}}]);
//# sourceMappingURL=chunk-755754f8.6aeee351.js.map