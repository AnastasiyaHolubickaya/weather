(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{100:function(t,e,n){t.exports={block:"Preloader_block__do3O4"}},108:function(t,e,n){},109:function(t,e,n){},215:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n(48),o=n.n(a),c=n(35),i=(n(108),n(18)),s=n(19),u=n(31),h=n(30),d=(n(109),n(95)),l=n.n(d),p=n(68),b=n.n(p),j=n(217),f=n(216),m=n(96),O=n.n(m),y=n(3),g=function(t){var e=t.value,n=t.onClick;return Object(y.jsx)("div",{children:Object(y.jsxs)("button",{className:O.a.btn,onClick:n,children:[" ",e," "]})})},v=n(10),x=n(102),_=n(50),w=n.n(_),k=["input","meta"],E=function(t){var e=t.children,n=t.meta,r=n.touched,a=n.error,o=r&&a;return Object(y.jsxs)("div",{className:o?w.a.error:void 0,children:[e,Object(y.jsx)("br",{}),o&&Object(y.jsx)("span",{className:w.a.spanError,children:a})]})},L=function(t){var e=t.input,n=(t.meta,Object(x.a)(t,k));return Object(y.jsxs)(E,Object(v.a)(Object(v.a)({},t),{},{children:[" ",Object(y.jsx)("input",Object(v.a)(Object(v.a)(Object(v.a)({},e),n),{},{className:w.a.input}))]}))},S=function(t){if(void 0!==t&&!new RegExp(/^[a-z\u0430-\u044f\u0451]+$/i).test(t))return"\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d \u0432\u0432\u043e\u0434 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e \u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0430 \u0438 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u044b"},N=Object(f.a)({form:"search"})((function(t){var e=t.handleSubmit,n=t.error;return Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:e,className:b.a.form,children:[Object(y.jsx)(j.a,{name:"text",className:b.a.input,component:L,autoFocus:!0,type:"text",placeholder:"enter city",validate:[S]}),!n&&Object(y.jsx)("div",{children:n}),Object(y.jsx)(g,{value:"search"})]})})})),T=function(t){var e=t.getWeather;return Object(y.jsx)(N,{onSubmit:function(t){e(null,null,t.text)}})},W=n(20),C=n(39),U=n.n(C),F=n(71),I={dataWeather:{coord:{lat:0,lon:0},country:"",cityName:"",timezone:0,weatherList:[{clouds:{},dt_txt:"",visibility:0,main:{feels_like:0,humidity:0,pressure:0,temp:0,temp_max:0,temp_min:0},weather:[{description:"",icon:"",id:0,main:""}],wind:{deg:0,gust:0,speed:0}}]},messageError:"",coordUserLocation:{lat:0,lon:0},currentData:"",inicialization:!1},A=function(t){return{type:"SET_DATA_WEATHER",data:t}},D=function(t){return{type:"SET_MESSAGE",mess:t}},M=function(t,e,n){return{type:"SET_USER_LOCATION",coord:{lat:t,lon:e},date:n}},z=function(t){return{type:"SET_INITIALISATION",init:t}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_DATA_WEATHER":return Object(v.a)(Object(v.a)({},t),{},{dataWeather:e.data});case"SET_MESSAGE":return Object(v.a)(Object(v.a)({},t),{},{messageError:e.mess});case"SET_USER_LOCATION":return Object(v.a)(Object(v.a)({},t),{},{coordUserLocation:e.coord,currentData:e.date});case"SET_INITIALISATION":return Object(v.a)(Object(v.a)({},t),{},{inicialization:!0});default:return t}},P=function(){function t(){Object(i.a)(this,t),this.baseURL="https://api.openweathermap.org/data/2.5/forecast?",this.api_key="6f4d4317a3c560906fa4cb8674063b92"}return Object(s.a)(t,[{key:"getWeatherForCityName",value:function(t){return fetch("".concat(this.baseURL,"q=").concat(t,"&appid=").concat(this.api_key)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)}))}},{key:"getWeatherForCoord",value:function(t,e){return fetch("".concat(this.baseURL,"lat=").concat(t,"&lon=").concat(e,"&appid=").concat(this.api_key)).then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)}))}},{key:"getFileCountry",value:function(){return fetch("iso.json").then((function(t){return t.json()})).then((function(t){return t})).catch((function(t){console.error(t)}))}}],[{key:"getInstance",value:function(){return"object"===typeof t.instance||(t.instance=new t),t.instance}}]),t}();P.instance=void 0;var J=P.getInstance(),G=function(){function t(){Object(i.a)(this,t),this.cityName="",this.coord={lat:0,lon:0},this.timezone=0,this.country="",this.weatherList=[]}return Object(s.a)(t,[{key:"getWindDirection",value:function(t){var e="",n=101.25,r=123.75,a=146.25,o=168.75,c=191.25,i=213.75,s=236.25,u=258.75,h=281.25,d=303.75,l=326.25,p=348.75;return t>=p&&t<11.25?e="north":t>=11.25&&t<33.75?e="north north-east":t>=33.75&&t<56.25?e="north-east":t>=56.25&&t<78.25?e="east north-east":t>=78.25&&t<n?e="east":t>=n&&t<r?e="east south-east":t>=r&&t<a?e="south-east":t>=a&&t<o?e="south south-east":t>=o&&t<c?e="south":t>=c&&t<i?e="south south-west":t>=i&&t<s?e="south-west":t>=s&&t<u?e="west south-west":t>=u&&t<h?e="west":t>=h&&t<d?e="west north-west":t>=d&&t<l?e="north-west":t>=l&&t<p&&(e="north north-west"),e}},{key:"setCountry",value:function(t,e){for(var n=0;n<t.length;n++)e===t[n].alpha2&&(this.country=t[n].english)}},{key:"getCountry",value:function(){return this.country}},{key:"setWeatherList",value:function(t){this.weatherList.push({clouds:t.clouds,dt_txt:t.dt_txt,visibility:t.visibility/1e3,main:{feels_like:Math.round(t.main.feels_like-273.15),humidity:t.main.humidity,pressure:Math.round(.75*t.main.pressure),temp:Math.round(t.main.temp-273.15),temp_max:Math.round(t.main.temp_max-273.15),temp_min:Math.round(t.main.temp_min-273.15)},weather:[{description:t.weather[0].description,icon:t.weather[0].icon,id:t.weather[0].id,main:t.weather[0].main}],wind:{deg:this.getWindDirection(t.wind.deg),gust:t.wind.gust,speed:t.wind.speed}})}}]),t}(),H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(){var r=Object(F.a)(U.a.mark((function r(a){var o,c,i,s;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(null===t||null===e){r.next=6;break}return r.next=3,J.getWeatherForCoord(t,e);case 3:o=r.sent,r.next=10;break;case 6:if(null===n){r.next=10;break}return r.next=9,J.getWeatherForCityName(n);case 9:o=r.sent;case 10:return r.next=12,J.getFileCountry();case 12:if(c=r.sent,"200"===o.cod&&void 0!==c){for(a(z(!0)),(i=new G).cityName=o.city.name,i.setCountry(c,o.city.country),i.timezone=o.city.timezone,i.coord.lat=o.city.coord.lat,i.coord.lon=o.city.coord.lon,s=0;s<o.list.length;s++)i.setWeatherList(o.list[s]);a(A(i))}else a(D(o.message));case 14:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},X=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)("header",{className:l.a.header,children:Object(y.jsx)(T,{getWeather:this.props.getWeather})})}}]),n}(r.Component),B=Object(W.b)((function(t){return{}}),{getWeather:H})(X),q=n(7),K=n(98),V=n.n(K),Y=n(99),$=n.n(Y),Q=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{className:$.a.block})}}]),n}(r.Component),Z=n(100),tt=n.n(Z),et=function(){return Object(y.jsx)("div",{className:tt.a.block,children:Object(y.jsx)("img",{src:"globe-9.gif",alt:"preloader"})})},nt=function(){return Object(y.jsx)("div",{children:Object(y.jsxs)("p",{children:["This is not the page that you are looking for!",Object(y.jsx)(c.b,{to:"/",children:"Go Home"})]})})},rt={StartPage:V()({loader:function(){return n.e(3).then(n.bind(null,220))},loading:et})},at=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){t.props.setUserLocation(e.coords.latitude,e.coords.longitude,e.timestamp)}))}},{key:"componentDidUpdate",value:function(t,e,n){this.props.coordUserLocation.lat!==t.coordUserLocation.lat&&this.props.coordUserLocation.lon!==t.coordUserLocation.lon&&this.props.getWeather(this.props.coordUserLocation.lat,this.props.coordUserLocation.lon,null)}},{key:"render",value:function(){var t=this;return this.props.initialization?Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)(B,{}),Object(y.jsxs)(q.c,{children:[Object(y.jsx)(q.a,{exact:!0,path:"/",render:function(){return Object(y.jsx)(rt.StartPage,{dataWeather:t.props.dataWeather,coordUserLocation:t.props.coordUserLocation,date:t.props.date})}}),Object(y.jsx)(q.a,{exact:!0,path:"/detail",render:function(){return Object(y.jsx)(Q,{})}}),Object(y.jsx)(q.a,{path:"*",render:function(){return Object(y.jsx)(nt,{})}})]})]}):Object(y.jsx)(et,{})}}]),n}(r.Component),ot=Object(W.b)((function(t){return{coordUserLocation:t.app.coordUserLocation,dataWeather:t.app.dataWeather,date:t.app.currentData,initialization:t.app.inicialization}}),{setUserLocation:function(t,e,n){return function(){var r=Object(F.a)(U.a.mark((function r(a){var o,c,i;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:o=new Date(n),c=["January","February","March","April","May","June","July","August","September","October","November","December"],i="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()],", ").concat(o.getDate()," ").concat(c[o.getMonth()]," ").concat(o.getFullYear(),", ").concat(o.getHours(),":").concat(o.getMinutes()," "),a(M(t,e,i));case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},getWeather:H})(at),ct=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,221)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))},it=n(8),st=n(101),ut=n(218),ht=Object(it.c)({form:ut.a,app:R}),dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||it.d,lt=Object(it.e)(ht,dt(Object(it.a)(st.a)));o.a.render(Object(y.jsx)(c.a,{basename:"/weather",children:Object(y.jsx)(W.a,{store:lt,children:Object(y.jsx)(ot,{})})}),document.getElementById("root")),ct()},50:function(t,e,n){t.exports={input:"FormControls_input__1eFDN",error:"FormControls_error__31xIz",spanError:"FormControls_spanError__1AjRd"}},68:function(t,e,n){t.exports={form:"search_form__13b1y"}},95:function(t,e,n){t.exports={header:"header_header__agGeW",btn_group:"header_btn_group__3XKW8"}},96:function(t,e,n){t.exports={btn:"button_btn__37bSv"}},99:function(t,e,n){}},[[215,1,2]]]);
//# sourceMappingURL=main.85be1f34.chunk.js.map