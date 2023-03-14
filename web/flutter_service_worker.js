'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "79a7f652c90d09e1d787a36fccb198b3",
"assets/assets/64108-loading-dots.json": "fcddcad9a9a539476257dd4681fcb3dc",
"assets/assets/68374-animation-image.json": "33a1ced29a238eb5f98885580b0c72e7",
"assets/assets/73061-search-not-found.json": "977e908652bc6a9b3742b75eeb97cef8",
"assets/assets/91792-uploading-image.json": "2f800492dc508860c1364c301c8e54e1",
"assets/assets/9354-image-viewer-icon-animation.json": "a0979ebae0ee70f25f691b19183d4aaa",
"assets/assets/appstore.png": "baffa5484637a1f10a4e4ae96846eb79",
"assets/assets/edit.svg": "89667607c6f45572cfd55aa0e3b19215",
"assets/assets/exam.png": "dee72115c4db3320cde1639ab3410b81",
"assets/assets/quest.svg": "6e388ecf79f3165f5db84fd15471320e",
"assets/assets/questlogo.png": "eb3030b7065b7120d61e428dcaa4e728",
"assets/FontManifest.json": "17119b42427598aed4cae01bcfd71f11",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/fonts/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/fonts/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/fonts/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/NOTICES": "298b7bf881607cfc8c9b66d60c2ada2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/android-icon-144x144.png": "fc010d8a545a83e82f71b4868e3b6f8d",
"icons/android-icon-192x192.png": "a99b15ea907c8ea44725ba022717ed9f",
"icons/android-icon-36x36.png": "58728d299d2a559742aac3565bf6491a",
"icons/android-icon-48x48.png": "b33e3fca318b1449752d78757e673beb",
"icons/android-icon-72x72.png": "570b35e3ffa4eb4365bc0868f2041238",
"icons/android-icon-96x96.png": "9a26e9ed3699b32c136de453dcdaa3cc",
"icons/apple-icon-114x114.png": "99da26f67d51b9018579961af353ea90",
"icons/apple-icon-120x120.png": "d1d45ce39d9f4fe84d9bb1ed6e1a4e23",
"icons/apple-icon-144x144.png": "fc010d8a545a83e82f71b4868e3b6f8d",
"icons/apple-icon-152x152.png": "915f0ed8964c7b4a955943fde360fb31",
"icons/apple-icon-180x180.png": "92760b4db396b185d401adb5b60b537b",
"icons/apple-icon-57x57.png": "4386c4a85a68bbc596e3b7da5e4b2158",
"icons/apple-icon-60x60.png": "d09aabe81052c6ec83e8b598596c411a",
"icons/apple-icon-72x72.png": "570b35e3ffa4eb4365bc0868f2041238",
"icons/apple-icon-76x76.png": "ad976d253ee96f2237f54a6ee9c9577f",
"icons/apple-icon-precomposed.png": "dd4c6d36c8843b2f7fae6f63cd06b865",
"icons/apple-icon.png": "dd4c6d36c8843b2f7fae6f63cd06b865",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "2aab3faaa7eaae8c4a68904b55fe47a9",
"icons/favicon-32x32.png": "4b55c2905191399ec82ab58f80cbf9af",
"icons/favicon-96x96.png": "9a26e9ed3699b32c136de453dcdaa3cc",
"icons/favicon.ico": "e6b0bce687b50a923cb7047e6f9820a3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/ms-icon-144x144.png": "fc010d8a545a83e82f71b4868e3b6f8d",
"icons/ms-icon-150x150.png": "169cd86b0bf2a42b629a3ea8a836456a",
"icons/ms-icon-310x310.png": "06c1107e52b372f2f68b8e1379bf9531",
"icons/ms-icon-70x70.png": "43c3c2f9acb0ebad8495b995469f75c6",
"index.html": "50d928290d2504a8432f293386d95ef0",
"/": "50d928290d2504a8432f293386d95ef0",
"main.dart.js": "a56316da3d78fc4efb589059aeb3a638",
"manifest.json": "ec723ace4ad0262835bb4389e67afe4f",
"version.json": "f6a01a581f1825baae3e0cc7f065f0be"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
