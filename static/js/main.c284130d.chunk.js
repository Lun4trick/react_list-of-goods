(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(5),i=n(6),a=n(9),l=n(7),u=n(8),b=n(1),h=n.n(b),d=(n(14),n(15),n(2)),j=n.n(d),p=n(0),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType,c=s.NONE,o=s.ALPHABET,i=s.LENGTH,a=function(t,e){var n=e.sortType,r=e.isReversed,c=Object(u.a)(t);return n&&c.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r?c.reverse():(console.log(n,r),c)}(O,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button is-info",{"is-light":r!==o}),onClick:function(){return t.setState({sortType:o})},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button is-success",{"is-light":r!==i}),onClick:function(){return t.setState({sortType:i})},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button is-warning",{"is-light":!n}),onClick:function(){return t.setState({isReversed:!n})},children:"Reverse"}),(r!==c||n)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({sortType:c,isReversed:!1})},children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:a.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),n}(h.a.Component);c.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c284130d.chunk.js.map