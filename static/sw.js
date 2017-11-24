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
    "url": "/_nuxt/app.562f7af587c6ce51211f.js",
    "revision": "0a92d18e7d157fd4c71d7ec153fb78ed"
  },
  {
    "url": "/_nuxt/common.cdaa247ebef8d6d87846.js",
    "revision": "36d5700dc4eb8a0fa364e3704bdd46b6"
  },
  {
    "url": "/_nuxt/layouts/default.0b5605655093c8f4bb1c.js",
    "revision": "2e733d31e4fab0ab40e20fb7591c31db"
  },
  {
    "url": "/_nuxt/manifest.b2f13436d7e4dc0d3a63.js",
    "revision": "74d96b0f180ea872264bb810181fda26"
  },
  {
    "url": "/_nuxt/pages/contact.de1a7511b5cea4591e8b.js",
    "revision": "5f9d9a5171f3861e6ef7ee872df0f780"
  },
  {
    "url": "/_nuxt/pages/index.0d5b03ead6a211b044e7.js",
    "revision": "7e8964cdc40c6692a43d4e842453f588"
  },
  {
    "url": "/_nuxt/pages/pop.947888343ad7561f17b0.js",
    "revision": "2b9432d81ab4e0dc2b75bafc1d0505ea"
  },
  {
    "url": "/_nuxt/pages/services.ea4a27f51ab9e4646ed6.js",
    "revision": "6a74977317244adf0c172496b16cc225"
  },
  {
    "url": "/_nuxt/pages/studio.82b2ab9b3aec78b6e569.js",
    "revision": "60e37b9bc9fb315a90963e6fe058a0db"
  },
  {
    "url": "/_nuxt/pages/werk/_slug.a32607c3c50d77887cbf.js",
    "revision": "0a4d88e31e37726e0044a8db8c3b5c56"
  },
  {
    "url": "/_nuxt/pages/werk/index.4fc848cfdd3bcf34059e.js",
    "revision": "a7fa9fea54bde707a37f89daea65470e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "Template-Studio_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
