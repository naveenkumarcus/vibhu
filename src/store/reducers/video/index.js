import { SET_ALL_VIDEOS, SET_SELECTED_VIDEO_DATA } from "../../actions/video";

const videoInitState = {
  list: [],
  selectedVideoData: {},
};

export default function videoReducer(state = videoInitState, action) {
  switch (action.type) {
    case SET_SELECTED_VIDEO_DATA:
      return { ...state, ...{ selectedVideoData: action.payload } };
    case SET_ALL_VIDEOS:
      return { ...state, ...{ list: action.payload } };
    default:
      return state;
  }
}
