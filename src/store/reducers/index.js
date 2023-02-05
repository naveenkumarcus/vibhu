import { combineReducers } from "redux";
import adminReducer from "./admin";
import appReducer from "./app";
import courseReducer from "./course";
import courseDetailReducer from "./course-detail";
import orderReducer from "./order";
import userReducer from "./user";
import videoReducer from "./video";

export default combineReducers({
  app: appReducer,
  admin: adminReducer,
  user: userReducer,
  video: videoReducer,
  course: courseReducer,
  courseDetail:courseDetailReducer,
  order: orderReducer
});
