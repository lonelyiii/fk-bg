(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bddec9e"],{"355d":function(e,t,c){"use strict";c("fc72")},"8d06":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),a=c("365c"),o=c("6605"),r=c("f64c");const l=e=>(Object(n["pushScopeId"])("data-v-69977b8e"),e=e(),Object(n["popScopeId"])(),e),b={class:"detail_wra"},s={class:"topic"},i={class:"description"},d={key:0,class:"name"},j={class:"type"},O={class:"type"},p={class:"time"},m={class:"content"},u={class:"file"},f=Object(n["createTextVNode"])("附件"),v=["href"],y=l(()=>Object(n["createElementVNode"])("div",{class:"img"},[Object(n["createElementVNode"])("img",{src:"https://joeschmoe.io/api/v1/random",alt:""})],-1)),N={key:0},V={key:1},k={class:"answer"},E={class:"btn"},h=Object(n["createTextVNode"])("确定");var g={__name:"Detail",setup(e){const t=Object(n["reactive"])({info:{}}),c=Object(o["c"])();let l=Object(n["ref"])("");const g=Object(o["d"])(),{id:w,status:S}=c.query;l.value=S;const B=async()=>{const e={content:t.info.reply,feedbackId:w,phone:localStorage.getItem("phone")};console.log(e);const c=await Object(a["n"])(e);200==c.code&&(r["a"].info("操作成功"),g.go(-1))};Object(n["onMounted"])(async()=>{const e=await Object(a["g"])(w);t.info={...e.data,createTime:e.data.createTime.replace("T"," ").replace("Z","")}});let{info:D}=Object(n["toRefs"])(t);return(e,t)=>{const c=Object(n["resolveComponent"])("a-textarea"),a=Object(n["resolveComponent"])("a-button");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",b,[Object(n["createElementVNode"])("h1",s,Object(n["toDisplayString"])(Object(n["unref"])(D).topic),1),Object(n["createElementVNode"])("div",i,[Object(n["unref"])(D).anonymity?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",d,"反馈人："+Object(n["toDisplayString"])(Object(n["unref"])(D).name),1)),Object(n["createElementVNode"])("div",j,"问题类型："+Object(n["toDisplayString"])(Object(n["unref"])(D).type),1),Object(n["createElementVNode"])("div",O,"反馈部门："+Object(n["toDisplayString"])(Object(n["unref"])(D).department),1),Object(n["createElementVNode"])("div",p,Object(n["toDisplayString"])(Object(n["unref"])(D).createTime),1)]),Object(n["createElementVNode"])("div",m,Object(n["toDisplayString"])(Object(n["unref"])(D).content),1),Object(n["createElementVNode"])("div",u,[f,Object(n["createElementVNode"])("a",{href:Object(n["unref"])(D).fileUrl},":点击下载",8,v)]),y,+Object(n["unref"])(l)?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h1",V,"编辑:")):(Object(n["openBlock"])(),Object(n["createElementBlock"])("h1",N,"回复:")),Object(n["createElementVNode"])("div",k,[Object(n["createVNode"])(c,{value:Object(n["unref"])(D).reply,"onUpdate:value":t[0]||(t[0]=e=>Object(n["unref"])(D).reply=e),placeholder:"请回复",rows:4},null,8,["value"])]),Object(n["createElementVNode"])("div",E,[Object(n["createVNode"])(a,{type:"primary",onClick:B},{default:Object(n["withCtx"])(()=>[h]),_:1})])])}}},w=(c("355d"),c("6b0d")),S=c.n(w);const B=S()(g,[["__scopeId","data-v-69977b8e"]]);t["default"]=B},fc72:function(e,t,c){}}]);
//# sourceMappingURL=chunk-2bddec9e.17ba530f.js.map