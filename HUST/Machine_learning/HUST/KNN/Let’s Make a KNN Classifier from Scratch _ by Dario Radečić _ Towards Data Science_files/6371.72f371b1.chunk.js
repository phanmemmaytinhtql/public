(self.webpackChunklite=self.webpackChunklite||[]).push([[6371],{66443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.47 9.95h17v-3h-17v3zm16 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9zm-1 0h-13v9h13v-9z"}),i=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.47 12.45c0-.28.21-.5.48-.5h6.04c.27 0 .48.22.48.5 0 .27-.21.5-.48.5H9.95a.49.49 0 0 1-.48-.5z"});const l=function(e){return r.createElement("svg",o({width:25,height:25,viewBox:"0 1 25 25",fill:"#757575"},e),a,i)}},17298:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a=r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.48 7.45H3.46v10.13H16a.47.47 0 1 1 0 .94H3.46c-.54 0-.99-.42-.99-.94V7.45c0-.52.45-.93 1-.93h17c.55 0 1 .41 1 .93v5.57a.5.5 0 0 1-1 0V7.45zM5.47 10.02c0-.28.22-.5.5-.5h9.11a.5.5 0 1 1 0 1H5.97a.5.5 0 0 1-.5-.5zm.51 2.5a.5.5 0 0 0-.51.5c0 .27.23.5.51.5h5.98a.5.5 0 0 0 .51-.5.5.5 0 0 0-.51-.5H5.98zm12.52 3.02c.2-.2.5-.2.7 0l1.77 1.77 1.77-1.77a.5.5 0 1 1 .7.7l-1.76 1.78 1.76 1.76a.5.5 0 1 1-.7.71l-1.77-1.77-1.77 1.77a.5.5 0 0 1-.7-.7l1.76-1.77-1.76-1.77a.5.5 0 0 1 0-.7z"});const i=function(e){return r.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25",fill:"#757575"},e),a)}},94093:(e,t,n)=>{"use strict";n.d(t,{I:()=>m});var r,o=n(59713),a=n.n(o),i=n(67294),l=n(7530),c=n(64504);!function(e){e.S="S",e.L="L"}(r||(r={}));var s=n(28309),u=n(80637),d=n(67122),m=function(e){var t=e.children,n=e.scale,o=void 0===n?r.L:n,m=e.alpha,p=void 0===m?.05:m,f=e.verticalMargins,E=void 0===f?{normal:"24px",small:"24px"}:f,v=(0,s.Iq)();return i.createElement("div",{className:v((function(e){return a()({background:(0,d.Uy)(p),borderRadius:"4px",margin:"".concat(E.normal," -16px"),position:"relative"},u.sm(e),{margin:"".concat(E.small," -12px 0")})}))},i.createElement(l.xu,{display:"flex",justifyContent:"space-between",maxWidth:"740px",padding:"16px",sm:{padding:"12px"}},i.createElement(c.F,{scale:o,color:"DARKER"},t)))}},66371:(e,t,n)=>{"use strict";n.d(t,{Cs:()=>j,Dj:()=>z});var r=n(28655),o=n.n(r),a=n(71439),i=n(67294),l=n(28859),c=n(63038),s=n.n(c),u=n(46829),d=n(94093),m=n(64235),p=n(7530),f=n(62630),E=n(27572),v=n(28309),h=n(72955);function g(){var e=o()(["\n  fragment DigestReferredPostBodyCreatorPromo_user on User {\n    id\n    name\n    isFollowing\n  }\n"]);return g=function(){return e},e}var x=(0,a.Ps)(g()),I=function(e){var t=e.creator,n=e.postId,r=i.useRef(null),o=(0,v.Iq)(),a=(0,u.useMutation)(m.L,{variables:{targetUserId:t.id}}),l=s()(a,1)[0],c=(0,u.useMutation)(m.g,{variables:{targetUserId:t.id}}),g=s()(c,1)[0],x=(0,f.Av)(),I="post_body_cta",w=i.useCallback((function(){return x.event("user.followed",{targetUserId:t.id,followSource:I}),l()}),[t.id,I,l]),_=i.useCallback((function(){return x.event("user.unfollowed",{targetUserId:t.id,followSource:I}),g()}),[t.id,I,g]),y=(0,E.pK)(),b=!1,L=function(){!b&&R()&&(x.event("post.digestReferredFollowCreatorPromoViewed",{postId:n,targetUserId:t.id,source:y}),b=!0)},R=function(){var e;if(!r.current)return!1;var t=null===(e=r.current)||void 0===e?void 0:e.getBoundingClientRect(),n=t.top+t.height/2;return n>=0&&n<=window.innerHeight};i.useEffect((function(){return L(),window&&h.V6.on("scroll",L),function(){h.V6.off("scroll",L)}}),[]);var N=t.isFollowing;return i.createElement("div",{ref:r},i.createElement(d.I,{alpha:.02,verticalMargins:{normal:"42px",small:"28px"}},N?i.createElement(i.Fragment,null,"You’re now following ",t.name,"."," ",i.createElement(p.rU,{onClick:_,inline:!0,linkStyle:"OBVIOUS"},"Unfollow")):i.createElement(i.Fragment,null,"You've read a few stories by this writer."," ",i.createElement("span",{className:o({fontWeight:"bold"})},i.createElement(p.rU,{onClick:w,linkStyle:"OBVIOUS"},"Follow ",t.name))," ","to see more of their stories across Medium.")))},w=n(4743),_=n(47875),y=n(50493),b=n(88065),L=n(47713),R=n(57131),N=n(85828),T=n(50077),S=n(49925),C=n(85740),A=n(55077),k=n(98281),B=n(41832),P=n(22091),D=n(6688),O=n(27390);function M(){var e=o()(["\n  fragment PostBodyInserts_post on Post {\n    collection {\n      ...auroraHooks_publisher\n    }\n    creator {\n      ...auroraHooks_publisher\n      ...DigestReferredPostBodyCreatorPromo_user\n      ...UserMentionTooltip_user\n    }\n    isPublished\n    isShortform\n    # please note that postMeteringOptions is defined in PostHandler, which uses PostBodyInserts\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          name\n          text\n          type\n        }\n      }\n    }\n    ...CardByline_post\n    ...PostByline_post\n    ...PostFooterSocialPopover_post\n    ...ShareButtons_post\n    ...BookmarkButton_post\n    ...CreatorActionOverflowPopover_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return M=function(){return e},e}var U=function(){return null};function G(e){var t=e.post,n=(0,D.I)(),r=(0,S.GT)(t.collection||t.creator),o={marginTop:"32px"},a={post:t,source:{name:"post_actions_header"}};return i.createElement(l.TA,{className:n(o),name:"byline",type:"byline",offset:{left:-600}},i.createElement(p.xu,{display:"flex",justifyContent:"space-between",xs:{marginTop:o.marginTop},sm:{flexDirection:"column-reverse",marginTop:o.marginTop}},r&&t.creator?i.createElement(T.u_,{avatar:i.createElement(k.ZP,{user:t.creator,scale:"XXS",link:!0,withHalo:!0}),publisher:t.creator,href:t.mediumUrl||void 0,isOneLine:!0,publishedAt:t.firstPublishedAt,showStar:!!t.isLocked,timeToRead:!t.isShortform&&t.readingTime?"".concat((0,O.Vd)(t.readingTime)," min read"):void 0,post:t}):i.createElement(_.Z,{scale:"M",post:t,showBio:!1,hideCollection:!0}),i.createElement(p.xu,{display:"flex",alignItems:"flex-end",print:{display:"none"},xs:{marginLeft:"0px",marginBottom:"30px"},sm:{marginLeft:"0px",marginBottom:"30px"},md:{marginLeft:"30px"},lg:{marginLeft:"30px"},xl:{marginLeft:"30px"}},i.createElement(p.xu,{display:"flex",alignItems:"center"},t.isPublished&&(!r||!t.isShortform)&&i.createElement(i.Fragment,null,r?i.createElement(p.xu,{paddingRight:"8px"},i.createElement(N.$,a)):i.createElement(A.n,a),i.createElement(p.xu,{marginRight:"8px"},i.createElement(E.cW,{source:{name:"post_actions_header"}},i.createElement(L.o,{post:t,susiEntry:"bookmark_preview"}))),t&&i.createElement(p.xu,{flexGrow:"1"},i.createElement(p.Bn,null,(function(e){var n=e.show;return i.createElement(R.Z,{creator:null==t?void 0:t.creator,post:t,collection:null==t?void 0:t.collection,showLoadingIndicator:n})}))))))))}function H(e,t){return"".concat(t,"_").concat(e[t]?e[t].length:0)}function F(e,t,n,r,o){e[t]||(e[t]=[]),e[t].push({order:n,component:r,insertType:o})}function Z(e,t,n){return function(r){var o="number"==typeof n.titleIndex,a=n.subtitleIndex||n.titleIndex||0,l=t[a]&&t[a].name;if(l&&0===a&&!o){var c=i.createElement(G,{post:e,key:"insert_postBylineGroupComponent_".concat(H(r,"first"))});F(r,"first","before",i.createElement(P.Pm,{size:"inset",key:"insert_MaxWidth_PostBylineGroupComponent_".concat(H(r,"first"))},c),"BYLINE")}else l&&F(r,l,"after",i.createElement(G,{post:e,key:"insert_PostBylineGroupComponent_".concat(H(r,l))}),"BYLINE");return r}}function V(e,t,n){return(0,y.tE)(e)?function(r){var o="number"==typeof n.titleIndex,a=Math.max(n.bannerImageIndex||n.subtitleIndex||n.titleIndex||0,n.subtitleIndex||n.titleIndex||0),l=t[a]&&t[a].name;if(l&&0===a&&!o){var c=i.createElement(y.ZP,{post:e,mode:"INLINE",key:"insert_TOC_".concat(H(r,"first"))});F(r,"first","before",i.createElement(P.Pm,{size:"inset",key:"insert_MaxWidth_TableOfContents_".concat(H(r,"first"))},c),"TABLE_OF_CONTENTS")}else l&&F(r,l,"after",i.createElement(y.ZP,{post:e,mode:"INLINE",key:"insert_TableOfContents_".concat(H(r,l))}),"TABLE_OF_CONTENTS");return r}:function(e){return e}}function K(e,t,n){var r=(0,w.ZV)(t),o=r.index,a=r.ordering;return"number"==typeof o&&n?function(n){var r=t[o]&&t[o].name,l=i.createElement(I,{creator:e.creator,postId:e.id,key:"insert_DigestReferredPostBodyCreatorPromo_".concat(H(n,r))}),c=i.createElement(C.bZ,{name:"enable_digest_referred_follow_cta",placeholder:U,key:"insert_WithClientFlag_DigestReferredPostBodyCreatorPromo_".concat(H(n,r))},(function(e){return e?l:null}));return F(n,r,a,c,"DIGEST_REFERRED_CREATOR_PROMO"),n}:function(e){return e}}function z(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e&&e.content&&e.content.bodyModel&&e.content.bodyModel.paragraphs||void 0;if(n){var r=(0,w.LI)(n);return[Z(e,n,r),V(e,n,r),K(e,n,t)].reduce((function(e,t){return t(e)}),{})}}var j=(0,a.Ps)(M(),S.C5,x,T.yu,_.H,N.u,A.$,b.z,R.G,B.O)},50493:(e,t,n)=>{"use strict";n.d(t,{tA:()=>w,ZP:()=>b,tE:()=>_});var r=n(28655),o=n.n(r),a=n(71439),i=n(67294),l=n(4743),c=n(51684),s=n(82318),u=n(98024),d=n(28309),m={INLINE:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},SIDEBAR:{padding:"8px 0",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"".concat(c.ZR,"px"),":hover":{width:"200px"}}};function p(e){var t=(0,d.Iq)();return i.createElement("li",{className:t({overflow:"hidden"})},i.createElement(u.F,{scale:"M",color:"DARKER"},i.createElement(s.Z,{href:"#".concat(e.destination),onClick:function(t){t.preventDefault(),function(e){var t=document.getElementById(e);if(t){var n=t.offsetTop-56;window.scrollTo({left:0,top:n,behavior:"smooth"}),window.history.pushState({},"","#".concat(e))}}(e.destination)},disableSourceParam:!0,noFollow:!0,inline:!0},i.createElement("div",{className:t(m[e.mode]),title:e.text},e.text))))}var f=n(7654),E=n(42933),v=n(86021),h=n(14391),g=n(67122),x=n(25885);function I(){var e=o()(["\n  fragment TableOfContents_post on Post {\n    id\n    collection {\n      id\n    }\n    content(postMeteringOptions: $postMeteringOptions) {\n      bodyModel {\n        paragraphs {\n          id\n          name\n          type\n          text\n        }\n      }\n    }\n  }\n"]);return I=function(){return e},e}var w=(0,a.Ps)(I()),_=function(e){return!!(e.collection&&e.collection.id&&["3ec9f38ac0bd","3f6ecf56618","8d6b8a439e32"].includes(e.collection.id))||["8135e6744d59","21f0e9818b3a"].includes(e.id)},y={INLINE:{display:{xs:"block",sm:"block",md:"block",lg:"block",xl:"none"},marginTop:"35px"},SIDEBAR:{display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"},margin:"50px 0",fontSize:"16px",":hover":{width:"200px"}}};const b=function(e){var t=e.post,n=e.mode,r=e.heightRef,o=(0,d.Iq)(),a=(0,d.Fg)().backgroundColor,c=function(e){var t=(e||{content:{bodyModel:{paragraphs:null}}}).content.bodyModel.paragraphs;if(!t)throw new Error("Expected post to have paragraphs.");var n=(0,l.LI)(t),r=t.filter((function(e){return function(e){switch(e){case h.NJ.H1:case h.NJ.H2:case h.NJ.H3:return!0}return!1}(e.type)}));return null!==n.titleIndex&&r.splice(0,1),r.length>1?r:[]}(t);if(!_(t)||null==c||!c.length)return null;var s,u,m=i.createElement(E.Z,{overflow:"hidden",marginTop:"16px"},i.createElement("ol",{className:o({marginTop:"5px"})},c.map((function(e){return i.createElement(p,{key:"toc_".concat(e.name),text:e.text||"",destination:e.name||"",mode:n})})))),I=(0,x.n2)(a),w=function(e){return"rgba(".concat(I[0],", ").concat(I[1],", ").concat(I[2],", ").concat(e,")")};switch(n){case"INLINE":var b=i.createElement(v.Lh,{scale:"M",color:"LIGHTER"},i.createElement("div",{className:o({marginRight:"7px"})},"Jump To Section"));return i.createElement("div",{className:o(y[n])},i.createElement(E.Z,{borderBottom:"BASE_LIGHTER",paddingBottom:"10px"},i.createElement(f.$,{titleComponent:b,width:"auto",arrowFill:(0,g.Uy)(.54)},m)));case"SIDEBAR":return i.createElement("div",{className:o(y[n])},i.createElement(v.Lh,{scale:"S",color:"LIGHTER"},i.createElement("div",{className:o({whiteSpace:"nowrap"})},"Table of Contents")),i.createElement(E.Z,{position:"relative"},i.createElement("div",{className:o((function(){return{background:"linear-gradient(".concat(w(1),",\n      ").concat(w(.5),",\n      ").concat(w(0),")"),width:"100%",height:"".concat(35,"px")}}))}),i.createElement("div",{className:o({overflowY:"scroll",scrollbarWidth:"none","-ms-overflow-style":"none","::-webkit-scrollbar":{display:"none"},height:(s=null!=r&&r.current?r.current.offsetHeight:0,u=Math.max("undefined"!=typeof window?window.innerHeight-s-106-100:150,150),"".concat(u,"px")),paddingBottom:"".concat(35,"px"),position:"relative",top:"-".concat(35,"px")})},m),i.createElement("div",{className:o((function(){return{background:"linear-gradient(".concat(w(0),",\n      ").concat(w(.5),",\n      ").concat(w(1),")"),position:"relative",width:"100%",height:"".concat(35,"px"),top:"-".concat(35,"px")}}))})));default:return null}}},47713:(e,t,n)=>{"use strict";n.d(t,{o:()=>L});var r=n(63038),o=n.n(r),a=n(67294),i=n(86753),l=n(9482),c=n(3021),s=n(86280),u=n(62181),d=n(7530),m=n(33914),p=n(62630),f=n(27572),E=n(28309),v=n(14391),h=n(67297),g=n(71254),x=n(66443),I=n(17298),w=n(27952),_=function(e,t){return e&&{READING_LIST_QUEUE:"READING_LIST_ARCHIVE",READING_LIST_ARCHIVE:"READING_LIST_NONE"}[t]},y=function(e){return{fill:e.baseColor.fill.lighter}},b=function(e){var t=e.currentReadingListType,n=(0,E.Iq)();return{READING_LIST_QUEUE:a.createElement(x.Z,{className:n(y)}),READING_LIST_ARCHIVE:a.createElement(I.Z,{className:n(y)})}[t]},L=function(e){var t=e.post,n=e.withTooltip,r=void 0===n||n,x=e.susiEntry,I=t.id,L=t.readingList,R=(0,E.Iq)(),N=(0,h.v)((function(e){return e.config.authDomain})),T=(0,p.Av)(),S=(0,f.pK)(),C=a.useContext(l.Q),A=C.isFirstLoadAndInReadingList,k=C.setIsFirstLoadAndInReadingList,B=a.useState(r),P=o()(B,2),D=P[0],O=P[1],M=a.useCallback((function(e,t){if(L){if(T.event({READING_LIST_QUEUE:"post.addedArchive",READING_LIST_ARCHIVE:"post.removedBookmark"}[L],{postId:I,source:S}),t(_(e,L))(),_(e,L)===v.sx.READING_LIST_NONE)return void k(!1);r&&O(!1)}}),[I,L,A,k,r,S]),U=a.useCallback((function(){r&&O(!0)}),[r]);return a.createElement(s.Q_,null,(function(e){return e?L&&a.createElement("div",null,!A||L!==v.sx.READING_LIST_QUEUE&&L!==v.sx.READING_LIST_ARCHIVE?a.createElement(i.Z,{post:t,susiEntry:x}):a.createElement(c.sN,{post:t},(function(t){return a.createElement(m._,{isVisible:D,targetDistance:10,tooltipText:(n=L,{READING_LIST_QUEUE:"Archive Story",READING_LIST_ARCHIVE:"Remove story from reading list"}[n]),onMouseLeave:U},a.createElement(d.rU,{onClick:function(){return M(e,t)}},a.createElement(b,{currentReadingListType:L})));var n}))):a.createElement("div",{className:R(y)},a.createElement(u.R9,{post:t,operation:"register",actionUrl:(0,w.XET)(N,I),susiEntry:x},a.createElement(g.Z,null)))}))}},9482:(e,t,n)=>{"use strict";n.d(t,{Q:()=>o});var r={isFirstLoadAndInReadingList:!0,setIsFirstLoadAndInReadingList:function(){return null}},o=n(67294).createContext(r)},7654:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var r=n(63038),o=n.n(r),a=n(67294),i=n(7530),l=n(64504),c=n(28309),s=n(73004),u=n(77455),d=n(51064),m=300,p=function(e){var t,n=e.children,r=e.title,p=e.titleComponent,f=e.width,E=e.arrowFill,v=null===(t=(0,u.K)().get("unfold"))||void 0===t?void 0:t.toLowerCase(),h=!!r&&v===r.toLowerCase(),g=(0,c.Iq)(),x=(0,d.O)(!1),I=o()(x,4),w=I[0],_=I[3],y=function(e){var t=a.useRef(null),n=a.useState("0px"),r=o()(n,2),i=r[0],l=r[1],c=a.useState(!1),s=o()(c,2),u=s[0],d=s[1];return a.useEffect((function(){var n=t.current;n&&(e?(l("".concat(n.getBoundingClientRect().height,"px")),d(!0),setTimeout((function(){l("auto"),d(!1)}),m)):"auto"===i&&(l("".concat(n.getBoundingClientRect().height,"px")),d(!0),setTimeout((function(){return l("0px")}),50),setTimeout((function(){return d(!1)}),m)))}),[e]),{height:i,isAnimating:u,ref:t}}(w),b=y.ref,L=y.height,R=y.isAnimating;return a.useEffect((function(){h&&_()}),[]),a.createElement(a.Fragment,null,a.createElement("button",{className:g({width:f||"100%",height:"100%",border:"none",textAlign:"left",outline:"none",cursor:"pointer",padding:"0px"}),onClick:_,disabled:R},a.createElement(i.xu,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},p||a.createElement(l.X6,{scale:"XS"},r||""),a.createElement(s.Z,{className:g((function(e){return{transition:"".concat(m,"ms transform"),transform:w?"rotate(180deg)":"rotate(0)",fill:E||e.baseColor.fill.normal}}))}))),a.createElement("div",{className:g({transition:"".concat(m,"ms height"),height:L,overflow:!w||R?"hidden":"visible",opacity:w?1:0})},a.createElement("div",{ref:b,className:g({opacity:w?1:0,transition:"".concat(m,"ms opacity"),display:"flex",justifyContent:"space-between",flexDirection:"column",flexFlow:"wrap"})},n)))}},55077:(e,t,n)=>{"use strict";n.d(t,{$:()=>d,n:()=>m});var r=n(28655),o=n.n(r),a=n(71439),i=n(67294),l=n(51607),c=n(7530),s=n(27572);function u(){var e=o()(["\n  fragment ShareButtons_post on Post {\n    id\n    isLimitedState\n    visibility\n    ...ShareButton_post\n  }\n  ","\n"]);return u=function(){return e},e}var d=(0,a.Ps)(u(),l.M);function m(e){var t=e.post,n=e.source,r="UNLISTED"===t.visibility;return i.createElement(s.cW,{source:n},i.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&i.createElement(l.T,{socialPlatform:"TWITTER",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),i.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&i.createElement(l.T,{socialPlatform:"LINKEDIN",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})),i.createElement(c.xu,{flexGrow:"0",paddingRight:"6px"},!r&&i.createElement(l.T,{socialPlatform:"FACEBOOK",buttonStyle:t.isLimitedState?"LINK_DISABLED":"LINK",post:t})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/6371.72f371b1.chunk.js.map