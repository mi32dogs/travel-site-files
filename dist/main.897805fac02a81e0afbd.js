!function(e){function t(t){for(var i,s,l=t[0],c=t[1],a=t[2],d=0,h=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&h.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);h.length;)h.shift()();return n.push.apply(n,a||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],i=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(i=!1)}i&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var i={},o={0:0},n=[];function s(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,i){r=o[e]=[t,i]}));t.push(r[2]=i);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=function(e){return s.p+""+({1:"modal"}[e]||e)+"."+{1:"17b4b3383f0c555d4834"}[e]+".js"}(e);var c=new Error;n=function(t){l.onerror=l.onload=null,clearTimeout(a);var r=o[e];if(0!==r){if(r){var i=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,r[1](c)}o[e]=void 0}};var a=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var u=c;n.push([16,2]),r()}({16:function(e,t,r){"use strict";r.r(t);r(5),r(6);var i=class{constructor(){this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}events(){this.menuIcon.addEventListener("click",()=>this.toggleTheMenu())}toggleTheMenu(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}},o=r(1),n=r.n(o),s=r(0),l=r.n(s);var c=class{constructor(e,t){this.itemsToReveal=e,this.thresholdPercent=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=n()(this.calcCaller,200).bind(this),this.events()}events(){window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",l()(()=>{this.browserHeight=window.innerHeight},333))}calcCaller(){this.itemsToReveal.forEach(e=>{0==e.isRevealed&&this.calculateIfScrolledTo(e)})}calculateIfScrolledTo(e){if(window.scrollY+this.browserHeight>e.offsetTop){e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visable"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}}hideInitially(){this.itemsToReveal.forEach(e=>{e.classList.add("reveal-item"),e.isRevealed=!1}),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}};var a=class{constructor(){this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}events(){window.addEventListener("scroll",n()(()=>this.runOnScroll(),200)),window.addEventListener("resize",l()(()=>{this.browserHeight=window.innerHeight},333))}runOnScroll(){this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach(e=>this.calcSection(e))}determineScrollDirection(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}calcSection(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){let t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){let t=e.getAttribute("data-matching-link");document.querySelectorAll(`.primary-nav a:not(${t})`).forEach(e=>e.classList.remove("is-current-link")),document.querySelector(t).classList.add("is-current-link")}}}};alert("here"),new c(document.querySelectorAll(".feature-item"),75),new c(document.querySelectorAll(".testimonial"),60);let u;new i,new a;document.querySelectorAll(".open-modal").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),void 0===u?(r.e(1).then(r.bind(null,17)).then(e=>{u=new e.default}).catch(()=>console.log("error")),setTimeout(()=>u.openTheModal(),20)):u.openTheModal()})})},5:function(e,t,r){}});