(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[3],{291:function(e,t,a){e.exports={container:"startPage_container__qXwu6",title:"startPage_title__3889D",block:"startPage_block__1x-Bz",card:"startPage_card__3x566",span:"startPage_span__2NhfW",date:"startPage_date__gGmF3",block_temp:"startPage_block_temp__1pkJ_",img:"startPage_img__311Xw",block_info:"startPage_block_info__2zg8-",block_cards:"startPage_block_cards__2DZ0m",font_style:"startPage_font_style__3TdM4",flex:"startPage_flex__1YHFm",coords:"startPage_coords__UaMnC"}},292:function(e,t,a){e.exports={card:"cardDay_card__-FF7h",img:"cardDay_img__2nrvL",temp:"cardDay_temp__2zFbL",date:"cardDay_date__2oarY"}},296:function(e,t,a){"use strict";a.r(t);var s=a(11),c=(a(0),a(291)),i=a.n(c),r=a(47),n=a(56),l=a(294),d=a(293),j=a(292),h=a.n(j),b=a(123),o=a(4),_=function(e){var t=e.weatherList,a=e.lang,s=e.celsius,c=Object(b.b)(t.dt);return Object(o.jsxs)(l.a,{className:h.a.card,children:[Object(o.jsx)("p",{className:h.a.date,children:"ru"===a?c.ru:c.en}),Object(o.jsxs)("div",{className:h.a.temp,children:[Object(o.jsx)("div",{className:h.a.img,children:Object(o.jsx)("img",{src:"iconsWeather/".concat(t.weather[0].icon),alt:t.weather[0].main,title:t.weather[0].main})}),Object(o.jsx)("span",{children:s?"".concat(t.main.temp,"\u2103"):"".concat(Object(n.a)(t.main.temp),"\xb0F")})]})]})};t.default=function(e){var t=e.dataWeather,a=e.date,c=e.lang,j=e.celsius,h=Object(s.a)({},t.coordinates),b=h.latitude,m=void 0===b?0:b,x=h.longitude,O=void 0===x?0:x,p=function(e){var t=[];return e.map((function(e,a){a%8===0&&"d"===e.sys.pod&&t.push(e)})),t}(t.weatherList);return Object(o.jsxs)("div",{className:i.a.container,children:[Object(o.jsx)("div",{className:i.a.title,children:Object(o.jsxs)("p",{children:[t.cityName,",","ru"===c?t.countryRu:t.country]})}),Object(o.jsxs)("div",{className:i.a.block,children:[Object(o.jsxs)(l.a,{className:i.a.card,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:i.a.span,children:r.a.t("currently_date")}),Object(o.jsx)("p",{className:i.a.date,children:"ru"===c?a.ru:a.en})]}),Object(o.jsxs)("div",{className:i.a.block_temp,children:[Object(o.jsx)("div",{className:i.a.img,children:Object(o.jsx)("img",{src:"iconsWeather/".concat(t.weatherList[0].weather[0].icon),alt:t.weatherList[0].weather[0].main,title:t.weatherList[0].weather[0].main})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:j?"".concat(t.weatherList[0].main.temp,"\u2103"):"".concat(Object(n.a)(t.weatherList[0].main.temp),"\xb0F")})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:t.weatherList[0].weather[0].description}),Object(o.jsx)("span",{children:r.a.t("feels")}),Object(o.jsx)("span",{children:j?"".concat(t.weatherList[0].main.feels_like,"\u2103"):"".concat(Object(n.a)(t.weatherList[0].main.feels_like),"\xb0F")})]})]}),Object(o.jsxs)("div",{className:i.a.block_info,children:[Object(o.jsxs)("div",{className:i.a.wind,children:[Object(o.jsx)("p",{className:i.a.font_style,children:r.a.t("wind")}),Object(o.jsxs)("p",{children:["   ","ru"===c?t.weatherList[0].wind.deg.ru:t.weatherList[0].wind.deg.en]}),Object(o.jsxs)("p",{children:[Math.round(t.weatherList[0].wind.speed)," ",r.a.t("ms")]})]}),Object(o.jsxs)("div",{className:i.a.humidity,children:[Object(o.jsxs)("p",{className:i.a.font_style,children:[r.a.t("humidity")," "]}),Object(o.jsxs)("p",{children:[t.weatherList[0].main.humidity,"%"]})]}),Object(o.jsxs)("div",{className:i.a.visibility,children:[Object(o.jsxs)("p",{className:i.a.font_style,children:[r.a.t("visibility")," "]}),Object(o.jsxs)("p",{children:[t.weatherList[0].visibility," ",r.a.t("km")]})]}),Object(o.jsxs)("div",{className:i.a.pressure,children:[Object(o.jsxs)("p",{className:i.a.font_style,children:[r.a.t("pressure")," "]}),Object(o.jsxs)("p",{children:[t.weatherList[0].main.pressure," ",r.a.t("mmHg")]})]})]}),Object(o.jsx)("div",{className:i.a.block_icon})]}),Object(o.jsx)(l.a,{className:i.a.card,children:Object(o.jsxs)("div",{className:i.a.flex,children:[Object(o.jsx)(d.b,{children:Object(o.jsx)("div",{children:Object(o.jsx)(d.a,{state:{center:[m,O],zoom:9}})})}),Object(o.jsxs)("div",{className:i.a.coords,children:[Object(o.jsxs)("p",{children:[r.a.t("latitude"),": ",m]}),Object(o.jsxs)("p",{children:[r.a.t("longitude"),": ",O]})]})]})}),Object(o.jsx)("div",{className:i.a.block_cards,children:p.map((function(e,t){return Object(o.jsx)(_,{weatherList:e,celsius:j,lang:c},t.toString())}))})]})]})}}}]);
//# sourceMappingURL=3.c91acfce.chunk.js.map