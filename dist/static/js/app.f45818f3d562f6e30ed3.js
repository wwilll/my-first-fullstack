webpackJsonp([1],{Iqfu:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),i=s("bOdI"),a=s.n(i),n={data:function(){return{title:"登录",account:"",name:"",password:"",type:"log",showName:!1,regOrSub:"注册",LogOrSub:"登录",rutrueInfo:"",loginLock:!1}},mounted:function(){},watch:{showName:{handler:function(t){t?(this.regOrSub="提交并登录",this.title="注册",this.LogOrSub="登录(已锁定)"):(this.regOrSub="注册",this.title="登录",this.LogOrSub="登录")},deep:!0}},methods:{reg:function(){var t=this;if(this.rutrueInfo="",this.showName){var e=this.account&&!/^\s+$/.test(this.account),s=this.name&&!/^\s+$/.test(this.name),o=this.password&&!/^\s+$/.test(this.password);if(e&&s&&o){this.$ajax.post("/api/createAccount",{account:this.account,name:this.name,password:this.password}).then(function(e){2==e.data.status?(t.rutrueInfo="注册成功:",alert("注册成功"),t.$emit("switchingPage",e.data.account)):3==e.data.status&&(t.rutrueInfo="注册失败:该用户已存在",t.account="")}).catch(function(t){alert("找不到服务器或服务器未启动"),console.log(t)})}else this.rutrueInfo="请将信息填写完整"}else this.showName=!0},login:function(){var t=this;if(this.showName)return confirm("您正在注册，确认已有账号返回登录吗？")?(this.showName=!1,this.title="登录",this.rutrueInfo="",this.account="",void(this.password="")):void 0;var e=this.account&&!/^\s+$/.test(this.account),s=this.password&&!/^\s+$/.test(this.password);if(e&&s){var o={account:this.account,password:this.password};this.$ajax.get("/api/loginAccount",{params:o}).then(function(e){1==e.data.status?(t.rutrueInfo="登录成功",t.account="",t.name="",t.password="",t.$emit("switchingPage",e.data.account)):0==e.data.status&&(t.rutrueInfo="用户名或密码错误或无此人")}).catch(function(e){alert("找不到服务器或服务器未启动"),t.account="",t.password="",console.log(e)})}else this.rutrueInfo="用户名或密码不能为空"}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[t._m(0),t._v(" "),s("h1",{domProps:{textContent:t._s(t.title)}}),t._v(" "),s("p",{staticClass:"rutrueInfo"},[t._v(t._s(t.rutrueInfo))]),t._v(" "),s("div",{staticClass:"login-top"},[s("div",{staticClass:"login-ic"},[s("i"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),t._v(" "),s("div",{staticClass:"clear"})]),t._v(" "),t.showName?s("div",{staticClass:"login-ic"},[s("i"),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"请输入姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("div",{staticClass:"clear"})]):t._e(),t._v(" "),s("div",{staticClass:"login-ic"},[s("i",{staticClass:"icon"}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("div",{staticClass:"clear"})]),t._v(" "),s("div",{staticClass:"log-bwn"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.regOrSub,expression:"regOrSub"}],staticClass:"mr20",attrs:{type:"submit"},domProps:{value:t.regOrSub},on:{click:t.reg,input:function(e){e.target.composing||(t.regOrSub=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.LogOrSub,expression:"LogOrSub"}],attrs:{type:"submit",disabled:t.loginLock},domProps:{value:t.LogOrSub},on:{click:t.login,input:function(e){e.target.composing||(t.LogOrSub=e.target.value)}}})])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top-login"},[e("span",[e("img",{attrs:{src:s("Ws+V"),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"copy"},[e("a",[this._v("© 2018 XXXXXX")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"des"},[this._v("由于github无法挂载动态网站，数据请求会失败，详见"),e("a",{staticStyle:{color:"yellow"},attrs:{href:"https://github.com/wwilll/my-first-fullstack/blob/master/README.md"}},[this._v("演示截图")]),e("br"),this._v("本登录测试demo使用技术为："),e("br"),this._v("vuejs+axios+node+express+mongodb\r\n  主要展示了一个B/S结构的系统运行的大致流程"),e("br"),this._v("具体思路为：登录模块基础逻辑检测并向后台请求数据，收到响应数据后存储至localstorage，\r\n  刷新不丢失数据，退出可清除本地用户数据")])}]};var c=s("VU/8")(n,r,!1,function(t){s("Iqfu")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forum"},[s("h1",[t._v(t._s(t.account))]),t._v(" "),s("h1",[t._v("欢迎登录!")]),t._v(" "),s("button",{staticClass:"exit",on:{click:t.exitLogin}},[t._v("退出登录")])])},staticRenderFns:[]};var M,l=(M={name:"App",data:function(){return{loginOrNot:!0,userAcconut:"",items:[{userAcconut:"",loginOrNot:!0}]}},components:{login:c,forum:s("VU/8")({props:["account"],methods:{exitLogin:function(){this.$emit("switchingPage","exit")}}},u,!1,function(t){s("sGo4")},null,null).exports},watch:{},mounted:function(){if(!window.localStorage)return alert("浏览器不支持localstorage"),!1;this.storage.getItem("account")?(this.items.userAcconut=this.storage.getItem("account"),"true"==this.storage.getItem("loginOrNot")?this.loginOrNot=!0:this.loginOrNot=!1):this.loginOrNot=!0}},a()(M,"watch",{}),a()(M,"methods",{switchingPage:function(t){"exit"===t?(this.storage.removeItem("account"),this.storage.removeItem("loginOrNot"),this.loginOrNot=!0):(this.storage.setItem("account",t),this.storage.setItem("loginOrNot",!1),this.loginOrNot=!1,this.items.userAcconut=t)}}),M),b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.loginOrNot?s("login",{on:{switchingPage:t.switchingPage}}):t._e(),t._v(" "),t.loginOrNot?t._e():s("forum",{attrs:{account:t.items.userAcconut},on:{switchingPage:t.switchingPage}})],1)},staticRenderFns:[]};var m=s("VU/8")(l,b,!1,function(t){s("OUzq")},null,null).exports,g=s("/ocq");o.a.use(g.a);var A=new g.a({routes:[{path:"/",name:"Login",component:c}]}),h=s("mtWM"),f=s.n(h);o.a.prototype.$ajax=f.a,o.a.config.productionTip=!1,o.a.prototype.storage=window.localStorage,new o.a({el:"#app",router:A,components:{App:m},template:"<App/>"})},OUzq:function(t,e){},"Ws+V":function(t,e){t.exports="data:image/png;base64,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"},sGo4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f45818f3d562f6e30ed3.js.map