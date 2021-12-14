import{S as e,i as t,s as n,e as s,t as l,a as o,b as r,c,d as i,n as a,f as d,g as m,h as u,j as f,k as g,l as p,m as h,o as v,p as b,q as C,r as k,u as w,v as $}from"./vendor.29539669.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function y(e,t,n){const s=e.slice();return s[1]=t[n],s}function _(e){let t,n,m,u,f,g,p,h=e[1].name+"";return{c(){t=s("a"),n=s("i"),u=s("span"),f=l(h),o(n,"class",m="fab fa-"+e[1].id+" svelte-1mo4ttg"),o(u,"class","svelte-1mo4ttg"),o(t,"href",g=e[1].link),o(t,"class",p="link "+e[1].id+" svelte-1mo4ttg"),r(t,"color",e[1].color),r(t,"background-color",e[1].bg_color),o(t,"target","_blank"),o(t,"rel","noreferrer")},m(e,s){c(e,t,s),i(t,n),i(t,u),i(u,f)},p:a,d(e){e&&d(t)}}}function x(e){let t,n,l,r,g,p,h,v,b,C,k,w,$=e[0],x=[];for(let s=0;s<$.length;s+=1)x[s]=_(y(e,$,s));return{c(){t=s("main"),n=s("div"),l=s("div"),r=s("img"),p=m(),h=s("div"),v=s("div"),v.textContent="S0n1c",b=m(),C=s("div"),C.innerHTML='21 year old full-stack Web Developer.<br/>Working at <a class="link svelte-1mo4ttg" href="https://zenithdevs.com" target="_blank">Zenith Dev Team</a>.',k=m(),w=s("div");for(let e=0;e<x.length;e+=1)x[e].c();u(r.src,g="/assets/me.8de087c7.png")||o(r,"src","/assets/me.8de087c7.png"),o(r,"alt","My Logo"),o(r,"class","svelte-1mo4ttg"),o(l,"class","logo svelte-1mo4ttg"),o(v,"class","name svelte-1mo4ttg"),o(C,"class","bio svelte-1mo4ttg"),o(w,"class","links svelte-1mo4ttg"),o(h,"class","card svelte-1mo4ttg"),o(n,"class","top-header svelte-1mo4ttg"),o(t,"class","svelte-1mo4ttg")},m(e,s){c(e,t,s),i(t,n),i(n,l),i(l,r),i(n,p),i(n,h),i(h,v),i(h,b),i(h,C),i(h,k),i(h,w);for(let t=0;t<x.length;t+=1)x[t].m(w,null)},p(e,[t]){if(1&t){let n;for($=e[0],n=0;n<$.length;n+=1){const s=y(e,$,n);x[n]?x[n].p(s,t):(x[n]=_(s),x[n].c(),x[n].m(w,null))}for(;n<x.length;n+=1)x[n].d(1);x.length=$.length}},i:a,o:a,d(e){e&&d(t),f(x,e)}}}function L(e){return[[{name:"Twitter",id:"twitter",link:"https://twitter.com/s0n1c_dev",color:"#00aced",bg_color:"rgba(0, 172, 237, 0.2)"},{name:"GitHub",id:"github",link:"https://github.com/itss0n1c",color:"#000",bg_color:"#ddd"},{name:"Discord",id:"discord",link:"https://discord.gg/VBTtGRg",color:"#7289da",bg_color:"rgba(114, 137, 218, 0.2)"},{name:"Reddit",id:"reddit",link:"https://reddit.com/u/S0n1cCA",color:"#ff4500",bg_color:"rgba(255, 69, 0, 0.2)"}]]}class S extends e{constructor(e){super(),t(this,e,L,x,n,{})}}function I(e){let t,n,s,r,m;return{c(){t=g("svg"),n=g("title"),s=l("v5 - Skull"),r=g("g"),m=g("path"),o(m,"d","M126.344348,751.459794 C103.624553,710.0526 87.1773181,670.249235 77.0026422,632.0497 C70.3914683,607.228883 42.378048,523.485229 53.0508844,473.909336 C55.9696527,460.351502 70.3697998,453.999076 96.2513256,454.852059 L96.2513251,454.852074 C97.3249862,454.887458 98.3356217,454.346068 98.9010171,453.432653 C203.664141,284.18426 324.700524,178.586002 462.010169,136.637878 C578.390777,101.08358 682.136286,105.637835 773.246695,150.300644 C777.213944,152.245411 778.85349,157.038046 776.908723,161.005295 C776.774014,161.280096 776.623647,161.546941 776.458364,161.804514 L718.579743,252.00075 C716.491852,255.254457 717.436931,259.584678 720.690637,261.672571 C721.225452,262.01576 721.804508,262.284527 722.411847,262.471465 C812.143855,290.090903 872.891141,314.506939 904.653705,335.719576 C935.681825,356.441713 967.909904,394.605032 1001.33794,450.209533 L1001.33794,450.209534 C1003.6144,453.996211 1002.39012,458.911351 998.603442,461.187807 C997.842904,461.645023 997.011595,461.972517 996.143564,462.156874 C938.305343,474.440851 895.295516,485.700892 867.114084,495.936998 C843.424216,504.541671 824.239994,513.463345 809.561419,522.702019 L809.561417,522.702014 C806.289543,524.761327 805.306568,529.083107 807.365881,532.354981 C808.112367,533.541011 809.197659,534.475679 810.481284,535.038008 C854.392124,554.274411 885.782931,572.365767 904.653705,589.312079 C934.122092,615.775247 957.009252,649.300181 973.315186,689.886881 L973.31519,689.88688 C974.9623,693.986663 972.974017,698.645441 968.874233,700.292552 C968.288259,700.527971 967.676471,700.693179 967.051646,700.784728 C857.975897,716.76642 782.300026,731.762913 740.024036,745.774207 C696.480983,760.205435 648.349993,785.614033 595.631066,822 C628.40861,780.261026 630.323007,750.916334 601.374258,733.965925 C562.194174,711.024745 508.094643,725.707726 439.075667,778.014868 C474.549712,717.809509 493.496378,673.804937 495.915664,646.001152 C503.655741,557.047883 455.161164,489.181468 402.518224,483.567177 C277.894977,470.276293 318.255578,733.965925 241.377201,733.965925 C170.897878,733.965925 129.12854,547.492284 103.151546,551.278387 C89.2212907,553.308698 86.4787849,589.338626 103.151546,658.657687 C108.121616,679.321368 119.648393,710.255403 137.731876,751.459794 L126.344348,751.459794 Z"),o(m,"id","Skull"),o(r,"id","v5---Skull"),o(r,"class","svelte-1lx9uhb"),o(t,"width","5rem"),o(t,"height","5rem"),o(t,"viewBox","0 0 1024 1024"),o(t,"version","1.1"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),o(t,"class","svelte-1lx9uhb")},m(e,l){c(e,t,l),i(t,n),i(n,s),i(t,r),i(r,m)},p:a,i:a,o:a,d(e){e&&d(t)}}}class A extends e{constructor(e){super(),t(this,e,null,I,n,{})}}function P(e){let t,n;return t=new A({}),{c(){k(t.$$.fragment)},m(e,s){w(t,e,s),n=!0},p:a,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function j(e){let t,n,l;return{c(){t=s("img"),o(t,"class","icon svelte-126lc4d"),u(t.src,n=e[0].icon)||o(t,"src",n),o(t,"alt",l=e[0].name+" icon")},m(e,n){c(e,t,n)},p(e,s){1&s&&!u(t.src,n=e[0].icon)&&o(t,"src",n),1&s&&l!==(l=e[0].name+" icon")&&o(t,"alt",l)},i:a,o:a,d(e){e&&d(t)}}}function D(e){let t,n,a,u,f,g,k,w,$,y,_,x,L,S,I,A=e[0].name+"",D=e[0].desc+"";const W=[j,P],M=[];function O(e,t){return e[1]?0:1}return u=O(e),f=M[u]=W[u](e),{c(){t=s("main"),n=s("a"),a=s("div"),f.c(),k=m(),w=s("div"),$=s("div"),y=l(A),_=m(),x=s("div"),L=l(D),o(a,"class","banner svelte-126lc4d"),o(n,"class","header svelte-126lc4d"),o(n,"href",g=e[0].link),r(n,"color",e[0].color),o(n,"target","_blank"),o(n,"rel","noreferrer"),o($,"class","name svelte-126lc4d"),o(x,"class","desc svelte-126lc4d"),o(w,"class","footer svelte-126lc4d"),o(t,"class","card svelte-126lc4d"),o(t,"style",S=(void 0!==e[0].bg_color?`background-color: ${e[0].bg_color}; `:"")+"color: "+e[0].color)},m(e,s){c(e,t,s),i(t,n),i(n,a),M[u].m(a,null),i(t,k),i(t,w),i(w,$),i($,y),i(w,_),i(w,x),i(x,L),I=!0},p(e,[s]){let l=u;u=O(e),u===l?M[u].p(e,s):(p(),h(M[l],1,1,(()=>{M[l]=null})),v(),f=M[u],f?f.p(e,s):(f=M[u]=W[u](e),f.c()),b(f,1),f.m(a,null)),(!I||1&s&&g!==(g=e[0].link))&&o(n,"href",g),(!I||1&s)&&r(n,"color",e[0].color),(!I||1&s)&&A!==(A=e[0].name+"")&&C(y,A),(!I||1&s)&&D!==(D=e[0].desc+"")&&C(L,D),(!I||1&s&&S!==(S=(void 0!==e[0].bg_color?`background-color: ${e[0].bg_color}; `:"")+"color: "+e[0].color))&&o(t,"style",S)},i(e){I||(b(f),I=!0)},o(e){h(f),I=!1},d(e){e&&d(t),M[u].d()}}}function W(e,t,n){let{proj:s}=t,l=!0;return void 0===s.icon&&(l=!1),e.$$set=e=>{"proj"in e&&n(0,s=e.proj)},[s,l]}class M extends e{constructor(e){super(),t(this,e,W,D,n,{proj:0})}}function O(e,t,n){const s=e.slice();return s[1]=t[n],s}function T(e){let t,n;return t=new M({props:{proj:e[1]}}),{c(){k(t.$$.fragment)},m(e,s){w(t,e,s),n=!0},p:a,i(e){n||(b(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){$(t,e)}}}function B(e){let t,n,l,r,a,u=e[0],g=[];for(let s=0;s<u.length;s+=1)g[s]=T(O(e,u,s));const C=e=>h(g[e],1,1,(()=>{g[e]=null}));return{c(){t=s("main"),n=s("div"),n.textContent="Projects",l=m(),r=s("div");for(let e=0;e<g.length;e+=1)g[e].c();o(n,"class","title svelte-m8a607"),o(r,"class","cards svelte-m8a607"),o(t,"class","svelte-m8a607")},m(e,s){c(e,t,s),i(t,n),i(t,l),i(t,r);for(let t=0;t<g.length;t+=1)g[t].m(r,null);a=!0},p(e,[t]){if(1&t){let n;for(u=e[0],n=0;n<u.length;n+=1){const s=O(e,u,n);g[n]?(g[n].p(s,t),b(g[n],1)):(g[n]=T(s),g[n].c(),b(g[n],1),g[n].m(r,null))}for(p(),n=u.length;n<g.length;n+=1)C(n);v()}},i(e){if(!a){for(let e=0;e<u.length;e+=1)b(g[e]);a=!0}},o(e){g=g.filter(Boolean);for(let t=0;t<g.length;t+=1)h(g[t]);a=!1},d(e){e&&d(t),f(g,e)}}}function R(e){return[[{name:"Parcility",icon:"https://parcility.co/assets/icon_transp.png",link:"https://parcility.co",desc:"Web-based iOS APT browser.",bg_color:"#6264d3",color:"white"},{name:"iPACandy",icon:"https://api.ipacandy.com/assets/glyph-white.png",link:"https://ipacandy.com",desc:"An IPA Library to put you at ease.",bg_color:"#ff2370",color:"#fff"},{name:"IPA Installer",link:"https://s0n1c.ca/ipa-installer/",desc:"Install IPAs from any URL."},{name:"IPSWInfo",link:"https://s0n1c.ca/ipswinfo",desc:"A way to find and download IPSW files."},{name:"iDevice Info",link:"https://s0n1c.ca/idevice-info",desc:"Retrieve useful information about your iOS/iPadOS device."},{name:"Webclip Maker",link:"https://s0n1c.ca/webclip-maker/",desc:"A site for creating webclips with ease."},{name:"UDID Fetcher",link:"https://github.com/itss0n1c/udid-fetcher",desc:"An ExpressJS middleware for fetching iOS device info."}]]}class E extends e{constructor(e){super(),t(this,e,R,B,n,{})}}function N(e){let t,n,l,o,r;return n=new S({}),o=new E({}),{c(){t=s("main"),k(n.$$.fragment),l=m(),k(o.$$.fragment)},m(e,s){c(e,t,s),w(n,t,null),i(t,l),w(o,t,null),r=!0},p:a,i(e){r||(b(n.$$.fragment,e),b(o.$$.fragment,e),r=!0)},o(e){h(n.$$.fragment,e),h(o.$$.fragment,e),r=!1},d(e){e&&d(t),$(n),$(o)}}}new class extends e{constructor(e){super(),t(this,e,null,N,n,{})}}({target:document.getElementById("app")});
