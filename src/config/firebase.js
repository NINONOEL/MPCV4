  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import { getAnalytics } from "firebase/analytics";

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAN8rPV4jaA7hhVL09xqlJQ2W_TXkkdp2w",
    authDomain: "mpcv4-c4090.firebaseapp.com",
    projectId: "mpcv4-c4090",
    storageBucket: "mpcv4-c4090.firebasestorage.app",
    messagingSenderId: "240371596162",
    appId: "1:240371596162:web:4026d23cc9c508a80b2d9b",
    measurementId: "G-6KX93QRYK0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const analytics = getAnalytics(app);

  export { app, db, auth, analytics };