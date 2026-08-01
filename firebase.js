// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "আপনার_apiKey",
  authDomain: "rakib-freelancer.firebaseapp.com",
  projectId: "rakib-freelancer",
  storageBucket: "rakib-freelancer.firebasestorage.app",
  messagingSenderId: "172744042815",
  appId: "আপনার_appId"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
