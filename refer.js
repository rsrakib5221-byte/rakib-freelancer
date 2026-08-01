import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaQIX6yMxjf6bkHD6HPSImNF3o7r0fZvo",
  authDomain: "rakib-freelancer.firebaseapp.com",
  projectId: "rakib-freelancer",
  storageBucket: "rakib-freelancer.firebasestorage.app",
  messagingSenderId: "1 ঘী72744042815",
  appId: "1:172744042815:web:2b77927b0ecacf59d00b8a",
  measurementId: "G-FKFC3JM9XR"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.showReferralCode = async function () {
  const ref = doc(db, "users", "HJW5zQf9jmklYMGxlM8F");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    document.getElementById("myReferralCode").innerHTML =
      "🎉 আপনার রেফার কোড: <b>" + snap.data().code + "</b>";
  }
};
