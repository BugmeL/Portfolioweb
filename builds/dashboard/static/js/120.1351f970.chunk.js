(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[120],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(53),c=a(1043),l=a(573),i=a(27),s=a.n(i),u=a(2),m=s()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,s=e.restProps,d=m();return r.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,Object.assign({className:Object(u.default)(d.pageFull,i)},s),(t||a)&&r.a.createElement(c.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(c.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return g})),a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return S}));var n=a(17),r=a(8),o=a(0),c=a.n(o),l=a(119),i=a(53),s=a(106),u=a(2),m=["heading","breadcrumbComponent","children"],d=Object(l.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,o=Object(n.a)(e,m),l=d();return c.a.createElement(i.a,Object.assign({className:Object(u.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),c.a.createElement(s.a,{component:"div",variant:"h1",className:Object(u.default)(l.titleRoot,"title")},t),c.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},b=a(1083),h=a(60),f=["items"],v=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),g=function(e){var t=e.items,a=(Object(n.a)(e,f),v());return c.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?c.a.createElement(s.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):c.a.createElement(h.c,{key:t,className:Object(u.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},y=a(899),C=a(35),E=a(180),O=a(1040),x=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return c.a.createElement(O.a,null,c.a.createElement(E.a,null,c.a.createElement(y.a,{item:!0,xs:12,md:7},c.a.createElement(p,{heading:"Preview"}),c.a.createElement(i.a,{mb:8},n),c.a.createElement(C.a,null,t)),c.a.createElement(y.a,{item:!0,xs:12,md:5},a)))},j=a(1045),S=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return c.a.createElement(j.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),c=a(53),l=a(957),i=a(106),s=a(892),u=a(893),m=a(949),d=a(119),p=a(1040),b=Object(d.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,d=b();return o.a.createElement(p.a,{heading:t,breadcrumbs:n},o.a.createElement(c.a,{className:d.root},o.a.createElement(c.a,{className:d.contentArea},r),o.a.createElement(l.a,{xsDown:!0},o.a.createElement(c.a,{className:d.contentSidebar},o.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(s.a,null,a.map((function(e,t){return o.a.createElement(u.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(m.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var n=a(1),r=a(115),o=a(7),c=a(0),l=(a(113),a(2)),i=a(10),s=a(106),u=a(24),m=a(18),d=Object(m.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(327);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(u.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return c.createElement(p.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(d,{className:t.icon}))}));var h=c.forwardRef((function(e,t){var a=e.children,i=e.classes,u=e.className,m=e.component,d=void 0===m?"nav":m,p=e.expandText,h=void 0===p?"Show path":p,f=e.itemsAfterCollapse,v=void 0===f?1:f,g=e.itemsBeforeCollapse,y=void 0===g?1:g,C=e.maxItems,E=void 0===C?8:C,O=e.separator,x=void 0===O?"/":O,j=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=c.useState(!1),k=S[0],w=S[1],T=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(n.a)({ref:t,component:d,color:"textSecondary",className:Object(l.default)(i.root,u)},j),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(k||E&&T.length<=E?T:function(e){return y+v>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[c.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){w(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-v,e.length)))}(T),i.separator,x)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},1299:function(e,t,a){"use strict";var n=a(29),r=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(33)).default)(o.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=c},1424:function(e,t,a){"use strict";var n=a(29),r=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(33)).default)(o.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");t.default=c},1467:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return l}));var n=a(9),r=function(e,t,a){if(e){if("color"===t)return{backgroundColor:a.color};if("gradient"===t)return{backgroundColor:a.gradientColors};if("image"===t)return{backgroundImage:a.image}}return{}},o=function(e,t,a){if(e){if("color"===t)return{overlay:{colors:a.color,opacity:a.opacity}};if("gradient"===t)return{overlay:{colors:a.gradientColors,opacity:a.opacity}}}return{}},c=function(e,t,a){if(e){if("color"===t)return" backgroundColor={'".concat(a.color,"'}");if("gradient"===t){var r=Object(n.a)(a.gradientColors,2),o=r[0],c=r[1];return" backgroundColor={['".concat(o,"','").concat(c,"']}")}if("image"===t)return" backgroundImage={'".concat(a.image,"'}")}return""},l=function(e,t,a){if(e){if("color"===t)return" overlay={{ colors: '".concat(a.color,"', opacity: ").concat(a.opacity," }}");if("gradient"===t){var r=Object(n.a)(a.gradientColors,2),o=r[0],c=r[1];return" overlay={{ colors: ['".concat(o,"','").concat(c,"'], opacity: ").concat(a.opacity," }}")}}return""}},1658:function(e,t,a){"use strict";var n=a(8),r=a(9),o=a(17),c=a(0),l=a.n(c),i=a(2),s=a(119),u=a(53),m=a(385),d=a(260),p=a(267),b=a.n(p),h=a(46),f=a(414),v=["actionsComponent","className","actionsClasses","contentClass","children"],g=Object(s.a)((function(e){return{root:{position:"relative",zIndex:1},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),y=function(e){var t=e.actionsComponent,a=e.className,s=e.actionsClasses,p=e.contentClass,y=e.children,C=Object(o.a)(e,v),E=g(),O=Object(c.useState)(!1),x=Object(r.a)(O,2),j=x[0],S=x[1];return l.a.createElement(u.a,Object.assign({className:Object(i.default)(E.root,a)},C),l.a.createElement(f.a,{classes:s,disableSpacing:!0},t,l.a.createElement(d.a,{className:Object(i.default)(E.expand,Object(n.a)({},E.expandOpen,j)),onClick:function(){S(!j)},"aria-expanded":j,"aria-label":"show more"},l.a.createElement(b.a,null))),l.a.createElement(m.a,{in:j,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{className:p},y)))};y.defaultProps={actionsClasses:{},contentClass:""},t.a=y},1659:function(e,t,a){"use strict";var n=a(29),r=a(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a(0)),c=(0,n(a(33)).default)(o.createElement("path",{d:"M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"}),"AllInclusive");t.default=c},3600:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1043),c=a(262),l=a(135),i=a(394),s=a(86),u=function(){var e=Object(n.useContext)(c.a),t=e.extraActions,a=e.setExtraActions,o=e.avatarType,u=e.setAvatarType,m=e.showAvatar,d=e.setShowAvatar,p=e.showMainContent,b=e.setMainContent,h=e.showExpendableContent,f=e.setExpendableContent,v=e.showSocialButtons,g=e.setSocialButtonsVisibility;return r.a.createElement(i.e,{title:"Cmt Expendable Card"},r.a.createElement(i.b,{heading:"Header",open:!0},r.a.createElement(i.d,null,r.a.createElement(s.a,{label:"Show Avatar or Icon",checked:m,onChange:function(e){return d(e.target.checked)}})),r.a.createElement(i.d,{title:"Avatar Style"},r.a.createElement(l.a,{name:"avatar-type",label:"Avatar",checked:"avatar"===o,value:"avatar",onChange:function(e){return u(e.target.value)}}),r.a.createElement(l.a,{name:"avatar-type",label:"Icon",checked:"icon"===o,value:"icon",onChange:function(e){return u(e.target.value)}}),r.a.createElement(l.a,{name:"avatar-type",label:"Icon Avatar",checked:"icon-avatar"===o,value:"icon-avatar",onChange:function(e){return u(e.target.value)}})),r.a.createElement(i.d,null,r.a.createElement(s.a,{label:"Show Extra Actions",checked:t,onChange:function(e){return a(e.target.checked)}}))),r.a.createElement(i.b,{heading:"Content",open:!0},r.a.createElement(i.d,{title:"Data",displayAsColumn:!0},r.a.createElement(s.a,{label:"Show Main Content",checked:p,onChange:function(e){return b(e.target.checked)}}),r.a.createElement(s.a,{label:"Show Expendable Content",checked:h,onChange:function(e){return f(e.target.checked)}}),r.a.createElement(s.a,{label:"Show Social Buttons",checked:v,onChange:function(e){return g(e.target.checked)}}))),r.a.createElement(i.a,null),r.a.createElement(i.c,null))},m=a(37),d=a(67),p=a(375),b=a(46),h=a(35),f=a(98),v=a(1467),g=a(106),y=a(260),C=a(1658),E=a(1659),O=a.n(E),x=a(182),j=a.n(x),S=a(1299),k=a.n(S),w=a(398),T=a.n(w),A=a(326),I=a(1424),B=a.n(I),N=a(126),M=a.n(N),R=a(2),z=Object(A.a)((function(e){return{cardRoot:{color:e.palette.text.secondary,"& .Cmt-title":{color:e.palette.text.primary},"& .MuiCollapse-entered":{borderTop:"solid 1px ".concat(e.palette.borderColor.dark)}},textWhite:{color:e.palette.common.white,"& .Cmt-sub-title, & .Cmt-title, & .MuiIconButton-root":{color:e.palette.common.white},"& .MuiCollapse-entered":{borderTop:"solid 1px rgba(255, 255, 255, 0.12)"},"& .Cmtfooter-root":{borderTopColor:"rgba(255, 255, 255, 0.12)"}}}})),H=[{icon:r.a.createElement(B.a,null),label:"More Detail"},{icon:r.a.createElement(M.a,null),label:"Close"}],P=function(){var e=z(),t=Object(n.useContext)(c.a),a=t.extraActions,o=t.avatarType,l=t.showAvatar,i=t.showBackground,s=t.backgroundStyle,u=t.showOverlay,E=t.overlayStyle,x=t.overlayOpacity,S=t.showMainContent,w=t.showExpendableContent,A=t.showSocialButtons,I=f.c.basicCard,B=f.c.background,N=f.c.overlay,M=I.header,P=I.content,V=I.expendableContent;N.opacity=x;return r.a.createElement(h.a,Object.assign({className:Object(R.default)(e.cardRoot,function(){if(i&&"color"!==s||u&&x>.5)return e.textWhite}())},Object(v.a)(i,s,B),Object(v.c)(u,E,N)),r.a.createElement(m.a,{avatar:l&&"icon-avatar"===o?r.a.createElement(d.a,{color:"primary",size:"large"},r.a.createElement(O.a,{fontSize:"small"})):l&&"avatar"===o?r.a.createElement(d.a,{src:M.avatar,alt:"Avatar",size:"large"}):null,icon:l&&"icon"===o?r.a.createElement(O.a,null):null,title:M.title,subTitle:M.subTitle,actions:H,actionHandleIcon:r.a.createElement(j.a,null)},a&&r.a.createElement(p.a,{color:"primary"},"View Demo")),S&&r.a.createElement(b.a,null,r.a.createElement(g.a,{variant:"body2",component:"p"},P.description)),w&&r.a.createElement(C.a,{actionsComponent:A&&r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{"aria-label":"add to favorites"},r.a.createElement(k.a,null)),r.a.createElement(y.a,{"aria-label":"share"},r.a.createElement(T.a,null)))},r.a.createElement(g.a,{paragraph:!0,variant:"body2"},"Method:"),r.a.createElement(g.a,{paragraph:!0,variant:"body2"},V.text1),r.a.createElement(g.a,{paragraph:!0,variant:"body2"},V.text2),r.a.createElement(g.a,{paragraph:!0,variant:"body2"},V.text3),r.a.createElement(g.a,{variant:"body2"},V.text4)))},V=a(9),L=function(e){var t=e.children,a=Object(n.useState)(!0),o=Object(V.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)("avatar"),u=Object(V.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(!1),b=Object(V.a)(p,2),h=b[0],f=b[1],v=Object(n.useState)("color"),g=Object(V.a)(v,2),y=g[0],C=g[1],E=Object(n.useState)(!1),O=Object(V.a)(E,2),x=O[0],j=O[1],S=Object(n.useState)("color"),k=Object(V.a)(S,2),w=k[0],T=k[1],A=Object(n.useState)(.3),I=Object(V.a)(A,2),B=I[0],N=I[1],M=Object(n.useState)(!1),R=Object(V.a)(M,2),z=R[0],H=R[1],P=Object(n.useState)(!0),L=Object(V.a)(P,2),D=L[0],F=L[1],_=Object(n.useState)(!0),W=Object(V.a)(_,2),J=W[0],q=W[1],U=Object(n.useState)(!0),Y=Object(V.a)(U,2),G=Y[0],K=Y[1];return r.a.createElement(c.a.Provider,{value:{showAvatar:l,setShowAvatar:i,avatarType:m,setAvatarType:d,showBackground:h,setBackgroundVisibility:f,backgroundStyle:y,setBackgroundStyle:C,showOverlay:x,setOverlayVisibility:j,overlayStyle:w,setOverlayStyle:T,overlayOpacity:B,setOverlayOpacity:N,extraActions:z,setExtraActions:H,showMainContent:D,setMainContent:F,showExpendableContent:J,setExpendableContent:q,showSocialButtons:G,setSocialButtonsVisibility:K}},t)},D=function(){var e=Object(n.useContext)(c.a),t=e.extraActions,a=e.avatarType,o=e.showAvatar,l=e.showBackground,s=e.backgroundStyle,u=e.showOverlay,m=e.overlayStyle,d=e.showMainContent,p=e.showExpendableContent,b=e.showSocialButtons,h=f.c.basicCard,g=f.c.background,y=f.c.overlay,C=h.header,E=h.content,O=h.expendableContent,x=function(){return" <CmtCardHeader\n    "+function(){if(o){if("icon"===a)return'icon={<AllInclusiveIcon fontSize="'.concat("default",'" />}\n    ');if("icon-avatar"===a)return'avatar={\n      <CmtAvatar color="primary" size="large">\n        <AllInclusiveIcon fontSize="'.concat("small",'" />\n      </CmtAvatar>\n    }\n    ');if("avatar"===a)return"avatar={<CmtAvatar src={'".concat(C.avatar,'\'} size="large" alt="Avatar" />}\n    ')}return""}()+"title={'".concat(C.title,"'}\n    subTitle={'").concat(C.subTitle,"'}\n    actions={actions}\n    actionHandleIcon={<MoreVertIcon fontSize=\"","default",'" />}>').concat(t?'\n    <Button color="primary">View Demo</Button>\n  ':"","</CmtCardHeader>")},j=function(){return p?"\n  <CmtCardExpendableContent"+(b?'\n    actionsComponent={\n      <React.Fragment>\n        <IconButton aria-label="'.concat("add to favorites",'">\n          <FavoriteIcon />\n        </IconButton>\n        <IconButton aria-label="share">\n          <ShareIcon />\n        </IconButton>\n      </React.Fragment>\n    }'):"")+'>\n    <Typography paragraph variant="body2">Method:</Typography>\n    <Typography paragraph variant="body2">'.concat(O.text1,'</Typography>\n    <Typography paragraph variant="body2">').concat(O.text2,'</Typography>\n    <Typography paragraph variant="body2">').concat(O.text3,'</Typography>\n    <Typography variant="body2">').concat(O.text4,"</Typography>\n  </CmtCardExpendableContent>"):""};return r.a.createElement(i.f,{sourceCode:"\n<CmtCard"+Object(v.b)(l,s,g)+Object(v.d)(u,m,y)+">\n "+x()+(d?'\n  <CmtCardContent>\n    <Typography variant="body2" color="textSecondary" component="p">\n      '.concat(E.description,"\n    </Typography>\n  </CmtCardContent>"):"")+j()+"  \n</CmtCard>\n"})};t.default=function(){return r.a.createElement(L,null,r.a.createElement(o.a,{SourceCodeComponent:r.a.createElement(D,null),SettingsComponent:r.a.createElement(u,null)},r.a.createElement(P,null)))}}}]);
//# sourceMappingURL=120.1351f970.chunk.js.map