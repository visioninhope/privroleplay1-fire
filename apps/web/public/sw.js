if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const t=e=>i(e,c),f={module:{uri:c},exports:r,require:t};s[c]=Promise.all(n.map((e=>f[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-d25a3628"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LogoSVG-250x50.svg",revision:"6305cb20ee9221e8ab59306bb4e1d9ab"},{url:"/LogoSVG-32x32.svg",revision:"064b6e6f2ca87bba9515b3479da3b04e"},{url:"/_next/app-build-manifest.json",revision:"b4f262c9c733dfbadc6a7e7a3042a456"},{url:"/_next/static/D1MAmsk5HbOnLUiyI74DO/_buildManifest.js",revision:"24150d8ca612ef5c2ffa8c58f6f79be4"},{url:"/_next/static/D1MAmsk5HbOnLUiyI74DO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1423-b228df96f692986b.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/1486-55a2db2dd61a54cb.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/1711-d39aca03ec46d920.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/1738-203e7613b904c349.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/174688e1-faabd33301ec663e.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/1805-ff3b4de85e08f0b9.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/2171-4b264f988eb54f1b.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/2457-1777e63e61c8dc4f.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/2567-e46b886308932edb.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/2843-00436622c5b06452.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/3751-80907352b0f5e2f3.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/3977.9c1da067f0e158ee.js",revision:"9c1da067f0e158ee"},{url:"/_next/static/chunks/404.39b485d46e3def06.js",revision:"39b485d46e3def06"},{url:"/_next/static/chunks/4073-c066003fc54de7da.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/433-fd8c218f7ed91cac.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/4758-f214f7906caf6ce9.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/4841-b4b7f74d1342df41.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5010-e42fe90464bccf99.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5289-461928e0ef6a3a56.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5350-94cd3aaeaf36eb41.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5404-dfc73861b7e7dd2c.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5446-ecdd105cf507eea7.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5649.335f5130ba56e07c.js",revision:"335f5130ba56e07c"},{url:"/_next/static/chunks/5842-8d44ecc0d0c33204.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/5968-28283b05334d7f54.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/6376-27305f639f9ebcfa.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/6474-1fb2ee55ffcb3b79.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/648-8792b64219c17b8f.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/6499.4a03a0fc5fe8b18d.js",revision:"4a03a0fc5fe8b18d"},{url:"/_next/static/chunks/6924-6657c1dfd5534cb9.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/7469-4d2fcc713410d3da.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/755-08c09d695b65fc6a.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/7615-ed80116813feb1d2.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/7681-00126c179c6d1b04.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/7735.2661439298a530b1.js",revision:"2661439298a530b1"},{url:"/_next/static/chunks/8040-9be69f48a68f7b7d.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/8265.58d66fe634498d33.js",revision:"58d66fe634498d33"},{url:"/_next/static/chunks/873-c0e3db87618c2c5f.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/8850-3481e997887b4af2.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/9025-013f219218837e25.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/9281-9d31e4f6268811ba.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/9341-8fb4c86da9a36ec5.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/9832.838467573a34d1c7.js",revision:"838467573a34d1c7"},{url:"/_next/static/chunks/9949-c05e53eb0f341d58.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/9e33a154-83c20c71ca4f4230.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/_not-found-7cf939170954a7cd.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/character/%5Bid%5D/page-d73c5686fb14bed2.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/character/%5Bid%5D/stories/page-7539f3194aa04c4a.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/character/%5Bid%5D/story/%5BstoryId%5D/page-4bb88898b4261e18.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/characters/page-45e7bcccc67c2a56.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/chats/page-4983cb258ae1aa7a.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/crystal/terms/page-fce239b6ce767ba8.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/crystals/page-db3dd8be23b34fba.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/dmca/page-8af7caca114f4247.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/global-error-fa675bd7670a6a8a.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/image/%5Bid%5D/page-9ce4b0c6d645a29d.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/images/page-0fe8755d39db6d24.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/layout-7a2e74af475cb1ed.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/loading-ba2d56acff3fb2d0.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/models/page-b7bbb7fb0cc33372.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/my-characters/create/page-be6fdd1a40ef42a8.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/my-characters/page-df4edaceaf6b50e7.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/my-personas/page-e50cbd545e24f8e2.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/my/page-fb4bc241d3a948ef.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/page-9972ca68297635dc.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/safety/page-5cc9b0369ee85a9c.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/search/page-73170ab7dbde4ba5.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/sign-in/page-a4296badd0a0b2c6.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/stories/page-6215f93ccda7243d.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/wallet/page-79a7db71dc5c6f5d.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/app/wallet/unlock/%5Bmethod%5D/page-68cb8964e80f0221.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/e5c2b562-0bf1a69cc43bf9fb.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/framework-af9b1d45774ad36d.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/main-1449f90437f56218.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/main-app-7f9faf67730497a0.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/pages/_app-ba325febef9e5857.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/pages/_error-3cb3ad2da4ff4990.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b07f81fca70c5bae.js",revision:"D1MAmsk5HbOnLUiyI74DO"},{url:"/_next/static/css/079deb68950c6702.css",revision:"079deb68950c6702"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/5dfb1d0134f1564c-s.p.otf",revision:"8088caee968a1baa9e8ff0ed9cd84b98"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/circles.svg",revision:"2517f9eb2aa231a483a2b0c27da9d454"},{url:"/image-failed.jpg",revision:"f3c59c17acdd2f666c8b2b66b06540f8"},{url:"/locales/af.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/ar.json",revision:"c95b8c2276a408b1d6de0e9295056091"},{url:"/locales/ca.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/cs.json",revision:"469162efb5dbfd3688d42dc1a5fc4b3d"},{url:"/locales/da.json",revision:"f216a5020c44f2a3e37ad568480dfe71"},{url:"/locales/de.json",revision:"222ba11956b63e9fe8c3f5d3f34af6d1"},{url:"/locales/el.json",revision:"48d363ae66d0a418f2b39e781ecb969d"},{url:"/locales/en.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/es.json",revision:"ec4182f71b3ed3132e1d136498a0579c"},{url:"/locales/fi.json",revision:"601eb955a214d65c45a96fbbcd2b02df"},{url:"/locales/fr.json",revision:"913c3f1beda07bd8bcfaf52c22b4a67c"},{url:"/locales/he.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/hi.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/hu.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/it.json",revision:"9f42cc13345c3fc7a445a36ad3e4ca48"},{url:"/locales/ja.json",revision:"6f5cb7581310d00ce89f93937f596811"},{url:"/locales/ko.json",revision:"5e70ddb77ce5168e3760102b7d847401"},{url:"/locales/nl.json",revision:"dd403fbe001192f417ae58130296af0b"},{url:"/locales/no.json",revision:"5d9f35a0a27d74b007a36097b65c6aad"},{url:"/locales/pl.json",revision:"3ace3ef83917b1541376ba4b31666134"},{url:"/locales/pt.json",revision:"d92cf93ce00fbfa6be1b9a68c5b6cbd0"},{url:"/locales/ro.json",revision:"c7fb7ed118287eb895082dc44e1b0029"},{url:"/locales/ru.json",revision:"d0936a943a5df6072a7c5528d9d99b24"},{url:"/locales/source/en.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/sr.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/sv.json",revision:"d1ea877df07543456e1939bb9133d559"},{url:"/locales/tr.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/uk.json",revision:"e11afd27041cf60250de975ab4ddcd05"},{url:"/locales/vi.json",revision:"4bf6fe9fd4f77f7e7d2279d7236e0e30"},{url:"/locales/zh.json",revision:"0631da7549256891caa77b7a04567789"},{url:"/models/claude.png",revision:"3e6e8330027dc9369c471b634cfd28b1"},{url:"/models/google.png",revision:"886f3b5d416d9e0ceb1c587c50797dca"},{url:"/models/meta.png",revision:"55e27bfec4c68cbd5b21bb0252678774"},{url:"/models/mistral.png",revision:"1a54eaf9c7ff9879ae5d032aa0e77a3d"},{url:"/models/openai.png",revision:"9da0c2d23c2b268a1071ce3b2011c462"},{url:"/models/perplexity.png",revision:"e4434a95089af43db6bd32f7ca4584d0"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/og.jpg",revision:"133a6c8aa0d1650fad43a097dcc8d336"},{url:"/orp.svg",revision:"07332768de5358184d92c5a977393e84"},{url:"/privacy.html",revision:"405c8ed5dcac7ff2050b24edf917cd56"},{url:"/pwa/icon-192x192.png",revision:"f413ace07a7f71b53c589d4268333dd1"},{url:"/pwa/icon-256x256.png",revision:"f235455ba619ffccc3314c1ee32e0de3"},{url:"/pwa/icon-384x384.png",revision:"61f79df1287f5550bc2f7afc1af86f39"},{url:"/pwa/icon-512x512.png",revision:"f41c6fdc90ea1c6aff52b727bdd3d1fb"},{url:"/pwa/ipad_splash.png",revision:"efd2d39ef7d2ab4fb9db9ec816deac28"},{url:"/pwa/ipadpro1_splash.png",revision:"294d83feb16517264372a4cc250371d1"},{url:"/pwa/ipadpro2_splash.png",revision:"1dd04bfce3b6ba114336dd60fc7d5009"},{url:"/pwa/ipadpro3_splash.png",revision:"76955a3ad5cf3d8b2777ab07c811b085"},{url:"/pwa/iphone5_splash.png",revision:"f41569b12fd6fb4a62a3fe568eed0a1f"},{url:"/pwa/iphone6_splash.png",revision:"809ba5ad99d488d3e5687a860a2ff79f"},{url:"/pwa/plus_splash.png",revision:"a8b137948e02abb20cb6ea467bb4b7b8"},{url:"/pwa/x_splash.png",revision:"8ad7d7819202604fdebf4a09d9f077af"},{url:"/pwa/xr_splash.png",revision:"d0882d8bd15bc24b3189efb46cba4e4d"},{url:"/pwa/xsmax_splash.png",revision:"08b52c6365e2afaeffee32295638be67"},{url:"/robots.txt",revision:"ea3a379c50c3bfc7b4965c6119cf0bff"},{url:"/shop/crystal.png",revision:"b8c4b1daffa4c8cdb824737494ba5124"},{url:"/shop/orp+.jpg",revision:"936479aa319462038eb84b9e17ef7cd1"},{url:"/shop/tier1.png",revision:"176f821f15c960ef3350708e755212ae"},{url:"/shop/tier2.png",revision:"126fc5a824f2a77e9916d08a43075b85"},{url:"/shop/tier3.png",revision:"0ee1ff597285e2f7e587016f52dd6438"},{url:"/shop/tier4.png",revision:"5cd8ad170a688ddd9e93064040ecd9b0"},{url:"/shop/tier5.png",revision:"373b07998284f2fe6fd6379b77eb1856"},{url:"/shop/tier6.png",revision:"18ce4f0c1c2f0b5aa67003cfb009ed36"},{url:"/terms.html",revision:"e25e377b1ece6dec65c0af3b3748ffc9"},{url:"/turborepo.svg",revision:"3d86b98e3d7c252c00dad343f37e6191"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
