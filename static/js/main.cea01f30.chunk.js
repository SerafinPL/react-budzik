(this["webpackJsonpreact-budzik"]=this["webpackJsonpreact-budzik"]||[]).push([[0],{11:function(e,t,n){e.exports={navi:"App_navi__7IgiZ",active:"App_active__eYtTS"}},17:function(e,t,n){e.exports={main:"AlarmClock_main__1H3CA",display:"AlarmClock_display__2yaR_"}},18:function(e,t,n){e.exports={main:"CountdownTimer_main__1LqCW",display:"CountdownTimer_display__JP5Xv"}},22:function(e,t,n){e.exports={block:"Display_block__2SKtB"}},23:function(e,t,n){e.exports={main:"Stopwatch_main__2a9po"}},24:function(e,t,n){e.exports={main:"countOutDays_main__-6q64"}},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),o=n(21),s=n.n(o),r=(n(31),n(9)),u=n(7),l=n(4),j=n(2),d=(n(32),i.a.createContext({addAlarms:function(){},alarms:[],time:"",addCountdowns:function(){},countdowns:[],addStopwatch:function(){},addStopLists:function(){},changePlay:function(){},playState:!1,stopwatch:"",stopList:[],startTimeSW:new Date,setStartTimeSW:function(){},timing:function(){}})),b=function(e){var t=Object(a.useContext)(d);return Object(c.jsx)("div",{className:"clock",children:Object(c.jsx)("p",{id:"clock",children:t.time})})},m=(n(33),function(e){return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)("button",{onClick:e.func,onMouseDown:e.onMDown,onMouseUp:e.onMUp,className:e.classe,children:e.children})})}),O=i.a.memo(m),f=function(e){return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("span",{id:e.ident,children:e.content}),e.end?null:Object(c.jsx)("span",{style:{width:"5px"},children:":"})]})},p=i.a.memo(f),h=n(22),x=n.n(h),v=function(e){var t=Object(a.useState)(0),n=Object(l.a)(t,2),o=n[0],s=n[1],r=Object(a.useState)(!1),u=Object(l.a)(r,2),j=u[0],d=u[1],b=Object(a.useState)(!1),m=Object(l.a)(b,2),f=m[0],h=m[1],v=Object(a.useCallback)((function(){o<e.gardener?s((function(e){return e+1})):s(0)}),[o,e.gardener]),w=Object(a.useCallback)((function(){s(o<=0?e.gardener:function(e){return e-1})}),[o,e.gardener]);return Object(a.useEffect)((function(){var e;return j&&(e=setInterval((function(){console.log("UUP"),v()}),100)),f&&(e=setInterval((function(){console.log("DOWN"),w()}),100)),function(){clearInterval(e)}}),[j,f,o,v,w]),Object(c.jsx)(i.a.Fragment,{children:Object(c.jsxs)("div",{className:x.a.block,children:[Object(c.jsx)(O,{children:"+",classe:"buttMini",func:v,onMDown:function(){return d(!0)},onMUp:function(){return d(!1)}}),Object(c.jsx)(p,{ident:e.identy,content:o,end:e.end}),Object(c.jsx)(O,{children:"-",classe:"buttMini",func:w,onMDown:function(){return h(!0)},onMUp:function(){return h(!1)}})]})})},w=(n(34),function(e){var t=function(t){e.deleting(t)},n=e.elements.map((function(e){return Object(c.jsxs)("li",{className:"item",children:[e.alarmClock,Object(c.jsx)("span",{onClick:function(){return t(e.key)},children:"X"})]},e.key)}));return Object(c.jsx)("ul",{className:"list",children:n})}),g=n(17),y=n.n(g),S=function(){return Object(a.useCallback)((function(e,t,n,c){var a="";return c||0===c?(e<10&&(a="0"),a+=e+":",t<10&&(a+="0"),a+=t+":",n<10&&(a+="0"),a+=n+":",c<10&&(a+="0"),a+=c):(e<10&&(a="0"),a+=e+":",t<10&&(a+="0"),a+=t+":",n<10&&(a+="0"),a+=n),a}),[])},k=function(e){var t=S(),n=Object(a.useContext)(d);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)("div",{className:y.a.main,children:[Object(c.jsx)("p",{children:"Budzik"}),Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:y.a.display,children:[Object(c.jsx)(v,{gardener:"23",identy:"hour"}),Object(c.jsx)(v,{gardener:"59",identy:"min"}),Object(c.jsx)(v,{gardener:"59",identy:"sec",end:!0})]}),Object(c.jsx)(O,{children:"Ustaw",classe:"buttSet",func:function(){var e=document.getElementById("hour").textContent,c=document.getElementById("min").textContent,a=document.getElementById("sec").textContent,i=Object(u.a)(n.alarms);i.unshift({alarmClock:t(e,c,a),key:(new Date).getTime()}),n.addAlarms(i)}})]}),Object(c.jsx)(w,{elements:n.alarms,deleting:function(e){var t=n.alarms.filter((function(t){return t.key!==e}));n.addAlarms(t)}})]})},C=n(18),D=n.n(C),N=function(e){var t=Object(a.useContext)(d),n=S();return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)("div",{className:D.a.main,children:[Object(c.jsx)("p",{children:"Minutnik"}),Object(c.jsxs)("div",{className:D.a.display,children:[Object(c.jsx)(v,{gardener:"23",identy:"hour"}),Object(c.jsx)(v,{gardener:"59",identy:"min"}),Object(c.jsx)(v,{gardener:"59",identy:"sec",end:!0})]}),Object(c.jsx)(O,{children:"Ustaw",classe:"buttSet",func:function(){var e=document.getElementById("hour").textContent,c=document.getElementById("min").textContent,a=document.getElementById("sec").textContent,i=new Date((new Date).getTime()+(3600*e*1e3+60*c*1e3+1e3*a)),o=new Date(i.getTime()-(new Date).getTime()),s=new Date(o-36e5).getHours(),r=new Date(o).getMinutes(),l=new Date(o).getSeconds(),j=Object(u.a)(t.countdowns);j.unshift({countdownTime:i,alarmClock:n(s,r,l),key:(new Date).getTime()}),t.addCountdowns(j)}})]}),Object(c.jsx)(w,{elements:t.countdowns,deleting:function(e){var n=t.countdowns.filter((function(t){return t.key!==e}));t.addCountdowns(n)}})]})},_=n(23),T=n.n(_),M=function(e){var t=Object(a.useContext)(d),n=S(),o=function(){t.addStopwatch("00:00:00:00"),t.changePlay(!1)};return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)("div",{className:T.a.main,children:[Object(c.jsx)("p",{children:"Stoper"}),Object(c.jsx)("p",{id:"Stopwatch",children:t.stopwatch}),Object(c.jsx)(O,{children:t.playState?"Stop":"Start",classe:"buttSet",func:function(){if("00:00:00:00"===t.stopwatch)t.setStartTimeSW((new Date).getTime());else{var e=Number(t.stopwatch.slice(0,2)),n=Number(t.stopwatch.slice(3,5)),c=Number(t.stopwatch.slice(6,8)),a=Number(t.stopwatch.slice(9,11)),i=(new Date).getTime()-(3600*e*1e3+60*n*1e3+1e3*c+10*a);t.setStartTimeSW(i)}t.changePlay((function(e){return!e}))}}),Object(c.jsx)(O,{children:"Zeruj",classe:"buttSet",func:o,onMDown:o}),Object(c.jsx)(O,{children:"Zapisz czas",classe:"buttSet",func:function(){var e=Number(t.stopwatch.slice(0,2)),c=Number(t.stopwatch.slice(3,5)),a=Number(t.stopwatch.slice(6,8)),i=Number(t.stopwatch.slice(9,11)),o=Object(u.a)(t.stopList);o.unshift({alarmClock:n(e,c,a,i),key:(new Date).getTime()}),t.addStopLists(o)}})]}),Object(c.jsx)(w,{elements:t.stopList,deleting:function(e){var n=t.stopList.filter((function(t){return t.key!==e}));t.addStopLists(n)}})]})},z=n(24),I=n.n(z),E=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(1),i=Object(l.a)(n,2),o=i[0],s=i[1],r=Object(a.useState)(1),u=Object(l.a)(r,2),j=u[0],d=u[1],b=Object(a.useState)(2021),m=Object(l.a)(b,2),f=m[0],p=m[1],h=Object(a.useState)(31),x=Object(l.a)(h,2),v=x[0],w=x[1],g=Object(a.useState)(0),y=Object(l.a)(g,2),S=y[0],k=y[1],C=function(e){w(e%4===0?e%100===0?e%400===0?29:28:29:28)};Object(a.useEffect)((function(){var e=j;"1"===e||"3"===e||"5"===e||"7"===e||"8"===e||"10"===e||"12"===e?w(31):"4"===e||"6"===e||"9"===e||"11"===e?w(30):"2"===e&&C(f)}),[f,j]),Object(a.useEffect)((function(){t.current.value>v&&s(v)}),[v]);return Object(c.jsxs)("div",{className:I.a.main,children:[Object(c.jsx)("input",{ref:t,type:"number",min:"1",max:v,onChange:function(e){s(e.target.value)},value:o}),Object(c.jsxs)("select",{name:"month",onChange:function(e){d(e.target.value);var t=e.target.value;"1"===t||"3"===t||"5"===t||"7"===t||"8"===t||"10"===t||"12"===t?w(31):"4"===t||"6"===t||"9"===t||"11"===t?w(30):"2"===t&&C(f)},value:j,children:[Object(c.jsx)("option",{value:"1",children:"Stycze\u0144"}),Object(c.jsx)("option",{value:"2",children:"Luty"}),Object(c.jsx)("option",{value:"3",children:"Marzec"}),Object(c.jsx)("option",{value:"4",children:"Kwiecie\u0144"}),Object(c.jsx)("option",{value:"5",children:"Maj"}),Object(c.jsx)("option",{value:"6",children:"Czerwiec"}),Object(c.jsx)("option",{value:"7",children:"Lipiec"}),Object(c.jsx)("option",{value:"8",children:"Sierpie\u0144"}),Object(c.jsx)("option",{value:"9",children:"Wrzesie\u0144"}),Object(c.jsx)("option",{value:"10",children:"Pa\u017adziernik"}),Object(c.jsx)("option",{value:"11",children:"Listopad"}),Object(c.jsx)("option",{value:"12",children:"Grudzie\u0144"})]}),Object(c.jsx)("input",{type:"number",min:"1970",onChange:function(e){p(e.target.value)},value:f}),Object(c.jsx)(O,{func:function(){var e=(new Date).setFullYear(f,j-1,o);if(e>new Date){var t=Math.floor((e-new Date)/864e5),n=t/30,c=t/365;k("zosta\u0142o dok\u0142adnie ".concat(t," dni to oko\u0142o ").concat(n.toFixed(2)," miesi\u0119cy i w przybli\u017ceniu ").concat(c.toFixed(2)," lat."))}else{var a=Math.floor((new Date-e)/864e5),i=a/30,s=i/12;k("mine\u0142o  dok\u0142adnie ".concat(a," dni to oko\u0142o ").concat(i.toFixed(2)," miesi\u0119cy i w przybli\u017ceniu ").concat(s.toFixed(2)," lat."))}},children:"Oblicz"}),Object(c.jsx)("h3",{children:S})]})},B=n(11),L=n.n(B),F=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)([]),b=Object(l.a)(s,2),m=b[0],O=b[1],f=Object(a.useState)([]),p=Object(l.a)(f,2),h=p[0],x=p[1],v=Object(a.useState)("00:00:00:00"),w=Object(l.a)(v,2),g=w[0],y=w[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),_=D[0],T=D[1],z=Object(a.useState)(!1),I=Object(l.a)(z,2),B=I[0],F=I[1],A=Object(a.useState)(0),W=Object(l.a)(A,2),P=W[0],U=W[1],H=S(),J=Object(a.useCallback)((function(){var e=(new Date).getTime()-P,t=Number(new Date(e-36e5).getHours()),n=Number(new Date(e).getMinutes()),c=Number(new Date(e).getSeconds()),a=Number(Math.floor(new Date(e).getMilliseconds()/10));y(H(t,n,c,a))}),[P,H]);Object(a.useEffect)((function(){var e;return B&&(e=setInterval(J,10)),function(){clearInterval(e)}}),[g,B,J]);var Z=Object(a.useCallback)((function(){var e=Number((new Date).getHours()),t=Number((new Date).getMinutes()),n=Number((new Date).getSeconds());o(H(e,t,n))}),[H]);Object(a.useEffect)((function(){var e=setInterval(Z,1e3);return function(){clearInterval(e)}}),[Z]);var q=Object(a.useCallback)((function(){Object(u.a)(m).map((function(e){return e.alarmClock.slice(0,8)===n&&(document.getElementById("audio").play(),window.alert("Budzik ustawiono na: "+n)),null}))}),[m,n]);Object(a.useEffect)((function(){var e=setInterval(q,500);return function(){clearInterval(e)}}),[n,q]);var K=Object(a.useCallback)((function(){var e=Object(u.a)(h),t=[],n=null;e.map((function(e,c){var a,i,o,s="";if(e.countdownTime<=new Date)document.getElementById("audio").play(),window.alert("Minutnik odliczy\u0142 do zera!!"),n=c;else{var r=new Date(e.countdownTime.getTime()+1e3-(new Date).getTime());o=new Date(r-36e5).getHours(),i=new Date(r).getMinutes(),a=new Date(r).getSeconds(),s=H(o,i,a)}return c!==n&&t.push({countdownTime:e.countdownTime,alarmClock:s,key:e.key}),null})),void 0!==t&&x(t)}),[h,H]);return Object(a.useEffect)((function(){var e=setInterval(K,1e3);return function(){clearInterval(e)}}),[h,K]),Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsxs)(d.Provider,{value:{addAlarms:function(e){O(Object(u.a)(e))},alarms:m,time:n,addCountdowns:function(e){x(Object(u.a)(e))},countdowns:h,addStopwatch:function(e){y(e)},addStopLists:function(e){T(Object(u.a)(e))},changePlay:function(e){F(e)},playState:B,stopwatch:g,stopList:_,startTimeSW:P,setStartTimeSW:U},children:[Object(c.jsxs)("nav",{className:L.a.navi,children:[Object(c.jsx)(r.b,{to:"/alarmclock",activeClassName:L.a.active,children:"Budzik"}),Object(c.jsx)(r.b,{to:"/countdowntimer",activeClassName:L.a.active,children:"Minutnik"}),Object(c.jsx)(r.b,{to:"/stopwatch",activeClassName:L.a.active,children:"Stoper"}),Object(c.jsx)(r.b,{to:"/countoutdays",activeClassName:L.a.active,children:"Odliczanie Dni"})]}),Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/alarmclock",component:k}),Object(c.jsx)(j.b,{path:"/countdowntimer",component:N}),Object(c.jsx)(j.b,{path:"/stopwatch",component:M}),Object(c.jsx)(j.b,{path:"/countoutdays",component:E}),Object(c.jsx)(j.a,{to:"/alarmclock"})]})]}),Object(c.jsx)("audio",{id:"audio",src:"http://greenmp3.pl/dzwonki/3541.mp3"})]})};s.a.render(Object(c.jsx)(r.a,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cea01f30.chunk.js.map