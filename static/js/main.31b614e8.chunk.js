(this["webpackJsonpreact-budzik"]=this["webpackJsonpreact-budzik"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a(1),c=a.n(s),i=a(8),r=a.n(i),o=(a(14),a(2)),u=a(3),j=a(6),l=a(5),b=a(4),h=(a(15),function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).czasownik=n.czasownik.bind(Object(j.a)(n)),n.state={czas:""},n}return Object(u.a)(a,[{key:"czasownik",value:function(){var t=new Date,e="",a=t.getHours();a<10&&(e+="0"),e=a+":";var n=t.getMinutes();n<10&&(e+="0"),e+=n+":";var s=t.getSeconds();s<10&&(e+="0"),e+=s,this.setState({czas:e})}},{key:"componentDidMount",value:function(){this.interval=setInterval(this.czasownik,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"zegarek",children:Object(n.jsx)("p",{children:this.state.czas})})}}]),a}(s.Component)),O=(a(16),a(17),function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("button",{onClick:this.props.funkcja,className:this.props.klasa,children:this.props.children})})}}]),a}(s.Component)),k=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsx)("span",{children:this.props.zawartosc})})}}]),a}(s.Component),z=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).alertor=n.alertor.bind(Object(j.a)(n)),n.zwieksz=n.zwieksz.bind(Object(j.a)(n)),n.zmiejsz=n.zmiejsz.bind(Object(j.a)(n)),n.state={wartosc:0},n}return Object(u.a)(a,[{key:"zwieksz",value:function(){this.state.wartosc<this.props.ogranicz?this.setState({wartosc:this.state.wartosc+1}):this.setState({wartosc:0})}},{key:"zmiejsz",value:function(){0==this.state.wartosc?this.setState({wartosc:this.props.ogranicz}):this.setState({wartosc:this.state.wartosc-1})}},{key:"alertor",value:function(){window.alert("bubu")}},{key:"render",value:function(){return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{className:"blok",children:[Object(n.jsx)(O,{children:"+",klasa:"guzikMaly",funkcja:this.zwieksz}),Object(n.jsx)(k,{zawartosc:this.state.wartosc}),Object(n.jsx)(O,{children:"-",klasa:"guzikMaly",funkcja:this.zmiejsz})]})})}}]),a}(s.Component);r.a.render(Object(n.jsxs)("div",{className:"ogol",children:[Object(n.jsx)(h,{}),Object(n.jsx)(z,{ogranicz:"23"}),Object(n.jsx)(z,{ogranicz:"59"}),Object(n.jsx)(z,{ogranicz:"59"}),Object(n.jsx)(O,{children:"Ustaw",klasa:"guzikUstaw"})]}),document.getElementById("kontener"))}],[[18,1,2]]]);
//# sourceMappingURL=main.31b614e8.chunk.js.map