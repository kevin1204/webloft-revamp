'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Register service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, notify user
                  console.log('New content is available. Please refresh.');
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });

      // When a NEW SW takes over an already-controlled page (i.e. an update,
      // not the very first install), reload so users get fresh assets.
      // We check navigator.serviceWorker.controller at registration time:
      // if there is already a controller, a future controllerchange means an
      // update arrived → safe to reload. If there is no controller yet, this
      // is the first install and clients.claim() already handles takeover
      // without needing a reload.
      if (navigator.serviceWorker.controller) {
        let isReloading = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (isReloading) return;
          isReloading = true;
          window.location.reload();
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything
}
