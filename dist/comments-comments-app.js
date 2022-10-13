/*! For license information please see comments-comments-app.js.LICENSE.txt */
!function(){var n,e={93365:function(n,t,e){var r={"./af":36026,"./af.js":36026,"./ar":28093,"./ar-dz":41943,"./ar-dz.js":41943,"./ar-kw":23969,"./ar-kw.js":23969,"./ar-ly":40594,"./ar-ly.js":40594,"./ar-ma":18369,"./ar-ma.js":18369,"./ar-sa":32579,"./ar-sa.js":32579,"./ar-tn":76442,"./ar-tn.js":76442,"./ar.js":28093,"./az":86425,"./az.js":86425,"./be":22004,"./be.js":22004,"./bg":42982,"./bg.js":42982,"./bm":21067,"./bm.js":21067,"./bn":8366,"./bn-bd":63837,"./bn-bd.js":63837,"./bn.js":8366,"./bo":95040,"./bo.js":95040,"./br":521,"./br.js":521,"./bs":83242,"./bs.js":83242,"./ca":73046,"./ca.js":73046,"./cs":25794,"./cs.js":25794,"./cv":28231,"./cv.js":28231,"./cy":10927,"./cy.js":10927,"./da":42832,"./da.js":42832,"./de":29415,"./de-at":3331,"./de-at.js":3331,"./de-ch":45524,"./de-ch.js":45524,"./de.js":29415,"./dv":44700,"./dv.js":44700,"./el":88752,"./el.js":88752,"./en-au":90444,"./en-au.js":90444,"./en-ca":65959,"./en-ca.js":65959,"./en-gb":62762,"./en-gb.js":62762,"./en-ie":40909,"./en-ie.js":40909,"./en-il":79909,"./en-il.js":79909,"./en-in":87942,"./en-in.js":87942,"./en-nz":75200,"./en-nz.js":75200,"./en-sg":21415,"./en-sg.js":21415,"./eo":27447,"./eo.js":27447,"./es":86756,"./es-do":47049,"./es-do.js":47049,"./es-mx":15915,"./es-mx.js":15915,"./es-us":57133,"./es-us.js":57133,"./es.js":86756,"./et":72182,"./et.js":72182,"./eu":14419,"./eu.js":14419,"./fa":2916,"./fa.js":2916,"./fi":49964,"./fi.js":49964,"./fil":16448,"./fil.js":16448,"./fo":26094,"./fo.js":26094,"./fr":35833,"./fr-ca":56994,"./fr-ca.js":56994,"./fr-ch":2740,"./fr-ch.js":2740,"./fr.js":35833,"./fy":69542,"./fy.js":69542,"./ga":93264,"./ga.js":93264,"./gd":77457,"./gd.js":77457,"./gl":83043,"./gl.js":83043,"./gom-deva":24034,"./gom-deva.js":24034,"./gom-latn":28379,"./gom-latn.js":28379,"./gu":406,"./gu.js":406,"./he":73219,"./he.js":73219,"./hi":99834,"./hi.js":99834,"./hr":28754,"./hr.js":28754,"./hu":93945,"./hu.js":93945,"./hy-am":81319,"./hy-am.js":81319,"./id":24875,"./id.js":24875,"./is":23724,"./is.js":23724,"./it":79906,"./it-ch":34303,"./it-ch.js":34303,"./it.js":79906,"./ja":77105,"./ja.js":77105,"./jv":15026,"./jv.js":15026,"./ka":67416,"./ka.js":67416,"./kk":79734,"./kk.js":79734,"./km":60757,"./km.js":60757,"./kn":58369,"./kn.js":58369,"./ko":77687,"./ko.js":77687,"./ku":95544,"./ku.js":95544,"./ky":85431,"./ky.js":85431,"./lb":13613,"./lb.js":13613,"./lo":34252,"./lo.js":34252,"./lt":84619,"./lt.js":84619,"./lv":93760,"./lv.js":93760,"./me":93393,"./me.js":93393,"./mi":12369,"./mi.js":12369,"./mk":48664,"./mk.js":48664,"./ml":23099,"./ml.js":23099,"./mn":98539,"./mn.js":98539,"./mr":778,"./mr.js":778,"./ms":39970,"./ms-my":82625,"./ms-my.js":82625,"./ms.js":39970,"./mt":15714,"./mt.js":15714,"./my":53055,"./my.js":53055,"./nb":73945,"./nb.js":73945,"./ne":63645,"./ne.js":63645,"./nl":4829,"./nl-be":12823,"./nl-be.js":12823,"./nl.js":4829,"./nn":23756,"./nn.js":23756,"./oc-lnc":41228,"./oc-lnc.js":41228,"./pa-in":97877,"./pa-in.js":97877,"./pl":53066,"./pl.js":53066,"./pt":28677,"./pt-br":81592,"./pt-br.js":81592,"./pt.js":28677,"./ro":32722,"./ro.js":32722,"./ru":59138,"./ru.js":59138,"./sd":32568,"./sd.js":32568,"./se":49753,"./se.js":49753,"./si":58024,"./si.js":58024,"./sk":31058,"./sk.js":31058,"./sl":43452,"./sl.js":43452,"./sq":2795,"./sq.js":2795,"./sr":26976,"./sr-cyrl":38819,"./sr-cyrl.js":38819,"./sr.js":26976,"./ss":7467,"./ss.js":7467,"./sv":42787,"./sv.js":42787,"./sw":80298,"./sw.js":80298,"./ta":57532,"./ta.js":57532,"./te":76076,"./te.js":76076,"./tet":40452,"./tet.js":40452,"./tg":64794,"./tg.js":64794,"./th":48245,"./th.js":48245,"./tk":8870,"./tk.js":8870,"./tl-ph":36056,"./tl-ph.js":36056,"./tlh":15249,"./tlh.js":15249,"./tr":22053,"./tr.js":22053,"./tzl":39871,"./tzl.js":39871,"./tzm":39574,"./tzm-latn":19210,"./tzm-latn.js":19210,"./tzm.js":39574,"./ug-cn":91532,"./ug-cn.js":91532,"./uk":11432,"./uk.js":11432,"./ur":88523,"./ur.js":88523,"./uz":54958,"./uz-latn":68735,"./uz-latn.js":68735,"./uz.js":54958,"./vi":83398,"./vi.js":83398,"./x-pseudo":56665,"./x-pseudo.js":56665,"./yo":11642,"./yo.js":11642,"./zh-cn":5462,"./zh-cn.js":5462,"./zh-hk":92530,"./zh-hk.js":92530,"./zh-mo":41650,"./zh-mo.js":41650,"./zh-tw":97333,"./zh-tw.js":97333};function o(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=s,n.exports=o,o.id=93365},68328:function(n,e,r){"use strict";var o=r(17499),s=r(9944),a=r(79753),i=r(22200),c=r(79954),u=r(4820),m=r(34741),l=r(20144),d=r(93455),p=r.n(d),f=r(80351),h=r.n(f),g=r(45400),v=r.n(g),A=r(12945),j=r.n(A),C=r(875),y=r.n(C),b=r(75925),w=r.n(b),_=r(10861),x=r.n(_),k=r(12323),O=r.n(k),P=r(13408),R=r.n(P),D=r(45947),E={name:"Moment",props:{timestamp:{type:Number,required:!0},format:{type:String,default:"LLL"}},computed:{title:function(){return h().unix(this.timestamp).format(this.format)},formatted:function(){return h().unix(this.timestamp).fromNow()}}},T=r(51900),N=(0,T.Z)(E,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("span",{staticClass:"live-relative-timestamp",attrs:{"data-timestamp":1e3*n.timestamp,title:n.title}},[n._v(n._s(n.formatted))])}),[],!1,null,null,null).exports,I=function(){return(0,a.generateRemoteUrl)("dav/comments")},S=r(81063);u.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",(0,S.getPatcher)().patch("request",u.default);var M=(0,S.createClient)(I());function z(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function B(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){z(s,r,o,a,i,"next",n)}function i(n){z(s,r,o,a,i,"throw",n)}a(void 0)}))}}function U(n,t,e){return q.apply(this,arguments)}function q(){return(q=B(regeneratorRuntime.mark((function n(t,e,r){var o,s,a,c,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=["",t,e].join("/"),n.next=3,u.default.post(I()+o,{actorDisplayName:(0,i.getCurrentUser)().displayName,actorId:(0,i.getCurrentUser)().uid,actorType:"users",creationDateTime:(new Date).toUTCString(),message:r,objectType:"files",verb:"comment"});case 3:return s=n.sent,a=parseInt(s.headers["content-location"].split("/").pop()),c=o+"/"+a,n.next=8,M.stat(c,{details:!0});case 8:return m=n.sent,n.abrupt("return",m.data);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function $(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function Z(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){$(s,r,o,a,i,"next",n)}function i(n){$(s,r,o,a,i,"throw",n)}a(void 0)}))}}function L(n,t,e){return F.apply(this,arguments)}function F(){return(F=Z(regeneratorRuntime.mark((function n(t,e,r){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=["",t,e,r].join("/"),n.next=3,M.deleteFile(o);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function G(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function H(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){G(s,r,o,a,i,"next",n)}function i(n){G(s,r,o,a,i,"throw",n)}a(void 0)}))}}function V(n,t,e,r){return W.apply(this,arguments)}function W(){return(W=H(regeneratorRuntime.mark((function n(t,e,r,o){var s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=["",t,e,r].join("/"),n.next=3,M.customRequest(s,Object.assign({method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<d:propertyupdate\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns">\n\t\t\t<d:set>\n\t\t\t\t<d:prop>\n\t\t\t\t\t<oc:message>'.concat(o,"</oc:message>\n\t\t\t\t</d:prop>\n\t\t\t</d:set>\n\t\t\t</d:propertyupdate>")}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var Y=r(26932);function Q(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function X(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){Q(s,r,o,a,i,"next",n)}function i(n){Q(s,r,o,a,i,"throw",n)}a(void 0)}))}}var K={props:{id:{type:Number,default:null},message:{type:String,default:""},ressourceId:{type:[String,Number],required:!0}},data:function(){return{deleted:!1,editing:!1,loading:!1}},methods:{onEdit:function(){this.editing=!0},onEditCancel:function(){this.editing=!1,this.updateLocalMessage(this.message)},onEditComment:function(n){var e=this;return X(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.prev=1,r.next=4,V(e.commentsType,e.ressourceId,e.id,n);case 4:e.logger.debug("Comment edited",{commentsType:e.commentsType,ressourceId:e.ressourceId,id:e.id,message:n}),e.$emit("update:message",n),e.editing=!1,r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),(0,Y.showError)(t("comments","An error occurred while trying to edit the comment")),console.error(r.t0);case 13:return r.prev=13,e.loading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[1,9,13,16]])})))()},onDeleteWithUndo:function(){var n=this;this.deleted=!0;var e=setTimeout(this.onDelete,Y.TOAST_UNDO_TIMEOUT);(0,Y.showUndo)(t("comments","Comment deleted"),(function(){clearTimeout(e),n.deleted=!1}))},onDelete:function(){var n=this;return X(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(n.commentsType,n.ressourceId,n.id);case 3:n.logger.debug("Comment deleted",{commentsType:n.commentsType,ressourceId:n.ressourceId,id:n.id}),n.$emit("delete",n.id),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),(0,Y.showError)(t("comments","An error occurred while trying to delete the comment")),console.error(e.t0),n.deleted=!1;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()},onNewComment:function(n){var e=this;return X(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.loading=!0,r.prev=1,r.next=4,U(e.commentsType,e.ressourceId,n);case 4:o=r.sent,e.logger.debug("New comment posted",{commentsType:e.commentsType,ressourceId:e.ressourceId,newComment:o}),e.$emit("new",o),e.$emit("update:message",""),e.localMessage="",r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),(0,Y.showError)(t("comments","An error occurred while trying to create the comment")),console.error(r.t0);case 15:return r.prev=15,e.loading=!1,r.finish(15);case 18:case"end":return r.stop()}}),r,null,[[1,11,15,18]])})))()}}},J={name:"Comment",components:{NcActionButton:v(),NcActions:j(),NcActionSeparator:y(),ArrowRight:D.default,NcAvatar:w(),NcButton:x(),Moment:N,NcRichContenteditable:O()},mixins:[R(),K],inheritAttrs:!1,props:{actorDisplayName:{type:String,required:!0},actorId:{type:String,required:!0},creationDateTime:{type:String,default:null},editor:{type:Boolean,default:!1},autoComplete:{type:Function,required:!0}},data:function(){return{expanded:!1,localMessage:""}},computed:{isOwnComment:function(){return(0,i.getCurrentUser)().uid===this.actorId},renderedContent:function(){return this.isEmptyMessage?"":this.renderContent(this.localMessage)},isEmptyMessage:function(){return!this.localMessage||""===this.localMessage.trim()},timestamp:function(){return parseInt(h()(this.creationDateTime).format("x"),10)/1e3}},watch:{message:function(n){this.updateLocalMessage(n)}},beforeMount:function(){this.updateLocalMessage(this.message)},methods:{updateLocalMessage:function(n){this.localMessage=n.toString()},onSubmit:function(){var n=this;if(""!==this.localMessage.trim())return this.editor?(this.onNewComment(this.localMessage.trim()),void this.$nextTick((function(){n.$refs.editor.$el.focus()}))):void this.onEditComment(this.localMessage.trim())},onExpand:function(){this.expanded=!0}}},nn=r(93379),tn=r.n(nn),en=r(7795),rn=r.n(en),on=r(90569),sn=r.n(on),an=r(3565),cn=r.n(an),un=r(19216),mn=r.n(un),ln=r(44589),dn=r.n(ln),pn=r(9604),fn={};fn.styleTagTransform=dn(),fn.setAttributes=cn(),fn.insert=sn().bind(null,"head"),fn.domAPI=rn(),fn.insertStyleElement=mn(),tn()(pn.Z,fn),pn.Z&&pn.Z.locals&&pn.Z.locals;var hn=(0,T.Z)(J,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:!n.deleted,expression:"!deleted"}],staticClass:"comment",class:{"comment--loading":n.loading}},[e("div",{staticClass:"comment__header"},[e("NcAvatar",{staticClass:"comment__avatar",attrs:{"display-name":n.actorDisplayName,user:n.actorId,size:32}}),n._v(" "),e("span",{staticClass:"comment__author"},[n._v(n._s(n.actorDisplayName))]),n._v(" "),n.isOwnComment&&n.id&&!n.loading?e("NcActions",{staticClass:"comment__actions"},[n.editing?e("NcActionButton",{attrs:{icon:"icon-close"},on:{click:n.onEditCancel}},[n._v("\n\t\t\t\t"+n._s(n.t("comments","Cancel edit"))+"\n\t\t\t")]):[e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-rename"},on:{click:n.onEdit}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Edit comment"))+"\n\t\t\t\t")]),n._v(" "),e("NcActionSeparator"),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,icon:"icon-delete"},on:{click:n.onDeleteWithUndo}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Delete comment"))+"\n\t\t\t\t")])]],2):n._e(),n._v(" "),n.id&&n.loading?e("div",{staticClass:"comment_loading icon-loading-small"}):n.creationDateTime?e("Moment",{staticClass:"comment__timestamp",attrs:{timestamp:n.timestamp}}):n._e()],1),n._v(" "),n.editor||n.editing?e("div",{staticClass:"comment__editor"},[e("NcRichContenteditable",{ref:"editor",attrs:{"auto-complete":n.autoComplete,contenteditable:!n.loading,value:n.localMessage},on:{"update:value":n.updateLocalMessage,submit:n.onSubmit}}),n._v(" "),e("NcButton",{staticClass:"comment__submit",attrs:{type:"tertiary-no-background","native-type":"submit","aria-label":n.t("comments","Post comment"),disabled:n.isEmptyMessage},on:{click:n.onSubmit},scopedSlots:n._u([{key:"icon",fn:function(){return[n.loading?e("span",{staticClass:"icon-loading-small"}):e("ArrowRight",{attrs:{size:20}})]},proxy:!0}],null,!1,2357784758)})],1):e("div",{staticClass:"comment__message",class:{"comment__message--expanded":n.expanded},domProps:{innerHTML:n._s(n.renderedContent)},on:{click:n.onExpand}})])}),[],!1,null,"d797e6e4",null).exports,gn=r(7582),vn=r(18635);function An(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function jn(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?An(Object(e),!0).forEach((function(t){Cn(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):An(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function Cn(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function yn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function bn(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){yn(s,r,o,a,i,"next",n)}function i(n){yn(s,r,o,a,i,"throw",n)}a(void 0)}))}}var wn=20;function _n(n){return xn.apply(this,arguments)}function xn(){return xn=bn(regeneratorRuntime.mark((function n(t){var e,r,o,s,a,i=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commentsType,r=t.ressourceId,o=i.length>1&&void 0!==i[1]?i[1]:{},s=null,a=["",e,r].join("/"),n.next=6,M.customRequest(a,Object.assign({method:"REPORT",data:'<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>'.concat(wn,"</oc:limit>\n\t\t\t\t<oc:offset>").concat(o.offset||0,"</oc:offset>\n\t\t\t</oc:filter-comments>")},o)).then((function(n){return s=n,n.data})).then(gn.parseXML).then((function(n){return kn(n,!0)})).then((function(n){return(0,vn.processResponsePayload)(s,n,!0)})).then((function(n){return n.data}));case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)}))),xn.apply(this,arguments)}function kn(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=n.multistatus.response;return e.map((function(n){var e=n.propstat.prop,r=jn(jn({},e),{},{actorDisplayName:On(e.actorDisplayName,2),message:On(e.message,2)});return(0,gn.prepareFileFromProps)(r,r.id.toString(),t)}))}function On(n){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=new DOMParser,r=n,o=0;o<t;o++)r=e.parseFromString(r,"text/html").documentElement.textContent;return r}function Pn(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}var Rn=function(n){var t=u.default.CancelToken.source(),e=function(){var e,r=(e=regeneratorRuntime.mark((function e(r,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(r,Object.assign({cancelToken:t.token},o)));case 1:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function a(n){Pn(s,r,o,a,i,"next",n)}function i(n){Pn(s,r,o,a,i,"throw",n)}a(void 0)}))});return function(n,t){return r.apply(this,arguments)}}();return{request:e,cancel:t.cancel}};function Dn(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function En(n,t,e,r,o,s,a){try{var i=n[s](a),c=i.value}catch(n){return void e(n)}i.done?t(c):Promise.resolve(c).then(r,o)}function Tn(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var s=n.apply(t,e);function a(n){En(s,r,o,a,i,"next",n)}function i(n){En(s,r,o,a,i,"throw",n)}a(void 0)}))}}l.ZP.use(m.default);var Nn={name:"Comments",components:{Comment:hn,NcEmptyContent:p()},data:function(){return{error:"",loading:!1,done:!1,ressourceId:null,offset:0,comments:[],cancelRequest:function(){},editorData:{actorDisplayName:(0,i.getCurrentUser)().displayName,actorId:(0,i.getCurrentUser)().uid,key:"editor"},Comment:hn}},computed:{hasComments:function(){return this.comments.length>0},isFirstLoading:function(){return this.loading&&0===this.offset}},methods:{update:function(n){var t=this;return Tn(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ressourceId=n,t.resetState(),t.getComments();case 3:case"end":return e.stop()}}),e)})))()},onScrollBottomReached:function(){this.error||this.done||this.loading||this.getComments()},genMentionsData:function(n){return Object.values(n).flat().reduce((function(n,t){return n[t.mentionId]={icon:"icon-user",id:t.mentionId,label:t.mentionDisplayName,source:"users",primary:(0,i.getCurrentUser)().uid===t.mentionId},n}),{})},getComments:function(){var n=this;return Tn(regeneratorRuntime.mark((function e(){var r,o,s,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.cancelRequest("cancel"),e.prev=1,n.loading=!0,n.error="",o=Rn(_n),s=o.request,a=o.cancel,n.cancelRequest=a,e.next=8,s({commentsType:n.commentsType,ressourceId:n.ressourceId},{offset:n.offset});case 8:i=e.sent,n.logger.debug("Processed ".concat(i.length," comments"),{comments:i}),i.length<wn&&(n.done=!0),(r=n.comments).push.apply(r,function(n){if(Array.isArray(n))return Dn(n)}(c=i)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(c)||function(n,t){if(n){if("string"==typeof n)return Dn(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Dn(n,t):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n.offset+=wn,e.next=21;break;case 15:if(e.prev=15,e.t0=e.catch(1),"cancel"!==e.t0.message){e.next=19;break}return e.abrupt("return");case 19:n.error=t("comments","Unable to load the comments list"),console.error("Error loading the comments list",e.t0);case 21:return e.prev=21,n.loading=!1,e.finish(21);case 24:case"end":return e.stop()}var c}),e,null,[[1,15,21,24]])})))()},autoComplete:function(n,t){var e=this;return Tn(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.default.get((0,a.generateOcsUrl)("core/autocomplete/get"),{params:{search:n,itemType:"files",itemId:e.ressourceId,sorter:"commenters|share-recipients",limit:(0,c.j)("comments","maxAutoCompleteResults")}});case 2:return o=r.sent,r.abrupt("return",t(o.data.ocs.data));case 4:case"end":return r.stop()}}),r)})))()},onNewComment:function(n){this.comments.unshift(n)},onDelete:function(n){var t=this.comments.findIndex((function(t){return t.props.id===n}));t>-1?this.comments.splice(t,1):console.error("Could not find the deleted comment in the list",n)},resetState:function(){this.error="",this.loading=!1,this.done=!1,this.offset=0,this.comments=[]}}},In=r(68610),Sn={};Sn.styleTagTransform=dn(),Sn.setAttributes=cn(),Sn.insert=sn().bind(null,"head"),Sn.domAPI=rn(),Sn.insertStyleElement=mn(),tn()(In.Z,Sn),In.Z&&In.Z.locals&&In.Z.locals;var Mn=(0,T.Z)(Nn,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"comments",class:{"icon-loading":n.isFirstLoading}},[e("Comment",n._b({staticClass:"comments__writer",attrs:{"auto-complete":n.autoComplete,editor:!0,"ressource-id":n.ressourceId},on:{new:n.onNewComment}},"Comment",n.editorData,!1)),n._v(" "),n.isFirstLoading?n._e():[!n.hasComments&&n.done?e("NcEmptyContent",{attrs:{icon:"icon-comment"}},[n._v("\n\t\t\t"+n._s(n.t("comments","No comments yet, start the conversation!"))+"\n\t\t")]):n._l(n.comments,(function(t){return e("Comment",n._b({key:t.props.id,staticClass:"comments__list",attrs:{"auto-complete":n.autoComplete,message:t.props.message,"ressource-id":n.ressourceId,"user-data":n.genMentionsData(t.props.mentions)},on:{"update:message":function(e){return n.$set(t.props,"message",e)},delete:n.onDelete}},"Comment",t.props,!1))})),n._v(" "),n.loading&&!n.isFirstLoading?e("div",{staticClass:"comments__info icon-loading"}):n.hasComments&&n.done?e("div",{staticClass:"comments__info"},[n._v("\n\t\t\t"+n._s(n.t("comments","No more messages"))+"\n\t\t")]):n.error?e("NcEmptyContent",{staticClass:"comments__error",attrs:{icon:"icon-error"},scopedSlots:n._u([{key:"desc",fn:function(){return[e("button",{attrs:{icon:"icon-history"},on:{click:n.getComments}},[n._v("\n\t\t\t\t\t"+n._s(n.t("comments","Retry"))+"\n\t\t\t\t")])]},proxy:!0}],null,!1,1182580137)},[n._v("\n\t\t\t"+n._s(n.error)+"\n\t\t\t")]):n._e()]],2)}),[],!1,null,"7a78e295",null).exports;function zn(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function Bn(n,t,e){return t&&zn(n.prototype,t),e&&zn(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function Un(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var qn=(0,o.IY)().setApp("comments").detectUser().build();l.ZP.mixin({data:function(){return{logger:qn}},methods:{t:s.translate,n:s.translatePlural}});var $n=Bn((function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"files",e=arguments.length>1?arguments[1]:void 0;Un(this,n),l.ZP.mixin({data:function(){return{commentsType:t}}});var r=l.ZP.extend(Mn);return new r(e)}));window.OCA&&!window.OCA.Comments&&Object.assign(window.OCA,{Comments:{}}),Object.assign(window.OCA.Comments,{View:$n}),console.debug("OCA.Comments.View initialized")},9604:function(n,t,e){"use strict";var r=e(87537),o=e.n(r),s=e(23645),a=e.n(s)()(o());a.push([n.id,".comment[data-v-d797e6e4]{position:relative;padding:10px 0 15px}.comment__header[data-v-d797e6e4]{display:flex;align-items:center;min-height:44px;padding:5px 0}.comment__author[data-v-d797e6e4],.comment__actions[data-v-d797e6e4]{margin-left:10px !important}.comment__author[data-v-d797e6e4]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--color-text-maxcontrast)}.comment_loading[data-v-d797e6e4],.comment__timestamp[data-v-d797e6e4]{margin-left:auto;color:var(--color-text-maxcontrast)}.comment__editor[data-v-d797e6e4],.comment__message[data-v-d797e6e4]{position:relative;padding-left:42px}.comment__submit[data-v-d797e6e4]{position:absolute !important;right:0;bottom:0;margin:1px}.comment__message[data-v-d797e6e4]{white-space:pre-wrap;word-break:break-word;max-height:70px;overflow:hidden}.comment__message--expanded[data-v-d797e6e4]{max-height:none;overflow:visible}.rich-contenteditable__input[data-v-d797e6e4]{min-height:44px;margin:0;padding:10px}","",{version:3,sources:["webpack://./apps/comments/src/components/Comment.vue"],names:[],mappings:"AAkQA,0BACC,iBAAA,CACA,mBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,eAAA,CACA,aAAA,CAGD,qEAEC,2BAAA,CAGD,kCACC,eAAA,CACA,kBAAA,CACA,sBAAA,CACA,mCAAA,CAGD,uEAEC,gBAAA,CACA,mCAAA,CAGD,qEAEC,iBAAA,CAEA,iBAAA,CAGD,kCACC,4BAAA,CACA,OAAA,CACA,QAAA,CAEA,UAAA,CAGD,mCACC,oBAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,6CACC,eAAA,CACA,gBAAA,CAKH,8CACC,eAAA,CACA,QAAA,CACA,YA7DiB",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@use "sass:math";\n\n$comment-padding: 10px;\n\n.comment {\n\tposition: relative;\n\tpadding: $comment-padding 0 $comment-padding * 1.5;\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmin-height: 44px;\n\t\tpadding: math.div($comment-padding, 2) 0;\n\t}\n\n\t&__author,\n\t&__actions {\n\t\tmargin-left: $comment-padding !important;\n\t}\n\n\t&__author {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&_loading,\n\t&__timestamp {\n\t\tmargin-left: auto;\n\t\tcolor: var(--color-text-maxcontrast);\n\t}\n\n\t&__editor,\n\t&__message {\n\t\tposition: relative;\n\t\t// Avatar size, align with author name\n\t\tpadding-left: 32px + $comment-padding;\n\t}\n\n\t&__submit {\n\t\tposition: absolute !important;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\t// Align with input border\n\t\tmargin: 1px;\n\t}\n\n\t&__message {\n\t\twhite-space: pre-wrap;\n\t\tword-break: break-word;\n\t\tmax-height: 70px;\n\t\toverflow: hidden;\n\t\t&--expanded {\n\t\t\tmax-height: none;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n}\n\n.rich-contenteditable__input {\n\tmin-height: 44px;\n\tmargin: 0;\n\tpadding: $comment-padding;\n}\n\n'],sourceRoot:""}]),t.Z=a},68610:function(n,t,e){"use strict";var r=e(87537),o=e.n(r),s=e(23645),a=e.n(s)()(o());a.push([n.id,".comments__error[data-v-7a78e295]{margin-top:0}.comments__info[data-v-7a78e295]{height:60px;color:var(--color-text-maxcontrast);text-align:center;line-height:60px}","",{version:3,sources:["webpack://./apps/comments/src/views/Comments.vue"],names:[],mappings:"AAsRC,kCACC,YAAA,CAGD,iCACC,WAAA,CACA,mCAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.comments {\n\t// Do not add emptycontent top margin\n\t&__error{\n\t\tmargin-top: 0;\n\t}\n\n\t&__info {\n\t\theight: 60px;\n\t\tcolor: var(--color-text-maxcontrast);\n\t\ttext-align: center;\n\t\tline-height: 60px;\n\t}\n}\n"],sourceRoot:""}]),t.Z=a},69862:function(){},40964:function(){}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var s=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,o.amdD=function(){throw new Error("define cannot be used indirect")},o.amdO={},n=[],o.O=function(t,e,r,s){if(!e){var a=1/0;for(m=0;m<n.length;m++){e=n[m][0],r=n[m][1],s=n[m][2];for(var i=!0,c=0;c<e.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((function(n){return o.O[n](e[c])}))?e.splice(c--,1):(i=!1,s<a&&(a=s));if(i){n.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var m=n.length;m>0&&n[m-1][2]>s;m--)n[m]=n[m-1];n[m]=[e,r,s]},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,{a:t}),t},o.d=function(n,t){for(var e in t)o.o(t,e)&&!o.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},o.j=6335,function(){o.b=document.baseURI||self.location.href;var n={6335:0};o.O.j=function(t){return 0===n[t]};var t=function(t,e){var r,s,a=e[0],i=e[1],c=e[2],u=0;if(a.some((function(t){return 0!==n[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var m=c(o)}for(t&&t(e);u<a.length;u++)s=a[u],o.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return o.O(m)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}(),o.nc=void 0;var s=o.O(void 0,[7874],(function(){return o(68328)}));s=o.O(s)}();
//# sourceMappingURL=comments-comments-app.js.map?v=3b29b2ef288937804296