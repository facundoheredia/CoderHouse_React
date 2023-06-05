import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC8nlkwoRJOJtBbr9TOwSaaBZ7t218XocY",
    authDomain: "minimal-market-f95ea.firebaseapp.com",
    projectId: "minimal-market-f95ea",
    storageBucket: "minimal-market-f95ea.appspot.com",
    messagingSenderId: "898232606400",
    appId: "1:898232606400:web:13856857f3d61385011725"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/*
"AIzaSyC8nlkwoRJOJtBbr9TOwSaaBZ7t218XocY"
*/