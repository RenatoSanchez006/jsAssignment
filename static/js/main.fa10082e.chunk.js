(this.webpackJsonpjsassignment=this.webpackJsonpjsassignment||[]).push([[0],{60:function(t,e,n){"use strict";n.r(e);var a=n(35),r=n(45),c=n(29),o=n.n(c),i=n(37),s=n(25),u=n(10),l=n(0),j=n(8),h=n.n(j),p=n(92),f=n(97),d=n(95),b=n(96),m=n(89),g=Object(m.a)((function(t){return{textField:{marginLeft:t.spacing(1),marginRight:t.spacing(1)}}}));function O(t){var e=t.onInputChange,n=t.onSearch,a=t.locationText,r=g();return Object(u.jsx)("div",{children:Object(u.jsx)(p.a,{fixed:!0,children:Object(u.jsxs)(f.a,{fullWidth:!0,children:[Object(u.jsx)(d.a,{className:r.textField,label:"Country",onChange:e,value:a}),Object(u.jsx)(b.a,{onClick:n,color:"primary",children:"Search"})]})})})}function x(t){var e=t.options,n=t.onMount,r=t.className,c=t.onMountProps,o=Object(l.useRef)(),i=Object(l.useState)(),j=Object(s.a)(i,2),h=j[0],f=j[1];return Object(l.useEffect)((function(){var t=function(){return f(new window.google.maps.Map(o.current,e))};if(!window.google){var n=document.createElement("script");return n.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-WvSjRaa4wrDpHz7p2UH3yMp1F_n2K4Q",document.head.append(n),n.addEventListener("load",t),function(){return n.removeEventListener("load",t)}}t()}),[e]),h&&"function"===typeof n&&n(h,c),Object(u.jsx)("div",{children:Object(u.jsx)(p.a,{fixed:!0,children:Object(u.jsx)("div",Object(a.a)({style:{height:"60vh",margin:"1em 0",borderRadius:"0.5em"}},{ref:o,className:r}))})})}x.defaultProps={options:{center:{lat:22,lng:-100},zoom:4}};var v=n(94);function w(){var t=Object(l.useState)(""),e=Object(s.a)(t,2),n=e[0],c=e[1],j=Object(l.useState)([]),h=Object(s.a)(j,2),f=h[0],d=h[1],b=Object(l.useState)({lat:22,lon:-100}),m=Object(s.a)(b,2),g=m[0],w=m[1],y=function(){var t=Object(i.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.trim()){t.next=4;break}alert("Enter country"),t.next=6;break;case 4:return t.next=6,fetch("".concat("https://nominatim.openstreetmap.org/?format=json&limit=1",'&country="').concat(n)).then((function(t){return t.json()})).then((function(t){t.length?(w(t[0]),k(t[0].boundingbox)):alert("Invalid country")})).catch((function(t){console.log(t),alert("Error")}));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("http://api.geonames.org/earthquakesJSON?username=rsanchez006&maxRows=10","&south=").concat(e[0],"&north=").concat(e[1],"&west=").concat(e[2],"&east=").concat(e[3])).then((function(t){return t.json()})).then((function(t){d(Object(r.a)(t.earthquakes))})).catch((function(t){console.log(t),alert("Error")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var S={options:{center:{lat:Number(g.lat),lng:Number(g.lon)},zoom:4},onMount:function(t,e){e.forEach((function(e){new window.google.maps.Marker({map:t,position:{lat:e.lat,lng:e.lng},label:"".concat(e.magnitude),title:e.datetime})}))},onMountProps:f};return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.a,{fixed:!0,children:Object(u.jsx)(v.a,{variant:"h3",children:"Search earthquakes"})}),Object(u.jsx)(O,{onInputChange:function(t){c(t.target.value)},onSearch:y,locationText:n}),Object(u.jsx)("div",{children:Object(u.jsx)(x,Object(a.a)({},S))})]})}h.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.fa10082e.chunk.js.map