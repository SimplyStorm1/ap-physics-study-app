import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwdbKoIkFxGIp_x5ajioFixofRqw2b9oU",
  authDomain: "ap-physics-study-app.firebaseapp.com",
  projectId: "ap-physics-study-app",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
