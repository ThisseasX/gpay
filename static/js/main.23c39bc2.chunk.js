(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(71),l=n(33),s=n(25),m=n(26),u=Object(i.a)(Object(l.a)({palette:{divider:s.a[500],secondary:{main:m.a[500]},background:{paper:s.a[200]}}})),d=n(61),f=n(72),E=n(68),p=n(62),v=n(63),g=function(){return r.a.createElement(d.a,{theme:u},r.a.createElement(f.a,null),r.a.createElement(E.a,{pt:4,clone:!0},r.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center"},r.a.createElement(v.a,{variant:"h1",gutterBottom:!0},"G-Pay"),r.a.createElement(y,null))))},h=n(13),b=n(64),w=n(65),y=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),i=Object(h.a)(c,2),l=i[0],s=i[1],m=Object(a.useCallback)((function(e){console.log(e)}),[]);return Object(a.useEffect)((function(){s([{id:"1",amount:50,requested:{_seconds:(new Date).valueOf()/1e3},finalized:{_seconds:(new Date).valueOf()/1e3}},{id:"2",amount:50,requested:{_seconds:(new Date).valueOf()/1e3},finalized:{_seconds:(new Date).valueOf()/1e3}}]),o(200)}),[]),r.a.createElement(b.a,{maxWidth:"xs"},r.a.createElement(E.a,{px:2,mb:2,textAlign:"center"},r.a.createElement(v.a,{align:"center",color:"textSecondary",variant:"h4",component:"span"},"Remaining:\xa0"),r.a.createElement(v.a,{variant:"h3",component:"span"},n,"\u20ac")),r.a.createElement(S,{debt:n,handleSubmit:m}),r.a.createElement(E.a,{mt:4,mb:4},r.a.createElement(p.a,{container:!0,alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(w.a,null)),r.a.createElement(E.a,{px:2,clone:!0},r.a.createElement(p.a,{item:!0},r.a.createElement(v.a,{align:"center",variant:"h5"},"History"))),r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(w.a,null)))),r.a.createElement(p.a,{container:!0,direction:"column",spacing:2,wrap:"nowrap"},l.map((function(e){return r.a.createElement(p.a,{key:e.id,item:!0},r.a.createElement(j,{payment:e}))}))))},O=n(66),j=Object(a.memo)((function(e){var t=e.payment,n=(t=void 0===t?{}:t).amount,a=void 0===n?0:n,o=t.requested,c=void 0===o?{}:o,i=t.finalized,l=void 0===i?{}:i;return r.a.createElement(E.a,{border:1,clone:!0},r.a.createElement(O.a,null,r.a.createElement(E.a,{py:1,px:2,borderBottom:1},r.a.createElement(v.a,{align:"center",variant:"h4"},a,"\u20ac")),r.a.createElement(p.a,{container:!0},r.a.createElement(E.a,{borderRight:1,clone:!0},r.a.createElement(p.a,{item:!0,xs:!0},r.a.createElement(W,{label:"Requested",date:c}))),r.a.createElement(p.a,{container:!0,item:!0,xs:!0,justify:"center",alignItems:"center"},r.a.createElement(W,{label:"Accepted",date:l})))))})),x=n(70),k=n(69),S=Object(a.memo)((function(e){var t=e.debt,n=e.handleSubmit,o=Object(a.useState)(t),c=Object(h.a)(o,2),i=c[0],l=c[1];Object(a.useEffect)((function(){l(Math.min(50,Math.ceil(t/2)))}),[t]);return r.a.createElement(E.a,{border:1,clone:!0},r.a.createElement(O.a,null,r.a.createElement(E.a,{py:1,px:2,borderBottom:1},r.a.createElement(v.a,{color:"secondary",align:"center",variant:"h3"},i,"\u20ac"),r.a.createElement(x.a,{onChange:function(e,t){l(t)},value:i,color:"secondary",min:1,max:200})),r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{container:!0,item:!0,xs:!0,justify:"center",alignItems:"center"},r.a.createElement(k.a,{style:{borderTopLeftRadius:0,borderTopRightRadius:0},fullWidth:!0,variant:"contained",color:"primary",onClick:function(){n(i)}},"Pay")))))})),W=Object(a.memo)((function(e){var t=e.label,n=e.date;return r.a.createElement(E.a,{py:1,px:2},r.a.createElement(v.a,{align:"center",color:"textSecondary"},t),r.a.createElement(v.a,{align:"center"},n?new Date(1e3*n._seconds).toLocaleDateString():"Invalid Date"))})),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/gpay",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/gpay","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):A(t,e)}))}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.23c39bc2.chunk.js.map