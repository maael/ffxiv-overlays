(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6CmU":function(t,e,a){a("LzdP"),t.exports=a("WEpk").Date.now},Cg2A:function(t,e,a){t.exports=a("6CmU")},E8gZ:function(t,e,a){var n=a("jmDH"),r=a("w6GO"),i=a("NsO/"),o=a("NV0k").f;t.exports=function(t){return function(e){for(var a,c=i(e),u=r(c),d=u.length,l=0,s=[];d>l;)a=u[l++],n&&!o.call(c,a)||s.push(t?[a,c[a]]:c[a]);return s}}},"LR/J":function(t,e,a){t.exports=a("tgZa")},LzdP:function(t,e,a){var n=a("Y7ZC");n(n.S,"Date",{now:function(){return(new Date).getTime()}})},WfVf:function(t,e,a){"use strict";var n=a("pLtp"),r=a.n(n),i=a("Cg2A"),o=a.n(i),c=a("Jo+v"),u=a.n(c),d=a("4mXO"),l=a.n(d),s=a("vYYK");var f=a("d04V"),m=a.n(f),h=a("dfwq");function v(t,e){return Object(s.a)({},"YOU ".concat(e),{n:"\n",t:"\t",name:"YOU ".concat(e),duration:"00:00",DURATION:"0",damage:"0","damage-m":"0.01","DAMAGE-k":"5","DAMAGE-m":"0","damage%":"15%",encdps:"17.51",ENCDPS:"18","ENCDPS-k":"0",hits:"168",crithits:"17","crithit%":"10%",misses:"0",hitfailed:"0",swings:"168",tohit:"100.00",TOHIT:"100",maxhit:"True Strike-81",MAXHIT:"81",healed:"0","healed%":"0%",enchps:"0.00",ENCHPS:"0","ENCHPS-k":"0",critheals:"0","critheal%":"0%",heals:"0",cures:"0",maxheal:"",MAXHEAL:"",damagetaken:"840",healstaken:"0",powerdrain:"0",powerheal:"0",kills:"9",deaths:"0",threatstr:"+(0)0/-(0)0",threatdelta:"0",NAME3:"YOU",NAME4:"YOU",NAME5:"YOU",NAME6:"YOU",NAME7:"YOU",NAME8:"YOU",NAME9:"YOU",NAME10:"YOU",NAME11:"YOU",NAME12:"YOU",NAME13:"YOU",NAME14:"YOU",NAME15:"YOU",Last10DPS:"20",Last30DPS:"0",Last60DPS:"0",Job:"Mnk",ParryPct:"6%",BlockPct:"0%",IncToHit:"92.73",OverHealPct:"0%"})}function E(t){return Object(h.default)(m()({length:t})).map(v).reduce(function(t,e){return function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=r()(a);"function"===typeof l.a&&(n=n.concat(l()(a).filter(function(t){return u()(a,t).enumerable}))),n.forEach(function(e){Object(s.a)(t,e,a[e])})}return t}({},t,e)},{})}var p=function(){return{n:"\n",t:"\t",title:"Test Encounter",duration:"00:00",DURATION:"0",damage:"0","damage-m":"0.03","DAMAGE-k":"32","DAMAGE-m":"0",dps:"109.51",DPS:"110","DPS-k":"0",encdps:"109.51",ENCDPS:"110","ENCDPS-k":"0",hits:"856",crithits:"86","crithit%":"0%",misses:"3",hitfailed:"0",swings:"859",tohit:"---",TOHIT:"---",maxhit:"Nobono Nobo-Fire-249",MAXHIT:"Nobono Nobo-249",healed:"181",enchps:"0.62",ENCHPS:"1","ENCHPS-k":"0",critheals:"86","critheal%":"0%",heals:"3",cures:"0",maxheal:"Dodd Himself-Life Surge-70",MAXHEAL:"Dodd Himself-70",maxhealward:"Dodd Himself-Life Surge-70",MAXHEALWARD:"Dodd Himself-70",damagetaken:"4467",healstaken:"181",powerdrain:"0",powerheal:"0",kills:"47",deaths:"1",Last10DPS:"100",Last30DPS:"",Last60DPS:""}};var O=o()();function b(t){var e=o()()-O,a=function(t){var e=Math.floor(t/6e4),a=Number((t%6e4/1e3).toFixed(0));return e+":"+(a<10?"0":"")+a}(e);return t.detail.Encounter.damage=0,t.detail.Encounter.duration=a,t.detail.Encounter.DURATION=e,r()(t.detail.Combatant).forEach(function(n){var r,i;t.detail.Combatant[n].duration=a,t.detail.Combatant[n].DURATION=e,t.detail.Combatant[n].damage=(i=9e3,(r=2e3)+Math.floor(Math.random()*(i-r))),t.detail.Encounter.damage+=t.detail.Combatant[n].damage}),t.detail}e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,e=new CustomEvent("onOverlayDataUpdate",{detail:{Encounter:p(),Combatant:E(8),isActive:!0}});document.dispatchEvent(e),window.location.search.includes("debug")&&console.info("displatch:start",e.detail),setInterval(function(){var t=new CustomEvent("onOverlayDataUpdate",{detail:b(e)});document.dispatchEvent(t),window.location.search.includes("debug")&&console.info("dispatch:update",t.detail)},t)}},g1Iv:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/t/minidps",function(){var t=a("ltuA");return{page:t.default||t}}])},ltuA:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return O});var n=a("doui"),r=a("LR/J"),i=a.n(r),o=a("0iUn"),c=a("sLSF"),u=a("MI3g"),d=a("a7VT"),l=a("AT/M"),s=a("Tit0"),f=a("vYYK"),m=a("MX0m"),h=a.n(m),v=a("q1tI"),E=a.n(v),p=a("WfVf"),O=function(t){function e(){var t,a;Object(o.default)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=Object(u.default)(this,(t=Object(d.default)(e)).call.apply(t,[this].concat(r))),Object(f.a)(Object(l.default)(a),"state",{}),Object(f.a)(Object(l.default)(a),"onOverlayDataUpdate",function(t){a.setState(t.detail)}),a}return Object(s.default)(e,t),Object(c.default)(e,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("onOverlayDataUpdate",this.onOverlayDataUpdate),window.addEventListener("message",function(e){"onOverlayDataUpdate"===e.data.type&&t.onOverlayDataUpdate(e.data)}),window.location.search.includes("simulator")&&Object(p.a)(1e3)}},{key:"render",value:function(){var t=this.state.Combatant;return E.a.createElement(E.a.Fragment,null,E.a.createElement(h.a,{id:"604295086"},["body{font-family:sans-serif;}"]),t?i()(t).sort(function(t,e){var a=Object(n.default)(t,2),r=(a[0],a[1]),i=Object(n.default)(e,2),o=(i[0],i[1]);return Number(o.damage)-Number(r.damage)}).map(function(t){var e=Object(n.default)(t,2),a=(e[0],e[1]);return E.a.createElement("div",{style:{float:"left",padding:"0 15px",textAlign:"center"},key:a.name,className:"jsx-604295086"},E.a.createElement("div",{style:{fontSize:"0.8em"},className:"jsx-604295086"},a.name," (",(a.Job||"").toUpperCase(),")"),E.a.createElement("div",{className:"jsx-604295086"},a.damage))}):null)}}]),e}(E.a.Component)},nGDx:function(t,e,a){var n=a("Y7ZC"),r=a("E8gZ")(!0);n(n.S,"Object",{entries:function(t){return r(t)}})},tgZa:function(t,e,a){a("nGDx"),t.exports=a("WEpk").Object.entries},vYYK:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var n=a("hfKm"),r=a.n(n);function i(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["g1Iv",1,0]]]);