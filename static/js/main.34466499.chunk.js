(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),a=n(2),r=n(1),i=n.n(r),s=(n(13),n(5)),l=n(6),u=n(8),m=n(7),d=n(0);function j(e){var t=Date.now().toString().slice(-4);return console.debug("Renamed from ".concat(e," to ").concat(t)),"Clock-".concat(t)}function v(){return(new Date).toUTCString().slice(-12,-4)}var f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={time:v(),clockName:"Clock-0"},e.timerId=0,e.timerName=0,e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.clockName;this.timerName=window.setInterval((function(){e.setState({clockName:j(t)})}),3300),this.timerId=window.setInterval((function(){var t=v();console.info(t),e.setState({time:t})}),1e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),window.clearInterval(this.timerName)}},{key:"render",value:function(){var e=this.state,t=e.time,n=e.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:n})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(i.a.PureComponent);function b(){return(new Date).toUTCString().slice(-12,-4)}var O=function(){var e=Object(r.useState)(b()),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)("Clock-0"),i=Object(a.a)(o,2),s=i[0],l=i[1];return Object(r.useEffect)((function(){var e,t;return t=window.setInterval((function(){l(function(e){var t=Date.now().toString().slice(-4);return console.debug("Renamed from ".concat(e," to ").concat(t)),"Clock-".concat(t)}(s))}),3300),e=window.setInterval((function(){var e=b();console.info(e),c(e)}),1e3),function(){window.clearInterval(e),window.clearInterval(t)}}),[s]),Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:s})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:n})]})},h=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(e){e.preventDefault(),"contextmenu"===e.type?c(!1):c(!0)};return document.addEventListener("contextmenu",e),document.addEventListener("click",e),function(){document.removeEventListener("contextmenu",e),document.removeEventListener("click",e)}}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Fuction comp:"}),Object(d.jsx)(O,{}),Object(d.jsx)("p",{children:"Class comp:"}),Object(d.jsx)(f,{})]})]})};o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.34466499.chunk.js.map