import axios from "axios";
import { message } from "antd";
import environment from "../environment";
import { setError, toggleSpinner } from "../store/actions/app";
import { userLogoutAction } from "../store/effects/user";
import { LOGIN_ROUTE } from "../config";
import store from "../store";
const { dispatch } = store;

message.config({
  top: 100,
  right: 0,
  duration: 1,
  maxCount: 5,
  rtl: true,
});

const setupAxiosInterceptors = store => {
  const onRequest = config => {
    dispatch(toggleSpinner());
    return config;
  };
  const onResponseSuccess = response => {
    dispatch(toggleSpinner());
    return response;
  };

  const onResponseError = err => {
    dispatch(toggleSpinner());
    let _status = err.response.status;
    if (_status === 401) {
      if (window.location.pathname !== LOGIN_ROUTE.path) store.dispatch(userLogoutAction());
    }
    if (err.config.url !== environment.profile)
      if (_status > 500) {
        store.dispatch(
          setError({
            errors: ["Error occured while processing, please contact the admin."],
            showError: true,
          })
        );
      } else if (_status === 401) {
        store.dispatch(setError({ errors: ["User Logged out"], showError: true }));
      }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequest);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
