(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("23aj");return{page:e.default||e}}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),o=n.n(r),a=n("q1tI"),s=n.n(a),i=n("YFqc"),l=n.n(i);t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{id:"2051348770"},["body{font-family:sans-serif;}"]),s.a.createElement("h1",{className:"jsx-2051348770"},"Mael'a Niwa's Overlay Themes"),s.a.createElement("ul",{className:"jsx-2051348770"},s.a.createElement("li",{className:"jsx-2051348770"},s.a.createElement(l.a,{href:"/t/base"},"Base"))))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),o=r(n("0iUn")),a=r(n("sLSF")),s=r(n("MI3g")),i=r(n("a7VT")),l=r(n("Tit0")),f=n("5Uuq"),u=n("KI45");t.__esModule=!0,t.default=void 0;var c,p=u(n("LX0d")),h=n("CxY0"),d=f(n("q1tI")),v=(u(n("17x9")),u(n("nOHt"))),m=(n("KA3u"),n("Bu4q"));function w(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var E=new p.default,y=window.IntersectionObserver;function g(){return c||(y?c=new y(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function t(){var e;return(0,o.default)(this,t),(e=(0,s.default)(this,(0,i.default)(t).apply(this,arguments))).cleanUpListeners=function(){},e.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var s=e(o,a);return t=o,n=a,r=s,s}}(function(e,t){return{href:w(e),as:t?w(t):t}}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),s=a.href,i=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var l=window.location.pathname;s=(0,h.resolve)(l,s),i=i?(0,h.resolve)(l,i):s,t.preventDefault();var f=e.props.scroll;null==f&&(f=i.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](s,i,{shallow:e.props.shallow}).then(function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.props.prefetch&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),E.set(e,t),function(){n.unobserve(e),E.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.props.prefetch){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),s={ref:function(t){return e.handleRef(t)},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch()},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=o||r),d.default.cloneElement(a,s)}}]),t}(d.Component);k.propTypes=void 0,k.defaultProps={prefetch:!0};var U=k;t.default=U}},[["/EDR",1,0]]]);