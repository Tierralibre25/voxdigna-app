self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('fetch', event => {
  // qui puoi aggiungere la logica di caching
});
