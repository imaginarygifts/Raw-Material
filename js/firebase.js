import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVjDkFsdUqpOFILmWivgX4M_-r0cWuyjk",
  authDomain: "raw-material-b2419.firebaseapp.com",
  projectId: "raw-material-b2419",
  storageBucket: "raw-material-b2419.firebasestorage.app",
  messagingSenderId: "795438563156",
  appId: "1:795438563156:web:6d483b64d9eec85320d2c1",
  measurementId: "G-EJG10HZ7HP"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);