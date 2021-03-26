// Firebase core
import firebase from 'firebase/app';

// Firebase Database
import 'firebase/firestore';

// Firebase Authentication
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCm-rhmKwf0gurE5wBONtLKEkTLU0xqJaU",
  authDomain: "crwn-db-dafe0.firebaseapp.com",
  databaseURL: "https://crwn-db-dafe0.firebaseio.com",
  projectId: "crwn-db-dafe0",
  storageBucket: "crwn-db-dafe0.appspot.com",
  messagingSenderId: "48759701318",
  appId: "1:48759701318:web:ab35177cffccbb518bef47",
  measurementId: "G-W8DZD3NP9Y"
};

/* This function is designed to get user reference information that currently exists of the
database content. If the database info doesn't exist, it will be created. The database
information reference will then be returned to the createUserProfileDocument function and
then exported so it can be used in app.js when it is mounted (componentDidMount) to assign
database contents to the app.js state. The information can then be used in the application
(Hello Quentin! etc). */

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// not currently relevant, used to put items in the database by code rather than manually
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

/* Get list of clothing items on database, convert into an object to clean unecessary database information, insert parent object titles using reduce (womens, mens, hats, sneakers, jackets, etc*/
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

// Export authentication and database sections to use them in other components.
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up popup system when signing in with google
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;