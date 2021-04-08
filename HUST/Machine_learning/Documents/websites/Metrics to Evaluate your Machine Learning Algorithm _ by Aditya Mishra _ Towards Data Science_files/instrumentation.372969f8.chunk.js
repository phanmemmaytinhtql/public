(self.webpackChunklite=self.webpackChunklite||[]).push([[118],{8538:(e,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>A});var t=r(94725),o=r(67294),i=r(12291),s=r(86280),a=r(72351),u=r(52837),c=r(61250),l=r(31235),f=r(31117),d=r(27737),v=r(67297),p=r(67616),g=r(29035),m=r(63038),h=r.n(m),_=r(59713),b=r.n(_),w=r(44059),E=r(14034);function T(){for(var e=new E.y,n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];if(0===r.length)return e;var o=r.map((function(){return[]}));return r.forEach((function(n,r){n.observe((function(n){o[r].push(n),o.every((function(e){return e.length>0}))&&e.set(o.map((function(e){return e.shift()})))}))})),e}var P=function(e){return function(n){return b()({},e,n)}};const A=function(){var e,n,r,m,_,b,E,A,M,S,y,C,k,L,O,F;return o.useEffect((function(){var e=T(p.sY,p.wZ,p.vY).map((function(e){var n=h()(e,3),r=n[0],t=n[1],o=n[2];return{responseEndToLCP:new p.jb(r.response.end,t.end),responseEndToFCP:new p.jb(r.response.end,o.end)}})),n=T(p.sY,p.qH.map(P("fid")),p.vY.map(P("fcp")),p.wZ.map(P("lcp")),e);p.cA.observe((function(e){e||n.observe((function(e){var n=e.reduce((function(e,n){return Object.assign(e,n)}),{}),r=Object.keys(n).reduce((function(e,r){var t=n[r].duration;return e[r]=t%1==0?t:Number(t.toFixed(1)),e}),{}),t=document.children[0],o={html:null==t?void 0:t.innerHTML.length,redux:JSON.stringify(window.__PRELOADED_STATE__).length,apollo:JSON.stringify(window.__APOLLO_STATE__).length};w.t.log("client hydrated",{perf:r,sizes:o})}))})),p.Df.observe((function(e){return w.t.log("client resource sizes",{resources:e})}))}),[]),e=(0,v.v)((function(e){return e.tracing})),n=e.originalSpan,r=e.tracer,m=(0,s.cD)(),_=m.loading,b=m.isBot,E=(0,v.v)((function(e){return e.client.routingEntity})),A=(0,v.v)((function(e){return e.auroraPage.isAuroraPageEnabled})),M=(0,s.rZ)(),S=M.loading,y=M.viewerId,C=(0,l.xg)(),k=(0,l.f$)(),L=(0,i.I0)(),O=(0,c.dh)(),F=(0,a.Av)(),o.useEffect((function(){var e;if(r&&F&&!_&&!b&&!S&&y){var o=O(window.location.pathname),i=null!==(e=null==o?void 0:o.route.metricName)&&void 0!==e?e:"unidentified",s=(0,d.j)(y),a=(0,g.ic)(navigator.userAgent),c=[];C?c.push("edge_cache_enabled"):k&&c.push("edge_cache_control");var l=c.join(","),v={"user.logged_in":s,"user.experiment":l,"device.mobile_or_tablet":a,"req.route_name":i,"req.route":i,"req.router":(null==E?void 0:E.type)||u.Cr.DEFAULT},m={auroraPage:A,loggedIn:s,mobileOrTablet:a,experiment:l,route:i},h=function(e){return Math.round(1e3*e)},w=function(e,n,t,o){var i=t.start,s=t.end,a=r.startSpan("timing.".concat(n),{childOf:e,tags:v}).setBeginMicros(h(i)).setEndMicros(h(s));return null!=o&&o(a),a.finish(),a};p.sY.observe((function(e){var o,i,s,a;F.reportRender(m,e);var u=r.startSpan("timing.navigation",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:v}).setBeginMicros(h(e.load.start)).setEndMicros(h(e.load.end)).log({redirect_count:null!==(o=null===(i=window)||void 0===i||null===(s=i.performance)||void 0===s||null===(a=s.navigation)||void 0===a?void 0:a.redirectCount)&&void 0!==o?o:0});w(u,"beforeDomainLookup",e.before_domain_lookup),w(u,"domainLookup",e.domain_lookup),w(u,"connect",e.connect),w(u,"request",e.request),w(u,"response",e.response),w(u,"processing",e.processing);var c=e.overall_fcp,l=e.client,d=e.render;null!=c&&w(u,"firstContentfulPaint",c),null!=l&&w(u,"client",l,(function(e){null!=d&&w(e,"render",d)})),u.finish(),L((0,f.YU)(u.generateTraceURL()))})),p.vY.observe((function(e){F.reportFirstContentfulPaint(m,e),r.startSpan("timing.firstContentfulPaint.v2",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:v}).setBeginMicros(h(e.start)).setEndMicros(h(e.end)).finish()})),p.wZ.observe((function(e){F.reportLargestContentfulPaint(m,e),r.startSpan("timing.largestContentfulPaint",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:v}).setBeginMicros(h(e.start)).setEndMicros(h(e.end)).finish()})),p.yI.observe((function(e){F.reportCumulativeLayoutShift(m,e)})),p.cA.observe((function(e){e&&F.reportUnsupportedPerfObserver(m)})),p.qH.observe((function(e){F.reportInput(m,e),r.startSpan("timing.input.first.delay",{references:n?[(0,t.followsFrom)(n)]:void 0,tags:v}).setBeginMicros(h(e.start)).setEndMicros(h(e.end)).finish()}))}}),[r,S,y,_,b]),null}},72864:(e,n,r)=>{"use strict";r.r(n),r.d(n,{init:()=>i,extractSpan:()=>s});var t=r(45573),o=r(94725),i=function(e){var n=e.name,r=e.host,i=e.token,s=e.appVersion,a=new t.Tracer({component_name:n,xhr_instrumentation:!1,access_token:i,collector_host:r,default_span_tags:{"component.version":s}});return(0,o.initGlobalTracer)(a),a},s=function(e,n){if(n)return e.extract(o.FORMAT_HTTP_HEADERS,n)}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/instrumentation.372969f8.chunk.js.map