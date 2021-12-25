import { 
  ADD_SECTION, RESET_COURSE_DETAIL, 
  SET_COURSE_DETAIL, SET_COURSE_SECTIONS, 
  SET_SELECTED_SECTION, SET_SELECTED_LESSON, 
  RESET_SELECTED_LESSON 
} from "../../actions/course-detail";

const sectionDetail = {
  completeted: false,
  id: 0,
  title: "",
  about: "",
  lessons: [],
};

const courseDetailInit = {
  id: "",
  title: "",
  about: "",
  description: "",
  createdOn: "",
  updatedOn: "",
  sections: [],
  selectedSection: { id: "", lesson: [] },
  selectedLesson: { id: 0, title: "", about: "" },
};

const _addSection = state => {
  let _sections = [...state.sections, { ...sectionDetail }];
  return { ...state, ...{ sections: _sections } };
};

// const _addSection = state => {
//   let sectionDetail = cloneDeep(state.sectionDetail);
//   deep
//   return { ...state, ...{ sections: _sections } };
// };

export default function courseDetailReducer(state = courseDetailInit, action) {
  switch (action.type) {
    case SET_COURSE_DETAIL:
      return { ...state, ...action.payload };
    case SET_COURSE_SECTIONS:
      return { ...state, ...{ sections: action.payload } };
    case ADD_SECTION:
      return _addSection(state);
    case SET_SELECTED_SECTION:
      return { ...state, ...{ selectedSection: action.payload } };
    case RESET_COURSE_DETAIL:
      return { ...courseDetailInit };
    case SET_SELECTED_LESSON:
      return { ...state, ...{ selectedLesson: action.payload } };
    case RESET_SELECTED_LESSON:
      return { ...state, ...{ selectedLesson: courseDetailInit.selectedLesson } };
    default:
      return state;
  }
}
