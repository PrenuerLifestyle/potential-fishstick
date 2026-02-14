(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9998],{1182:function(e,r,o){"use strict";o.d(r,{o:function(){return R}});var t=o(74817),a=o(71248),n=o(66202),i=o.n(n),s=o(20616),l=o(35255),d=o(65228),c=o(80728);let u="24px;",f={"4px":["tiny","xsmall","xs"],"8px":["small","sm"],"16px":["medium","md"],"24px":["large","lg"],"48px":["xlarge","xl"]};function p(e){return Object.entries(f).reduce((r,[o,t])=>t.includes(e)?o:r,e)}function h(e,r){return"currentColor"!==r?(0,d.JK)(r,e,"#007def"):"currentColor"}let x=(0,l.default)(c.N)`
  background-color: ${({circular:e,color:r,theme:o})=>e?h(o,r):"transparent"};
  border-radius: ${({circular:e})=>e?"100%":"0"};
  color: ${({circular:e,color:r,theme:o})=>e?"white":h(o,r)};
  cursor: ${({onClick:e,cursor:r})=>e?"pointer":r};
  display: inline-block;
  height: ${({size:e=u})=>p(e)};
  padding: ${({circular:e})=>e?"4px":0};
  vertical-align: ${({circular:e})=>e?"4px":0};
  width: ${({size:e=u})=>p(e)};
`;function v({children:e,circular:r=!1,className:o,color:n="currentColor",cursor:s="default",margin:l=0,onClick:d,onKeyDown:c,padding:f=0,size:p=u,tabIndex:h,...v}){let b=a.Children.only(e);return(0,t.jsx)(x,{circular:r,className:i()(["c-axs-icon",o]),color:n,cursor:s,margin:l,onClick:d,onKeyDown:c,padding:f,size:p,...void 0!==h?{tabIndex:h}:{},...v,children:b})}function b({ariaHidden:e=!0,title:r="",titleId:o,showTitle:a=!1,...n}){let i=(0,s.D)(),l=o??i;return a&&(r=r||"AXSIconInvisible"),(0,t.jsx)(v,{...n,children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":e,"aria-labelledby":l,children:[r?(0,t.jsx)("title",{id:l,children:r}):null,(0,t.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,t.jsx)("path",{d:"M0 0h24v24H0z"}),(0,t.jsx)("path",{fill:"currentColor",d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 0 0 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"})]})]})})}function g({ariaHidden:e=!0,title:r="",titleId:o,showTitle:a=!1,...n}){let i=(0,s.D)(),l=o??i;return a&&(r=r||"AXSIconVisible"),(0,t.jsx)(v,{...n,children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":e,"aria-labelledby":l,children:[r?(0,t.jsx)("title",{id:l,children:r}):null,(0,t.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[(0,t.jsx)("path",{d:"M-858-466H582V558H-858z"}),(0,t.jsx)("path",{d:"M-315.5-11.5v47h355v-47h-355z"}),(0,t.jsx)("path",{d:"M0 0h24v24H0z"}),(0,t.jsx)("path",{fill:"currentColor",d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})]})]})})}v.displayName="AXSIcon",b.displayName="AXSIconInvisible",g.displayName="AXSIconVisible",(0,l.default)(x)`
  border-radius: ${({borderRadius:e})=>e};
  height: ${({size:e})=>p(e)};
  overflow: hidden;
  width: ${({size:e})=>`calc(${p(e)} * 1.333)`};

  svg {
    display: block;
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`,o(61107).Z;let m={default:{long:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],short:[/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/]},"ja-JP":{long:[/\d/,/\d/,/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/],short:[/\d/,/\d/,/\d/,/\d/,"/",/\d/,/\d/]}},y=(e,r)=>{if("date"===e||"shortDate"===e){let o=r&&m[r]?r:"default";return m[o]["date"===e?"long":"short"]}return[]};var k=o(14918),w=o.n(k),C=o(62633),$=o(83096),j=o.n($),_=o(57080);let P=(0,l.default)(_.q)`
  position: relative;
  width: ${({width:e})=>e};

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`,N=l.default.svg`
  -webkit-animation: rotate 2s linear infinite;
  -ms-transform-origin: center center;
  -webkit-transform-origin: center center;
  animation: rotate 2s linear infinite;
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center center;
  width: ${({width:e})=>e};

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dash 1.5s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }
`,O=({width:e,height:r,color:o,theme:a})=>(0,t.jsx)(N,{className:"circular",height:r,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50",width:e,xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("circle",{className:"path",cx:"50",cy:"50",fill:"none",r:"20",stroke:(0,d.JK)(o,a,"#007def"),strokeMiterlimit:"10",strokeWidth:"4"})}),z=(0,l.css)`
  box-sizing: border-box;
  background-color: ${({backgroundColor:e,theme:r})=>(0,d.JK)(e,r,"#ffffff")};
  border-style: solid;
  border-width: 1px;
  border-radius: ${({borderRadius:e,theme:r})=>(0,d.JK)(e,r,"1px")};
  height: ${({height:e})=>e||"48px"};
  outline-color: #007def;
  border-color: ${({borderColor:e,borderColorError:r,borderless:o,theme:t,error:a})=>a?(0,d.JK)(r,t,"#ff0000"):o?"transparent":(0,d.JK)(e,t,"#aaaaaa")};
  color: ${({color:e,disabled:r,disabledColor:o,theme:t})=>r?(0,d.JK)(o,t,"#dedede"):(0,d.JK)(e,t,"#505050")};
  display: ${({inline:e})=>e?"inline-block":"block"};
  font-size: 15px;
  padding: ${({icon:e,iconPosition:r})=>e?"right"===r?"12px 32px 12px 12px":"12px 12px 12px 32px":"12px"};
  width: ${({width:e})=>e||"100%"};

  &:focus {
    background-color: ${({backgroundColorActive:e,theme:r})=>(0,d.JK)(e,r,"#ffffff")};
    border: ${({borderless:e,borderColorActive:r,borderColorError:o,error:t,theme:a})=>e?"none":`1px solid ${t?(0,d.JK)(o,a,"#ffffff"):(0,d.JK)(r,a,"#cccccc")}`};
    color: ${({colorActive:e,disabled:r,disabledColor:o,theme:t})=>r?(0,d.JK)(o,t,"#cccccc"):(0,d.JK)(e,t,"#505050")};
  }

  &:hover {
    background-color: ${({backgroundColorHover:e,theme:r})=>(0,d.JK)(e,r,"#ffffff")};
    border: ${({borderless:e,borderColorHover:r,borderColorError:o,error:t,theme:a})=>e?"none":`1px solid ${t?(0,d.JK)(o,a,"#ffffff"):(0,d.JK)(r,a,"#cccccc")}`};
    color: ${({colorHover:e,disabled:r,disabledColor:o,theme:t})=>r?(0,d.JK)(o,t,"#ffffff"):(0,d.JK)(e,t,"#505050")};
  }

  &::placeholder {
    color: ${({placeholderColor:e,theme:r})=>(0,d.JK)(e,r,"#aaaaaa")};
  }

  &:focus,
  &:active {
    outline-style: none;
  }

  &:focus-visible {
    box-shadow: ${({theme:e,focusColor:r})=>`0 0 0 2px ${(0,d.JK)(r,e,"#007def")}`};
  }
`,M=l.default.input`
  ${z}
`,T=(0,l.default)(w()).withConfig({shouldForwardProp:e=>!["backgroundColor","backgroundColorActive","backgroundColorHover","borderColor","borderColorActive","borderColorError","borderColorHover","borderRadius","borderless","color","colorActive","colorError","colorHover","disabledColor","disallowPaste","error","extra","focusColor","iconColor","iconPosition","iconSize","inline","innerRef","isShowPasswordEnabled","label","loading","locale","readOnly","placeholderColor"].includes(e)})`
  ${z}
`,S=(0,l.default)(C.P)`
  margin-bottom: 8px;
  position: relative;
  width: ${({width:e})=>e||"100%"};
`,A=l.default.div`
  left: ${({iconPosition:e})=>"right"!==e?"10px":"auto"};
  right: ${({iconPosition:e})=>"right"===e?"10px":"auto"};
  position: absolute;
  top: ${({height:e})=>e?`calc((${e} / 2) - 12px)`:"12px"};
`,E=(0,l.default)(({active:e=!1,center:r=!1,className:o,color:a="axsui.components.loader.color",height:n="35px",width:i="35px",...s})=>e?(0,t.jsx)(P,{...s,className:j()(["c-axs-loader",o]),justifyContent:r?"center":"flex-start",width:r?"100%":i,children:O({color:a,height:n,width:i,theme:s.theme})}):null)`
  right: 10px;
  position: absolute;
  top: 15px;
`;class R extends a.Component{constructor(e){super(e),this.inputField=a.createRef(),this.focus=()=>{this.inputField.current?.focus()},this.togglePasswordVisibility=()=>{this.setState({showPassword:!this.state.showPassword})},this.state={showPassword:!1}}render(){let{backgroundColor:e,backgroundColorActive:r,backgroundColorHover:o,borderColor:a,borderColorActive:n,borderColorError:s,borderColorHover:l,borderRadius:d,borderless:c,className:u,color:f,colorActive:p,colorError:h,colorHover:x,disabled:v,disabledColor:m,disallowPaste:k,error:w,extra:C,focusColor:$,height:j,icon:_,iconColor:P,iconPosition:N,iconSize:O,id:z,inline:R,innerRef:J,isShowPasswordEnabled:K,label:H,loading:V,locale:I,mask:D,onBlur:B,onChange:F,onClick:W,onMouseDown:q,onMouseUp:L,onPaste:U,placeholder:X,placeholderColor:Y,readOnly:Q,required:Z,type:G,width:ee}=this.props,{showPassword:er}=this.state,eo=_;"password"===G&&K&&(eo=(0,t.jsx)(er?g:b,{color:P,onClick:this.togglePasswordVisibility,size:O}));let et=Array.isArray(D)?D:D&&y(D,I),ea=(0,t.jsx)(et?T:M,{...this.props,"aria-describedby":C?`${z}_extra`:"",...H&&{"aria-label":H},backgroundColor:e,backgroundColorActive:r,backgroundColorHover:o,borderColor:a,borderColorActive:n,borderColorError:s,borderColorHover:l,borderRadius:d,borderless:c,className:"c-axs-form-field__input",color:f,colorActive:p,colorError:h,colorHover:x,disabled:v||V,disabledColor:m,disallowPaste:k,error:w,focusColor:$,height:j,icon:_,iconPosition:N,id:z,inline:R,loading:V,mask:et,onBlur:B,onChange:F,onClick:W,onMouseDown:q,onMouseUp:L,onPaste:k?e=>{e.preventDefault()}:U,placeholder:X,placeholderColor:Y,readOnly:Q,ref:J,type:er?"text":G,width:ee,...Z&&{"aria-required":Z}});return(0,t.jsxs)(S,{className:i()(["c-axs-form-field",u]),width:String(ee),children:[ea,V?(0,t.jsx)(E,{height:"20px",width:"20px"}):null,!!eo&&!V&&(0,t.jsx)(A,{height:j,iconPosition:N,children:eo})]})}}R.defaultProps={backgroundColor:"axsui.forms.backgroundColor",backgroundColorActive:"axsui.forms.backgroundColorActive",backgroundColorHover:"axsui.forms.backgroundColorHover",borderColor:"axsui.forms.borderColor",borderColorActive:"axsui.forms.borderColorActive",borderColorError:"axsui.forms.borderColorError",borderColorHover:"axsui.forms.borderColorHover",borderRadius:"axsui.forms.borderRadius",color:"axsui.forms.color",colorActive:"axsui.forms.colorActive",colorError:"axsui.forms.colorError",colorHover:"axsui.forms.colorHover",disabled:!1,disabledColor:"axsui.forms.colorDisabled",disallowPaste:!1,extra:!1,focusColor:"axsui.forms.outlineColor",iconColor:"axsui.forms.iconColor",onBlur:()=>{},onChange:()=>{},onClick:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onPaste:()=>{},placeholderColor:"axsui.forms.placeholder"}},83096:function(e,r){var o;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var i=a.apply(null,o);i&&e.push(i)}else if("object"===n)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(o=(function(){return a}).apply(r,[]))&&(e.exports=o)}()},61960:function(e,r,o){"use strict";o.d(r,{Q:function(){return M}});var t=o(74817),a=o(80728),n=o(57080),i=o(73499),s=o(66202),l=o.n(s),d=o(65228),c=o(35255);let u=(e,r,o=!1)=>{if("vertical"===e&&"festival"===r)return"224px";if("horizontal"===e&&"festival"===r)return"288px";if("vertical"===e&&"primary"===r)return"225px";if("horizontal"===e&&"secondary"===r)return"184px";if("horizontal"===e&&"primary"===r)return"251px";if("horizontal"===e&&"feature"===r)return"317px";if("vertical"===e&&"secondary"===r)return"148px";else if("horizontal"===e&&"tertiary"===r)return"148px";else if(o&&"horizontal"===e&&"standard"===r)return"120px";else if("horizontal"===e&&"standard"===r)return"153px";else if(o&&"teaser"===r)return"96px";else if("teaser"===r)return"113px";return"auto"},f=(e,r,o,t=!1)=>"feature"===e?o?.length>30?"30px":"36px":"primary"===e&&o?.length>30?"24px":"primary"===e&&"horizontal"===r?"30px":"primary"===e&&"vertical"===r?"24px":"standard"===e&&t?"16px":"festival"===e?"24px":"20px",p=({prop:e,variant:r="default"})=>{let o={"-webkit-line-clamp":{default:"2",standard:1,teaser:1},"font-size":{default:"14px",feature:"16px",teaser:"12px"},height:{default:"36px",standard:"18px",teaser:"12px"},"line-height":{default:"18px",feature:"20px",teaser:"1"}};return o[e][r]||o[e].default},h=(e,r,o=!1)=>{if("horizontal"===e&&("feature"===r||"festival"===r))return"476px";if("horizontal"===e&&"primary"===r)return"376px";if("horizontal"===e&&"secondary"===r)return"276px";if("horizontal"===e&&"tertiary"===r)return"148px";if(o&&"horizontal"===e&&"standard"===r)return"120px";if("horizontal"===e&&"standard"===r)return"230px";if("teaser"===r)return"80px";return"100%"},x=(e,r=!1,o)=>"feature"===e?"40px":"primary"===e?"32px 24px 24px":"secondary"===e?"32px 16px 16px":r&&"teaser"===e?"8px 8px 8px 16px;":"festival"===e&&"horizontal"===o?"24px":"16px",v=(e,r,o)=>"feature"===e?"0 0 8px 0":"primary"===e?"0 0 2px 0":"standard"===e?"16px 0 0 0":"teaser"===e?r?"0 0 6px 0":"0 0 8px 0":"festival"===e?o?"16px 0 0":"0":"0",b=(e,r)=>"teaser"===e?r?"8px 0 8px 8px":"16px 0 16px 16px":"0",g=(e,r,o)=>"horizontal"===e?"teaser"!==r&&o?"none":"8px":"none",m=(e,r)=>"teaser"===e?"horizontal":r,y=e=>"feature"===e?"40px":"primary"===e?"28px":"teaser"===e?"normal":"festival"===e?"28px":"24px",k=({variant:e,withoutDate:r,status:o,date:t,orientation:a})=>{if("standard"===e)return r?"10px":"4px";if("teaser"===e)return o?"-8px":"0";if("festival"===e){if(t)return"horizontal"===a?"4px":"0";if(o)return t?"0":"16px"}return"0"},w=(0,c.default)(n.q)`
  align-items: center;
  border-color: ${({borderColor:e,theme:r})=>(0,d.JK)(e,r,"#transparent")};
  border-radius: ${({borderRadius:e,theme:r})=>(0,d.JK)(e,r,"8px")};
  border-width: ${({borderWidth:e,theme:r})=>(0,d.JK)(e,r,"0")};
  color: ${({color:e,theme:r})=>(0,d.JK)(e,r,"#505050")};
  flex-direction: ${({orientation:e})=>"vertical"===e?"column":"row"};
  height: ${({orientation:e,variant:r,isMobile:o})=>"horizontal"===e?u(e,r,o):"auto"};
  overflow: hidden;
  transition: box-shadow 0.2s;

  ${({variant:e,boxShadow:r,theme:o})=>"standard"===e||"primary"===e||"feature"===e?"box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);":`box-shadow: ${(0,d.JK)(r,o,"none")};`}

  &:hover {
    ${({variant:e,disabled:r,isMobile:o,boxShadowHover:t})=>t?`box-shadow: ${t};`:"standard"!==e&&("teaser"===e||r||o)?"box-shadow: none;":"box-shadow: 0 2px 16px 12px rgba(0, 0, 0, .12);"}
  }
`,C=(0,c.default)(a.N)`
  background: ${({url:e})=>`url(${e}) no-repeat center center`};
  background-size: ${({backgroundSize:e})=>e};
  overflow: hidden;
  ${({orientation:e,variant:r,isMobile:o})=>"horizontal"===e&&"teaser"!==r&&`padding-top: ${u(e,r,o)}`};
  ${({orientation:e})=>"vertical"===e&&"padding-top: 66%"};
  ${({variant:e})=>"teaser"===e&&"height: 80px"};
  ${({variant:e})=>"teaser"===e&&"border-radius: 8px"};
  width: ${({orientation:e,variant:r,isMobile:o})=>h(e,r,o)};
`,$=(0,c.default)(a.N)`
  padding: ${({variant:e,isMobile:r,orientation:o})=>x(e,r,o)};
  ${({variant:e,isLoading:r})=>"teaser"!==e||r?"display: block":"display: flex; flex-direction: column; justify-content: center"};
  position: relative;
  ${({height:e})=>e&&`height: ${e}`};
`,j=(0,c.default)(n.q)`
  align-items: center;
  background-color: ${({backgroundColor:e,theme:r})=>(0,d.JK)(e,r,"#505050")};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: ${({color:e,theme:r})=>(0,d.JK)(e,r,"#ffffff")};
  font-size: ${({variant:e})=>"teaser"===e?"10px":"12px"};
  font-weight: 600;
  height: ${({variant:e})=>"teaser"===e?"20px":"24px"};
  left: ${({variant:e})=>{switch(e){case"feature":return"40px";case"festival":case"secondary":case"standard":return"16px";default:return"24px"}}};
  padding: ${({variant:e})=>"teaser"===e?"0 8px":"0 16px"};
  position: ${({variant:e})=>"teaser"===e?"static":"absolute"};
  ${({variant:e})=>"teaser"===e&&"width: fit-content; border-radius: 4px; margin-bottom: 4px; letter-spacing: 1.07px"};
  text-transform: uppercase;
  top: 0;
`,_=(0,c.default)(a.N)`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({variant:e})=>"standard"===e||"teaser"===e?1:2};
  display: -webkit-box;
  font-size: ${({variant:e,orientation:r,title:o,isMobile:t})=>f(e,r,o,t)};
  font-weight: 600;
  line-height: ${({variant:e})=>y(e)};
  margin-top: ${({variant:e,withoutDate:r,status:o,date:t,orientation:a})=>k({variant:e,withoutDate:r,status:o,date:!!t,orientation:a})};
  overflow: hidden;
`,P=(0,c.default)(a.N)`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({variant:e})=>p({prop:"-webkit-line-clamp",variant:e})};
  display: -webkit-box;
  font-size: ${({variant:e})=>p({prop:"font-size",variant:e})};
  font-weight: ${({variant:e})=>"teaser"===e&&"normal"};
  height: ${({variant:e})=>p({prop:"height",variant:e})};
  line-height: ${({variant:e})=>p({prop:"line-height",variant:e})};
  margin-top: ${({variant:e="16px"})=>{switch(!0){case["feature","teaser","festival"].includes(e):return"8px";case["secondary","standard"].includes(e):return"4px";default:return"16px"}}};
  overflow: hidden;
`,N=(0,c.default)(a.N)`
  cursor: pointer;
  height: 100%;
  position: absolute;
  width: 100%;

  &:focus {
    border: ${({borderWidthActive:e})=>`${e||"2px"} solid`};
    border-color: ${({borderColorActive:e,theme:r})=>(0,d.JK)(e,r,"#ff0000")};
    border-radius: 8px;
    outline: none;
  }
`,O=(0,c.default)(a.N)`
  padding-top: ${({orientation:e})=>"vertical"===e&&"66%"};
  position: relative;
  width: auto;

  .image {
    left: 0;
    position: ${({orientation:e})=>"vertical"===e?"absolute":"static"};
    top: 0;
  }
`,z=(0,c.default)(a.N)`
  bottom: 0;
  margin: 0 -16px;
  padding: 16px;
  position: absolute;
  width: 100%;

  ${({variant:e,orientation:r})=>"festival"===e&&"horizontal"===r&&"margin: 0 -24px; padding: 12px 24px 24px;"}};
