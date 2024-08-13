(()=>{"use strict";var e,t={48118:(e,t,n)=>{var i=n(21777),o=n(53334),a=n(85471),r=n(35947);const s=null===(l=(0,i.HW)())?(0,r.YK)().setApp("core").build():(0,r.YK)().setApp("core").setUid(l.uid).build();var l;(0,r.YK)().setApp("unified-search").detectUser().build();var c=n(65043),p=n(63814),d=n(32981);function u(e,t,n){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,n)}function h(e,t,n){return e.set(m(e,t),n),n}function A(e,t){return e.get(m(e,t))}function m(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function g(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class f{constructor(e){g(this,"value",void 0),g(this,"next",void 0),this.value=e}}var v=new WeakMap,b=new WeakMap,C=new WeakMap;class y{constructor(){u(this,v,void 0),u(this,b,void 0),u(this,C,void 0),this.clear()}enqueue(e){var t;const n=new f(e);A(v,this)?(A(b,this).next=n,h(b,this,n)):(h(v,this,n),h(b,this,n)),h(C,this,(t=A(C,this),++t))}dequeue(){var e;const t=A(v,this);if(t)return h(v,this,A(v,this).next),h(C,this,(e=A(C,this),--e)),t.value}peek(){if(A(v,this))return A(v,this).value}clear(){h(v,this,void 0),h(b,this,void 0),h(C,this,0)}get size(){return A(C,this)}*[Symbol.iterator](){let e=A(v,this);for(;e;)yield e.value,e=e.next}}function w(e){x(e);const t=new y;let n=0;const i=()=>{n<e&&t.size>0&&(t.dequeue()(),n++)},o=async(e,t,o)=>{const a=(async()=>e(...o))();t(a);try{await a}catch{}n--,i()},a=function(a){for(var r=arguments.length,s=new Array(r>1?r-1:0),l=1;l<r;l++)s[l-1]=arguments[l];return new Promise((r=>{((a,r,s)=>{new Promise((e=>{t.enqueue(e)})).then(o.bind(void 0,a,r,s)),(async()=>{await Promise.resolve(),n<e&&i()})()})(a,r,s)}))};return Object.defineProperties(a,{activeCount:{get:()=>n},pendingCount:{get:()=>t.size},clearQueue:{value(){t.clear()}},concurrency:{get:()=>e,set(o){x(o),e=o,queueMicrotask((()=>{for(;n<e&&t.size>0;)i()}))}}}),a}function x(e){if(!Number.isInteger(e)&&e!==Number.POSITIVE_INFINITY||!(e>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up")}var _=n(32073),k=n(54332);const S={calendar:{description:(0,o.Tl)("core","Schedule work & meetings, synced with all your devices."),icon:(0,p.d0)("core","places/calendar.svg")},contacts:{description:(0,o.Tl)("core","Keep your colleagues and friends in one place without leaking their private info."),icon:(0,p.d0)("core","places/contacts.svg")},mail:{description:(0,o.Tl)("core","Simple email app nicely integrated with Files, Contacts and Calendar."),icon:(0,p.d0)("core","actions/mail.svg")},spreed:{description:(0,o.Tl)("core","Chatting, video calls, screensharing, online meetings and web conferencing – in your browser and with mobile apps."),icon:(0,p.d0)("core","apps/spreed.svg")},richdocuments:{name:"Nextcloud Office",description:(0,o.Tl)("core","Collaborative documents, spreadsheets and presentations, built on Collabora Online."),icon:(0,p.d0)("core","apps/richdocuments.svg")},notes:{description:(0,o.Tl)("core","Distraction free note taking app."),icon:(0,p.d0)("core","apps/notes.svg")},richdocumentscode:{hidden:!0}},I=Object.keys(S),P={name:"RecommendedApps",components:{NcCheckboxRadioSwitch:_.A,NcButton:k.A},data:()=>({showInstallButton:!1,installingApps:!1,loadingApps:!0,loadingAppsError:!1,apps:[],defaultPageUrl:(0,d.C)("core","defaultPageUrl")}),computed:{recommendedApps(){return this.apps.filter((e=>I.includes(e.id)))},isAnyAppSelected(){return this.recommendedApps.some((e=>e.isSelected))}},async mounted(){try{const{data:e}=await c.Ay.get((0,p.Jv)("settings/apps/list"));s.info(`${e.apps.length} apps fetched`),this.apps=e.apps.map((e=>Object.assign(e,{loading:!1,installationError:!1,isSelected:e.isCompatible}))),s.debug(`${this.recommendedApps.length} recommended apps found`,{apps:this.recommendedApps}),this.showInstallButton=!0}catch(e){s.error("could not fetch app list",{error:e}),this.loadingAppsError=!0}finally{this.loadingApps=!1}},methods:{installApps(){this.installingApps=!0;const e=w(1),t=this.recommendedApps.filter((e=>!e.active&&e.isCompatible&&e.canInstall&&e.isSelected)).map((t=>e((async()=>(s.info(`installing ${t.id}`),t.loading=!0,c.Ay.post((0,p.Jv)("settings/apps/enable"),{appIds:[t.id],groups:[]}).catch((e=>{s.error(`could not install ${t.id}`,{error:e}),t.isSelected=!1,t.installationError=!0})).then((()=>{s.info(`installed ${t.id}`),t.loading=!1,t.active=!0})))))));s.debug(`installing ${t.length} recommended apps`),Promise.all(t).then((()=>{s.info("all recommended apps installed, redirecting …"),window.location=this.defaultPageUrl})).catch((e=>s.error("could not install recommended apps",{error:e})))},customIcon:e=>e in S&&S[e].icon?S[e].icon:(s.warn(`no app icon for recommended app ${e}`),(0,p.d0)("core","places/default-app-icon.svg")),customName:e=>e.id in S&&S[e.id].name||e.name,customDescription:e=>e in S?S[e].description:(s.warn(`no app description for recommended app ${e}`),""),isHidden:e=>e in S&&!!S[e].hidden,toggleSelect(e){if(!(e in S)||!this.showInstallButton)return;const t=this.apps.findIndex((t=>t.id===e));this.$set(this.apps[t],"isSelected",!this.apps[t].isSelected)}}};var O=n(85072),T=n.n(O),j=n(97825),B=n.n(j),E=n(77659),N=n.n(E),D=n(55056),$=n.n(D),Y=n(10540),M=n.n(Y),U=n(41113),R=n.n(U),q=n(98988),z={};z.styleTagTransform=R(),z.setAttributes=$(),z.insert=N().bind(null,"head"),z.domAPI=B(),z.insertStyleElement=M(),T()(q.A,z),q.A&&q.A.locals&&q.A.locals;const F=(0,n(14486).A)(P,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"guest-box"},[t("h2",[e._v(e._s(e.t("core","Recommended apps")))]),e._v(" "),e.loadingApps?t("p",{staticClass:"loading text-center"},[e._v("\n\t\t"+e._s(e.t("core","Loading apps …"))+"\n\t")]):e.loadingAppsError?t("p",{staticClass:"loading-error text-center"},[e._v("\n\t\t"+e._s(e.t("core","Could not fetch list of apps from the App Store."))+"\n\t")]):e._e(),e._v(" "),e._l(e.recommendedApps,(function(n){return t("div",{key:n.id,staticClass:"app"},[e.isHidden(n.id)?e._e():[t("img",{attrs:{src:e.customIcon(n.id),alt:""}}),e._v(" "),t("div",{staticClass:"info"},[t("h3",[e._v(e._s(e.customName(n)))]),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.customDescription(n.id))}}),e._v(" "),n.installationError?t("p",[t("strong",[e._v(e._s(e.t("core","App download or installation failed")))])]):n.isCompatible?n.canInstall?e._e():t("p",[t("strong",[e._v(e._s(e.t("core","Cannot install this app")))])]):t("p",[t("strong",[e._v(e._s(e.t("core","Cannot install this app because it is not compatible")))])])]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{checked:n.isSelected||n.active,disabled:!n.isCompatible||n.active,loading:n.loading},on:{"update:checked":function(t){return e.toggleSelect(n.id)}}})]],2)})),e._v(" "),t("div",{staticClass:"dialog-row"},[e.showInstallButton&&!e.installingApps?t("NcButton",{attrs:{type:"tertiary",role:"link",href:e.defaultPageUrl}},[e._v("\n\t\t\t"+e._s(e.t("core","Skip"))+"\n\t\t")]):e._e(),e._v(" "),e.showInstallButton?t("NcButton",{attrs:{type:"primary",disabled:e.installingApps||!e.isAnyAppSelected},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.installApps.apply(null,arguments)}}},[e._v("\n\t\t\t"+e._s(e.installingApps?e.t("core","Installing apps …"):e.t("core","Install recommended apps"))+"\n\t\t")]):e._e()],1)],2)}),[],!1,null,"1a725b90",null).exports;n.nc=(0,i.aV)(),a.Ay.mixin({methods:{t:o.Tl}}),(new(a.Ay.extend(F))).$mount("#recommended-apps"),s.debug("recommended apps view rendered")},98988:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(71354),o=n.n(i),a=n(76314),r=n.n(a)()(o());r.push([e.id,".dialog-row[data-v-1a725b90]{display:flex;justify-content:end;margin-top:8px}p.loading[data-v-1a725b90],p.loading-error[data-v-1a725b90]{height:100px}p[data-v-1a725b90]:last-child{margin-top:10px}.text-center[data-v-1a725b90]{text-align:center}.app[data-v-1a725b90]{display:flex;flex-direction:row}.app img[data-v-1a725b90]{height:50px;width:50px;filter:var(--background-invert-if-dark)}.app img[data-v-1a725b90],.app .info[data-v-1a725b90]{padding:12px}.app .info h3[data-v-1a725b90],.app .info p[data-v-1a725b90]{text-align:left}.app .info h3[data-v-1a725b90]{margin-top:0}.app .checkbox-radio-switch[data-v-1a725b90]{margin-left:auto;padding:0 2px}","",{version:3,sources:["webpack://./core/src/components/setup/RecommendedApps.vue"],names:[],mappings:"AACA,6BACC,YAAA,CACA,mBAAA,CACA,cAAA,CAIA,4DAEC,YAAA,CAGD,8BACC,eAAA,CAIF,8BACC,iBAAA,CAGD,sBACC,YAAA,CACA,kBAAA,CAEA,0BACC,WAAA,CACA,UAAA,CACA,uCAAA,CAGD,sDACC,YAAA,CAIA,6DACC,eAAA,CAGD,+BACC,YAAA,CAIF,6CACC,gBAAA,CACA,aAAA",sourcesContent:["\n.dialog-row {\n\tdisplay: flex;\n\tjustify-content: end;\n\tmargin-top: 8px;\n}\n\np {\n\t&.loading,\n\t&.loading-error {\n\t\theight: 100px;\n\t}\n\n\t&:last-child {\n\t\tmargin-top: 10px;\n\t}\n}\n\n.text-center {\n\ttext-align: center;\n}\n\n.app {\n\tdisplay: flex;\n\tflex-direction: row;\n\n\timg {\n\t\theight: 50px;\n\t\twidth: 50px;\n\t\tfilter: var(--background-invert-if-dark);\n\t}\n\n\timg, .info {\n\t\tpadding: 12px;\n\t}\n\n\t.info {\n\t\th3, p {\n\t\t\ttext-align: left;\n\t\t}\n\n\t\th3 {\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n\n\t.checkbox-radio-switch {\n\t\tmargin-left: auto;\n\t\tpadding: 0 2px;\n\t}\n}\n"],sourceRoot:""}]);const s=r}},n={};function i(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}i.m=t,e=[],i.O=(t,n,o,a)=>{if(!n){var r=1/0;for(p=0;p<e.length;p++){n=e[p][0],o=e[p][1],a=e[p][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((e=>i.O[e](n[l])))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.j=2696,(()=>{i.b=document.baseURI||self.location.href;var e={2696:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,r=n[0],s=n[1],l=n[2],c=0;if(r.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var p=l(i)}for(t&&t(n);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(p)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),i.nc=void 0;var o=i.O(void 0,[4208],(()=>i(48118)));o=i.O(o)})();
//# sourceMappingURL=core-recommendedapps.js.map?v=5635ae3b295dfe2bb1e7