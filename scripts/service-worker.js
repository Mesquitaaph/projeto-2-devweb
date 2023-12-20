var CACHE_NAME = 'my-web-app-cache';
var urlsToCache = [
  '../index.html',
  '../styles/reset.css',
  '../styles/global.css',
  '../styles/home.css',
];

self.addEventListener('install', function(event) {
  // event.waitUntil takes a promise to know how
  // long the installation takes, and whether it 
  // succeeded or not.
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});