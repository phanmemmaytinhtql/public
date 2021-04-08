(self.webpackChunklite=self.webpackChunklite||[]).push([[8995],{54415:(e,n,t)=>{"use strict";t.d(n,{v:()=>c,G:()=>m});var r=t(28655),l=t.n(r),o=t(71439),i=t(67294),a=t(73882),u=t(98281);function s(){var e=l()(["\n  fragment PublisherAvatar_publisher on Publisher {\n    __typename\n    ... on Collection {\n      id\n      ...CollectionAvatar_collection\n    }\n    ... on User {\n      id\n      ...UserAvatar_user\n    }\n  }\n  ","\n  ","\n"]);return s=function(){return e},e}var c=(0,o.Ps)(s(),a.d,u.WQ),m=function(e){var n=e.link,t=void 0!==n&&n,r=e.scale,l=void 0===r?"M":r,o=e.publisher;switch(o.__typename){case"User":return i.createElement(u.ZP,{link:t,scale:l,user:o});case"Collection":return i.createElement(a.v,{link:t,size:u.wC[l],collection:o});default:return null}}},97297:(e,n,t)=>{"use strict";t.d(n,{gp:()=>d,DX:()=>p,b5:()=>f});var r=t(28655),l=t.n(r),o=t(71439),i=t(67294),a=t(22091),u=t(64504),s=t(27390),c=t(27952);function m(){var e=l()(["\n  fragment PublisherFollowingCount_publisher on Publisher {\n    __typename\n    id\n    ... on User {\n      socialStats {\n        followingCount\n      }\n      followedCollections\n      username\n    }\n  }\n"]);return m=function(){return e},e}var d=function(e){var n,t,r=null!==(n="Collection"===e.__typename?0:(null===(t=e.socialStats)||void 0===t?void 0:t.followingCount)+e.followedCollections)&&void 0!==n?n:0;return{followingCount:r,isFollowingCountVisible:r>0}},p=function(e){var n,t=e.publisher,r=e.linkStyle,l=void 0===r?"SUBTLE":r,o=d(t),m=o.followingCount,p=o.isFollowingCountVisible,f="User"===t.__typename?(0,c.MzF)(null!==(n=t.username)&&void 0!==n?n:""):"",g=!!f;if(!p)return null;var b="".concat((0,s.pY)(m)," Following");return g?i.createElement(a.rU,{linkStyle:l,href:f},b):i.createElement(u.F,{tag:"span",scale:"L",color:"DARKER"},b)},f=(0,o.Ps)(m())},78886:(e,n,t)=>{"use strict";t.d(n,{KL:()=>A,Lk:()=>N,eB:()=>j,qy:()=>V,FB:()=>z});var r=t(28655),l=t.n(r),o=t(59713),i=t.n(o),a=t(63038),u=t.n(a),s=t(46829),c=t(71439),m=t(67294),d=t(54415),p=t(97297),f=t(44935),g=t(53976),b=t(16528),v=t(68421),E=t(41832),h=t(22091),y=t(64504),w=t(67995),S=t(62630),_=t(27572),C=t(28309),I=t(19551),x=t(14391),B=t(67297),F=t(27390),O=t(27952);function L(){var e=l()(["\n  query PublisherSidebarFollowsQuery($userId: ID!, $limit: Int) {\n    userFollows(userId: $userId, limit: $limit) {\n      ... on User {\n        hasDomain\n        ...UserMentionTooltip_user\n        ...PublisherSidebarFollows_followedEntity\n      }\n      ... on Collection {\n        ...CollectionTooltip_collection\n        ...PublisherSidebarFollows_followedEntity\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return L=function(){return e},e}function P(){var e=l()(["\n  fragment PublisherSidebarFollows_followedEntity on Publisher {\n    __typename\n    id\n    name\n    ...PublisherAvatar_publisher\n  }\n  ","\n"]);return P=function(){return e},e}function U(){var e=l()(["\n  fragment PublisherSidebarFollows_user on User {\n    id\n    name\n    username\n    ...PublisherFollowingCount_publisher\n    ...userUrl_user\n  }\n  ","\n  ","\n"]);return U=function(){return e},e}function k(){var e=l()(["\n  fragment PublisherSidebarFollows_customStyleSheet on CustomStyleSheet {\n    id\n    blogroll {\n      visibility\n    }\n  }\n"]);return k=function(){return e},e}function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R,A=function(e){var n,t=(0,g.V)({name:"enable_blogrolls",placeholder:!1}),r=(null==e||null===(n=e.blogroll)||void 0===n?void 0:n.visibility)===x.n$.BLOGROLL_VISIBILITY_SIDEBAR;return{isBlogrollInSidebar:t&&r}},N=m.createContext({homepageUserId:null,postId:null});!function(e){e[e.Initial=0]="Initial",e[e.Secondary=1]="Secondary",e[e.Dismissed=2]="Dismissed",e[e.Navigating=3]="Navigating"}(R||(R={}));var G=function(e){return{backgroundColor:e.backgroundColor,position:"absolute",height:"100%",width:"100%",opacity:".65"}},j=function(e){var n,t,r=e.publisher,l=e.isVisible,o=e.customStyleSheet,i=e.withBottomBorder,a=void 0!==i&&i,c=(0,C.Iq)(),g=(0,b.YC)().value,L=(0,B.v)((function(e){return e.config.authDomain})),P=(0,B.v)((function(e){return e.config.isAmp})),U=(0,B.v)((function(e){return e.navigation.currentLocation})),k=(0,O.MzF)(null!==(n=r.username)&&void 0!==n?n:""),T=m.useState(R.Initial),A=u()(T,2),j=A[0],V=A[1],z=(0,w.n)({name:"detail",scale:"S",clamp:1,leadingTrim:!1,color:"LIGHTER"}),q=c([z,{wordBreak:"break-all"}]),$=!(null==g||!g.dismissableFlags.includes(x.T3.BLOGROLL_ENABLE)),W="User"===r.__typename&&r.id===(null==g?void 0:g.id),X=(null==o||null===(t=o.blogroll)||void 0===t?void 0:t.visibility)===x.n$.BLOGROLL_VISIBILITY_SIDEBAR,Y=W&&!$&&!X,Z=(0,S.Av)(),H=m.useContext(N),Q=(0,I.g)({onPresentedFn:function(){return Z.event("sidebar.blogrollViewed",D(D({},H),{},{viewerIsAuthor:W,showingGhost:Y}))}}),K=(0,s.useLazyQuery)(M,{ssr:!1,variables:{userId:r.id,limit:5}}),J=u()(K,2),ee=J[0],ne=J[1],te=ne.called,re=ne.loading,le=ne.error,oe=ne.data,ie=(oe=void 0===oe?{userFollows:void 0}:oe).userFollows,ae=(0,p.gp)(r).followingCount,ue=m.useCallback((function(e){return function(){var n=j===R.Initial?"Blogrolls help your readers discover writers you follow. Writers who have published most recently show up at the top.":"You can always turn on blogroll in your design editor. Until then, readers can get to your Following from the About page.",t=function(n){V(n),e()};return m.createElement(h.xu,{minWidth:"240px",padding:"20px"},m.createElement(y.F,{scale:"S"},n),m.createElement(h.xu,{marginTop:"20px"},m.createElement(y.F,{scale:"S"},j?m.createElement(h.rU,{linkStyle:"OBVIOUS",onClick:function(){return t(R.Dismissed)}},"Got it"):m.createElement(m.Fragment,null,m.createElement(h.rU,{linkStyle:"OBVIOUS",href:(0,O.aLX)(L,{unfold:"Blogroll",action:"enableBlogroll"}),onClick:function(){return t(R.Navigating)}},"Turn on"),m.createElement("span",{className:c({marginLeft:"8px"})},m.createElement(h.rU,{linkStyle:"SUBTLE",onClick:function(){return V(R.Secondary)}},"Not now"))))))}}),[V]);return P||!Y&&!X||j===R.Dismissed?null:te?re||le||!ie||!ie.length?null:m.createElement(_.cW,{source:{name:"blogrolls_sidebar",postId:H.postId||void 0}},m.createElement(h.xu,{ref:Q,position:"relative",borderTop:"BASE_LIGHTER",borderBottom:a?"NONE":void 0},Y?m.createElement("div",{className:c([G])}):null,m.createElement(h.xu,{marginTop:"32px",marginBottom:"32px"},m.createElement(v.o,{flag:x.T3.BLOGROLL_ENABLE,isVisible:l&&Y,targetDistance:15,renderFn:ue},m.createElement("span",{className:c({textTransform:"uppercase",marginBottom:"8px"})},m.createElement(y.F,{scale:"S",tag:"span"},"".concat(r.name," Follows"))),m.createElement("ul",{className:c({marginTop:"8px"})},ie.map((function(e){var n="User"===e.__typename?(0,O.AWr)(e,L):(0,O.WGd)(e,U,L);return m.createElement("li",{className:c({display:"grid",gridTemplateColumns:"auto 1fr auto"}),key:null==e?void 0:e.id},m.createElement(h.xu,{paddingRight:"12px"},m.createElement(d.G,{link:!0,publisher:e,scale:"XXXS"})),m.createElement("section",{className:c({wordBreak:"break-word"})},m.createElement(h.xu,{marginBottom:"8px",paddingRight:"10px",tag:"span"},m.createElement(h.rU,{href:n},m.createElement(h.$W,{placement:"right",targetDistance:15,mouseEnterDelay:500,mouseLeaveDelay:0,noPortal:!1,disablePortalOverlay:!0,role:"tooltip",popoverRenderFn:function(){return"User"===e.__typename?m.createElement(E.Z,{user:e}):m.createElement(f.L,{collection:e,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}},m.createElement("h4",{className:q},e.name))))))}))),ae>=5?m.createElement(y.F,{scale:"S"},m.createElement(h.rU,{linkStyle:"SUBTLE",href:k},"See all (".concat((0,F.rR)(ae),")"))):null)))):(ee(),null)},V=(0,c.Ps)(k()),z=(0,c.Ps)(U(),p.b5,O.$mN),q=(0,c.Ps)(P(),d.v),M=(0,c.Ps)(L(),E.O,f.g,q)},44935:(e,n,t)=>{"use strict";t.d(n,{L:()=>d,g:()=>p});var r=t(28655),l=t.n(r),o=t(71439),i=t(67294),a=t(73882),u=t(84783),s=t(7530),c=t(64504);function m(){var e=l()(["\n  fragment CollectionTooltip_collection on Collection {\n    id\n    name\n    description\n    subscriberCount\n    ...CollectionAvatar_collection\n    ...CollectionFollowButton_collection\n  }\n  ","\n  ","\n"]);return m=function(){return e},e}var d=function(e){var n=e.collection,t=e.buttonSize,r=e.buttonStyleFn,l=n.name,o=n.description;return i.createElement(s.xu,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(s.xu,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"BASE_LIGHTER",paddingBottom:"10px",marginBottom:"10px"},i.createElement(s.xu,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(c.X6,{scale:"S"},l),i.createElement(c.F,{scale:"S"},o)),i.createElement(s.xu,null,i.createElement(a.v,{collection:n,link:!0}))),i.createElement(s.xu,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(c.F,{scale:"M"},"Followed by ",n.subscriberCount," people"),i.createElement(u.Fp,{collection:n,simpleButton:!0,buttonSize:t,buttonStyleFn:r,susiEntry:"follow_card"})))},p=(0,o.Ps)(m(),a.d,u.Iq)},78221:(e,n,t)=>{"use strict";t.d(n,{Z:()=>c,U:()=>m});var r=t(28655),l=t.n(r),o=t(71439),i=t(67294),a=t(8558),u=t(90038);function s(){var e=l()(["\n  fragment SequenceCoverImage_sequence on Sequence {\n    title\n    coverImage {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function c(e){var n=e.sequence,t=e.width,r=e.height,l=n.title,o=n.coverImage;return o?i.createElement("div",null,i.createElement(a.UV,{miroId:o.id,alt:l||"Collection on Medium",width:t,height:r,strategy:u._S.Resample,freezeGifs:!1})):null}var m=(0,o.Ps)(s())},93258:(e,n,t)=>{"use strict";t.d(n,{d:()=>p});var r=t(63038),l=t.n(r),o=t(67294),i=t(885),a=t(16528),u=t(324),s=t(7530),c=t(28309),m=t(51064),d=t(534),p=function(e){var n=e.buttonSize,t=e.targetUserId,r=(0,m.O)(!1),p=l()(r,3),f=p[0],g=p[1],b=p[2],v=(0,c.Fg)(),E=(0,u.Uo)().baseTheme,h=(0,d.q3)(v,E),y=(0,a.YC)().value;return y?o.createElement(c.f6,{theme:h},o.createElement(i.Z,{targetUserId:t,viewerId:y&&y.id},(function(e){var t=e.mutate;return o.createElement(s.zx,{buttonStyle:f?"SUBTLE":"ERROR",onClick:t,size:n||"REGULAR",onMouseEnter:g,onMouseLeave:b},f?"Unblock":"Blocked")}))):null}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8995.876a1818.chunk.js.map