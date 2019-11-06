import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { config } from "../environment";

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
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
      alert(
        "Something went wrong on user create! ",
        err.message
      );
    }
  }

  return userRef;
};

firebase.initializeApp(config);

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
