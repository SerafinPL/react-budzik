(this["webpackJsonpreact-budzik"]=this["webpackJsonpreact-budzik"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n(4),s=n.n(i),r=(n(14),n(5)),o=n(6),u=n(2),l=n(8),v=n(7),b=(n(15),function(e){Object(l.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).czasownik=a.czasownik.bind(Object(u.a)(a)),a.state={czas:""},a}return Object(o.a)(n,[{key:"czasownik",value:function(){var e=new Date,t="",n=e.getHours();n<10&&(t+="0"),t=n+":";var a=e.getMinutes();a<10&&(t+="0"),t+=a+":";var c=e.getSeconds();c<10&&(t+="0"),t+=c,this.setState({czas:t})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.czasownik,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"zegarek",children:Object(a.jsx)("p",{children:this.state.czas})})}}]),n}(c.Component));s.a.render(Object(a.jsx)("div",{children:Object(a.jsx)(b,{})}),document.getElementById("kontener"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2c9e2001.chunk.js.map