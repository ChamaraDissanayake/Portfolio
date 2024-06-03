import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdT9fZFJ5OkpXeempDZN_E8uafZzDhIBU",
  authDomain: "text-reader-946e5.firebaseapp.com",
  projectId: "text-reader-946e5",
  storageBucket: "text-reader-946e5.appspot.com",
  messagingSenderId: "781687930771",
  appId: "1:781687930771:web:b69c9a211024e3a42ff266"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    { provide: 'FirebaseApp', useValue: app },
    { provide: 'Firestore', useValue: db },
    { provide: 'Auth', useValue: auth },
  ]
};
