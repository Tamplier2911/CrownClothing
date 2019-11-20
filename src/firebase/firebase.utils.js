import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "../environment";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef);
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (err) {
      // Implement meaningful error handler.
      alert("Something went wrong on user create! ", err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  collectionDocuments
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  collectionDocuments.forEach(doc => {
    // making new reference objects for each collectionDocuments
    // whatever we pass in .doc(here) will be doc ID, empty - will give default ID
    const docRef = collectionRef.doc();

    // console.log(docRef);

    // setting value of each document in collectionDocuments
    // using make data consistant (or save all or save noone)
    batch.set(docRef, doc);
  });

  // fireing batch request <- returns promise
  return await batch
    .commit()
    .then(() => {
      alert("Transaction success.");
    })
    .catch(err => alert(`There was an error: ${err}`));
};

export const convertCollectionsSnapshotToMap = async arrayOfCollectionSnapshot => {
  const arrayOfRetrievedAndTransformedData = await arrayOfCollectionSnapshot.docs.map(
    snapshot => {
      const { title, items } = snapshot.data();
      return {
        id: snapshot.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      };
    }
  );

  return arrayOfRetrievedAndTransformedData.reduce(
    (accumulator, collectionDocumet) => {
      accumulator[collectionDocumet.title.toLowerCase()] = collectionDocumet;
      return accumulator;
    },
    {}
  );
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// always pop up google window when we trigger select account menu.
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = props => {
  if (props && props.history) {
    props.history.push("/");
  }
  return auth.signInWithPopup(provider);
};

export default firebase;
