(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a15996aa"],{3814:function(e,t,o){},"45bd":function(e,t,o){"use strict";o.r(t);var a=o("7a23");const n={class:"changePwd_wra"},i={class:"title"},l={class:"form"},s=Object(a["createTextVNode"])("发送验证码"),c=Object(a["createTextVNode"])("确认修改");function r(e,t,o,r,d,m){const b=Object(a["resolveComponent"])("a-input-password"),p=Object(a["resolveComponent"])("a-form-item"),h=Object(a["resolveComponent"])("a-input"),u=Object(a["resolveComponent"])("a-button"),j=Object(a["resolveComponent"])("a-tooltip"),O=Object(a["resolveComponent"])("a-input-group"),f=Object(a["resolveComponent"])("a-form");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",n,[Object(a["createElementVNode"])("h1",i,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(f,{model:e.formState,name:"basic","label-col":{span:5},"wrapper-col":{span:16},autocomplete:"off",onFinish:e.onFinish,onFinishFailed:e.onFinishFailed},{default:Object(a["withCtx"])(()=>["修改密码"==e.title?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:0,label:e.input1,name:"pwd",rules:[{required:!0,message:"请输入密码"}],style:{"margin-bottom":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{value:e.formState.pwd,"onUpdate:value":t[0]||(t[0]=t=>e.formState.pwd=t)},null,8,["value"])]),_:1},8,["label"])):(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:1,label:e.input1,name:"oldPhone",rules:[{required:!0,message:"请输入手机号"}],style:{"margin-bottom":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{value:e.formState.oldPhone,"onUpdate:value":t[1]||(t[1]=t=>e.formState.oldPhone=t),type:"text"},null,8,["value"])]),_:1},8,["label"])),"修改密码"==e.title?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:2,label:e.input2,name:"newPwd",rules:[{required:!0,message:"请输入密码"}],style:{"margin-bottom":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{value:e.formState.newPwd,"onUpdate:value":t[2]||(t[2]=t=>e.formState.newPwd=t)},null,8,["value"])]),_:1},8,["label"])):(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:3,label:e.input2,name:"newPhone",rules:[{required:!0,message:"请输入手机号"}],style:{"margin-bottom":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{value:e.formState.newPhone,"onUpdate:value":t[3]||(t[3]=t=>e.formState.newPhone=t)},null,8,["value"])]),_:1},8,["label"])),Object(a["createVNode"])(p,{label:"验证码",name:"smsCode",rules:[{required:!0,message:"请输入验证码"}],style:{"margin-bottom":"20px"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{compact:""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{value:e.formState.smsCode,"onUpdate:value":t[4]||(t[4]=t=>e.formState.smsCode=t),style:{width:"calc(100% - 100px)"}},null,8,["value"]),Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[e.isSms?(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:0,type:"primary",style:{width:"100px"},onClick:e.sendSms},{icon:Object(a["withCtx"])(()=>[s]),_:1},8,["onClick"])):(Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:1,type:"dashed",disabled:"",style:{width:"100px"}},{icon:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.time),1)]),_:1}))]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(p,{"wrapper-col":{offset:5,span:15}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{type:"primary","html-type":"submit",style:{width:"100px","border-radius":"5px",height:"40px"}},{default:Object(a["withCtx"])(()=>[c]),_:1})]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])])])}var d=o("a075"),m=o("365c"),b=o("81cb"),p={data(){return{time:60,isSms:!0,formState:{newPwd:"",phone:localStorage.getItem("phone"),smsCode:"",newPhone:"",oldPhone:"",pwd:""},title:"",input1:"",input2:"",obj1:{"修改密码":"新密码","修改手机号":"旧手机号"},obj2:{"修改密码":"确认新密码","修改手机号":"新手机号"}}},updated(){this.title=this.$route.meta.mark,this.input1=this.obj1[this.title],this.input2=this.obj2[this.title],this.formState.phone=localStorage.getItem("phone")},mounted(){this.title=this.$route.meta.mark,this.input1=this.obj1[this.title],this.input2=this.obj2[this.title]},methods:{async sendSms(){this.isSms=!1,"修改手机号"==this.title&&(this.formState.phone=this.formState.newPhone),this.formState.phone||b["message"].info("请先输入手机号");const e=await Object(m["j"])(this.formState.phone);200==e.code&&b["message"].info("已发送");let t=setInterval(()=>{0==this.time?(this.isSms=!0,clearInterval(t)):this.time--},1e3);this.time=60},async onFinish(e){const t=await this.change(this.formState);200==t.code?(b["message"].info("修改成功",1),"修改手机号"==this.title&&(b["message"].info("修改手机号后请重新登录"),this.$router.push("/"))):b["message"].info(t.msg)},async change(e){return"修改密码"==this.title?Object(m["b"])(e):Object(m["c"])(e)}}},h=Object(a["defineComponent"])({mixins:[p],components:{CopyOutlined:d["a"]},setup(){const e=e=>{console.log("Failed:",e)};return{onFinishFailed:e}}}),u=(o("d4f9"),o("6b0d")),j=o.n(u);const O=j()(h,[["render",r],["__scopeId","data-v-f650d09a"]]);t["default"]=O},d4f9:function(e,t,o){"use strict";o("3814")}}]);
//# sourceMappingURL=chunk-a15996aa.2d4bf04c.js.map