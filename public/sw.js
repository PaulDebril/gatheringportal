if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let c={};const r=e=>s(e,t),o={module:{uri:t},exports:c,require:r};a[t]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"8a153ac549af1a92c2379bedd210d3f3"},{url:"/_next/static/PyaipNSSKCYLhY1WPbRBJ/_buildManifest.js",revision:"5304cd75b236df2fe631e3bb0ce75986"},{url:"/_next/static/PyaipNSSKCYLhY1WPbRBJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/339-a9ce88f88f28b5c4.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/385cb88d-c12f8f59353a8f35.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/4bd1b696-8d89558ea0a6d7a2.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/59650de3-7b355df2af055721.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/5e22fd23-67415062c9693612.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/63-c6f4b89ab6ed5454.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/633-7198557b8d9615e0.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/684-6b64370c0233ae11.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/795d4814-4df9ff3b9af87758.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/874-e4d5365069d4fde5.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/8e1d74a4-60b26d32201be58c.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/account/page-e59900b1cb6ba086.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/actualites/%5Bid%5D/page-0d169a5486f42b9d.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/actualites/page-9feb42f0c3d0b257.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/auth/page-df4b1e57c3a90e5b.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/cartes/%5Bid%5D/page-fdef4b48714886a7.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/cartes/page-1a2168fbf2fbdd5c.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/collection/page-09c46d0ec6b1f65d.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/decks/page-2ce093fb135503a0.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/guide/page-4f4fb5f7138a9939.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/outils/lifecounter/page-449d29985b6bb518.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/(pages)/outils/page-cfa657ab713a509a.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/_not-found/page-1599d30195d758e9.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/articles/%5Bid%5D/route-f7ddfd2f6cb5c6a2.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/articles/route-6fa9fab3434f4232.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/auth/login/route-933c578812d6b3b4.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/auth/logout/route-1cb543afccfa79cb.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/auth/me/route-d157ccad671ccd74.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/api/auth/signup/route-5f8ed3b92f634200.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/components/Newsletter/page-00190d521d551aec.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/layout-30a30868ae9dad89.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/app/page-d1be87a136094b17.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/main-1eef0b134a4d12ac.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/main-app-dc979fdb9ade57d6.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/pages/_app-b3eb694be5fbf7e0.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/pages/_error-bd129d02791125e2.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-54b0d4a9dea78b86.js",revision:"PyaipNSSKCYLhY1WPbRBJ"},{url:"/_next/static/css/05fce57f522408c3.css",revision:"05fce57f522408c3"},{url:"/_next/static/css/4e701e9df2ea6178.css",revision:"4e701e9df2ea6178"},{url:"/_next/static/css/7ad056a92f2ed5d2.css",revision:"7ad056a92f2ed5d2"},{url:"/_next/static/css/d498c84e4ab246b3.css",revision:"d498c84e4ab246b3"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/fonts/Beleren.ttf",revision:"06d6a788ef38be4434a7f1e324c5cf67"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/images/banner.png",revision:"4b474ecf2eda75eb2216c1bf5d7e6169"},{url:"/images/bg.png",revision:"215e051ae15fac8f29c5a339cfd7a2ea"},{url:"/images/bg2.png",revision:"70a33b8cfe83dd53cefdcd89013712a0"},{url:"/images/hero-bg.jpg",revision:"8a76ca6e790970df8656e560bbfbb2bf"},{url:"/images/icon-192x192.png",revision:"f86aa2dcdc6ac7489025a489d529a238"},{url:"/images/icon.png",revision:"d0d51893197b7a26e6c7e12056941f98"},{url:"/images/imggathering.png",revision:"49695e051e7774110a8afc0159be9990"},{url:"/images/magicPerso.png",revision:"d125af73a0ce6fdf702bd78e736eca51"},{url:"/images/tool-banner.jpg",revision:"ac2c1f7e8e368c780c6a2d526012c177"},{url:"/images/tool-cardmarket.png",revision:"7c0ce1a89beca6e37642e8fe3aaa2bbf"},{url:"/images/tool-lifecounter.png",revision:"defb18934261d677820cb44f4639b6ac"},{url:"/images/tool-mana-box.png",revision:"79d51457e798bf55d11b52048d895ec1"},{url:"/images/tool-spelltable.png",revision:"feb7844417db70446e2a70566a020326"},{url:"/images/tool-tcg-player.png",revision:"405e2c11c577a449994b3a9b8340dca3"},{url:"/images/tool-untapped-gg.png",revision:"71cee69ae220516cedac58a7e2ecb85a"},{url:"/manifest.json",revision:"3d159821e183e1959c7411bb2e49fcf7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
