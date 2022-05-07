import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import {
  getAuth,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDf7uk3rqhxkj8XO6WbeJOCYA0sPtmDpqc",
  authDomain: "ashesicafeteriaproject.firebaseapp.com",
  projectId: "ashesicafeteriaproject",
  storageBucket: "ashesicafeteriaproject.appspot.com",
  messagingSenderId: "637184310082",
  appId: "1:637184310082:web:598d27d60aba512c29e6db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Reference users collection
const colRef = collection(db, "allfood");

export const addFood=async(foodName,price,image,extras,cafeteriaName) =>{
  await addDoc(colRef, {
    cafeteria: cafeteriaName,
    foodname:foodName,
    price: price,
    image: image,
    extras: extras
  });
}
