import { SET_ALL_COURSES, SET_ALL_USERS, SET_NEXT_SET_USERS, SET_PENDING_ENROLLMENT_LIST, SET_SELECTED_COURSE, SET_SELECTED_USER, SET_USERS_FILTER } from "../../actions/admin";

const adminInitState = {
  users: {
    list: [],
    Limit: 20,
    filter: null,
    LastEvaluatedKey: null,
    selectedUser: {
      enrollmentRequest: [],
    },
  },
  courses: {
    list: [],
    Limit: 20,
    filter: null,
    LastEvaluatedKey: null,
    selectedCourse: {}
  },
};

//Courses
const updateCoursesList = (state, payload) => {
  const { courses } = state;
  let _courses = { ...courses, ...payload };
  return { ...state, ...{ courses: _courses } };
};

const selectedCourseDetail = (state, payload) => {
  const { courses } = state;
  let _courses = { ...courses, ...{ selectedCourse: payload } };
  return { ...state, ...{ courses: _courses } };
};

//Users
const updatePendingList = (state, payload) => {
  const { users } = state;
  let _users = { ...users, ...{ enrollmentRequestList: payload } };
  return { ...state, ...{ users: _users } };
};

const updateUsersFilter = (state, payload) => {
  const { users } = state;
  let _users = { ...users, ...payload };
  return { ...state, ...{ users: _users } };
};

const updateUsersList = (state, payload) => {
  const { users } = state;
  let _users = { ...users, ...payload };
  return { ...state, ...{ users: _users } };
};

const updateNextUsersList = (state, payload) => {
  const { users } = state;
  const _userList = [...users.list, ...payload.list];
  const _LastEvaluatedKey = payload.LastEvaluatedKey;
  let _users = { list: _userList, LastEvaluatedKey: _LastEvaluatedKey };
  return { ...state, ...{ users: _users } };
};

const selectUserDetail = (state, payload) => {
  const { users } = state;
  let _users = { ...users, ...{ selectedUser: payload } };
  return { ...state, ...{ users: _users } };
};

export default function adminReducer(state = adminInitState, action) {
  switch (action.type) {
    case SET_PENDING_ENROLLMENT_LIST:
      return updatePendingList(state, action.payload);
    case SET_ALL_USERS:
      return updateUsersList(state, action.payload);
    case SET_USERS_FILTER:
      return updateUsersFilter(state, action.payload);
    case SET_NEXT_SET_USERS:
      return updateNextUsersList(state, action.payload);
    case SET_SELECTED_USER:
      return selectUserDetail(state, action.payload);
    case SET_ALL_COURSES:
      return updateCoursesList(state, action.payload);
    case SET_SELECTED_COURSE:
      return selectedCourseDetail(state, action.payload);
    default:
      return state;
  }
}
