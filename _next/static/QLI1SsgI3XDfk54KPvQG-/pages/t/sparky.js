(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{E8gZ:function(e,t,n){var r=n("jmDH"),o=n("w6GO"),a=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,u=a(t),l=o(u),c=l.length,f=0,s=[];c>f;)n=l[f++],r&&!i.call(u,n)||s.push(e?[n,u[n]]:u[n]);return s}}},"LR/J":function(e,t,n){e.exports=n("tgZa")},Mje5:function(e,t,n){"use strict";var r,o,a,i,u,l,c,f=n("vYYK");!function(e){e.ENCOUNTER_N="n",e.ENCOUNTER_T="t",e.TITLE="title",e.DURATION="duration",e.DURATION_SECONDS="DURATION",e.DAMAGE="damage",e.DAMAGE_MILLIONS="damage-m",e.DAMAGE_ROUNDED_THOUSANDS="DAMAGE-k",e.DAMAGE_ROUNDED_MILLIONS="DAMAGE-m",e.DPS="dps",e.DPS_ROUNDED="DPS",e.DPS_ROUNDED_THOUSANDS="DPS-k",e.HITS="hits",e.CRITICAL_HITS="crithits",e.CRITICAL_PERCENTAGE="crithit%",e.MISSES="misses",e.HIT_FAILED="hitfailed",e.SWINGS="swings",e.TO_HIT="tohit",e.TO_HIT_ROUNDED="TOHIT",e.MAX_HIT="maxhit",e.MAX_HIT_SHORT="MAXHIT",e.HEALED="healed",e.HPS="enchps",e.HPS_ROUNDED="ENCHPS",e.HPS_ROUNDED_THOUSANDS="ENCHPS-k",e.CRITICAL_HEALS="critheals",e.CRITICAL_HEALS_PERCENTAGE="critheal%",e.HEALS="heals",e.CURES="cures",e.MAX_HEAL="maxheal",e.MAX_HEAL_SIMPLE="MAXHEAL",e.DAMAGE_TAKEN="damagetaken",e.HEALS_TAKEN="healstaken",e.POWER_DRAIN="powerdrain",e.POWER_HEAL="powerheal",e.KILLS="kills",e.DEATHS="deaths",e.CURRENT_ZONE_NAME="CurrentZoneName",e.DPS_10_SECONDS="Last10DPS",e.DPS_30_SECONDS="Last30DPS",e.DPS_60_SECONDS="Last60DPS"}(r||(r={})),function(e){e.COMBATANT_N="n",e.COMBATANT_T="t",e.NAME="name",e.DURATION="duration",e.DURATION_SECONDS="DURATION",e.DAMAGE="damage",e.DAMAGE_MILLIONS="damage-m",e.DAMAGE_ROUNDED_THOUSANDS="DAMAGE-k",e.DAMAGE_ROUNDED_MILLIONS="DAMAGE-m",e.DAMAGE_PERCENT="damage%",e.DPS="encdps",e.DPS_ROUNDED="ENCDPS",e.DPS_ROUNDED_THOUSANDS="ENCDPS-k",e.HITS="hits",e.CRITICAL_HITS="crithits",e.CRITICAL_PERCENTAGE="crithit%",e.MISSES="misses",e.HIT_FAILED="hitfailed",e.SWINGS="swings",e.TO_HIT="tohit",e.TO_HIT_ROUNDED="TOHIT",e.MAX_HIT="maxhit",e.MAX_HIT_SHORT="MAXHIT",e.HEALED="healed",e.HEALED_PERCENT="healed%",e.HPS="enchps",e.HPS_ROUNDED="ENCHPS",e.HPS_ROUNDED_THOUSANDS="ENCHPS-k",e.CRITICAL_HEALS="critheals",e.CRITICAL_HEALS_PERCENTAGE="critheal%",e.HEALS="heals",e.CURES="cures",e.MAX_HEAL="maxheal",e.MAX_HEAL_SIMPLE="MAXHEAL",e.DAMAGE_TAKEN="damagetaken",e.HEALS_TAKEN="healstaken",e.POWER_DRAIN="powerdrain",e.POWER_HEAL="powerheal",e.KILLS="kills",e.DEATHS="deaths",e.THREAT_STRENGTH="threatstr",e.THREAT_DELTA="threatdelta",e.JOB="Job",e.PARRY_RATE="ParryPct",e.BLOCK_RATE="BlockPct",e.INC_TO_HIT="IncToHit",e.OVERHEAL_PERCENT="OverHealPct",e.JOB_OR_NAME="JobOrName",e.DPS_10_SECONDS="Last10DPS",e.DPS_30_SECONDS="Last30DPS",e.DPS_60_SECONDS="Last60DPS",e.NAME_TRUNC3="NAME3",e.NAME_TRUNC4="NAME4",e.NAME_TRUNC5="NAME5",e.NAME_TRUNC6="NAME6",e.NAME_TRUNC7="NAME7",e.NAME_TRUNC8="NAME8",e.NAME_TRUNC9="NAME9",e.NAME_TRUNC10="NAME10",e.NAME_TRUNC11="NAME11",e.NAME_TRUNC12="NAME12",e.NAME_TRUNC13="NAME13",e.NAME_TRUNC14="NAME14",e.NAME_TRUNC15="NAME15",e.CUSTOM_ACTUAL_HEALING="custom_actual_healing"}(o||(o={})),function(e){e.PLD="PLD",e.WAR="WAR",e.DRK="DRK",e.GNB="GNB",e.SCH="SCH",e.AST="AST",e.WHM="WHM",e.SMN="SMN",e.BRD="BRD",e.DRG="DRG",e.MNK="MNK",e.NIN="NIN",e.BLM="BLM",e.MCH="MCH",e.SAM="SAM",e.RDM="RDM",e.DNC="DNC"}(a||(a={})),function(e){e.HEALER="HEALER",e.TANK="TANK",e["RANGED PHYSICAL DPS"]="RANGED PHYSICAL DPS",e["MELEE PHYSICAL DPS"]="MELEE PHYSICAL DPS",e["RANGED MAGIC DPS"]="RANGED MAGIC DPS",e.DPS="DPS"}(i||(i={})),function(e){e.HEALER="green",e.TANK="blue",e.DPS="red",e.default="grey"}(u||(u={}));l={},Object(f.a)(l,i.HEALER,[a.WHM,a.SCH,a.AST]),Object(f.a)(l,i.TANK,[a.PLD,a.WAR,a.DRK,a.GNB]),Object(f.a)(l,i.DPS,[a.SMN,a.BRD,a.DRG,a.MNK,a.NIN,a.BLM,a.MCH,a.SAM,a.RDM,a.DNC]);var s=(c={},Object(f.a)(c,a.WHM,i.HEALER),Object(f.a)(c,a.SCH,i.HEALER),Object(f.a)(c,a.AST,i.HEALER),Object(f.a)(c,a.PLD,i.TANK),Object(f.a)(c,a.WAR,i.TANK),Object(f.a)(c,a.DRK,i.TANK),Object(f.a)(c,a.GNB,i.TANK),Object(f.a)(c,a.SMN,i.DPS),Object(f.a)(c,a.BRD,i.DPS),Object(f.a)(c,a.DRG,i.DPS),Object(f.a)(c,a.MNK,i.DPS),Object(f.a)(c,a.NIN,i.DPS),Object(f.a)(c,a.BLM,i.DPS),Object(f.a)(c,a.MCH,i.DPS),Object(f.a)(c,a.SAM,i.DPS),Object(f.a)(c,a.RDM,i.DPS),Object(f.a)(c,a.DNC,i.DPS),c);function p(e){var t=s[e];return u[t]||u.default}n.d(t,"a",function(){return p})},ReRh:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);t.a=function(){return o.a.createElement("div",{style:{position:"absolute",background:"grey",width:10,height:10,bottom:0,right:0,opacity:.5}})}},eRa9:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return S});var r=n("zrwo"),o=n("dfwq"),a=n("doui"),i=n("LR/J"),u=n.n(i),l=n("LX0d"),c=n.n(l),f=n("0iUn"),s=n("sLSF"),p=n("MI3g"),d=n("a7VT"),y=n("AT/M"),h=n("Tit0"),b=n("vYYK"),v=n("MX0m"),m=n.n(v),E=n("q1tI"),_=n.n(E),O=n("nCnx"),g=n("ReRh"),A=n("WfVf"),T=n("Mje5"),S=function(e){function t(){var e,n;Object(f.default)(this,t);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=Object(p.default)(this,(e=Object(d.default)(t)).call.apply(e,[this].concat(l))),Object(b.a)(Object(y.default)(n),"state",{encOverTime:new c.a}),Object(b.a)(Object(y.default)(n),"simulator",void 0),Object(b.a)(Object(y.default)(n),"onOverlayDataUpdate",function(e){var t=e.detail.Combatant,i=n.state.encOverTime;u()(t).forEach(function(e){var t=Object(a.default)(e,2),n=t[0],r=t[1];i.set(n,[].concat(Object(o.default)((i.get(n)||[]).splice(-25)),[Number(r.encdps)]))}),n.setState(Object(r.a)({},e.detail,{encOverTime:i}))}),Object(b.a)(Object(y.default)(n),"renderCombatant",function(e){var t=Object(a.default)(e,2),r=t[0],o=t[1],i=(o.Job||"").toUpperCase(),u=Object(T.a)(i);return _.a.createElement("div",{style:{float:"left",padding:"0 15px",textAlign:"center",width:200,color:"#FFFFFF",fontWeight:"bold",textShadow:"0 0 5px ".concat(u)},key:o.name},_.a.createElement(O.Sparklines,{data:n.state.encOverTime.get(r),height:50},_.a.createElement(O.SparklinesLine,{style:{},color:u})),_.a.createElement("div",{style:{fontSize:"0.8em"}},o.name," (",i,")"),_.a.createElement("div",null,o.encdps))}),n}return Object(h.default)(t,e),Object(s.default)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("onOverlayDataUpdate",this.onOverlayDataUpdate),window.addEventListener("message",function(t){"onOverlayDataUpdate"===t.data.type&&e.onOverlayDataUpdate(t.data)}),window.location.search.includes("simulator")&&(this.simulator=Object(A.a)(1e3))}},{key:"componentWillUnmount",value:function(){A.a&&clearInterval(this.simulator)}},{key:"render",value:function(){var e=this.state.Combatant,t=["YOU 0","YOU"],n=e?u()(e).filter(function(e){var n=Object(a.default)(e,2),r=n[0];n[1];return t.includes(r)}).sort(function(e,t){var n=Object(a.default)(e,2),r=(n[0],n[1]),o=Object(a.default)(t,2),i=(o[0],o[1]);return Number(i.encdps)-Number(r.encdps)}).map(this.renderCombatant):null;return _.a.createElement(_.a.Fragment,null,_.a.createElement(m.a,{id:"604295086"},["body{font-family:sans-serif;}"]),_.a.createElement(g.a,null),n)}}]),t}(_.a.Component)},nCnx:function(e,t,n){var r;r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=11)}([function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(14)(function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},!0)}else e.exports=n(16)()}).call(t,n(2))},function(t,n){t.exports=e},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var l,c=[],f=!1,s=-1;function p(){f&&l&&(f=!1,l.length?c=l.concat(c):s=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var t=c.length;t;){for(l=c,c=[];++s<t;)l&&l[s].run();s=-1,t=c.length}l=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new y(e,t)),1!==c.length||f||u(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.reduce(function(e,t){return e+t})/e.length}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,o,a,i,u,l){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,o,a,i,u,l],s=0;(c=new Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}}).call(t,n(2))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Math.min.apply(Math,e)}},function(e,t,n){"use strict";(function(t){var r=n(4);if("production"!==t.env.NODE_ENV){r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];(function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(i){}}).apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Math.max.apply(Math,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(3),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){var t=(0,a.default)(e),n=e.map(function(e){return Math.pow(e-t,2)}),r=(0,a.default)(n);return Math.sqrt(r)}},function(e,t,n){e.exports=n(12)},function(e,t,n){"use strict";e.exports=n(13)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SparklinesText=t.SparklinesNormalBand=t.SparklinesReferenceLine=t.SparklinesSpots=t.SparklinesBars=t.SparklinesCurve=t.SparklinesLine=t.Sparklines=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=h(n(0)),a=n(1),i=h(a),u=h(n(17)),l=h(n(18)),c=h(n(19)),f=h(n(20)),s=h(n(21)),p=h(n(22)),d=h(n(27)),y=h(n(28));function h(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.limit,r=e.width,o=e.height,a=e.svgWidth,u=e.svgHeight,l=e.preserveAspectRatio,c=e.margin,f=e.style,s=e.max,p=e.min;if(0===t.length)return null;var d=(0,y.default)({data:t,limit:n,width:r,height:o,margin:c,max:s,min:p}),h={style:f,viewBox:"0 0 "+r+" "+o,preserveAspectRatio:l};return a>0&&(h.width=a),u>0&&(h.height=u),i.default.createElement("svg",h,i.default.Children.map(this.props.children,function(e){return i.default.cloneElement(e,{data:t,points:d,width:r,height:o,margin:c})}))}}]),t}();b.propTypes={data:o.default.array,limit:o.default.number,width:o.default.number,height:o.default.number,svgWidth:o.default.number,svgHeight:o.default.number,preserveAspectRatio:o.default.string,margin:o.default.number,style:o.default.object,min:o.default.number,max:o.default.number,onMouseMove:o.default.func},b.defaultProps={data:[],width:240,height:60,preserveAspectRatio:"none",margin:2},t.Sparklines=b,t.SparklinesLine=l.default,t.SparklinesCurve=c.default,t.SparklinesBars=f.default,t.SparklinesSpots=s.default,t.SparklinesReferenceLine=p.default,t.SparklinesNormalBand=d.default,t.SparklinesText=u.default},function(e,t,n){"use strict";(function(t){var r=n(4),o=n(5),a=n(8),i=n(6),u=n(15);e.exports=function(e,n){var l="function"===typeof Symbol&&Symbol.iterator,c="@@iterator";var f="<<anonymous>>",s={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:y(r.thatReturnsNull),arrayOf:function(e){return y(function(t,n,r,o,a){if("function"!==typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var l=v(u);return new d("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=e(u,c,r,o,a+"["+c+"]",i);if(f instanceof Error)return f}return null})},element:function(){return y(function(t,n,r,o,a){var i=t[n];if(!e(i)){var u=v(i);return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return y(function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||f,u=function(e){if(!e.constructor||!e.constructor.name)return f;return e.constructor.name}(t[n]);return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null})},node:function(){return y(function(e,t,n,r,o){if(!b(e[t]))return new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return y(function(t,n,r,o,a){if("function"!==typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],l=v(u);if("object"!==l)return new d("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var c in u)if(u.hasOwnProperty(c)){var f=e(u,c,r,o,a+"."+c,i);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return y(function(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(p(i,e[u]))return null;var l=JSON.stringify(e);return new d("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+l+".")})},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var o=e[n];if("function"!==typeof o)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",E(o),n),r.thatReturnsNull}return y(function(t,n,r,o,a){for(var u=0;u<e.length;u++){var l=e[u];if(null==l(t,n,r,o,a,i))return null}return new d("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return y(function(t,n,r,o,a){var u=t[n],l=v(u);if("object"!==l)return new d("Invalid "+o+" `"+a+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var s=f(u,c,r,o,a+"."+c,i);if(s)return s}}return null})}};function p(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function d(e){this.message=e,this.stack=""}function y(e){if("production"!==t.env.NODE_ENV)var r={},u=0;function l(l,c,s,p,y,h,b){if(p=p||f,h=h||s,b!==i)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!==typeof console){var v=p+":"+s;!r[v]&&u<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),r[v]=!0,u++)}return null==c[s]?l?null===c[s]?new d("The "+y+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`."):new d("The "+y+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(c,s,p,y,h)}var c=l.bind(null,!1);return c.isRequired=l.bind(null,!0),c}function h(e){return y(function(t,n,r,o,a,i){var u=t[n];return v(u)!==e?new d("Invalid "+o+" `"+a+"` of type `"+m(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(l&&e[l]||e[c]);if("function"===typeof t)return t}(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!b(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function m(e){if("undefined"===typeof e||null===e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=m(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,s.checkPropTypes=u,s.PropTypes=s,s}}).call(t,n(2))},function(e,t,n){"use strict";(function(t){if("production"!==t.env.NODE_ENV)var r=n(5),o=n(8),a=n(6),i={};e.exports=function(e,n,u,l,c){if("production"!==t.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var s;try{r("function"===typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",l||"React class",u,f),s=e[f](n,f,l,u,null,a)}catch(d){s=d}if(o(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",u,f,typeof s),s instanceof Error&&!(s.message in i)){i[s.message]=!0;var p=c?c():"";o(!1,"Failed %s type: %s%s",u,s.message,null!=p?p:"")}}}}).call(t,n(2))},function(e,t,n){"use strict";var r=n(4),o=n(5),a=n(6);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),a=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.point,n=e.text,r=e.fontSize,o=e.fontFamily,i=t.x,u=t.y;return a.default.createElement("g",null,a.default.createElement("text",{x:i,y:u,fontFamily:o||"Verdana",fontSize:r||10},n))}}]),t}();u.propTypes={text:o.default.string,point:o.default.object,fontSize:o.default.number,fontFamily:o.default.string},u.defaultProps={text:"",point:{x:0,y:0}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),a=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.points,r=(e.width,e.height),o=e.margin,i=e.color,u=e.style,l=e.onMouseMove,c=n.map(function(e){return[e.x,e.y]}).reduce(function(e,t){return e.concat(t)}),f=[n[n.length-1].x,r-o,o,r-o,o,n[0].y],s=c.concat(f),p={stroke:i||u.stroke||"slategray",strokeWidth:u.strokeWidth||"1",strokeLinejoin:u.strokeLinejoin||"round",strokeLinecap:u.strokeLinecap||"round",fill:"none"},d={stroke:u.stroke||"none",strokeWidth:"0",fillOpacity:u.fillOpacity||".1",fill:u.fill||i||"slategray",pointerEvents:"auto"},y=n.map(function(e,n){return a.default.createElement("circle",{key:n,cx:e.x,cy:e.y,r:2,style:d,onMouseEnter:function(r){return l("enter",t[n],e)},onClick:function(r){return l("click",t[n],e)}})});return a.default.createElement("g",null,y,a.default.createElement("polyline",{points:s.join(" "),style:d}),a.default.createElement("polyline",{points:c.join(" "),style:p}))}}]),t}();u.propTypes={color:o.default.string,style:o.default.object},u.defaultProps={style:{},onMouseMove:function(){}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),a=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.points,n=(e.width,e.height),r=e.margin,o=e.color,i=e.style,u=e.divisor,l=void 0===u?.25:u,c=void 0,f=t.map(function(e){return function(e){var t=void 0;if(c){var n=(e.x-c.x)*l;t=["C",c.x+n,c.y,e.x-n,e.y,e.x,e.y]}else t=[e.x,e.y];return c=e,t}(e)}).reduce(function(e,t){return e.concat(t)}),s=["L"+t[t.length-1].x,n-r,r,n-r,r,t[0].y],p=f.concat(s),d={stroke:o||i.stroke||"slategray",strokeWidth:i.strokeWidth||"1",strokeLinejoin:i.strokeLinejoin||"round",strokeLinecap:i.strokeLinecap||"round",fill:"none"},y={stroke:i.stroke||"none",strokeWidth:"0",fillOpacity:i.fillOpacity||".1",fill:i.fill||o||"slategray"};return a.default.createElement("g",null,a.default.createElement("path",{d:"M"+p.join(" "),style:y}),a.default.createElement("path",{d:"M"+f.join(" "),style:d}))}}]),t}();u.propTypes={color:o.default.string,style:o.default.object},u.defaultProps={style:{}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),a=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.points,r=t.height,o=t.style,i=t.barWidth,u=t.margin,l=t.onMouseMove,c=1*(o&&o.strokeWidth||0),f=u?2*u:0,s=i||(n&&n.length>=2?Math.max(0,n[1].x-n[0].x-c-f):0);return a.default.createElement("g",{transform:"scale(1,-1)"},n.map(function(t,n){return a.default.createElement("rect",{key:n,x:t.x-(s+c)/2,y:-r,width:s,height:Math.max(0,r-t.y),style:o,onMouseMove:l&&l.bind(e,t)})}))}}]),t}();u.propTypes={points:o.default.arrayOf(o.default.object),height:o.default.number,style:o.default.object,barWidth:o.default.number,margin:o.default.number,onMouseMove:o.default.func},u.defaultProps={style:{fill:"slategray"}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=i(n(0)),a=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"lastDirection",value:function(e){return Math.sign=Math.sign||function(e){return e>0?1:-1},e.length<2?0:Math.sign(e[e.length-2].y-e[e.length-1].y)}},{key:"render",value:function(){var e=this.props,t=e.points,n=(e.width,e.height,e.size),r=e.style,o=e.spotColors,i=a.default.createElement("circle",{cx:t[0].x,cy:t[0].y,r:n,style:r}),u=a.default.createElement("circle",{cx:t[t.length-1].x,cy:t[t.length-1].y,r:n,style:r||{fill:o[this.lastDirection(t)]}});return a.default.createElement("g",null,r&&i,u)}}]),t}();u.propTypes={size:o.default.number,style:o.default.object,spotColors:o.default.object},u.defaultProps={size:2,spotColors:{"-1":"red",0:"black",1:"green"}},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(0)),a=u(n(1)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(23));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.points,n=e.margin,r=e.type,o=e.style,u=e.value,l=t.map(function(e){return e.y}),c="custom"==r?u:i[r](l);return a.default.createElement("line",{x1:t[0].x,y1:c+n,x2:t[t.length-1].x,y2:c+n,style:o})}}]),t}();l.propTypes={type:o.default.oneOf(["max","min","mean","avg","median","custom"]),value:o.default.number,style:o.default.object},l.defaultProps={type:"mean",style:{stroke:"red",strokeOpacity:.75,strokeDasharray:"2, 2"}},t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.variance=t.stdev=t.median=t.midRange=t.avg=t.mean=t.max=t.min=void 0;var r=c(n(7)),o=c(n(3)),a=c(n(24)),i=c(n(25)),u=c(n(10)),l=c(n(26));function c(e){return e&&e.__esModule?e:{default:e}}t.min=r.default,t.max=r.default,t.mean=o.default,t.avg=o.default,t.midRange=a.default,t.median=i.default,t.stdev=u.default,t.variance=l.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(7)),o=a(n(9));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return(0,o.default)(e)-(0,r.default)(e)/2}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.sort(function(e,t){return e-t})[Math.floor(e.length/2)]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(3),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){var t=(0,a.default)(e),n=e.map(function(e){return Math.pow(e-t,2)});return(0,a.default)(n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(0)),a=l(n(1)),i=l(n(3)),u=l(n(10));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.points,n=e.margin,r=e.style,o=t.map(function(e){return e.y}),l=(0,i.default)(o),c=(0,u.default)(o);return a.default.createElement("rect",{x:t[0].x,y:l-c+n,width:t[t.length-1].x-t[0].x,height:2*u.default,style:r})}}]),t}();c.propTypes={style:o.default.object},c.defaultProps={style:{fill:"red",fillOpacity:.1}},t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(7)),o=a(n(9));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.data,n=e.limit,a=e.width,i=void 0===a?1:a,u=e.height,l=void 0===u?1:u,c=e.margin,f=void 0===c?0:c,s=e.max,p=void 0===s?(0,o.default)(t):s,d=e.min,y=void 0===d?(0,r.default)(t):d,h=t.length;n&&n<h&&(t=t.slice(h-n));var b=(l-2*f)/(p-y||2),v=(i-2*f)/((n||h)-(h>1?1:0));return t.map(function(e,t){return{x:t*v+f,y:(p===y?1:p-e)*b+f}})}}])},e.exports=r(n("q1tI"))},nGDx:function(e,t,n){var r=n("Y7ZC"),o=n("E8gZ")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},tgZa:function(e,t,n){n("nGDx"),e.exports=n("WEpk").Object.entries},wLWt:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/t/sparky",function(){var e=n("eRa9");return{page:e.default||e}}])}},[["wLWt",1,0]]]);