`,M=({ariaLabel:e,backgroundColor:r,backgroundImage:o,backgroundSize:s="cover",borderColor:d,borderColorActive:c,borderWidthActive:f,borderRadius:p,borderWidth:x,boxShadow:y,boxShadowHover:k,children:M,className:T,color:S,contentHeight:A,date:E,description:R,descriptionColor:J="#505050",disableAdditionalCardBlock:K=!1,disabled:H,eventLocation:V,footer:I,isFeaturedOffer:D=!1,isLoading:B,isMobile:F,imageOverlay:W,link:q,orientation:L,placeholderColor:U,placeholderColorHighlight:X,status:Y,title:Q,titleColor:Z,titleIcon:G,statusColor:ee,statusBackgroundColor:er,url:eo,variant:et,withoutDate:ea,...en})=>{let ei=()=>{switch(L){case"horizontal":return u(L,et,F);case"vertical":return D?"246px":u(L,et,F);default:return"auto"}};return(0,t.jsxs)(a.N,{className:l()(["c-axs-offer-card",{[`c-axs-offer-card--${m(et,L)}`]:!0},{[`c-axs-offer-card--${et}`]:!0},T]),minWidth:F&&"standard"===et?"340px":"auto",position:"relative",children:[(0,t.jsxs)(w,{...en,backgroundColor:r,backgroundImage:o,border:!0,borderColor:d,borderRadius:p,borderWidth:x,boxShadow:y,boxShadowHover:k,color:S,disabled:H,isMobile:F,left:"0",link:q,orientation:m(et,L),position:"absolute",top:"0",url:eo,variant:et,width:"100%",children:[q&&!H&&(0,t.jsx)(N,{"aria-label":e||Q,borderColorActive:c,borderWidthActive:f,variant:et,...q&&{tabIndex:0},as:q?"a":"div",display:"block",href:q||void 0,title:Q}),(0,t.jsxs)(a.N,{className:"c-axs-offer-card__image-container",margin:b(et,F),style:{pointerEvents:q?"none":"auto"},width:h(L,et,F),children:[" ",B?(0,t.jsx)(O,{className:"c-axs-offer-card__placeholder-wrapper",orientation:m(et,L),children:(0,t.jsx)(i.D,{borderRadius:g(m(et,L),et,B),color:U,colorHighlight:X,height:"horizontal"===m(et,L)?h(L,et,F):"100%",image:!0,width:h(L,et,F)})}):eo&&(0,t.jsx)(C,{backgroundSize:s,className:"c-axs-offer-card__image-wrapper",isMobile:F,orientation:m(et,L),url:eo,variant:et,children:W})]}),(0,t.jsx)($,{isLoading:B,isMobile:F,url:eo,variant:et,className:"c-axs-offer-card__content",height:A??ei(),orientation:m(et,L),style:{pointerEvents:q?"none":"auto"},width:"100%",children:B?(0,t.jsxs)(a.N,{paddingTop:"horizontal"===m(et,L)?"12px":"0",children:[(0,t.jsx)(i.D,{color:U,colorHighlight:X,height:"horizontal"===m(et,L)?"12px":"16px",line:!0,width:"horizontal"===m(et,L)?"144px":"100%"}),(0,t.jsx)(i.D,{color:U,colorHighlight:X,height:"horizontal"===m(et,L)?"12px":"16px",line:!0,width:"horizontal"===m(et,L)?"72px":"63%"})]}):(0,t.jsxs)(t.Fragment,{children:[Y&&(0,t.jsx)(j,{backgroundColor:er,className:"c-axs-offer-card__status",color:ee,orientation:m(et,L),variant:et,children:Y}),E&&(0,t.jsx)(a.N,{color:"#72708c",fontSize:"secondary"===et||"tertiary"===et||"teaser"===et?"12px":"14px",lineHeight:"1",margin:v(et,F,!!Y),children:E}),(0,t.jsxs)(_,{className:"c-axs-offer-card__title",color:Z||"#505050",date:!!E,isMobile:F,orientation:m(et,L),status:Y,title:Q,variant:et,withoutDate:ea,children:[(0,t.jsx)("span",{className:"c-axs-offer-card__title-text",children:Q})," ",!!G&&(0,t.jsx)("span",{className:"c-axs-offer-card__title-icon",children:G})]}),R&&(!F&&V||!V)&&(0,t.jsx)(P,{className:"c-axs-offer-card__description",color:J,fontWeight:"standard"===et?600:400,variant:et,children:R}),V&&(0,t.jsx)(a.N,{lineHeight:1,children:(0,t.jsx)(P,{className:"c-axs-offer-card__event-location",color:J,variant:et,children:V})}),M,I&&(0,t.jsx)(z,{className:"c-axs-offer-card__actions",orientation:L,variant:et,children:I})]})})]}),!K&&(0,t.jsxs)(n.q,{flexDirection:"vertical"===m(et,L)?"column":"row",height:"horizontal"===m(et,L)?u(L,et,F):"auto",children:[(0,t.jsx)(a.N,{className:"c-axs-offer-card__image-container",style:{pointerEvents:q?"none":"auto"},width:h(L,et,F),children:eo&&(0,t.jsx)(C,{className:"c-axs-offer-card__image-wrapper",isMobile:F,opacity:"0",orientation:m(et,L),url:eo,variant:et})}),(0,t.jsx)($,{className:"c-axs-offer-card__content",height:A??ei(),isMobile:F,orientation:m(et,L),style:{pointerEvents:q?"none":"auto"},variant:et,width:"100%"})]})]})};M.defaultProps={backgroundColor:"axsui.components.card.backgroundColor",borderColor:"axsui.components.card.borderColor",borderColorActive:"axsui.components.card.borderColorActive",borderRadius:"axsui.components.card.borderRadius",borderWidth:"axsui.components.card.borderWidth",boxShadow:"axsui.components.card.shadow",color:"axsui.components.card.color",orientation:"vertical",statusBackgroundColor:"axsui.components.card.statusBackgroundColor",statusColor:"axsui.components.card.statusColor",variant:"primary"}},14918:function(e,r,o){var t;t=function(e){return function(e){function r(t){if(o[t])return o[t].exports;var a=o[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([function(e,r,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n=function(){function e(e,r){for(var o=0;o<r.length;o++){var t=r[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,o,t){return o&&e(r.prototype,o),t&&e(r,t),r}}(),i=o(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return t(i).default}});var s=t(o(11)),l=t(o(9)),d=t(o(5)),c=o(2),u=function(e){function r(){!function(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}(this,r);for(var e,o=arguments.length,t=Array(o),a=0;a<o;a++)t[a]=arguments[a];var n=function(e,r){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&("object"==typeof r||"function"==typeof r)?r:e}(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(t)));return n.setRef=n.setRef.bind(n),n.onBlur=n.onBlur.bind(n),n.onChange=n.onChange.bind(n),n}return function(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),n(r,[{key:"setRef",value:function(e){this.inputElement=e}},{key:"initTextMask",value:function(){var e=this.props,r=this.props.value;this.textMaskInputElement=(0,d.default)(a({inputElement:this.inputElement},e)),this.textMaskInputElement.update(r)}},{key:"componentDidMount",value:function(){this.initTextMask()}},{key:"componentDidUpdate",value:function(e){var r=this.props,o=r.value,t=r.pipe,a=r.mask,n={guide:r.guide,placeholderChar:r.placeholderChar,showMask:r.showMask},i="function"==typeof t&&"function"==typeof e.pipe?t.toString()!==e.pipe.toString():(0,c.isNil)(t)&&!(0,c.isNil)(e.pipe)||!(0,c.isNil)(t)&&(0,c.isNil)(e.pipe),s=a.toString()!==e.mask.toString(),l=Object.keys(n).some(function(r){return n[r]!==e[r]})||s||i;(o!==this.inputElement.value||l)&&this.initTextMask()}},{key:"render",value:function(){var e=this.props,r=e.render,o=function(e,r){var o={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o}(e,["render"]);return delete o.mask,delete o.guide,delete o.pipe,delete o.placeholderChar,delete o.keepCharPositions,delete o.value,delete o.onBlur,delete o.onChange,delete o.showMask,r(this.setRef,a({onBlur:this.onBlur,onChange:this.onChange,defaultValue:this.props.value},o))}},{key:"onChange",value:function(e){this.textMaskInputElement.update(),"function"==typeof this.props.onChange&&this.props.onChange(e)}},{key:"onBlur",value:function(e){"function"==typeof this.props.onBlur&&this.props.onBlur(e)}}]),r}(s.default.PureComponent);r.default=u,u.propTypes={mask:l.default.oneOfType([l.default.array,l.default.func,l.default.bool,l.default.shape({mask:l.default.oneOfType([l.default.array,l.default.func]),pipe:l.default.func})]).isRequired,guide:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number]),pipe:l.default.func,placeholderChar:l.default.string,keepCharPositions:l.default.bool,showMask:l.default.bool},u.defaultProps={render:function(e,r){return s.default.createElement("input",a({ref:e},r))}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_",r.strFunction="function"},function(e,r,o){"use strict";function t(e){return Array.isArray&&Array.isArray(e)||e instanceof Array}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.placeholderChar;if(!t(e))throw Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");if(-1!==e.indexOf(r))throw Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(r)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map(function(e){return e instanceof RegExp?r:e}).join("")},r.isArray=t,r.isString=function(e){return"string"==typeof e||e instanceof String},r.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},r.isNil=function(e){return null==e},r.processCaretTraps=function(e){for(var r=[],o=void 0;-1!==(o=e.indexOf(i));)r.push(o),e.splice(o,1);return{maskWithoutCaretTraps:e,indexes:r}};var a=o(1),n=[],i="[]"},function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!(0,a.isArray)(r)){if((void 0===r?"undefined":t(r))!==n.strFunction)throw Error("Text-mask:conformToMask; The mask property must be an array.");r=r(e,o),r=(0,a.processCaretTraps)(r).maskWithoutCaretTraps}var l=o.guide,d=void 0===l||l,c=o.previousConformedValue,u=void 0===c?s:c,f=o.placeholderChar,p=void 0===f?n.placeholderChar:f,h=o.placeholder,x=void 0===h?(0,a.convertMaskToPlaceholder)(r,p):h,v=o.currentCaretPosition,b=o.keepCharPositions,g=!1===d&&void 0!==u,m=e.length,y=u.length,k=x.length,w=r.length,C=m-y,$=C>0,j=v+($?-C:0),_=j+Math.abs(C);if(!0===b&&!$){for(var P=s,N=j;N<_;N++)x[N]===p&&(P+=p);e=e.slice(0,j)+P+e.slice(j,m)}for(var O=e.split(s).map(function(e,r){return{char:e,isNew:r>=j&&r<_}}),z=m-1;z>=0;z--){var M=O[z].char;M!==p&&M===x[z>=j&&y===w?z-C:z]&&O.splice(z,1)}var T=s,S=!1;e:for(var A=0;A<k;A++){var E=x[A];if(E===p){if(O.length>0)for(;O.length>0;){var R=O.shift(),J=R.char,K=R.isNew;if(J===p&&!0!==g){T+=p;continue e}if(r[A].test(J)){if(!0===b&&!1!==K&&u!==s&&!1!==d&&$){for(var H=O.length,V=null,I=0;I<H;I++){var D=O[I];if(D.char!==p&&!1===D.isNew)break;if(D.char===p){V=I;break}}null!==V?(T+=J,O.splice(V,1)):A--}else T+=J;continue e}S=!0}!1===g&&(T+=x.substr(A,k));break}T+=E}if(g&&!1===$){for(var B=null,F=0;F<T.length;F++)x[F]===p&&(B=F);T=null!==B?T.substr(0,B+1):s}return{conformedValue:T,meta:{someCharsRejected:S}}};var a=o(2),n=o(1),i=[],s=""},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=e.previousConformedValue,a=void 0===r?t:r,n=e.previousPlaceholder,i=void 0===n?t:n,s=e.currentCaretPosition,l=void 0===s?0:s,d=e.conformedValue,c=e.rawValue,u=e.placeholderChar,f=e.placeholder,p=e.indexesOfPipedChars,h=e.caretTrapIndexes,x=void 0===h?o:h;if(0===l||!c.length)return 0;var v=c.length,b=a.length,g=f.length,m=d.length,y=v-b,k=y>0;if(y>1&&!k&&0!==b)return l;var w=0,C=void 0,$=void 0;if(k&&(a===d||d===f))w=l-y;else{var j=d.toLowerCase(),_=c.toLowerCase().substr(0,l).split(t).filter(function(e){return -1!==j.indexOf(e)});$=_[_.length-1];var P=i.substr(0,_.length).split(t).filter(function(e){return e!==u}).length,N=f.substr(0,_.length).split(t).filter(function(e){return e!==u}).length,O=void 0!==i[_.length-1]&&void 0!==f[_.length-2]&&i[_.length-1]!==u&&i[_.length-1]!==f[_.length-1]&&i[_.length-1]===f[_.length-2];!k&&(N!==P||O)&&P>0&&f.indexOf($)>-1&&void 0!==c[l]&&(C=!0,$=c[l]);for(var z=(void 0===p?o:p).map(function(e){return j[e]}),M=z.filter(function(e){return e===$}).length,T=_.filter(function(e){return e===$}).length,S=f.substr(0,f.indexOf(u)).split(t).filter(function(e,r){return e===$&&c[r]!==e}).length,A=S+T+M+(C?1:0),E=0,R=0;R<m;R++){var J=j[R];if(w=R+1,J===$&&E++,E>=A)break}}if(k){for(var K=w,H=w;H<=g;H++)if(f[H]===u&&(K=H),f[H]===u||-1!==x.indexOf(H)||H===g)return K}else if(C){for(var V=w-1;V>=0;V--)if(d[V]===$||-1!==x.indexOf(V)||0===V)return V}else for(var I=w;I>=0;I--)if(f[I-1]===u||-1!==x.indexOf(I)||0===I)return I};var o=[],t=""},function(e,r,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=function(e){var r={previousConformedValue:void 0,previousPlaceholder:void 0};return{state:r,update:function(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,x=t.inputElement,v=t.mask,b=t.guide,g=t.pipe,m=t.placeholderChar,y=void 0===m?d.placeholderChar:m,k=t.keepCharPositions,w=t.showMask;if(void 0===o&&(o=x.value),o!==r.previousConformedValue){(void 0===v?"undefined":n(v))===f&&void 0!==v.pipe&&void 0!==v.mask&&(g=v.pipe,v=v.mask);var C=void 0,$=void 0;if(v instanceof Array&&(C=(0,l.convertMaskToPlaceholder)(v,y)),!1!==v){var j=function(e){if((0,l.isString)(e))return e;if((0,l.isNumber)(e))return String(e);if(null==e)return c;throw Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}(o),_=x.selectionEnd,P=r.previousConformedValue,N=r.previousPlaceholder,O=void 0;if((void 0===v?"undefined":n(v))===d.strFunction){if(!1===($=v(j,{currentCaretPosition:_,previousConformedValue:P,placeholderChar:y})))return;var z=(0,l.processCaretTraps)($),M=z.maskWithoutCaretTraps,T=z.indexes;$=M,O=T,C=(0,l.convertMaskToPlaceholder)($,y)}else $=v;var S={previousConformedValue:P,guide:b,placeholderChar:y,pipe:g,placeholder:C,currentCaretPosition:_,keepCharPositions:void 0!==k&&k},A=(0,s.default)(j,$,S).conformedValue,E=(void 0===g?"undefined":n(g))===d.strFunction,R={};E&&(!1===(R=g(A,a({rawValue:j},S)))?R={value:P,rejected:!0}:(0,l.isString)(R)&&(R={value:R}));var J=E?R.value:A,K=(0,i.default)({previousConformedValue:P,previousPlaceholder:N,conformedValue:J,placeholder:C,rawValue:j,currentCaretPosition:_,placeholderChar:y,indexesOfPipedChars:R.indexesOfPipedChars,caretTrapIndexes:O}),H=J===C&&0===K,V=void 0!==w&&w?C:c,I=H?V:J;r.previousConformedValue=I,r.previousPlaceholder=C,x.value!==I&&(x.value=I,document.activeElement===x&&(p?h(function(){return x.setSelectionRange(K,K,u)},0):x.setSelectionRange(K,K,u)))}}}}};var i=t(o(4)),s=t(o(3)),l=o(2),d=o(1),c="",u="none",f="object",p="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),h="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout},function(e,r){"use strict";function o(e){return function(){return e}}var t=function(){};t.thatReturns=o,t.thatReturnsFalse=o(!1),t.thatReturnsTrue=o(!0),t.thatReturnsNull=o(null),t.thatReturnsThis=function(){return this},t.thatReturnsArgument=function(e){return e},e.exports=t},function(e,r,o){"use strict";var t=function(e){};e.exports=function(e,r,o,a,n,i,s,l){if(t(r),!e){var d;if(void 0===r)d=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[o,a,n,i,s,l],u=0;(d=Error(r.replace(/%s/g,function(){return c[u++]}))).name="Invariant Violation"}throw d.framesToPop=1,d}}},function(e,r,o){"use strict";var t=o(6),a=o(7),n=o(10);e.exports=function(){function e(e,r,o,t,i,s){s!==n&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function r(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r};return o.checkPropTypes=t,o.PropTypes=o,o}},function(e,r,o){"use strict";e.exports=o(8)()},function(e,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(r,o){r.exports=e}])},e.exports=t(o(71248))}}]);