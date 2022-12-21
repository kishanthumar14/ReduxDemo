import petsActions from "./petsActions";
const initState = { petsActions: {} };
export default function petsReducer(state = initState, action) {
  switch (action.type) {
    case petsActions.FAKE_ACTION:
      return {
        petsActions: action,
      };
    case petsActions.GET_ALL_PETS_SUCCESS:
      return {
        petsActions: action,
      };
    case petsActions.GET_ALL_PETS_ERROR:
      return {
        petsActions: action,
      };
    case petsActions.CREATE_PETS_SUCCESS:
      return {
        petsActions: action,
      };
    case petsActions.CREATE_PETS_ERROR:
      return {
        petsActions: action,
      };
    case petsActions.DELETE_PETS_SUCCESS:
      return {
        petsActions: action,
      };
    case petsActions.DELETE_PETS_ERROR:
      return {
        petsActions: action,
      };
    case petsActions.EDIT_PETS_SUCCESS:
      return {
        petsActions: action,
      };
    case petsActions.EDIT_PETS_ERROR:
      return {
        petsActions: action,
      };
    case petsActions.UPDATE_PETS_SUCCESS:
      return {
        petsActions: action,
      };
    case petsActions.UPDATE_PETS_ERROR:
      return {
        petsActions: action,
      };

    default:
      return state;
  }
}
