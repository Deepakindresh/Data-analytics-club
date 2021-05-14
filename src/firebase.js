import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCANLKjovAjIJ0CGkn0ABdnZy3SUtGTAxk",
    authDomain: "data-analytics-club-5166f.firebaseapp.com",
    projectId: "data-analytics-club-5166f",
    storageBucket: "data-analytics-club-5166f.appspot.com",
    messagingSenderId: "649892365881",
    appId: "1:649892365881:web:f6f0e3620e6d36117aafe8",
    measurementId: "G-V7TKV9WM5B"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};