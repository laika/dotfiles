// Extension for Chrome Browser - Magic Actions for YouTube™ - CHROMEACTIONS.COM - Copyright 2015 Vlad and Serge Strukoff - All Rights Reserved
var cspClass=document.documentElement.getAttribute("data-6880"),loaded=!1;cspClass&&csp2();window.addEventListener("load",init,!1);
function init(){if("/magic-options.html"==location.pathname){var h=document.querySelector(".prefs"),k;h&&(k=document.createElement("iframe"),cspClass&&(k.className=cspClass),k.setAttribute("scrolling","no"),k.setAttribute("frameborder","0"),k.setAttribute("src",chrome.runtime.getURL("opt.html")),h.appendChild(k));if(h=document.querySelector(".appVer"))h.textContent="v6.8.9.5"}}
function csp2(){function h(c){for(var b=0,d=c.addedNodes.length;b<d;++b){var a=c.addedNodes[b],e=a.localName,f=!0;1==a.nodeType&&(a.restore?a.restore=f=!1:"head"==e||"br"==e||"title"==e||"meta"==e?f=!1:"a"==e||"link"==e?a.href&&g(a.href)&&(f=!1):"img"==e||"video"==e||"audio"==e?a.src&&g(a.src)&&(f=!1):"iframe"==e?f=a.src&&g(a.src)?!1:p(a):"object"==e||"embed"==e?f=!0:a.classList.contains(cspClass)?loaded?a.hasAttribute(m)&&(e=+new Date-(parseInt(a.getAttribute(m))+l+n),a.removeAttribute(m),-1E3<e&&
1E3>e&&(f=!1)):f=!1:f=r?p(a):!1,!1==loaded&&a.classList.contains("last")&&(loaded=!0),f&&(a.rem?(a.className=cspClass,a.style.setProperty("display","none","important")):(a.rem=!0,a.parentElement.removeChild(a))))}b=0;for(d=c.removedNodes.length;b<d;++b)a=c.removedNodes[b],e=a.localName,f=!1,1==a.nodeType&&(a.rem?f=!1:"a"==e||"link"==e?a.href&&g(a.href)&&(f=!0):"img"==e||"iframe"==e||"video"==e||"audio"==e?a.src&&g(a.src)&&(f=!0):"form"==e?a.action&&g(a.action)&&(f=!0):a.classList.contains(cspClass)&&
(f=!0),f&&(a.restore=!0,c.nextSibling?c.target.insertBefore(a,c.nextSibling):c.target.appendChild(a)))}function k(c){var b=c.target,d=c.attributeName;c=c.oldValue;var a=b.getAttribute(d);if(b.my)b.my=!1;else if("href"==d||"src"==d||"style"==d||"class"==d||"name"==d||"id"==d||"action"==d||"type"==d||"method"==d||"title"==d||"width"==d||"height"==d||"cols"==d||"rows"==d||0==d.indexOf("on")){if(b.hasAttribute(m)){var e=+new Date-(parseInt(b.getAttribute(m))+l+n);b.removeAttribute(m);if(-1E3<e&&1E3>e)return}if("href"==
d||"src"==d||"action"==d)a?c?g(a)||(b.my=!0,b.setAttribute(d,c)):g(a)||(b.my=!0,b.removeAttribute(d)):c&&g(c)&&(b.my=!0,b.setAttribute(d,c));else if("class"==d)c&&-1<c.indexOf(cspClass)&&(b.my=!0,b.className=c);else if(b.classList.contains(cspClass)||b.src&&g(b.src)||b.href&&g(b.href))b.my=!0,c?b.setAttribute(d,c):b.removeAttribute(d)}}function p(c){for(var b=c.parentElement;b;){if(b.classList.contains("ssb"))return!1;b=b.parentElement}if("style"==c.localName)return!0;c=c.getBoundingClientRect();
return 3>c.width&&3>c.height?!1:!0}function g(c){for(var b=0,d=q.length;b<d;b++)if(url=q[b],0==c.indexOf(url))return!0;return!1}var m="data-"+cspClass,r=-1<cspClass.indexOf("0")?!0:!1,l=263801653,n=100,q=["http://www.chromeactions.com/","https://www.chromeactions.com/","http://www.mixesoft.com/","https://www.mixesoft.com/","http://www.hotcleaner.com/","https://www.hotcleaner.com/","http://www.fastsatfinder.com/","https://www.fastsatfinder.com/","http://www.cinetonic.com/","http://www.thenextweb.com/",
"https://chrome.google.com/webstore/detail/abjcfabbhafbcdfjoecdgepllmpfceif/","https://chrome.google.com/webstore/detail/ghgabhipcejejjmhhchfonmamedcbeod/","https://chrome.google.com/webstore/detail/pdabfienifkbhoihedcgeogidfmibmhp/","https://chrome.google.com/webstore/detail/gjieilkfnnjoihjjonajndjldjoagffm/","https://chrome.google.com/webstore/detail/jjolhjmdgbhebcdnfjhngobjggghoipa/","https://chrome.google.com/webstore/detail/iphcomljdfghbkdcfndaijbokpgddeno/","https://chrome.google.com/webstore/detail/keifkkbjefbkgedeolmccljagcmphldp/",
"https://chrome.google.com/webstore/detail/cgaknhmchnjaphondjciheacngggiclo/","https://chrome.google.com/webstore/detail/dbhckmakhfceadaocgmgblaccdnjgaka/","https://chrome.google.com/webstore/detail/lbhnkcbcgpoichpnggihapncnopkijeb/","https://chrome.google.com/webstore/detail/kdfocinodgkchekeanmhdlemdoonpodf/","https://addons.mozilla.org/firefox/addon/clickclean/","https://addons.mozilla.org/firefox/addon/the-next-web/","https://addons.opera.com/extensions/details/magic-actions-for-youtube/","https://addons.opera.com/extensions/details/history-eraser/",
"https://naclhost-wwwss11.ssl.supercp.com/","https://youtube.com/subscription_center?add_user=StrukoffBrothers","https://plus.google.com/110367533603365326399","https://www.facebook.com/magicactions","https://www.youtube.com/channel/UCCwIAJrwWGB2GCyZSp41wNg","https://www.youtube.com/watch?v=UEE7a3dgLhY","https://twitter.com/intent/user?screen_name=chromeactions","https://www.pinterest.com/magicactions/","https://support.google.com/","http://googlechromereleases.blogspot.com/","http://www.opera.com/download/",
"https://www.mozilla.org/firefox/releases/",chrome.runtime.getURL("")],l=l.toString(16).split("");window.MutationObserver=window.WebKitMutationObserver||window.MutationObserver;var l=l.reverse().join(""),s=new MutationObserver(function(c){for(var b=0,d=c.length;b<d;++b){var a=c[b];"childList"==a.type?setTimeout(h,n,a):"attributes"==a.type&&setTimeout(k,n,a)}}),l=parseInt("0x"+l);s.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0})}
function $(h){return document.getElementById(h)};
