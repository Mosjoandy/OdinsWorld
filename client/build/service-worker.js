"use strict";var precacheConfig=[["/index.html","60b7dd3b1024e285684bd780d0290bee"],["/static/css/main.40ce5d00.css","74a66248714cce35c0e9e0e1e319dd4c"],["/static/js/main.6795cf7d.js","f4c847ac81ba7bf2ee8a39e651a625be"],["/static/media/5-cards.fb9222b9.png","fb9222b9ce95f72db36a7d4fae2c57d1"],["/static/media/RB-card-1.9c8e6b84.png","9c8e6b84e2add4de3c831ceef3493feb"],["/static/media/RB-card-2.026d77f2.png","026d77f2493500dd3b81e3d9864ee607"],["/static/media/RB-card-3.e4abbe10.png","e4abbe10f46f45b899e68d1dd2678fe0"],["/static/media/actual-draw-phase.a6fafa4a.png","a6fafa4a510b38efffe9df033cb13186"],["/static/media/bg.82ab72e4.png","82ab72e49eb5a833cda58624da3ce9e7"],["/static/media/buttons.aca41bde.png","aca41bdea28c5382db0b150c5fb03d53"],["/static/media/coin-1.319f82ba.png","319f82ba2c8391d824d0e75dfaf638f1"],["/static/media/coin-2.74eaabb5.png","74eaabb50e656d4e3509c383ef8b5f15"],["/static/media/defeat.100f83f6.wav","100f83f6f575007f1827bf609c1daac1"],["/static/media/enter-draw-phase.f3ff7e1d.png","f3ff7e1ddaf554f493ce22ea53ebf8d1"],["/static/media/ex-1.8c995abd.png","8c995abdd7633c7fe79f4e46632e9615"],["/static/media/ex-2.06bbf46b.png","06bbf46b531f1c7e2939e6432702fc03"],["/static/media/left_bg.e62a1b2b.jpg","e62a1b2b4366e823678fb5c9def71c34"],["/static/media/loki-cards-16.272c41c1.png","272c41c1262d20acf6e04f577abf6475"],["/static/media/loki-cards-17.4d91b246.png","4d91b246d51228dd0ba16658167b4380"],["/static/media/loki-cards-19.f822adde.png","f822addee87d3d80dd4b3c2bd6ddd964"],["/static/media/loop-1.bb9b1438.png","bb9b14387c330ba13dafc8fb79ea854d"],["/static/media/loop-2.de7cd92b.png","de7cd92bd95cf681fc1ae759c6f680ce"],["/static/media/loop-3.a2af141e.png","a2af141ece8335327fddfced7e45f845"],["/static/media/paper-2-3.066d2a74.png","066d2a74647c8827096c57008e415e4e"],["/static/media/paper-info-background.3aa732f2.jpg","3aa732f2c42d6ea8109b3f43a7e2b11d"],["/static/media/right_bg.d59efb83.jpg","d59efb8330888424650c8f1e6315334d"],["/static/media/victorious.a6c26a81.wav","a6c26a8105857f56efeb4c84ed20659c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});