import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHRGy46wWsbJXTnDUyDansYz_H5Dnl1A4",
    authDomain: "pokebowl-fa4d1.firebaseapp.com",
    projectId: "pokebowl-fa4d1",
    storageBucket: "pokebowl-fa4d1.appspot.com",
    messagingSenderId: "207667455724",
    appId: "1:207667455724:web:62cd6d60f6dd3e341aa7c9",
    measurementId: "G-1M4LY5STXG"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


