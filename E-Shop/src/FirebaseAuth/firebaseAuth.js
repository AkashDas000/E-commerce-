// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlchaglkMI3gICGaKHa37csYYwx3L_Qc",
  authDomain: "ecommerce-938bf.firebaseapp.com",
  projectId: "ecommerce-938bf",
  storageBucket: "ecommerce-938bf.appspot.com",
  messagingSenderId: "925877827194",
  appId: "1:925877827194:web:20316c15209d82f5fb6dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db}