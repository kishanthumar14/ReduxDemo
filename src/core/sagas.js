import { all } from "redux-saga/effects";
import petsSagas from "./pets/petsSaga";

export default function* rootSaga(getState) {
  yield all([ petsSagas()]);
}
