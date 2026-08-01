// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAaQIX6yMxjf6bkHD6HPSImNF3o7r0fZvo",
  authDomain: "rakib-freelancer.firebaseapp.com",
  projectId: "rakib-freelancer",
  storageBucket: "rakib-freelancer.firebasestorage.app",
  messagingSenderId: "172744042815",
  appId: "1:172744042815:web:2b77927b0ecacf59d00b8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
