(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[88],{1040:function(r,e,n){"use strict";var o=n(0),t=n.n(o),a=n(53),i=n(1043),l=n(573),s=n(27),p=n.n(s),c=n(2),m=p()((function(){return{pageFull:{width:"100%"}}}));e.a=function(r){var e=r.heading,n=r.breadcrumbs,o=r.children,s=r.className,p=r.restProps,g=m();return t.a.createElement(l.a,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0},t.a.createElement(a.a,Object.assign({className:Object(c.default)(g.pageFull,s)},p),(e||n)&&t.a.createElement(i.d,{heading:e,breadcrumbComponent:n&&t.a.createElement(i.c,{items:n})}),o))}},1043:function(r,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return E})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return C}));var o=n(17),t=n(8),a=n(0),i=n.n(a),l=n(119),s=n(53),p=n(106),c=n(2),m=["heading","breadcrumbComponent","children"],g=Object(l.a)((function(r){return{pageHeaderRoot:Object(t.a)({display:"flex",flexDirection:"column"},r.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:Object(t.a)({},r.breakpoints.down("xs"),{marginBottom:10})}})),u=function(r){var e=r.heading,n=r.breadcrumbComponent,t=r.children,a=Object(o.a)(r,m),l=g();return i.a.createElement(s.a,Object.assign({className:Object(c.default)(l.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},a),i.a.createElement(p.a,{component:"div",variant:"h1",className:Object(c.default)(l.titleRoot,"title")},e),i.a.createElement(s.a,{ml:{sm:"auto"}},n),t)},d=n(1083),f=n(60),h=["items"],x=Object(l.a)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),E=function(r){var e=r.items,n=(Object(o.a)(r,h),x());return i.a.createElement(d.a,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}"},e.map((function(r,e){return r.isActive?i.a.createElement(p.a,{key:e,className:n.textSm,color:"textPrimary"},r.label):i.a.createElement(f.c,{key:e,className:Object(c.default)(n.textSm,n.linkBlock),color:"inherit",to:r.link||"/"},r.label)})))},w=n(899),M=n(35),y=n(180),k=n(1040),v=function(r){var e=r.SourceCodeComponent,n=r.SettingsComponent,o=r.children;return i.a.createElement(k.a,null,i.a.createElement(y.a,null,i.a.createElement(w.a,{item:!0,xs:12,md:7},i.a.createElement(u,{heading:"Preview"}),i.a.createElement(s.a,{mb:8},o),i.a.createElement(M.a,null,e)),i.a.createElement(w.a,{item:!0,xs:12,md:5},n)))},b=n(1045),C=function(r){var e=r.pageTitle,n=r.menus,o=r.children,t=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:e,isActive:!0}];return i.a.createElement(b.a,{pageTitle:e,breadcrumbs:t,menus:n},o)}},1045:function(r,e,n){"use strict";var o=n(8),t=n(0),a=n.n(t),i=n(53),l=n(957),s=n(106),p=n(892),c=n(893),m=n(949),g=n(119),u=n(1040),d=Object(g.a)((function(r){var e;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(e={width:"100%"},Object(o.a)(e,r.breakpoints.up("sm"),{paddingRight:r.typography.pxToRem(30),width:"calc(100% - ".concat(r.typography.pxToRem(175),")")}),Object(o.a)(e,r.breakpoints.up("lg"),{paddingRight:r.typography.pxToRem(54)}),e),contentSidebar:{width:r.typography.pxToRem(175),height:"calc(100vh - ".concat(r.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));e.a=function(r){var e=r.pageTitle,n=r.menus,o=r.breadcrumbs,t=r.children,g=d();return a.a.createElement(u.a,{heading:e,breadcrumbs:o},a.a.createElement(i.a,{className:g.root},a.a.createElement(i.a,{className:g.contentArea},t),a.a.createElement(l.a,{xsDown:!0},a.a.createElement(i.a,{className:g.contentSidebar},a.a.createElement(s.a,{component:"h4",variant:"h4"},"Contents"),a.a.createElement(p.a,null,n.map((function(r,e){return a.a.createElement(c.a,{key:e,dense:!0,button:!0,component:"a",href:"#".concat(r.link)},a.a.createElement(m.a,{primary:r.label}))})))))))}},1410:function(r,e,n){var o={"./DrawingViewExample.txt":1411,"./GeoLocationExample.txt":1412,"./MapDirectionsExample.txt":1413,"./MapKmLayerExample.txt":1414,"./MapOverlayExample.txt":1415,"./MapPopupInfoExample.txt":1416,"./MarkerClustererExample.txt":1417,"./SimpleMapExample.txt":1418,"./StreetViewPanoramaExample.txt":1419,"./StyledMapExample.txt":1420,"./TrafficLayerExample.txt":1421};function t(r){var e=a(r);return n(e)}function a(r){if(!n.o(o,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return o[r]}t.keys=function(){return Object.keys(o)},t.resolve=a,r.exports=t,t.id=1410},1411:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';\r\nimport { Box } from '@material-ui/core';\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\n\r\n/*\r\n * https://developers.google.com/maps/documentation/javascript/examples/drawing-tools\r\n *\r\n * Note: requires the Google Maps drawing API library in your script src\r\n *\r\n * Credits: thanks @idolize for the contribution!\r\n */\r\n\r\nconst google = window.google;\r\n\r\nconst DrawingExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={new google.maps.LatLng(47.646935, -122.303763)}>\r\n    <DrawingManager\r\n      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}\r\n      defaultOptions={{\r\n        drawingControl: true,\r\n        drawingControlOptions: {\r\n          position: google.maps.ControlPosition.TOP_CENTER,\r\n          drawingModes: [\r\n            google.maps.drawing.OverlayType.CIRCLE,\r\n            google.maps.drawing.OverlayType.POLYGON,\r\n            google.maps.drawing.OverlayType.POLYLINE,\r\n            google.maps.drawing.OverlayType.RECTANGLE,\r\n          ],\r\n        },\r\n        circleOptions: {\r\n          fillColor: '#ff0000',\r\n          fillOpacity: 0.2,\r\n          strokeWeight: 3,\r\n          clickable: false,\r\n          editable: true,\r\n          zIndex: 1,\r\n        },\r\n        rectangleOptions: {\r\n          fillColor: '#ff0000',\r\n          fillOpacity: 0.2,\r\n          strokeWeight: 3,\r\n          clickable: false,\r\n          editable: true,\r\n          zIndex: 1,\r\n        },\r\n      }}\r\n    />\r\n  </GoogleMap>\r\n));\r\n\r\nconst DrawingViewExample = () => {\r\n  return (\r\n    <DrawingExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default DrawingViewExample;\r\n"},1412:function(r,e,n){"use strict";n.r(e),e.default="import React, { useEffect, useState } from 'react';\r\nimport { Circle, GoogleMap, InfoWindow, withGoogleMap } from 'react-google-maps';\r\nimport canUseDOM from 'can-use-dom';\r\nimport raf from 'raf';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst geoLocationExample =\r\n  canUseDOM && navigator.geolocation\r\n    ? navigator.geolocation\r\n    : {\r\n        getCurrentPosition(success, failure) {\r\n          failure(`Your browser doesn't support geolocation.`);\r\n        },\r\n      };\r\n\r\nconst GeolocationExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={10} center={props.center}>\r\n    {props.center && (\r\n      <InfoWindow position={props.center}>\r\n        <Box>{props.content}</Box>\r\n      </InfoWindow>\r\n    )}\r\n    {props.center && (\r\n      <Circle\r\n        center={props.center}\r\n        radius={props.radius}\r\n        options={{\r\n          fillColor: 'red',\r\n          fillOpacity: 0.2,\r\n          strokeColor: 'red',\r\n          strokeOpacity: 1,\r\n          strokeWeight: 1,\r\n        }}\r\n      />\r\n    )}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation\r\n *\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst GeoLocationExample = () => {\r\n  const [center, setCenter] = useState(null);\r\n  const [content, setContent] = useState(null);\r\n  const [radius, setRadius] = useState(6000);\r\n\r\n  let isUnmounted = false;\r\n\r\n  useEffect(() => {\r\n    const tick = () => {\r\n      if (isUnmounted) {\r\n        return;\r\n      }\r\n      setRadius(Math.max(radius - 20, 0));\r\n\r\n      if (radius > 200) {\r\n        raf(tick);\r\n      }\r\n    };\r\n    geoLocationExample.getCurrentPosition(\r\n      position => {\r\n        if (isUnmounted) {\r\n          return;\r\n        }\r\n        setCenter({\r\n          lat: position.coords.latitude,\r\n          lng: position.coords.longitude,\r\n        });\r\n        setContent(`Location found using HTML5.`);\r\n        raf(tick);\r\n      },\r\n      reason => {\r\n        if (isUnmounted) {\r\n          return;\r\n        }\r\n\r\n        setCenter({\r\n          lat: 60,\r\n          lng: 105,\r\n        });\r\n        setContent(`Error: The Geolocation service failed (${reason}).`);\r\n      },\r\n    );\r\n\r\n    return () => {\r\n      isUnmounted = true;\r\n    };\r\n  }, []);\r\n\r\n  return (\r\n    <GeolocationExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={center}\r\n      content={content}\r\n      radius={radius}\r\n    />\r\n  );\r\n};\r\n\r\nexport default GeoLocationExample;\r\n"},1413:function(r,e,n){"use strict";n.r(e),e.default="import React, { useEffect, useState } from 'react';\r\nimport { DirectionsRenderer, GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst google = window.google;\r\n\r\nconst DirectionsExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={7} defaultCenter={props.center}>\r\n    {props.directions && <DirectionsRenderer directions={props.directions} />}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapDirectionsExample = () => {\r\n  const origin = new google.maps.LatLng(41.85073, -87.65126);\r\n  const destination = new google.maps.LatLng(41.85258, -87.65141);\r\n  const [directions, setDirections] = useState(null);\r\n\r\n  useEffect(() => {\r\n    const DirectionsService = new google.maps.DirectionsService();\r\n\r\n    DirectionsService.route(\r\n      {\r\n        origin: origin,\r\n        destination: destination,\r\n        travelMode: google.maps.TravelMode.DRIVING,\r\n      },\r\n      (result, status) => {\r\n        if (status === google.maps.DirectionsStatus.OK) {\r\n          setDirections(result);\r\n        } else {\r\n          console.error(`error fetching directions ${result}`);\r\n        }\r\n      },\r\n    );\r\n  }, [destination, origin]);\r\n\r\n  return (\r\n    <DirectionsExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={origin}\r\n      directions={directions}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapDirectionsExample;\r\n"},1414:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, KmlLayer, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst KmlLayerExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 41.876, lng: -87.624 }}>\r\n    <KmlLayer url=\"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml\" options={{ preserveViewport: true }} />\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapKmLayerExample = () => {\r\n  return (\r\n    <KmlLayerExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapKmLayerExample;\r\n"},1415:function(r,e,n){"use strict";n.r(e),e.default="import React, { useState } from 'react';\r\nimport Button from '@material-ui/core/Button';\r\nimport { GoogleMap, OverlayView, withGoogleMap } from 'react-google-maps';\r\nimport { Box, Typography } from '@material-ui/core';\r\n\r\nconst STYLES = {\r\n  mapContainer: {\r\n    height: 500,\r\n  },\r\n  overlayView: {\r\n    background: '#fff',\r\n    border: '1px solid #ccc',\r\n    padding: 15,\r\n  },\r\n};\r\n\r\nfunction getPixelPositionOffset(width, height) {\r\n  return { x: -(width / 2), y: -(height / 2) };\r\n}\r\n\r\nconst OverlayViewExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }}>\r\n    <OverlayView\r\n      position={{ lat: 47.646935, lng: -122.303763 }}\r\n      /*\r\n       * An alternative to specifying position is specifying bounds.\r\n       * bounds can either be an instance of google.maps.LatLngBounds\r\n       * or an object in the following format:\r\n       * bounds={{\r\n       *    ne: { lat: 62.400471, lng: -150.005608 },\r\n       *    sw: { lat: 62.281819, lng: -150.287132 }\r\n       * }}\r\n       */\r\n      /*\r\n       * 1. Specify the pane the OverlayView will be rendered to. For\r\n       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.\r\n       *    Defaults to `OverlayView.OVERLAY_LAYER`.\r\n       */\r\n      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}\r\n      /*\r\n       * 2. Tweak the OverlayView's pixel position. In this case, we're\r\n       *    centering the content.\r\n       */\r\n      getPixelPositionOffset={getPixelPositionOffset}\r\n      /*\r\n       * 3. Create OverlayView content using standard React components.\r\n       */\r\n    >\r\n      <Box style={STYLES.overlayView}>\r\n        <Typography component=\"h1\" variant=\"h1\">\r\n          OverlayView\r\n        </Typography>\r\n        <Button variant=\"contained\" color=\"primary\" onClick={props.onClick}>\r\n          I have been clicked {props.count} time{props.count === 1 ? `` : `s`}\r\n        </Button>\r\n      </Box>\r\n    </OverlayView>\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst MapOverlayExample = () => {\r\n  const [count, setCount] = useState(0);\r\n\r\n  const handleClick = () => {\r\n    setCount(count + 1);\r\n  };\r\n\r\n  return (\r\n    <OverlayViewExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      count={count}\r\n      onClick={handleClick}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapOverlayExample;\r\n"},1416:function(r,e,n){"use strict";n.r(e),e.default='import React, { useState } from \'react\';\r\nimport { GoogleMap, InfoWindow, Marker, withGoogleMap } from \'react-google-maps\';\r\nimport { Box, Typography } from \'@material-ui/core\';\r\n\r\nconst google = window.google;\r\n\r\nconst PopUpInfoWindowExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={15} center={props.center}>\r\n    {props.markers.map((marker, index) => (\r\n      <Marker\r\n        defaultIcon={require(\'../../../../assets/images/marker.png\'}\r\n        key={index}\r\n        position={marker.position}\r\n        onClick={() => props.onMarkerClick(marker)}>\r\n        {/*\r\n          Show info window only if the \'showInfo\' key of the marker is true.\r\n          That is, when the Marker pin has been clicked and \'onCloseClick\' has been\r\n          Successfully fired.\r\n        */}\r\n        {marker.showInfo && (\r\n          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>\r\n            <Box>{marker.infoContent}</Box>\r\n          </InfoWindow>\r\n        )}\r\n      </Marker>\r\n    ))}\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n *\r\n *  Add <script src="https://maps.googleapis.com/maps/api/js"><\/script>\r\n *  to your HTML to provide google.maps reference\r\n *\r\n *  @author: @chiwoojo\r\n */\r\nconst MapPopupInfoExample = () => {\r\n  const center = {\r\n    lat: 47.646935,\r\n    lng: -122.303763,\r\n  };\r\n\r\n  const [markers, setMarkers] = useState([\r\n    {\r\n      position: new google.maps.LatLng(47.646145, -122.303763),\r\n      showInfo: false,\r\n      infoContent: (\r\n        <Box display="flex">\r\n          <Box>\r\n            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\r\n              <path\r\n                d="M3.5 0c-1.7 0-3 1.6-3 3.5 0 1.7 1 3 2.3 3.4l-.5 8c0\r\n              .6.4 1 1 1h.5c.5 0 1-.4 1-1L4 7C5.5 6.4 6.5 5 6.5\r\n              3.4c0-2-1.3-3.5-3-3.5zm10 0l-.8 5h-.6l-.3-5h-.4L11\r\n              5H10l-.8-5H9v6.5c0 .3.2.5.5.5h1.3l-.5 8c0 .6.4 1 1 1h.4c.6 0\r\n              1-.4 1-1l-.5-8h1.3c.3 0 .5-.2.5-.5V0h-.4z"\r\n              />\r\n            </svg>\r\n          </Box>\r\n          <Box ml={1}>\r\n            <Typography>UW Medical Center</Typography>\r\n            <Typography>1959 NE Pacific St</Typography>\r\n            <Typography>Seattle, WA 98195</Typography>\r\n          </Box>\r\n        </Box>\r\n      ),\r\n    },\r\n    {\r\n      position: new google.maps.LatLng(47.647935, -122.303763),\r\n      showInfo: false,\r\n      infoContent: (\r\n        <Box display="flex">\r\n          <Box>\r\n            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">\r\n              <path\r\n                d="M6 14.5c0 .828-.672 1.5-1.5 1.5S3 15.328 3 14.5 3.672\r\n              13 4.5 13s1.5.672 1.5 1.5zM16 14.5c0 .828-.672 1.5-1.5\r\n              1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM16\r\n              8V2H4c0-.552-.448-1-1-1H0v1h2l.75 6.438C2.294 8.805 2 9.368\r\n              2 10c0 1.105.895 2 2 2h12v-1H4c-.552 0-1-.448-1-1v-.01L16 8z"\r\n              />\r\n            </svg>\r\n          </Box>\r\n          <Box ml={1}>\r\n            <Typography>University of Washington Intramural Activities (IMA) Building</Typography>\r\n            <Typography>3924 Montlake Blvd NE</Typography>\r\n            <Typography>Seattle, WA 98195</Typography>\r\n          </Box>\r\n        </Box>\r\n      ),\r\n    },\r\n  ]);\r\n\r\n  // Toggle to \'true\' to show InfoWindow and re-renders simple\r\n  const handleMarkerClick = targetMarker => {\r\n    setMarkers(() => {\r\n      markers.map(marker => {\r\n        if (marker === targetMarker) {\r\n          return {\r\n            ...marker,\r\n            showInfo: true,\r\n          };\r\n        }\r\n        return marker;\r\n      });\r\n    });\r\n  };\r\n\r\n  const handleMarkerClose = targetMarker => {\r\n    setMarkers(() => {\r\n      markers.map(marker => {\r\n        if (marker === targetMarker) {\r\n          return {\r\n            ...marker,\r\n            showInfo: false,\r\n          };\r\n        }\r\n        return marker;\r\n      });\r\n    });\r\n  };\r\n\r\n  return (\r\n    <PopUpInfoWindowExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={center}\r\n      markers={markers}\r\n      onMarkerClick={handleMarkerClick}\r\n      onMarkerClose={handleMarkerClose}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MapPopupInfoExample;\r\n'},1417:function(r,e,n){"use strict";n.r(e),e.default="import React, { useEffect, useState } from 'react';\r\n\r\nimport fetch from 'isomorphic-fetch';\r\nimport { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';\r\nimport MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst MarkerClustererExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={3} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>\r\n    <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>\r\n      {props.markers.map(marker => (\r\n        <Marker position={{ lat: marker.latitude, lng: marker.longitude }} key={marker.photo_id} />\r\n      ))}\r\n    </MarkerClusterer>\r\n  </GoogleMap>\r\n));\r\n\r\nconst MarkerClustererExample = () => {\r\n  const [markers, setMarkers] = useState([]);\r\n\r\n  useEffect(() => {\r\n    fetch(\r\n      `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`,\r\n    )\r\n      .then(res => res.json())\r\n      .then(data => {\r\n        setMarkers(data.photos);\r\n      });\r\n  }, []);\r\n\r\n  return (\r\n    <MarkerClustererExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      markers={markers}\r\n    />\r\n  );\r\n};\r\n\r\nexport default MarkerClustererExample;\r\n"},1418:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\n/*\r\n * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple\r\n */\r\n\r\nconst SimpleMapExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }} />\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst SimpleMapExample = () => {\r\n  return (\r\n    <SimpleMapExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default SimpleMapExample;\r\n"},1419:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, OverlayView, StreetViewPanorama, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst coordinates = { lat: 49.2853171, lng: -123.1119202 };\r\n\r\nconst STYLES = {\r\n  overlayView: {\r\n    background: `red`,\r\n    color: `white`,\r\n    padding: 5,\r\n    borderRadius: `50%`,\r\n  },\r\n};\r\n\r\nfunction getPixelPositionOffset(width, height) {\r\n  return { x: -(width / 2), y: -(height / 2) };\r\n}\r\n\r\nconst StreetViewPanoramaExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={8} defaultCenter={coordinates}>\r\n    <StreetViewPanorama defaultPosition={coordinates} visible>\r\n      <OverlayView\r\n        position={{ lat: 49.28590291211115, lng: -123.11248166065218 }}\r\n        mapPaneName={OverlayView.OVERLAY_LAYER}\r\n        getPixelPositionOffset={getPixelPositionOffset}>\r\n        <div style={STYLES.overlayView}>OverlayView</div>\r\n      </OverlayView>\r\n    </StreetViewPanorama>\r\n  </GoogleMap>\r\n));\r\n\r\n/**\r\n * You can pass in an `containerElement` to render `StreetViewPanorama` in its own containers\r\n * At this point the `GoogleMap` wrapper and `withGoogleMap` HOC become optional,\r\n * so you can either render a map and StreetView at the same time,\r\n * or just the StreetView on its own\r\n *    <StreetViewPanorama\r\n *      containerElement={<div style={{ width: `100%`, height: `100%` }} />}\r\n *      defaultPosition={coordinates}\r\n *      visible\r\n *    />\r\n */\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst StreetViewPanoramaExample = () => {\r\n  return (\r\n    <StreetViewPanoramaExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default StreetViewPanoramaExample;\r\n"},1420:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, withGoogleMap } from 'react-google-maps';\r\n\r\nimport InfoBox from 'react-google-maps/lib/components/addons/InfoBox';\r\n\r\nimport fancyMapStyles from '../data/fancyMapStyles.json';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst google = window.google;\r\n\r\nconst StyledMapExampleGoogleMap = withGoogleMap(props => (\r\n  <GoogleMap defaultZoom={11} defaultCenter={props.center} defaultOptions={{ styles: fancyMapStyles }}>\r\n    <InfoBox defaultPosition={props.center} options={{ closeBoxURL: ``, enableEventPropagation: true }}>\r\n      <Box\r\n        style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `20px` }}\r\n        onClick={props.onClickFromChildrenOfInfoBox}>\r\n        <Box fontSize={16} color=\"#08233B\">\r\n          Taipei\r\n        </Box>\r\n      </Box>\r\n    </InfoBox>\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst StyledMapExample = () => {\r\n  const handleClickFromChildrenOfInfoBox = e => {\r\n    console.log(e);\r\n  };\r\n\r\n  return (\r\n    <StyledMapExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n      center={new google.maps.LatLng(44.8799929, 21.3190073)}\r\n      onClickFromChildrenOfInfoBox={handleClickFromChildrenOfInfoBox}\r\n    />\r\n  );\r\n};\r\n\r\nexport default StyledMapExample;\r\n"},1421:function(r,e,n){"use strict";n.r(e),e.default="import React from 'react';\r\nimport { GoogleMap, TrafficLayer, withGoogleMap } from 'react-google-maps';\r\nimport { Box } from '@material-ui/core';\r\n\r\nconst TrafficLayerExampleGoogleMap = withGoogleMap(() => (\r\n  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 47.646935, lng: -122.303763 }}>\r\n    <TrafficLayer autoUpdate />\r\n  </GoogleMap>\r\n));\r\n\r\n/*\r\n * Add <script src=\"https://maps.googleapis.com/maps/api/js\"><\/script> to your HTML to provide google.maps reference\r\n */\r\nconst TrafficLayerExample = () => {\r\n  return (\r\n    <TrafficLayerExampleGoogleMap\r\n      loadingElement={<Box height={1} />}\r\n      containerElement={<Box height={{ xs: 300, sm: 400 }} />}\r\n      mapElement={<Box height={1} />}\r\n    />\r\n  );\r\n};\r\n\r\nexport default TrafficLayerExample;\r\n"},3640:function(r,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return M}));var o=n(0),t=n.n(o),a=n(53),i=n(106),l=n(326),s=n(392),p=n(1457),c={lat:49.2853171,lng:-123.1119202},m={overlayView:{background:"red",color:"white",padding:5,borderRadius:"50%"}};function g(r,e){return{x:-r/2,y:-e/2}}var u=Object(p.withGoogleMap)((function(){return t.a.createElement(p.GoogleMap,{defaultZoom:8,defaultCenter:c},t.a.createElement(p.StreetViewPanorama,{defaultPosition:c,visible:!0},t.a.createElement(p.OverlayView,{position:{lat:49.28590291211115,lng:-123.11248166065218},mapPaneName:p.OverlayView.OVERLAY_LAYER,getPixelPositionOffset:g},t.a.createElement("div",{style:m.overlayView},"OverlayView"))))})),d=function(){return t.a.createElement(u,{loadingElement:t.a.createElement(a.a,{height:1}),containerElement:t.a.createElement(a.a,{height:{xs:300,sm:400}}),mapElement:t.a.createElement(a.a,{height:1})})},f=n(1045),h=Object(l.a)((function(r){return{section:{"&:not(:last-child)":{marginBottom:r.typography.pxToRem(32)}},sectionHeading:{marginBottom:r.typography.pxToRem(16)}}})),x=n(1410),E=[{label:"Street View Panorama",link:"street-view-panorama",component:t.a.createElement(d,null),filename:"./StreetViewPanoramaExample.txt"}],w=[{label:"Home",link:"/"},{label:"Maps",link:"/visualization/map"},{label:"Street-view Panorama",isActive:!0}];function M(){var r=h();return t.a.createElement(f.a,{pageTitle:"Street-view Panorama",menus:E,breadcrumbs:w},E.map((function(e,n){return t.a.createElement(a.a,{key:n,id:e.link,className:r.section},t.a.createElement(i.a,{component:"h3",variant:"inherit",className:r.sectionHeading},e.label),t.a.createElement(s.a,{code:x(e.filename).default,language:"jsx"},e.component))})))}}}]);
//# sourceMappingURL=88.0d443cde.chunk.js.map