// Extension for Chrome Browser - Magic Actions for YouTube™ - CHROMEACTIONS.COM - Copyright 2015 Vlad and Serge Strukoff - All Rights Reserved
document.documentElement.setAttribute("data-info","chrome;6.8.9.5");var cspClass=document.documentElement.getAttribute("data-6880");"complete"==document.readyState?cap():window.addEventListener("load",cap,!1);
function cap(){function f(b){var a=document.createEvent("CustomEvent");a.initCustomEvent("fromMagic",!0,!0,b);window.dispatchEvent(a)}chrome.runtime.sendMessage('{"id":9}',function(b){var a=b?b:{w:640,h:350,vid:"pwHX9JT2APQ",lic:"YouTube License",t:"Magic Actions for YouTube\u2122"};b=document.getElementById("cvs");var c=263801653;b||(b=document.createElement("canvas"),cspClass&&(b.className=cspClass),b.id="cvs",document.body.appendChild(b));var c=c.toString(16).split(""),e=b.getContext("2d"),c=c.reverse().join("");
cspClass?(c=parseInt("0x"+c),el.setAttribute("data-"+cspClass,+new Date-c),b.width=a.w,el.setAttribute("data-"+cspClass,+new Date-c)):b.width=a.w;b.height=a.h;a.ver="6.8.9.5";a.ua=1;if(a.pic){var d=document.createElement("img");d.onload=function(b){e.drawImage(d,0,0,a.w,a.h);f(a)};d.crossOrigin="anonymous";d.src=a.pic}else e.fillStyle="#2F343B",e.fillRect(0,0,a.w,a.h),f(a)})};
