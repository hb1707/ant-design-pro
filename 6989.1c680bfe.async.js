(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6989],{8212:function(X,P,o){"use strict";o.d(P,{Z:function(){return m}});var v=o(28991),g=o(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},G=l,N=o(27029),y=function(z,Y){return g.createElement(N.Z,(0,v.Z)((0,v.Z)({},z),{},{ref:Y,icon:G}))};y.displayName="EditOutlined";var m=g.forwardRef(y)},47828:function(){},59289:function(X,P,o){"use strict";o.d(P,{Z:function(){return pt}});var v=o(22122),g=o(96156),l=o(67294),G=o(94184),N=o.n(G),y=o(42550),m=o(65632),E=o(21687),z=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Y=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,d=r["aria-label"],c=r.setContentRef,p=r.children,f=z(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,E.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,y.sQ)(i,c)),l.createElement(m.C,null,function(O){var C=O.getPrefixCls,$=O.direction,L=a,S=C("typography",e),w=N()(S,(0,g.Z)({},"".concat(S,"-rtl"),$==="rtl"),s);return l.createElement(L,(0,v.Z)({className:w,"aria-label":d,ref:u},f),p)})},Q=l.forwardRef(Y);Q.displayName="Typography";var V=Q,b=V,B=o(90484),te=o(98423),k=o(85061),q=o(6610),xe=o(5991),be=o(10379),Oe=o(60446),ae=o(50344),Se=o(20640),Te=o.n(Se),Ze=o(8212),Pe=o(79508),Ne=o(99165),Re=o(48717),Le=o(39559),De=o(42051),ve=o(34952),oe=o(32637),ye=o(79370),le=o(69713),we=o(28481),he=o(15105),me=o(28991),Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ae=Ie,Me=o(27029),ge=function(r,i){return l.createElement(Me.Z,(0,me.Z)((0,me.Z)({},r),{},{ref:i,icon:Ae}))};ge.displayName="EnterOutlined";var je=l.forwardRef(ge),ke=o(45839),$e=o(96159),Ue=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,d=r.maxLength,c=r.autoSize,p=c===void 0?!0:c,f=r.value,u=r.onSave,O=r.onCancel,C=r.onEnd,$=r.enterIcon,L=$===void 0?l.createElement(je,null):$,S=l.useRef(),w=l.useRef(!1),H=l.useRef(),U=l.useState(f),h=(0,we.Z)(U,2),x=h[0],R=h[1];l.useEffect(function(){R(f)},[f]),l.useEffect(function(){if(S.current&&S.current.resizableTextArea){var A=S.current.resizableTextArea.textArea;A.focus();var Z=A.value.length;A.setSelectionRange(Z,Z)}},[]);var D=function(Z){var j=Z.target;R(j.value.replace(/[\n\r]/g,""))},K=function(){w.current=!0},I=function(){w.current=!1},ee=function(Z){var j=Z.keyCode;w.current||(H.current=j)},M=function(){u(x.trim())},J=function(Z){var j=Z.keyCode,W=Z.ctrlKey,pe=Z.altKey,ue=Z.metaKey,fe=Z.shiftKey;H.current===j&&!w.current&&!W&&!pe&&!ue&&!fe&&(j===he.Z.ENTER?(M(),C==null||C()):j===he.Z.ESC&&O())},ie=function(){M()},F=N()(i,"".concat(i,"-edit-content"),(0,g.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return l.createElement("div",{className:F,style:a},l.createElement(ke.Z,{ref:S,maxLength:d,value:x,onChange:D,onKeyDown:ee,onKeyUp:J,onCompositionStart:K,onCompositionEnd:I,onBlur:ie,"aria-label":e,autoSize:p}),L!==null?(0,$e.Tm)(L,{className:"".concat(i,"-edit-content-confirm")}):null)},Ke=Ue,se=o(73935),ze=1,Be=3,He=8,T,ce={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function We(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function Fe(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}function Ee(n,r){n.setAttribute("aria-hidden","true");var i=window.getComputedStyle(r),e=We(i);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.paddingTop="0",n.style.paddingBottom="0",n.style.borderTopWidth="0",n.style.borderBottomWidth="0",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function Ge(n){var r=document.createElement("div");Ee(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var i=r.getBoundingClientRect().height;return document.body.removeChild(r),i}var Ve=function(n,r,i,e,t){T||(T=document.createElement("div"),T.setAttribute("aria-hidden","true")),T.parentNode||document.body.appendChild(T);var a=r.rows,s=r.suffix,d=s===void 0?"":s,c=Ge(n),p=Math.round(c*a*100)/100;Ee(T,n);var f=Fe((0,ae.Z)(i));(0,se.render)(l.createElement("div",{style:ce},l.createElement("span",{style:ce},f,d),l.createElement("span",{style:ce},e)),T);function u(){var h=Math.round(T.getBoundingClientRect().height*100)/100;return h-.1<=p}if(u())return(0,se.unmountComponentAtNode)(T),{content:i,text:T.innerHTML,ellipsis:!1};var O=Array.prototype.slice.apply(T.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(h){var x=h.nodeType;return x!==He}),C=Array.prototype.slice.apply(T.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,se.unmountComponentAtNode)(T);var $=[];T.innerHTML="";var L=document.createElement("span");T.appendChild(L);var S=document.createTextNode(t+d);L.appendChild(S),C.forEach(function(h){T.appendChild(h)});function w(h){L.insertBefore(h,S)}function H(h,x){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,D=arguments.length>3&&arguments[3]!==void 0?arguments[3]:x.length,K=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,I=Math.floor((R+D)/2),ee=x.slice(0,I);if(h.textContent=ee,R>=D-1)for(var M=D;M>=R;M-=1){var J=x.slice(0,M);if(h.textContent=J,u()||!J)return M===x.length?{finished:!1,reactNode:x}:{finished:!0,reactNode:J}}return u()?H(h,x,I,D,I):H(h,x,R,I,K)}function U(h,x){var R=h.nodeType;if(R===ze)return w(h),u()?{finished:!1,reactNode:f[x]}:(L.removeChild(h),{finished:!0,reactNode:null});if(R===Be){var D=h.textContent||"",K=document.createTextNode(D);return w(K),H(K,D)}return{finished:!1,reactNode:null}}return O.some(function(h,x){var R=U(h,x),D=R.finished,K=R.reactNode;return K&&$.push(K),D}),{content:$,text:T.innerHTML,ellipsis:!0}},Xe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Qe=(0,ye.G)("webkitLineClamp"),Je=(0,ye.G)("textOverflow");function Ye(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,d=n.keyboard,c=n.italic,p=r;function f(u,O){!u||(p=l.createElement(O,{},p))}return f(s,"strong"),f(t,"u"),f(a,"del"),f(e,"code"),f(i,"mark"),f(d,"kbd"),f(c,"i"),p}function ne(n,r,i){return n===!0||n===void 0?r:n||i&&r}var Ce="...",de=function(n){(0,be.Z)(i,n);var r=(0,Oe.Z)(i);function i(){var e;return(0,q.Z)(this,i),e=r.apply(this,arguments),e.contentRef=l.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),d=s.onExpand;e.setState({expanded:!0}),(a=d)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,d=a.copyable,c=(0,v.Z)({},(0,B.Z)(d)==="object"?d:null);c.text===void 0&&(c.text=String(s)),Te()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){oe.Z.cancel(e.rafId),e.rafId=(0,oe.Z)(function(){e.syncEllipsis()})},e}return(0,xe.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),d=this.getEllipsis(t);(a!==t.children||s.rows!==d.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),oe.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,d=s.editable;return d?(0,v.Z)({editing:a},(0,B.Z)(d)==="object"?d:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,v.Z)({rows:1,expandable:!1},(0,B.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,d=a.copyable,c=this.getEllipsis(),p=c.rows,f=c.expandable,u=c.suffix,O=c.onEllipsis,C=c.tooltip;return u||C||s||d||f||!t||O?!1:p===1?Je:Qe}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,d=t.expanded,c=this.getEllipsis(),p=c.rows,f=c.suffix,u=c.onEllipsis,O=this.props.children;if(!(!p||p<0||!this.contentRef.current||d)&&!this.canUseCSSEllipsis()){(0,E.Z)((0,ae.Z)(O).every(function(w){return typeof w=="string"}),"Typography","`ellipsis` should use string as children only.");var C=Ve(this.contentRef.current,{rows:p,suffix:f},O,this.renderOperations(!0),Ce),$=C.content,L=C.text,S=C.ellipsis;(a!==L||s!==S)&&(this.setState({ellipsisText:L,ellipsisContent:$,isEllipsis:S}),s!==S&&u&&u(S))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,d=a.symbol,c=this.state,p=c.expanded,f=c.isEllipsis;if(!s||!t&&(p||!f))return null;var u;return d?u=d:u=this.expandStr,l.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,d=t.triggerType,c=d===void 0?["icon"]:d,p=(0,ae.Z)(s)[0]||this.editStr,f=typeof p=="string"?p:"";return c.indexOf("icon")!==-1?l.createElement(le.Z,{key:"edit",title:s===!1?"":p},l.createElement(ve.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":f},a||l.createElement(Ze.Z,{role:"button"}))):null}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),d=a.tooltips,c=a.icon,p=Array.isArray(d)?d:[d],f=Array.isArray(c)?c:[c],u=t?ne(p[1],this.copiedStr):ne(p[0],this.copyStr),O=t?this.copiedStr:this.copyStr,C=typeof u=="string"?u:O;return l.createElement(le.Z,{key:"copy",title:u},l.createElement(ve.Z,{className:N()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":C},t?ne(f[1],l.createElement(Pe.Z,null),!0):ne(f[0],l.createElement(Ne.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,d=t.style,c=this.context.direction,p=this.getEditable(),f=p.maxLength,u=p.autoSize,O=p.onEnd,C=p.enterIcon;return l.createElement(Ke,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:O,prefixCls:this.getPrefixCls(),className:s,style:d,direction:c,maxLength:f,autoSize:u,enterIcon:C})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,d=a.isEllipsis,c=a.expanded,p=this.props,f=p.component,u=p.children,O=p.className,C=p.type,$=p.disabled,L=p.style,S=Xe(p,["component","children","className","type","disabled","style"]),w=this.context.direction,H=this.getEllipsis(),U=H.rows,h=H.suffix,x=H.tooltip,R=this.getEditable(),D=R.triggerType,K=D===void 0?["icon"]:D,I=this.getPrefixCls(),ee=(0,te.Z)(S,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,k.Z)(Le.nf))),M=this.canUseCSSEllipsis(),J=U===1&&M,ie=U&&U>1&&M,F=u;if(U&&d&&!c&&!M){var A=S.title,Z=A||"";!A&&(typeof u=="string"||typeof u=="number")&&(Z=String(u)),Z=Z.slice(String(s||"").length),F=l.createElement(l.Fragment,null,s,l.createElement("span",{title:Z,"aria-hidden":"true"},Ce),h),x&&(F=l.createElement(le.Z,{title:x===!0?u:x},l.createElement("span",null,F)))}else F=l.createElement(l.Fragment,null,u,h);return F=Ye(this.props,F),l.createElement(De.Z,{componentName:"Text"},function(j){var W,pe=j.edit,ue=j.copy,fe=j.copied,ut=j.expand;return t.editStr=pe,t.copyStr=ue,t.copiedStr=fe,t.expandStr=ut,l.createElement(Re.Z,{onResize:t.resizeOnNextFrame,disabled:M},l.createElement(b,(0,v.Z)({className:N()((W={},(0,g.Z)(W,"".concat(I,"-").concat(C),C),(0,g.Z)(W,"".concat(I,"-disabled"),$),(0,g.Z)(W,"".concat(I,"-ellipsis"),U),(0,g.Z)(W,"".concat(I,"-single-line"),U===1&&!d),(0,g.Z)(W,"".concat(I,"-ellipsis-single-line"),J),(0,g.Z)(W,"".concat(I,"-ellipsis-multiple-line"),ie),W),O),style:(0,v.Z)((0,v.Z)({},L),{WebkitLineClamp:ie?U:void 0}),component:f,ref:t.contentRef,direction:w,onClick:K.indexOf("text")!==-1?t.onEditClick:function(){}},ee),F,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,E.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(l.Component);de.contextType=m.E_,de.defaultProps={children:""};var re=de,qe=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},_e=function(r){var i=r.ellipsis,e=qe(r,["ellipsis"]),t=l.useMemo(function(){return i&&(0,B.Z)(i)==="object"?(0,te.Z)(i,["expandable","rows"]):i},[i]);return(0,E.Z)((0,B.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),l.createElement(re,(0,v.Z)({},e,{ellipsis:t,component:"span"}))},et=_e,tt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},nt=function(r,i){var e=r.ellipsis,t=r.rel,a=tt(r,["ellipsis","rel"]);(0,E.Z)((0,B.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=l.useRef(null);l.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var d=(0,v.Z)((0,v.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete d.navigate,l.createElement(re,(0,v.Z)({},d,{ref:s,ellipsis:!!e,component:"a"}))},rt=l.forwardRef(nt),it=o(93355),at=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},ot=(0,it.a)(1,2,3,4,5),lt=function(r){var i=r.level,e=i===void 0?1:i,t=at(r,["level"]),a;return ot.indexOf(e)!==-1?a="h".concat(e):((0,E.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),l.createElement(re,(0,v.Z)({},t,{component:a}))},st=lt,ct=function(r){return l.createElement(re,(0,v.Z)({},r,{component:"div"}))},dt=ct,_=b;_.Text=et,_.Link=rt,_.Title=st,_.Paragraph=dt;var pt=_},402:function(X,P,o){"use strict";var v=o(38663),g=o.n(v),l=o(47828),G=o.n(l),N=o(22385),y=o(47673)},20640:function(X,P,o){"use strict";var v=o(11742),g={"text/plain":"Text","text/html":"Url",default:"Text"},l="Copy to clipboard: #{key}, Enter";function G(y){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,m)}function N(y,m){var E,z,Y,Q,V,b,B=!1;m||(m={}),E=m.debug||!1;try{Y=v(),Q=document.createRange(),V=document.getSelection(),b=document.createElement("span"),b.textContent=y,b.style.all="unset",b.style.position="fixed",b.style.top=0,b.style.clip="rect(0, 0, 0, 0)",b.style.whiteSpace="pre",b.style.webkitUserSelect="text",b.style.MozUserSelect="text",b.style.msUserSelect="text",b.style.userSelect="text",b.addEventListener("copy",function(k){if(k.stopPropagation(),m.format)if(k.preventDefault(),typeof k.clipboardData=="undefined"){E&&console.warn("unable to use e.clipboardData"),E&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var q=g[m.format]||g.default;window.clipboardData.setData(q,y)}else k.clipboardData.clearData(),k.clipboardData.setData(m.format,y);m.onCopy&&(k.preventDefault(),m.onCopy(k.clipboardData))}),document.body.appendChild(b),Q.selectNodeContents(b),V.addRange(Q);var te=document.execCommand("copy");if(!te)throw new Error("copy command was unsuccessful");B=!0}catch(k){E&&console.error("unable to copy using execCommand: ",k),E&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",y),m.onCopy&&m.onCopy(window.clipboardData),B=!0}catch(q){E&&console.error("unable to copy using clipboardData: ",q),E&&console.error("falling back to prompt"),z=G("message"in m?m.message:l),window.prompt(z,y)}}finally{V&&(typeof V.removeRange=="function"?V.removeRange(Q):V.removeAllRanges()),b&&document.body.removeChild(b),Y()}return B}X.exports=N},79370:function(X,P,o){"use strict";o.d(P,{G:function(){return G}});var v=o(98924),g=function(y){if((0,v.Z)()&&window.document.documentElement){var m=Array.isArray(y)?y:[y],E=window.document.documentElement;return m.some(function(z){return z in E.style})}return!1},l=function(y,m){if(!g(y))return!1;var E=document.createElement("div"),z=E.style[y];return E.style[y]=m,E.style[y]!==z};function G(N,y){return!Array.isArray(N)&&y!==void 0?l(N,y):g(N)}},11742:function(X){X.exports=function(){var P=document.getSelection();if(!P.rangeCount)return function(){};for(var o=document.activeElement,v=[],g=0;g<P.rangeCount;g++)v.push(P.getRangeAt(g));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return P.removeAllRanges(),function(){P.type==="Caret"&&P.removeAllRanges(),P.rangeCount||v.forEach(function(l){P.addRange(l)}),o&&o.focus()}}}}]);