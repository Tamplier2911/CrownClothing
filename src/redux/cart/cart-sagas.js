import { takeLatest, all, call, put } from "redux-saga/effects";
import { userActionTypes } from "../user/user-types";
import { clearCart } from "./cart-actions";

const { SIGN_USER_OUT_SUCCESS } = userActionTypes;

// once user sign out successfuly, invoke clearCart action creator, which sets cartItems to []
export function* clearCartOnSignOut() {
  yield put(clearCart());
}

// listen for sign user out success action, invoke clearCartOnSignOut function once issued
export function* onSignOutSuccess() {
  yield takeLatest(SIGN_USER_OUT_SUCCESS, clearCartOnSignOut);
}

// export saga
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
