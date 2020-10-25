import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyASQyZ3jfX1PSG9nskr6cYfmQl8m2tTn7Y",
    authDomain: "e-commerce-11699.firebaseapp.com",
    databaseURL: "https://e-commerce-11699.firebaseio.com",
    projectId: "e-commerce-11699",
    storageBucket: "e-commerce-11699.appspot.com",
    messagingSenderId: "368749336722",
    appId: "1:368749336722:web:5a127fe73f46c35d8fee4b",
    measurementId: "G-BSX2J86P3X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;