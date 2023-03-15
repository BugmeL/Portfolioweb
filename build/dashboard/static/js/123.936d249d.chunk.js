(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[123],{1040:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(53),o=a(1043),c=a(573),i=a(27),s=a.n(i),m=a(2),u=s()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,n=e.children,i=e.className,s=e.restProps,d=u();return r.a.createElement(c.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(l.a,Object.assign({className:Object(m.default)(d.pageFull,i)},s),(t||a)&&r.a.createElement(o.d,{heading:t,breadcrumbComponent:a&&r.a.createElement(o.c,{items:a})}),n))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return v})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return k}));var n=a(17),r=a(8),l=a(0),o=a.n(l),c=a(119),i=a(53),s=a(106),m=a(2),u=["heading","breadcrumbComponent","children"],d=Object(c.a)((function(e){return{pageHeaderRoot:Object(r.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(r.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,a=e.breadcrumbComponent,r=e.children,l=Object(n.a)(e,u),c=d();return o.a.createElement(i.a,Object.assign({className:Object(m.default)(c.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},l),o.a.createElement(s.a,{component:"div",variant:"h1",className:Object(m.default)(c.titleRoot,"title")},t),o.a.createElement(i.a,{ml:{sm:"auto"}},a),r)},b=a(1083),g=a(60),h=["items"],f=Object(c.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),v=function(e){var t=e.items,a=(Object(n.a)(e,h),f());return o.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?o.a.createElement(s.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):o.a.createElement(g.c,{key:t,className:Object(m.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},y=a(899),E=a(35),x=a(180),C=a(1040),O=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,n=e.children;return o.a.createElement(C.a,null,o.a.createElement(x.a,null,o.a.createElement(y.a,{item:!0,xs:12,md:7},o.a.createElement(p,{heading:"Preview"}),o.a.createElement(i.a,{mb:8},n),o.a.createElement(E.a,null,t)),o.a.createElement(y.a,{item:!0,xs:12,md:5},a)))},j=a(1045),k=function(e){var t=e.pageTitle,a=e.menus,n=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return o.a.createElement(j.a,{pageTitle:t,breadcrumbs:r,menus:a},n)}},1045:function(e,t,a){"use strict";var n=a(8),r=a(0),l=a.n(r),o=a(53),c=a(957),i=a(106),s=a(892),m=a(893),u=a(949),d=a(119),p=a(1040),b=Object(d.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(n.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(n.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,n=e.breadcrumbs,r=e.children,d=b();return l.a.createElement(p.a,{heading:t,breadcrumbs:n},l.a.createElement(o.a,{className:d.root},l.a.createElement(o.a,{className:d.contentArea},r),l.a.createElement(c.a,{xsDown:!0},l.a.createElement(o.a,{className:d.contentSidebar},l.a.createElement(i.a,{component:"h4",variant:"h4"},"Contents"),l.a.createElement(s.a,null,a.map((function(e,t){return l.a.createElement(m.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},l.a.createElement(u.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var n=a(1),r=a(115),l=a(7),o=a(0),c=(a(113),a(2)),i=a(10),s=a(106),m=a(24),u=a(18),d=Object(u.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=a(327);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(l.a)(e,["classes"]);return o.createElement(p.a,Object(n.a)({component:"li",className:t.root,focusRipple:!0},a),o.createElement(d,{className:t.icon}))}));var g=o.forwardRef((function(e,t){var a=e.children,i=e.classes,m=e.className,u=e.component,d=void 0===u?"nav":u,p=e.expandText,g=void 0===p?"Show path":p,h=e.itemsAfterCollapse,f=void 0===h?1:h,v=e.itemsBeforeCollapse,y=void 0===v?1:v,E=e.maxItems,x=void 0===E?8:E,C=e.separator,O=void 0===C?"/":C,j=Object(l.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=o.useState(!1),S=k[0],I=k[1],z=o.Children.toArray(a).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return o.createElement("li",{className:i.li,key:"child-".concat(t)},e)}));return o.createElement(s.a,Object(n.a)({ref:t,component:d,color:"textSecondary",className:Object(c.default)(i.root,m)},j),o.createElement("ol",{className:i.ol},function(e,t,a){return e.reduce((function(n,r,l){return l<e.length-1?n=n.concat(r,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},a)):n.push(r),n}),[])}(S||x&&z.length<=x?z:function(e){return y+f>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[o.createElement(b,{"aria-label":g,key:"ellipsis",onClick:function(e){I(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(r.a)(e.slice(e.length-f,e.length)))}(z),i.separator,O)))}));t.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},1348:function(e,t,a){"use strict";var n=a(3),r=a(0),l=a.n(r),o=a(2),c=a(4),i=a.n(c),s=a(53),m=a(985),u=a(67),d=a(119),p=Object(d.a)((function(e){return{root:{display:"flex",alignItems:"center","&.vertical":{flexDirection:"column",textAlign:"center"},"&.horizontal":{"& $userInfo":{marginLeft:15,marginTop:0}}},badgeRoot:{backgroundColor:"white",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.15)",borderRadius:30,padding:"4px",display:"flex",alignItems:"center"},badgeAvatarRoot:{position:"relative","&.top.center":{marginTop:14},"&.top.center .MuiBadge-badge":{top:0,left:"50%",transform:"translate(-50%, -50%)"},"&.bottom.left, &.bottom.center, &.bottom.right":{marginBottom:14,"& .vertical":{paddingBottom:16}},"&.bottom.center .MuiBadge-badge":{bottom:0,left:"50%",transform:"translate(-50%, 50%)"}},userInfo:{position:"relative",marginTop:6},title:{fontSize:14,color:e.palette.text.primary,margin:0},subTitle:{fontSize:12,color:e.palette.text.secondary,margin:0}}})),b=function(e){var t=e.align,a=e.anchorOrigin,r=e.showItemBadge,c=e.avatar,i=e.avatarProps,m=e.badge,d=e.badgeProps,b=e.title,h=e.titleProps,f=e.subTitle,v=e.subTitleProps,y=p({align:t,anchorOrigin:a}),E=Object(n.a)({badgeContent:m,color:"secondary"},d);if("string"!==typeof m){var x=l.a.createElement("div",{className:Object(o.default)(y.badgeRoot,"Cmt-badge")},m);E=Object(n.a)({badgeContent:x},d)}var C=function(){return l.a.createElement("div",{className:Object(o.default)(y.root,t)},r?"string"===typeof c?l.a.createElement(u.a,Object.assign({src:c,alt:b},i)):c:l.a.createElement(g,{badge:m,anchorOrigin:a,badgeContent:E,classes:y},"string"===typeof c?l.a.createElement(u.a,Object.assign({src:c,alt:b},i)):c),l.a.createElement("div",{className:Object(o.default)(y.userInfo,"Cmt-user-info")},l.a.createElement(s.a,Object.assign({component:"p",className:Object(o.default)(y.title,"Cmt-title")},h),b),l.a.createElement(s.a,Object.assign({component:"p",className:Object(o.default)(y.subTitle,"Cmt-sub-title")},v),f)))};return r?l.a.createElement(g,{badge:m,anchorOrigin:a,badgeContent:E,classes:y},C()):C()},g=function(e){var t=e.badge,a=e.badgeContent,n=e.anchorOrigin,r=e.classes,c=e.children;return t?l.a.createElement(m.a,Object.assign({className:Object(o.default)(r.badgeAvatarRoot,"Cmt-badge-avatar",n.vertical,n.horizontal)},a,{anchorOrigin:n}),c):c};b.prototype={avatar:i.a.oneOfType([i.a.string,i.a.element]),title:i.a.oneOfType([i.a.string,i.a.element]),badge:i.a.oneOfType([i.a.string,i.a.element]),subTitle:i.a.oneOfType([i.a.string,i.a.element]),avatarProps:i.a.object,badgeProps:i.a.object,showItemBadge:i.a.bool,align:i.a.string,anchorOrigin:i.a.object,titleProps:i.a.object,subTitleProps:i.a.object},b.defaultProps={align:"horizontal",showItemBadge:!1,anchorOrigin:{vertical:"top",horizontal:"left"}};t.a=l.a.memo(b)},1375:function(e,t,a){"use strict";var n=a(9),r=a(3),l=a(17),o=a(0),c=a.n(o),i=a(4),s=a.n(i),m=a(2),u=a(1507),d=a(119),p=a(461),b=a(902),g=a(67),h=["items","max","srcKey","titleKey","phCharLength","avatarSize","onItemClick","onMoreClick","spacing","expandable","renderItemSummary","renderMore","moreVisibleOn","itemStyle","activeItemStyle","tooltipProps"],f=Object(d.a)((function(e){return{rootAvatarGroup:function(t){return{"& .MuiAvatar-root":{borderColor:t.avatarStyle.outlineColor,borderWidth:t.avatarStyle.outlineThickness,marginLeft:-t.spacing,transition:"all 0.30s ease","&:first-child":{marginLeft:0},"&:hover":{borderColor:t.avatarActiveStyle.outlineColor?t.avatarActiveStyle.outlineColor:e.palette.primary.main,borderWidth:t.avatarActiveStyle.outlineThickness,boxShadow:"rgba(0,0,0,0.2) 0px 2px ".concat(t.avatarActiveStyle.elevation,"px -1px"),zIndex:"".concat(t.totalRecords," !important")}},"&:hover .Cmt-hoverEffect":{marginLeft:0}}}}})),v=function(e,t){if(e&&t>0)return e.substr(0,t).toUpperCase()},y=function(e){var t=e.items,a=e.max,i=e.srcKey,s=e.titleKey,d=e.phCharLength,y=e.avatarSize,E=e.onItemClick,x=e.onMoreClick,C=e.spacing,O=e.expandable,j=e.renderItemSummary,k=e.renderMore,S=e.moreVisibleOn,I=e.itemStyle,z=e.activeItemStyle,T=e.tooltipProps,R=Object(l.a)(e,h),L=t.length,N=t.slice(0,a<L?a-1:a),w=a<L?t.slice(a-1,L):[],A=Object(o.useState)(!1),P=Object(n.a)(A,2),M=P[0],B=P[1],V=Object(o.useState)(S&&"click"!==S&&w.length&&k?k(w):""),K=Object(n.a)(V,2),H=K[0],W=K[1],_="click"===S?{open:M}:{};Object(o.useEffect)((function(){M?W(k(w)):"click"===S&&W("")}),[M]);var q=f({spacing:C,avatarStyle:function(){return Object(r.a)({outlineColor:"#fafafa",outlineThickness:2},I)},avatarActiveStyle:function(){return Object(r.a)({outlineColor:"",outlineThickness:2,elevation:3},z)},totalRecords:L}),D=function(e,t,a){E&&E(e,t,a)};return c.a.createElement(u.a,Object.assign({className:Object(m.default)(q.rootAvatarGroup,"Cmt-root-avatar-group"),max:a},R),N.map((function(e,t){return j?c.a.createElement(p.a,Object.assign({title:j(e,t),key:t},T),c.a.createElement(g.a,{className:O?"Cmt-hoverEffect":"",alt:e[s],src:e[i],size:y,onClick:function(a){return D(e,t,a)},style:{cursor:"pointer",zIndex:t}},v(e[s],d))):c.a.createElement(g.a,{key:t,className:O?"Cmt-hoverEffect":"",alt:e[s],src:e[i],size:y,onClick:function(a){return D(e,t,a)},style:{cursor:"pointer",zIndex:t}},v(e[s],d))})),a<L&&c.a.createElement(p.a,Object.assign({title:H},_),c.a.createElement(g.a,{className:Object(m.default)("Cmt-avatar-more",O?"Cmt-hoverEffect":""),alt:w.length.toString(),size:y,style:{cursor:"pointer",zIndex:a},onClick:function(e){"function"===(x&&typeof x)&&x(e),"click"===S&&B(!M)}},c.a.createElement(b.a,{onClickAway:function(){return B(!1)}},c.a.createElement("div",null,"+",w.length)))))};y.prototype={items:s.a.array.isRequired,max:s.a.number,spacing:s.a.number,srcKey:s.a.string,titleKey:s.a.string,phCharLength:s.a.number,avatarSize:s.a.oneOfType([s.a.oneOf(["small","medium","large"]),s.a.number]),onItemClick:s.a.func,onMoreClick:s.a.func,expandable:s.a.bool,renderItemSummary:s.a.func,renderMore:s.a.func,moreVisibleOn:s.a.oneOf(["hover","click"]),itemStyle:s.a.object,activeItemStyle:s.a.object,tooltipProps:s.a.object},y.defaultProps={items:[],max:5,spacing:8,srcKey:"src",titleKey:"title",phCharLength:1,avatarSize:"medium",expandable:!1,moreVisibleOn:"hover",itemStyle:{outlineColor:"#fafafa",outlineThickness:2},activeItemStyle:{outlineColor:"",outlineThickness:2,elevation:1}},t.a=y},1426:function(e,t,a){"use strict";var n=a(17),r=a(0),l=a.n(r),o=a(376),c=a(465),i=a(630),s=a(319),m=a(4),u=a.n(m),d=["name","id","value","label","labelPlacement","checked","onChange","color","required","error","helperText","icon","checkedIcon"],p=function(e){var t=e.name,a=e.id,r=e.value,m=e.label,u=e.labelPlacement,p=e.checked,b=e.onChange,g=e.color,h=e.required,f=e.error,v=e.helperText,y=e.icon,E=e.checkedIcon,x=Object(n.a)(e,d);return l.a.createElement(o.a,Object.assign({required:h,error:f,component:"fieldset"},x),l.a.createElement(c.a,{value:r,control:l.a.createElement(i.a,{checked:p,name:t,id:a||t,onChange:b,color:g,icon:y,checkedIcon:E}),label:m,labelPlacement:u}),v&&l.a.createElement(s.a,{error:f||""!==v},v))};p.prototype={name:u.a.string,id:u.a.string,checked:u.a.bool,value:u.a.string,label:u.a.string,color:u.a.string,labelPlacement:u.a.string,onChange:u.a.func,error:u.a.bool,helperText:u.a.bool,icon:u.a.element,checkedIcon:u.a.element},p.defaultProps={checked:!1,color:"primary",labelPlacement:"end",error:!1,helperText:""},t.a=p},1507:function(e,t,a){"use strict";var n=a(1),r=a(7),l=a(0),o=(a(113),a(2)),c=a(10),i=a(1036),s={small:-16,medium:null},m=l.forwardRef((function(e,t){var a=e.children,c=e.classes,m=e.className,u=e.max,d=void 0===u?5:u,p=e.spacing,b=void 0===p?"medium":p,g=Object(r.a)(e,["children","classes","className","max","spacing"]),h=d<2?2:d,f=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})),v=f.length>h?f.length-h+1:0,y=b&&void 0!==s[b]?s[b]:-b;return l.createElement("div",Object(n.a)({className:Object(o.default)(c.root,m),ref:t},g),f.slice(0,f.length-v).map((function(e,t){return l.cloneElement(e,{className:Object(o.default)(e.props.className,c.avatar),style:Object(n.a)({zIndex:f.length-t,marginLeft:0===t?void 0:y},e.props.style)})})),v?l.createElement(i.a,{className:c.avatar,style:{zIndex:0,marginLeft:y}},"+",v):null)}));t.a=Object(c.a)((function(e){return{root:{display:"flex"},avatar:{border:"2px solid ".concat(e.palette.background.default),marginLeft:-8,"&:first-child":{marginLeft:0}}}}),{name:"MuiAvatarGroup"})(m)},3605:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(1043),o=a(262),c=a(394),i=a(135),s=a(1426),m=a(280),u=a(53),d=function(){var e=Object(n.useContext)(o.a),t=e.expandable,a=e.setExpandable,l=e.moreVisibleAction,d=e.setMoreVisibleAction,p=e.placeholderLength,b=e.setPlaceholderLength,g=e.size,h=e.setSize;return r.a.createElement(c.e,{title:"Cmt Avatar Group"},r.a.createElement(c.d,{title:"Expandable"},r.a.createElement(s.a,{label:"Expand on Hover",checked:t,onChange:function(e){return a(e.target.checked)}})),r.a.createElement(c.d,{title:"Sizes"},[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}].map((function(e,t){return r.a.createElement(i.a,{key:t,name:"avatar-size",label:e.label,value:e.value,checked:g===e.value,onChange:function(){return h(e.value)}})})),r.a.createElement(i.a,{name:"avatar-size",label:"Custom",checked:"number"===typeof g,onChange:function(){return h(80)}})),"number"===typeof g&&r.a.createElement(c.d,null,r.a.createElement(u.a,{flex:1},r.a.createElement(u.a,{fontSize:12,mb:1},"Set custom size"),r.a.createElement(m.a,{defaultValue:80,getAriaValueText:function(){return g},"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:5,min:30,max:100,onChange:function(e,t){return h(t)}}),r.a.createElement(u.a,{display:"flex",justifyContent:"space-between",mt:-2,mb:2},r.a.createElement(u.a,{fontSize:12},"30px"),r.a.createElement(u.a,{fontSize:12},"100px")))),r.a.createElement(c.d,{title:"More Visible Action"},[{label:"Hover",value:"hover"},{label:"Click",value:"click"}].map((function(e,t){return r.a.createElement(i.a,{key:t,name:"action-type",label:e.label,value:e.value,checked:l===e.value,onChange:function(){return d(e.value)}})}))),r.a.createElement(c.d,{title:"Placeholder Char Length "},[{label:"One",value:1},{label:"Two",value:2}].map((function(e,t){return r.a.createElement(i.a,{key:t,name:"placeholder-length",label:e.label,value:e.value,checked:p===e.value,onChange:function(){return b(e.value)}})}))))},p=a(8),b=a(406),g=a(397),h=a(119),f=a(61),v=a(106),y=a(1375),E=a(1348),x=a(67),C=a(84),O=Object(h.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap","& > *":{margin:e.spacing(1),display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}},titleRoot:{color:e.palette.common.white,fontSize:14},avatarRoot:{marginTop:2,marginBottom:2},avatar:Object(p.a)({},e.breakpoints.up("xl"),{width:56,height:56})}})),j=function(e){var t=e.item,a=e.placeholderLength;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{color:"inherit"},t.title),r.a.createElement(u.a,{pb:2,component:"p"},"It's very engaging. Right?"),r.a.createElement(x.a,{src:t.profile_pic,alt:t.title,variant:"rounded",size:125,phCharLength:a}))},k=function(e){var t=e.items,a=e.placeholderLength,n=O();return r.a.createElement(C.a,{data:t,renderRow:function(e,t){return r.a.createElement(E.a,{key:t,avatar:r.a.createElement(x.a,{className:n.avatarRoot,color:"orange",size:40,src:e.profile_pic,alt:e.title,phCharLength:a}),title:e.title,titleProps:{className:n.titleRoot}})}})},S=function(){var e=O(),t=Object(n.useContext)(o.a),a=t.expandable,l=t.moreVisibleAction,c=t.placeholderLength,i=t.size,s=Object(f.a)(),m=g.a.avatars;return r.a.createElement(b.a,null,r.a.createElement(u.a,{className:e.root},r.a.createElement(y.a,{items:m,max:6,srcKey:"profile_pic",avatarSize:i,spacing:a?10:0,expandable:a,phCharLength:c,itemStyle:{outlineColor:"#fafafa",outlineThickness:3},activeItemStyle:{outlineColor:s.palette.primary.main,outlineThickness:3,elevation:10},moreVisibleOn:l,onItemClick:function(e,t){},renderMore:function(e){return r.a.createElement(k,{items:e,placeholderLength:c})},renderItemSummary:function(e,t){return r.a.createElement(j,{key:t,item:e,placeholderLength:c})}})))},I=a(9),z=function(e){var t=e.children,a=Object(n.useState)(!1),l=Object(I.a)(a,2),c=l[0],i=l[1],s=Object(n.useState)("hover"),m=Object(I.a)(s,2),u=m[0],d=m[1],p=Object(n.useState)(1),b=Object(I.a)(p,2),g=b[0],h=b[1],f=Object(n.useState)("medium"),v=Object(I.a)(f,2),y=v[0],E=v[1];return r.a.createElement(o.a.Provider,{value:{expandable:c,setExpandable:i,moreVisibleAction:u,setMoreVisibleAction:d,placeholderLength:g,setPlaceholderLength:h,size:y,setSize:E}},t)},T=function(){var e=Object(n.useContext)(o.a),t=e.expandable,a=e.moreVisibleAction,l=e.placeholderLength,i=e.size,s=g.a.avatars,m=JSON.stringify(s,null,2);return r.a.createElement(c.f,{sourceCode:'\nconst theme = useTheme();\n\n<CmtAvatarGroup\n  items={avatars}\n  max={6}\n  srcKey="profile_pic"'+("string"===typeof i?'\n  size="'.concat(i,'"'):"\n  size={".concat(i,"}"))+"\n  spacing={".concat(t?10:0,"}\n  expandable={").concat(t,"}\n  phCharLength={").concat(l,"}\n  itemStyle={{\n    outlineColor: '#fafafa',\n    outlineThickness: 3,\n  }}\n  activeItemStyle={{\n    outlineColor: theme.palette.primary.main,\n    outlineThickness: 3,\n    elevation: 10,\n  }}\n  moreVisibleOn=\"").concat(a,'"\n  onItemClick={(item, index) => console.log(\'onItemClick\', item, index)}\n  renderMore={restItems => <RenderMore items={restItems} placeholderLength={placeholderLength} />}\n  renderItemSummary={(item, index) => <RenderRow key={index} item={item} placeholderLength={placeholderLength} />}\n/>\n\nconst RenderRow = ({ item, placeholderLength }) => {\n  return (\n    <React.Fragment>\n      <Typography color="inherit">{item.title}</Typography>\n      <Box pb={2} component="p">\n        {"It\'s very engaging. Right?"}\n      </Box>\n      <CmtAvatar src={item.profile_pic} alt={item.title} variant="rounded" size={125} phCharLength={placeholderLength} />\n    </React.Fragment>\n  );\n};\n\nconst RenderMore = ({ items, placeholderLength }) => {\n  const classes = useStyles();\n\n  return (\n    <CmtList\n      data={items}\n      renderRow={(item, index) => {\n        return (\n          <CmtObjectSummary\n            key={index}\n            avatar={\n              <CmtAvatar\n                className={classes.avatarRoot}\n                color="orange"\n                size={40}\n                src={item.profile_pic}\n                alt={item.title}\n                phCharLength={placeholderLength}\n              />\n            }\n            title={item.title}\n            titleProps={{ className: classes.titleRoot }}\n          />\n        );\n      }}\n    />\n  );\n};\n\nconst avatars = ').concat(m,";\n")})};t.default=function(){return r.a.createElement(z,null,r.a.createElement(l.a,{SourceCodeComponent:r.a.createElement(T,null),SettingsComponent:r.a.createElement(d,null)},r.a.createElement(S,null)))}}}]);
//# sourceMappingURL=123.936d249d.chunk.js.map