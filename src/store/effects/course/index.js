import environment, { redirects } from "../../../environment";
import restService from "../../../service";
import { setAllCourses, setSelectedCourse, setCoursesFilter, setNextSetCourses } from "../../actions/course";

export const getAllCourses = () => async (dispatch) => {
  dispatch(setCoursesFilter({ filter: null }));
  let result = await restService(environment.listCourses, "POST");
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setAllCourses(response));
};

export const searchCourses = (_payload) => async (dispatch) => {
  let payload = { ..._payload}
  dispatch(setCoursesFilter(payload));
  let result = await restService(environment.listCourses, "POST", payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setAllCourses(response));
};

export const getNextSetCourses = () => async (dispatch, getState) => {
  const { course } = getState();
  let _payload = {
    Limit: 20,
  };
  if (course.LastEvaluatedKey) {
    _payload.LastEvaluatedKey = course.LastEvaluatedKey;
  }
  if (course.filter && course.filter !== "") {
    _payload.filter = course.filter;
  }
  let result = await restService(environment.listCourses, "POST", _payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setNextSetCourses(response));
};

export const getCourseById = (id) => async (dispatch, getState) => {
  const { history } = getState().app;
  let result = await restService(environment.courseById.replace(":id", id));
  let payload = { selectedCourse: result.data };
  dispatch(setSelectedCourse(payload));
  history.push(redirects['courseEdit'].replace(":id", id)); 

};
