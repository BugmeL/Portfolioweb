(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[162],{1040:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(53),i=n(1043),c=n(573),l=n(27),m=n.n(l),s=n(2),u=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,n=e.breadcrumbs,a=e.children,l=e.className,m=e.restProps,d=u();return o.a.createElement(c.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},o.a.createElement(r.a,Object.assign({className:Object(s.default)(d.pageFull,l)},m),(t||n)&&o.a.createElement(i.d,{heading:t,breadcrumbComponent:n&&o.a.createElement(i.c,{items:n})}),a))}},1043:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return k}));var a=n(17),o=n(8),r=n(0),i=n.n(r),c=n(119),l=n(53),m=n(106),s=n(2),u=["heading","breadcrumbComponent","children"],d=Object(c.a)((function(e){return{pageHeaderRoot:Object(o.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(o.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,n=e.breadcrumbComponent,o=e.children,r=Object(a.a)(e,u),c=d();return i.a.createElement(l.a,Object.assign({className:Object(s.default)(c.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},r),i.a.createElement(m.a,{component:"div",variant:"h1",className:Object(s.default)(c.titleRoot,"title")},t),i.a.createElement(l.a,{ml:{sm:"auto"}},n),o)},b=n(1083),g=n(60),h=["items"],f=Object(c.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),E=function(e){var t=e.items,n=(Object(a.a)(e,h),f());return i.a.createElement(b.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?i.a.createElement(m.a,{key:t,className:n.textSm,color:"textPrimary"},e.label):i.a.createElement(g.c,{key:t,className:Object(s.default)(n.textSm,n.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},y=n(899),C=n(35),v=n(180),j=n(1040),x=function(e){var t=e.SourceCodeComponent,n=e.SettingsComponent,a=e.children;return i.a.createElement(j.a,null,i.a.createElement(v.a,null,i.a.createElement(y.a,{item:!0,xs:12,md:7},i.a.createElement(p,{heading:"Preview"}),i.a.createElement(l.a,{mb:8},a),i.a.createElement(C.a,null,t)),i.a.createElement(y.a,{item:!0,xs:12,md:5},n)))},O=n(1045),k=function(e){var t=e.pageTitle,n=e.menus,a=e.children,o=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return i.a.createElement(O.a,{pageTitle:t,breadcrumbs:o,menus:n},a)}},1045:function(e,t,n){"use strict";var a=n(8),o=n(0),r=n.n(o),i=n(53),c=n(957),l=n(106),m=n(892),s=n(893),u=n(949),d=n(119),p=n(1040),b=Object(d.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(a.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(a.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,n=e.menus,a=e.breadcrumbs,o=e.children,d=b();return r.a.createElement(p.a,{heading:t,breadcrumbs:a},r.a.createElement(i.a,{className:d.root},r.a.createElement(i.a,{className:d.contentArea},o),r.a.createElement(c.a,{xsDown:!0},r.a.createElement(i.a,{className:d.contentSidebar},r.a.createElement(l.a,{component:"h4",variant:"h4"},"Contents"),r.a.createElement(m.a,null,n.map((function(e,t){return r.a.createElement(s.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},r.a.createElement(u.a,{primary:e.label}))})))))))}},1578:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(2),i=n(613),c=n(53),l=n(375),m=n(119),s=n(24),u=Object(m.a)((function(e){return{emptyListContainer:{flexDirection:"column",minHeight:250,height:"100%",display:"flex",padding:20,justifyContent:"center",alignItems:"center",backgroundColor:e.palette.background.paper,border:"1px solid ".concat(Object(s.a)(e.palette.common.black,.12)),borderRadius:4,textAlign:"center"},flexRow:{flexDirection:"row"}}}));t.a=function(e){var t=e.loader,n=e.placeholder,a=e.loading,m=e.title,s=e.actionTitle,d=e.content,p=e.onClick,b=e.children,g=u();return a||t?o.a.createElement(o.a.Fragment,null,n||o.a.createElement("div",{className:Object(r.default)(g.emptyListContainer,g.flexRow,"CmtList-EmptyResult")},o.a.createElement(i.a,{size:16}),o.a.createElement("span",{className:"ml-2"},"Loading..."))):o.a.createElement("div",{className:Object(r.default)(g.emptyListContainer,"CmtList-EmptyResult")},b||o.a.createElement(o.a.Fragment,null,m&&o.a.createElement(c.a,{component:"h4",fontSize:28,color:"text.primary",mb:3},m),o.a.createElement(c.a,{fontSize:18,component:"p",color:"text.secondary"},d),s&&o.a.createElement(l.a,{color:"primary",variant:"contained",style:{marginTop:30,height:45,minWidth:150},onClick:p},s)))}},3595:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1043),i=n(262),c=n(394),l=n(135),m=n(86),s=function(){var e=Object(a.useContext)(i.a),t=e.resultEmpty,n=e.setResultEmpty,r=e.initLoader,s=e.setInitLoader,u=e.showFooter,d=e.setFooterVisibility,p=e.paginationType,b=e.setPaginationType,g=e.position,h=e.setPosition,f=e.loadMore,E=e.setLoadMore;return Object(a.useEffect)((function(){r&&n(!0)}),[r,n]),Object(a.useEffect)((function(){t||s(!1)}),[t,s]),o.a.createElement(c.e,{title:"Cmt List"},o.a.createElement(c.d,null,o.a.createElement(m.a,{name:"show-initial-loader",label:"Show Initial Loader",checked:r,onChange:function(e){return s(e.target.checked)}})),o.a.createElement(c.d,null,o.a.createElement(m.a,{name:"result-empty",label:"Make Result Empty",checked:t,onChange:function(e){return n(e.target.checked)}})),o.a.createElement(c.d,null,o.a.createElement(m.a,{name:"show-footer",label:"Show Footer",checked:u,onChange:function(e){return d(e.target.checked)}})),u&&o.a.createElement(c.d,{title:"Show Loading more content"},[{label:"Load More",value:"load-more"},{label:"Pagination",value:"pagination"}].map((function(e,t){return o.a.createElement(l.a,{key:t,name:"pagination-type",label:e.label,value:e.value,checked:p===e.value,onChange:function(){return b(e.value)}})}))),u&&"pagination"===p&&o.a.createElement(c.d,{title:"Pagination Position"},[{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Right",value:"right"}].map((function(e,t){return o.a.createElement(l.a,{key:t,name:"show-border",label:e.label,value:e.value,checked:g===e.value,onChange:function(){return h(e.value)}})}))),u&&"load-more"===p&&o.a.createElement(c.d,null,o.a.createElement(m.a,{name:"show-load-more-content",label:"Show Loading more content",checked:f,onChange:function(e){return E(e.target.checked)}})))},u=n(397),d=n(181),p=n(84),b=n(114),g=n.n(b),h=n(1578),f=n(17),E=n(2),y=n(3481),C=n(119),v=n(459),j=["data","paginationProps","position","onPageChange","pageItemCounts"],x=Object(C.a)((function(){return{navPagination:{display:"flex",padding:10,"&.left":{justifyContent:"flex-start"},"&.right":{justifyContent:"flex-end"},"&.center":{justifyContent:"center"}}}})),O=function(e){var t=e.data,n=e.paginationProps,a=e.position,r=e.onPageChange,i=e.pageItemCounts,c=Object(f.a)(e,j),l=x(),m=n.page,s=n.count,u=t;return s>0&&(u=t.slice((m-1)*i,m*i)),o.a.createElement(v.a,Object.assign({},c,{data:u,ListFooterComponent:s>0?o.a.createElement(y.a,Object.assign({className:Object(E.default)(l.navPagination,a)},n,{count:s,page:m,onChange:r})):null}))},k=O;O.defaultProps={pageItemCounts:10,paginationProps:{page:1,count:5},position:"center",data:[]};var R=n(53),w=n(106),L=n(392),T=Object(C.a)((function(e){return{itemRoot:{padding:1,"& .Cmt-avatar":{height:56,width:56},"& .Cmt-media-header":{marginBottom:8},"& .Cmt-media-image":{marginRight:12,marginTop:0}},titleRoot:{fontSize:16},descText:{color:e.palette.text.secondary}}})),N=function(){var e=T(),t=Object(a.useContext)(i.a),n=t.showBorder,r=t.resultEmpty,c=t.initLoader,l=t.showFooter,m=t.paginationType,s=t.position,b=t.loadMore,f=u.a.carouselImages,E=function(){return r?[]:f},y=function(t,n){return o.a.createElement(R.a,{mb:2,key:n,className:e.itemRoot},o.a.createElement(L.e,null,o.a.createElement(d.a,{avatar:t.profile_pic,title:t.title,titleProps:{className:e.titleRoot}},o.a.createElement(w.a,{className:e.descText,variant:"body2"},t.description))))},C=function(){};return o.a.createElement(g.a,{style:{maxHeight:350}},"pagination"===m?o.a.createElement(k,{paginationProps:{page:1,count:5},position:s,data:E(),renderRow:y,border:n,onEndReached:C,ListEmptyComponent:o.a.createElement(h.a,{loader:c,title:"No Data Found",content:"Empty result description",actionTitle:"Add Content"})}):o.a.createElement(p.a,{data:E(),renderRow:y,border:n,onEndReached:C,ListEmptyComponent:o.a.createElement(h.a,{loader:c,title:"No Data Found",content:"Empty result description",actionTitle:"Add Content"}),footerProps:l?{loading:b,footerText:"No more content"}:null}))},P=n(9),S=function(e){var t=e.children,n=Object(a.useState)(!1),r=Object(P.a)(n,2),c=r[0],l=r[1],m=Object(a.useState)(!1),s=Object(P.a)(m,2),u=s[0],d=s[1],p=Object(a.useState)(!1),b=Object(P.a)(p,2),g=b[0],h=b[1],f=Object(a.useState)("load-more"),E=Object(P.a)(f,2),y=E[0],C=E[1],v=Object(a.useState)("center"),j=Object(P.a)(v,2),x=j[0],O=j[1],k=Object(a.useState)(!1),R=Object(P.a)(k,2),w=R[0],L=R[1];return o.a.createElement(i.a.Provider,{value:{resultEmpty:c,setResultEmpty:l,initLoader:u,setInitLoader:d,showFooter:g,setFooterVisibility:h,paginationType:y,setPaginationType:C,position:x,setPosition:O,loadMore:w,setLoadMore:L}},t)},F=function(){var e=Object(a.useContext)(i.a),t=e.resultEmpty,n=e.initLoader,r=e.showFooter,l=e.paginationType,m=e.position,s=e.loadMore,u=function(){return t?"[]":"data"},d=function(){return"\n<CmtList\n  data={"+u()+"}\n  renderRow={renderRow}\n  onEndReached={() => console.log('You have reached end of list')}\n  ListEmptyComponent={\n    <ListEmptyResult\n      loader={".concat(n,'}\n      title="No Data Found"\n      content="Empty result description"\n      actionTitle="Add Content"\n    />\n  }')+(r?"\n  footerProps={\n    {\n      loading: ".concat(s,",\n      footerText: 'No more content',\n    }\n  }"):"")+"\n/>\n"};return o.a.createElement(c.f,{sourceCode:("pagination"===l?'\n<CmtListPagination\n  paginationProps={{ page: 1, count: 5 }}\n  position="'.concat(m,'"\n  data={')+u()+"}\n  renderRow={renderRow}\n  onEndReached={() => console.log('You have reached end of list')}\n  ListEmptyComponent={\n    <ListEmptyResult\n      loader={".concat(n,'}\n      title="No Data Found"\n      content="Empty result description"\n      actionTitle="Add Content"\n    />\n  }\n/>\n'):d())+'\nconst renderRow = (item, index) => {\n  return (\n    <Box mb={2} key={index} className={classes.itemRoot}>\n      <JumboCard>\n        <CmtMediaObject avatar={item.profile_pic} title={item.title} titleProps={{ className: classes.titleRoot }}>\n          <Typography className={classes.descText} variant="body2">\n            {item.description}\n          </Typography>\n        </CmtMediaObject>\n      </JumboCard>\n    </Box>\n  );\n};\n'})};t.default=function(){return o.a.createElement(S,null,o.a.createElement(r.a,{SourceCodeComponent:o.a.createElement(F,null),SettingsComponent:o.a.createElement(s,null)},o.a.createElement(N,null)))}}}]);
//# sourceMappingURL=162.27411224.chunk.js.map