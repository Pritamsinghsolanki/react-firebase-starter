import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA9AnhTOCuDzY-PZ1I7UNK-BHdo2RPIMgQ",
    authDomain: "mern-starter-bc8d1.firebaseapp.com",
    projectId: "mern-starter-bc8d1",
    storageBucket: "mern-starter-bc8d1.appspot.com",
    messagingSenderId: "592253388712",
    appId: "1:592253388712:web:69846a73b3633557ef3f9d",
    measurementId: "G-6TFHKEPH1B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
