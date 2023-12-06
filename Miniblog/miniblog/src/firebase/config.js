// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiKHom-Jte8iCuespUR79l4vpDVwLc61Y",
  authDomain: "miniblog-47316.firebaseapp.com",
  projectId: "miniblog-47316",
  storageBucket: "miniblog-47316.appspot.com",
  messagingSenderId: "592096411148",
  appId: "1:592096411148:web:9dbd615e17dab2a6b9b829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };