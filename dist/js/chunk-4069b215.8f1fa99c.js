(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4069b215"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?c(t):a(n(t))}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),o=r("d039"),i=r("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=c;(l||f)&&n(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?i.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),o=r("7dd0"),i="String Iterator",c=a.set,s=a.getterFor(i);o(String,"String",(function(t){c(this,{type:i,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),o=r("9bdd"),i=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,v,d,p=a(t),m="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,h=void 0!==b,y=u(p),_=0;if(h&&(b=n(b,g>2?arguments[2]:void 0,2)),void 0==y||m==Array&&i(y))for(e=c(p.length),r=new m(e);e>_;_++)d=h?b(p[_],_):p[_],s(r,_,d);else for(f=y.call(p),v=f.next,r=new m;!(l=v.call(f)).done;_++)d=h?o(f,b,[l.value,_],!0):l.value,s(r,_,d);return r.length=_,r}},5342:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vfc-page"},[r("h1",[t._v("VFC")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.addVFC(e)}}},[r("label",{attrs:{for:"name"}},[t._v("Name:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"fpo"}},[t._v("FPO:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.fpo,expression:"fpo"}],attrs:{id:"fpo",name:"fpo"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.fpo=e.target.multiple?r:r[0]}}},t._l(t.fpoList,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),r("br"),r("br"),r("label",{attrs:{for:"ics"}},[t._v("ICS:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.ics,expression:"ics"}],attrs:{id:"ics",name:"ics",multiple:"",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.ics=e.target.multiple?r:r[0]}}},t._l(t.icsList,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),r("br"),r("br"),r("label",{attrs:{for:"aeo"}},[t._v("AEO:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.aeo,expression:"aeo"}],attrs:{id:"aeo",name:"aeo"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.aeo=e.target.multiple?r:r[0]}}},t._l(t.aeos,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})),0),r("br"),r("br"),r("label",{attrs:{for:"country"}},[t._v("Country:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.country,expression:"location.country"}],attrs:{type:"text",id:"country",name:"country"},domProps:{value:t.location.country},on:{input:function(e){e.target.composing||t.$set(t.location,"country",e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"state"}},[t._v("State:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.state,expression:"location.state"}],attrs:{type:"text",id:"state",name:"state"},domProps:{value:t.location.state},on:{input:function(e){e.target.composing||t.$set(t.location,"state",e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"district"}},[t._v("District:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.district,expression:"location.district"}],attrs:{type:"text",id:"district",name:"district"},domProps:{value:t.location.district},on:{input:function(e){e.target.composing||t.$set(t.location,"district",e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"panchayats"}},[t._v("Panchayats:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.panchayats,expression:"location.panchayats"}],attrs:{type:"text",id:"panchayats",name:"panchayats"},domProps:{value:t.location.panchayats},on:{input:function(e){e.target.composing||t.$set(t.location,"panchayats",e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"revenue_village"}},[t._v("Revenue Village:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.revenue_village,expression:"location.revenue_village"}],attrs:{type:"text",id:"revenue_village",name:"revenue_village"},domProps:{value:t.location.revenue_village},on:{input:function(e){e.target.composing||t.$set(t.location,"revenue_village",e.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"local_village"}},[t._v("Local Village:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.location.local_village,expression:"location.local_village"}],attrs:{type:"text",id:"local_village",name:"local_village"},domProps:{value:t.location.local_village},on:{input:function(e){e.target.composing||t.$set(t.location,"local_village",e.target.value)}}}),r("br"),r("br"),r("button",{attrs:{type:"submit"}},[t._v("Add VFC")])]),t._l(t.vfcList,(function(e){return r("div",{key:e.id,staticClass:"vfc-item"},[r("h2",[t._v(t._s(e.name))]),r("p",[t._v("FPO: "+t._s(e.fpo.name))]),r("p",[t._v("Location: "+t._s(t.getLocationString(e.location)))]),r("p",[t._v("ICS: "+t._s(t.getSelectedICS(e.ics)))]),r("p",[t._v("AEO: "+t._s(t.getSelectedAEO(e.aeo)))])])}))],2)},a=[];r("99af"),r("4de4"),r("7db0"),r("caad"),r("a15b"),r("d81d"),r("b0c0"),r("2532");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t){if(Array.isArray(t))return o(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("25f0");function s(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||c(t)||s(t)||u()}r("96cf");var f=r("1da1"),v=r("bc3a"),d=r.n(v),p={name:"VfcPage",data:function(){return{name:"",fpo:"",aeo:"",ics:[],location:{country:"",state:"",district:"",panchayats:"",revenue_village:"",local_village:""},fpoList:[],icsList:[],vfcList:[],aeos:[]}},mounted:function(){this.fetchVFCData(),this.fetchFPOData(),this.fetchAEOData(),this.fetchICSData()},methods:{fetchVFCData:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://127.0.0.1:8000/api/vfcs/");case 3:r=e.sent,t.vfcList=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching ICS data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchFPOData:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://127.0.0.1:8000/api/fpos/");case 3:r=e.sent,t.fpoList=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching FPO data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchAEOData:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://127.0.0.1:8000/api/aeos/");case 3:r=e.sent,t.aeos=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching AEO data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},fetchICSData:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://127.0.0.1:8000/api/ics/");case 3:r=e.sent,t.icsList=r.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error("Error fetching ICS data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},addVFC:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r={name:t.name,fpo:t.fpo,ics:l(t.ics),aeo:t.aeo,location:{country:t.location.country,state:t.location.state,district:t.location.district,local_village:t.location.local_village,panchayats:t.location.panchayats,revenue_village:t.location.revenue_village}},e.next=4,d.a.post("http://127.0.0.1:8000/api/vfcs/",r);case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getSelectedICS:function(t){var e=this.icsList.filter((function(e){return t.includes(e)}));return e.map((function(t){return t.name})).join(", ")},getSelectedAEO:function(t){var e=this.aeos.find((function(e){return e.id===t}));return e?e.name:""},getLocationString:function(t){return"".concat(t.country,", ").concat(t.state,", ").concat(t.district,", ").concat(t.panchayats,", ").concat(t.revenue_village,", ").concat(t.local_village)}}},m=p,g=(r("5cbe"),r("2877")),b=Object(g["a"])(m,n,a,!1,null,null,null);e["default"]=b.exports},"5cbe":function(t,e,r){"use strict";var n=r("aa92"),a=r.n(n);a.a},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),o=r("e5383"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),v=r("b622"),d=r("2d00"),p=v("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",b=d>=51||!a((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=f("concat"),y=function(t){if(!i(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},_=!b||!h;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,n,a,o,i=c(this),f=l(i,0),v=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],y(o)){if(a=s(o.length),v+a>m)throw TypeError(g);for(r=0;r<a;r++,v++)r in o&&u(f,v,o[r])}else{if(v>=m)throw TypeError(g);u(f,v++,o)}return f.length=v,f}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),o=r("d066"),i=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),v=r("e8b5"),d=r("861d"),p=r("825a"),m=r("7b0b"),g=r("fc6a"),b=r("c04e"),h=r("5c6c"),y=r("7c73"),_=r("df75"),w=r("241c"),S=r("057f"),x=r("7418"),O=r("06cf"),A=r("9bf2"),P=r("d1e7"),E=r("9112"),j=r("6eeb"),C=r("5692"),k=r("f772"),N=r("d012"),F=r("90e3"),R=r("b622"),L=r("e5383"),I=r("746f"),D=r("d44e"),$=r("69f3"),V=r("b727").forEach,T=k("hidden"),J="Symbol",M="prototype",q=R("toPrimitive"),Q=$.set,U=$.getterFor(J),W=Object[M],z=a.Symbol,B=o("JSON","stringify"),G=O.f,H=A.f,K=S.f,X=P.f,Y=C("symbols"),Z=C("op-symbols"),tt=C("string-to-symbol-registry"),et=C("symbol-to-string-registry"),rt=C("wks"),nt=a.QObject,at=!nt||!nt[M]||!nt[M].findChild,ot=c&&l((function(){return 7!=y(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=G(W,e);n&&delete W[e],H(t,e,r),n&&t!==W&&H(W,e,n)}:H,it=function(t,e){var r=Y[t]=y(z[M]);return Q(r,{type:J,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},st=function(t,e,r){t===W&&st(Z,e,r),p(t);var n=b(e,!0);return p(r),f(Y,n)?(r.enumerable?(f(t,T)&&t[T][n]&&(t[T][n]=!1),r=y(r,{enumerable:h(0,!1)})):(f(t,T)||H(t,T,h(1,{})),t[T][n]=!0),ot(t,n,r)):H(t,n,r)},ut=function(t,e){p(t);var r=g(e),n=_(r).concat(pt(r));return V(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=b(t,!0),r=X.call(this,e);return!(this===W&&f(Y,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(Y,e)||f(this,T)&&this[T][e])||r)},vt=function(t,e){var r=g(t),n=b(e,!0);if(r!==W||!f(Y,n)||f(Z,n)){var a=G(r,n);return!a||!f(Y,n)||f(r,T)&&r[T][n]||(a.enumerable=!0),a}},dt=function(t){var e=K(g(t)),r=[];return V(e,(function(t){f(Y,t)||f(N,t)||r.push(t)})),r},pt=function(t){var e=t===W,r=K(e?Z:g(t)),n=[];return V(r,(function(t){!f(Y,t)||e&&!f(W,t)||n.push(Y[t])})),n};if(s||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(t),r=function(t){this===W&&r.call(Z,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),ot(this,e,h(1,t))};return c&&at&&ot(W,e,{configurable:!0,set:r}),it(e,t)},j(z[M],"toString",(function(){return U(this).tag})),j(z,"withoutSetter",(function(t){return it(F(t),t)})),P.f=ft,A.f=st,O.f=vt,w.f=S.f=dt,x.f=pt,L.f=function(t){return it(R(t),t)},c&&(H(z[M],"description",{configurable:!0,get:function(){return U(this).description}}),i||j(W,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:z}),V(_(rt),(function(t){I(t)})),n({target:J,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:vt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),B){var mt=!s||l((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));n({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,r){var n,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),a[1]=e,B.apply(null,a)}})}z[M][q]||E(z[M],q,z[M].valueOf),D(z,J),N[T]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),o=r("1c7e"),i=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:i},{from:a})},aa92:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in o)&&a(o,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},d28b:function(t,e,r){var n=r("746f");n("iterator")},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),o=r("e260"),i=r("9112"),c=r("b622"),s=c("iterator"),u=c("toStringTag"),l=o.values;for(var f in a){var v=n[f],d=v&&v.prototype;if(d){if(d[s]!==l)try{i(d,s,l)}catch(m){d[s]=l}if(d[u]||i(d,u,f),a[f])for(var p in o)if(d[p]!==o[p])try{i(d,p,o[p])}catch(m){d[p]=o[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),o=r("da84"),i=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=o.Symbol;if(a&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(v,l);var d=v.prototype=l.prototype;d.constructor=v;var p=d.toString,m="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(i(f,t))return"";var r=m?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:v})}},e5383:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),o=r("e8b5"),i=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),v=r("ae40"),d=f("slice"),p=v("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),g=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var r,n,l,f=s(this),v=c(f.length),d=i(t,v),p=i(void 0===e?v:e,v);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?a(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(f,d,p);for(n=new(void 0===r?Array:r)(b(p-d,0)),l=0;d<p;d++,l++)d in f&&u(n,l,f[d]);return n.length=l,n}})}}]);