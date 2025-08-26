import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyCJpoIS4qYl9mRoNGNm7AsWjU_j4I6ksgA",
  authDomain: "maqraa-6ac50.firebaseapp.com",
  projectId: "maqraa-6ac50",
  storageBucket: "maqraa-6ac50.firebasestorage.app",
  messagingSenderId: "61481894760",
  appId: "1:61481894760:web:1ee581082f6d6622dc4cdd",
  measurementId: "G-S0WFLD7B61"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimations()
  ]
};
