import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import userActions from "./userActions";
import {
  getAllUsers,
  createPets,
  deltePets,
  editPets,
  updatePets,
} from "./usersService";

export function* getUserssSaga() {
  yield takeEvery(userActions.GET_ALL_USERS, function* (payload) {
    try {
      const response = yield call(getAllUsers, payload.payload);
      const data = yield call(response.json.bind(response));
      if (data) {
        yield put({
          type: userActions.GET_ALL_USERS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: userActions.GET_ALL_USERS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: userActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export function* createPetSaga() {
  yield takeEvery(userActions.CREATE_PETS, function* (payload) {
    try {
      const response = yield call(createPets, payload.payload);
      const data = yield call(response.json.bind(response));
      console.log(data, "samfs erqrmv  dlkf");
      if (data) {
        yield put({
          type: userActions.CREATE_PETS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: userActions.CREATE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: userActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}

export function* deletePetSaga() {
  yield takeEvery(userActions.DELETE_PETS, function* (payload) {
    try {
      const response = yield call(deltePets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (Object.keys(data).length === 0) {
        yield put({
          type: userActions.DELETE_PETS_SUCCESS,
          data: { ...data, ...payload },
        });
      } else {
        yield put({
          type: userActions.DELETE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: userActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}

export function* eidtPetSaga() {
  yield takeEvery(userActions.EDIT_PETS, function* (payload) {
    try {
      console.log(payload.payload);
      const response = yield call(editPets, payload.payload);
      const data = yield call(response.json.bind(response));
      if (Object.keys(data).length > 0) {
        yield put({
          type: userActions.EDIT_PETS_SUCCESS,
          data: data,
        });
      } else {
        yield put({
          type: userActions.EDIT_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: userActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export function* updatePetSaga() {
  yield takeEvery(userActions.UPDATE_PETS, function* (payload) {
    try {
      const response = yield call(updatePets, payload.payload);
      const data = yield call(response.json.bind(response));
      console.log("🚀 ~ file: usersSaga.js:118 ~ yieldtakeEvery ~ data", data);
      if (Object.keys(data).length === 0) {
        yield put({
          type: userActions.UPDATE_PETS_SUCCESS,
          data: { ...data, ...payload },
        });
      } else {
        yield put({
          type: userActions.UPDATE_PETS_ERROR,
          status: false,
          message: data.message,
        });
      }
    } catch (error) {
      yield put({
        type: userActions.FETCH_ERROR,
        status: false,
        message: "Something went wrong..!",
      });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(getUserssSaga),
    fork(createPetSaga),
    fork(deletePetSaga),
    fork(eidtPetSaga),
    fork(updatePetSaga),
  ]);
}
