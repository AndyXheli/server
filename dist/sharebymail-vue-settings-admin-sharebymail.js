/*! For license information please see sharebymail-vue-settings-admin-sharebymail.js.LICENSE.txt */
!function(){"use strict";var e,n={26294:function(e,n,r){var o=r(20144),a=r(22200),i=r(9944),s=(r(73317),r(20571)),u=r.n(s),c=r(13299),l=r.n(c),d=r(79954),f=r(26932),p=r(4820),h=r(79753),v=r(10128);function m(e,n,t,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void t(e)}s.done?n(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){m(a,r,o,i,s,"next",e)}function s(e){m(a,r,o,i,s,"throw",e)}i(void 0)}))}}r(65509);var b={name:"AdminSettings",components:{NcCheckboxRadioSwitch:u(),NcSettingsSection:l()},data:function(){return{sendPasswordMail:(0,d.j)("sharebymail","sendPasswordMail"),replyToInitiator:(0,d.j)("sharebymail","replyToInitiator")}},methods:{update:function(e,n){var r=this;return y(regeneratorRuntime.mark((function o(){var a,i,s,u,c,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,v.confirmPassword)();case 2:return a=(0,h.generateOcsUrl)("/apps/provisioning_api/api/v1/config/apps/{appId}/{key}",{appId:"sharebymail",key:e}),i=n?"yes":"no",o.prev=4,o.next=7,p.default.post(a,{value:i});case 7:c=o.sent,l=c.data,r.handleResponse({status:null===(s=l.ocs)||void 0===s||null===(u=s.meta)||void 0===u?void 0:u.status}),o.next=15;break;case 12:o.prev=12,o.t0=o.catch(4),r.handleResponse({errorMessage:t("sharebymail","Unable to update share by mail config"),error:o.t0});case 15:case"end":return o.stop()}}),o,null,[[4,12]])})))()},handleResponse:function(e){return y(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.status,r=e.errorMessage,o=e.error,"ok"!==t&&((0,f.showError)(r),console.error(r,o));case 2:case"end":return n.stop()}}),n)})))()}}},w=(0,r(51900).Z)(b,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("NcSettingsSection",{attrs:{title:e.t("sharebymail","Share by mail"),description:e.t("sharebymail","Allows users to share a personalized link to a file or folder by putting in an email address.")}},[t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.sendPasswordMail},on:{"update:checked":[function(n){e.sendPasswordMail=n},function(n){return e.update("sendpasswordmail",e.sendPasswordMail)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Send password by mail"))+"\n\t")]),e._v(" "),t("NcCheckboxRadioSwitch",{attrs:{type:"switch",checked:e.replyToInitiator},on:{"update:checked":[function(n){e.replyToInitiator=n},function(n){return e.update("replyToInitiator",e.replyToInitiator)}]}},[e._v("\n\t\t"+e._s(e.t("sharebymail","Reply to initiator"))+"\n\t")])],1)}),[],!1,null,null,null).exports;r.nc=btoa((0,a.getRequestToken)()),o.ZP.mixin({methods:{t:i.translate}}),(new(o.ZP.extend(w))).$mount("#vue-admin-sharebymail")}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=n,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},e=[],o.O=function(n,t,r,a){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],a=e[l][2];for(var s=!0,u=0;u<t.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[u])}))?t.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[t,r,a]},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},o.j=3173,function(){o.b=document.baseURI||self.location.href;var e={3173:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,a,i=t[0],s=t[1],u=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var l=u(o)}for(n&&n(t);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(l)},t=self.webpackChunknextcloud=self.webpackChunknextcloud||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),o.nc=void 0;var a=o.O(void 0,[7874],(function(){return o(26294)}));a=o.O(a)}();
//# sourceMappingURL=sharebymail-vue-settings-admin-sharebymail.js.map?v=09e7fdd05cb836f2fbd7