// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP5FAVWYChaGCijFMe4-jPNZCiJgsmAWs",
  authDomain: "epanchayat-44f7e.firebaseapp.com",
  projectId: "epanchayat-44f7e",
  storageBucket: "epanchayat-44f7e.firebasestorage.app",
  messagingSenderId: "812865445537",
  appId: "1:812865445537:web:c8799514156bb8b1be5ae0",
  measurementId: "G-0YKVHVTP3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);