(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[20],{141:function(e,t,n){e.exports=n(170)},170:function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(T){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,c=Object.create(a.prototype),i=new E(r||[]);return c._invoke=function(e,t,n){var r=h;return function(a,c){if(r===d)throw new Error("Generator is already running");if(r===f){if("throw"===a)throw c;return K()}for(n.method=a,n.arg=c;;){var i=n.delegate;if(i){var o=L(i,n);if(o){if(o===b)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(e,t,n);if("normal"===s.type){if(r=n.done?f:j,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}(e,n,i),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var h="suspendedStart",j="suspendedYield",d="executing",f="completed",b={};function v(){}function m(){}function x(){}var p={};p[c]=function(){return this};var O=Object.getPrototypeOf,y=O&&O(O(S([])));y&&y!==n&&r.call(y,c)&&(p=y);var g=x.prototype=v.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(a,c,i,o){var s=u(e[a],e,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,o)}),(function(e){n("throw",e,i,o)})):t.resolve(h).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,o)}))}o(s.arg)}var a;this._invoke=function(e,r){function c(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(c,c):c()}}function L(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method))return b;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var a=u(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,b;var c=a.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,b):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,b)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function S(e){if(e){var n=e[c];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:K}}function K(){return{value:t,done:!0}}return m.prototype=g.constructor=x,x.constructor=m,m.displayName=s(x,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,s(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(N.prototype),N.prototype[i]=function(){return this},e.AsyncIterator=N,e.async=function(t,n,r,a,c){void 0===c&&(c=Promise);var i=new N(l(t,n,r,a),c);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(g),s(g,o,"Generator"),g[c]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var c=a;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;C(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:S(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),b}},e}(e.exports);try{regeneratorRuntime=r}catch(a){Function("r","regeneratorRuntime = r")(r)}},171:function(e,t,n){"use strict";function r(e,t,n,r,a,c,i){try{var o=e[c](i),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var i=e.apply(t,n);function o(e){r(i,a,c,o,s,"next",e)}function s(e){r(i,a,c,o,s,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return a}))},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(16),a=n(50),c=n(27),i=n(0),o=n(280),s=n(42),l=n(52),u=n(41),h=n(107),j=n(77),d=n(6),f=n(1);function b(e){var t,n,b=e.pageKey,v=void 0===b?"":b,m=e.text,x=void 0===m?"":m,p=e.modalTitle,O=void 0===p?"":p,y=e.children,g=Object(i.useState)(null===(t=null===(n=Object(d.n)("infoShown"))||void 0===n?void 0:n[v])||void 0===t||t),w=Object(r.a)(g,2),N=w[0],L=w[1],k=Object(i.useState)(Array.isArray(x)?Object(d.j)(x):x),C=Object(r.a)(k,1)[0],E=function(){var e,t=null!==(e=Object(d.n)("infoShown"))&&void 0!==e?e:{};t[v]=!1,Object(d.r)("infoShown",t),L(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{show:N,onHide:function(){return E()},size:"xl",variant:"success",contentClassName:"bg-transparent",children:Object(f.jsxs)(s.a,{bg:"darkcontent",text:"lightfont",children:[Object(f.jsx)(s.a.Header,{children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)(s.a.Title,{children:O})}),Object(f.jsx)(u.a,{xs:"auto",children:Object(f.jsx)(h.a,{variant:"danger",onClick:function(){return E()},children:Object(f.jsx)(c.a,{icon:a.B})})})]})}),Object(f.jsx)(s.a.Body,{children:Object(f.jsx)(i.Suspense,{fallback:Object(f.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(f.jsx)(j.a,{animation:"border",variant:"primary"})]}),children:y})}),Object(f.jsx)(s.a.Footer,{children:Object(f.jsx)(h.a,{variant:"danger",onClick:function(){return E()},children:Object(f.jsx)("span",{children:"Close"})})})]})}),Object(f.jsx)(s.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(f.jsx)(s.a.Body,{className:"pl-2 py-0 pr-0",children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)(u.a,{children:Object(f.jsx)("small",{children:C})}),Object(f.jsx)(u.a,{xs:"auto",children:Object(f.jsx)(h.a,{size:"sm",variant:"info",className:"m-0 py-1",onClick:function(){return L(!0)},children:Object(f.jsx)(c.a,{icon:a.s})})})]})})})]})}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(40),a=n(16),c=n(50),i=n(27),o=n(0),s=n(154),l=n(136),u=n(107),h=n(42),j=n(41),d=n(52),f=n(20),b=n(105),v=n(114),m=n(115),x=n(120),p=n(17),O=n(98),y=n(102),g=n(137),w=n(117),N=n(104),L=n(109),k=n(1);function C(e){var t,n=e.characterKey,C=e.onEdit,E=e.onDelete,S=e.cardClassName,K=void 0===S?"":S,T=e.bg,_=void 0===T?"":T,F=e.header,B=e.footer,P=void 0!==B&&B,G=Object(y.a)(),A=Object(a.a)(G,2)[1];Object(o.useEffect)((function(){return n&&p.a.registerCharListener(n,A),function(){n&&p.a.unregisterCharListener(n,A)}}),[n,A]);var z=Object(y.b)(b.a.getAll()),I=p.a.get(n),M=Object(y.b)(L.b.get(n)),R=Object(y.b)(I&&w.a.get(I.weapon.key)),W=Object(o.useMemo)((function(){return I&&M&&R&&z&&N.a.calculateBuild(I,M,R,z)}),[I,M,R,z]);if(!I||!M||!R||!W)return null;var D=I.weapon,H=I.constellation,Y=M.name,U=M.elementKey,V=M.weaponTypeKey,J=null===R||void 0===R?void 0:R.name,q=g.a.getWeaponMainStatValWithOverride(D,R),Q=g.a.getWeaponSubstatKey(R),X=g.a.getWeaponSubstatValWithOverride(D,R),Z=g.a.getLevelName(D.levelKey),$=null===R||void 0===R?void 0:R.passiveName;return Object(k.jsxs)(h.a,{className:K,bg:_||"darkcontent",text:"lightfont",children:[Object(k.jsx)(h.a.Header,{className:"pr-2",children:Object(k.jsxs)(d.a,{className:"no-gutters",children:[Object(k.jsx)(j.a,{children:F||Object(k.jsx)("h5",{children:Object(k.jsx)("b",{children:Y})})}),Object(k.jsx)(j.a,{xs:"auto",children:Object(k.jsxs)("span",{className:"float-right align-top ml-1",children:[C&&Object(k.jsx)(u.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return C(n)},children:Object(k.jsx)(i.a,{icon:c.h})}),E&&Object(k.jsx)(u.a,{variant:"danger",size:"sm",onClick:function(){return E(n)},children:Object(k.jsx)(i.a,{icon:c.E})})]})})]})}),Object(k.jsxs)(h.a.Body,{onClick:function(){return null===C||void 0===C?void 0:C(n)},className:C?"cursor-pointer":"",children:[Object(k.jsxs)(d.a,{children:[Object(k.jsx)(j.a,{xs:"auto",className:"pr-0",children:Object(k.jsx)(s.a,{src:M.thumbImg,className:"thumb-big grad-".concat(M.star,"star p-0"),thumbnail:!0})}),Object(k.jsxs)(j.a,{children:[Object(k.jsxs)("h3",{className:"mb-0",children:[N.a.getLevelString(I,M,R)," ","C".concat(H)]}),Object(k.jsx)("h5",{className:"mb-0",children:Object(k.jsx)(m.a,{stars:M.star,colored:!0})}),Object(k.jsxs)("h2",{className:"mb-0",children:[Object(k.jsx)(s.a,{src:v.a.elements[U],className:"inline-icon"})," ",Object(k.jsx)(s.a,{src:null===(t=v.a.weaponTypes)||void 0===t?void 0:t[V],className:"inline-icon"})]})]})]}),Object(k.jsx)(d.a,{className:"mb-2",children:Object(k.jsxs)(j.a,{children:[Object(k.jsxs)("h6",{className:"mb-0",children:[J,$&&"(".concat(D.refineIndex+1,")")," ",Z]}),Object(k.jsxs)("span",{children:["ATK: ",q,"  ",$&&Object(k.jsxs)("span",{children:[O.a.getStatName(Q),": ",X,O.a.getStatUnit(Q)]})]})]})}),Object(k.jsx)(d.a,{children:Object(k.jsx)(j.a,{children:z&&Object.entries(b.a.setEffects(z,W.setToSlots)).map((function(e){var t,n=Object(a.a)(e,2),c=n[0],i=n[1],o=null!==(t=null===z||void 0===z?void 0:z[c].name)&&void 0!==t?t:"",s=Math.max.apply(Math,Object(r.a)(i));return Object(k.jsx)("h5",{children:Object(k.jsxs)(l.a,{variant:"secondary",children:[o," ",Object(k.jsx)(l.a,{variant:"success",children:s})]})},c)}))})}),Object(k.jsx)(d.a,{children:["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","enerRech_"].map((function(e){var t=O.a.getStatUnit(e),n=W[e];return Object(k.jsxs)(j.a,{xs:12,children:[Object(k.jsxs)("h6",{className:"d-inline",children:[Object(x.a)(e)," ",O.a.getStatName(e)]}),Object(k.jsx)("span",{className:"float-right",children:(null===n||void 0===n?void 0:n.toFixed(O.a.fixedUnit(e)))+t})]},e)}))})]}),P&&Object(k.jsx)(h.a.Footer,{children:Object(k.jsx)(u.a,{as:f.b,to:{pathname:"/build",characterKey:n},children:"Generate Builds"})})]})}},276:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(141),a=n.n(r),c=n(171),i=n(16),o=n(50),s=n(27),l=n(0),u=n.n(l),h=n(74),j=n(52),d=n(41),f=n(42),b=n(77),v=n(140),m=n(107),x=n(154),p=n(203),O=n(176),y=n(25),g=n(20),w=n(114),N=n(17),L=n(173),k=n(51),C=n(102),E=n(6),S=n(137),K=n(104),T=n(188),_=n(109),F=n(1),B=u.a.lazy((function(){return n.e(26).then(n.bind(null,271))})),P=Object(l.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(16)]).then(n.bind(null,152))})),G={level:"Level",rarity:"Rarity",name:"Name"};function A(e,t){return t===e?"":t}function z(e){var t,n=Object(l.useState)(""),r=Object(i.a)(n,2),g=r[0],z=r[1],M=Object(l.useState)((function(){return Object.keys(G)[0]})),R=Object(i.a)(M,2),W=R[0],D=R[1],H=Object(l.useReducer)(A,""),Y=Object(i.a)(H,2),U=Y[0],V=Y[1],J=Object(l.useReducer)(A,""),q=Object(i.a)(J,2),Q=q[0],X=q[1],Z=Object(l.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(C.a)(),re=Object(i.a)(ne,2)[1],ae=Object(l.useRef)(null);Object(l.useEffect)((function(){y.a.pageview("/character");var e=Object(E.n)("CharacterDisplay.state");if(e){var t=e.charIdToEdit,n=e.sortBy,r=e.elementalFilter,a=e.weaponFilter;z(t),D(n),k.d.includes(r)&&V(r),S.a.getWeaponTypeKeys().includes(a)&&X(a)}return N.a.registerListener(re),function(){return N.a.unregisterListener(re)}}),[re]);var ce=null!==(t=Object(C.b)(_.b.getAll()))&&void 0!==t?t:{},ie=function(e){var t;return K.a.getLevel(null===(t=N.a.get(e))||void 0===t?void 0:t.levelKey)},oe=function(e){var t;return null===(t=ce[e])||void 0===t?void 0:t.star};Object(l.useEffect)((function(){var e={charIdToEdit:g,sortBy:W,elementalFilter:U,weaponFilter:Q};Object(E.r)("CharacterDisplay.state",e)}),[g,W,U,Q]);var se=Object(l.useCallback)(function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.b.get(t);case 2:if(n=e.sent,window.confirm("Are you sure you want to remove ".concat(null===n||void 0===n?void 0:n.name,"?"))){e.next=5;break}return e.abrupt("return");case 5:K.a.remove(t),g===t&&z("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[g,z]),le=Object(l.useCallback)((function(e){z(e),setTimeout((function(){var e;null===(e=ae.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}),[z,ae]),ue=Object(l.useCallback)((function(){z(""),te(!1)}),[z]),he=N.a.getCharacterKeyList().filter((function(e){var t,n;return(!U||U===(null===(t=ce[e])||void 0===t?void 0:t.elementKey))&&(!Q||Q===(null===(n=ce[e])||void 0===n?void 0:n.weaponTypeKey))})).sort((function(e,t){if("name"===W)return e<t?-1:e>t?1:0;if("level"===W){var n=ie(t)-ie(e);return n||oe(t)-oe(e)}var r=oe(t)-oe(e);return r||ie(t)-ie(e)})),je=Boolean(g||ee);return Object(F.jsxs)(h.a,{ref:ae,className:"mt-2",children:[Object(F.jsx)(L.a,{pageKey:"characterPage",modalTitle:"Character Management Page Guide",text:["Every character will be tested with in-game numbers for maximum accuracy.","You can see the details of the calculations of every number.","You need to manually enable auto infusion for characters like Choungyun or Noelle.",'You can change character constellations in both "Character" tab and in "Talents" tab.',"Modified character Stats show up in yellow."],children:Object(F.jsx)(B,{})}),je?Object(F.jsx)(j.a,{className:"mt-2",children:Object(F.jsx)(d.a,{children:Object(F.jsx)(u.a.Suspense,{fallback:Object(F.jsx)(f.a,{bg:"darkcontent",text:"lightfont",children:Object(F.jsx)(f.a.Body,{children:Object(F.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(F.jsx)(b.a,{animation:"border",variant:"primary"})]})})}),children:Object(F.jsx)(P,{character:void 0,newBuild:void 0,tabName:void 0,editable:!0,setCharacterKey:le,characterKey:g,onClose:ue,footer:Object(F.jsx)(I,{onClose:ue,characterKey:g})})})})}):null,Object(F.jsx)(f.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:Object(F.jsx)(f.a.Body,{className:"p-2",children:Object(F.jsxs)(j.a,{children:[Object(F.jsx)(d.a,{xs:"auto",children:Object(F.jsx)(v.a,{children:k.d.map((function(e){var t;return Object(F.jsx)(m.a,{variant:U&&U!==e?"primary":"success",className:"py-1 px-2",onClick:function(){return V(e)},children:Object(F.jsx)("h4",{className:"mb-0",children:Object(F.jsx)(x.a,{src:null===(t=w.a.elements)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(F.jsx)(d.a,{children:Object(F.jsx)(v.a,{children:S.a.getWeaponTypeKeys().map((function(e){var t;return Object(F.jsx)(m.a,{variant:Q&&Q!==e?"primary":"success",className:"py-1 px-2",onClick:function(){return X(e)},children:Object(F.jsx)("h4",{className:"mb-0",children:Object(F.jsx)(x.a,{src:null===(t=w.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(F.jsxs)(d.a,{xs:"auto",children:[Object(F.jsx)("span",{children:"Sort by: "}),Object(F.jsx)(p.a,{type:"radio",name:"level",value:W,onChange:D,children:Object.entries(G).map((function(e){var t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(F.jsx)(O.a,{value:n,variant:W===n?"success":"primary",children:r},n)}))})]})]})})}),Object(F.jsxs)(j.a,{className:"mt-2",children:[!je&&Object(F.jsx)(d.a,{lg:4,md:6,className:"mb-2",children:Object(F.jsxs)(f.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(F.jsx)(f.a.Header,{className:"pr-2",children:Object(F.jsx)("span",{children:"Add New Character"})}),Object(F.jsx)(f.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(F.jsx)(j.a,{className:"d-flex flex-row justify-content-center",children:Object(F.jsx)(d.a,{xs:"auto",children:Object(F.jsx)(m.a,{onClick:function(){return te(!0)},children:Object(F.jsx)("h1",{children:Object(F.jsx)(s.a,{icon:o.r,className:"fa-fw"})})})})})})]})}),he.map((function(e){return Object(F.jsx)(d.a,{lg:4,md:6,className:"mb-2",children:Object(F.jsx)(T.a,{header:void 0,cardClassName:"h-100",characterKey:e,onDelete:se,onEdit:le,footer:!0})},e)}))]})]})}function I(e){var t=e.onClose,n=e.characterKey;return Object(F.jsxs)(j.a,{children:[Object(F.jsx)(d.a,{children:Object(F.jsxs)(m.a,{variant:"info",as:g.b,to:{pathname:"/flex",characterKey:n},children:[Object(F.jsx)(s.a,{icon:o.n})," Share Character"]})}),Object(F.jsx)(d.a,{xs:"auto",children:Object(F.jsx)(m.a,{variant:"danger",onClick:t,children:"Close"})})]})}}}]);
//# sourceMappingURL=20.0b11bbc0.chunk.js.map