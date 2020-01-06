import { takeLatest, all, call, put, select } from "redux-saga/effects";

import { getUserCartRef } from "../../firebase/firebase.utils";

import { clearCart, setCartFromFirebase } from "./cart-actions";
import { userActionTypes } from "../user/user-types";
import { cartActionTypes } from "./cart-types";

import { selectCurrentUser } from "../user/user-selectors";
import { selectCartItems } from "./cart-selectors";

const {
  SIGN_USER_OUT_SUCCESS,
  CHECK_USER_SESSION_SUCCESS,
  GOOGLE_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_SUCCESS,
  FORM_SIGN_UP_SUCCESS
} = userActionTypes;

const { ADD_ITEM, REMOVE_ITEM, DECREMENT_QUANTITY } = cartActionTypes;

// once user sign out successfuly, invoke clearCart action creator, which sets cartItems to []
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// once user signs in successfully, invoke getUserReference util function, which gets cart ref
export function* checkCartFromFirebase({ payload }) {
  // since we calling this saga on user successful sign in
  // we have access to acton object, which contains user id in it's payload
  // we can now take use of this userId in order to get our cart reference
  const cartRef = yield getUserCartRef(payload.id);

  // using .get() method on cart snapshot in order to get snapshot and reveal it to state
  const cartSnapshot = yield cartRef.get();

  // use set cart from firebase action created, to set cart our state to be value of
  // cart snapshot.data();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

// listen for sign user out success action, invoke clearCartOnSignOut function once issued
export function* onSignOutSuccess() {
  yield takeLatest(SIGN_USER_OUT_SUCCESS, clearCartOnSignOut);
}

// once any of cart manipulation action creators trigger, perform cart update in firestore
export function* updateCartInFirebase() {
  // using select effect in order to leverage selectCurrentUser selector
  // saving user object in currentUser
  const currentUser = yield select(selectCurrentUser);

  // if currentUser is found and not empty
  if (currentUser) {
    // trying to perform cart update in firestore
    try {
      // firest we getting cart reference using current user id
      const cartRef = yield getUserCartRef(currentUser.id);

      // now using select effect in order to get back array of our current cart items
      const currentCart = yield select(selectCartItems);

      // using update method to perform update on cart items
      // replacing cart items that currently existing in firebase
      // by cart items that currently existing in our state cart
      yield cartRef.update({ cartItems: currentCart });
    } catch (err) {
      alert("Something not quite right!", err.message);
    }
  }
}

// listen for sign user in success action, invoke checkCartFromFirebase function once issued
export function* onSignInSuccess() {
  yield takeLatest(
    [
      CHECK_USER_SESSION_SUCCESS,
      GOOGLE_SIGN_IN_SUCCESS,
      EMAIL_SIGN_IN_SUCCESS,
      FORM_SIGN_UP_SUCCESS
    ],
    checkCartFromFirebase
  );
}

// listen for all cart manipulations (increment, decrement, remove), to update cart in firestore
export function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, DECREMENT_QUANTITY],
    updateCartInFirebase
  );
}

// export saga
export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onSignInSuccess),
    call(onCartChange)
  ]);
}
