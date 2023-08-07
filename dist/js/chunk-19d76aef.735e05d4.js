(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19d76aef"],{"59cb":function(e,t,n){"use strict";var a=n("f475"),r=n.n(a);r.a},b0c0:function(e,t,n){var a=n("83ab"),r=n("9bf2").f,o=Function.prototype,i=o.toString,s=/^\s*function ([^ (]*)/,u="name";a&&!(u in o)&&r(o,u,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},bc80:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aeo-page"},[n("h1",{staticClass:"page-title"},[e._v("AEO")]),n("form",{staticClass:"aeo-form",on:{submit:function(t){return t.preventDefault(),e.addAEO(t)}}},[n("label",{attrs:{for:"name"}},[e._v("Name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",id:"name",name:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),n("br"),n("label",{attrs:{for:"email"}},[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("br"),n("label",{attrs:{for:"phone"}},[e._v("Phone:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",id:"phone",name:"phone",required:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("br"),n("br"),n("label",{attrs:{for:"fpo"}},[e._v("FPO:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.fpo,expression:"fpo"}],attrs:{id:"fpo",name:"fpo",required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.fpo=t.target.multiple?n:n[0]}}},e._l(e.fpoList,(function(t){return n("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),n("br"),n("br"),n("button",{staticClass:"submit-button",attrs:{type:"submit"}},[e._v("Add AEO")])]),e._l(e.aeoList,(function(t){return n("div",{key:t.id,staticClass:"aeo-item"},[n("h2",[e._v(e._s(t.name))]),n("p",[e._v("Email: "+e._s(t.email))]),n("p",[e._v("Phone: "+e._s(t.phone))]),n("p",[e._v("FPO: "+e._s(t.fpo.name))])])}))],2)},r=[],o=(n("b0c0"),n("96cf"),n("1da1")),i=n("bc3a"),s=n.n(i),u={name:"AeoPage",data:function(){return{name:"",email:"",phone:"",fpo:null,fpoList:[],aeoList:[]}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchFPOData();case 2:return t.next=4,e.fetchAEOData();case 4:case"end":return t.stop()}}),t)})))()},methods:{fetchFPOData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("http://127.0.0.1:8000/api/fpos/");case 3:n=t.sent,e.fpoList=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Error fetching FPO data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},fetchAEOData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("http://127.0.0.1:8000/api/aeos/");case 3:n=t.sent,e.aeoList=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Error fetching AEO data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},addAEO:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.post("http://127.0.0.1:8000/api/aeos/",{name:e.name,email:e.email,phone:e.phone,fpo:e.fpo});case 3:return e.name="",e.email="",e.phone="",e.fpo=null,t.next=9,e.fetchAEOData();case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.error("Error adding AEO:",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},c=u,p=(n("59cb"),n("2877")),l=Object(p["a"])(c,a,r,!1,null,null,null);t["default"]=l.exports},f475:function(e,t,n){}}]);