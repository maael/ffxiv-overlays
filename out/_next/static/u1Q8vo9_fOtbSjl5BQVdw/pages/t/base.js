(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9Jkg":function(e,t,a){e.exports=a("oh+g")},GzpO:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return b});var n=a("pLtp"),i=a.n(n),o=a("9Jkg"),s=a.n(o),r=a("0iUn"),c=a("sLSF"),l=a("MI3g"),u=a("a7VT"),d=a("AT/M"),f=a("Tit0"),m=a("vYYK"),p=a("MX0m"),v=a.n(p),y=a("q1tI"),O=a.n(y),j=a("WfVf"),b=function(e){function t(){var e,a;Object(r.default)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return a=Object(l.default)(this,(e=Object(u.default)(t)).call.apply(e,[this].concat(i))),Object(m.a)(Object(d.default)(a),"state",{}),Object(m.a)(Object(d.default)(a),"simulator",void 0),Object(m.a)(Object(d.default)(a),"onOverlayDataUpdate",function(e){console.info("receive",e.detail),a.setState(e.detail)}),a}return Object(f.default)(t,e),Object(c.default)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("onOverlayDataUpdate",this.onOverlayDataUpdate),window.addEventListener("message",function(t){"onOverlayDataUpdate"===t.data.type&&e.onOverlayDataUpdate(t.data)}),window.location.search.includes("simulator")&&(this.simulator=Object(j.a)(1e3))}},{key:"componentWillUnmount",value:function(){j.a&&clearInterval(this.simulator)}},{key:"render",value:function(){var e=this.state,t=e.Combatant,a=e.Encounter,n=e.isActive;return O.a.createElement(O.a.Fragment,null,O.a.createElement(v.a,{id:"604295086"},["body{font-family:sans-serif;}"]),O.a.createElement("h1",{className:"jsx-604295086"},"Encounter"),O.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},s()(a,void 0,2)),O.a.createElement("h1",{className:"jsx-604295086"},"Combatant: ",t&&i()(t)[0]," of ",t&&i()(t).length),O.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},s()(t&&t[i()(t)[0]],void 0,2)),O.a.createElement("h1",{className:"jsx-604295086"},"isActive"),O.a.createElement("pre",{style:{fontSize:10},className:"jsx-604295086"},s()(n,void 0,2)),O.a.createElement("div",{className:"jsx-604295086"},"Base"))}}]),t}(O.a.Component)},"oh+g":function(e,t,a){var n=a("WEpk"),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return i.stringify.apply(i,arguments)}},ygS8:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/t/base",function(){var e=a("GzpO");return{page:e.default||e}}])}},[["ygS8",1,0]]]);