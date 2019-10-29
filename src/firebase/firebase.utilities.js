import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCwAGdFLcJa8b1U_S-THEXQPZqkRsMTFKU",
    authDomain: "crwn-db-2e92f.firebaseapp.com",
    databaseURL: "https://crwn-db-2e92f.firebaseio.com",
    projectId: "crwn-db-2e92f",
    storageBucket: "crwn-db-2e92f.appspot.com",
    messagingSenderId: "352373702035",
    appId: "1:352373702035:web:af32ec75f0764850d5fc66",
    measurementId: "G-X0G4LNJGDX"
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;