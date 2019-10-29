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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(userAuth) {
       const userRef = firestore.doc(`users/${userAuth.uid}`)
       
       const snapShot = await userRef.get()
       if(!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName, email, createdAt, ...additionalData
                })
            }
            catch(error) {
                console.log('error creating user', error.message)
            }
       }
       return userRef
    }
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;