const userActions = {
  GET_ALL_USERS: "GET_ALL_USERS",
  GET_ALL_USERS_SUCCESS: "GET_ALL_USERS_SUCCESS",
  GET_ALL_USERS_ERROR: "GET_ALL_USERS_ERROR",

  CREATE_PETS: "CREATE_PETS",
  CREATE_PETS_SUCCESS: "CREATE_PETS_SUCCESS",
  CREATE_PETS_ERROR: "CREATE_PETS_ERROR",

  DELETE_PETS: "DELETE_PETS",
  DELETE_PETS_SUCCESS: "DELETE_PETS_SUCCESS",
  DELETE_PETS_ERROR: "DELETE_PETS_ERROR",

  EDIT_PETS: "EDIT_PETS",
  EDIT_PETS_SUCCESS: "EDIT_PETS_SUCCESS",
  EDIT_PETS_ERROR: "EDIT_PETS_ERROR",

  UPDATE_PETS: "UPDATE_PETS",
  UPDATE_PETS_SUCCESS: "UPDATE_PETS_SUCCESS",
  UPDATE_PETS_ERROR: "UPDATE_PETS_ERROR",

  FETCH_ERROR: "FETCH_ERROR",
  FAKE_ACTION: "FAKE_ACTION",

  getUsersAction: (data) => ({
    type: userActions.GET_ALL_USERS,
    payload: data,
  }),
  createPetAction: (data) => ({
    type: userActions.CREATE_PETS,
    payload: data,
  }),
  deletePetAction: (data) => ({
    type: userActions.DELETE_PETS,
    payload: data,
  }),
  editPetAction: (data) => ({
    type: userActions.EDIT_PETS,
    payload: data,
  }),
  updatePetAction: (data) => ({
    type: userActions.UPDATE_PETS,
    payload: data,
  }),
  fakeAction: () => ({
    type: userActions.FAKE_ACTION,
  }),
};
export default userActions;
