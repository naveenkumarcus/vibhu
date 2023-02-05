import {
  SET_ERROR_OBJ,
  RESET_ERROR_OBJ,
  SET_CONFIG_OBJ,
  REDIRECT_TO,
  RESET_USER_ROUTES,
  TOGGLE_SPINNER
} from "../../actions/app";
import config from "../../../config";
import { SET_USER_ROUTES } from "../../actions/user";
const appObj = {
  spinner: false,
  routes: config.routes,
  history: {},
  redirectTo: "",
  error: {
    message: [],
    showError: false,
  },
};

function errorStateupdate(state, payload) {
  const { error } = state;
  let _error = { ...error, ...payload };
  return { ...state, ...{ error: _error } };
}

export default function appReducer(state = appObj, action) {
  switch (action.type) {
    case SET_CONFIG_OBJ:
      return { ...state, ...action.payload };
    case REDIRECT_TO:
      return { ...state, ...{ redirectTo: action.payload } };
    case SET_ERROR_OBJ:
      return errorStateupdate(state, action.payload);
    case RESET_ERROR_OBJ:
      return errorStateupdate(state, appObj.error);
    case SET_USER_ROUTES:
      return { ...state, ...action.payload };
    case RESET_USER_ROUTES:
        return { ...state, ...{routes: config.routes} };
    case TOGGLE_SPINNER:
        return { ...state, ...{ spinner: !state.spinner } };
    default:
      return state;
  }
}
