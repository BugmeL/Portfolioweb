(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[170],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(53),l=a(1043),o=a(573),i=a(27),m=a.n(i),u=a(2),s=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,m=e.restProps,p=s();return r.a.createElement(o.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(c.a,Object.assign({className:Object(u.default)(p.pageFull,i)},m),(t||a)&&r.a.createElement(l.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(l.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return E})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return w}));var n=a(17),r=a(8),c=a(0),l=a.n(c),o=a(119),i=a(53),m=a(106),u=a(2),s=["heading","breadcrumbComponent","children"],p=Object(o.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,c=Object(n.a)(e,s),o=p();return l.a.createElement(i.a,Object.assign({className:Object(u.default)(o.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},c),l.a.createElement(m.a,{component:"div",variant:"h1",className:Object(u.default)(o.titleRoot,"title")},t),l.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},b=a(1083),f=a(60),h=["items"],g=Object(o.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),E=function(e){var t=e.items,a=(Object(n.a)(e,h),g());return l.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?l.a.createElement(m.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):l.a.createElement(f.c,{key:t,className:Object(u.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},k=a(899),v=a(35),x=a(180),y=a(1040),j=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return l.a.createElement(y.a,null,l.a.createElement(x.a,null,l.a.createElement(k.a,{item:!0,xs:12,md:7},l.a.createElement(d,{heading:"Preview"}),l.a.createElement(i.a,{mb:8},n),l.a.createElement(v.a,null,t)),l.a.createElement(k.a,{item:!0,xs:12,md:5},a)))},O=a(1045),w=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return l.a.createElement(O.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),c=a.n(r),l=a(53),o=a(957),i=a(106),m=a(892),u=a(893),s=a(949),p=a(119),d=a(1040),b=Object(p.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,p=b();return c.a.createElement(d.a,{heading:t,breadcrumbs:n},c.a.createElement(l.a,{className:p.root},c.a.createElement(l.a,{className:p.contentArea},r),c.a.createElement(o.a,{xsDown:!0},c.a.createElement(l.a,{className:p.contentSidebar},c.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),c.a.createElement(m.a,null,a.map((function(e,t){return c.a.createElement(u.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},c.a.createElement(s.a,{primary:e.label}))})))))))}},3528:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(1040),l=a(1714),o=a(11),i=a.n(o),m=a(98).a.events,u=(new Date).getFullYear(),s=Object(l.b)(i.a);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{localizer:s,events:m,step:60,timeslots:8,defaultView:"week",defaultDate:new Date(u,3,1)}))}}}]);
//# sourceMappingURL=170.0561a24f.chunk.js.map