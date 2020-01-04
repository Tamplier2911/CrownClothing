import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "../environment";

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log(additionalData, "from firebase");
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log(userRef, "from firebase");
  const snapShot = await userRef.get();
  // console.log(snapShot, "from firebase");
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
      alert("Something went wrong on user create!", err.message);
    }
  }

  return userRef;
};

export const getUserCartRef = async userId => {
  // create request to all 'carts' in collection
  // pick all where value of 'userId' equals userId that we passing as argument
  const cartsRef = firestore.collection("carts").where("userId", "==", userId);
  // console.log(cartsRef, "Carts Ref");

  // get snapshot of carts by using .get() method on carts reference
  const cartsSnapshot = await cartsRef.get();
  // console.log(cartsSnapshot, "Cart Snapshot");

  // if cartsSnapshort - collection snapshot, property empty is true
  if (cartsSnapshot.empty) {
    // get cart doc reference by using .doc() method
    // which returns document reference with default id
    const cartDocRef = firestore.collection("carts").doc();

    // once we have card document reference we can perform CRUD operations
    // perform creation of the new cart, with userId property & empty arr of items
    await cartDocRef.set({ userId: userId, cartItems: [] });

    // return cart doc reference
    return cartDocRef;
  } else {
    // else if we actualy found a cart in cart collection return it reference
    return cartsSnapshot.docs[0].ref;
  }
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

export const getCurrentUser = () => {
  // returning a promise
  return new Promise((resolve, reject) => {
    // subscribe for onAuthStateChange
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      // get userAuth object and immediately unsubscribe
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

// always pop up google window when we trigger select account menu.
googleProvider.setCustomParameters({ prompt: "select_account" });

/*
export const signInWithGoogle = props => {
  if (props && props.history) {
    props.history.push("/");
  }
  return auth.signInWithPopup(googleProvider);
};
*/

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
