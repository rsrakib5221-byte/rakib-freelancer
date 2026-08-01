import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  // এখানে আপনার Firebase Config বসবে
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
