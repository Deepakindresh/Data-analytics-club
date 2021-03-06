
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth,storage, firebase};
