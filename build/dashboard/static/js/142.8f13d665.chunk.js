(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[142],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(53),c=a(1043),l=a(573),i=a(27),s=a.n(i),m=a(2),u=s()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,s=e.restProps,p=u();return r.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(o.a,Object.assign({className:Object(m.default)(p.pageFull,i)},s),(t||a)&&r.a.createElement(c.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(c.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return x})),a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return S}));var n=a(17),r=a(8),o=a(0),c=a.n(o),l=a(119),i=a(53),s=a(106),m=a(2),u=["heading","breadcrumbComponent","children"],p=Object(l.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,o=Object(n.a)(e,u),l=p();return c.a.createElement(i.a,Object.assign({className:Object(m.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),c.a.createElement(s.a,{component:"div",variant:"h1",className:Object(m.default)(l.titleRoot,"title")},t),c.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},f=a(1083),g=a(60),b=["items"],h=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),x=function(e){var t=e.items,a=(Object(n.a)(e,b),h());return c.a.createElement(f.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?c.a.createElement(s.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):c.a.createElement(g.c,{key:t,className:Object(m.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},v=a(899),y=a(35),E=a(180),k=a(1040),j=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return c.a.createElement(k.a,null,c.a.createElement(E.a,null,c.a.createElement(v.a,{item:!0,xs:12,md:7},c.a.createElement(d,{heading:"Preview"}),c.a.createElement(i.a,{mb:8},n),c.a.createElement(y.a,null,t)),c.a.createElement(v.a,{item:!0,xs:12,md:5},a)))},O=a(1045),S=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return c.a.createElement(O.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),o=a.n(r),c=a(53),l=a(957),i=a(106),s=a(892),m=a(893),u=a(949),p=a(119),d=a(1040),f=Object(p.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,p=f();return o.a.createElement(d.a,{heading:t,breadcrumbs:n},o.a.createElement(c.a,{className:p.root},o.a.createElement(c.a,{className:p.contentArea},r),o.a.createElement(l.a,{xsDown:!0},o.a.createElement(c.a,{className:p.contentSidebar},o.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(s.a,null,a.map((function(e,t){return o.a.createElement(m.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(u.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var n=a(1),r=a(115),o=a(7),c=a(0),l=(a(113),a(2)),i=a(10),s=a(106),m=a(24),u=a(18),p=Object(u.a)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=a(327);var f=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return c.createElement(d.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),c.createElement(p,{className:t.icon}))}));var g=c.forwardRef((function(e,t){var a=e.children,i=e.classes,m=e.className,u=e.component,p=void 0===u?"nav":u,d=e.expandText,g=void 0===d?"Show path":d,b=e.itemsAfterCollapse,h=void 0===b?1:b,x=e.itemsBeforeCollapse,v=void 0===x?1:x,y=e.maxItems,E=void 0===y?8:y,k=e.separator,j=void 0===k?"/":k,O=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=c.useState(!1),N=S[0],w=S[1],C=c.Children.toArray(a).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return c.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return c.createElement(s.a,Object(n.a)({ref:t,component:p,color:"textSecondary",className:Object(l.default)(i.root,m)},O),c.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,r,o){return o<e.length-1?n=n.concat(r,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):n.push(r),n}),[])}(N||E&&C.length<=E?C:function(e){return v+h>=e.length?e:[].concat(Object(r.a)(e.slice(0,v)),[c.createElement(f,{"aria-label":g,key:"ellipsis",onClick:function(e){w(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-h,e.length)))}(C),i.separator,j)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},2657:function(e,t,a){var n={"./SimplePaper.txt":2658,"./Variants.txt":2659};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=2657},2658:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport { lighten, makeStyles } from '@material-ui/core/styles';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    flexWrap: 'wrap',\r\n    '& > *': {\r\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\r\n      margin: theme.spacing(2),\r\n      width: theme.spacing(32),\r\n      height: theme.spacing(32),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function SimplePaper() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Paper elevation={0} />\r\n      <Paper />\r\n      <Paper elevation={3} />\r\n    </Box>\r\n  );\r\n}\r\n"},2659:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport { lighten, makeStyles } from '@material-ui/core/styles';\r\nimport Paper from '@material-ui/core/Paper';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  root: {\r\n    display: 'flex',\r\n    '& > *': {\r\n      backgroundColor: lighten(theme.palette.background.paper, 0.1),\r\n      margin: theme.spacing(2),\r\n      width: theme.spacing(32),\r\n      height: theme.spacing(32),\r\n    },\r\n  },\r\n}));\r\n\r\nexport default function Variants() {\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Paper variant=\"outlined\" />\r\n      <Paper variant=\"outlined\" square />\r\n    </Box>\r\n  );\r\n}\r\n"},3628:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(0),r=a.n(n),o=a(1043),c=a(53),l=a(106),i=a(326),s=a(391),m=a(119),u=a(24),p=a(176),d=Object(m.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{backgroundColor:Object(u.j)(e.palette.background.paper,.1),margin:e.spacing(2),width:e.spacing(32),height:e.spacing(32)}}}}));function f(){var e=d();return r.a.createElement(c.a,{className:e.root},r.a.createElement(p.a,{elevation:0}),r.a.createElement(p.a,null),r.a.createElement(p.a,{elevation:3}))}var g=Object(m.a)((function(e){return{root:{display:"flex","& > *":{backgroundColor:Object(u.j)(e.palette.background.paper,.1),margin:e.spacing(2),width:e.spacing(32),height:e.spacing(32)}}}}));function b(){var e=g();return r.a.createElement(c.a,{className:e.root},r.a.createElement(p.a,{variant:"outlined"}),r.a.createElement(p.a,{variant:"outlined",square:!0}))}var h=Object(i.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),x=a(2657),v=[{label:"Simple Paper",link:"simple-paper",component:r.a.createElement(f,null),filename:"./SimplePaper.txt"},{label:"Variants",link:"variants",component:r.a.createElement(b,null),filename:"./Variants.txt"}];function y(){var e=h();return r.a.createElement(o.b,{pageTitle:"Paper",menus:v},v.map((function(t,a){return r.a.createElement(c.a,{key:a,id:t.link,className:e.section},r.a.createElement(l.a,{component:"h3",variant:"inherit",className:e.sectionHeading},t.label),r.a.createElement(s.a,{code:x(t.filename).default,language:"jsx"},t.component))})))}}}]);
//# sourceMappingURL=142.8f13d665.chunk.js.map