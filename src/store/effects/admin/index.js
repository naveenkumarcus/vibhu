import environment, { redirects } from "../../../environment";
import restService from "../../../service";
import {
  setAllUsers,
  setNextSetUsers,
  setUsersFilter,
} from "../../actions/admin";
import { getAllCourses } from "../course";
import { message } from "antd";

export const getAllUsers = () => async (dispatch) => {
  dispatch(setUsersFilter({ filter: null }));
  let result = await restService(environment.listUsers, "POST");
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setAllUsers(response));
};

export const getNextSetUsers = () => async (dispatch, getState) => {
  const { users } = getState().admin;
  let _payload = {
    Limit: 20,
  };
  if (users.LastEvaluatedKey) {
    _payload.LastEvaluatedKey = users.LastEvaluatedKey;
  }
  if (users.filter && users.filter !== "") {
    _payload.filter = users.filter;
  }
  let result = await restService(environment.listUsers, "POST", _payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setNextSetUsers(response));
};

export const searchUsers = (_payload) => async (dispatch) => {
  let payload = { ..._payload };
  dispatch(setUsersFilter(payload));
  let result = await restService(environment.listUsers, "POST", payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setAllUsers(response));
};


// Course Section List

export const createCourse = (payload) => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    let result = await restService(environment.createCourse, "POST", payload);
    dispatch(getAllCourses());
    history.push(redirects[environment.createCourse]);
    message.success("Course created Successfully : ", result.data.course.title);
  } catch (error) {
    console.error(error);
    
  }
};

export const updateCourse = (id, payload) => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    let result = await restService(environment.updateCourse.replace(":id", id), "PUT", payload);
    dispatch(getAllCourses());
    history.push(redirects[environment.createCourse]);
    message.success("Course created Successfully : ", result.data.course.title);
  } catch (error) {
    console.error(error);
  }
};

export const getCourseById = (id) => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    await restService(environment.courseById.replace(":id", id));
    history.push(redirects[environment.courseById].replace(":id", id))
  } catch (error) {
    console.error(error);
  }
};

