import userActions from "./userActions";
const initState = { userActions: {} };
export default function userReducer(state = initState, action) {
  switch (action.type) {
    case userActions.FAKE_ACTION:
      return {
        userActions: action,
      };
    case userActions.GET_ALL_USERS_SUCCESS:
      return {
        userActions: action,
      };
    case userActions.GET_ALL_USERS_ERROR:
      return {
        userActions: action,
      };
    case userActions.CREATE_PETS_SUCCESS:
      return {
        userActions: action,
      };
    case userActions.CREATE_PETS_ERROR:
      return {
        userActions: action,
      };
    case userActions.DELETE_PETS_SUCCESS:
      return {
        userActions: action,
      };
    case userActions.DELETE_PETS_ERROR:
      return {
        userActions: action,
      };
    case userActions.EDIT_PETS_SUCCESS:
      return {
        userActions: action,
      };
    case userActions.EDIT_PETS_ERROR:
      return {
        userActions: action,
      };
    case userActions.UPDATE_PETS_SUCCESS:
      return {
        userActions: action,
      };
    case userActions.UPDATE_PETS_ERROR:
      return {
        userActions: action,
      };

    default:
      return state;
  }
}
