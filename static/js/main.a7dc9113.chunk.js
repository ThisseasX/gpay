(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=a(127),i=a(58),m=a(29),u=a(30),d=Object(o.a)(Object(i.a)({palette:{divider:m.a[500],secondary:{main:u.a[500]},background:{paper:m.a[200]}}})),s=a(117),E=a(128),b=a(124),p=a(118),f=a(119),v=function(){return c.a.createElement(s.a,{theme:d},c.a.createElement(E.a,null),c.a.createElement(b.a,{pt:4,clone:!0},c.a.createElement(p.a,{container:!0,direction:"column",alignItems:"center"},c.a.createElement(f.a,{variant:"h1",gutterBottom:!0},"G-Pay"),c.a.createElement(x,null))))},g=a(14),h=a(57),y=(a.n(h)()("http://localhost:4000"),a(120)),O=a(121),x=function(){var e=Object(n.useState)(0),t=Object(g.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(g.a)(l,2),i=o[0],m=o[1],u=Object(n.useCallback)((function(e){console.log(e)}),[]);return Object(n.useEffect)((function(){m([{id:"1",amount:50,requested:{_seconds:(new Date).valueOf()/1e3},finalized:{_seconds:(new Date).valueOf()/1e3}},{id:"2",amount:50,requested:{_seconds:(new Date).valueOf()/1e3},finalized:{_seconds:(new Date).valueOf()/1e3}}]),r(200)}),[]),c.a.createElement(y.a,{maxWidth:"xs"},c.a.createElement(b.a,{px:2,mb:2,textAlign:"center"},c.a.createElement(f.a,{align:"center",color:"textSecondary",variant:"h4",component:"span"},"Remaining:\xa0"),c.a.createElement(f.a,{variant:"h3",component:"span"},a,"\u20ac")),c.a.createElement(k,{debt:a,handleSubmit:u}),c.a.createElement(b.a,{mt:4,mb:4},c.a.createElement(p.a,{container:!0,alignItems:"center"},c.a.createElement(p.a,{item:!0,xs:!0},c.a.createElement(O.a,null)),c.a.createElement(b.a,{px:2,clone:!0},c.a.createElement(p.a,{item:!0},c.a.createElement(f.a,{align:"center",variant:"h5"},"History"))),c.a.createElement(p.a,{item:!0,xs:!0},c.a.createElement(O.a,null)))),c.a.createElement(p.a,{container:!0,direction:"column",spacing:2,wrap:"nowrap"},i.map((function(e){return c.a.createElement(p.a,{key:e.id,item:!0},c.a.createElement(w,{payment:e}))}))))},j=a(122),w=Object(n.memo)((function(e){var t=e.payment,a=(t=void 0===t?{}:t).amount,n=void 0===a?0:a,r=t.requested,l=void 0===r?{}:r,o=t.finalized,i=void 0===o?{}:o;return c.a.createElement(b.a,{border:1,clone:!0},c.a.createElement(j.a,null,c.a.createElement(b.a,{py:1,px:2,borderBottom:1},c.a.createElement(f.a,{align:"center",variant:"h4"},n,"\u20ac")),c.a.createElement(p.a,{container:!0},c.a.createElement(b.a,{borderRight:1,clone:!0},c.a.createElement(p.a,{item:!0,xs:!0},c.a.createElement(I,{label:"Requested",date:l}))),c.a.createElement(p.a,{container:!0,item:!0,xs:!0,justify:"center",alignItems:"center"},c.a.createElement(I,{label:"Accepted",date:i})))))})),S=a(126),D=a(125),k=Object(n.memo)((function(e){var t=e.debt,a=e.handleSubmit,r=Object(n.useState)(t),l=Object(g.a)(r,2),o=l[0],i=l[1];Object(n.useEffect)((function(){i(Math.min(50,Math.ceil(t/2)))}),[t]);return c.a.createElement(b.a,{border:1,clone:!0},c.a.createElement(j.a,null,c.a.createElement(b.a,{py:1,px:2,borderBottom:1},c.a.createElement(f.a,{color:"secondary",align:"center",variant:"h3"},o,"\u20ac"),c.a.createElement(S.a,{onChange:function(e,t){i(t)},value:o,color:"secondary",min:1,max:200})),c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{container:!0,item:!0,xs:!0,justify:"center",alignItems:"center"},c.a.createElement(D.a,{style:{borderTopLeftRadius:0,borderTopRightRadius:0},fullWidth:!0,variant:"contained",color:"primary",onClick:function(){a(o)}},"Pay")))))})),I=Object(n.memo)((function(e){var t=e.label,a=e.date;return c.a.createElement(b.a,{py:1,px:2},c.a.createElement(f.a,{align:"center",color:"textSecondary"},t),c.a.createElement(f.a,{align:"center"},a?new Date(1e3*a._seconds).toLocaleDateString():"Invalid Date"))}));l.a.render(c.a.createElement(v,null),document.getElementById("root"))},61:function(e,t,a){e.exports=a(101)},98:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.a7dc9113.chunk.js.map