import { SET_USER_PROFILE, REST_USER_PROFILE, LOGIN_USER, SET_USER_ORDERS } from "../../actions/user";

const userInitState = {
  profile: {
    role: [],
  },
  orders: {
    list: [],
    LastEvaluatedKey: null,
  },
  isLoggedIn: false,
};

export default function userReducer(state = userInitState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...{ isLoggedIn: true } };
    case SET_USER_PROFILE:
      return { ...state, ...action.payload };
    case REST_USER_PROFILE:
      return { ...userInitState };
    case SET_USER_ORDERS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
