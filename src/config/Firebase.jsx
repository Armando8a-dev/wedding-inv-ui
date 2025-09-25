import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCbaESJC01CMT1s_9_LS_DiN1Rg_7mRl9E",
    authDomain: "caissas.firebaseapp.com",
    projectId: "caissas",
    storageBucket: "caissas.appspot.com",
    messagingSenderId: "13186430202",
    appId: "1:13186430202:web:03a5ad72093e98310c4543",
    measurementId: "G-YGENC6B1QX"
});