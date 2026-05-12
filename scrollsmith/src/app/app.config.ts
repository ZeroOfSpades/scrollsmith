import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  isDevMode,
  inject
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {FirebaseApp, initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';
import {provideIndexedDb} from 'ngx-indexed-db';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({
      projectId: "scrollsmith-b8c0f",
      appId: "1:9400175615:web:a1370b12f37ab886cbb5ca",
      storageBucket: "scrollsmith-b8c0f.firebasestorage.app",
      apiKey: "AIzaSyAOxQ6B9tXC5mxoBwUYUZdC1mJZDm47crc",
      authDomain: "scrollsmith-b8c0f.firebaseapp.com",
      messagingSenderId: "9400175615",
      })),
    provideAuth(() => getAuth(inject(FirebaseApp))),
    provideFirestore(() => getFirestore(inject(FirebaseApp))),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideIndexedDb(),

  ]
};
