if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),v={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>v[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"db4175507add50016f05609f19f2302d"},{url:"/_next/static/chunks/344-a4910f5c98b7a875.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/417-0c4910fa5eb85b0f.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/4bd1b696-8d89558ea0a6d7a2.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/63-a94a2cef3aab1b22.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/640-6a8a859df18f9c50.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/684-5de0de9f94a85292.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/727-79d0ad03c6328f50.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/82-c25217ee7c807f30.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/8e1d74a4-3dc5436e4c360f0d.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/923-5e9a90ddb61b236f.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/actualites/%5Bid%5D/page-6705bb3a182f46f2.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/actualites/page-94c4c1be79bd49a5.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/auth/page-1d57bc7f41a9f27c.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/cartes/%5Bid%5D/page-df59195ff5ada6df.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/cartes/page-f87f58bacb0e0e4b.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/collection/page-13e9548d292f426c.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/decks/page-3fb9cda304e003b5.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/guide/page-6504bc3b60d7d4c5.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/(pages)/outils/page-a3ecd75b25570908.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/_not-found/page-f9efcb4e2523544c.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/articles/%5Bid%5D/route-f7ddfd2f6cb5c6a2.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/articles/route-6fa9fab3434f4232.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/auth/login/route-933c578812d6b3b4.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/auth/logout/route-1cb543afccfa79cb.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/auth/me/route-d157ccad671ccd74.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/api/auth/signup/route-5f8ed3b92f634200.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/components/Newsletter/page-9f5c4c680a0f3c12.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/layout-0ac8bc072e3aba4b.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/app/page-8125a756949d0714.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/main-1eef0b134a4d12ac.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/main-app-dc979fdb9ade57d6.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/pages/_app-b3eb694be5fbf7e0.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/pages/_error-bd129d02791125e2.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-29ebadaebe2fcb3f.js",revision:"evNe09EVCvwc60F00vGE8"},{url:"/_next/static/css/14b760364a11adf4.css",revision:"14b760364a11adf4"},{url:"/_next/static/evNe09EVCvwc60F00vGE8/_buildManifest.js",revision:"249a35a0bd2319853d946c7d0f92dbe0"},{url:"/_next/static/evNe09EVCvwc60F00vGE8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/fonts/Beleren.ttf",revision:"06d6a788ef38be4434a7f1e324c5cf67"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/images/banner.png",revision:"4b474ecf2eda75eb2216c1bf5d7e6169"},{url:"/images/bg.png",revision:"215e051ae15fac8f29c5a339cfd7a2ea"},{url:"/images/bg2.png",revision:"70a33b8cfe83dd53cefdcd89013712a0"},{url:"/images/hero-bg.jpg",revision:"8a76ca6e790970df8656e560bbfbb2bf"},{url:"/images/icon-192x192.png",revision:"f86aa2dcdc6ac7489025a489d529a238"},{url:"/images/icon.png",revision:"d0d51893197b7a26e6c7e12056941f98"},{url:"/images/imggathering.png",revision:"49695e051e7774110a8afc0159be9990"},{url:"/images/magicPerso.png",revision:"d125af73a0ce6fdf702bd78e736eca51"},{url:"/manifest.json",revision:"3d159821e183e1959c7411bb2e49fcf7"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/topography.svg",revision:"5710ccdfe04efd3beb9743f69c6f6f6f"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
