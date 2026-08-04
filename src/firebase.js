import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd5HRnvdSicS38LnK06HZ_x3iQNaOIBLA",
  authDomain: "velora-97a0a.firebaseapp.com",
  projectId: "velora-97a0a",
  storageBucket: "velora-97a0a.firebasestorage.app",
  messagingSenderId: "1066900146873",
  appId: "1:1066900146873:web:ecaca560496559fd61e968",
  measurementId: "G-J2JTLTXEDP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);