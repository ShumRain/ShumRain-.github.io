/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aba36717b8cede49cb85ff1342d38128"
  },
  {
    "url": "assets/css/0.styles.89303249.css",
    "revision": "f858d2e2cc61a435556da7f368cda49c"
  },
  {
    "url": "assets/js/10.cffd2df3.js",
    "revision": "a1ff8e2fb14c0a10fdc8036ebc418904"
  },
  {
    "url": "assets/js/11.ef3cf604.js",
    "revision": "3668e641abd3e5af0f476f8e820e22db"
  },
  {
    "url": "assets/js/12.099d304b.js",
    "revision": "826f250ddf7c80861f15f2d144363aea"
  },
  {
    "url": "assets/js/13.61c84d14.js",
    "revision": "2069b129e2aac7e030af4ac34565db1e"
  },
  {
    "url": "assets/js/14.ecda0291.js",
    "revision": "6a23912d0d11e81b8b6e87b118b3b7be"
  },
  {
    "url": "assets/js/2.8283421a.js",
    "revision": "dae23b7b0ebd8e22e059a5da8752fcba"
  },
  {
    "url": "assets/js/3.032bdd2b.js",
    "revision": "130587bf3e5b9fb7a7a5e7c9c3bc90fa"
  },
  {
    "url": "assets/js/4.5833a92b.js",
    "revision": "83dffce6a49ebf36abde100a6973ea19"
  },
  {
    "url": "assets/js/5.773626c7.js",
    "revision": "708bd6debec2b238913237fd6db2afc3"
  },
  {
    "url": "assets/js/6.69e9734e.js",
    "revision": "31f807ea00f9e31e1091f2f500a4dce3"
  },
  {
    "url": "assets/js/7.c39c5524.js",
    "revision": "5c571f41b74265be90473687ae96e391"
  },
  {
    "url": "assets/js/8.8df0a8d8.js",
    "revision": "46cee0f64151c7a26780d5ea2488f411"
  },
  {
    "url": "assets/js/9.a2aea0b8.js",
    "revision": "351277dfaae802ccb7bb6ea89293597b"
  },
  {
    "url": "assets/js/app.cbe47b68.js",
    "revision": "738cfdee9468d1f2348011d1ab9bae8e"
  },
  {
    "url": "blog/img-test.html",
    "revision": "46d638ffb1f70022575daaae2189a5cb"
  },
  {
    "url": "blog/page-Visibility.html",
    "revision": "a4482a658c6c962ca70271c5693c97c4"
  },
  {
    "url": "blog/sass中的Mixin和placeholder.html",
    "revision": "ea13debf4a45135e8d16908f69811422"
  },
  {
    "url": "blog/个人的git配置.html",
    "revision": "f822cdaff319ce528da546e8cb56e40c"
  },
  {
    "url": "blog/作用域.html",
    "revision": "2df28b4d00e9e6b3c2da5b9cefa28d58"
  },
  {
    "url": "blog/变量对象.html",
    "revision": "c45e23eead62e44d4a2acd4b6d97e423"
  },
  {
    "url": "blog/执行上下文.html",
    "revision": "c609699d165d048ab7af0fa2f0c54cf7"
  },
  {
    "url": "blog/改变.html",
    "revision": "1c8dbff9208d83bfd46af22fa19e08ae"
  },
  {
    "url": "blog/更新计划.html",
    "revision": "31083b0027ca0be409a4775a34215453"
  },
  {
    "url": "index.html",
    "revision": "7c7ff99ae872941b05f90197fcbb9eca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
