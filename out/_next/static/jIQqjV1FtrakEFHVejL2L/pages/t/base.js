(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6CmU":function(t,e,a){a("LzdP"),t.exports=a("WEpk").Date.now},"9Jkg":function(t,e,a){t.exports=a("oh+g")},Cg2A:function(t,e,a){t.exports=a("6CmU")},GzpO:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return b});var n=a("pLtp"),i=a.n(n),o=a("9Jkg"),r=a.n(o),c=a("0iUn"),s=a("sLSF"),l=a("MI3g"),d=a("a7VT"),u=a("AT/M"),f=a("Tit0"),m=a("vYYK"),h=a("MX0m"),E=a.n(h),p=a("q1tI"),v=a.n(p),O=a("WfVf"),b=function(t){function e(){var t,a;Object(c.default)(this,e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=Object(l.default)(this,(t=Object(d.default)(e)).call.apply(t,[this].concat(i))),Object(m.a)(Object(u.default)(a),"state",{}),Object(m.a)(Object(u.default)(a),"simulator",void 0),Object(m.a)(Object(u.default)(a),"onOverlayDataUpdate",function(t){console.info("receive",t.detail),a.setState(t.detail)}),a}return Object(f.default)(e,t),Object(s.default)(e,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("onOverlayDataUpdate",this.onOverlayDataUpdate),window.addEventListener("message",function(e){"onOverlayDataUpdate"===e.data.type&&t.onOverlayDataUpdate(e.data)}),window.location.search.includes("simulator")&&(this.simulator=Object(O.a)(1e3))}},{key:"componentWillUnmount",value:function(){O.a&&clearInterval(this.simulator)}},{key:"render",value:function(){var t=this.state,e=t.Combatant,a=t.Encounter,n=t.isActive;return v.a.createElement(v.a.Fragment,null,v.a.createElement(E.a,{id:"604295086"},["body{font-family:sans-serif;}"]),v.a.createElement("h1",{className:"jsx-604295086"},"Encounter"),v.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},r()(a,void 0,2)),v.a.createElement("h1",{className:"jsx-604295086"},"Combatant: ",e&&i()(e)[0]," of ",e&&i()(e).length),v.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},r()(e&&e[i()(e)[0]],void 0,2)),v.a.createElement("h1",{className:"jsx-604295086"},"isActive"),v.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},r()(n,void 0,2)),v.a.createElement("div",{className:"jsx-604295086"},"Base"))}}]),e}(v.a.Component)},LzdP:function(t,e,a){var n=a("Y7ZC");n(n.S,"Date",{now:function(){return(new Date).getTime()}})},WfVf:function(t,e,a){"use strict";var n=a("pLtp"),i=a.n(n),o=a("Cg2A"),r=a.n(o),c=a("Jo+v"),s=a.n(c),l=a("4mXO"),d=a.n(l),u=a("vYYK");var f=a("d04V"),m=a.n(f),h=a("dfwq");function E(t,e){return Object(u.a)({},"YOU ".concat(e),{n:"\n",t:"\t",name:"YOU ".concat(e),duration:"00:00",DURATION:"0",damage:"0","damage-m":"0.01","DAMAGE-k":"5","DAMAGE-m":"0","damage%":"15%",encdps:"17.51",ENCDPS:"18","ENCDPS-k":"0",hits:"168",crithits:"17","crithit%":"10%",misses:"0",hitfailed:"0",swings:"168",tohit:"100.00",TOHIT:"100",maxhit:"True Strike-81",MAXHIT:"81",healed:"0","healed%":"0%",enchps:"0.00",ENCHPS:"0","ENCHPS-k":"0",critheals:"0","critheal%":"0%",heals:"0",cures:"0",maxheal:"",MAXHEAL:"",damagetaken:"840",healstaken:"0",powerdrain:"0",powerheal:"0",kills:"9",deaths:"0",threatstr:"+(0)0/-(0)0",threatdelta:"0",NAME3:"YOU",NAME4:"YOU",NAME5:"YOU",NAME6:"YOU",NAME7:"YOU",NAME8:"YOU",NAME9:"YOU",NAME10:"YOU",NAME11:"YOU",NAME12:"YOU",NAME13:"YOU",NAME14:"YOU",NAME15:"YOU",Last10DPS:"20",Last30DPS:"0",Last60DPS:"0",Job:"Mnk",ParryPct:"6%",BlockPct:"0%",IncToHit:"92.73",OverHealPct:"0%"})}function p(t){return Object(h.default)(m()({length:t})).map(E).reduce(function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=i()(a);"function"===typeof d.a&&(n=n.concat(d()(a).filter(function(t){return s()(a,t).enumerable}))),n.forEach(function(e){Object(u.a)(t,e,a[e])})}return t}({},t,e)},{})}var v=function(){return{n:"\n",t:"\t",title:"Test Encounter",duration:"00:00",DURATION:"0",damage:"0","damage-m":"0.03","DAMAGE-k":"32","DAMAGE-m":"0",dps:"109.51",DPS:"110","DPS-k":"0",encdps:"109.51",ENCDPS:"110","ENCDPS-k":"0",hits:"856",crithits:"86","crithit%":"0%",misses:"3",hitfailed:"0",swings:"859",tohit:"---",TOHIT:"---",maxhit:"Nobono Nobo-Fire-249",MAXHIT:"Nobono Nobo-249",healed:"181",enchps:"0.62",ENCHPS:"1","ENCHPS-k":"0",critheals:"86","critheal%":"0%",heals:"3",cures:"0",maxheal:"Dodd Himself-Life Surge-70",MAXHEAL:"Dodd Himself-70",maxhealward:"Dodd Himself-Life Surge-70",MAXHEALWARD:"Dodd Himself-70",damagetaken:"4467",healstaken:"181",powerdrain:"0",powerheal:"0",kills:"47",deaths:"1",Last10DPS:"100",Last30DPS:"",Last60DPS:""}};function O(t,e){return t+Math.floor(Math.random()*(e-t))}var b=r()();function N(t){var e=r()()-b,a=function(t){var e=Math.floor(t/6e4),a=Number((t%6e4/1e3).toFixed(0));return e+":"+(a<10?"0":"")+a}(e);return t.detail.Encounter.damage=0,t.detail.Encounter.duration=a,t.detail.Encounter.DURATION=e,i()(t.detail.Combatant).forEach(function(n){t.detail.Combatant[n].duration=a,t.detail.Combatant[n].DURATION=e,t.detail.Combatant[n].damage=O(2e3,9e3),t.detail.Combatant[n].DPS=O(2e3,9e3),t.detail.Combatant[n].encdps=O(2e3,9e3),t.detail.Encounter.damage+=t.detail.Combatant[n].damage,t.detail.Encounter.dps+=t.detail.Combatant[n].dps,t.detail.Encounter.encdps+=t.detail.Combatant[n].encdps}),t.detail}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=new CustomEvent("onOverlayDataUpdate",{detail:{Encounter:v(),Combatant:p(8),isActive:!0}});return document.dispatchEvent(e),window.location.search.includes("debug")&&console.info("displatch:start",e.detail),setInterval(function(){var t=new CustomEvent("onOverlayDataUpdate",{detail:N(e)});document.dispatchEvent(t),window.location.search.includes("debug")&&console.info("dispatch:update",t.detail)},t)}},"oh+g":function(t,e,a){var n=a("WEpk"),i=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},vYYK:function(t,e,a){"use strict";a.d(e,"a",function(){return o});var n=a("hfKm"),i=a.n(n);function o(t,e,a){return e in t?i()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},ygS8:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/t/base",function(){var t=a("GzpO");return{page:t.default||t}}])}},[["ygS8",1,0]]]);