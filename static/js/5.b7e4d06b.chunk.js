(this["webpackJsonphms-soc"]=this["webpackJsonphms-soc"]||[]).push([[5],{205:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t(32),i=t(0),o=t.n(i),r=t(188),c=t(213),l=t(217),s=t(215),d=t(216),p=t(214),u=t(212),b=t(21),m=t(3);function f(e){var a=o.a.useState(e.openAction),t=Object(n.a)(a,2),i=t[0],f=t[1],h=o.a.useState(e.patientName),v=Object(n.a)(h,1)[0],x=Object(b.a)(),g=Object(u.a)(x.breakpoints.down("sm")),j=function(){f(!1)};return Object(m.jsx)("div",{children:Object(m.jsxs)(c.a,{fullScreen:g,open:i,onClose:j,"aria-labelledby":"responsive-dialog-title",children:[Object(m.jsx)(p.a,{id:"responsive-dialog-title",children:v}),Object(m.jsx)(s.a,{children:Object(m.jsx)(d.a,{children:"Patient Details"})}),Object(m.jsx)(l.a,{children:Object(m.jsx)(r.a,{autoFocus:!0,onClick:j,color:"primary",children:"Close"})})]})})}},212:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(1),i=t(0),o=t(121),r=t(169);function c(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(o.a)(),c=Object(r.a)({theme:t,name:"MuiUseMediaQuery",props:{}});var l="function"===typeof e?e(t):e;l=l.replace(/^@media( ?)/m,"");var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,d=Object(n.a)({},c,a),p=d.defaultMatches,u=void 0!==p&&p,b=d.matchMedia,m=void 0===b?s?window.matchMedia:null:b,f=d.noSsr,h=void 0!==f&&f,v=d.ssrMatchMedia,x=void 0===v?null:v,g=i.useState((function(){return h&&s?m(l).matches:x?x(l).matches:u})),j=g[0],O=g[1];return i.useEffect((function(){var e=!0;if(s){var a=m(l),t=function(){e&&O(a.matches)};return t(),a.addListener(t),function(){e=!1,a.removeListener(t)}}}),[l,m,s]),j}},213:function(e,a,t){"use strict";var n=t(1),i=t(2),o=t(15),r=t(0),c=(t(5),t(4)),l=t(6),s=t(7),d=t(192),p=t(175),u=t(124),b=t(26),m=t(123),f={enter:b.b.enteringScreen,exit:b.b.leavingScreen},h=r.forwardRef((function(e,a){var t=e.BackdropProps,o=e.children,l=e.classes,b=e.className,h=e.disableBackdropClick,v=void 0!==h&&h,x=e.disableEscapeKeyDown,g=void 0!==x&&x,j=e.fullScreen,O=void 0!==j&&j,y=e.fullWidth,k=void 0!==y&&y,w=e.maxWidth,E=void 0===w?"sm":w,S=e.onBackdropClick,W=e.onClose,C=e.onEnter,B=e.onEntered,M=e.onEntering,D=e.onEscapeKeyDown,N=e.onExit,P=e.onExited,T=e.onExiting,A=e.open,R=e.PaperComponent,F=void 0===R?m.a:R,K=e.PaperProps,$=void 0===K?{}:K,L=e.scroll,Y=void 0===L?"paper":L,X=e.TransitionComponent,H=void 0===X?u.a:X,I=e.transitionDuration,J=void 0===I?f:I,U=e.TransitionProps,Q=e["aria-describedby"],q=e["aria-labelledby"],z=Object(i.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),G=r.useRef();return r.createElement(d.a,Object(n.a)({className:Object(c.a)(l.root,b),BackdropComponent:p.a,BackdropProps:Object(n.a)({transitionDuration:J},t),closeAfterTransition:!0},v?{disableBackdropClick:v}:{},{disableEscapeKeyDown:g,onEscapeKeyDown:D,onClose:W,open:A,ref:a},z),r.createElement(H,Object(n.a)({appear:!0,in:A,timeout:J,onEnter:C,onEntering:M,onEntered:B,onExit:N,onExiting:T,onExited:P,role:"none presentation"},U),r.createElement("div",{className:Object(c.a)(l.container,l["scroll".concat(Object(s.a)(Y))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===G.current&&(G.current=null,S&&S(e),!v&&W&&W(e,"backdropClick"))},onMouseDown:function(e){G.current=e.target}},r.createElement(F,Object(n.a)({elevation:24,role:"dialog","aria-describedby":Q,"aria-labelledby":q},$,{className:Object(c.a)(l.paper,l["paperScroll".concat(Object(s.a)(Y))],l["paperWidth".concat(Object(s.a)(String(E)))],$.className,O&&l.paperFullScreen,k&&l.paperFullWidth)}),o))))}));a.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(o.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(h)},214:function(e,a,t){"use strict";var n=t(1),i=t(2),o=t(0),r=(t(5),t(4)),c=t(6),l=t(57),s=o.forwardRef((function(e,a){var t=e.children,c=e.classes,s=e.className,d=e.disableTypography,p=void 0!==d&&d,u=Object(i.a)(e,["children","classes","className","disableTypography"]);return o.createElement("div",Object(n.a)({className:Object(r.a)(c.root,s),ref:a},u),p?t:o.createElement(l.a,{component:"h2",variant:"h6"},t))}));a.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},215:function(e,a,t){"use strict";var n=t(1),i=t(2),o=t(0),r=(t(5),t(4)),c=t(6),l=o.forwardRef((function(e,a){var t=e.classes,c=e.className,l=e.dividers,s=void 0!==l&&l,d=Object(i.a)(e,["classes","className","dividers"]);return o.createElement("div",Object(n.a)({className:Object(r.a)(t.root,c,s&&t.dividers),ref:a},d))}));a.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(l)},216:function(e,a,t){"use strict";var n=t(1),i=t(0),o=(t(5),t(6)),r=t(57),c=i.forwardRef((function(e,a){return i.createElement(r.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(c)},217:function(e,a,t){"use strict";var n=t(1),i=t(2),o=t(0),r=(t(5),t(4)),c=t(6),l=o.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,l=e.classes,s=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(n.a)({className:Object(r.a)(l.root,s,!c&&l.spacing),ref:a},d))}));a.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(l)}}]);
//# sourceMappingURL=5.b7e4d06b.chunk.js.map