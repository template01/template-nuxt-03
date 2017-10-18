importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.33c58775b50ac425b57c.js",
    "revision": "32c0625d6c777e92f600ed32e75a03d9"
  },
  {
    "url": "/_nuxt/common.a309b85828469836a7e3.js",
    "revision": "4af884256a72f3e8ff4a03e86ee2d2f3"
  },
  {
    "url": "/_nuxt/layouts/default.07845764913334cd2dff.js",
    "revision": "70d3264f7d088cd8e65199d5e3f6c671"
  },
  {
    "url": "/_nuxt/manifest.d184f1f2615d7bec43a7.js",
    "revision": "da2f9eea94524b6bd810aea3061f43fe"
  },
  {
    "url": "/_nuxt/pages/contact.9aa6ab882a8fba65cfb5.js",
    "revision": "249f576c7b9d60ca123c49a6e59d8645"
  },
  {
    "url": "/_nuxt/pages/index.1842992397ec67b7d43d.js",
    "revision": "ba30094f437c5e2ce1b6809594d28873"
  },
  {
    "url": "/_nuxt/pages/services.b38178bcc8e08748b99d.js",
    "revision": "fc9c6339b68b567ec093a0bc11d1fe02"
  },
  {
    "url": "/_nuxt/pages/studio.4b340d1130b980dc578c.js",
    "revision": "3b5ebe607b176b986d71aade63f438d6"
  },
  {
    "url": "/_nuxt/pages/test.4221122a972b7c789342.js",
    "revision": "9a3a657d48b1a632850b85ea59257567"
  },
  {
    "url": "/_nuxt/pages/werk-slug.79703d11be36743fa866.js",
    "revision": "8564682dd8e6f625e75217e405ec705c"
  },
  {
    "url": "/_nuxt/pages/werk.4d591e4bfd9095a25e44.js",
    "revision": "ccd6f290712e3eac2f2c9653b30e3bb5"
  },
  {
    "url": "/_nuxt/pages/werkBak-slug.27f83b23204be382a98e.js",
    "revision": "6f91eb02809a7b20b150ed100371d3fc"
  },
  {
    "url": "/_nuxt/pages/werkBak.f6cc86fe96b5212af2dc.js",
    "revision": "79a84e55edd1472c356018e02b2ac78d"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "uikit-nuxt_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
