// PWA utilities for service worker registration and management

export const registerServiceWorker = async (): Promise<void> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    console.log('Service Worker not supported');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    if (registration.installing) {
      console.log('Service worker installing');
    } else if (registration.waiting) {
      console.log('Service worker installed');
    } else if (registration.active) {
      console.log('Service worker active');
    }

    // Listen for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New content is available; please refresh
              console.log('New content is available; please refresh.');
              // You can show a notification to the user here
            } else {
              // Content is cached for offline use
              console.log('Content is cached for offline use.');
            }
          }
        });
      }
    });
  } catch (error) {
    console.error('Service worker registration failed:', error);
  }
};

export const unregisterServiceWorker = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      return await registration.unregister();
    }
    return false;
  } catch (error) {
    console.error('Service worker unregistration failed:', error);
    return false;
  }
};

export const isInstallable = (): boolean => {
  return typeof window !== 'undefined' && 'BeforeInstallPromptEvent' in window;
};

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
};

export const showNotification = async (
  title: string,
  options?: NotificationOptions
): Promise<void> => {
  const permission = await requestNotificationPermission();

  if (permission === 'granted') {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        registration.showNotification(title, {
          icon: '/icons/icon-192x192.png',
          badge: '/icons/icon-72x72.png',
          ...options,
        });
        return;
      }
    }

    // Fallback to regular notification
    new Notification(title, {
      icon: '/icons/icon-192x192.png',
      ...options,
    });
  }
};

export const installApp = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'));
      return;
    }

    let deferredPrompt: any = null;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
    });

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          resolve();
        } else {
          console.log('User dismissed the install prompt');
          reject(new Error('User dismissed install prompt'));
        }
        deferredPrompt = null;
      });
    } else {
      reject(new Error('Install prompt not available'));
    }
  });
};

// Check if app is running as PWA
export const isPWA = (): boolean => {
  if (typeof window === 'undefined') return false;

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone ||
    document.referrer.includes('android-app://')
  );
};

// Get install prompt availability
export const getInstallPrompt = (): Promise<Event | null> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(null);
      return;
    }

    let deferredPrompt: Event | null = null;

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPrompt = e;
      resolve(deferredPrompt);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Clean up listener after 5 seconds if no prompt
    setTimeout(() => {
      window.removeEventListener('beforeinstallprompt', handler);
      if (!deferredPrompt) {
        resolve(null);
      }
    }, 5000);
  });
};