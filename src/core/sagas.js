import { all } from "redux-saga/effects";
import userSagas from "./users/usersSaga";

export default function* rootSaga(getState) {
  yield all([ userSagas()]);
}
