(self.webpackChunklite=self.webpackChunklite||[]).push([[2332],{69100:(e,t,n)=>{var r=n(99489),o=n(57067);function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,t,n)=>{var r=n(29754),o=n(99489),i=n(70430),a=n(69100);function c(t){var n="function"==typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return a(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},c(t)}e.exports=c},6672:(e,t,n)=>{"use strict";n.d(t,{Ij:()=>M,iT:()=>j,rK:()=>D});var r=n(28655),o=n.n(r),i=n(71439),a=n(67294),c=n(49768),u=n(34575),s=n.n(u),l=n(2205),p=n.n(l),f=n(78585),d=n.n(f),m=n(29754),h=n.n(m),v=n(65957);var g=function(e){p()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return d()(this,e)});function o(){return s()(this,o),r.call(this,"Expected postResult to exist.\n       For more detail, try checking for GraphQL server errors with the same x-request-id.")}return o}(n.n(v)()(Error)),y=n(41254),E=n(79853),b=n(80177),O=n(47266);function P(){var e=o()(["\n  fragment UnavailableForLegalReasonsScreen_unavailableForLegalReasons on UnavailableForLegalReasons {\n    lumenId\n  }\n"]);return P=function(){return e},e}function x(e){var t=e.errorData;return a.createElement(y.Z,{code:451,title:"451 Not available — Medium",lumenId:t.lumenId},"This story is subject to a DMCA copyright or other legal or government claim.")}var _=(0,i.Ps)(P());function S(){var e=o()(["\n  fragment WithheldInCountryScreen_withheldInCountry on WithheldInCountry {\n    lumenId\n  }\n"]);return S=function(){return e},e}function R(e){var t=e.errorData;return a.createElement(y.Z,{code:451,title:"451 Not available in your country — Medium",lumenId:t.lumenId},"This page is not available in your country.")}var w=(0,i.Ps)(S());function I(){var e=o()(["\n  fragment PostResultError_postResult on PostResult {\n    __typename\n    ... on Post {\n      id\n    }\n    ... on UnavailableForLegalReasons {\n      ...UnavailableForLegalReasonsScreen_unavailableForLegalReasons\n    }\n    ... on WithheldInCountry {\n      ...WithheldInCountryScreen_withheldInCountry\n    }\n  }\n  ","\n  ","\n"]);return I=function(){return e},e}var D=function(e){return!e||"Post"!==e.__typename},M=function(e){var t=e.postResult;if(!t)return a.createElement(E.Z,{error:new g});switch(t.__typename){case"Unauthorized":return a.createElement(c.N,{opt_isDraft:!0});case"NotFound":return a.createElement(b.Z,null);case"AccountDeleted":return a.createElement(y.Z,{code:410,title:"410 Deleted by author — Medium"},"User deactivated or deleted their account.");case"AccountSuspended":return a.createElement(O.y,{suspension:"account"});case"PostSuspended":return a.createElement(O.y,{suspension:"post"});case"Blocked":return a.createElement(y.Z,{code:403,title:"403 Blocked — Medium"},"This user had blocked you from following them or viewing their stories.");case"RemovedByUser":return a.createElement(y.Z,{code:410,title:"410 Deleted by author — Medium"},"The author deleted this Medium story.");case"UnavailableForLegalReasons":return a.createElement(x,{errorData:t});case"WithheldInCountry":return a.createElement(R,{errorData:t});default:return a.createElement(E.Z,{error:new Error("Unsupported postResult: ".concat(t.__typename))})}},j=(0,i.Ps)(I(),_,w)},49768:(e,t,n)=>{"use strict";n.d(t,{N:()=>l});var r=n(67294),o=n(42963),i=n(14414),a=n(27572),c=n(67297),u=n(96879),s=n(27952),l=function(e){var t=e.opt_isDraft,n=e.opt_params,l=(0,c.v)((function(e){return e.config.authDomain})),p=(0,c.v)((function(e){return e.navigation.currentLocation})),f=(0,a.pK)(),d=(0,a.hp)(),m=(0,u.Rk)((0,s.Kkz)(l),{operation:"login",redirect:(0,i.hQ)(p,f,d,null,null,n),isDraft:t?"1":"0"});return r.createElement(o.Z,{to:m,temporary:!0})}},37620:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PostHandler:()=>B});var r=n(59713),o=n.n(r),i=n(28655),a=n.n(i),c=n(18446),u=n.n(c),s=n(46829),l=n(71439),p=n(80439),f=n(67294),d=n(6672),m=n(8575),h=n(5977),v=n(42963),g=n(8403),y=n(67297),E=n(77455),b=n(96879);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){var e=a()(["\n  fragment PostCanonicalizer_post on Post {\n    mediumUrl\n  }\n"]);return x=function(){return e},e}var _=(0,l.Ps)(x()),S=function(e){var t=e.post,n=e.matchedPath,r=e.children,o=(0,E.K)(),i=(0,h.TH)().hash,a=o.get("showDomainSetup"),c=(0,g.PM)(),u=(0,g.G1)(),s=(0,y.v)((function(e){return e.navigation.host})),l=(0,y.v)((function(e){return e.navigation.postPublishedType})),p=t.mediumUrl;if(!p)return r;var d=m.parse(decodeURIComponent(p)),O=P(P(P(P({},c?{source:c}:{}),u?{sk:u}:{}),l?{postPublishedType:l}:{}),a?{showDomainSetup:a}:{});return s!==d.host?f.createElement(v.Z,{to:(0,b.Rk)(p,O,i),replace:!0}):d.path&&n!==d.path?f.createElement(v.Z,{to:(0,b.Rk)(d.path,O,i),replace:!0}):r},R=n(85740),w=n(95760),I=n(31235),D=n(27572),M=n(96890),j=n(79853),k=n(90320),T=n(80177),C=n(91297),U=n(19307),F=n(27952);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(){var e=a()(["\n  query PostMeter($postId: ID!, $postMeteringOptions: PostMeteringOptions) {\n    meterPost(postId: $postId, postMeteringOptions: $postMeteringOptions) {\n      __typename\n      ... on MeteringInfo {\n        ...PostScreen_meteringInfo\n      }\n    }\n  }\n  ","\n"]);return L=function(){return e},e}function A(){var e=a()(["\n  query PostHandler(\n    $postId: ID!\n    $postMeteringOptions: PostMeteringOptions\n    $includePostInternalLinks: Boolean!\n    $includePostRecirc: Boolean = false\n    $includeSequenceRecirc: Boolean = false\n    $postRecircPaging: PaginationLimit\n  ) {\n    postResult(id: $postId) {\n      __typename\n      ...PostResultError_postResult\n      ... on Post {\n        ...PostScreen_post\n        ...PostCanonicalizer_post\n      }\n    }\n  }\n  ","\n  ","\n  ","\n"]);return A=function(){return e},e}var $=(0,l.Ps)(A(),d.iT,_,C.m6),z=(0,l.Ps)(L(),C.De),B=f.memo((function(e){var t=e.match,n=(0,U.o)(),r=(0,y.v)((function(e){var t,r,o=e.config.recircOptions;return n?null==o||null===(t=o.v2)||void 0===t?void 0:t.limit:null==o||null===(r=o.v1)||void 0===r?void 0:r.limit})),o=(0,y.v)((function(e){return e.navigation.referrer})),i=(0,g.G1)(),a=(0,I.xg)();!function(){var e=(0,R.Vb)(),t=(0,I.xg)(),n=(0,I.Wj)(),r=(0,w.Av)(),o=JSON.stringify(e);f.useEffect((function(){var o,i;e&&Object.keys(e).length&&t&&(o=e,i=(new TextEncoder).encode(JSON.stringify(o)),crypto.subtle.digest("SHA-256",i).then((function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}))).then((function(e){e!==n&&r.event("client.edgeCacheVariantMismatch",{})}))}),[o])}();var c=(0,F.mrd)(t)||"",u={referrer:o,sk:i},l=(0,s.useQuery)(z,{variables:{postId:c,postMeteringOptions:u},ssr:!a}).data,m=(l=void 0===l?{}:l).meterPost,h={postId:c,includePostInternalLinks:n,postRecircPaging:r||3};return c?f.createElement(p.AE,{query:$,variables:Z(Z({},h),{},{postMeteringOptions:a?void 0:u})},(function(e){var n=e.loading,r=e.error,o=e.data,i=(o=void 0===o?{}:o).postResult,a=e.refetch,u=e.fetchMore;return n?f.createElement(k.Z,null):r?f.createElement(j.Z,{error:r}):(0,d.rK)(i)?f.createElement(d.Ij,{postResult:i}):f.createElement(M.x.Provider,{value:{refetch:a,fetchMore:u,postId:c}},f.createElement(S,{post:i,matchedPath:t.url,key:c},f.createElement(D.cW,{source:{name:"post_page",postId:c}},f.createElement(C.gc,{meteringInfo:m,post:i}))))})):f.createElement(T.Z,null)}),(function(e,t){return u()(null==e?void 0:e.match,t.match)}))},41254:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(67294),o=n(70405),i=n(5977),a=n(59713),c=n.n(a),u=n(7530),s=n(67995),l=n(28309),p=n(80637),f={fontSize:"20px",textTransform:"uppercase"},d=function(e){return c()({display:"block",fontSize:"192px",lineHeight:"200px"},p.sm(e),{fontSize:"150px"})};const m=function(e){var t=e.errorCode,n=(0,l.Iq)(),o=(0,s.n)({name:"marketing",scale:"XXXL"});return r.createElement(u.xu,{display:"flex",flexDirection:"column"},r.createElement("div",{className:n(f)},"Error"),r.createElement("div",{className:n([o,d])},t))};var h=n(26463),v=n(5955),g={fontSize:"24px"};function y(e){var t=e.code,n=e.title,a=e.children,c=e.lumenId,s=(0,l.Iq)();return r.createElement(i.AW,{render:function(e){var i=e.staticContext;return i&&(i.statusCode=t),r.createElement("div",null,r.createElement(o.q,null,r.createElement("title",null,n)),r.createElement(h.kw,null),r.createElement(u.xu,{tag:"section",paddingTop:"60px",paddingBottom:"60px"},r.createElement(u.Pm,{size:"inset"},r.createElement(u.xu,{display:"flex",alignItems:"flex-start",flexWrap:"wrap"},r.createElement(m,{errorCode:t}),r.createElement("div",{className:s((0,v.rJ)())},r.createElement(u.xu,{marginBottom:"28px"},r.createElement("div",{className:s(g)},a)),c?r.createElement("div",{className:s(g)},"A report is available on"," ",r.createElement(u.rU,{href:"https://lumendatabase.org/notices/".concat(c),display:"inline-block",inline:!0,target:"_blank",linkStyle:"OBVIOUS"},"Lumen"),"."):null)))))}})}},47266:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});var r=n(67294),o=n(7530),i=n(64504),a=n(62630),c=n(41254),u=n(27952),s=function(e){var t=e.suspension,n=(0,a.Av)();return r.createElement(c.Z,{code:410,title:"410 ".concat(t," suspended — Medium")},r.createElement(o.xu,{display:"flex",marginTop:"-30px"},r.createElement(i.QE,{scale:"S"},"This ",t," is under investigation or was found in violation of the Medium Rules."," ")),r.createElement(o.xu,{display:"flex",marginTop:"80px"},r.createElement(i.QE,{color:"DARKER",scale:"M"},"There are thousands of stories to read on Medium. Visit our homepage ",r.createElement("br",null)," to find one that’s right for you.")),r.createElement(o.xu,{display:"flex",marginTop:"15px"},r.createElement(o.zx,{buttonStyle:"SUBTLE",href:(0,u.$x3)(),onClick:function(){n.event("suspendedPage.backToHomeClicked",{})}},"Take me to Medium")))}},68254:e=>{"use strict";var t=Math.floor(1099511627776*Math.random()).toString(16),n=new RegExp('"@__(F|R|D|M|S|U)-'+t+'-(\\d+)__@"',"g"),r=/\{\s*\[native code\]\s*\}/g,o=/function.*?\(/,i=/.*?=>.*?/,a=/[<>\/\u2028\u2029]/g,c=["*","async"],u={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function s(e){return u[e]}e.exports=function e(u,l){l||(l={}),"number"!=typeof l&&"string"!=typeof l||(l={space:l});var p,f=[],d=[],m=[],h=[],v=[],g=[];return l.ignoreFunction&&"function"==typeof u&&(u=void 0),void 0===u?String(u):"string"!=typeof(p=l.isJSON&&!l.space?JSON.stringify(u):JSON.stringify(u,l.isJSON?null:function(e,n){if(l.ignoreFunction&&function(e){var t=[];for(var n in e)"function"==typeof e[n]&&t.push(n);for(var r=0;r<t.length;r++)delete e[t[r]]}(n),!n&&void 0!==n)return n;var r=this[e],o=typeof r;if("object"===o){if(r instanceof RegExp)return"@__R-"+t+"-"+(d.push(r)-1)+"__@";if(r instanceof Date)return"@__D-"+t+"-"+(m.push(r)-1)+"__@";if(r instanceof Map)return"@__M-"+t+"-"+(h.push(r)-1)+"__@";if(r instanceof Set)return"@__S-"+t+"-"+(v.push(r)-1)+"__@"}return"function"===o?"@__F-"+t+"-"+(f.push(r)-1)+"__@":"undefined"===o?"@__U-"+t+"-"+(g.push(r)-1)+"__@":n},l.space))?String(p):(!0!==l.unsafe&&(p=p.replace(a,s)),0===f.length&&0===d.length&&0===m.length&&0===h.length&&0===v.length&&0===g.length?p:p.replace(n,(function(t,n,a){return"D"===n?'new Date("'+m[a].toISOString()+'")':"R"===n?"new RegExp("+e(d[a].source)+', "'+d[a].flags+'")':"M"===n?"new Map("+e(Array.from(h[a].entries()),l)+")":"S"===n?"new Set("+e(Array.from(v[a].values()),l)+")":"U"===n?"undefined":function(e){var t=e.toString();if(r.test(t))throw new TypeError("Serializing native function: "+e.name);if(o.test(t))return t;if(i.test(t))return t;var n=t.indexOf("("),a=t.substr(0,n).trim().split(" ").filter((function(e){return e.length>0}));return a.filter((function(e){return-1===c.indexOf(e)})).length>0?(a.indexOf("async")>-1?"async ":"")+"function"+(a.join("").indexOf("*")>-1?"*":"")+t.substr(n):t}(f[a])})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/Post.b32dcb4a.chunk.js.map