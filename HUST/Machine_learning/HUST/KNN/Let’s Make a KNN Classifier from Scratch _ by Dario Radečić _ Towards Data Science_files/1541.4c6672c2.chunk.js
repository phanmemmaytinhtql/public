(self.webpackChunklite=self.webpackChunklite||[]).push([[1541],{54415:(e,n,t)=>{"use strict";t.d(n,{v:()=>s,G:()=>d});var r=t(28655),o=t.n(r),l=t(71439),i=t(67294),a=t(73882),u=t(98281);function c(){var e=o()(["\n  fragment PublisherAvatar_publisher on Publisher {\n    __typename\n    ... on Collection {\n      id\n      ...CollectionAvatar_collection\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ","\n  ","\n"]);return c=function(){return e},e}var s=(0,l.Ps)(c(),a.d,u.WQ),d=function(e){var n=e.link,t=void 0!==n&&n,r=e.scale,o=void 0===r?"M":r,l=e.publisher;switch(l.__typename){case"User":return i.createElement(u.ZP,{link:t,scale:o,user:l});case"Collection":return i.createElement(a.v,{link:t,size:u.wC[o],collection:l});default:return null}}},78886:(e,n,t)=>{"use strict";t.d(n,{KL:()=>T,Lk:()=>F,eB:()=>R,qy:()=>G,FB:()=>j});var r=t(28655),o=t.n(r),l=t(59713),i=t.n(l),a=t(63038),u=t.n(a),c=t(46829),s=t(71439),d=t(67294),p=t(54415),m=t(44935),f=t(53976),v=t(86280),h=t(68421),g=t(41832),b=t(22091),E=t(64504),w=t(67995),y=t(62630),x=t(27572),S=t(28309),O=t(19551),I=t(14391),L=t(67297),k=t(27952);function C(){var e=o()(["\n  query PublisherSidebarFollowsQuery($userId: ID!, $limit: Int) {\n    userFollows(userId: $userId, limit: $limit) {\n      ... on User {\n        hasDomain\n        ...UserMentionTooltip_user\n        ...PublisherSidebarFollows_followedEntity\n      }\n      ... on Collection {\n        ...CollectionTooltip_collection\n        ...PublisherSidebarFollows_followedEntity\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return C=function(){return e},e}function U(){var e=o()(["\n  fragment PublisherSidebarFollows_followedEntity on Publisher {\n    __typename\n    id\n    name\n    ...PublisherAvatar_publisher\n  }\n  ","\n"]);return U=function(){return e},e}function P(){var e=o()(["\n  fragment PublisherSidebarFollows_user on User {\n    id\n    name\n    username\n    socialStats {\n      followingCount\n      followerCount\n    }\n    ...userUrl_user\n  }\n  ","\n"]);return P=function(){return e},e}function B(){var e=o()(["\n  fragment PublisherSidebarFollows_customStyleSheet on CustomStyleSheet {\n    id\n    blogroll {\n      visibility\n    }\n  }\n"]);return B=function(){return e},e}function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N,T=function(e){var n,t=(0,f.V)({name:"enable_blogrolls",placeholder:!1}),r=(null==e||null===(n=e.blogroll)||void 0===n?void 0:n.visibility)===I.n$.BLOGROLL_VISIBILITY_SIDEBAR;return{isBlogrollInSidebar:t&&r}},F=d.createContext({homepageUserId:null,postId:null});!function(e){e[e.Initial=0]="Initial",e[e.Secondary=1]="Secondary",e[e.Dismissed=2]="Dismissed",e[e.Navigating=3]="Navigating"}(N||(N={}));var A=function(e){return{backgroundColor:e.backgroundColor,position:"absolute",height:"100%",width:"100%",opacity:".65"}},R=function(e){var n,t,r,o,l=e.publisher,i=e.isVisible,a=e.customStyleSheet,s=e.withBottomBorder,f=void 0!==s&&s,C=(0,S.Iq)(),U=(0,v.YC)().value,P=(0,L.v)((function(e){return e.config.authDomain})),B=(0,L.v)((function(e){return e.config.isAmp})),_=(0,L.v)((function(e){return e.navigation.currentLocation})),T=(0,k.MzF)(null!==(n=l.username)&&void 0!==n?n:""),R=d.useState(N.Initial),G=u()(R,2),j=G[0],z=G[1],q=(0,w.n)({name:"detail",scale:"S",clamp:1,leadingTrim:!1,color:"LIGHTER"}),M=C([q,{wordBreak:"break-all"}]),$=!(null==U||!U.dismissableFlags.includes(I.T3.BLOGROLL_ENABLE)),W="User"===l.__typename&&l.id===(null==U?void 0:U.id),X=(null==a||null===(t=a.blogroll)||void 0===t?void 0:t.visibility)===I.n$.BLOGROLL_VISIBILITY_SIDEBAR,Y=W&&!$&&!X,J=(0,y.Av)(),Z=d.useContext(F),Q=(0,O.g)({onPresentedFn:function(){return J.event("sidebar.blogrollViewed",D(D({},Z),{},{viewerIsAuthor:W,showingGhost:Y}))}}),H=(0,c.useLazyQuery)(V,{ssr:!1,variables:{userId:l.id,limit:5}}),K=u()(H,2),ee=K[0],ne=K[1],te=ne.called,re=ne.loading,oe=ne.error,le=ne.data,ie=(le=void 0===le?{userFollows:void 0}:le).userFollows;return B||!Y&&!X||j===N.Dismissed?null:te?re||oe||!ie||!ie.length?null:d.createElement(x.cW,{source:{name:"blogrolls_sidebar",postId:Z.postId||void 0}},d.createElement(b.xu,{ref:Q,position:"relative",borderBottom:f?"NONE":void 0},Y?d.createElement("div",{className:C([A])}):null,d.createElement(b.xu,{marginTop:"32px",marginBottom:"32px"},d.createElement(h.o,{flag:I.T3.BLOGROLL_ENABLE,isVisible:i&&Y,targetDistance:15,renderFn:function(e){return function(){var n=j===N.Initial?"Blogrolls help your readers discover writers you follow. Writers who have published most recently show up at the top.":"You can always turn on blogroll in your design editor. Until then, readers can get to your Following from the About page.",t=function(n){z(n),e()};return d.createElement(b.xu,{minWidth:"240px",padding:"20px"},d.createElement(E.F,{scale:"S"},n),d.createElement(b.xu,{marginTop:"20px"},d.createElement(E.F,{scale:"S"},j?d.createElement(b.rU,{linkStyle:"OBVIOUS",onClick:function(){return t(N.Dismissed)}},"Got it"):d.createElement(d.Fragment,null,d.createElement(b.rU,{linkStyle:"OBVIOUS",href:(0,k.aLX)(P,{unfold:"Blogroll",action:"enableBlogroll"}),onClick:function(){return t(N.Navigating)}},"Turn on"),d.createElement("span",{className:C({marginLeft:"8px"})},d.createElement(b.rU,{linkStyle:"SUBTLE",onClick:function(){return z(N.Secondary)}},"Not now"))))))}}},d.createElement("span",{className:C({textTransform:"uppercase",marginBottom:"8px"})},d.createElement(E.F,{scale:"S",tag:"span"},"".concat(l.name," Follows"))),d.createElement("ul",{className:C({marginTop:"8px"})},ie.map((function(e){var n="User"===e.__typename?(0,k.AWr)(e,P):(0,k.WGd)(e,_,P);return d.createElement("li",{className:C({display:"grid",gridTemplateColumns:"auto 1fr auto"}),key:null==e?void 0:e.id},d.createElement(b.xu,{paddingRight:"12px"},d.createElement(p.G,{link:!0,publisher:e,scale:"XXXS"})),d.createElement("section",{className:C({wordBreak:"break-word"})},d.createElement(b.xu,{marginBottom:"8px",paddingRight:"10px",tag:"span"},d.createElement(b.rU,{href:n},d.createElement(b.$W,{placement:"right",targetDistance:15,mouseEnterDelay:500,mouseLeaveDelay:0,noPortal:!1,disablePortalOverlay:!0,role:"tooltip",popoverRenderFn:function(){return"User"===e.__typename?d.createElement(g.Z,{user:e}):d.createElement(m.L,{collection:e,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}},d.createElement("h4",{className:M},e.name))))))}))),(null===(r=l.socialStats)||void 0===r?void 0:r.followingCount)>=5?d.createElement(E.F,{scale:"S"},d.createElement(b.rU,{linkStyle:"SUBTLE",href:T},"See all (",null===(o=l.socialStats)||void 0===o?void 0:o.followingCount,")")):null)))):(ee(),null)},G=(0,s.Ps)(B()),j=(0,s.Ps)(P(),k.$mN),z=(0,s.Ps)(U(),p.v),V=(0,s.Ps)(C(),g.O,m.g,z)},44935:(e,n,t)=>{"use strict";t.d(n,{L:()=>p,g:()=>m});var r=t(28655),o=t.n(r),l=t(71439),i=t(67294),a=t(73882),u=t(84783),c=t(7530),s=t(64504);function d(){var e=o()(["\n  fragment CollectionTooltip_collection on Collection {\n    id\n    name\n    description\n    subscriberCount\n    ...CollectionAvatar_collection\n    ...CollectionFollowButton_collection\n  }\n  ","\n  ","\n"]);return d=function(){return e},e}var p=function(e){var n=e.collection,t=e.buttonSize,r=e.buttonStyleFn,o=n.name,l=n.description;return i.createElement(c.xu,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(c.xu,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},i.createElement(c.xu,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(s.X6,{scale:"S"},o),i.createElement(s.F,{scale:"S"},l)),i.createElement(c.xu,null,i.createElement(a.v,{collection:n,link:!0}))),i.createElement(c.xu,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(s.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),i.createElement(u.Fp,{collection:n,simpleButton:!0,buttonSize:t,buttonStyleFn:r,susiEntry:"follow_card"})))},m=(0,l.Ps)(d(),a.d,u.Iq)},78221:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s,U:()=>d});var r=t(28655),o=t.n(r),l=t(71439),i=t(67294),a=t(8558),u=t(90038);function c(){var e=o()(["\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function s(e){var n=e.sequence,t=e.width,r=e.height,o=n.title,l=n.coverImage;return l?i.createElement("div",null,i.createElement(a.UV,{miroId:l.id,alt:o||"Collection on Medium",width:t,height:r,strategy:u._S.Resample,freezeGifs:!1})):null}var d=(0,l.Ps)(c())},93258:(e,n,t)=>{"use strict";t.d(n,{d:()=>m});var r=t(63038),o=t.n(r),l=t(67294),i=t(885),a=t(86280),u=t(324),c=t(7530),s=t(28309),d=t(51064),p=t(534),m=function(e){var n=e.buttonSize,t=e.targetUserId,r=(0,d.O)(!1),m=o()(r,3),f=m[0],v=m[1],h=m[2],g=(0,s.Fg)(),b=(0,u.Uo)().baseTheme,E=(0,p.q3)(g,b),w=(0,a.YC)().value;return w?l.createElement(s.f6,{theme:E},l.createElement(i.Z,{targetUserId:t,viewerId:w&&w.id},(function(e){var t=e.mutate;return l.createElement(c.zx,{buttonStyle:f?"SUBTLE":"ERROR",onClick:t,size:n||"REGULAR",onMouseEnter:v,onMouseLeave:h},f?"Unblock":"Blocked")}))):null}},79208:(e,n,t)=>{"use strict";t.d(n,{Dm:()=>r,JA:()=>w});var r,o=t(63038),l=t.n(o),i=t(87757),a=t.n(i),u=t(48926),c=t.n(u),s=t(94301),d=t.n(s),p=t(67294),m=t(61250);!function(e){e[e.NONE=0]="NONE",e[e.STARTING=1]="STARTING",e[e.UPLOADING=2]="UPLOADING",e[e.UPLOADED=3]="UPLOADED"}(r||(r={}));var f=new Set(["jpg","jpeg","png","gif"]),v=function(e){return new Promise((function(n){return setTimeout(n,e)}))},h=function(){var e=c()(a().mark((function e(n,t){var r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(n,{credentials:"same-origin",method:"POST",headers:{accept:"application/json","Content-Type":"application/json","x-xsrf-token":"1","X-Obvious-CID":"web"},body:JSON.stringify({url:t})});case 2:return r=e.sent,e.next=5,r.text();case 5:return o=e.sent,e.abrupt("return",JSON.parse(o.replace("])}while(1);</x>","")));case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),g=function(){var e=c()(a().mark((function e(n,t){var r,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("uploadedFile",t),e.next=4,d()(n,{credentials:"same-origin",method:"POST",headers:{"x-xsrf-token":"1","X-Obvious-CID":"web"},body:r});case 4:return o=e.sent,e.next=7,o.text();case 7:return l=e.sent,e.abrupt("return",JSON.parse(l.replace("])}while(1);</x>","")));case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),b="CreateUpload",E=new Error("Image upload failed. The URL you provided may be invalid."),w=function(e,n,t){var o=p.useState(r.NONE),i=l()(o,2),u=i[0],s=i[1],d=p.useRef(null),w=p.useCallback((function(){d.current&&d.current.click()}),[d.current]),y=(0,m.BS)(b),x=(0,m.BS)("CreateUploadUrl");function S(){return O.apply(this,arguments)}function O(){return(O=c()(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(r.STARTING),e.next=3,v(0);case 3:s(r.UPLOADING);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=c()(a().mark((function t(o){var l,i,u,c,d;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(t.prev=2,x){t.next=5;break}throw new Error("Expected ".concat(b," route to exist"));case 5:return t.next=7,h(x.pathPattern,o);case 7:i=t.sent,u=i.success,c=i.payload,u&&null!=c&&null!==(l=c.value)&&void 0!==l&&l.fileId?((d=new Image).onload=function(){s(r.UPLOADED),e(c,{url:o,height:d.height,width:d.width},(function(){return s(r.NONE)}))},d.onerror=function(){n(E)},d.src=o):n(E),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),n(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function L(e){return k.apply(this,arguments)}function k(){return(k=c()(a().mark((function o(l){var i,u,c,d,p,m,v,h;return a().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(i=null==l?void 0:l[0]){o.next=3;break}return o.abrupt("return");case 3:if(u=i.name.split(".").pop(),f.has((null==u?void 0:u.toLowerCase())||"")){o.next=7;break}return t&&t(),o.abrupt("return");case 7:return o.next=9,S();case 9:if(o.prev=9,y){o.next=12;break}throw new Error("Expected ".concat(b," route to exist"));case 12:return o.next=14,g(y.pathPattern,i);case 14:d=o.sent,p=d.success,m=d.payload,p&&null!=m&&null!==(c=m.value)&&void 0!==c&&c.md5&&(v=URL.createObjectURL(i),(h=new Image).onload=function(){s(r.UPLOADED),e(m,{file:i,height:h.height,width:h.width},(function(){return s(r.NONE)}))},h.src=v),o.next=22;break;case 19:o.prev=19,o.t0=o.catch(9),n(o.t0);case 22:case"end":return o.stop()}}),o,null,[[9,19]])})))).apply(this,arguments)}function C(){L(this.files),this.value=""}return p.useEffect((function(){if(d.current)return d.current.addEventListener("change",C),function(){d.current&&d.current.removeEventListener("change",C)}}),[d.current]),{inputRef:d,fireClick:w,status:u,handleDropEvent:function(e){var n=e.dataTransfer;n&&L(n.files)},uploadUrl:function(e){return I.apply(this,arguments)}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1541.4c6672c2.chunk.js.map