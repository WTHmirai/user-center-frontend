(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[311],{64335:function(Oe,ne,n){"use strict";var g=n(67294),O=(0,g.createContext)({});ne.Z=O},85224:function(Oe,ne,n){"use strict";var g=n(28991),O=n(84305),j=n(39559),V=n(81253),T=n(85893),u=n(94184),R=n.n(u),q=n(97435),K=n(67294),I=n(64335),k=n(56264),ye=n.n(k),J=["children","className","extra","style","renderContent"],ce=function(o){var G=o.children,ie=o.className,de=o.extra,Te=o.style,me=o.renderContent,Be=(0,V.Z)(o,J),ue=(0,K.useContext)(j.ZP.ConfigContext),be=ue.getPrefixCls,Ee=o.prefixCls||be("pro"),ve="".concat(Ee,"-footer-bar"),E=(0,K.useContext)(I.Z),Me=(0,K.useMemo)(function(){var oe=E.hasSiderMenu,Se=E.isMobile,ge=E.siderWidth;if(!!oe)return ge?Se?"100%":"calc(100% - ".concat(ge,"px)"):"100%"},[E.collapsed,E.hasSiderMenu,E.isMobile,E.siderWidth]),he=(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"".concat(ve,"-left"),children:de}),(0,T.jsx)("div",{className:"".concat(ve,"-right"),children:G})]});return(0,K.useEffect)(function(){return!E||!(E==null?void 0:E.setHasFooterToolbar)?function(){}:(E==null||E.setHasFooterToolbar(!0),function(){var oe;E==null||(oe=E.setHasFooterToolbar)===null||oe===void 0||oe.call(E,!1)})},[]),(0,T.jsx)("div",(0,g.Z)((0,g.Z)({className:R()(ie,"".concat(ve)),style:(0,g.Z)({width:Me},Te)},(0,q.Z)(Be,["prefixCls"])),{},{children:me?me((0,g.Z)((0,g.Z)((0,g.Z)({},o),E),{},{leftWidth:Me}),he):he}))};ne.Z=ce},81907:function(Oe,ne,n){"use strict";n.d(ne,{ZP:function(){return Kt}});var g=n(38663),O=n(70883),j=n(22122),V=n(96156),T=n(6610),u=n(5991),R=n(46070),q=n(51814),K=n(77608),I=n(10379),k=n(90484),ye=n(94184),J=n.n(ye),ce=n(48717),re=n(98423),o=n(67294),G=n(53124),ie=n(85061),de=n(75164);function Te(i){var e,t=function(s){return function(){e=null,i.apply(void 0,(0,ie.Z)(s))}},a=function(){if(e==null){for(var s=arguments.length,c=new Array(s),f=0;f<s;f++)c[f]=arguments[f];e=(0,de.Z)(t(c))}};return a.cancel=function(){de.Z.cancel(e),e=null},a}function me(){return function(e,t,a){var r=a.value,s=!1;return{configurable:!0,get:function(){if(s||this===e.prototype||this.hasOwnProperty(t))return r;var f=Te(r.bind(this));return s=!0,Object.defineProperty(this,t,{value:f,configurable:!0,writable:!0}),s=!1,f}}}}var Be=n(64019);function ue(i){return i!==window?i.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function be(i,e,t){if(t!==void 0&&e.top>i.top-t)return t+e.top}function Ee(i,e,t){if(t!==void 0&&e.bottom<i.bottom+t){var a=window.innerHeight-e.bottom;return t+a}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],E=[];function Me(){return E}function he(i,e){if(!!i){var t=E.find(function(a){return a.target===i});t?t.affixList.push(e):(t={target:i,affixList:[e],eventHandlers:{}},E.push(t),ve.forEach(function(a){t.eventHandlers[a]=(0,Be.Z)(i,a,function(){t.affixList.forEach(function(r){r.lazyUpdatePosition()})})}))}}function oe(i){var e=E.find(function(t){var a=t.affixList.some(function(r){return r===i});return a&&(t.affixList=t.affixList.filter(function(r){return r!==i})),a});e&&e.affixList.length===0&&(E=E.filter(function(t){return t!==e}),ve.forEach(function(t){var a=e.eventHandlers[t];a&&a.remove&&a.remove()}))}function Se(i,e,t){return e=(0,K.Z)(e),(0,R.Z)(i,(0,q.Z)()?Reflect.construct(e,t||[],(0,K.Z)(i).constructor):e.apply(i,t))}var ge=function(i,e,t,a){var r=arguments.length,s=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,c;if((typeof Reflect=="undefined"?"undefined":(0,k.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,a);else for(var f=i.length-1;f>=0;f--)(c=i[f])&&(s=(r<3?c(s):r>3?c(e,t,s):c(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s};function He(){return typeof window!="undefined"?window:null}var le;(function(i){i[i.None=0]="None",i[i.Prepare=1]="Prepare"})(le||(le={}));var Ze=function(i){(0,I.Z)(e,i);function e(){var t;return(0,T.Z)(this,e),t=Se(this,e,arguments),t.state={status:le.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,r=a.offsetBottom,s=a.offsetTop;return r===void 0&&s===void 0?0:s},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,r=a.status,s=a.lastAffix,c=t.props.onChange,f=t.getTargetFunc();if(!(r!==le.Prepare||!t.fixedNode||!t.placeholderNode||!f)){var h=t.getOffsetTop(),v=t.getOffsetBottom(),C=f();if(!!C){var m={status:le.None},P=ue(C),x=ue(t.placeholderNode),y=be(x,P,h),M=Ee(x,P,v);x.top===0&&x.left===0&&x.width===0&&x.height===0||(y!==void 0?(m.affixStyle={position:"fixed",top:y,width:x.width,height:x.height},m.placeholderStyle={width:x.width,height:x.height}):M!==void 0&&(m.affixStyle={position:"fixed",bottom:M,width:x.width,height:x.height},m.placeholderStyle={width:x.width,height:x.height}),m.lastAffix=!!m.affixStyle,c&&s!==m.lastAffix&&c(m.lastAffix),t.setState(m))}}},t.prepareMeasure=function(){if(t.setState({status:le.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,u.Z)(e,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,r=this.props.target;return r!==void 0?r:a!=null?a:He}},{key:"componentDidMount",value:function(){var a=this,r=this.getTargetFunc();r&&(this.timeout=setTimeout(function(){he(r(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var r=this.state.prevTarget,s=this.getTargetFunc(),c=(s==null?void 0:s())||null;r!==c&&(oe(this),c&&(he(c,this),this.updatePosition()),this.setState({prevTarget:c})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),oe(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),r=this.state.affixStyle;if(a&&r){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var h=ue(f),v=ue(this.placeholderNode),C=be(v,h,s),m=Ee(v,h,c);if(C!==void 0&&r.top===C||m!==void 0&&r.bottom===m)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,r=this.state,s=r.affixStyle,c=r.placeholderStyle,f=this.props,h=f.affixPrefixCls,v=f.children,C=J()((0,V.Z)({},h,!!s)),m=(0,re.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return o.createElement(ce.Z,{onResize:function(){a.updatePosition()}},o.createElement("div",(0,j.Z)({},m,{ref:this.savePlaceholderNode}),s&&o.createElement("div",{style:c,"aria-hidden":"true"}),o.createElement("div",{className:C,ref:this.saveFixedNode,style:s},o.createElement(ce.Z,{onResize:function(){a.updatePosition()}},v))))}}]),e}(o.Component);Ze.contextType=G.E_,ge([me()],Ze.prototype,"updatePosition",null),ge([me()],Ze.prototype,"lazyUpdatePosition",null);var Ke=o.forwardRef(function(i,e){var t=i.prefixCls,a=o.useContext(G.E_),r=a.getPrefixCls,s=r("affix",t),c=(0,j.Z)((0,j.Z)({},i),{affixPrefixCls:s});return o.createElement(Ze,(0,j.Z)({},c,{ref:e}))}),ke=Ke,xe=n(84305),De=n(39559),qe=n(59903),A=n(94233),l=n(81262),b=n(59250),w=n(30887),F=n(49111),Z=n(28481),d=n(28991),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},B=L,N=n(27029),$=function(e,t){return o.createElement(N.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:B}))},z=o.forwardRef($),ee=z,Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ge=Ce,we=function(e,t){return o.createElement(N.Z,(0,d.Z)((0,d.Z)({},e),{},{ref:t,icon:Ge}))},Ve=o.forwardRef(we),Xe=Ve,te=n(30470),Ne=n(51890),pe=n(50344),Re=n(18515),Le=n(96159),Ye=n(57254),$e=n(40383),We=function(i,e){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(i);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(i,a[r])&&(t[a[r]]=i[a[r]]);return t},Fe=function(e){var t=e.prefixCls,a=e.separator,r=a===void 0?"/":a,s=e.children,c=e.menu,f=e.overlay,h=e.dropdownProps,v=We(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),C=o.useContext(G.E_),m=C.getPrefixCls,P=m("breadcrumb",t),x=function(S){if(c||f){var D=(0,j.Z)({},h);return"overlay"in e&&(D.overlay=f),o.createElement($e.Z,(0,j.Z)({menu:c,placement:"bottom"},D),o.createElement("span",{className:"".concat(P,"-overlay-link")},S,o.createElement(Ye.Z,null)))}return S},y;return"href"in v?y=o.createElement("a",(0,j.Z)({className:"".concat(P,"-link")},v),s):y=o.createElement("span",(0,j.Z)({className:"".concat(P,"-link")},v),s),y=x(y),s!=null?o.createElement("li",null,y,r&&o.createElement("span",{className:"".concat(P,"-separator")},r)):null};Fe.__ANT_BREADCRUMB_ITEM=!0;var Ae=Fe,Ue=function(e){var t=e.children,a=o.useContext(G.E_),r=a.getPrefixCls,s=r("breadcrumb");return o.createElement("span",{className:"".concat(s,"-separator")},t||"/")};Ue.__ANT_BREADCRUMB_SEPARATOR=!0;var Je=Ue,vt=function(i,e){var t={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(t[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(i);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(i,a[r])&&(t[a[r]]=i[a[r]]);return t};function mt(i,e){if(!i.breadcrumbName)return null;var t=Object.keys(e).join("|"),a=i.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(r,s){return e[s]||r});return a}function ht(i,e,t,a){var r=t.indexOf(i)===t.length-1,s=mt(i,e);return r?o.createElement("span",null,s):o.createElement("a",{href:"#/".concat(a.join("/"))},s)}var et=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(a){e=e.replace(":".concat(a),t[a])}),e},gt=function(e,t,a){var r=(0,ie.Z)(e),s=et(t||"",a);return s&&r.push(s),r},Qe=function(e){var t=e.prefixCls,a=e.separator,r=a===void 0?"/":a,s=e.style,c=e.className,f=e.routes,h=e.children,v=e.itemRender,C=v===void 0?ht:v,m=e.params,P=m===void 0?{}:m,x=vt(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),y=o.useContext(G.E_),M=y.getPrefixCls,S=y.direction,D,X=M("breadcrumb",t);if(f&&f.length>0){var U=[];D=f.map(function(H){var Q=et(H.path,P);Q&&U.push(Q);var ae;H.children&&H.children.length&&(ae=o.createElement(Re.Z,{items:H.children.map(function(_){return{key:_.path||_.breadcrumbName,label:C(_,P,f,gt(U,_.path,P))}})}));var se={separator:r};return ae&&(se.overlay=ae),o.createElement(Ae,(0,j.Z)({},se,{key:Q||H.breadcrumbName}),C(H,P,f,U))})}else h&&(D=(0,pe.Z)(h).map(function(H,Q){return H&&(0,Le.Tm)(H,{separator:r,key:Q})}));var W=J()(X,(0,V.Z)({},"".concat(X,"-rtl"),S==="rtl"),c);return o.createElement("nav",(0,j.Z)({className:W,style:s},x),o.createElement("ol",null,D))};Qe.Item=Ae,Qe.Separator=Je;var xt=Qe,Ct=xt,Pt=n(42051),yt=n(19650),bt=n(34952),Et=function(e,t,a){return!t||!a?null:o.createElement(Pt.Z,{componentName:"PageHeader"},function(r){return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(bt.Z,{onClick:function(c){a==null||a(c)},className:"".concat(e,"-back-button"),"aria-label":r.back},t))})},Zt=function(e){return o.createElement(Ct,(0,j.Z)({},e))},Nt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?o.createElement(Xe,null):o.createElement(ee,null)},pt=function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",r=t.title,s=t.avatar,c=t.subTitle,f=t.tags,h=t.extra,v=t.onBack,C="".concat(e,"-heading"),m=r||c||f||h;if(!m)return null;var P=Nt(t,a),x=Et(e,P,v),y=x||s||m;return o.createElement("div",{className:C},y&&o.createElement("div",{className:"".concat(C,"-left")},x,s&&o.createElement(Ne.C,(0,j.Z)({},s)),r&&o.createElement("span",{className:"".concat(C,"-title"),title:typeof r=="string"?r:void 0},r),c&&o.createElement("span",{className:"".concat(C,"-sub-title"),title:typeof c=="string"?c:void 0},c),f&&o.createElement("span",{className:"".concat(C,"-tags")},f)),h&&o.createElement("span",{className:"".concat(C,"-extra")},o.createElement(yt.Z,null,h)))},Rt=function(e,t){return t?o.createElement("div",{className:"".concat(e,"-footer")},t):null},Ot=function(e,t){return o.createElement("div",{className:"".concat(e,"-content")},t)},Tt=function(e){var t=(0,te.Z)(!1),a=(0,Z.Z)(t,2),r=a[0],s=a[1],c=function(h){var v=h.width;s(v<768,!0)};return o.createElement(G.C,null,function(f){var h=f.getPrefixCls,v=f.pageHeader,C=f.direction,m,P=e.prefixCls,x=e.style,y=e.footer,M=e.children,S=e.breadcrumb,D=e.breadcrumbRender,X=e.className,U=!0;"ghost"in e?U=e.ghost:v&&"ghost"in v&&(U=v.ghost);var W=h("page-header",P),H=function(){return(S==null?void 0:S.routes)?Zt(S):null},Q=H(),ae=S&&"props"in S,se=(m=D==null?void 0:D(e,Q))!==null&&m!==void 0?m:Q,_=ae?S:se,Y=J()(W,X,(0,V.Z)((0,V.Z)((0,V.Z)({"has-breadcrumb":!!_,"has-footer":!!y},"".concat(W,"-ghost"),U),"".concat(W,"-rtl"),C==="rtl"),"".concat(W,"-compact"),r));return o.createElement(ce.Z,{onResize:c},o.createElement("div",{className:Y,style:x},_,pt(W,e,C),M&&Ot(W,M),Rt(W,y)))})},Bt=Tt,tt=n(81253),ia=n(18106),at=n(37858),p=n(85893),_e=n(64335),Mt=n(85224),oa=n(53645),St=function(e){var t=(0,o.useContext)(_e.Z),a=e.children,r=e.contentWidth,s=e.className,c=e.style,f=(0,o.useContext)(De.ZP.ConfigContext),h=f.getPrefixCls,v=e.prefixCls||h("pro"),C=r||t.contentWidth,m="".concat(v,"-grid-content");return(0,p.jsx)("div",{className:J()(m,s,{wide:C==="Fixed"}),style:c,children:(0,p.jsx)("div",{className:"".concat(v,"-grid-content-children"),children:a})})},Dt=St,At=n(83832),zt=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},jt=function(e){var t=e.children,a=e.style,r=e.className,s=e.markStyle,c=e.markClassName,f=e.zIndex,h=f===void 0?9:f,v=e.gapX,C=v===void 0?212:v,m=e.gapY,P=m===void 0?222:m,x=e.width,y=x===void 0?120:x,M=e.height,S=M===void 0?64:M,D=e.rotate,X=D===void 0?-22:D,U=e.image,W=e.content,H=e.offsetLeft,Q=e.offsetTop,ae=e.fontStyle,se=ae===void 0?"normal":ae,_=e.fontWeight,Y=_===void 0?"normal":_,ze=e.fontColor,rt=ze===void 0?"rgba(0,0,0,.15)":ze,nt=e.fontSize,it=nt===void 0?16:nt,ot=e.fontFamily,lt=ot===void 0?"sans-serif":ot,kt=e.prefixCls,Gt=(0,o.useContext)(De.ZP.ConfigContext),Vt=Gt.getPrefixCls,st=Vt("pro-layout-watermark",kt),Xt=J()("".concat(st,"-wrapper"),r),Yt=J()(st,c),Jt=(0,o.useState)(""),ct=(0,Z.Z)(Jt,2),dt=ct[0],ft=ct[1];return(0,o.useEffect)(function(){var je=document.createElement("canvas"),fe=je.getContext("2d"),Pe=zt(fe),Qt="".concat((C+y)*Pe,"px"),_t="".concat((P+S)*Pe,"px"),qt=H||C/2,ea=Q||P/2;if(je.setAttribute("width",Qt),je.setAttribute("height",_t),fe){fe.translate(qt*Pe,ea*Pe),fe.rotate(Math.PI/180*Number(X));var ta=y*Pe,ut=S*Pe;if(U){var Ie=new Image;Ie.crossOrigin="anonymous",Ie.referrerPolicy="no-referrer",Ie.src=U,Ie.onload=function(){fe.drawImage(Ie,0,0,ta,ut),ft(je.toDataURL())}}else if(W){var aa=Number(it)*Pe;fe.font="".concat(se," normal ").concat(Y," ").concat(aa,"px/").concat(ut,"px ").concat(lt),fe.fillStyle=rt,Array.isArray(W)?W==null||W.forEach(function(ra,na){return fe.fillText(ra,0,na*50)}):fe.fillText(W,0,0),ft(je.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[C,P,H,Q,X,se,Y,y,S,lt,rt,U,W,it]),(0,p.jsxs)("div",{style:(0,d.Z)({position:"relative"},a),className:Xt,children:[t,(0,p.jsx)("div",{className:Yt,style:(0,d.Z)((0,d.Z)({zIndex:h,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(C+y,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},dt?{backgroundImage:"url('".concat(dt,"')")}:null),s)})]})},It=jt,la=n(12395),wt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Lt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function $t(i){return(0,k.Z)(i)==="object"?i:{spinning:i}}var Wt=function(e){var t=e.tabList,a=e.tabActiveKey,r=e.onTabChange,s=e.tabBarExtraContent,c=e.tabProps,f=e.prefixedClassName;return Array.isArray(t)||s?(0,p.jsx)(at.Z,(0,d.Z)((0,d.Z)({className:"".concat(f,"-tabs"),activeKey:a,onChange:function(v){r&&r(v)},tabBarExtraContent:s},c),{},{children:t==null?void 0:t.map(function(h,v){return(0,o.createElement)(at.Z.TabPane,(0,d.Z)((0,d.Z)({},h),{},{tab:h.tab,key:h.key||v}))})})):null},Ft=function(e,t,a){return!e&&!t?null:(0,p.jsx)("div",{className:"".concat(a,"-detail"),children:(0,p.jsx)("div",{className:"".concat(a,"-main"),children:(0,p.jsxs)("div",{className:"".concat(a,"-row"),children:[e&&(0,p.jsx)("div",{className:"".concat(a,"-content"),children:e}),t&&(0,p.jsx)("div",{className:"".concat(a,"-extraContent"),children:t})]})})})},sa=function(e){var t=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},t==null?void 0:t.breadcrumb),t==null?void 0:t.breadcrumbProps),e))})},Ut=function(e){var t,a=(0,o.useContext)(_e.Z),r=e.title,s=e.content,c=e.pageHeaderRender,f=e.header,h=e.prefixedClassName,v=e.extraContent,C=e.style,m=e.prefixCls,P=e.breadcrumbRender,x=(0,tt.Z)(e,wt),y=(0,o.useMemo)(function(){if(!!P)return P},[P]);if(c===!1)return null;if(c)return(0,p.jsxs)(p.Fragment,{children:[" ",c((0,d.Z)((0,d.Z)({},e),a))]});var M=r;!r&&r!==!1&&(M=a.title);var S=(0,d.Z)((0,d.Z)((0,d.Z)({},a),{},{title:M},x),{},{footer:Wt((0,d.Z)((0,d.Z)({},x),{},{breadcrumbRender:P,prefixedClassName:h}))},f),D=S.breadcrumb,X=(!D||!(D==null?void 0:D.itemRender)&&!(D==null||(t=D.routes)===null||t===void 0?void 0:t.length))&&!P;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(U){return!S[U]})&&X&&!s&&!v?null:(0,p.jsx)("div",{className:"".concat(h,"-warp"),children:(0,p.jsx)(Bt,(0,d.Z)((0,d.Z)({},S),{},{breadcrumb:P===!1?void 0:(0,d.Z)((0,d.Z)({},S.breadcrumb),a.breadcrumbProps),breadcrumbRender:y,prefixCls:m,children:(f==null?void 0:f.children)||Ft(s,v,h)}))})},Ht=function(e){var t,a,r=e.children,s=e.loading,c=s===void 0?!1:s,f=e.className,h=e.style,v=e.footer,C=e.affixProps,m=e.ghost,P=e.fixedHeader,x=e.breadcrumbRender,y=(0,tt.Z)(e,Lt),M=(0,o.useContext)(_e.Z),S=(0,o.useContext)(De.ZP.ConfigContext),D=S.getPrefixCls,X=e.prefixCls||D("pro"),U="".concat(X,"-page-container"),W=J()(U,f,(t={},(0,V.Z)(t,"".concat(X,"-page-container-ghost"),m),(0,V.Z)(t,"".concat(X,"-page-container-with-footer"),v),t)),H=(0,o.useMemo)(function(){return r?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"".concat(U,"-children-content"),children:r}),M.hasFooterToolbar&&(0,p.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[r,U,M.hasFooterToolbar]),Q=(0,o.useMemo)(function(){var Y;return x==!1?!1:x||(y==null||(Y=y.header)===null||Y===void 0?void 0:Y.breadcrumbRender)},[x,y==null||(a=y.header)===null||a===void 0?void 0:a.breadcrumbRender]),ae=(0,p.jsx)(Ut,(0,d.Z)((0,d.Z)({},y),{},{breadcrumbRender:Q,ghost:m,prefixCls:void 0,prefixedClassName:U})),se=(0,o.useMemo)(function(){if(o.isValidElement(c))return c;if(typeof c=="boolean"&&!c)return null;var Y=$t(c);return Y.spinning?(0,p.jsx)(At.Z,(0,d.Z)({},Y)):null},[c]),_=(0,o.useMemo)(function(){var Y=se||H;if(e.waterMarkProps||M.waterMarkProps){var ze=(0,d.Z)((0,d.Z)({},M.waterMarkProps),e.waterMarkProps);return(0,p.jsx)(It,(0,d.Z)((0,d.Z)({},ze),{},{children:Y}))}return Y},[e.waterMarkProps,M.waterMarkProps,se,H]);return(0,p.jsxs)("div",{style:h,className:W,children:[P&&ae?(0,p.jsx)(ke,(0,d.Z)((0,d.Z)({offsetTop:M.hasHeader&&M.fixedHeader?M.headerHeight:0},C),{},{children:ae})):ae,_&&(0,p.jsx)(Dt,{children:_}),v&&(0,p.jsx)(Mt.Z,{prefixCls:X,children:v})]})},Kt=Ht},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){},18067:function(){},34952:function(Oe,ne,n){"use strict";var g=n(22122),O=n(15105),j=n(67294),V=function(R,q){var K={};for(var I in R)Object.prototype.hasOwnProperty.call(R,I)&&q.indexOf(I)<0&&(K[I]=R[I]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var k=0,I=Object.getOwnPropertySymbols(R);k<I.length;k++)q.indexOf(I[k])<0&&Object.prototype.propertyIsEnumerable.call(R,I[k])&&(K[I[k]]=R[I[k]]);return K},T={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},u=j.forwardRef(function(R,q){var K=function(G){var ie=G.keyCode;ie===O.Z.ENTER&&G.preventDefault()},I=function(G){var ie=G.keyCode,de=R.onClick;ie===O.Z.ENTER&&de&&de()},k=R.style,ye=R.noStyle,J=R.disabled,ce=V(R,["style","noStyle","disabled"]),re={};return ye||(re=(0,g.Z)({},T)),J&&(re.pointerEvents="none"),re=(0,g.Z)((0,g.Z)({},re),k),j.createElement("div",(0,g.Z)({role:"button",tabIndex:0,ref:q},ce,{onKeyDown:K,onKeyUp:I,style:re}))});ne.Z=u},90860:function(Oe,ne,n){"use strict";n.d(ne,{Z:function(){return qe}});var g=n(96156),O=n(22122),j=n(90484),V=n(94184),T=n.n(V),u=n(67294),R=n(53124),q=n(98423),K=function(l){var b=l.prefixCls,w=l.className,F=l.style,Z=l.size,d=l.shape,L=T()((0,g.Z)((0,g.Z)({},"".concat(b,"-lg"),Z==="large"),"".concat(b,"-sm"),Z==="small")),B=T()((0,g.Z)((0,g.Z)((0,g.Z)({},"".concat(b,"-circle"),d==="circle"),"".concat(b,"-square"),d==="square"),"".concat(b,"-round"),d==="round")),N=u.useMemo(function(){return typeof Z=="number"?{width:Z,height:Z,lineHeight:"".concat(Z,"px")}:{}},[Z]);return u.createElement("span",{className:T()(b,L,B,w),style:(0,O.Z)((0,O.Z)({},N),F)})},I=K,k=function(l){var b=l.prefixCls,w=l.className,F=l.active,Z=l.shape,d=Z===void 0?"circle":Z,L=l.size,B=L===void 0?"default":L,N=u.useContext(R.E_),$=N.getPrefixCls,z=$("skeleton",b),ee=(0,q.Z)(l,["prefixCls","className"]),Ce=T()(z,"".concat(z,"-element"),(0,g.Z)({},"".concat(z,"-active"),F),w);return u.createElement("div",{className:Ce},u.createElement(I,(0,O.Z)({prefixCls:"".concat(z,"-avatar"),shape:d,size:B},ee)))},ye=k,J=function(l){var b=l.prefixCls,w=l.className,F=l.active,Z=l.block,d=Z===void 0?!1:Z,L=l.size,B=L===void 0?"default":L,N=u.useContext(R.E_),$=N.getPrefixCls,z=$("skeleton",b),ee=(0,q.Z)(l,["prefixCls"]),Ce=T()(z,"".concat(z,"-element"),(0,g.Z)((0,g.Z)({},"".concat(z,"-active"),F),"".concat(z,"-block"),d),w);return u.createElement("div",{className:Ce},u.createElement(I,(0,O.Z)({prefixCls:"".concat(z,"-button"),size:B},ee)))},ce=J,re=n(28991),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},G=o,ie=n(27029),de=function(l,b){return u.createElement(ie.Z,(0,re.Z)((0,re.Z)({},l),{},{ref:b,icon:G}))},Te=u.forwardRef(de),me=Te,Be=function(l){var b=l.prefixCls,w=l.className,F=l.style,Z=l.active,d=l.children,L=u.useContext(R.E_),B=L.getPrefixCls,N=B("skeleton",b),$=T()(N,"".concat(N,"-element"),(0,g.Z)({},"".concat(N,"-active"),Z),w),z=d!=null?d:u.createElement(me,null);return u.createElement("div",{className:$},u.createElement("div",{className:T()("".concat(N,"-image"),w),style:F},z))},ue=Be,be="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",Ee=function(l){var b=l.prefixCls,w=l.className,F=l.style,Z=l.active,d=u.useContext(R.E_),L=d.getPrefixCls,B=L("skeleton",b),N=T()(B,"".concat(B,"-element"),(0,g.Z)({},"".concat(B,"-active"),Z),w);return u.createElement("div",{className:N},u.createElement("div",{className:T()("".concat(B,"-image"),w),style:F},u.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(B,"-image-svg")},u.createElement("path",{d:be,className:"".concat(B,"-image-path")}))))},ve=Ee,E=function(l){var b=l.prefixCls,w=l.className,F=l.active,Z=l.block,d=l.size,L=d===void 0?"default":d,B=u.useContext(R.E_),N=B.getPrefixCls,$=N("skeleton",b),z=(0,q.Z)(l,["prefixCls"]),ee=T()($,"".concat($,"-element"),(0,g.Z)((0,g.Z)({},"".concat($,"-active"),F),"".concat($,"-block"),Z),w);return u.createElement("div",{className:ee},u.createElement(I,(0,O.Z)({prefixCls:"".concat($,"-input"),size:L},z)))},Me=E,he=n(85061),oe=function(l){var b=function(N){var $=l.width,z=l.rows,ee=z===void 0?2:z;if(Array.isArray($))return $[N];if(ee-1===N)return $},w=l.prefixCls,F=l.className,Z=l.style,d=l.rows,L=(0,he.Z)(Array(d)).map(function(B,N){return u.createElement("li",{key:N,style:{width:b(N)}})});return u.createElement("ul",{className:T()(w,F),style:Z},L)},Se=oe,ge=function(l){var b=l.prefixCls,w=l.className,F=l.width,Z=l.style;return u.createElement("h3",{className:T()(b,w),style:(0,O.Z)({width:F},Z)})},He=ge;function le(A){return A&&(0,j.Z)(A)==="object"?A:{}}function Ze(A,l){return A&&!l?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Ke(A,l){return!A&&l?{width:"38%"}:A&&l?{width:"50%"}:{}}function ke(A,l){var b={};return(!A||!l)&&(b.width="61%"),!A&&l?b.rows=3:b.rows=2,b}var xe=function(l){var b=l.prefixCls,w=l.loading,F=l.className,Z=l.style,d=l.children,L=l.avatar,B=L===void 0?!1:L,N=l.title,$=N===void 0?!0:N,z=l.paragraph,ee=z===void 0?!0:z,Ce=l.active,Ge=l.round,we=u.useContext(R.E_),Ve=we.getPrefixCls,Xe=we.direction,te=Ve("skeleton",b);if(w||!("loading"in l)){var Ne=!!B,pe=!!$,Re=!!ee,Le;if(Ne){var Ye=(0,O.Z)((0,O.Z)({prefixCls:"".concat(te,"-avatar")},Ze(pe,Re)),le(B));Le=u.createElement("div",{className:"".concat(te,"-header")},u.createElement(I,(0,O.Z)({},Ye)))}var $e;if(pe||Re){var We;if(pe){var Fe=(0,O.Z)((0,O.Z)({prefixCls:"".concat(te,"-title")},Ke(Ne,Re)),le($));We=u.createElement(He,(0,O.Z)({},Fe))}var Ae;if(Re){var Ue=(0,O.Z)((0,O.Z)({prefixCls:"".concat(te,"-paragraph")},ke(Ne,pe)),le(ee));Ae=u.createElement(Se,(0,O.Z)({},Ue))}$e=u.createElement("div",{className:"".concat(te,"-content")},We,Ae)}var Je=T()(te,(0,g.Z)((0,g.Z)((0,g.Z)((0,g.Z)({},"".concat(te,"-with-avatar"),Ne),"".concat(te,"-active"),Ce),"".concat(te,"-rtl"),Xe==="rtl"),"".concat(te,"-round"),Ge),F);return u.createElement("div",{className:Je,style:Z},Le,$e)}return typeof d!="undefined"?d:null};xe.Button=ce,xe.Avatar=ye,xe.Input=Me,xe.Image=ve,xe.Node=ue;var De=xe,qe=De},18446:function(Oe,ne,n){"use strict";var g=n(38663),O=n.n(g),j=n(18067),V=n.n(j)}}]);