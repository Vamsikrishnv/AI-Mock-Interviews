// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiSGeINnOxq7AGFnD07dzgo8IrjEnXFv4",
    authDomain: "intellectra-5ebcc.firebaseapp.com",
    projectId: "intellectra-5ebcc",
    storageBucket: "intellectra-5ebcc.firebasestorage.app",
    messagingSenderId: "107703931306",
    appId: "1:107703931306:web:51b5242cd5b4f8b7ed9bd3",
    measurementId: "G-V5Q7PTP3ZX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
