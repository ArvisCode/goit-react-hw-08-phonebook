"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[217],{5834:function(n,e,r){r.d(e,{W:function(){return d}});var t,i,o=r(168),a=r(6031),s=a.ZP.div(t||(t=(0,o.Z)(["\n  width: 900px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),c=a.ZP.h2(i||(i=(0,o.Z)(["\n  font-size: 40px;\n  text-transform: uppercase;\n  font-weight: 700;\n  padding: 40px;\n"]))),l=r(184),d=function(n){var e=n.children,r=n.title;return(0,l.jsxs)(s,{children:[r&&(0,l.jsx)(c,{children:r}),e]})}},2217:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,i,o,a,s,c,l,d,u,p,x,f,h=r(5834),g=r(8152),m=r(2791),b=r(168),j=r(6031),Z=j.ZP.label(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),v=j.ZP.span(i||(i=(0,b.Z)(["\n  font-weight: 700;\n  padding: 10px;\n"]))),w=j.ZP.input(o||(o=(0,b.Z)(["\n  height: 40px;\n  width: 800px;\n  padding: 5px 10px;\n\n  font-size: 14px;\n  color: #000;\n\n  outline: none;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 3px;\n\n  :focus {\n    border-color: rgb(111, 111, 207);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),y=j.ZP.button(a||(a=(0,b.Z)(["\n  margin: 15px;\n  height: 50px;\n  width: 200px;\n  font-weight: 500;\n\n  font-size: 24px;\n  color: #fff;\n  background-color: #0084ff;\n  border: none;\n  border-radius: 6px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  cursor: pointer;\n  transition: background-color, color 250ms linear;\n\n  :hover,\n  :focus {\n    background-color: #000cb6b7;\n    color: #000;\n  }\n"]))),P=r(5562),C=r(9434),k=r(8361),z=function(n){return n.contacts.items},_=function(n){return n.contacts.filter},A=r(184),I=function(){var n=(0,m.useState)(""),e=(0,g.Z)(n,2),r=e[0],t=e[1],i=(0,m.useState)(""),o=(0,g.Z)(i,2),a=o[0],s=o[1],c=(0,C.v9)(z),l=(0,C.I0)(),d=function(){t(""),s("")};return(0,A.jsxs)("form",{onSubmit:function(n){n.preventDefault();var e={name:r,number:a};c.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?P.Report.warning("".concat(r),"This user is already in the contact list.","OK"):(l((0,k.uK)(e)),d())},children:[(0,A.jsxs)(Z,{children:[(0,A.jsx)(v,{children:"Name"}),(0,A.jsx)(w,{onChange:function(n){return t(n.currentTarget.value)},type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,A.jsxs)(Z,{children:[(0,A.jsx)(v,{children:"Number"}),(0,A.jsx)(w,{onChange:function(n){return s(n.currentTarget.value)},type:"tel",name:"number",value:a,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(y,{type:"submit",children:"Add contact"})]})},q=j.ZP.div(s||(s=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n"]))),F=j.ZP.span(c||(c=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: #0084ff;\n  color: #fff;\n\n  margin-right: 30px;\n  padding: 15px;\n"]))),L=j.ZP.p(l||(l=(0,b.Z)(["\n  font-weight: 700;\n  margin-right: 30px;\n"]))),T=j.ZP.button(d||(d=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 50px;\n  height: 50px;\n  padding: 0px;\n\n  border: none;\n  background-color: #fff;\n  color: rgb(111, 111, 207);\n\n  cursor: pointer;\n  transition: color 250ms linear;\n\n  :hover,\n  :focus {\n    color: rgb(111, 111, 207);\n  }\n"]))),K=r(6355),N=r(6036),S=function(n){var e=n.name,r=n.number,t=n.id,i=(0,C.I0)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(q,{children:[(0,A.jsx)(F,{children:(0,A.jsx)(K.Xws,{})}),(0,A.jsx)("p",{children:e})]}),(0,A.jsxs)(q,{children:[(0,A.jsx)(L,{children:r}),(0,A.jsx)(T,{type:"button",onClick:function(){return i((0,k.GK)(t))},children:(0,A.jsx)(N.bqj,{size:"50px"})})]})]})},W=j.ZP.li(u||(u=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px;\n"]))),B=function(){var n=(0,C.I0)(),e=(0,C.v9)(z),r=(0,C.v9)(_);(0,m.useEffect)((function(){n((0,k.yF)())}),[n]);var t=function(){var n=r.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return e&&(0,A.jsx)("ul",{children:t.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,A.jsx)(W,{children:(0,A.jsx)(S,{name:r,number:t,id:e})},e)}))})},D=r(1538),E=j.ZP.label(p||(p=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"]))),G=j.ZP.p(x||(x=(0,b.Z)(["\n  font-weight: 500;\n  margin: 5px;\n"]))),J=j.ZP.input(f||(f=(0,b.Z)(["\n  height: 40px;\n  width: 800px;\n  padding: 5px 10px;\n\n  font-size: 14px;\n  color: #000;\n\n  outline: none;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 3px;\n\n  :focus {\n    border-color: rgb(111, 111, 207);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),M=function(){var n=(0,C.I0)();return(0,A.jsxs)(E,{children:[(0,A.jsx)(G,{children:"Input search query"}),(0,A.jsx)(J,{type:"text",onChange:function(e){return n(D.g.actions.filteredContact(e.currentTarget.value))},name:"filter"})]})};function O(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(h.W,{children:(0,A.jsx)(I,{})}),(0,A.jsxs)(h.W,{title:"Contacts",children:[(0,A.jsx)(M,{}),(0,A.jsx)(B,{})]})]})}}}]);
//# sourceMappingURL=217.2f25ad69.chunk.js.map