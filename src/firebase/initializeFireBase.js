import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDRDuXBCXkf9cMEm58S6KWe2zbMMWm_qMU",
  authDomain: "sunshopx.firebaseapp.com",
  projectId: "sunshopx",
  storageBucket: "sunshopx.appspot.com",
  messagingSenderId: "613265283399",
  appId: "1:613265283399:web:741e05dd827118b28bd462",
  measurementId: "G-Z7CJ0DW8LN"
};

// Initialize Firebase
export const appFire = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFire);
