(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1616],{21616:function(e,o,t){"use strict";t.d(o,{c:function(){return ek}});var i=t(74817),r=t(71248),n=t(85232),a=t.n(n),s=t(35255),l=t(57080),c=t(73499),d=t(65228);let p={PRIMARY:{DESKTOP:376,MOBILE:252},SECONDARY:{DESKTOP:276,MOBILE:276}},f={ASPECT_RATIO:.589,PRIMARY_ENLARGEMENT:1.165,PRIMARY_PLACEHOLDER_CONTENT:.479,SECONDARY_ENLARGEMENT:1.362},x="24px",h=0,u=300,g="ease",m="205px",b="153px",$=e=>"string"==typeof e,v=e=>$(e)?e.trim().length>0:r.isValidElement(e),y=e=>`${e}px`,w=e=>y(Math.round(e*f.ASPECT_RATIO)),k=e=>Math.round(parseInt(e.replace("px",""),10)),C=({baseCardWidth:e,isPrimaryCard:o})=>{let t=o?f.PRIMARY_ENLARGEMENT:f.SECONDARY_ENLARGEMENT,i=$(e)?k(e):e;return`${Math.round(i*t)}px`},j=({cardMobileWidth:e="",cardWidth:o="",isHover:t=!1,isMobile:i=!1,isPrimaryCard:r})=>{let n=r?p.PRIMARY:p.SECONDARY,a={desktop:o||n.DESKTOP,mobile:e||n.MOBILE},s=i?a.mobile:a.desktop;return t&&!i?C({baseCardWidth:s,isPrimaryCard:r}):$(s)?s:y(s)},_=({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})=>w(k(j({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r}))),N=({isPrimaryCard:e})=>e?"0":"16px",M=({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})=>y(Math.round(k(j({cardMobileWidth:e,cardWidth:o,isHover:!1,isMobile:t,isPrimaryCard:i}))*f.PRIMARY_PLACEHOLDER_CONTENT)),K=({imageUrl:e})=>e?`url(${e})`:"none",E=({isHover:e,isPrimaryCard:o})=>o||e?"8px 8px 0 0":"8px",S=({status:e,statusBackgroundColor:o,statusColor:t,tag:i,tagBackgroundColor:r,tagColor:n,theme:a})=>e?{backgroundColor:o||(0,d.JK)("axsui.components.card.statusBackgroundColor",a,"#007dff"),color:t||(0,d.JK)("axsui.components.card.statusColor",a,"#ffffff"),content:e}:i?{backgroundColor:r||(0,d.JK)("axsui.components.card.tagBackgroundColor",a,"#505050"),color:n||(0,d.JK)("axsui.components.card.tagColor",a,"#ffffff"),content:i}:null,J=({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r,theme:n})=>{let a=j({cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r});return(0,s.css)`
    background-color: ${e||(0,d.JK)("axsui.components.card.backgroundColor",n,"#ffffff")};
    border-radius: ${"8px"};
    width: ${a};
  `},A=()=>(0,s.css)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,P=({lineClamp:e})=>(0,s.css)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${e};
  text-overflow: ellipsis;
  overflow: hidden;
`,R=e=>`${e}ms`,I=e=>e.map(e=>e).join(", "),T=({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>(0,s.css)`
  transition-property: ${I(["border-radius","box-shadow","height","max-height","max-width","min-height","min-width","opacity","padding-bottom","padding-top","transform","visibility","width"])};
  transition-duration: ${R(o)};
  transition-delay: ${R(e)};
  transition-timing-function: ${t};
`;var z=t(80728);let H=(0,s.default)(l.q)`
  flex-direction: column;

  ${({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r,theme:n})=>J({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r,theme:n})};
`,O=(0,s.default)(z.N)`
  ${({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r,theme:n})=>J({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:i,isPrimaryCard:r,theme:n})};

  ${({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})=>(0,s.css)`
    height: ${_({cardMobileWidth:e,cardWidth:o,isHover:!1,isMobile:t,isPrimaryCard:i})};
  `}
`,L=(0,s.default)(l.q)`
  flex-direction: column;
  height: ${({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})=>M({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})};
  margin-top: 32px;
  max-height: ${m};
  min-height: ${b};
  padding: 0 16px 16px 16px;
  width: 100%;
`,D=({backgroundColor:e,cardMobileWidth:o,cardWidth:t,isMobile:r,isPrimaryCard:n,placeholderColor:a,placeholderColorHighlight:p})=>{let f=(0,s.useTheme)(),x=r?"12px":"16px",h=r?"12px":"16px",u=a||(0,d.JK)("axsui.components.placeholder.color",f,"#dedede"),g=p||(0,d.JK)("axsui.components.placeholder.colorHighlight",f,"#f6f6f6");return n?(0,i.jsxs)(H,{backgroundColor:e,cardMobileWidth:o,cardWidth:t,className:"c-axs-event-card__primary-placeholder",isMobile:r,isPrimaryCard:n,children:[(0,i.jsx)(l.q,{flexDirection:"column",minHeight:_({cardMobileWidth:o,cardWidth:t,isHover:!1,isMobile:r,isPrimaryCard:n}),width:"100%",children:(0,i.jsx)(c.D,{borderRadius:"8px 8px 0 0",color:u,colorHighlight:g,height:"100%",image:!0,width:"100%"})}),(0,i.jsxs)(L,{cardMobileWidth:o,cardWidth:t,isMobile:r,isPrimaryCard:n,children:[(0,i.jsx)(c.D,{color:u,colorHighlight:g,height:x,line:!0,spaceBetweenLines:h,width:"100%"}),(0,i.jsx)(c.D,{color:u,colorHighlight:g,height:x,line:!0,width:"50%"})]})]}):(0,i.jsx)(O,{backgroundColor:e,cardMobileWidth:o,cardWidth:t,className:"c-axs-event-card__secondary-placeholder",isMobile:r,isPrimaryCard:n,children:(0,i.jsx)(c.D,{borderRadius:"8px",color:u,colorHighlight:g,height:"100%",image:!0,width:"100%"})})};var W=t(20616),B=t(30714),Y=t.n(B);let q="24px;",F={"4px":["tiny","xsmall","xs"],"8px":["small","sm"],"16px":["medium","md"],"24px":["large","lg"],"48px":["xlarge","xl"]};function X(e){return Object.entries(F).reduce((o,[t,i])=>i.includes(e)?t:o,e)}function G(e,o){return"currentColor"!==o?(0,d.JK)(o,e,"#007def"):"currentColor"}let Z=(0,s.default)(z.N)`
  background-color: ${({circular:e,color:o,theme:t})=>e?G(t,o):"transparent"};
  border-radius: ${({circular:e})=>e?"100%":"0"};
  color: ${({circular:e,color:o,theme:t})=>e?"white":G(t,o)};
  cursor: ${({onClick:e,cursor:o})=>e?"pointer":o};
  display: inline-block;
  height: ${({size:e=q})=>X(e)};
  padding: ${({circular:e})=>e?"4px":0};
  vertical-align: ${({circular:e})=>e?"4px":0};
  width: ${({size:e=q})=>X(e)};
`;function U({children:e,circular:o=!1,className:t,color:n="currentColor",cursor:a="default",margin:s=0,onClick:l,onKeyDown:c,padding:d=0,size:p=q,tabIndex:f,...x}){let h=r.Children.only(e);return(0,i.jsx)(Z,{circular:o,className:Y()(["c-axs-icon",t]),color:n,cursor:a,margin:s,onClick:l,onKeyDown:c,padding:d,size:p,...void 0!==f?{tabIndex:f}:{},...x,children:h})}function V({ariaHidden:e=!0,title:o="",titleId:t,showTitle:r=!1,...n}){let a=(0,W.D)(),s=t??a;return r&&(o=o||"AXSIconHot"),(0,i.jsx)(U,{...n,children:(0,i.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":e,"aria-labelledby":s,children:[o?(0,i.jsx)("title",{id:s,children:o}):null,(0,i.jsx)("path",{fill:"currentColor",d:"M13.62 2.25s.71 2.518.71 4.56c0 1.958-1.296 3.544-3.274 3.544-1.987 0-3.484-1.586-3.484-3.544l.029-.341A12.999 12.999 0 0 0 4.5 14.915c0 4.198 3.437 7.6 7.68 7.6 4.244 0 7.68-3.401 7.68-7.6 0-5.122-2.486-9.69-6.24-12.665Zm-1.718 17.415c-1.71 0-3.092-1.33-3.092-2.984 0-1.539 1.008-2.622 2.698-2.963 1.7-.342 3.456-1.15 4.436-2.451a13.13 13.13 0 0 1 .566 3.837c0 2.518-2.064 4.56-4.608 4.56Z"})]})})}function Q({ariaHidden:e=!0,title:o="",titleId:t,showTitle:r=!1,...n}){let a=(0,W.D)(),s=t??a;return r&&(o=o||"AXSIconLike"),(0,i.jsx)(U,{...n,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":e,"aria-labelledby":s,children:[o?(0,i.jsx)("title",{id:s,children:o}):null,(0,i.jsx)("path",{fill:"currentColor",d:"M8.451 6.97a2.26 2.26 0 0 0-1.631.692c-1.147 1.144-1.176 2.932-.075 4.14.674.74 1.353 1.476 2.028 2.214 1.044 1.14 2.088 2.28 3.13 3.423.083.092.131.08.206-.005.191-.218.39-.43.586-.643 1.157-1.262 2.315-2.522 3.47-3.785.443-.484.924-.938 1.31-1.467.747-1.025.805-2.15.19-3.26-.766-1.377-2.48-1.798-3.69-.638-.432.414-.817.88-1.23 1.314-.455.477-1.032.474-1.487-.005-.332-.35-.66-.706-.982-1.066-.495-.552-1.08-.907-1.825-.914M4 9.528c.04-1.426.664-2.774 1.972-3.723 1.069-.776 2.272-.982 3.546-.657.94.24 1.701.78 2.32 1.535.131.159.198.164.332.002.554-.673 1.226-1.186 2.05-1.45 1.27-.41 2.498-.288 3.623.456 1.58 1.045 2.257 2.59 2.145 4.494-.07 1.186-.57 2.196-1.365 3.055-1.425 1.541-2.844 3.088-4.264 4.633-.533.58-1.063 1.162-1.592 1.744-.454.498-1.056.517-1.517.018-1.087-1.176-2.163-2.362-3.244-3.543-.835-.912-1.667-1.826-2.507-2.732-.583-.63-1.056-1.324-1.296-2.171C4.07 10.716 4 10.235 4 9.528",fillRule:"evenodd"})]})})}U.displayName="AXSIcon",V.displayName="AXSIconHot",Q.displayName="AXSIconLike",(0,s.default)(Z)`
  border-radius: ${({borderRadius:e})=>e};
  height: ${({size:e})=>X(e)};
  overflow: hidden;
  width: ${({size:e})=>`calc(${X(e)} * 1.333)`};

  svg {
    display: block;
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`,t(93009).Z;let ee=(0,s.default)(z.N)`
  background-image: ${({hotTicketBackgroundImage:e})=>e||"linear-gradient(to right, #e5005a, #b900ed)"};
  background-color: ${({hotTicketBackgroundColor:e})=>e||"unset"};
  border-top-left-radius: ${"8px"};
  clip-path: polygon(0 0, 0% 100%, 100% 0);
  height: ${({isPrimaryCard:e})=>e?"84px":"64px"};
  padding: 7px 0 0 7px;
  position: absolute;
  width: ${({isPrimaryCard:e})=>e?"84px":"64px"};
  z-index: 3;
`,eo=({hotTicketBackgroundColor:e,hotTicketBackgroundImage:o,hotTicketIcon:t,isHotTicket:n,isPrimaryCard:a})=>{let s=a?"32px":"24px";return n?(0,i.jsx)(ee,{className:"c-axs-event-card__hot-ticket-icon",hotTicketBackgroundColor:e,hotTicketBackgroundImage:o,isPrimaryCard:a,children:t?(0,r.cloneElement)(t,{size:s}):(0,i.jsx)(V,{color:"#ffffff",cursor:"pointer",size:s})}):null},et=(0,s.default)(l.q)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  justify-content: center;
  padding: 3px;
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 1;
`,ei=(0,s.default)(Q)`
  position: relative;
  cursor: pointer;
`,er=(0,r.memo)(({isFavorited:e,isShowLikeIcon:o,likeIconColor:t,onFavorited:n})=>{let[a,s]=(0,r.useState)(e),l=(0,r.useCallback)(e=>{e.stopPropagation();let o=!a;s(o),n?.(o)},[a,n]);return o?(0,i.jsx)(et,{className:"c-axs-event-card__like-icon",onClick:l,children:(0,i.jsx)(ei,{color:t||"#ffffff"})}):null});er.displayName="LikeIconButton";let en=(0,s.default)(l.q)`
  display: flex;
  flex-direction: column;
  font-family: ${({fontFamily:e,theme:o})=>e?`${e}, sans-serif`:(0,d.JK)("axsui.components.card.fontFamily",o,'"Lato", "sans-serif"')};
  height: 100%;
  justify-content: stretch;
  max-width: ${({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})=>j({cardMobileWidth:e,cardWidth:o,isMobile:t,isPrimaryCard:i})};
  position: relative;
  width: 100%;

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}

  & > .static-card {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
    height: 100%;
    z-index: 1;
  }

  & > .hover-card {
    height: ${({isPrimaryCard:e})=>e?"100%":"auto"};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})=>j({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})};
    z-index: 5;
  }

  ${({isHover:e,isStatic:o,isPrimaryCard:t,isMobile:i})=>!e||o||i?(0,s.css)`
          & > .static-card {
            opacity: 1;
            visibility: visible;
          }

          & > .hovered {
            opacity: 0;
            visibility: hidden;
          }
        `:(0,s.css)`
          & > .static-card {
            opacity: 0;
            visibility: hidden;
          }

          & > .hovered {
            box-shadow: 0 2px 80px 0 rgba(0, 0, 0, 0.7);
            opacity: 1;
            visibility: visible;

            ${t&&(0,s.css)`
              height: 110%;
            `};
          }
        `};

  ${({href:e})=>e?(0,s.css)`
          &:focus-visible {
            border: none;
            border-radius: ${"8px"};
            box-shadow: 0 0 0 4px #007dff;
            outline: none;
            transition: 0.1s;
            transition-delay: unset;
          }
        `:(0,s.css)`
          &:focus-visible {
            border: none;
            outline: none;
          }
        `}
`,ea=(0,s.default)(l.q)`
  background-color: ${({backgroundColor:e,theme:o})=>e||(0,d.JK)("axsui.components.card.backgroundColor",o,"#ffffff")};
  border-radius: ${"8px"};
  color: ${({color:e,theme:o})=>e||(0,d.JK)("axsui.components.card.color",o,"#505050")};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}
`,es=(0,s.default)(l.q)`
  background-image: ${({imageUrl:e})=>K({imageUrl:e})};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({isHover:e,isPrimaryCard:o})=>E({isHover:e,isPrimaryCard:o})};
  flex-direction: column;
  height: ${({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})=>_({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})};
  justify-content: flex-end;
  min-height: ${({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})=>_({cardMobileWidth:e,cardWidth:o,isHover:t,isMobile:i,isPrimaryCard:r})};
  padding: ${({isPrimaryCard:e})=>N({isPrimaryCard:e})};
  position: relative;

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}

  &:before {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 45%, #000 100%);
    border-radius: ${({isHover:e,isPrimaryCard:o})=>E({isHover:e,isPrimaryCard:o})};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: bottom;

    ${({isHover:e,isPrimaryCard:o})=>o||e?(0,s.css)`
            opacity: 0;
            transform: scaleY(0);
          `:(0,s.css)`
            opacity: 1;
            transform: scaleY(1);
          `}

    ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}
  }
`,el=(0,s.default)(l.q)`
  background-color: ${({backgroundColor:e,theme:o})=>e||(0,d.JK)("axsui.components.card.backgroundColor",o,"#ffffff")};
  border-bottom-left-radius: ${"8px"};
  border-bottom-right-radius: ${"8px"};
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  height: 100%;
  justify-content: flex-start;
  position: relative;
  transform-origin: top;

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}

  ${({isPrimaryCard:e,isHover:o,eventStatusData:t,isMobile:i})=>e||!e&&o?(0,s.css)`
          height: 100%;
          max-height: ${m};
          min-height: ${b};
          opacity: 1;
          padding-bottom: ${i?"32px":"24px"};
          padding-left: 16px;
          padding-right: 16px;
          padding-top: ${t?0:"16px"};
          transform: scaleY(1);
          visibility: visible;
        `:(0,s.css)`
          height: 0;
          max-height: 0;
          min-height: 0;
          opacity: 0;
          padding: 0 16px;
          transform: scaleY(0);
          visibility: hidden;
        `};
`,ec=(0,s.default)(l.q)`
  background-color: ${({sponsorBackgroundColor:e,theme:o})=>e||(0,d.JK)("axsui.components.card.sponsorBackgroundColor",o,"#505050")};
  height: ${x};
  justify-content: center;
  left: 0;
  position: absolute;
  top: -${x};
  width: 100%;
`,ed=s.default.span`
  display: block;
  color: ${({sponsorColor:e,theme:o})=>e||(0,d.JK)("axsui.components.card.sponsorColor",o,"#ffffff")};
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  padding: 4px 8px;

  ${A()};
`,ep=(0,s.default)(z.N)`
  background-color: ${({statusLabelBackgroundColor:e,theme:o})=>(0,d.JK)(e,o,"#505050")};
  border-bottom-left-radius: ${({isMobile:e})=>e?"2px":"4px"};
  border-bottom-right-radius: ${({isMobile:e})=>e?"2px":"4px"};
  height: ${({isMobile:e})=>e?"16px":"24px"};
  left: auto;
  margin-bottom: 8px;
  max-width: 100%;
  padding: ${({isMobile:e})=>e?"4px 6px":"4px 8px"};
  position: relative;
  text-transform: uppercase;
  top: auto;
  width: fit-content;
`,ef=s.default.span`
  align-items: center;
  color: ${({statusLabelTextColor:e,theme:o})=>(0,d.JK)(e,o,"#ffffff")};
  display: block;
  font-size: ${({isMobile:e})=>e?"8px":"12px"};
  font-weight: 600;
  letter-spacing: 1px;
  line-height: normal;

  ${A()};
`,ex=(0,s.default)(z.N)`
  color: ${({color:e,theme:o})=>e||(0,d.JK)("axsui.components.card.color",o,"#505050")};
  font-size: ${({fontSize:e,theme:o})=>(0,d.JK)(e,o,"14px")};
  font-weight: normal;
  line-height: 16px;
  margin-bottom: 4px;

  ${P({lineClamp:2})}
`,eh=(0,s.default)(z.N)`
  color: ${({titleColor:e,theme:o})=>e||(0,d.JK)("axsui.components.card.color",o,"#003268")};
  font-size: ${({fontSize:e,theme:o,isMobile:t})=>(0,d.JK)(e,o,t?"20px":"24px")};
  font-weight: ${({fontWeight:e,theme:o})=>(0,d.JK)(e,o,"600")};
  line-height: ${({isMobile:e})=>e?"24px":"28px"};
  margin-bottom: 4px;

  ${({linesOfTitle:e})=>P({lineClamp:e})};
`,eu=(0,s.default)(z.N)`
  color: ${({color:e,theme:o})=>e||(0,d.JK)("axsui.components.card.color",o,"#505050")};
  font-size: ${({fontSize:e,theme:o})=>(0,d.JK)(e,o,"14px")};
  font-weight: ${({fontWeight:e,theme:o})=>(0,d.JK)(e,o,"600")};
  margin-bottom: 4px;

  ${A()};
`,eg=(0,s.default)(z.N)`
  color: ${({color:e,theme:o})=>e||(0,d.JK)("axsui.components.card.color",o,"#505050")};
  font-size: ${({fontSize:e,theme:o})=>(0,d.JK)(e,o,"14px")};
  font-weight: ${({fontWeight:e,theme:o})=>(0,d.JK)(e,o,"normal")};
  line-height: 16px;

  ${P({lineClamp:2})};
`,em=(0,s.default)(z.N)`
  color: #ffffff;
  flex-direction: row;
  font-size: ${({fontSize:e,theme:o})=>(0,d.JK)(e,o,"13px")};
  font-weight: ${({fontWeight:e,theme:o})=>(0,d.JK)(e,o,"normal")};
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

  ${A()};

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}

  & > * {
    color: #ffffff;
  }
`,eb=(0,s.default)(l.q)`
  flex-direction: column;
  justify-content: flex-end;
  transform-origin: bottom;

  ${({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})=>T({transitionDelay:e,transitionDuration:o,transitionTimingFunction:t})}

  ${({isPrimaryCard:e,isHover:o})=>e||!e&&o?(0,s.css)`
          opacity: 0;
          transform: scaleY(0);
        `:(0,s.css)`
          opacity: 1;
          transform: scaleY(1);
        `};
`,e$=(0,s.default)(z.N)`
  color: #ffffff;
  font-size: ${({fontSize:e,theme:o})=>(0,d.JK)(e,o,"16px")};
  font-weight: ${({fontWeight:e,theme:o})=>(0,d.JK)(e,o,"600")};
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);

  ${A()};

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`,ev=s.default.span``,ey=s.default.span``,ew=({additionalInfo:e,backgroundColor:o,cardMobileWidth:t,cardWidth:r,className:n,color:s,eventDate:l,eventLocation:c,eventStatusData:d,eventTitle:p,fontSize:f,fontWeight:x,hotTicketBackgroundColor:h,hotTicketBackgroundImage:u,hotTicketIcon:g,imageAlt:m,imageUrl:b,isFavorited:y,isHotTicket:w,isHover:k=!1,isMobile:C,isPrimaryCard:j,isShowLikeIcon:_,isStatic:N,likeIconColor:M,linesOfTitle:K,onFavorited:E,secondaryCardInfo:S,sponsor:J,sponsorBackgroundColor:A,sponsorColor:P,titleColor:R,transitionDelay:I,transitionDuration:T,transitionTimingFunction:z,...H})=>{let O={transitionDelay:I,transitionDuration:T,transitionTimingFunction:z},L=v(l),D=v(S),W=L||D||c.trim().length>0,B=W||p.trim().length>0;return(0,i.jsxs)(ea,{backgroundColor:o,className:a()("c-axs-event-card__wrapper",n,{expanded:k||j}),color:s,isHover:k,isMobile:C,isPrimaryCard:j,isStatic:N,...O,...H,children:[(0,i.jsx)(eo,{hotTicketBackgroundColor:h,hotTicketBackgroundImage:u,hotTicketIcon:g,isHotTicket:w,isPrimaryCard:j}),(0,i.jsx)(er,{isFavorited:y,isShowLikeIcon:_,likeIconColor:M,onFavorited:E}),(0,i.jsxs)(es,{cardMobileWidth:t,cardWidth:r,className:"c-axs-event-card__image",imageUrl:b,isHover:k,isMobile:C,isPrimaryCard:j,...O,children:[!b&&m&&(0,i.jsx)("img",{alt:m}),B&&(0,i.jsxs)(eb,{className:"c-axs-event-card__secondary-card__content",isHover:k,isPrimaryCard:j,...O,children:[p&&(0,i.jsx)(e$,{className:"c-axs-event-card__secondary-card__title",fontSize:f,fontWeight:x,children:p}),W&&(0,i.jsx)(em,{className:"c-axs-event-card__secondary-card__info",fontSize:f,fontWeight:x,...O,children:S?(0,i.jsx)(i.Fragment,{children:S}):(0,i.jsxs)(i.Fragment,{children:[L&&($(l)?(0,i.jsx)(ev,{className:"c-axs-event-card__secondary-card__date",children:l}):(0,i.jsx)(i.Fragment,{children:l})),c&&(0,i.jsx)(ey,{className:"c-axs-event-card__secondary-card__location",children:L?`, ${c}`:c})]})})]})]}),(0,i.jsxs)(el,{backgroundColor:o,className:"c-axs-event-card__content",color:s,eventStatusData:d,isHover:k,isMobile:C,isPrimaryCard:j,...O,children:[J&&(0,i.jsx)(ec,{className:"c-axs-event-card__sponsor-label",sponsorBackgroundColor:A,children:$(J)?(0,i.jsx)(ed,{sponsorColor:P,children:J}):(0,i.jsx)(i.Fragment,{children:J})}),d&&(0,i.jsx)(ep,{className:"c-axs-event-card__status",isMobile:C,statusLabelBackgroundColor:d.backgroundColor,children:$(d.content)?(0,i.jsx)(ef,{isMobile:C,statusLabelTextColor:d.color,children:d.content}):(0,i.jsx)(i.Fragment,{children:d.content})}),(0,i.jsx)(ex,{className:"c-axs-event-card__content-date",color:s,fontSize:f,children:l}),(0,i.jsx)(eh,{className:"c-axs-event-card__content-title",fontSize:f,fontWeight:x,isMobile:C,linesOfTitle:K,titleColor:R,children:p}),e&&($(e)?(0,i.jsx)(eu,{className:"c-axs-event-card__additional-info",color:s,fontSize:f,fontWeight:x,children:e}):(0,i.jsx)(i.Fragment,{children:e})),c&&(0,i.jsx)(eg,{className:"c-axs-event-card__content-location",color:s,fontSize:f,fontWeight:x,children:c})]})]})},ek=({additionalInfo:e="",ariaLabel:o="",backgroundColor:t="",cardMobileWidth:n="",cardWidth:l="",color:c="",eventDate:d="",eventLocation:p="",eventTitle:f,fontFamily:x="",fontSize:m="",fontWeight:b="",hotTicketBackgroundColor:$="",hotTicketBackgroundImage:v="",hotTicketIcon:y,href:w="",imageAlt:k="",imageUrl:C,isFavorited:j=!1,isHotTicket:_=!1,isLoading:N=!1,isMobile:M=!1,isPrimaryCard:K=!0,isShowLikeIcon:E=!1,isStatic:J=!1,likeIconColor:A="",linesOfTitle:P=2,onFavorited:R,placeholderColor:I="",placeholderColorHighlight:T="",secondaryCardInfo:z="",sponsor:H="",sponsorBackgroundColor:O="",sponsorColor:L="",status:W="",statusBackgroundColor:B="",statusColor:Y="",tabIndex:q,tag:F="",tagBackgroundColor:X="",tagColor:G="",titleColor:Z="",transitionDelay:U=h,transitionDuration:V=u,transitionTimingFunction:Q=g,...ee})=>{let eo=(0,s.useTheme)(),[et,ei]=(0,r.useState)(!1);if(N)return(0,i.jsx)(D,{backgroundColor:t,cardMobileWidth:n,cardWidth:l,isMobile:M,isPrimaryCard:K,placeholderColor:I,placeholderColorHighlight:T});let er=S({status:W,statusBackgroundColor:B,statusColor:Y,tag:F,tagBackgroundColor:X,tagColor:G,theme:eo}),ea={transitionDelay:U,transitionDuration:V,transitionTimingFunction:Q},es={additionalInfo:e,backgroundColor:t,cardMobileWidth:n,cardWidth:l,color:c,eventDate:d,eventLocation:p,eventStatusData:er,eventTitle:f,fontSize:m,fontWeight:b,hotTicketBackgroundColor:$,hotTicketBackgroundImage:v,hotTicketIcon:y,imageAlt:k,imageUrl:C,isFavorited:j,isHotTicket:_,isMobile:M,isPrimaryCard:K,isShowLikeIcon:E,isStatic:J,likeIconColor:A,linesOfTitle:P,onFavorited:R,secondaryCardInfo:z,sponsor:H,sponsorBackgroundColor:O,sponsorColor:L,titleColor:Z,...ea,...ee},el=({event:e,hoverState:o})=>{"mouse"===e.pointerType&&ei(o)};return(0,i.jsxs)(en,{as:w?"a":"div",cardMobileWidth:n,cardWidth:l,className:"c-axs-event-card",fontFamily:x,isHover:et,isMobile:M,isPrimaryCard:K,isStatic:J,onPointerEnter:e=>el({event:e,hoverState:!0}),onPointerLeave:e=>el({event:e,hoverState:!1}),tabIndex:q??(w?0:-1),...ea,...w&&{href:w,"aria-label":o},children:[(0,i.jsx)(ew,{...es,className:"static-card"}),!J&&!M&&(0,i.jsx)(ew,{...es,className:a()("hover-card",{hovered:et}),isHover:et})]})}},85232:function(e,o){var t;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)&&t.length){var a=r.apply(null,t);a&&e.push(a)}else if("object"===n)for(var s in t)i.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(o,[]))&&(e.exports=t)}()},30714:function(e,o){var t;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",o=0;o<arguments.length;o++){var t=arguments[o];t&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var t in e)i.call(e,t)&&e[t]&&(o=n(o,t));return o}(t)))}return e}function n(e,o){return o?e?e+" "+o:e+o:e}e.exports?(r.default=r,e.exports=r):void 0!==(t=(function(){return r}).apply(o,[]))&&(e.exports=t)}()}}]);