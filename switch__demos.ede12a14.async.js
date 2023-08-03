"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3771],{828508:function(x,M,i){var C=i(667294),h=i(979203),g=i(713401);function t(u,d,v){return d in u?Object.defineProperty(u,d,{value:v,enumerable:!0,configurable:!0,writable:!0}):u[d]=v,u}function S(u){for(var d=1;d<arguments.length;d++){var v=arguments[d]!=null?arguments[d]:{},o=Object.keys(v);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(v).filter(function(I){return Object.getOwnPropertyDescriptor(v,I).enumerable}))),o.forEach(function(I){t(u,I,v[I])})}return u}function P(u,d){var v=Object.keys(u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(u);d&&(o=o.filter(function(I){return Object.getOwnPropertyDescriptor(u,I).enumerable})),v.push.apply(v,o)}return v}function E(u,d){return d=d!=null?d:{},Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):P(Object(d)).forEach(function(v){Object.defineProperty(u,v,Object.getOwnPropertyDescriptor(d,v))}),u}var D=function(u,d){return C.createElement(g.Z,E(S({},u),{ref:d,icon:h.default}))};M.Z=C.forwardRef(D)},979331:function(x,M,i){i.d(M,{Z:function(){return F}});var C=i(97857),h=i.n(C),g=i(9783),t=i.n(g),S=i(805574),P=i.n(S),E=i(513769),D=i.n(E),u=i(100628),d=i.n(u),v=i(294184),o=i.n(v),I=i(33413),f=i(667294),j=i(544695),_=i(189265),K=i(73287),B=i(147315),U=i(947170),T=i(510274),R=i(548073),Z=i(141035),H=i(986943),L=function(n){var a,c,s,m,e,l=n.componentCls,w="".concat(l,"-inner");return t()({},l,t()({},"&".concat(l,"-small"),(e={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},t()(e,"".concat(l,"-inner"),(a={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},t()(a,"".concat(w,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)")}),t()(a,"".concat(w,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),a)),t()(e,"".concat(l,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),t()(e,"".concat(l,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),t()(e,"&".concat(l,"-checked"),(s={},t()(s,"".concat(l,"-inner"),(c={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},t()(c,"".concat(w,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),t()(c,"".concat(w,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)")}),c)),t()(s,"".concat(l,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),s)),t()(e,"&:not(".concat(l,"-disabled):active"),(m={},t()(m,"&:not(".concat(l,"-checked) ").concat(w),t()({},"".concat(w,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),t()(m,"&".concat(l,"-checked ").concat(w),t()({},"".concat(w,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),m)),e)))},W=function(n){var a,c=n.componentCls;return t()({},c,(a={},t()(a,"".concat(c,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),t()(a,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:n.switchColor}),a))},b=function(n){var a,c,s=n.componentCls,m=n.motion,e="".concat(s,"-handle");return t()({},s,(c={},t()(c,e,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),t()(c,"&".concat(s,"-checked ").concat(e),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),t()(c,"&:not(".concat(s,"-disabled):active"),m?(a={},t()(a,"".concat(e,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),t()(a,"&".concat(s,"-checked ").concat(e,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),a):{}),c))},N=function(n){var a,c,s,m,e=n.componentCls,l="".concat(e,"-inner");return t()({},e,(m={},t()(m,l,(a={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},t()(a,"".concat(l,"-checked, ").concat(l,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),t()(a,"".concat(l,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)")}),t()(a,"".concat(l,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),a)),t()(m,"&".concat(e,"-checked ").concat(l),(c={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},t()(c,"".concat(l,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),t()(c,"".concat(l,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)")}),c)),t()(m,"&:not(".concat(e,"-disabled):active"),(s={},t()(s,"&:not(".concat(e,"-checked) ").concat(l),t()({},"".concat(l,"-unchecked"),{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2})),t()(s,"&".concat(e,"-checked ").concat(l),t()({},"".concat(l,"-checked"),{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2})),s)),m))},$=function(n){var a,c=n.componentCls;return t()({},c,h()(h()(h()({},(0,R.Wf)(n)),{},t()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorTextTertiary}),(0,R.Qy)(n)),{},(a={},t()(a,"&".concat(c,"-checked"),t()({background:n.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorPrimaryHover})),t()(a,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),t()(a,"&".concat(c,"-rtl"),{direction:"rtl"}),a)))},z=(0,Z.Z)("Switch",function(r){var n=r.fontSize*r.lineHeight,a=r.controlHeight/2,c=2,s=n-c*2,m=a-c*2,e=(0,H.TS)(r,{switchMinWidth:s*2+c*4,switchHeight:n,switchDuration:r.motionDurationMid,switchColor:r.colorPrimary,switchDisabledOpacity:r.opacityLoading,switchInnerMarginMin:s/2,switchInnerMarginMax:s+c+c*2,switchPadding:c,switchPinSize:s,switchBg:r.colorBgContainer,switchMinWidthSM:m*2+c*2,switchHeightSM:a,switchInnerMarginMinSM:m/2,switchInnerMarginMaxSM:m+c+c*2,switchPinSizeSM:m,switchHandleShadow:"0 2px 4px 0 ".concat(new T.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:r.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(r.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[$(e),N(e),b(e),W(e),L(e)]}),O=i(785893),X=["prefixCls","size","disabled","loading","className","rootClassName","style"],y=f.forwardRef(function(r,n){var a,c=r.prefixCls,s=r.size,m=r.disabled,e=r.loading,l=r.className,w=r.rootClassName,V=r.style,J=D()(r,X);(0,j.ZP)("checked"in r||!("value"in r),"Switch","`value` is not a valid prop, do you mean `checked`?");var Q=f.useContext(K.E_),Y=Q.getPrefixCls,q=Q.direction,A=Q.switch,k=f.useContext(B.Z),nn=(m!=null?m:k)||e,p=Y("switch",c),tn=(0,O.jsx)("div",{className:"".concat(p,"-handle"),children:e&&(0,O.jsx)(d(),{className:"".concat(p,"-loading-icon")})}),an=z(p),G=P()(an,2),cn=G[0],en=G[1],rn=(0,U.Z)(s),sn=o()(A==null?void 0:A.className,(a={},t()(a,"".concat(p,"-small"),rn==="small"),t()(a,"".concat(p,"-loading"),e),t()(a,"".concat(p,"-rtl"),q==="rtl"),a),l,w,en),ln=h()(h()({},A==null?void 0:A.style),V);return cn((0,O.jsx)(_.Z,{component:"Switch",children:(0,O.jsx)(I.Z,h()(h()({},J),{},{prefixCls:p,className:sn,style:ln,disabled:nn,ref:n,loadingIcon:tn}))}))});y.__ANT_SWITCH=!0;var F=y},722659:function(x,M,i){i.r(M);var C=i(667294),h=i(979331),g=i(785893),t=function(E){console.log("switch to ".concat(E))},S=function(){return(0,g.jsx)(h.Z,{defaultChecked:!0,onChange:t})};M.default=S},367320:function(x,M,i){i.r(M);var C=i(805574),h=i.n(C),g=i(667294),t=i(945016),S=i(979331),P=i(905303),E=i(785893),D=function(){var d=(0,g.useState)(!0),v=h()(d,2),o=v[0],I=v[1],f=function(){I(!o)};return(0,E.jsxs)(t.Z,{direction:"vertical",children:[(0,E.jsx)(S.Z,{disabled:o,defaultChecked:!0}),(0,E.jsx)(P.ZP,{type:"primary",onClick:f,children:"Toggle disabled"})]})};M.default=D},452325:function(x,M,i){i.r(M);var C=i(667294),h=i(979331),g=i(785893),t=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.Z,{loading:!0,defaultChecked:!0}),(0,g.jsx)("br",{}),(0,g.jsx)(h.Z,{size:"small",loading:!0})]})};M.default=t},16967:function(x,M,i){i.r(M);var C=i(667294),h=i(979331),g=i(785893),t=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.Z,{defaultChecked:!0}),(0,g.jsx)("br",{}),(0,g.jsx)(h.Z,{size:"small",defaultChecked:!0})]})};M.default=t},284354:function(x,M,i){i.r(M);var C=i(667294),h=i(288284),g=i(828508),t=i(945016),S=i(979331),P=i(785893),E=function(){return(0,P.jsxs)(t.Z,{direction:"vertical",children:[(0,P.jsx)(S.Z,{checkedChildren:"\u5F00\u542F",unCheckedChildren:"\u5173\u95ED",defaultChecked:!0}),(0,P.jsx)(S.Z,{checkedChildren:"1",unCheckedChildren:"0"}),(0,P.jsx)(S.Z,{checkedChildren:(0,P.jsx)(h.Z,{}),unCheckedChildren:(0,P.jsx)(g.Z,{}),defaultChecked:!0})]})};M.default=E},33413:function(x,M,i){var C=i(487462),h=i(204942),g=i(297685),t=i(700091),S=i(667294),P=i(294184),E=i.n(P),D=i(821770),u=i(915105),d=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],v=S.forwardRef(function(o,I){var f,j=o.prefixCls,_=j===void 0?"rc-switch":j,K=o.className,B=o.checked,U=o.defaultChecked,T=o.disabled,R=o.loadingIcon,Z=o.checkedChildren,H=o.unCheckedChildren,L=o.onClick,W=o.onChange,b=o.onKeyDown,N=(0,t.Z)(o,d),$=(0,D.Z)(!1,{value:B,defaultValue:U}),z=(0,g.Z)($,2),O=z[0],X=z[1];function y(a,c){var s=O;return T||(s=a,X(s),W==null||W(s,c)),s}function F(a){a.which===u.Z.LEFT?y(!1,a):a.which===u.Z.RIGHT&&y(!0,a),b==null||b(a)}function r(a){var c=y(!O,a);L==null||L(c,a)}var n=E()(_,K,(f={},(0,h.Z)(f,"".concat(_,"-checked"),O),(0,h.Z)(f,"".concat(_,"-disabled"),T),f));return S.createElement("button",(0,C.Z)({},N,{type:"button",role:"switch","aria-checked":O,disabled:T,className:n,ref:I,onKeyDown:F,onClick:r}),R,S.createElement("span",{className:"".concat(_,"-inner")},S.createElement("span",{className:"".concat(_,"-inner-checked")},Z),S.createElement("span",{className:"".concat(_,"-inner-unchecked")},H)))});v.displayName="Switch",M.Z=v}}]);
