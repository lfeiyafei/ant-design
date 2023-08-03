"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6522],{679090:function(D,u,t){var P=t(667294),d=t(725828),v=t(713401);function i(M,o,m){return o in M?Object.defineProperty(M,o,{value:m,enumerable:!0,configurable:!0,writable:!0}):M[o]=m,M}function e(M){for(var o=1;o<arguments.length;o++){var m=arguments[o]!=null?arguments[o]:{},r=Object.keys(m);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(m).filter(function(I){return Object.getOwnPropertyDescriptor(m,I).enumerable}))),r.forEach(function(I){i(M,I,m[I])})}return M}function S(M,o){var m=Object.keys(M);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(M);o&&(r=r.filter(function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable})),m.push.apply(m,r)}return m}function _(M,o){return o=o!=null?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(m){Object.defineProperty(M,m,Object.getOwnPropertyDescriptor(o,m))}),M}var x=function(M,o){return P.createElement(v.Z,_(e({},M),{ref:o,icon:d.default}))};u.Z=P.forwardRef(x)},979331:function(D,u,t){t.d(u,{Z:function(){return X}});var P=t(97857),d=t.n(P),v=t(9783),i=t.n(v),e=t(805574),S=t.n(e),_=t(513769),x=t.n(_),M=t(100628),o=t.n(M),m=t(294184),r=t.n(m),I=t(33413),f=t(667294),w=t(544695),C=t(189265),L=t(73287),z=t(147315),b=t(947170),T=t(510274),U=t(548073),Z=t(141035),H=t(986943),W=function(n){var a,c,h,E,s,g=n.componentCls,O="".concat(g,"-inner");return i()({},g,i()({},"&".concat(g,"-small"),(s={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},i()(s,"".concat(g,"-inner"),(a={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},i()(a,"".concat(O,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)")}),i()(a,"".concat(O,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),a)),i()(s,"".concat(g,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),i()(s,"".concat(g,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),i()(s,"&".concat(g,"-checked"),(h={},i()(h,"".concat(g,"-inner"),(c={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},i()(c,"".concat(O,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),i()(c,"".concat(O,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMaxSM*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMaxSM*2,"px)")}),c)),i()(h,"".concat(g,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),h)),i()(s,"&:not(".concat(g,"-disabled):active"),(E={},i()(E,"&:not(".concat(g,"-checked) ").concat(O),i()({},"".concat(O,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),i()(E,"&".concat(g,"-checked ").concat(O),i()({},"".concat(O,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),E)),s)))},R=function(n){var a,c=n.componentCls;return i()({},c,(a={},i()(a,"".concat(c,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),i()(a,"&".concat(c,"-checked ").concat(c,"-loading-icon"),{color:n.switchColor}),a))},K=function(n){var a,c,h=n.componentCls,E=n.motion,s="".concat(h,"-handle");return i()({},h,(c={},i()(c,s,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),i()(c,"&".concat(h,"-checked ").concat(s),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),i()(c,"&:not(".concat(h,"-disabled):active"),E?(a={},i()(a,"".concat(s,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),i()(a,"&".concat(h,"-checked ").concat(s,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),a):{}),c))},N=function(n){var a,c,h,E,s=n.componentCls,g="".concat(s,"-inner");return i()({},s,(E={},i()(E,g,(a={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},i()(a,"".concat(g,"-checked, ").concat(g,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),i()(a,"".concat(g,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)")}),i()(a,"".concat(g,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),a)),i()(E,"&".concat(s,"-checked ").concat(g),(c={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},i()(c,"".concat(g,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),i()(c,"".concat(g,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding*2,"px + ").concat(n.switchInnerMarginMax*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+n.switchPadding*2,"px - ").concat(n.switchInnerMarginMax*2,"px)")}),c)),i()(E,"&:not(".concat(s,"-disabled):active"),(h={},i()(h,"&:not(".concat(s,"-checked) ").concat(g),i()({},"".concat(g,"-unchecked"),{marginInlineStart:n.switchPadding*2,marginInlineEnd:-n.switchPadding*2})),i()(h,"&".concat(s,"-checked ").concat(g),i()({},"".concat(g,"-checked"),{marginInlineStart:-n.switchPadding*2,marginInlineEnd:n.switchPadding*2})),h)),E))},$=function(n){var a,c=n.componentCls;return i()({},c,d()(d()(d()({},(0,U.Wf)(n)),{},i()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorTextTertiary}),(0,U.Qy)(n)),{},(a={},i()(a,"&".concat(c,"-checked"),i()({background:n.switchColor},"&:hover:not(".concat(c,"-disabled)"),{background:n.colorPrimaryHover})),i()(a,"&".concat(c,"-loading, &").concat(c,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),i()(a,"&".concat(c,"-rtl"),{direction:"rtl"}),a)))},B=(0,Z.Z)("Switch",function(l){var n=l.fontSize*l.lineHeight,a=l.controlHeight/2,c=2,h=n-c*2,E=a-c*2,s=(0,H.TS)(l,{switchMinWidth:h*2+c*4,switchHeight:n,switchDuration:l.motionDurationMid,switchColor:l.colorPrimary,switchDisabledOpacity:l.opacityLoading,switchInnerMarginMin:h/2,switchInnerMarginMax:h+c+c*2,switchPadding:c,switchPinSize:h,switchBg:l.colorBgContainer,switchMinWidthSM:E*2+c*2,switchHeightSM:a,switchInnerMarginMinSM:E/2,switchInnerMarginMaxSM:E+c+c*2,switchPinSizeSM:E,switchHandleShadow:"0 2px 4px 0 ".concat(new T.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:l.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(l.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[$(s),N(s),K(s),R(s),W(s)]}),p=t(785893),F=["prefixCls","size","disabled","loading","className","rootClassName","style"],j=f.forwardRef(function(l,n){var a,c=l.prefixCls,h=l.size,E=l.disabled,s=l.loading,g=l.className,O=l.rootClassName,V=l.style,J=x()(l,F);(0,w.ZP)("checked"in l||!("value"in l),"Switch","`value` is not a valid prop, do you mean `checked`?");var Q=f.useContext(L.E_),Y=Q.getPrefixCls,q=Q.direction,y=Q.switch,k=f.useContext(z.Z),nn=(E!=null?E:k)||s,A=Y("switch",c),tn=(0,p.jsx)("div",{className:"".concat(A,"-handle"),children:s&&(0,p.jsx)(o(),{className:"".concat(A,"-loading-icon")})}),an=B(A),G=S()(an,2),cn=G[0],en=G[1],sn=(0,b.Z)(h),rn=r()(y==null?void 0:y.className,(a={},i()(a,"".concat(A,"-small"),sn==="small"),i()(a,"".concat(A,"-loading"),s),i()(a,"".concat(A,"-rtl"),q==="rtl"),a),g,O,en),ln=d()(d()({},y==null?void 0:y.style),V);return cn((0,p.jsx)(C.Z,{component:"Switch",children:(0,p.jsx)(I.Z,d()(d()({},J),{},{prefixCls:A,className:rn,style:ln,disabled:nn,ref:n,loadingIcon:tn}))}))});j.__ANT_SWITCH=!0;var X=j},348532:function(D,u,t){t.r(u);var P=t(667294),d=t(819561),v=t(785893),i=function(){return(0,v.jsx)(d.Z,{})};u.default=i},925961:function(D,u,t){t.r(u);var P=t(667294),d=t(679090),v=t(819561),i=t(785893),e=(0,i.jsx)(d.Z,{style:{fontSize:24},spin:!0}),S=function(){return(0,i.jsx)(v.Z,{indicator:e})};u.default=S},99313:function(D,u,t){t.r(u);var P=t(805574),d=t.n(P),v=t(667294),i=t(11739),e=t(819561),S=t(979331),_=t(785893),x=function(){var o=(0,v.useState)(!1),m=d()(o,2),r=m[0],I=m[1],f=function(L){I(L)},w=(0,_.jsx)(i.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"});return(0,_.jsxs)("div",{children:[(0,_.jsx)(e.Z,{spinning:r,delay:500,children:w}),(0,_.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,_.jsx)(S.Z,{checked:r,onChange:f})]})]})};u.default=x},186238:function(D,u,t){t.r(u);var P=t(667294),d=t(819561),v=t(785893),i=function(){return(0,v.jsx)("div",{className:"example",children:(0,v.jsx)(d.Z,{})})};u.default=i},215263:function(D,u,t){t.r(u);var P=t(805574),d=t.n(P),v=t(667294),i=t(819561),e=t(11739),S=t(979331),_=t(785893),x=function(){var o=(0,v.useState)(!1),m=d()(o,2),r=m[0],I=m[1],f=function(C){I(C)};return(0,_.jsxs)("div",{children:[(0,_.jsx)(i.Z,{spinning:r,children:(0,_.jsx)(e.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})}),(0,_.jsxs)("div",{style:{marginTop:16},children:["Loading state\uFF1A",(0,_.jsx)(S.Z,{checked:r,onChange:f})]})]})};u.default=x},70281:function(D,u,t){t.r(u);var P=t(667294),d=t(945016),v=t(819561),i=t(785893),e=function(){return(0,i.jsxs)(d.Z,{size:"middle",children:[(0,i.jsx)(v.Z,{size:"small"}),(0,i.jsx)(v.Z,{}),(0,i.jsx)(v.Z,{size:"large"})]})};u.default=e},128629:function(D,u,t){t.r(u);var P=t(667294),d=t(945016),v=t(819561),i=t(11739),e=t(785893),S=function(){return(0,e.jsxs)(d.Z,{direction:"vertical",style:{width:"100%"},children:[(0,e.jsxs)(d.Z,{children:[(0,e.jsx)(v.Z,{tip:"Loading",size:"small",children:(0,e.jsx)("div",{className:"content"})}),(0,e.jsx)(v.Z,{tip:"Loading",children:(0,e.jsx)("div",{className:"content"})}),(0,e.jsx)(v.Z,{tip:"Loading",size:"large",children:(0,e.jsx)("div",{className:"content"})})]}),(0,e.jsx)(v.Z,{tip:"Loading...",children:(0,e.jsx)(i.Z,{message:"Alert message title",description:"Further details about the context of this alert.",type:"info"})})]})};u.default=S},33413:function(D,u,t){var P=t(487462),d=t(204942),v=t(297685),i=t(700091),e=t(667294),S=t(294184),_=t.n(S),x=t(821770),M=t(915105),o=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],m=e.forwardRef(function(r,I){var f,w=r.prefixCls,C=w===void 0?"rc-switch":w,L=r.className,z=r.checked,b=r.defaultChecked,T=r.disabled,U=r.loadingIcon,Z=r.checkedChildren,H=r.unCheckedChildren,W=r.onClick,R=r.onChange,K=r.onKeyDown,N=(0,i.Z)(r,o),$=(0,x.Z)(!1,{value:z,defaultValue:b}),B=(0,v.Z)($,2),p=B[0],F=B[1];function j(a,c){var h=p;return T||(h=a,F(h),R==null||R(h,c)),h}function X(a){a.which===M.Z.LEFT?j(!1,a):a.which===M.Z.RIGHT&&j(!0,a),K==null||K(a)}function l(a){var c=j(!p,a);W==null||W(c,a)}var n=_()(C,L,(f={},(0,d.Z)(f,"".concat(C,"-checked"),p),(0,d.Z)(f,"".concat(C,"-disabled"),T),f));return e.createElement("button",(0,P.Z)({},N,{type:"button",role:"switch","aria-checked":p,disabled:T,className:n,ref:I,onKeyDown:X,onClick:l}),U,e.createElement("span",{className:"".concat(C,"-inner")},e.createElement("span",{className:"".concat(C,"-inner-checked")},Z),e.createElement("span",{className:"".concat(C,"-inner-unchecked")},H)))});m.displayName="Switch",u.Z=m}}]);
