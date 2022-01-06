import environment, { redirects } from "../../../environment";
import restService from "../../../service";
import { resetUserProfile, setUserProfile, setUserRoutes, userlogin } from "../../actions/user";
import { getAllUsers } from "../admin";
import { ADMIN_ROLE, ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MY_COURSES_ROUTE } from "../../../config";
import { message } from "antd";
import { resetRoutes } from "../../actions/app";
import { getUserOrders } from "../order";

export const getUserProile = () => async (dispatch, getState) => {
  const { routes, history } = getState().app;
  let _profile = await restService(environment.profile);
  let profile = _profile.data;
  let _routes = [...routes].filter(rt => rt.path !== LOGIN_ROUTE.path);
  _routes.push(MY_COURSES_ROUTE);
  if ((profile.role || []).some(role => role === ADMIN_ROLE)) {
    _routes.push(ADMIN_ROUTE);
  }
  dispatch(setUserRoutes({ routes: _routes }));
  dispatch(setUserProfile({ profile }));
  dispatch(userlogin());
  dispatch(getUserOrders(profile.id));
  // if (window.location.pathname === LOGIN_ROUTE.path) 
  history.push(redirects[environment.profile]);
};

export const loginAction = payload => async dispatch => {
  await restService(environment.login, "POST", payload);
  dispatch(getUserProile());
};

export const createUser = payload => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    await restService(environment.createUser, "POST", payload);
    dispatch(getAllUsers());
    history.push(redirects[environment.createUser]);
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = payload => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    await restService(environment.register, "POST", payload);
    history.push(redirects[environment.register]);
  } catch (error) {
    console.error(error);
    error.response.data?.errors.forEach(err => message.error(Object.values(err)[0]));
  }
};

export const getUserDetail = id => async (dispatch, getState) => {
  try {
    await restService(environment.userById.replace(":id", id));
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = payload => async dispatch => {
  try {
    await restService(environment.deleteUser, "DELETE", payload);
    message.success(`${payload.email} deleted sucessfully`);
    dispatch(getAllUsers());
  } catch (error) {
    console.error(error);
  }
};

//User Logout
export const userLogoutAction = () => async (dispatch, getState) => {
  const { history } = getState().app;
  dispatch(resetUserProfile());
  dispatch(resetRoutes());
  history.push(HOME_ROUTE.path);
};

export const logoutAction = payload => async dispatch => {
  await restService(environment.logout);
  dispatch(userLogoutAction());
};
