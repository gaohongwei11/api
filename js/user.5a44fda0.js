(self["webpackChunkvue_antd_pro"]=self["webpackChunkvue_antd_pro"]||[]).push([[378],{46053:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[t("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[t("a-tab-pane",{key:"tab1",attrs:{tab:e.$t("user.login.tab-login-credentials")}},[e.isLoginError?t("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:e.$t("user.login.message-invalid-credentials")}}):e._e(),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{initialValue:"admin",rules:[{required:!0,message:e.$t("user.userName.required")},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              {initialValue: 'admin', rules: [{ required: true, message: $t('user.userName.required') }, { validator: handleUsernameOrEmail }], validateTrigger: 'change'}\n            ]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.username.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{initialValue:"admin",rules:[{required:!0,message:e.$t("user.password.required")}],validateTrigger:"blur"}],expression:"[\n              'password',\n              {initialValue: 'admin', rules: [{ required: true, message: $t('user.password.required') }], validateTrigger: 'blur'}\n            ]"}],attrs:{size:"large",placeholder:e.$t("user.login.password.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),t("a-tab-pane",{key:"tab2",attrs:{tab:e.$t("user.login.tab-login-mobile")}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:e.$t("user.login.mobile.placeholder")}],validateTrigger:"change"}],expression:"['mobile', {rules: [{ required: true, pattern: /^1[34578]\\d{9}$/, message: $t('user.login.mobile.placeholder') }], validateTrigger: 'change'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{staticClass:"gutter-row",attrs:{span:16}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:e.$t("user.verification-code.required")}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: $t('user.verification-code.required') }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),t("a-col",{staticClass:"gutter-row",attrs:{span:8}},[t("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1)],1)],1),t("a-form-item",[t("a-checkbox",{directives:[{name:"decorator",rawName:"v-decorator",value:["rememberMe",{valuePropName:"checked"}],expression:"['rememberMe', { valuePropName: 'checked' }]"}]},[e._v(e._s(e.$t("user.login.remember-me")))]),t("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[e._v(e._s(e.$t("user.login.forgot-password")))])],1),t("a-form-item",{staticStyle:{"margin-top":"24px"}},[t("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v(e._s(e.$t("user.login.login")))])],1),t("div",{staticClass:"user-login-other"},[t("span",[e._v(e._s(e.$t("user.login.sign-in-with")))]),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"alipay-circle"}})],1),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"taobao-circle"}})],1),t("a",[t("a-icon",{staticClass:"item-icon",attrs:{type:"weibo-circle"}})],1),t("router-link",{staticClass:"register",attrs:{to:{name:"register"}}},[e._v(e._s(e.$t("user.login.signup")))])],1)],1),e.requiredTwoStepCaptcha?t("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},a=[],i=r(23711),n=(r(64043),r(60228),r(2568)),o=r.n(n),l=function(){var e=this,t=this,r=t._self._c;return r("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),r("template",{slot:"footer"},[r("div",{style:{textAlign:"center"}},[r("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),r("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),r("a-spin",{attrs:{spinning:t.stepLoading}},[r("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[r("div",{staticClass:"step-form-wrapper"},[t.stepLoading?r("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),r("br"),t._v("请稍后")]):r("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),r("br"),t._v("输入 6 位动态码")]),r("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[r("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk.apply(null,arguments)}}})],1),r("p",{staticStyle:{"text-align":"center"}},[r("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},u=[],c={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(r,s){r?(e.stepLoading=!1,e.$emit("error",{err:r})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:s})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},d=c,p=r(1001),g=(0,p.Z)(d,l,u,!1,null,"4a462ef6",null),m=g.exports,h=r(20629),f=r(50613),v=r(77681),b={components:{TwoStepCaptcha:m},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){var e=this;(0,v.Ws)({}).then((function(t){e.requiredTwoStepCaptcha=t.result.stepCode})).catch((function(){e.requiredTwoStepCaptcha=!1}))},methods:(0,i.Z)((0,i.Z)({},(0,h.nv)(["Login","Logout"])),{},{handleUsernameOrEmail:function(e,t,r){var s=this.state,a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;a.test(t)?s.loginType=0:s.loginType=1,r()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state,a=this.customActiveKey,n=this.Login;s.loginBtn=!0;var l="tab1"===a?["username","password"]:["mobile","captcha"];r(l,{force:!0},(function(e,r){if(e)setTimeout((function(){s.loginBtn=!1}),600);else{var a=(0,i.Z)({},r);delete a.username,a[s.loginType?"username":"email"]=r.username,a.password=o()(r.password),n(a).then((function(e){return t.loginSuccess(e)})).catch((function(e){return t.requestFailed(e)})).finally((function(){s.loginBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state;r(["mobile"],{force:!0},(function(e,r){if(!e){s.smsSendBtn=!0;var a=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(a))}),1e3),i=t.$message.loading("验证码发送中..",0);(0,v.EK)({mobile:r.mobile}).then((function(e){setTimeout(i,2500),t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(i,1),clearInterval(a),s.time=60,s.smsSendBtn=!1,t.requestFailed(e)}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat((0,f.D$)(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}})},w=b,y=(0,p.Z)(w,s,a,!1,null,"c8e78d56",null),C=y.exports},86794:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main user-layout-register"},[t("h3",[t("span",[e._v(e._s(e.$t("user.register.register")))])]),t("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:e.$t("user.email.required")}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: $t('user.email.required') }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.register.email.placeholder")}})],1),t("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[t("template",{slot:"content"},[t("div",{style:{width:"240px"}},[t("div",{class:["user-register",e.passwordLevelClass]},[e._v(e._s(e.$t(e.passwordLevelName)))]),t("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),t("div",{staticStyle:{"margin-top":"10px"}},[t("span",[e._v(e._s(e.$t("user.register.password.popover-message"))+" ")])])],1)]),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.password.placeholder")},on:{click:e.handlePasswordInputClick}})],1)],2),t("a-form-item",[t("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:e.$t("user.password.required")},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: $t('user.password.required') }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:e.$t("user.register.confirm-password.placeholder")}})],1),t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:e.$t("user.phone-number.required"),pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: $t('user.phone-number.required'), pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:e.$t("user.login.mobile.placeholder")}},[t("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[t("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),t("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),t("a-row",{attrs:{gutter:16}},[t("a-col",{staticClass:"gutter-row",attrs:{span:16}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:e.$t("user.login.mobile.verification-code.placeholder")}},[t("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),t("a-col",{staticClass:"gutter-row",attrs:{span:8}},[t("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(!e.state.smsSendBtn&&e.$t("user.register.get-verification-code")||e.state.time+" s")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha.apply(null,arguments)}}})],1)],1),t("a-form-item",[t("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._v(e._s(e.$t("user.register.register"))+" ")]),t("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v(e._s(e.$t("user.register.sign-in")))])],1)],1)],1)},a=[],i=r(23711),n=(r(28436),r(77681)),o=r(506),l=r(50613),u={0:"user.password.strength.short",1:"user.password.strength.low",2:"user.password.strength.medium",3:"user.password.strength.strong"},c={0:"error",1:"error",2:"warning",3:"success"},d={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},p={name:"Register",components:{},mixins:[o.X],data:function(){return{form:this.$form.createForm(this),state:{time:60,level:0,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return u[this.state.passwordLevel]},passwordLevelColor:function(){return d[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,r){if(!t)return r();t.length>=6?((0,l.IE)(t)>=30&&(this.state.level=1),(0,l.IE)(t)>=60&&(this.state.level=2),(0,l.IE)(t)>=80&&(this.state.level=3)):(this.state.level=0,r(new Error(this.$t("user.password.strength.msg")))),this.state.passwordLevel=this.state.level,this.state.percent=33*this.state.level,r()},handlePasswordCheck:function(e,t,r){var s=this.form.getFieldValue("password");void 0===t&&r(new Error(this.$t("user.password.required"))),t&&s&&t.trim()!==s.trim()&&r(new Error(this.$t("user.password.twice.msg"))),r()},handlePhoneCheck:function(e,t,r){r()},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,r=this.$router;e({force:!0},(function(e,s){e||(t.passwordLevelChecked=!1,r.push({name:"registerResult",params:(0,i.Z)({},s)}))}))},getCaptcha:function(e){var t=this;e.preventDefault();var r=this.form.validateFields,s=this.state,a=this.$message,i=this.$notification;r(["mobile"],{force:!0},(function(e,r){if(!e){s.smsSendBtn=!0;var o=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(o))}),1e3),l=a.loading("验证码发送中..",0);(0,n.EK)({mobile:r.mobile}).then((function(e){setTimeout(l,2500),i["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(l,1),clearInterval(o),s.time=60,s.smsSendBtn=!1,t.requestFailed(e)}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},g=p,m=r(1001),h=(0,m.Z)(g,s,a,!1,null,"0c6ae390",null),f=h.exports},80797:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});r(59749),r(86544);var s=function(){var e=this,t=e._self._c;return t("a-result",{attrs:{isSuccess:!0,content:!1,title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"extra",fn:function(){return[t("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),t("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},a=[],i={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},n=i,o=r(1001),l=(0,o.Z)(n,s,a,!1,null,"4a6c53ae",null),u=l.exports},40487:function(e){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=t},71012:function(e){(function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,s=0;r<e.length;r++,s+=8)t[s>>>5]|=e[r]<<24-s%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var r=[],s=0;s<e.length;s+=3)for(var a=e[s]<<16|e[s+1]<<8|e[s+2],i=0;i<4;i++)8*s+6*i<=8*e.length?r.push(t.charAt(a>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],s=0,a=0;s<e.length;a=++s%4)0!=a&&r.push((t.indexOf(e.charAt(s-1))&Math.pow(2,-2*a+8)-1)<<2*a|t.indexOf(e.charAt(s))>>>6-2*a);return r}};e.exports=r})()},48738:function(e){function t(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&t(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(t(e)||r(e)||!!e._isBuffer)}},2568:function(e,t,r){(function(){var t=r(71012),s=r(40487).utf8,a=r(48738),i=r(40487).bin,n=function(e,r){e.constructor==String?e=r&&"binary"===r.encoding?i.stringToBytes(e):s.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var o=t.bytesToWords(e),l=8*e.length,u=1732584193,c=-271733879,d=-1732584194,p=271733878,g=0;g<o.length;g++)o[g]=16711935&(o[g]<<8|o[g]>>>24)|4278255360&(o[g]<<24|o[g]>>>8);o[l>>>5]|=128<<l%32,o[14+(l+64>>>9<<4)]=l;var m=n._ff,h=n._gg,f=n._hh,v=n._ii;for(g=0;g<o.length;g+=16){var b=u,w=c,y=d,C=p;u=m(u,c,d,p,o[g+0],7,-680876936),p=m(p,u,c,d,o[g+1],12,-389564586),d=m(d,p,u,c,o[g+2],17,606105819),c=m(c,d,p,u,o[g+3],22,-1044525330),u=m(u,c,d,p,o[g+4],7,-176418897),p=m(p,u,c,d,o[g+5],12,1200080426),d=m(d,p,u,c,o[g+6],17,-1473231341),c=m(c,d,p,u,o[g+7],22,-45705983),u=m(u,c,d,p,o[g+8],7,1770035416),p=m(p,u,c,d,o[g+9],12,-1958414417),d=m(d,p,u,c,o[g+10],17,-42063),c=m(c,d,p,u,o[g+11],22,-1990404162),u=m(u,c,d,p,o[g+12],7,1804603682),p=m(p,u,c,d,o[g+13],12,-40341101),d=m(d,p,u,c,o[g+14],17,-1502002290),c=m(c,d,p,u,o[g+15],22,1236535329),u=h(u,c,d,p,o[g+1],5,-165796510),p=h(p,u,c,d,o[g+6],9,-1069501632),d=h(d,p,u,c,o[g+11],14,643717713),c=h(c,d,p,u,o[g+0],20,-373897302),u=h(u,c,d,p,o[g+5],5,-701558691),p=h(p,u,c,d,o[g+10],9,38016083),d=h(d,p,u,c,o[g+15],14,-660478335),c=h(c,d,p,u,o[g+4],20,-405537848),u=h(u,c,d,p,o[g+9],5,568446438),p=h(p,u,c,d,o[g+14],9,-1019803690),d=h(d,p,u,c,o[g+3],14,-187363961),c=h(c,d,p,u,o[g+8],20,1163531501),u=h(u,c,d,p,o[g+13],5,-1444681467),p=h(p,u,c,d,o[g+2],9,-51403784),d=h(d,p,u,c,o[g+7],14,1735328473),c=h(c,d,p,u,o[g+12],20,-1926607734),u=f(u,c,d,p,o[g+5],4,-378558),p=f(p,u,c,d,o[g+8],11,-2022574463),d=f(d,p,u,c,o[g+11],16,1839030562),c=f(c,d,p,u,o[g+14],23,-35309556),u=f(u,c,d,p,o[g+1],4,-1530992060),p=f(p,u,c,d,o[g+4],11,1272893353),d=f(d,p,u,c,o[g+7],16,-155497632),c=f(c,d,p,u,o[g+10],23,-1094730640),u=f(u,c,d,p,o[g+13],4,681279174),p=f(p,u,c,d,o[g+0],11,-358537222),d=f(d,p,u,c,o[g+3],16,-722521979),c=f(c,d,p,u,o[g+6],23,76029189),u=f(u,c,d,p,o[g+9],4,-640364487),p=f(p,u,c,d,o[g+12],11,-421815835),d=f(d,p,u,c,o[g+15],16,530742520),c=f(c,d,p,u,o[g+2],23,-995338651),u=v(u,c,d,p,o[g+0],6,-198630844),p=v(p,u,c,d,o[g+7],10,1126891415),d=v(d,p,u,c,o[g+14],15,-1416354905),c=v(c,d,p,u,o[g+5],21,-57434055),u=v(u,c,d,p,o[g+12],6,1700485571),p=v(p,u,c,d,o[g+3],10,-1894986606),d=v(d,p,u,c,o[g+10],15,-1051523),c=v(c,d,p,u,o[g+1],21,-2054922799),u=v(u,c,d,p,o[g+8],6,1873313359),p=v(p,u,c,d,o[g+15],10,-30611744),d=v(d,p,u,c,o[g+6],15,-1560198380),c=v(c,d,p,u,o[g+13],21,1309151649),u=v(u,c,d,p,o[g+4],6,-145523070),p=v(p,u,c,d,o[g+11],10,-1120210379),d=v(d,p,u,c,o[g+2],15,718787259),c=v(c,d,p,u,o[g+9],21,-343485551),u=u+b>>>0,c=c+w>>>0,d=d+y>>>0,p=p+C>>>0}return t.endian([u,c,d,p])};n._ff=function(e,t,r,s,a,i,n){var o=e+(t&r|~t&s)+(a>>>0)+n;return(o<<i|o>>>32-i)+t},n._gg=function(e,t,r,s,a,i,n){var o=e+(t&s|r&~s)+(a>>>0)+n;return(o<<i|o>>>32-i)+t},n._hh=function(e,t,r,s,a,i,n){var o=e+(t^r^s)+(a>>>0)+n;return(o<<i|o>>>32-i)+t},n._ii=function(e,t,r,s,a,i,n){var o=e+(r^(t|~s))+(a>>>0)+n;return(o<<i|o>>>32-i)+t},n._blocksize=16,n._digestsize=16,e.exports=function(e,r){if(void 0===e||null===e)throw new Error("Illegal argument "+e);var s=t.wordsToBytes(n(e,r));return r&&r.asBytes?s:r&&r.asString?i.bytesToString(s):t.bytesToHex(s)}})()}}]);