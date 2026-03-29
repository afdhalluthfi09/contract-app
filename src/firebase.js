import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBq65ch6rt011mHa4xv_yhdRuBVAI16HVQ",
  authDomain: "agency-contract-app.firebaseapp.com",
  projectId: "agency-contract-app",
  storageBucket: "agency-contract-app.firebasestorage.app",
  messagingSenderId: "379896466856",
  appId: "1:379896466856:web:fe60dd6e5946cc2575619d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Klien otomatis login tanpa sadar agar punya izin nulis TTD
signInAnonymously(auth);