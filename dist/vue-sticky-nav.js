!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-sticky-nav",[],e):"object"==typeof exports?exports["vue-sticky-nav"]=e():t["vue-sticky-nav"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";var i=n(9),r=n(10),s={zIndex:1e3,stickyTop:0,threshold:0,disabled:!1,showButton:!1,scrollAnimate:!0,scrollShow:!1};e.a={data:function(){return{navs:[],activeIndex:0,isShowAll:!1,translateX:0,visable:!1,sticky:!1,stickyOptions:{}}},props:{options:{type:Object}},created:function(){this.stickyOptions=Object.assign({},s,this.options),this.navs=this.stickyOptions.navs},watch:{translateX:function(t,e){this.stickyOptions.scrollAnimate?this.tween(e,t):this.scrollView.scrollLeft=-t},activeIndex:function(t){var e=this;setTimeout(function(){e.navto(t)},0),this.$emit("changed",t)},isShowAll:function(t){this.$emit("expand",t);var e=this.getOverlay();e&&(e.style.display=t?"block":"none")}},computed:{sections:function(){if(this.stickyOptions.sectionSelector)return document.getElementsByClassName(this.stickyOptions.sectionSelector)},stickyNav:function(){return this.$refs.stickyNav},scrollView:function(){return this.$refs.scollView},buttonWidth:function(){return this.$refs.showAllButton.offsetWidth+"px"}},mounted:function(){this.stickyOptions.threshold=this.stickyOptions.threshold+this.stickyNav.offsetHeight+this.stickyOptions.stickyTop,window.addEventListener("scroll",Object(i.a)(this.scrollHandle,100)),this.stickyOptions.showButton&&(this.insertOverlay(),this.stickyNav.style.paddingRight=this.buttonWidth)},methods:{change:function(t){this.isShowAll=!1,this.scrollTo(t),this.$emit("click",t)},tween:function(t,e){function n(){r.a.update()&&requestAnimationFrame(n)}var i=this;new r.a.Tween({number:t}).to({number:e},100).onUpdate(function(t){i.scrollView.scrollLeft=-t.number}).start(),n()},scrollTo:function(t){var e=this.getScrollTopElement(this.sections[t]);window.scrollTo(0,e-this.stickyOptions.threshold)},getScrollTopElement:function(t){for(var e=0;void 0!==t.offsetParent&&null!=t.offsetParent;)e+=t.offsetTop+(null!=t.clientTop?t.clientTop:0),t=t.offsetParent;return e},scrollHandle:function(){var t=window.scrollY,e=this.getScrollTopElement(this.$el);if(this.stickyOptions.scrollShow&&(this.visable=t>=e),this.sections.length){t<e&&(this.activeIndex=0);var n=this.sections[this.sections.length-1];t>this.getScrollTopElement(n)+n.offsetHeight||t<e?this.sticky=!1:this.sticky=!0}for(var i=0;i<this.sections.length;i++){var r=this.sections[i],s=this.getScrollTopElement(r);s-this.stickyOptions.threshold<=t&&s+r.offsetHeight>t&&(this.activeIndex=i)}},navto:function(t){var e=this.$refs.navitem[t],n=e.offsetLeft,i=this.stickyNav.offsetWidth,r=this.stickyOptions.showButton?this.buttonWidth:0,s=this.scrollView.scrollWidth-this.stickyNav.offsetWidth+r;if(0!=s){var o=(i-e.offsetWidth)/2,a=0,c=Math.abs(this.translateX);if(n<=c+o){a=o-(n+this.translateX)}else a=-(n-c-o);var l=a+this.translateX;l>0&&(l=0),l<-s&&(l=-s),this.translateX=l}},expand:function(){this.isShowAll=!this.isShowAll},insertOverlay:function(){var t=this;if(!this.getOverlay()){var e=document.createElement("div");e.className="stickyNav-overlay",e.addEventListener("touchstart",function(){e.style.display="none",t.isShowAll=!1}),e.addEventListener("click",function(){e.style.display="none",t.isShowAll=!1}),document.body.appendChild(e)}},getOverlay:function(){return document.getElementsByClassName("stickyNav-overlay")[0]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);n.d(e,"StickyNav",function(){return i.a}),e.default={install:function(t){t.component("StickyNav",i.a)}}},function(t,e,n){"use strict";function i(t){n(3)}var r=n(0),s=n(12),o=n(8),a=i,c=o(r.a,s.a,!1,a,null,null);e.a=c.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("310b332e",i,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,'.sticky-nav-arrow:after,.sticky-nav-arrow:before{background:#3d3d3d;border-radius:.8vw;position:absolute;-webkit-transition:all .4s;transition:all .4s;content:""}.sticky-nav-container{position:relative;z-index:1000;height:10.66667vw}.sticky-nav-container .sticky-nav-fixed{width:100%;position:fixed}.hide-stickynav{height:0;overflow:hidden}.sticky-nav{height:10.66667vw;line-height:10.66667vw;background:#fff}.sticky-nav .scroll-view{overflow-x:scroll;white-space:nowrap;min-width:100%}.sticky-nav .sticky-nav-ul{width:100%;white-space:nowrap}.sticky-nav .sticky-nav-item{position:relative;display:inline-block;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-decoration:none;-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;color:#3d3d3d;padding:0 2vw;padding-left:4vw;margin-left:1.33333vw;font-size:3.46667vw}.sticky-nav .sticky-nav-item.active{color:#eb3033;font-weight:700}.sticky-nav .sticky-nav-item.active:before{content:"";position:absolute;top:50%;left:.66667vw;display:block;width:2.4vw;height:3.33333vw;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAZCAYAAAA8CX6UAAABi0lEQVQ4jZXUv0tVcRjH8ZdH3RoVhOQO7UEkpENk0eL9C4LKGivoDzCQaHAoqL1Gl1rdjO6QIQ4GkeDU4BK45NLqDdLhPkfOvT3fm/cDX87h+Xye9/f8eM4ZO7oyJ9Ei7uI2WujiJ7bxHl8GG8YGQC28w1JGb+gjHgUcVA1zDrvngIjMbvT0gVrYxMw5ILVmoqfVBL3F9AiQWtPRawILaBeCX2NXkbmWZNpYqLBcgDzDPF7EmsdKIbtc4XpifMLLpP4qvEHdqHAxMT4Udi55lypcSIzfQ0CZN17hIDHScQ9dTWoHlfyeH2M2qc/iSVLvVFhPjCls6U3weKx21KaS/Hr9rX3GzSQAf+I4WfC3cKue7OeFUA0oQc56a9A2NoaES9qI3r6vfwXHI0CONSa9CfqBtRFAa9GDf39sk/iGy/+B7OvNWv0i+q5IGA/0fq0ldfGwCclAsIfVIaBVfB8sZiB4g05S7+B11lAC/cV9HDZqh7iHk1FA8At39J5JN86PSuGJISDYwdPGeVGnOhxMGUmreiEAAAAASUVORK5CYII=) no-repeat;background-size:contain}.stickyNav-expand{background:#fff;height:10.66667vw;box-shadow:-1px 0 1px 0 rgba(0,0,0,.1);position:absolute;width:10vw;right:0;top:0;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.sticky-nav-arrow{width:5.33333vw;height:4vw;display:block;position:relative}.sticky-nav-arrow:after,.sticky-nav-arrow:before{width:2.66667vw;height:.8vw}.sticky-nav-arrow:before{-webkit-transform:translateY(2.66667vw) rotate(40deg);transform:translateY(2.66667vw) rotate(40deg);-webkit-transform-origin:100% 0;transform-origin:100% 0;right:42%}.sticky-nav-arrow:after{-webkit-transform:translateY(2.66667vw) rotate(-40deg);transform:translateY(2.66667vw) rotate(-40deg);-webkit-transform-origin:0 0;transform-origin:0 0;left:42%}.sticky-nav-arrow.expand:before{-webkit-transform:translateY(.66667vw) rotate(-40deg);transform:translateY(.66667vw) rotate(-40deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.sticky-nav-arrow.expand:after{-webkit-transform:translateY(.66667vw) rotate(40deg);transform:translateY(.66667vw) rotate(40deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.stickyNav-overlay{background:rgba(0,0,0,.7);position:fixed;width:100%;left:0;top:0;height:100%;display:none;z-index:999}.sticky-nav-expand-topbar{height:10.66667vw;line-height:10.66667vw;text-indent:2.66667vw;font-size:3.46667vw;background:#fff;color:#3d3d3d;position:absolute;top:0;z-index:1;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.sticky-nav-expand-panel{background:hsla(0,0%,100%,.9);padding:4vw 1.33333vw;left:0;top:10.66667vw;height:auto;overflow:hidden;position:absolute;z-index:1}.sticky-nav-expand-panel .sticky-nav-ul{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.sticky-nav-expand-panel .sticky-nav-item{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;color:#3d3d3d;font-size:3.46667vw;margin:2.66667vw 0;width:29.33333vw;padding:0;margin-right:2.66667vw;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;text-indent:1.6vw}.sticky-nav-expand-panel .sticky-nav-item.active{color:#eb3033}.sticky-nav-expand-panel .sticky-nav-item.active:before{display:none}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([s]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(i[s]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(s(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],r=0;r<n.parts.length;r++)o.push(s(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:o}}}}function r(){var t=document.createElement("style");return t.type="text/css",h.appendChild(t),t}function s(t){var e,n,i=document.querySelector("style["+y+'~="'+t.id+'"]');if(i){if(p)return v;i.parentNode.removeChild(i)}if(g){var s=d++;i=f||(f=r()),e=o.bind(null,i,s,!1),n=o.bind(null,i,s,!0)}else i=r(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function a(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),w.ssrId&&t.setAttribute(y,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(7),u={},h=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,p=!1,v=function(){},w=null,y="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){p=n,w=r||{};var s=l(t,e);return i(s),function(e){for(var n=[],r=0;r<s.length;r++){var o=s[r],a=u[o.id];a.refs--,n.push(a)}e?(s=l(t,e),i(s)):s=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var s=e[r],o=s[0],a=s[1],c=s[2],l=s[3],u={id:t+":"+r,css:a,media:c,sourceMap:l};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,i,r,s){var o,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):i&&(u=i),u){var h=l.functional,f=h?l.render:l.beforeCreate;h?(l._injectStyles=u,l.render=function(t,e){return u.call(e),f(t,e)}):l.beforeCreate=f?[].concat(f,u):[u]}return{esModule:o,exports:a,options:l}}},function(t,e,n){"use strict";function i(t){function e(){s=0,a=+new Date,r=t.apply(n,i),n=null,i=null}var n,i,r,s,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=0;return function(){n=this,i=arguments;var t=new Date-a;return s||(t>=o?e():s=setTimeout(e,o-t)),r}}e.a=i},function(t,e,n){"use strict";(function(t){var n=function(){this._tweens={},this._tweensAddedDuringUpdate={}};n.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,e){var n=Object.keys(this._tweens);if(0===n.length)return!1;for(t=void 0!==t?t:i.now();n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]];s&&!1===s.update(t)&&(s._isPlaying=!1,e||delete this._tweens[n[r]])}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var i=new n;i.Group=n,i._nextId=0,i.nextId=function(){return i._nextId++},"undefined"==typeof self&&void 0!==t&&t.hrtime?i.now=function(){var e=t.hrtime();return 1e3*e[0]+e[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?i.now=self.performance.now.bind(self.performance):void 0!==Date.now?i.now=Date.now:i.now=function(){return(new Date).getTime()},i.Tween=function(t,e){this._isPaused=!1,this._pauseStart=null,this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=i.Easing.Linear.None,this._interpolationFunction=i.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onRepeatCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=e||i,this._id=i.nextId()},i.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},isPaused:function(){return this._isPaused},to:function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},duration:function(t){return this._duration=t,this},start:function(t){this._group.add(this),this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?i.now()+parseFloat(t):t:i.now(),this._startTime+=this._delayTime;for(var e in this._valuesEnd){if(this._valuesEnd[e]instanceof Array){if(0===this._valuesEnd[e].length)continue;this._valuesEnd[e]=[this._object[e]].concat(this._valuesEnd[e])}void 0!==this._object[e]&&(void 0===this._valuesStart[e]&&(this._valuesStart[e]=this._object[e]),this._valuesStart[e]instanceof Array==!1&&(this._valuesStart[e]*=1),this._valuesStartRepeat[e]=this._valuesStart[e]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(1/0),this},pause:function(t){return this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=void 0===t?i.now():t,this._group.remove(this),this)},resume:function(t){return this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=(void 0===t?i.now():t)-this._pauseStart,this._pauseStart=0,this._group.add(this),this):this},stopChainedTweens:function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onRepeat:function(t){return this._onRepeatCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var e,n,i;if(t<this._startTime)return!0;!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),n=(t-this._startTime)/this._duration,n=0===this._duration||n>1?1:n,i=this._easingFunction(n);for(e in this._valuesEnd)if(void 0!==this._valuesStart[e]){var r=this._valuesStart[e]||0,s=this._valuesEnd[e];s instanceof Array?this._object[e]=this._interpolationFunction(s,i):("string"==typeof s&&(s="+"===s.charAt(0)||"-"===s.charAt(0)?r+parseFloat(s):parseFloat(s)),"number"==typeof s&&(this._object[e]=r+(s-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object,n),1===n){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(e in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[e]&&(this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(this._valuesEnd[e])),this._yoyo){var o=this._valuesStartRepeat[e];this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=o}this._valuesStart[e]=this._valuesStartRepeat[e]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,null!==this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,c=this._chainedTweens.length;a<c;a++)this._chainedTweens[a].start(this._startTime+this._duration);return!1}return!0}},i.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-i.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*i.Easing.Bounce.In(2*t):.5*i.Easing.Bounce.Out(2*t-1)+.5}}},i.Interpolation={Linear:function(t,e){var n=t.length-1,r=n*e,s=Math.floor(r),o=i.Interpolation.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[n],t[n-1],n-r):o(t[s],t[s+1>n?n:s+1],r-s)},Bezier:function(t,e){for(var n=0,r=t.length-1,s=Math.pow,o=i.Interpolation.Utils.Bernstein,a=0;a<=r;a++)n+=s(1-e,r-a)*s(e,a)*t[a]*o(r,a);return n},CatmullRom:function(t,e){var n=t.length-1,r=n*e,s=Math.floor(r),o=i.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(s=Math.floor(r=n*(1+e))),o(t[(s-1+n)%n],t[s],t[(s+1)%n],t[(s+2)%n],r-s)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):o(t[s?s-1:0],t[s],t[n<s+1?n:s+1],t[n<s+2?n:s+2],r-s)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=i.Interpolation.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var s=.5*(n-t),o=.5*(i-e),a=r*r;return(2*e-2*n+s+o)*(r*a)+(-3*e+3*n-2*s-o)*a+s*r+e}}},e.a=i}).call(e,n(11))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function s(t){if(h===clearTimeout)return clearTimeout(t);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function o(){v&&d&&(v=!1,d.length?p=d.concat(p):w=-1,p.length&&a())}function a(){if(!v){var t=r(o);v=!0;for(var e=p.length;e;){for(d=p,p=[];++w<e;)d&&d[w].run();w=-1,e=p.length}d=null,v=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:i}catch(t){h=i}}();var d,p=[],v=!1,w=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new c(t,e)),1!==p.length||v||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sticky-nav-container",class:{"hide-stickynav":t.stickyOptions.scrollShow&&!t.visable}},[n("div",{class:{"sticky-nav-fixed":t.sticky&&!t.options.disabled},style:"top:"+t.stickyOptions.stickyTop+"px;z-index:"+t.stickyOptions.zIndex+";"},[t.stickyOptions.showButton?n("span",{ref:"showAllButton",staticClass:"stickyNav-expand",on:{click:t.expand}},[n("span",{staticClass:"sticky-nav-arrow",class:{expand:t.isShowAll}})]):t._e(),t._v(" "),t.isShowAll?n("div",{staticClass:"sticky-nav-expand-topbar"},[t._v("请选择分类")]):t._e(),t._v(" "),n("div",{ref:"stickyNav",staticClass:"sticky-nav"},[n("div",{ref:"scollView",staticClass:"scroll-view"},[n("ul",{staticClass:"sticky-nav-ul"},t._l(t.navs,function(e,i){return n("li",{key:i,ref:"navitem",refInFor:!0,staticClass:"sticky-nav-item",class:{active:t.activeIndex==i},attrs:{index:i},domProps:{innerHTML:t._s(e)},on:{click:function(e){return t.change(i)}}})}),0)])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowAll,expression:"isShowAll"}],staticClass:"sticky-nav-expand-panel"},[n("ul",{staticClass:"sticky-nav-ul"},t._l(t.navs,function(e,i){return n("li",{key:i,staticClass:"sticky-nav-item",class:{active:t.activeIndex==i},domProps:{innerHTML:t._s(e)},on:{click:function(e){return t.change(i)}}})}),0)])])])},r=[],s={render:i,staticRenderFns:r};e.a=s}])});