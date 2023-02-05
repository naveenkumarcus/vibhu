//Defs
export const SET_ALL_COURSES = "SET_ALL_COURSES";
export const SET_SELECTED_COURSE = "SET_SELECTED_COURSE";
export const RESET_SELECTED_COURSE = "RESET_SELECTED_COURSE";
export const SET_COURSES_FILTER = "SET_COURSES_FILTER";
export const SET_NEXT_SET_COURSES = "SET_NEXT_SET_COURSES";

//Actions
export const setCoursesFilter = (payload) => ({ type: SET_COURSES_FILTER, payload });
export const setAllCourses = (payload) => ({ type: SET_ALL_COURSES, payload });
export const setNextSetCourses = (payload) => ({ type: SET_NEXT_SET_COURSES, payload });

export const setSelectedCourse = (payload) => ({ type: SET_ALL_COURSES, payload });
export const resetSelectedCourse = () => ({ type: RESET_SELECTED_COURSE });
