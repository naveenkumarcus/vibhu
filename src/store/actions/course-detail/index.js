import cloneDeep from "lodash.clonedeep";

//Defs
export const SET_COURSE_DETAIL = "SET_COURSE_DETAIL";
export const RESET_COURSE_DETAIL = "RESET_COURSE_DETAIL";

export const SET_COURSE_SECTIONS = "SET_COURSE_SECTIONS";

export const ADD_SECTION = "ADD_SECTION";
export const ADD_LESSON = "ADD_LESSON";

export const SAVE_SECTION = "SAVE_SECTION";
export const SAVE_LESSON = "SAVE_LESSON";

export const UPDATE_SECTION = "UPDATE_SECTION";
export const UPDATE_LESSON = "UPDATE_LESSON";

export const DELETE_SECTION = "DELETE_SECTION";
export const DELETE_LESSON = "DELETE_LESSON";

export const REMOVE_SECTION = "REMOVE_SECTION";
export const REMOVE_LESSON = "REMOVE_LESSON";

export const SET_SELECTED_SECTION = "SET_SELECTED_SECTION";

export const SET_SELECTED_LESSON = "SET_SELECTED_LESSON";
export const RESET_SELECTED_LESSON = "RESET_SELECTED_LESSON";
//Action
export const setCourseDetail = payload => ({ type: SET_COURSE_DETAIL, payload });
export const resetCourseDetail = () => ({ type: RESET_COURSE_DETAIL });
export const setCourseSection = payload => ({ type: SET_COURSE_SECTIONS, payload });

export const addSection = payload => ({ type: ADD_SECTION, payload });
export const removeSection = payload => ({ type: REMOVE_SECTION, payload });

export const addLesson = payload => ({ type: ADD_LESSON, payload });
export const removeLesson = payload => ({ type: REMOVE_LESSON, payload });

export const setSelectedSection = payload => ({ type: SET_SELECTED_SECTION, payload });

export const setSelectedLesson = payload => ({ type: SET_SELECTED_LESSON, payload });
export const resetSelectedLesson = () => ({ type: RESET_SELECTED_LESSON });

//set selected key
export const setSelectedSectionFromKey = key => (dispatch, getState) => {
  const { sections } = getState().courseDetail;
  let data = sections.find(sec => sec.id === key);
  const _selectedSelction = cloneDeep(data);
  dispatch(setSelectedSection(_selectedSelction));
};
