(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/weixiujieguo/add-or-update"],{"0082":function(e,i,t){"use strict";t.r(i);var n=t("d1a5"),r=t("0b87");for(var u in r)"default"!==u&&function(e){t.d(i,e,(function(){return r[e]}))}(u);t("ece8");var a,o=t("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"279e8b42",null,!1,n["a"],a);i["default"]=s.exports},"0b87":function(e,i,t){"use strict";t.r(i);var n=t("f6e9"),r=t.n(n);for(var u in n)"default"!==u&&function(e){t.d(i,e,(function(){return n[e]}))}(u);i["default"]=r.a},"761d":function(e,i,t){},"85ac":function(e,i,t){"use strict";(function(e){t("90f4"),t("921b");n(t("66fd"));var i=n(t("0082"));function n(e){return e&&e.__esModule?e:{default:e}}e(i.default)}).call(this,t("543d")["createPage"])},d1a5:function(e,i,t){"use strict";var n,r=function(){var e=this,i=e.$createElement;e._self._c},u=[];t.d(i,"b",(function(){return r})),t.d(i,"c",(function(){return u})),t.d(i,"a",(function(){return n}))},ece8:function(e,i,t){"use strict";var n=t("761d"),r=t.n(n);r.a},f6e9:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,i,t,n,r,u,a){try{var o=e[u](a),s=o.value}catch(c){return void t(c)}o.done?i(s):Promise.resolve(s).then(n,r)}function a(e){return function(){var i=this,t=arguments;return new Promise((function(n,r){var a=e.apply(i,t);function o(e){u(a,n,r,o,s,"next",e)}function s(e){u(a,n,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b960"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{shiyanshihao:"",shiyanshimingcheng:"",tupian:"",shebeimingcheng:"",weixiujieguo:"",beizhu:"",riqi:"",yonghuming:"",userid:""},weixiujieguoOptions:[],weixiujieguoIndex:0,user:{},ro:{shiyanshihao:!1,shiyanshimingcheng:!1,tupian:!1,shebeimingcheng:!1,weixiujieguo:!1,beizhu:!1,riqi:!1,yonghuming:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var i=a(n.default.mark((function i(t){var r,u,a,o;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.getStorageSync("nowTable"),i.next=3,this.$api.session(r);case 3:if(u=i.sent,this.user=u.data,this.weixiujieguoOptions="修好,返厂,损坏".split(","),this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid),!t.id){i.next=14;break}return this.ruleForm.id=t.id,i.next=12,this.$api.info("weixiujieguo",this.ruleForm.id);case 12:u=i.sent,this.ruleForm=u.data;case 14:if(!t.cross){i.next=57;break}a=e.getStorageSync("crossObj"),i.t0=n.default.keys(a);case 17:if((i.t1=i.t0()).done){i.next=57;break}if(o=i.t1.value,"shiyanshihao"!=o){i.next=23;break}return this.ruleForm.shiyanshihao=a[o],this.ro.shiyanshihao=!0,i.abrupt("continue",17);case 23:if("shiyanshimingcheng"!=o){i.next=27;break}return this.ruleForm.shiyanshimingcheng=a[o],this.ro.shiyanshimingcheng=!0,i.abrupt("continue",17);case 27:if("tupian"!=o){i.next=31;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,i.abrupt("continue",17);case 31:if("shebeimingcheng"!=o){i.next=35;break}return this.ruleForm.shebeimingcheng=a[o],this.ro.shebeimingcheng=!0,i.abrupt("continue",17);case 35:if("weixiujieguo"!=o){i.next=39;break}return this.ruleForm.weixiujieguo=a[o],this.ro.weixiujieguo=!0,i.abrupt("continue",17);case 39:if("beizhu"!=o){i.next=43;break}return this.ruleForm.beizhu=a[o],this.ro.beizhu=!0,i.abrupt("continue",17);case 43:if("riqi"!=o){i.next=47;break}return this.ruleForm.riqi=a[o],this.ro.riqi=!0,i.abrupt("continue",17);case 47:if("yonghuming"!=o){i.next=51;break}return this.ruleForm.yonghuming=a[o],this.ro.yonghuming=!0,i.abrupt("continue",17);case 51:if("userid"!=o){i.next=55;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,i.abrupt("continue",17);case 55:i.next=17;break;case 57:this.styleChange();case 58:case"end":return i.stop()}}),i,this)})));function t(e){return i.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},riqiChange:function(e){this.ruleForm.riqi=e.target.value,this.$forceUpdate()},weixiujieguoChange:function(e){this.weixiujieguoIndex=e.target.value,this.ruleForm.weixiujieguo=this.weixiujieguoOptions[this.weixiujieguoIndex]},tupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.tupian=e.$base.url+"upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(n.default.mark((function e(){return n.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.userid){e.next=3;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("weixiujieguo",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("weixiujieguo",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),n=i.getMonth()+1,r=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(t,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};i.default=s}).call(this,t("543d")["default"])}},[["85ac","common/runtime","common/vendor"]]]);