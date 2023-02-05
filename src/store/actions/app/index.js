export const SET_CONFIG_OBJ = 'SET_CONFIG_OBJ'; 
export const SET_ERROR_OBJ = 'SET_ERROR_OBJ'; 
export const RESET_ERROR_OBJ = 'RESET_ERROR_OBJ';
export const RESET_USER_ROUTES = 'RESET_USER_ROUTES';
export const REDIRECT_TO = 'REDIRECT_TO';
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';

export const setError = (payload) => ({type: SET_ERROR_OBJ, payload});
export const resetError = (payload) => ({type: RESET_ERROR_OBJ, payload});

export const setConfigObj = (payload) => ({type: SET_CONFIG_OBJ, payload});
export const setRedirectTo = (payload) => ({type: REDIRECT_TO, payload});
export const resetRoutes = () => ({type: RESET_USER_ROUTES});
export const toggleSpinner = () => ({type: TOGGLE_SPINNER});
