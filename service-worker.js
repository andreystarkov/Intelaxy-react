"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Intelaxy-react/index.html","f9f5a70c722ef3f6539ac6ea6c2b8a07"],["/Intelaxy-react/static/css/main.24895ca6.css","4a1eef27bac82ba01fe34e4fca34dce7"],["/Intelaxy-react/static/js/main.f7f09fd3.js","6a12f7d5d5921aa12f9e84b4853667db"],["/Intelaxy-react/static/media/3.ea961593.svg","ea961593561504f6d43ebf628c7f0a07"],["/Intelaxy-react/static/media/DINRoundPro-Medi.756ea0bb.woff","756ea0bbac46277c59c073fb693d534a"],["/Intelaxy-react/static/media/SFUIDisplay-Light.5a54ccb0.woff","5a54ccb05cfc2edd1f7c6ddbc6ccd7a8"],["/Intelaxy-react/static/media/SFUIDisplay-Medium.3662fabb.woff","3662fabbaedc46003cdf2c5234ef7d6a"],["/Intelaxy-react/static/media/SFUIDisplay-Regular.d7098048.woff","d70980480062e329d190a921ec0c96df"],["/Intelaxy-react/static/media/SFUIDisplay-Semibold.f47b21e4.woff","f47b21e4ce03bc40efaa75fa3573a773"],["/Intelaxy-react/static/media/android-disable.88006f49.svg","88006f49f2e541bf5ad3fb9babe25f0c"],["/Intelaxy-react/static/media/android-enable.664b14a4.svg","664b14a446e878f66d4243e8e482dc15"],["/Intelaxy-react/static/media/bitmap-copy.44ee3c90.jpg","44ee3c902887edcf2c31b010d8c72c6a"],["/Intelaxy-react/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/Intelaxy-react/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/Intelaxy-react/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/Intelaxy-react/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/Intelaxy-react/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/Intelaxy-react/static/media/i-os-disable.00a5feaa.svg","00a5feaa31313e16b7d58ab7f5bb344d"],["/Intelaxy-react/static/media/i-os-enable.4b14d995.svg","4b14d9953b72c703f458e6a98bd89cad"],["/Intelaxy-react/static/media/i-os-hover-copy.33999cdb.svg","33999cdbaf9dc473b91133d4167a58d9"],["/Intelaxy-react/static/media/logo-copy.eabf5b7b.svg","eabf5b7bc855944b5c66dfbbd52a09cf"],["/Intelaxy-react/static/media/page-1-copy-2.e160972c.svg","e160972c474514a34d02fce64223e1d7"],["/Intelaxy-react/static/media/page-1-copy-3.55eb1fb1.svg","55eb1fb17407654cd125fc0a7da26bd4"],["/Intelaxy-react/static/media/page-1-copy-3.7cebe01b.png","7cebe01b592fdcfb42bdd1468f97cf89"],["/Intelaxy-react/static/media/page-1-copy-3@2x.3cdada02.png","3cdada02b9104cfaf4e87bd346b44bfd"],["/Intelaxy-react/static/media/page-1-copy-3@3x.287913a9.png","287913a96c8a2897ad4d91fc25a32df2"],["/Intelaxy-react/static/media/page-1.dbcb5cb8.svg","dbcb5cb8baa312eea3bed87fe3baa632"],["/Intelaxy-react/static/media/path-2-copy-3.d7cb7706.svg","d7cb77066a0a3060f713ddff1e1096a3"],["/Intelaxy-react/static/media/portfolio-todoya.64e13280.jpg","64e13280b7c6ec5541a247ba829566df"],["/Intelaxy-react/static/media/portfolio-todoya@2x.5bf81442.jpg","5bf81442c2e955ab43e83dc45053ac15"],["/Intelaxy-react/static/media/rails-logo-disable.2b198255.svg","2b198255142ac41462b13da4451a3389"],["/Intelaxy-react/static/media/rails-logo-enable.b53eefbd.svg","b53eefbdc5c9226decd227b24cfbe216"],["/Intelaxy-react/static/media/rails-logo-hover-copy.a178194e.svg","a178194e50d46a3b5a6ceaeb0bc767db"],["/Intelaxy-react/static/media/react-logo-disable.a0a3cecb.svg","a0a3cecbfbc705ca4957a57e42130ac1"],["/Intelaxy-react/static/media/react-logo-enable.4fd27d55.svg","4fd27d554649153ba2b5390ebcf1bd23"],["/Intelaxy-react/static/media/react-logo-hover-copy.fccd76c0.svg","fccd76c056f9ff1a9469fb8f5d07f9a5"],["/Intelaxy-react/static/media/rectangle-3-copy-2.6222cab5.svg","6222cab50536a8442e36a24d54bd2631"],["/Intelaxy-react/static/media/ripple.4d3b8f88.png","4d3b8f88ee7710b2fcb226de54b66047"],["/Intelaxy-react/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/Intelaxy-react/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/Intelaxy-react/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/Intelaxy-react/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Intelaxy-react/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});