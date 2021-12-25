export const LOGIN_USER = "LOGIN_USER";
export const SET_USER_ROUTES = "SET_USER_ROUTES";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const REST_USER_PROFILE = "REST_USER_PROFILE";
export const SET_USER_ORDERS = "SET_USER_ORDERS";

export const userlogin = () => ({ type: LOGIN_USER });
export const setUserProfile = payload => ({
  type: SET_USER_PROFILE,
  payload,
});
export const resetUserProfile = () => ({ type: REST_USER_PROFILE });

export const setUserOrders = payload => ({ type: SET_USER_ORDERS, payload });

export const setUserRoutes = payload => ({
  type: SET_USER_ROUTES,
  payload,
});
