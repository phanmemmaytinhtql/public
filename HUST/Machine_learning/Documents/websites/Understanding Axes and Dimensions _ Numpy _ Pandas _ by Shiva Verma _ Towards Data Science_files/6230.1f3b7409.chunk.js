(self.webpackChunklite=self.webpackChunklite||[]).push([[6230],{71254:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(67294);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=r.createElement("path",{d:"M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z",fillRule:"evenodd"});const i=function(t){return r.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25"},t),a)}},6106:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(67294);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=r.createElement("path",{d:"M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z"});const i=function(t){return r.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25"},t),a)}},33241:(t,e,n)=>{"use strict";n.d(e,{g:()=>d,Z:()=>p});var r=n(28655),o=n.n(r),a=n(71439),i=n(80439),s=n(67294),u=n(12291),l=n(85277);function c(){var t=o()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      isBlocking\n    }\n  }\n"]);return c=function(){return t},t}var d=(0,a.Ps)(c());const p=(0,u.$j)()((function(t){var e=t.targetAuthorId,n=t.targetPostId,r=t.dispatch,o=t.children,a=t.onOptimisticComplete,u=t.isBlocking;return s.createElement(i.mm,{mutation:d,onCompleted:function(){r((0,l.Dx)({message:"Successfully reported post."}))}},(function(t){return o({mutate:function(r,o){var i=t({variables:{targetAuthorId:e,targetPostId:n,alsoBlockAuthor:r,reason:o},optimisticResponse:{__typename:"Mutation",reportStoryAndMaybeBlockAuthor:{__typename:"User",id:e,isBlocking:u||r}}});return a&&a(),i}})}))}))},86753:(t,e,n)=>{"use strict";n.d(e,{z:()=>k,Z:()=>C});var r=n(63038),o=n.n(r),a=n(28655),i=n.n(a),s=n(71439),u=n(67294),l=n(3021),c=n(16528),d=n(62181),p=n(267),f=n(7530),m=n(33914),g=n(62630),E=n(27572),v=n(28309),I=n(14391),h=n(67297),_=n(71254),y=n(6106);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var S=u.createElement("path",{d:"M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13c.2.18.52.17.71-.03a.5.5 0 0 0 .12-.29H19V6z"});const P=function(t){return u.createElement("svg",b({width:25,height:25,viewBox:"0 0 25 25"},t),S)};var R=n(27952);function A(){var t=i()(["\n  fragment BookmarkButton_post on Post {\n    ...SusiClickable_post\n    ...WithSetReadingList_post\n  }\n  ","\n  ","\n"]);return A=function(){return t},t}var k=(0,s.Ps)(A(),d.qU,l.jy),x=function(t){return{fill:t.baseColor.fill.light}},N=function(t){return{fill:t.baseColor.border.light,cursor:"default"}},D=function(){var t=(0,v.Iq)();return u.createElement(P,{className:t(N)})};function C(t){var e=t.post,n=t.withTooltip,r=void 0===n||n,a=t.susiEntry,i=e.id,s=e.readingList,b=(0,v.Iq)(),S=(0,h.v)((function(t){return t.config.authDomain})),P=(0,g.Av)(),A=(0,E.pK)(),k=(0,p.XC)(),N=null==k?void 0:k.READING_LIST_UPDATED,C=u.useState(r),L=o()(C,2),O=L[0],T=L[1],w=u.useState(s||I.sx.READING_LIST_NONE),U=o()(w,2),G=U[0],j=U[1];u.useEffect((function(){j(s||I.sx.READING_LIST_NONE)}),[s]);var B=u.useCallback((function(){r&&T(!0)}),[r]);return u.createElement(c.Q_,null,(function(t){return t?s?u.createElement("div",{className:b(x)},u.createElement(l.sN,{post:e},(function(t){return u.createElement(m._,{isVisible:O,targetDistance:10,tooltipText:(n=s,{READING_LIST_NONE:"Save story",READING_LIST_ARCHIVE:"Archived",READING_LIST_QUEUE:"Unsave Story"}[n]),onMouseLeave:B},u.createElement(f.rU,{onClick:function(){return function(t){if(s){var n=(o=s,{READING_LIST_NONE:I.sx.READING_LIST_QUEUE,READING_LIST_ARCHIVE:null,READING_LIST_QUEUE:I.sx.READING_LIST_NONE}[o]);if(!n)return;j(n),P.event(function(t){return{READING_LIST_NONE:"post.addedBookmark",READING_LIST_ARCHIVE:"post.addedArchive",READING_LIST_QUEUE:"post.removedBookmark"}[t]}(s),{postId:i,source:A}),t(n)().catch((function(){j(s)})),r&&T(!1),N&&N(e,n)}var o}(t)},ariaLabel:"Bookmark Post"},function(t){return{READING_LIST_NONE:u.createElement(_.Z,null),READING_LIST_ARCHIVE:u.createElement(D,null),READING_LIST_QUEUE:u.createElement(y.Z,null)}[t]}(G)));var n}))):null:u.createElement(m._,{isVisible:O,placement:"top",targetDistance:10,tooltipText:"Bookmark story"},u.createElement(d.R9,{post:e,operation:"register",actionUrl:(0,R.XET)(S,i),susiEntry:a},u.createElement(_.Z,{className:b(x)})))}))}},3021:(t,e,n)=>{"use strict";n.d(e,{jy:()=>y,sN:()=>b});var r=n(63038),o=n.n(r),a=n(28655),i=n.n(a),s=n(71439),u=n(46829),l=n(14391);function c(){var t=i()(["\n  fragment WithSetReadingList_post on Post {\n    ...ReadingList_post\n  }\n  ","\n"]);return c=function(){return t},t}function d(){var t=i()(["\n  mutation UnarchivePostDefault($targetPostId: ID!) {\n    unarchivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return d=function(){return t},t}function p(){var t=i()(["\n  mutation ArchivePostDefault($targetPostId: ID!) {\n    archivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return p=function(){return t},t}function f(){var t=i()(["\n  mutation UnbookmarkPostDefault($targetPostId: ID!) {\n    unbookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return f=function(){return t},t}function m(){var t=i()(["\n  mutation BookmarkPostDefault($targetPostId: ID!) {\n    bookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return m=function(){return t},t}function g(){var t=i()(["\n  fragment ReadingList_post on Post {\n    __typename\n    id\n    readingList\n  }\n"]);return g=function(){return t},t}var E=(0,s.Ps)(g()),v=(0,s.Ps)(m(),E),I=(0,s.Ps)(f(),E),h=(0,s.Ps)(p(),E),_=(0,s.Ps)(d(),E),y=(0,s.Ps)(c(),E),b=function(t){var e=t.children,n=t.post,r=n.id,a=function(t){var e=(0,u.useMutation)(v,{variables:{targetPostId:t},optimisticResponse:{bookmarkPost:{__typename:"Post",id:t,readingList:l.sx.READING_LIST_QUEUE}}});return o()(e,1)[0]}(r),i=function(t){var e=(0,u.useMutation)(I,{variables:{targetPostId:t},optimisticResponse:{unbookmarkPost:{__typename:"Post",id:t,readingList:l.sx.READING_LIST_NONE}}});return o()(e,1)[0]}(r),s=function(t){var e=(0,u.useMutation)(h,{variables:{targetPostId:t},optimisticResponse:{archivePost:{__typename:"Post",id:t,readingList:l.sx.READING_LIST_ARCHIVE}}});return o()(e,1)[0]}(r),c=function(t){var e=(0,u.useMutation)(_,{variables:{targetPostId:t},optimisticResponse:{unarchivePost:{__typename:"Post",id:t,readingList:l.sx.READING_LIST_QUEUE}}});return o()(e,1)[0]}(r);return r?e((function(t){return function(){switch(n.readingList){case l.sx.READING_LIST_NONE:if("READING_LIST_QUEUE"===t)return a();break;case l.sx.READING_LIST_QUEUE:if("READING_LIST_NONE"===t)return i();if("READING_LIST_ARCHIVE"===t)return s();break;case l.sx.READING_LIST_ARCHIVE:if(!t)return r;if("READING_LIST_NONE"===t)return i();if("READING_LIST_QUEUE"===t)return c()}throw new Error('Invalid reading list change from "'.concat(n.readingList||"unkown",'" to "').concat(t,'".'))}})):null}},71245:(t,e,n)=>{"use strict";n.d(e,{Lf:()=>g,h3:()=>E,yb:()=>v});var r=n(63038),o=n.n(r),a=n(28655),i=n.n(a),s=n(71439),u=n(46829),l=n(67294),c=n(14391);function d(){var t=i()(["\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return d=function(){return t},t}function p(){var t=i()(["\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return p=function(){return t},t}var f=(0,s.Ps)(p()),m=(0,s.Ps)(d()),g=function(t){var e=(0,u.useMutation)(f),n=o()(e,1)[0];return(0,l.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.PENDING},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:t.id,statusForCollection:c.Zj.PENDING,pendingCollection:e}}})}),[t])},E=function(t){var e=(0,u.useMutation)(f),n=o()(e,1)[0];return(0,l.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.APPROVED}})}),[t])},v=function(t){var e=(0,u.useMutation)(m),n=o()(e,1)[0];return(0,l.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.REMOVED},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:t.id,statusForCollection:null,collection:null,pendingCollection:null}}}).then((function(t){if(t.errors&&t.errors[0])throw t.errors[0];return t}))}),[t])}},73232:(t,e,n)=>{"use strict";n.d(e,{Q:()=>r,t:()=>o});var r="This story is also a response to another story. Are you sure you want to delete this story?",o="This story is also a response to another story. Any edits are applied to both."},90639:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var r=n(63038),o=n.n(r),a=n(67294),i=n(7530),s=n(64504);const u=function(t){var e=t.isVisible,n=t.hide,r=t.onSubmit,u=t.isResponse,l=a.useState(!1),c=o()(l,2),d=c[0],p=c[1],f=a.useState("Spam"),m=o()(f,2),g=m[0],E=m[1],v=a.useCallback((function(t,e){return E(e)}),[]);return a.createElement(i.Vq,{isVisible:e,hide:n,noPortal:u,withCloseButton:!1,customBackgroundColor:u?"rgba(255, 255, 255, 0.97)":"rgba(255, 255, 255, 0.94)"},a.createElement(i.xu,{height:"550px",width:u?"100%":"900px",background:u?"none":"white",borderRadius:"4px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:u?"none":"rgba(0, 0, 0, 0.15) 0px 2px 10px",padding:"18px",position:"relative",sm:{boxShadow:"none",background:"none"},xs:{boxShadow:"none",background:"none"}},a.createElement(i.xu,{display:"flex",margin:"auto",flexDirection:"column",alignItems:u?"flex-start":"center"},a.createElement(s.X6,{scale:"M"},"Report ",u?"Response":"Story"),a.createElement(i.xu,{display:"flex",flexDirection:"column",width:"100%",paddingRight:"5px",marginBottom:"30px"},a.createElement(i.xu,{marginTop:"25px",marginBottom:"30px",padding:"5px 0"},a.createElement(i.Ee,{onChange:v,value:g,radioStyle:"SUBTLE",options:[{name:"Spam",value:"Spam"},{name:"Harassment",value:"Harassment"},{name:"Rules Violation",value:"Other"}]})),a.createElement(i.XZ,{checked:d,onChange:function(){p(!d)}},a.createElement(i.xu,{paddingTop:u?"16px":"0"},"Also block the author of this ",u?"response":"story"))),a.createElement(i.xu,{display:"flex",justifyContent:"center",marginBottom:"10px"},a.createElement(i.xu,{marginRight:"8px"},a.createElement(i.zx,{onClick:n},"Cancel")),a.createElement(i.zx,{buttonStyle:"ERROR",onClick:function(){r(d,g),n()}},"Report")),a.createElement(i.xu,{marginTop:"50px",textAlign:u?"left":"center"},a.createElement(s.F,{scale:"M",tag:"div"},"Report"," ",a.createElement(i.rU,{href:"https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"copyright infringement")," ","or"," ",a.createElement(i.rU,{href:"https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"trademark infringement"),". ",!u&&a.createElement("br",null),"Read"," ",a.createElement(i.rU,{href:"https://medium.com/policy/medium-rules-30e5502c4eb4",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"our rules"),"."))),!u&&a.createElement(i.PZ,{onClick:n,size:"LARGE",absoluteOffset:"18px"})))}},267:(t,e,n)=>{"use strict";n.d(e,{XC:()=>l,EI:()=>c});var r=n(59713),o=n.n(r),a=n(67294);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=a.createContext({}),l=function(){return a.useContext(u)},c=function(t){var e=t.context,n=t.extendContext,r=void 0!==n&&n,o=t.children,i=l();return r&&i&&(e=s(s({},i),e)),a.createElement(u.Provider,{value:e},o)}},39171:(t,e,n)=>{"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,i=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{B:()=>a});var a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){var t,n=r(e);try{for(n.s();!(t=n.n()).done;)(0,t.value)()}catch(t){n.e(t)}finally{n.f()}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6230.1f3b7409.chunk.js.map