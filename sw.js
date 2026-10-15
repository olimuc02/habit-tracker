const V = 'habits-v9';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never cache Firestore traffic — it manages its own offline queue.
  if (url.hostname.includes('firestore.googleapis.com') || url.hostname.includes('googleapis.com')) return;

  // App page: fresh when online, cached copy when not.
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    e.respondWith(
      fetch(req).then(r => { const c = r.clone(); caches.open(V).then(k => k.put('./index.html', c)); return r; })
                .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Everything else (icons, fonts, the Firebase SDK): cache first, refresh in the background.
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(r => {
        if (r && (r.ok || r.type === 'opaque')) { const c = r.clone(); caches.open(V).then(k => k.put(req, c)); }
        return r;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
