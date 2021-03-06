const cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData)
      .then((cache) => cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/manifest.js',
        '/static/js/vendors~main.chunk.js',
        '/index.html',
        '/',
        '/users',
        '/about'
      ]))
  )
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request)
        .then((res) => {
          if (res) {
            return res;
          }

          const requestUrl = event.request.clone();

          fetch(requestUrl)
        })
    )
  }
});
