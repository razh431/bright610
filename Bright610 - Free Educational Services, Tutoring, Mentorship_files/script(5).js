!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=_},function(e,t){function n(t){"@babel/helpers - typeof";return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=Core},function(e,t,n){var r=n(2);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(n,l,a):n[l]=e[l]}return n.default=e,t&&t.set(e,n),n}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(21);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t,n){var r=n(2),i=n(3);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t){e.exports=PropTypes},function(e,t){e.exports=React},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.getRichTextCharCount=function(e){var t=function(e){if("string"!=typeof e||"{"!==e[0])return null;try{return JSON.parse(e)}catch(e){return null}}(e)||{},n=0;t.blocks&&t.blocks.forEach(function(e){var t=e.text.length;n+=(0,a.clamp)(t,25,Math.max(t,25))});return n},t.isImbalanced=t.getEditorPageScale=t.resolveForCharCount=t.resolveFontSizeCharCount=t.stringToChildren=t.spacingHorizontal=t.spacingVertical=void 0;var i=r(n(22)),o=r(n(14)),l=r(n(2)),a=n(1);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,o.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.spacingVertical=function(){return{"> :nth-child(n)":{marginBottom:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"medium"}," > :last-child":{marginBottom:"0 !important"}}};t.spacingHorizontal=function(){return{"> :nth-child(n)":{marginRight:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"medium"}," > :last-child":{marginRight:"0 !important"}}};t.stringToChildren=function(e){if("string"==typeof e)return{children:e.trim()};if(e&&"object"===(0,l.default)(e)){var t=e.children,n=void 0===t?null:t;return"string"==typeof n&&(n=n.trim()),s(s({},e),{},{children:n})}return{children:null}};t.resolveFontSizeCharCount=function(e){var t=e.count,n=void 0===t?0:t,r=e.fontSizeMap,o=void 0===r?{}:r,l=e.defaultFontSize,u=(0,a.reduce)(o,function(e,t,n){var r=(0,i.default)(t,2),o=r[0],l=r[1],a=void 0===l?Number.MAX_VALUE:l;return e.push({range:[o,a],fontSize:n}),e},[]),s=l||void 0;return u.forEach(function(e){var t=(0,i.default)(e.range,2),r=t[0],o=t[1],l=e.fontSize;n>=r&&n<=o&&(s=l)}),s};t.resolveForCharCount=function(e){var t=e.count,n=void 0===t?0:t,r=e.valueMap,i=void 0===r?{}:r,o=e.defaultValue,l=e.maxCharCount,u=void 0===l?500:l;return Object.keys(i).reduce(function(e,t){return e||(0,a.inRange)(n,i[t][0],i[t][1]||u)&&t},!1)||o};t.getEditorPageScale=function(){var e=document.getElementsByClassName("ux-scaled"),t=1;return e&&e.length>0&&(t=e[0].getAttribute("data-scale")),t};t.isImbalanced=function(e,t){var n=(0,a.last)(e),r=(0,a.sum)(e),i=(0,a.sum)(t);return Math.abs(r-i)>Math.abs(r-n-(i+n))}},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=(0,r(n(29)).default)({BACKGROUND_IMAGE_RENDERED:null,HAMBURGER_MENU_LINK:null,HEADER_WIDGET:null,HEADER_SECTION:null,HEADER_VIDEO:null,HEADER_VIDEO_EMBED:null,HEADER_SLIDESHOW:null,HEADER_SLIDE:null,HEADER_HERO_SLIDE:null,HEADER_PHONE_RENDERED:null,HEADER_PIPE_RENDERED:null,HEADER_ADDRESS_RENDERED:null,HEADER_LOGO_RENDERED:null,HEADER_LOGO_IMAGE_RENDERED:null,HEADER_LOGO_OVERHANG_CONTAINER:null,HEADER_LOGO_TEXT_RENDERED:null,HEADER_TAGLINE_RENDERED:null,HEADER_TAGLINE2_RENDERED:null,HEADER_NAV_RENDERED:null,HEADER_CTA_BTN:null,CART_ICON_RENDER:null,CART_ICON_COUNT:null,CART_ICON_PIPE:null,CART_TEXT:null,SEARCH_FORM_RENDERED:null,SEARCH_ICON_RENDERED:null,SEARCH_ICON_RENDERED_OPEN:null,SEARCH_CLOSE_RENDERED:null,SEARCH_FIELD_RENDERED:null,NAV_MORE:null,NAV_DROPDOWN:null,i18n_ICON_RENDERED:null,i18n_BAR_RENDERED:null,BANNER_RENDERED:null,BANNER_TEXT_RENDERED:null,GROUP_RENDERED:null,MEMBERSHIP_EMAIL_ADDRESS:null,MEMBERSHIP_SIGNOUT_LINK:null,MEMBERSHIP_SIGNIN_LINK:null,MEMBERSHIP_ICON_RENDERED:null,MEMBERSHIP_ICON_DESKTOP_RENDERED:null,MEMBERSHIP_CREATE_ACCOUNT_LINK:null,MEMBERSHIP_ACCOUNT_LINK:null,MEMBERSHIP_BOOKINGS_LINK:null,MEMBERSHIP_ORDERS_LINK:null,SEASONAL_SPRING_LEFT_ICON_RENDERED:null,SEASONAL_SPRING_RIGHT_ICON_RENDERED:null,SEASONAL_SUMMER_LEFT_ICON_RENDERED:null,SEASONAL_SUMMER_RIGHT_ICON_RENDERED:null,SEASONAL_FALL_LEFT_ICON_RENDERED:null,SEASONAL_FALL_RIGHT_ICON_RENDERED:null,SEASONAL_WINTER_LEFT_ICON_RENDERED:null,SEASONAL_WINTER_RIGHT_ICON_RENDERED:null});t.default=i,e.exports=t.default},function(e,t,n){"use strict";window.wsb=window.wsb||{},window.wsb.NavOverflow=window.wsb.NavOverflow||n(18)},function(e,t,n){"use strict";var r=n(5),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(6)),l=i(n(19)),a=i(n(7)),u=i(n(8)),s=i(n(3)),c=i(n(9)),d=i(n(10)),f=i(n(11)),p=i(n(12)),h=r(n(13)),v=n(1),E=n(15),y=n(28),g=i(n(16)),m=i(n(30)),b=i(n(31)),R=n(4),O=i(n(35));function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var D,N=function(e){(0,c.default)(n,e);var t=_(n);function n(){var e;return(0,a.default)(this,n),(e=t.apply(this,arguments)).handleResize=e.handleResize.bind((0,s.default)(e)),e.throttleResize=e.throttleResize.bind((0,s.default)(e)),e.renderNavItems=e.renderNavItems.bind((0,s.default)(e)),e.renderSplitNavItems=e.renderSplitNavItems.bind((0,s.default)(e)),e.markVisuallyComplete=e.markVisuallyComplete.bind((0,s.default)(e)),e.state={isActive:!1,isVctMarked:!1},e}return(0,u.default)(n,[{key:"componentDidMount",value:function(){var e=this.props.logoImageId;if((0,m.default)(),this.mounted=!0,window.addEventListener("resize",this.throttleResize,{passive:!0}),window.addEventListener("CartQuantityChange",this.throttleResize,{passive:!0}),e){var t=document.getElementById(e);t&&t.addEventListener("load",this.throttleResize)}this.handleResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.throttleResize,{passive:!0}),window.removeEventListener("CartQuantityChange",this.throttleResize,{passive:!0})}},{key:"componentDidUpdate",value:function(e){(0,v.isEqual)(e.navigation,this.props.navigation)||this.handleResize()}},{key:"resetVisibility",value:function(e){e.forEach(function(e){e.style.display="",e.style.visibility="hidden",e.classList.remove("visible"),e.classList.remove("last-visible-nav-item")})}},{key:"throttleResize",value:function(){window.clearTimeout(D),D=setTimeout(this.handleResize,100)}},{key:"handleResize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,n=t.parentId,r=t.splitNavId,i=t.inlineUtilitiesMenu;if(!(e>5)&&this.mounted&&"undefined"!=typeof document&&n){var o=document.getElementById(n);if(this.items=o&&Array.prototype.slice.call(o.children),this.items&&this.items.length){this.resetVisibility(this.items),i&&(this.inlineUtilitiesMenu=this.items.pop(),(0,y.show)(this.inlineUtilitiesMenu)),this.more=this.items.pop();var l=this.more&&this.more.querySelector("ul");if(this.moreItems=l&&Array.prototype.slice.call(l.children),this.moreItems&&this.moreItems.length)return this.resetVisibility(this.moreItems),o&&o.style&&(o.style.whiteSpace="normal"),this.maxWidth=(0,y.getWidth)(o.parentElement,"floor"),o&&o.style&&(o.style.whiteSpace="nowrap"),r?this.renderSplitNavItems(e):this.renderNavItems();setTimeout(this.handleResize.bind(this,++e),1)}else setTimeout(this.handleResize.bind(this,++e),1)}}},{key:"markVisuallyComplete",value:function(){if(this.props.renderMode===R.constants.renderModes.PUBLISH&&window&&!this.state.isVctMarked){var e=document&&document.querySelector('[data-aid="'.concat(g.default.HEADER_NAV_RENDERED,'"]'));e.offsetHeight>0&&e.offsetWidth>0&&(window.markVisuallyComplete(),this.setState({isVctMarked:!0}))}}},{key:"renderNavItems",value:function(){var e=this.items,t=this.more,n=this.moreItems,r=this.maxWidth,i=this.inlineUtilitiesMenu,o=(0,y.getWidths)(e),l=(0,y.getWidth)(t),a=r-(i?(0,y.getWidth)(i):0),u=!1;if((0,v.sum)(o)>a){var s=e.length-1,c=(0,v.sum)(o);(0,v.forEachRight)(o,function(e){c+l<a||(c-=e,s--)}),s++;for(var d=0;d<s;d++)(0,y.show)(e[d]),(0,y.hide)(n[d]);for(var f=s;f<e.length;f++)(0,y.hide)(e[f]),(0,y.show)(n[f]),e[f].querySelector('[data-ux="NavLinkActive"]')&&(u=!0);(0,y.show)(t)}else e.forEach(function(e){return(0,y.show)(e)}),(0,y.hide)(t);u!==this.state.isActive&&this.setState({isActive:u}),this.markVisuallyComplete()}},{key:"renderSplitNavItems",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props.splitNavId,n=this.items,r=this.more,i=this.moreItems,o=this.maxWidth,l=this.inlineUtilitiesMenu,a=this.inlineUtilitiesMenu&&this.inlineUtilitiesMenu.querySelector("[data-ux='Pipe']");a&&(0,y.hide)(a);var u=document.getElementById(t);this.leftItems=u&&u.children&&[].slice.call(u.children);var s=this.leftItems;if(s&&s.length){var c=s.pop(),d=(0,y.getWidths)(n),f=0,p=l?(0,y.getWidth)(l):0,h=0,g=d.concat(p).findIndex(function(e){if(h+e>o)return e;h+=e});g<0&&(g=d.length);var m=d.slice(0,g),b=d.slice(g),R=!1;for((0,v.forEachRight)(d,function(){(0,v.sum)(b)+f+p<o||(b.pop(),R=!0,f=(0,y.getWidth)(r))});m.length>1&&(0,E.isImbalanced)(m,b.concat([f,p]));)b.unshift(m.pop());for(var O=!1,_=0;_<m.length;_++)(0,y.show)(s[_]),(0,y.hide)(n[_]),(0,y.hide)(i[_]);for(var D=m.length;D<m.length+b.length;D++)(0,y.hide)(s[D]),(0,y.show)(n[D]),(0,y.hide)(i[D]);for(var N=m.length+b.length;N<n.length;N++)(0,y.hide)(s[N]),(0,y.hide)(n[N]),(0,y.show)(i[N]),(n[N].querySelector('[data-ux="NavLinkActive"]')||i[N].querySelector('[data-ux="NavMoreMenuLinkActive"]')||i[N].querySelector('[data-ux="NavMoreMenuLinkNestedActive"]'))&&(O=!0);R?(0,y.show)(r):(0,y.hide)(r),(0,y.hide)(c),O!==this.state.isActive&&this.setState({isActive:O}),(l||(R?r:(0,v.last)(n))).classList.add("last-visible-nav-item");var I=n.find(function(e){return"visible"===e.style.visibility});a&&I&&(0,y.show)(a),this.markVisuallyComplete()}else setTimeout(this.handleResize.bind(this,++e),1)}},{key:"render",value:function(){var e=this.props,t=e.hideDropdown,n=e.renderMode,r=e.staticContent,i=(0,l.default)(e,["hideDropdown","renderMode","staticContent"]),a=this.state.isActive,u="var n=document.querySelector('[data-aid=\"".concat(g.default.HEADER_NAV_RENDERED,"\"]');n.offsetHeight>0&&n.offsetWidth>0&&(").concat(O.default,");");return h.default.createElement(h.Fragment,null,n===R.constants.renderModes.PUBLISH&&h.default.createElement("script",{dangerouslySetInnerHTML:{__html:u}}),!t&&h.default.createElement(b.default,(0,o.default)({},(0,v.pick)(i,["style","toggleId","navBarId","parentId","activeProps","label","enableNoOverlapDropdown"]),{"data-aid":g.default.NAV_MORE,ignoreCloseAttr:"data-ignore-close",isActive:a,"aria-label":r.navigationDropdownToggle})))}}]),n}(h.Component);N.propTypes={navigation:p.default.array.isRequired,parentId:p.default.string.isRequired,toggleId:p.default.string.isRequired,splitNavId:p.default.string,activeProps:p.default.object,label:p.default.string.isRequired,renderMode:p.default.string.isRequired,style:p.default.object,enableNoOverlapDropdown:p.default.bool,hideDropdown:p.default.bool,inlineUtilitiesMenu:p.default.bool,logoImageId:p.default.string,staticContent:p.default.object.isRequired},N.defaultProps={activeProps:{},staticContent:{}};var I=N;t.default=I,e.exports=t.default},function(e,t,n){var r=n(20);e.exports=function(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){var r=n(23),i=n(24),o=n(25),l=n(27);e.exports=function(e,t){return r(e)||i(e,t)||o(e,t)||l()}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}},function(e,t,n){var r=n(26);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMobileViewportHeight=t.getMobileRenderContainer=t.getMobileViewportContainer=t.show=t.hide=t.getWidths=t.getWidth=void 0;var r=n(1),i=n(4).constants.renderModes,o=function(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)};t.getWidth=o;t.getWidths=function(e){return e.map(function(e){return o(e)})};t.hide=function(e){e.style.display="none",e.style.visibility="hidden",e.classList.remove("visible")};t.show=function(e){e.style.display="",e.style.visibility="visible",e.classList.add("visible")};var l=function(e){return e===i.PREVIEW&&(document.querySelector(".mobile-phone-preview-container .viewport")||document.querySelector("#render-container"))||document.querySelector("body")};t.getMobileViewportContainer=l;t.getMobileRenderContainer=function(e){return e===i.PREVIEW&&(document.querySelector(".mobile-phone-preview-container #render-container")||document.querySelector("#render-container"))||document.querySelector("body")};t.getMobileViewportHeight=function(e){if("undefined"==typeof document||e!==i.PREVIEW)return"100vh";var t=l(e);if(!t)return"100vh";var n=document.querySelector(".mobile-phone-preview-container .ux-scaled"),o=1;if(n){var a=(0,r.get)(n,"style.transform","").match(/[0-9.]+/);a&&a.length>0&&(o=a[0])}return t.getBoundingClientRect().height/o}},function(e,t){e.exports=keyMirror},function(e,t,n){"use strict";var r=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("undefined"==typeof window||o)return;o=!0;var e=window.EventTarget||window.Node,t=!1;if(document.createElement("div").addEventListener("test",function(){},{get passive(){return t=!0,!1}}),!t){var n=e.prototype.addEventListener,r=e.prototype.removeEventListener;e.prototype.addEventListener=function(e,t,r){var o="object"===(0,i.default)(r)?r.capture:r;n.call(this,e,t,o)},e.prototype.removeEventListener=function(e,t,n){var o="object"===(0,i.default)(n)?n.capture:n;r.call(this,e,t,o)}}};var i=r(n(2)),o=!1;e.exports=t.default},function(e,t,n){"use strict";var r=n(5),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(6)),l=i(n(14)),a=i(n(7)),u=i(n(8)),s=i(n(3)),c=i(n(9)),d=i(n(10)),f=i(n(11)),p=r(n(13)),h=i(n(12)),v=n(1),E=n(4),y=i(n(32)),g=n(15),m=i(n(16));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var O=function(e){(0,c.default)(n,e);var t=R(n);function n(){var e;return(0,a.default)(this,n),(e=t.apply(this,arguments)).handleChange=e.handleChange.bind((0,s.default)(e)),e.state={open:!1},e}return(0,u.default)(n,[{key:"handleChange",value:function(){this.setState({open:!this.state.open})}},{key:"componentDidUpdate",value:function(e,t){var n=t.open,r=this.props,i=r.enableNoOverlapDropdown,o=r.customToggleStyles;if(n!==this.state.open){var l=e.toggleId,a=document.getElementById(l);a&&(i&&(a.style.top="".concat(this.handleDropdownOffsetChange(),"px")),o?(0,v.merge)(a.style,o[this.state.open?"open":"close"]):a.style.display=this.state.open?"block":"none")}}},{key:"handleDropdownOffsetChange",value:function(){var e=this.props,t=e.navBarId,n=e.parentId,r=document.getElementById(t).getBoundingClientRect(),i=document.getElementById(n).getElementsByTagName("li")[0].getBoundingClientRect(),o=(0,g.getEditorPageScale)();return r&&i?(r.height-(i.top-r.top))/o:0}},{key:"render",value:function(){var e=this.props,t=e.label,r=e.renderCustomIcon,i=e.id,a=e.isActive,u=e.overrideIconStyle,s=e.dataAid,c=e.hasHover,d=this.state.open,f=(0,v.omit)(this.props,Object.keys(n.propTypes).concat(["Component","renderMode"])),h=d?"180":"0",g=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,l.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({position:"relative",color:"inherit"},u),R=t?p.default.createElement("span",{style:{marginRight:"4px"}},t):null;return p.default.createElement(y.default,(0,o.default)({onChange:this.handleChange,isActive:a},f,d&&this.props.activeProps,{"data-edit-interactive":!0,"aria-haspopup":"menu"}),p.default.createElement("div",{style:{pointerEvents:c?"auto":"none",display:"flex",alignItems:"center"},"data-aid":s||m.default.NAV_DROPDOWN},R,p.default.createElement(E.UX2.Element.Icon,{id:i,icon:r.name||"chevronDown",size:r.size||"small",minTarget:r.minTarget||!1,rotate:r.name?"":h,style:g})))}}]),n}(p.Component);O.propTypes={toggleId:h.default.string.isRequired,activeProps:h.default.object,label:h.default.string.isRequired,renderCustomIcon:h.default.object,id:h.default.string,isActive:h.default.bool,enableNoOverlapDropdown:h.default.bool,widgetId:h.default.string,overrideIconStyle:h.default.object,dataAid:h.default.string,hasHover:h.default.bool,navBarId:h.default.string,parentId:h.default.string,customToggleStyles:h.default.object},O.defaultProps={activeProps:{},label:"",renderCustomIcon:{},hasHover:!1};var _=O;t.default=_,e.exports=t.default},function(e,t,n){"use strict";var r=n(5),i=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(6)),l=i(n(14)),a=i(n(7)),u=i(n(8)),s=i(n(3)),c=i(n(9)),d=i(n(10)),f=i(n(11)),p=r(n(13)),h=i(n(33)),v=i(n(12)),E=n(1),y=n(4),g=n(34);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,l.default)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var O=function(e){(0,c.default)(n,e);var t=R(n);function n(){var e;return(0,a.default)(this,n),(e=t.apply(this,arguments)).handleClick=e.handleClick.bind((0,s.default)(e)),e.handleToggle=e.handleToggle.bind((0,s.default)(e)),e._id=(0,E.uniqueId)(),e.state={open:!1},e}return(0,u.default)(n,[{key:"componentDidMount",value:function(){this._link=h.default.findDOMNode(this),document.addEventListener("click",this.handleClick,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleClick,!1)}},{key:"shouldClose",value:function(e){var t=this.props,n=t.closeAttr,r=t.ignoreCloseAttr,i=t.closeOnOutsideClick,o=t.toggleId,l=!0;return n?l=(0,g.selfOrParentHasAttribute)(e.target,n):r&&(l=!(0,g.selfOrParentHasAttribute)(e.target,r)),!l&&o&&i&&(l=!(0,g.selfOrParentHasId)(e.target,o)),l&&!(0,g.selfOrParentHasId)(e.target,this._id)}},{key:"handleClick",value:function(e){this.state.open&&this.shouldClose(e)&&(this.setState({open:!1}),e.stopPropagation())}},{key:"handleToggle",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({open:!this.state.open})}},{key:"componentDidUpdate",value:function(e,t){var n=t.open,r=this.props.onChange;n!==this.state.open&&r(this.state.open)}},{key:"render",value:function(){var e=(0,E.omit)(this.props,["onChange","style"]),t=this.state.open,n=this.props,r=n.style,i=n.activeStyle,l=n.isActive,a=b({},b({},l?i:r)),u=l?y.UX2.Element.Link.DropdownActive:y.UX2.Element.Link.Dropdown;return p.default.createElement(u,(0,o.default)({tag:"a",style:a,href:"#",onClick:this.handleToggle,"data-toggle-ignore":!0,id:this._id,role:"button","aria-expanded":t},e))}}]),n}(p.Component);O.propTypes={onChange:v.default.func.isRequired,closeAttr:v.default.string,ignoreCloseAttr:v.default.string,activeStyle:v.default.object,style:v.default.object,closeOnOutsideClick:v.default.bool,toggleId:v.default.string,isActive:v.default.bool};var _=O;t.default=_,e.exports=t.default},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e,t,n){for(var r=e;r;){var i=r.getAttribute&&r.getAttribute(t);if(i&&(void 0===n||i===n))return!0;r=r.parentNode}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.selfOrParentHasAttribute=r,t.selfOrParentHasClass=function(e,t){var n=e;for(;n;){if(n.classList&&n.classList.contains(t))return!0;n=n.parentNode}return!1},t.selfOrParentHasId=function(e,t){return r(e,"id",t)},t.selfOrParentGetAttribute=function(e,t){var n=e;for(;n;){var r=n.getAttribute&&n.getAttribute(t);if(r)return r;n=n.parentNode}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="Number(window.vctElements)||(window.vctElements=0),window.vctElements++",e.exports=t.default}]);