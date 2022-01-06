import { message } from "antd";
import environment, { redirects } from "../../../environment";
import restService from "../../../service";
import { resetCourseDetail, setCourseDetail, setCourseSection, setSelectedLesson } from "../../actions/course-detail";

message.config({
  top: 100,
  duration: 5,
  maxCount: 2,
  rtl: true,
});

//Course Effects
export const getCourseById = id => async (dispatch) => {
  let result = await restService(environment.courseById.replace(":id", id));
  let payload = result.data;
  dispatch(setCourseDetail(payload));
  dispatch(listSectionsByCourse(id));
};

export const createSection = (courseId, payload) => async (dispatch) => {
  try {
    let result = await restService(environment.createSection.replace(":courseId", courseId), "POST", payload);
    dispatch(listSectionsByCourse(courseId));
    message.success("Section created Successfully : ", result.data.section.title);
  } catch (error) {
    message.error("Section create error : " + error.message);
  }
};

export const listSectionsByCourse = courseId => async (dispatch, getState) => {
  try {
    const { user } = getState();
    let url = user.isLoggedIn? environment.listUsersSections : environment.listSections;
    let result = await restService(url.replace(":courseId", courseId));
    let payload = result.data;
    dispatch(setCourseSection(payload.Items));
  } catch (error) {
    message.success("List section errored :", error.message);
  }
};

export const updateSection = (courseId, sectionId, payload) => async (dispatch) => {
  try {
    let result = await restService(environment.updateSection.replace(":courseId", courseId).replace(":sectionId", sectionId), "PUT", payload);
    dispatch(listSectionsByCourse(courseId));
    message.success("Section updated Successfully :", result.data.section.title);
  } catch (error) {
    message.error("Section update error : " + error.message);
  }
};

export const patchSectionPaid = (courseId, sectionId, payload) => async (dispatch) => {
  try {
    await restService(environment.patchSection.replace(":courseId", courseId).replace(":sectionId", sectionId), "PATCH", payload);
    dispatch(listSectionsByCourse(courseId));
    message.success("Section patched Successfully :", sectionId);
  } catch (error) {
    message.error("Section update error : " + error.message);
  }
};

export const deleteSection = (courseId, sectionId) => async (dispatch) => {
  try {
    await restService(environment.deleteSection.replace(":courseId", courseId).replace(":sectionId", sectionId), "DELETE");
    dispatch(listSectionsByCourse(courseId));
    message.success("Section Deleted Successfully");
  } catch (error) {
    message.error("Section delete error : " + error.message);
  }
};

//Lesson Effects
export const createLesson = payload => async (dispatch, getState) => {
  try {
    const { courseDetail, app } = getState();
    const { id: courseId, selectedSection } = courseDetail;
    let result = await restService(environment.createlesson.replace(":courseId", courseId).replace(":sectionId", selectedSection.id), "POST", payload);
    app.history.push(redirects[environment.createlesson].replace(":id", courseId));
    dispatch(resetCourseDetail());
    message.success("Lesson created Successfully : ", result.data.lesson.title);
  } catch (error) {
    message.error("Lesson create error : " + error.message);
  }
};

export const updateLesson = payload => async (dispatch, getState) => {
  try {
    const { id: courseId, selectedSection } = getState().courseDetail;
    const { history } = getState().app;
    let result = await restService(environment.updatelesson.replace(":courseId", courseId).replace(":sectionId", selectedSection.id).replace(":lessonId", payload.id), "PUT", payload);
    message.success("Lesson updated Successfully : ", result.data.lesson.title);
    dispatch(listSectionsByCourse(courseId));
    history.push(redirects[environment.createlesson].replace(":id", courseId));
  } catch (error) {
    message.error("Lesson update error : " + error.message);
  }
};

export const deleteLesson = payload => async (dispatch, getState) => {
  try {
    const { history } = getState().app;
    await restService(environment.deletelesson.replace(":courseId", payload.courseId).replace(":sectionId", payload.sectionId).replace(":lessonId", payload.id), "DELETE");
    message.success("Lesson Deleted Successfully : ", payload.title);
    history.push(redirects[environment.deletelesson].replace(":id", payload.courseId));
    dispatch(resetCourseDetail());
  } catch (error) {
    message.error("Lesson delete error : " + error.message);
  }
};

//Uploads

export const updateLessonContent = payload => async (dispatch, getState) => {
  try {
    const { id: courseId, selectedSection } = getState().courseDetail;
    const { history } = getState().app;
    let result = await restService(environment.updatelesson.replace(":courseId", courseId).replace(":sectionId", selectedSection.id).replace(":lessonId", payload.id), "PUT", payload);
    message.success("Lesson updated Successfully : ", result.data.lesson.title);
    dispatch(listSectionsByCourse(courseId));
    history.push(redirects[environment.createlesson].replace(":id", courseId));
  } catch (error) {
    message.error("Lesson update error : " + error.message);
  }
};

export const uploadLessonDocument = (payload, lesson) => async (dispatch) => {
  try {
    const { id, courseId, sectionId } = lesson;
    let formData = new FormData();
    formData.append("file", payload);
    await restService(environment.uploadlessonDoc.replace(":courseId", courseId).replace(":sectionId", sectionId).replace(":lessonId", id), "POST", formData, {
      "content-type": "multipart/form-data",
    });
    let _lesson = await restService(environment.lessonById.replace(":courseId", courseId).replace(":sectionId", sectionId).replace(":lessonId", id));
    dispatch(setSelectedLesson(_lesson.data));
  } catch (e) {
    message.error("Video upload error : " + e.message);
  }
};
