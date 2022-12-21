const petsActions = {
  GET_ALL_PETS: "GET_ALL_PETS",
  GET_ALL_PETS_SUCCESS: "GET_ALL_PETS_SUCCESS",
  GET_ALL_PETS_ERROR: "GET_ALL_PETS_ERROR",

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

  getPetsAction: (data) => ({
    type: petsActions.GET_ALL_PETS,
    payload: data,
  }),
  createPetAction: (data) => ({
    type: petsActions.CREATE_PETS,
    payload: data,
  }),
  deletePetAction: (data) => ({
    type: petsActions.DELETE_PETS,
    payload: data,
  }),
  editPetAction: (data) => ({
    type: petsActions.EDIT_PETS,
    payload: data,
  }),
  updatePetAction: (data) => ({
    type: petsActions.UPDATE_PETS,
    payload: data,
  }),
  fakeAction: () => ({
    type: petsActions.FAKE_ACTION,
  }),
};
export default petsActions;
