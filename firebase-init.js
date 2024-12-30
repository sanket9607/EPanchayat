// firebase-init.js
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
