(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[98],{1040:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(53),i=a(1043),l=a(573),c=a(27),m=a.n(c),s=a(2),p=m()((function(){return{pageFull:{width:"100%"}}}));t.a=function(e){var t=e.heading,a=e.breadcrumbs,r=e.children,c=e.className,m=e.restProps,d=p();return n.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},n.a.createElement(o.a,Object.assign({className:Object(s.default)(d.pageFull,c)},m),(t||a)&&n.a.createElement(i.d,{heading:t,breadcrumbComponent:a&&n.a.createElement(i.c,{items:a})}),r))}},1043:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"c",(function(){return b})),a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return T}));var r=a(17),n=a(8),o=a(0),i=a.n(o),l=a(119),c=a(53),m=a(106),s=a(2),p=["heading","breadcrumbComponent","children"],d=Object(l.a)((function(e){return{pageHeaderRoot:Object(n.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(n.a)({},e.breakpoints.down("xs"),{marginBottom:10})}})),u=function(e){var t=e.heading,a=e.breadcrumbComponent,n=e.children,o=Object(r.a)(e,p),l=d();return i.a.createElement(c.a,Object.assign({className:Object(s.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},o),i.a.createElement(m.a,{component:"div",variant:"h1",className:Object(s.default)(l.titleRoot,"title")},t),i.a.createElement(c.a,{ml:{sm:"auto"}},a),n)},h=a(1083),g=a(60),f=["items"],y=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),b=function(e){var t=e.items,a=(Object(r.a)(e,f),y());return i.a.createElement(h.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},t.map((function(e,t){return e.isActive?i.a.createElement(m.a,{key:t,className:a.textSm,color:"textPrimary"},e.label):i.a.createElement(g.c,{key:t,className:Object(s.default)(a.textSm,a.linkBlock),color:"inherit",to:e.link||"/"},e.label)})))},v=a(899),E=a(35),k=a(180),w=a(1040),x=function(e){var t=e.SourceCodeComponent,a=e.SettingsComponent,r=e.children;return i.a.createElement(w.a,null,i.a.createElement(k.a,null,i.a.createElement(v.a,{item:!0,xs:12,md:7},i.a.createElement(u,{heading:"Preview"}),i.a.createElement(c.a,{mb:8},r),i.a.createElement(E.a,null,t)),i.a.createElement(v.a,{item:!0,xs:12,md:5},a)))},S=a(1045),T=function(e){var t=e.pageTitle,a=e.menus,r=e.children,n=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return i.a.createElement(S.a,{pageTitle:t,breadcrumbs:n,menus:a},r)}},1045:function(e,t,a){"use strict";var r=a(8),n=a(0),o=a.n(n),i=a(53),l=a(957),c=a(106),m=a(892),s=a(893),p=a(949),d=a(119),u=a(1040),h=Object(d.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},Object(r.a)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),Object(r.a)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.a=function(e){var t=e.pageTitle,a=e.menus,r=e.breadcrumbs,n=e.children,d=h();return o.a.createElement(u.a,{heading:t,breadcrumbs:r},o.a.createElement(i.a,{className:d.root},o.a.createElement(i.a,{className:d.contentArea},n),o.a.createElement(l.a,{xsDown:!0},o.a.createElement(i.a,{className:d.contentSidebar},o.a.createElement(c.a,{component:"h4",variant:"h4"},"Contents"),o.a.createElement(m.a,null,a.map((function(e,t){return o.a.createElement(s.a,{key:t,dense:!0,button:!0,component:"a",href:"#".concat(e.link)},o.a.createElement(p.a,{primary:e.label}))})))))))}},1083:function(e,t,a){"use strict";var r=a(1),n=a(115),o=a(7),i=a(0),l=(a(113),a(2)),c=a(10),m=a(106),s=a(24),p=a(18),d=Object(p.a)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),u=a(327);var h=Object(c.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(s.d)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,a=Object(o.a)(e,["classes"]);return i.createElement(u.a,Object(r.a)({component:"li",className:t.root,focusRipple:!0},a),i.createElement(d,{className:t.icon}))}));var g=i.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,p=e.component,d=void 0===p?"nav":p,u=e.expandText,g=void 0===u?"Show path":u,f=e.itemsAfterCollapse,y=void 0===f?1:f,b=e.itemsBeforeCollapse,v=void 0===b?1:b,E=e.maxItems,k=void 0===E?8:E,w=e.separator,x=void 0===w?"/":w,S=Object(o.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),T=i.useState(!1),C=T[0],A=T[1],B=i.Children.toArray(a).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return i.createElement(m.a,Object(r.a)({ref:t,component:d,color:"textSecondary",className:Object(l.default)(c.root,s)},S),i.createElement("ol",{className:c.ol},function(e,t,a){return e.reduce((function(r,n,o){return o<e.length-1?r=r.concat(n,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(o),className:t},a)):r.push(n),r}),[])}(C||k&&B.length<=k?B:function(e){return v+y>=e.length?e:[].concat(Object(n.a)(e.slice(0,v)),[i.createElement(h,{"aria-label":g,key:"ellipsis",onClick:function(e){A(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],Object(n.a)(e.slice(e.length-y,e.length)))}(B),c.separator,x)))}));t.a=Object(c.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(g)},1542:function(e,t,a){"use strict";var r=a(1),n=a(7),o=a(0),i=a(2),l=a(10),c=["video","audio","picture","iframe","img"],m=o.forwardRef((function(e,t){var a=e.children,l=e.classes,m=e.className,s=e.component,p=void 0===s?"div":s,d=e.image,u=e.src,h=e.style,g=Object(n.a)(e,["children","classes","className","component","image","src","style"]),f=-1!==c.indexOf(p),y=!f&&d?Object(r.a)({backgroundImage:'url("'.concat(d,'")')},h):h;return o.createElement(p,Object(r.a)({className:Object(i.default)(l.root,m,f&&l.media,-1!=="picture img".indexOf(p)&&l.img),ref:t,style:y,src:f?d||u:void 0},g),a)}));t.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)},2059:function(e,t,a){"use strict";var r=a(1),n=a(7),o=a(0),i=a(2),l=a(10),c=a(106),m=o.forwardRef((function(e,t){var a=e.action,l=e.avatar,m=e.classes,s=e.className,p=e.component,d=void 0===p?"div":p,u=e.disableTypography,h=void 0!==u&&u,g=e.subheader,f=e.subheaderTypographyProps,y=e.title,b=e.titleTypographyProps,v=Object(n.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=y;null==E||E.type===c.a||h||(E=o.createElement(c.a,Object(r.a)({variant:l?"body2":"h5",className:m.title,component:"span",display:"block"},b),E));var k=g;return null==k||k.type===c.a||h||(k=o.createElement(c.a,Object(r.a)({variant:l?"body2":"body1",className:m.subheader,color:"textSecondary",component:"span",display:"block"},f),k)),o.createElement(d,Object(r.a)({className:Object(i.default)(m.root,s),ref:t},v),l&&o.createElement("div",{className:m.avatar},l),o.createElement("div",{className:m.content},E,k),a&&o.createElement("div",{className:m.action},a))}));t.a=Object(l.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},2926:function(e,t,a){var r={"./Animations.txt":2927,"./Facebook.txt":2928,"./SkeletonChildren.txt":2929,"./SkeletonTypography.txt":2930,"./Variants.txt":2931,"./YouTube.txt":2932};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id=2926},2927:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport Skeleton from '@material-ui/lab/Skeleton';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst useStyles = makeStyles({\r\n  root: {\r\n    width: 300,\r\n  },\r\n});\r\n\r\nexport default function Animations() {\r\n  const classes = useStyles();\r\n  return (\r\n    <Box className={classes.root}>\r\n      <Skeleton />\r\n      <Skeleton animation={false} />\r\n      <Skeleton animation=\"wave\" />\r\n    </Box>\r\n  );\r\n}\r\n"},2928:function(e,t,a){"use strict";a.r(t),t.default='import React from \'react\';\r\nimport PropTypes from \'prop-types\';\r\nimport { makeStyles } from \'@material-ui/core/styles\';\r\nimport Card from \'@material-ui/core/Card\';\r\nimport CardHeader from \'@material-ui/core/CardHeader\';\r\nimport CardContent from \'@material-ui/core/CardContent\';\r\nimport CardMedia from \'@material-ui/core/CardMedia\';\r\nimport Avatar from \'@material-ui/core/Avatar\';\r\nimport Typography from \'@material-ui/core/Typography\';\r\nimport IconButton from \'@material-ui/core/IconButton\';\r\nimport MoreVertIcon from \'@material-ui/icons/MoreVert\';\r\nimport Skeleton from \'@material-ui/lab/Skeleton\';\r\nimport { Box } from \'@material-ui/core\';\r\n\r\nconst useStyles = makeStyles(theme => ({\r\n  card: {\r\n    maxWidth: 345,\r\n    margin: theme.spacing(2),\r\n  },\r\n  media: {\r\n    height: 190,\r\n  },\r\n}));\r\n\r\nfunction Media(props) {\r\n  const { loading = false } = props;\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <Card className={classes.card}>\r\n      <CardHeader\r\n        avatar={\r\n          loading ? (\r\n            <Skeleton animation="wave" variant="circle" width={40} height={40} />\r\n          ) : (\r\n            <Avatar\r\n              alt="Ted talk"\r\n              src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"\r\n            />\r\n          )\r\n        }\r\n        action={\r\n          loading ? null : (\r\n            <IconButton aria-label="settings">\r\n              <MoreVertIcon />\r\n            </IconButton>\r\n          )\r\n        }\r\n        title={loading ? <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} /> : \'Ted\'}\r\n        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : \'5 hours ago\'}\r\n      />\r\n      {loading ? (\r\n        <Skeleton animation="wave" variant="rect" className={classes.media} />\r\n      ) : (\r\n        <CardMedia\r\n          className={classes.media}\r\n          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"\r\n          title="Ted talk"\r\n        />\r\n      )}\r\n\r\n      <CardContent>\r\n        {loading ? (\r\n          <React.Fragment>\r\n            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />\r\n            <Skeleton animation="wave" height={10} width="80%" />\r\n          </React.Fragment>\r\n        ) : (\r\n          <Typography variant="body2" color="textSecondary" component="p">\r\n            {"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country\'s success:"}\r\n          </Typography>\r\n        )}\r\n      </CardContent>\r\n    </Card>\r\n  );\r\n}\r\n\r\nMedia.propTypes = {\r\n  loading: PropTypes.bool,\r\n};\r\n\r\nexport default function Facebook() {\r\n  return (\r\n    <Box>\r\n      <Media loading />\r\n      <Media />\r\n    </Box>\r\n  );\r\n}\r\n'},2929:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Box from '@material-ui/core/Box';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Avatar from '@material-ui/core/Avatar';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport { makeStyles } from '@material-ui/core/styles';\r\nimport Skeleton from '@material-ui/lab/Skeleton';\r\n\r\nconst useStyles = makeStyles(() => ({\r\n  image: {\r\n    width: '100%',\r\n  },\r\n}));\r\n\r\nfunction SkeletonChildrenDemo(props) {\r\n  const { loading = false } = props;\r\n  const classes = useStyles();\r\n\r\n  return (\r\n    <div>\r\n      <Box display=\"flex\" alignItems=\"center\">\r\n        <Box margin={1}>\r\n          {loading ? (\r\n            <Skeleton variant=\"circle\">\r\n              <Avatar />\r\n            </Skeleton>\r\n          ) : (\r\n            <Avatar src=\"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg\" />\r\n          )}\r\n        </Box>\r\n        <Box width=\"100%\">\r\n          {loading ? (\r\n            <Skeleton width=\"100%\">\r\n              <Typography>.</Typography>\r\n            </Skeleton>\r\n          ) : (\r\n            <Typography>Ted</Typography>\r\n          )}\r\n        </Box>\r\n      </Box>\r\n      {loading ? (\r\n        <Skeleton variant=\"rect\" width=\"100%\">\r\n          <div style={{ paddingTop: '57%' }} />\r\n        </Skeleton>\r\n      ) : (\r\n        <img\r\n          className={classes.image}\r\n          src=\"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512\"\r\n          alt=\"\"\r\n        />\r\n      )}\r\n    </div>\r\n  );\r\n}\r\n\r\nSkeletonChildrenDemo.propTypes = {\r\n  loading: PropTypes.bool,\r\n};\r\n\r\nexport default function SkeletonChildren() {\r\n  return (\r\n    <Grid container spacing={8}>\r\n      <Grid item xs>\r\n        <SkeletonChildrenDemo loading />\r\n      </Grid>\r\n      <Grid item xs>\r\n        <SkeletonChildrenDemo />\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n"},2930:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Skeleton from '@material-ui/lab/Skeleton';\r\nimport Grid from '@material-ui/core/Grid';\r\n\r\nconst variants = ['h1', 'h3', 'body1', 'caption'];\r\n\r\nfunction TypographyDemo(props) {\r\n  const { loading = false } = props;\r\n\r\n  return (\r\n    <div>\r\n      {variants.map(variant => (\r\n        <Typography component=\"div\" key={variant} variant={variant}>\r\n          {loading ? <Skeleton /> : variant}\r\n        </Typography>\r\n      ))}\r\n    </div>\r\n  );\r\n}\r\n\r\nTypographyDemo.propTypes = {\r\n  loading: PropTypes.bool,\r\n};\r\n\r\nexport default function SkeletonTypography() {\r\n  return (\r\n    <Grid container spacing={8}>\r\n      <Grid item xs>\r\n        <TypographyDemo loading />\r\n      </Grid>\r\n      <Grid item xs>\r\n        <TypographyDemo />\r\n      </Grid>\r\n    </Grid>\r\n  );\r\n}\r\n"},2931:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport Skeleton from '@material-ui/lab/Skeleton';\r\nimport { Box } from '@material-ui/core';\r\n\r\nexport default function Variants() {\r\n  return (\r\n    <Box>\r\n      <Skeleton variant=\"text\" />\r\n      <Skeleton variant=\"circle\" width={40} height={40} />\r\n      <Skeleton variant=\"rect\" width={210} height={118} />\r\n    </Box>\r\n  );\r\n}\r\n"},2932:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Grid from '@material-ui/core/Grid';\r\nimport Box from '@material-ui/core/Box';\r\nimport Typography from '@material-ui/core/Typography';\r\nimport Skeleton from '@material-ui/lab/Skeleton';\r\n\r\nconst data = [\r\n  {\r\n    src:\r\n      'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',\r\n    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official\u2026',\r\n    channel: 'Don Diablo',\r\n    views: '396 k views',\r\n    createdAt: 'a week ago',\r\n  },\r\n  {\r\n    src:\r\n      'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',\r\n    title: 'Queen - Greatest Hits',\r\n    channel: 'Queen Official',\r\n    views: '40 M views',\r\n    createdAt: '3 years ago',\r\n  },\r\n  {\r\n    src:\r\n      'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',\r\n    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',\r\n    channel: 'Calvin Harris',\r\n    views: '130 M views',\r\n    createdAt: '10 months ago',\r\n  },\r\n];\r\n\r\nfunction Media(props) {\r\n  const { loading = false } = props;\r\n\r\n  return (\r\n    <Grid container wrap=\"nowrap\">\r\n      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (\r\n        <Box key={index} width={210} marginRight={0.5} my={5}>\r\n          {item ? (\r\n            <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />\r\n          ) : (\r\n            <Skeleton variant=\"rect\" width={210} height={118} />\r\n          )}\r\n\r\n          {item ? (\r\n            <Box pr={2}>\r\n              <Typography gutterBottom variant=\"body2\">\r\n                {item.title}\r\n              </Typography>\r\n              <Typography display=\"block\" variant=\"caption\" color=\"textSecondary\">\r\n                {item.channel}\r\n              </Typography>\r\n              <Typography variant=\"caption\" color=\"textSecondary\">\r\n                {`${item.views} \u2022 ${item.createdAt}`}\r\n              </Typography>\r\n            </Box>\r\n          ) : (\r\n            <Box pt={0.5}>\r\n              <Skeleton />\r\n              <Skeleton width=\"60%\" />\r\n            </Box>\r\n          )}\r\n        </Box>\r\n      ))}\r\n    </Grid>\r\n  );\r\n}\r\n\r\nMedia.propTypes = {\r\n  loading: PropTypes.bool,\r\n};\r\n\r\nexport default function YouTube() {\r\n  return (\r\n    <Box overflow=\"hidden\">\r\n      <Media loading />\r\n      <Media />\r\n    </Box>\r\n  );\r\n}\r\n"},3577:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(0),n=a.n(r),o=a(1043),i=a(53),l=a(106),c=a(326),m=a(391),s=a(1),p=a(7),d=a(2),u=a(24),h=a(10),g=r.forwardRef((function(e,t){var a=e.animation,n=void 0===a?"pulse":a,o=e.classes,i=e.className,l=e.component,c=void 0===l?"span":l,m=e.height,u=e.variant,h=void 0===u?"text":u,g=e.width,f=Object(p.a)(e,["animation","classes","className","component","height","variant","width"]),y=Boolean(f.children);return r.createElement(c,Object(s.a)({ref:t,className:Object(d.default)(o.root,o[h],i,y&&[o.withChildren,!g&&o.fitContent,!m&&o.heightAuto],!1!==n&&o[n])},f,{style:Object(s.a)({width:g,height:m},f.style)}))})),f=Object(h.a)((function(e){return{root:{display:"block",backgroundColor:Object(u.a)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(g);function y(){return n.a.createElement(i.a,null,n.a.createElement(f,{variant:"text"}),n.a.createElement(f,{variant:"circle",width:40,height:40}),n.a.createElement(f,{variant:"rect",width:210,height:118}))}var b=a(119),v=Object(b.a)({root:{width:300}});function E(){var e=v();return n.a.createElement(i.a,{className:e.root},n.a.createElement(f,null),n.a.createElement(f,{animation:!1}),n.a.createElement(f,{animation:"wave"}))}var k=a(180),w=[{src:"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",title:"Don Diablo @ Tomorrowland Main Stage 2019 | Official\u2026",channel:"Don Diablo",views:"396 k views",createdAt:"a week ago"},{src:"https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",title:"Queen - Greatest Hits",channel:"Queen Official",views:"40 M views",createdAt:"3 years ago"},{src:"https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",title:"Calvin Harris, Sam Smith - Promises (Official Video)",channel:"Calvin Harris",views:"130 M views",createdAt:"10 months ago"}];function x(e){var t=e.loading,a=void 0!==t&&t;return n.a.createElement(k.a,{wrap:"nowrap"},(a?Array.from(new Array(3)):w).map((function(e,t){return n.a.createElement(i.a,{key:t,width:210,marginRight:.5,my:5},e?n.a.createElement("img",{style:{width:210,height:118},alt:e.title,src:e.src}):n.a.createElement(f,{variant:"rect",width:210,height:118}),e?n.a.createElement(i.a,{pr:2},n.a.createElement(l.a,{gutterBottom:!0,variant:"body2"},e.title),n.a.createElement(l.a,{display:"block",variant:"caption",color:"textSecondary"},e.channel),n.a.createElement(l.a,{variant:"caption",color:"textSecondary"},"".concat(e.views," \u2022 ").concat(e.createdAt))):n.a.createElement(i.a,{pt:.5},n.a.createElement(f,null),n.a.createElement(f,{width:"60%"})))})))}function S(){return n.a.createElement(i.a,{overflow:"hidden"},n.a.createElement(x,{loading:!0}),n.a.createElement(x,null))}var T=a(888),C=a(2059),A=a(894),B=a(1542),O=a(1036),j=a(260),N=a(182),M=a.n(N),R=Object(b.a)((function(e){return{card:{maxWidth:345,margin:e.spacing(2)},media:{height:190}}}));function I(e){var t=e.loading,a=void 0!==t&&t,r=R();return n.a.createElement(T.a,{className:r.card},n.a.createElement(C.a,{avatar:a?n.a.createElement(f,{animation:"wave",variant:"circle",width:40,height:40}):n.a.createElement(O.a,{alt:"Ted talk",src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"}),action:a?null:n.a.createElement(j.a,{"aria-label":"settings"},n.a.createElement(M.a,null)),title:a?n.a.createElement(f,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}):"Ted",subheader:a?n.a.createElement(f,{animation:"wave",height:10,width:"40%"}):"5 hours ago"}),a?n.a.createElement(f,{animation:"wave",variant:"rect",className:r.media}):n.a.createElement(B.a,{className:r.media,image:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",title:"Ted talk"}),n.a.createElement(A.a,null,a?n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{animation:"wave",height:10,style:{marginBottom:6}}),n.a.createElement(f,{animation:"wave",height:10,width:"80%"})):n.a.createElement(l.a,{variant:"body2",color:"textSecondary",component:"p"},"Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:")))}function P(){return n.a.createElement(i.a,null,n.a.createElement(I,{loading:!0}),n.a.createElement(I,null))}var D=a(899),F=["h1","h3","body1","caption"];function G(e){var t=e.loading,a=void 0!==t&&t;return n.a.createElement("div",null,F.map((function(e){return n.a.createElement(l.a,{component:"div",key:e,variant:e},a?n.a.createElement(f,null):e)})))}function q(){return n.a.createElement(k.a,{spacing:8},n.a.createElement(D.a,{item:!0,xs:!0},n.a.createElement(G,{loading:!0})),n.a.createElement(D.a,{item:!0,xs:!0},n.a.createElement(G,null)))}var X=Object(b.a)((function(){return{image:{width:"100%"}}}));function Y(e){var t=e.loading,a=void 0!==t&&t,r=X();return n.a.createElement("div",null,n.a.createElement(i.a,{display:"flex",alignItems:"center"},n.a.createElement(i.a,{margin:1},a?n.a.createElement(f,{variant:"circle"},n.a.createElement(O.a,null)):n.a.createElement(O.a,{src:"https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"})),n.a.createElement(i.a,{width:"100%"},a?n.a.createElement(f,{width:"100%"},n.a.createElement(l.a,null,".")):n.a.createElement(l.a,null,"Ted"))),a?n.a.createElement(f,{variant:"rect",width:"100%"},n.a.createElement("div",{style:{paddingTop:"57%"}})):n.a.createElement("img",{className:r.image,src:"https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512",alt:""}))}function H(){return n.a.createElement(k.a,{spacing:8},n.a.createElement(D.a,{item:!0,xs:!0},n.a.createElement(Y,{loading:!0})),n.a.createElement(D.a,{item:!0,xs:!0},n.a.createElement(Y,null)))}var _=Object(c.a)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),V=a(2926),Q=[{label:"Variants",link:"variants",component:n.a.createElement(y,null),filename:"./Variants.txt"},{label:"Animations",link:"animations",component:n.a.createElement(E,null),filename:"./Animations.txt"},{label:"Pulsate example",link:"pulsate-example",component:n.a.createElement(S,null),filename:"./YouTube.txt"},{label:"Wave example",link:"wave-example",component:n.a.createElement(P,null),filename:"./Facebook.txt"},{label:"Inferring dimensions",link:"inferring-dimensions",component:n.a.createElement(q,null),filename:"./SkeletonTypography.txt"},{label:"Skeleton Children",link:"skeleton-children",component:n.a.createElement(H,null),filename:"./SkeletonChildren.txt"}];function L(){var e=_();return n.a.createElement(o.b,{pageTitle:"Skeleton",menus:Q},Q.map((function(t,a){return n.a.createElement(i.a,{key:a,id:t.link,className:e.section},n.a.createElement(l.a,{component:"h3",variant:"inherit",className:e.sectionHeading},t.label),n.a.createElement(m.a,{code:V(t.filename).default,language:"jsx"},t.component))})))}}}]);
//# sourceMappingURL=98.027f9d91.chunk.js.map