'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f43362b529d2e89b8ecfb4ee278781b7",
"index.html": "8c4669efd6e88ae2a7e18f75a6c9f6be",
"/": "8c4669efd6e88ae2a7e18f75a6c9f6be",
"main.dart.js": "24bb16249c23013167acdecf856812e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6121b34e2364352382396f22392e44c2",
".git/config": "074735e314264995510f23c5bf97fb62",
".git/objects/59/f776addb527ca51a2ae1fe6b748f90adf07ec1": "c8a66698912456aefe5c5d755a6eb4cb",
".git/objects/6f/2a4f3c8ec87f2e7c7fc62cde959a2c666b482d": "3fad89edd9c58b2ca9f52f3019ba0f64",
".git/objects/9d/e90eafb6f6a18cded060e2a7c31ea9c645f7a9": "71e973c553201bd7e3003e5cbcfacc92",
".git/objects/b5/fd793f922bd0f13fc97259a75c85902dc86059": "d56f9d71af48feda6c6c0cf5ecc23020",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/ac/7f78d803d7adeafc83a7737cbbc1949d223a90": "c2fda60e044006372e03ebd47b56d760",
".git/objects/ac/bbda612bc4237aee055fbb4908fb41a5c86aa2": "81036db83b5475a8b81d6c2325611776",
".git/objects/ad/b10497ac65a4088940e91a354a1b74053e29a6": "777f8a10ce5baf1a496d9e44f5e7033f",
".git/objects/d7/ef2cf3869d863983ad7a06df011a1880a6aeef": "11f477c85df1e07197a69883c89604c7",
".git/objects/a2/1f0813eed7c43d86b2215d82597c879fd4c4b5": "0fc1bf78ee7ad481ff9e809ffe60a9d0",
".git/objects/a2/f22fca44a39acb2b4b9e999311f0e0447833a8": "26a6e6ca2c4abcd8701c6a6bda7466be",
".git/objects/a5/d41554c807edbb2cfde6a8955f0b148a5daa43": "41c084b90fcfe5d1612b1217ceb76c22",
".git/objects/f2/fd7a261f9213830378405abce674242ce3af1e": "a88758a0ad50af5be5c4ac88b606f488",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e4/44a54eba41a54d07a069d977688c8261e563a5": "4a56b329167c91a525bceb067fdfd868",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/4e/9cabf90d8dc61e189189d421ceec18e8068265": "715d192c878e4db4c9c94b67968b9c73",
".git/objects/20/cc7868ba7ae3ae67685d11cab92c02fddfe760": "72247da2285c3af3d097b940c5e559eb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/b9805c6a7547e1c7450157ebdf49f56bc803e9": "14fea594ed2046bb5af0d5faa9b18671",
".git/objects/29/5473e6baa59d1eb6b3a07d653194a6201a9960": "a113b34905bc756e5e76385856e77792",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/b3e41b1ed5b8aed6640912e5c63a5ec1e21378": "4718e670313b744b8eee82f2477465d5",
".git/objects/75/ae1303ab0b2276451e0b32c0c879d9a09c611b": "64d38818b784716c00d08f4b9f09f1ad",
".git/objects/81/1b055b41b33474d915c85de6ecfe9c321b8abb": "9864b3f77037dbd265dbdbede8599aa3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a9cf1236ff77b2b2cd0d50c645fc09dc255975": "ff6dab503e2e839afe35b036d02332ae",
".git/objects/9a/ead21020245b34d2224c2e387e261362664833": "040655fe45d47802bdeea9ca7b90253c",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/91/d0fee8f230fda693c31cd6efcd060ecc8cc165": "42f5962ce972fbe594d8a72b1ed16fd0",
".git/objects/3a/d84b551ed1ba3bc922c9f6903f9b607f273dcf": "d2c87be424a116f6017925105a8f7b8a",
".git/objects/37/bb9ee46da829e3473967352cf5673fc9977791": "77644ab259ad719ed694bd1977af39e4",
".git/objects/6d/2d0c7377c9b356b0ba2bbe79a43f116f7b43d2": "d7c2c2b9b3bc3ff53db9366d0af8079f",
".git/objects/99/c20e87652e90a880e121bdf57f5afcd160db4c": "590fc3b90b5b2b678497ca93e1b91bb9",
".git/objects/52/f7b409e912b00f014f39721f170f92640cf56b": "de00044be870c748c37d5db2e3492d20",
".git/objects/d3/8042a7d4cf729c305d9e18bb3930a32b42af16": "c4947c9daca4fc2b79dcb3b07317af3d",
".git/objects/dd/93eaa51c66f8ff232da3b4bf1a0b5ea8140af4": "caa826c0e6d9b9481a81ea886fd86fd2",
".git/objects/af/251e41738cf8f95f27fb9322eed610fdf545f5": "783c94bde05553d32fb68a61e21d75df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/f0/2b5f0c2a5c6c33ea64253c3402d20e85aa1898": "f871922185aa8a4282854c56b3867d81",
".git/objects/f0/717a18d4242dc64083742769f28899130e2932": "412bd202578b137b85ae7b59a98b31d1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/957874ffe4e1aa6e485d8e44cf7aa524f5d558": "c1431f1ce7d18b1bf32825915fa2d3e1",
".git/objects/2c/d15241ebc0ce4ab1268feb959c864bc0856875": "82d093b29e36cf21b04569cfded16f29",
".git/objects/77/b1ee8ccb86bd485711e582111d7896f7491818": "1fa37b6e65b5b25057f3537dd2bc7835",
".git/objects/71/93ebe8b19985e352f55fba611f22d649b5fb7d": "0facf7f7efb674caf161861aab672811",
".git/objects/40/d31780edaa7291a759e0f5885b016e564e9fbf": "91b543a86996cd162cc6869ee08e1cf6",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/13/7c84d197fa66fca61e1cd4dda873005acea100": "c390fae1c3f3dd42cbabe0a0cae87e18",
".git/objects/13/7f09e2987c80b95b604c586115768fa349af05": "f36ad629d158752c17404cfabcba412d",
".git/objects/14/2bee1235d351bc0f0df8778fa40735cc96788e": "09b4746f5736f0627a146b1e9e233669",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/fork-settings": "374341616c1569b13ac25a6f61682451",
".git/logs/HEAD": "0899f4a8811f76197897eb1420b91869",
".git/logs/refs/heads/master": "0899f4a8811f76197897eb1420b91869",
".git/logs/refs/remotes/origin/master": "9e36a562a881dd92dd47ac17967f5ca9",
".git/logs/refs/remotes/origin/main": "a70e15e3ada4fd64290e2e68e7e7fbdc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "71479fbdb916c39fb029c8a7cf5889fb",
".git/refs/remotes/origin/master": "71479fbdb916c39fb029c8a7cf5889fb",
".git/refs/remotes/origin/main": "ba2bf659c3d183aafc54571ee78969c2",
".git/index": "4c0a7ea6b9f54f2f2324a9ec0145b2d0",
".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/FETCH_HEAD": "22c2b7eaa7b4b3a9fdb4fe952af8b033",
"assets/AssetManifest.json": "78e54f6ffee18536c3e171b2270be211",
"assets/NOTICES": "466a51de77cc2fb31e631b230dca34dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/011.png": "076b4ab37ef87ceb5e7942404b1a3848",
"assets/assets/8.png": "04be326fbeed232106085af75d2dc533",
"assets/assets/013.png": "a1ca1d72146242db9f1d97c1c2243342",
"assets/assets/012.png": "f6b61b36ecd112146b63bfa538923db0",
"assets/assets/9.png": "31308ec8aef67438a5569aab26e10e44",
"assets/assets/14.png": "ce1318925a1bd6ac201312ebf7472fbf",
"assets/assets/28.png": "9386dcfc2139cb02bf0c992c64263bf5",
"assets/assets/29.png": "eb0781c6b31cd81e50a000c7f3d0f03a",
"assets/assets/15.png": "186fc8aa25935559e9c463b429886811",
"assets/assets/Screenshot%25202020-12-01%2520at%252023.33.57.png": "9b6827d4020394b5f1da6e3f5d3a2959",
"assets/assets/17.png": "6f52aa4f202799ffc880ecee21dd8617",
"assets/assets/16.png": "4dd60812fecf4f9f91c0ca51899c3e8f",
"assets/assets/1130.png": "fb1969684db03e29e85365d9dbafa656",
"assets/assets/12.png": "a177145a6098d074b1a9126321908c19",
"assets/assets/13.png": "d27b13c748a103557fef69e96d5d59f8",
"assets/assets/11.png": "bf785706d0c53ee6a18dce6f8a9f7eea",
"assets/assets/10.png": "1b5893b1e2c0e083f4cd76c28962e5ab",
"assets/assets/21.png": "e61741b70cd2969dc68f15fa72585ffa",
"assets/assets/20.png": "f4a329e6d5369fea623fe6444ebe588e",
"assets/assets/22.png": "b3fa5ea09835af56c48bc65d9670848a",
"assets/assets/23.png": "32624701c6e97c22f9722e589c086386",
"assets/assets/27.png": "1abcfd4fc2a87fd7ea99decb8f6d6f10",
"assets/assets/26.png": "365f16fe1b37c6164ebec10661700659",
"assets/assets/18.png": "e3f775aea0d63148ad289fa6b00e6b9c",
"assets/assets/30.png": "950769a9a4ad88560a0a9d59f7066fd2",
"assets/assets/24.png": "d13f6e560ff665866bbba5c9dd736d45",
"assets/assets/25.png": "56d3deda51c7a06f81b6e0c5e3c0027c",
"assets/assets/31.png": "e0f0ffae0809d89332ae368fa4b57d57",
"assets/assets/19.png": "86c8fd6acb7cd751f36b37c43a7488b6",
"assets/assets/4.png": "726e05c9c8b9bc7eb9b0ab13fc368213",
"assets/assets/5.png": "8238591a228665f0ce194e016ce8578e",
"assets/assets/7.png": "63209181138170e78dbfe55f6792da81",
"assets/assets/6.png": "93bb201fd6e04b61802af43709b54d5b",
"assets/assets/2.png": "26fed76f19c3d2ab61d411748bc6be12",
"assets/assets/advent-red-green.jpg": "5814699e181c240a36237588a7ef6d2a",
"assets/assets/3.png": "d0ca00bec7c57f8311830dd687c1e8b0",
"assets/assets/1.png": "3c8b7ee6f6af58a08a7f7c226bf4d17b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
