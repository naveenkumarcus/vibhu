import { RESET_SELECTED_COURSE, SET_ALL_COURSES, SET_COURSES_FILTER, SET_NEXT_SET_COURSES, SET_SELECTED_COURSE } from "../../actions/course";

const courseInitState = {
  list: [],
  Limit: 20,
  LastEvaluatedKey: null,
  filter: null,
  selectedCourse: {
    id: "",
    title: "",
    description: "",
    createdOn: "",
    updatedOn: "",
  },
};

const updateNextSetCourses = (state, payload) => {
  const { list } = state;
  let newState = {
    list: [...list, ...payload.list],
    LastEvaluatedKey: payload.LastEvaluatedKey
  }
  return {...state, ...newState}
}

export default function courseReducer(state = courseInitState, action) {
  switch (action.type) {
    case SET_ALL_COURSES:
      return { ...state, ...action.payload };
    case SET_NEXT_SET_COURSES:
      return updateNextSetCourses(state,action.payload);
    case SET_COURSES_FILTER:
      return { ...state, ...action.payload };
    case SET_SELECTED_COURSE:
      return { ...state, ...{selectedCourse: action.payload} };
    case RESET_SELECTED_COURSE:
      return { ...state, ...{selectedCourse: courseInitState.selectedCourse} };
    default:
      return state;
  }
}
