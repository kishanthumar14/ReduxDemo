import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import petsActions from "./petsActions";
import {
  getAllPets,
  createPets,
  deltePets,
  editPets,
  updatePets,
} from "./petsService";

export function* getPetsSaga() {
  yield takeEvery(petsActions.GET_ALL_PETS, function* (payload) {
    try {
      const response = yield call(getAllPets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (data) {
        yield put({
          type: petsActions.GET_ALL_PETS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: petsActions.GET_ALL_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: petsActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export function* createPetSaga() {
  yield takeEvery(petsActions.CREATE_PETS, function* (payload) {
    try {
      const response = yield call(createPets, payload.payload);
      const data = yield call(response.json.bind(response));
      console.log(data, "samfs erqrmv  dlkf");
      if (data) {
        yield put({
          type: petsActions.CREATE_PETS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: petsActions.CREATE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: petsActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}

export function* deletePetSaga() {
  yield takeEvery(petsActions.DELETE_PETS, function* (payload) {
    try {
      const response = yield call(deltePets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (Object.keys(data).length === 0) {
        yield put({
          type: petsActions.DELETE_PETS_SUCCESS,
          data: { ...data, ...payload },
        });
      } else {
        yield put({
          type: petsActions.DELETE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: petsActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}

export function* eidtPetSaga() {
  yield takeEvery(petsActions.EDIT_PETS, function* (payload) {
    try {
      console.log(payload.payload);
      const response = yield call(editPets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (Object.keys(data).length > 0) {
        yield put({
          type: petsActions.EDIT_PETS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: petsActions.EDIT_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: petsActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export function* updatePetSaga() {
  yield takeEvery(petsActions.UPDATE_PETS, function* (payload) {
    try {
      const response = yield call(updatePets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (Object.keys(data).length > 0) {
        yield put({
          type: petsActions.UPDATE_PETS_SUCCESS,
          data: { ...data, ...payload },
        });
      } else {
        yield put({
          type: petsActions.UPDATE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: petsActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(getPetsSaga),
    fork(createPetSaga),
    fork(deletePetSaga),
    fork(eidtPetSaga),
    fork(updatePetSaga),
  ]);
}
