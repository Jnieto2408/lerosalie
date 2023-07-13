// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMNS1nQM9Y-zbg0WQXeamPZtXCIpjdLyk",
    authDomain: "lerosalie-store.firebaseapp.com",
    projectId: "lerosalie-store",
    storageBucket: "lerosalie-store.appspot.com",
    messagingSenderId: "971903102878",
    appId: "1:971903102878:web:aa0776d253b1fa0c17308f",
    measurementId: "G-3BDYT9G70B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)