
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsFt0RT9L9oJl819fcI5V89v4pLhpXSYQ",
    authDomain: "dacwebsite-abd0a.firebaseapp.com",
    projectId: "dacwebsite-abd0a",
    storageBucket: "dacwebsite-abd0a.appspot.com",
    messagingSenderId: "855237989490",
    appId: "1:855237989490:web:a91081993b84a49f2bdeeb",
    measurementId: "G-TYS4RB8JT4"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth,storage, firebase};