(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{2910:function(e,t,n){},4033:function(e,t,n){"use strict";var r=n("2910"),a=n.n(r);a.a},"5a86":function(e,t,n){"use strict";n.r(t);var r=n("a131"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},8729:function(e,t,n){"use strict";n.r(t);var r=n("d117"),a=n("5a86");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("4033"),n("ab20");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"f8db6d6e",null,!1,r["a"],i);t["default"]=c.exports},a131:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,a,u,i){try{var o=e[u](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){u(i,r,a,o,c,"next",e)}function c(e){u(i,r,a,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var t=this;return i(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],a=e.getStorageSync("loginTable"),t.tableName=a,t.styleChange();case 4:case"end":return n.stop()}}),n)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.yonghuming||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){t.next=9;break}return e.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=12;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:return t.next=17,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 17:e.$utils.msgBack("注册成功");case 19:case"end":return t.stop()}}),t)})))()}}};t.default=o}).call(this,n("543d")["default"])},ab20:function(e,t,n){"use strict";var r=n("b06b"),a=n.n(r);a.a},b06b:function(e,t,n){},d117:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=[]},e624:function(e,t,n){"use strict";(function(e){n("0ca8");r(n("66fd"));var t=r(n("8729"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["e624","common/runtime","common/vendor"]]]);