export const GET_PENDING_ENROLLMENT_LIST = "GET_PENDING_ENROLLMENT_LIST";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const SET_PENDING_ENROLLMENT_LIST = "SET_PENDING_ENROLLMENT_LIST";
export const SET_USERS_FILTER = "SET_USERS_FILTER";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_NEXT_SET_USERS = "SET_NEXT_SET_USERS";

export const SET_SELECTED_USER = "SET_SELECTED_USER";

export const GET_ALL_COURSES = "GET_ALL_COURSES";
export const SET_ALL_COURSES = "SET_ALL_COURSES";

export const SET_SELECTED_COURSE = "SET_SELECTED_COURSE";

export const setPendingList = (payload) => ({
  type: SET_PENDING_ENROLLMENT_LIST,
  payload,
});
export const setAllUsers = (payload) => ({ type: SET_ALL_USERS, payload });
export const setUsersFilter = (payload) => ({ type: SET_USERS_FILTER, payload });
export const setNextSetUsers = (payload) => ({ type: SET_NEXT_SET_USERS, payload });

export const setSelectedUser = (payload) => ({
  type: SET_SELECTED_USER,
  payload,
});

export const setAllCourses = (payload) => ({ type: SET_ALL_COURSES, payload });
export const setSelectedCourse = (payload) => ({
  type: SET_SELECTED_COURSE,
  payload,
});
