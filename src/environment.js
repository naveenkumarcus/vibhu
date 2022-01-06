import { AdminRouteEndpoints } from "./config/admin";

const AUTHN_BASE_PATH = "/api/authn/";
const USER_BASE_PATH = "/api/user/";
const COURSES_BASE_PATH = "/api/course/";
const ORDER_BASE_PATH = "/api/order/";

const environment = {
  //AUTH_SERVICE
  login: AUTHN_BASE_PATH + "login",
  logout: AUTHN_BASE_PATH + "logout",

  //USER_SERVICE
  register: USER_BASE_PATH + "register",
  listUsers: USER_BASE_PATH + "search",
  profile: USER_BASE_PATH + "profile",
  userById: USER_BASE_PATH + ":id",
  createUser: USER_BASE_PATH + "create",
  deleteUser: USER_BASE_PATH + "delete",
  resetPassword: USER_BASE_PATH + "reset-password",
  //COURSE_SERVICE
  listCourses: COURSES_BASE_PATH + "search",
  courseById: COURSES_BASE_PATH + ":id",
  createCourse: COURSES_BASE_PATH + "create",
  updateCourse: COURSES_BASE_PATH + ":id",
  deleteCourse: COURSES_BASE_PATH + "delete",

  //SECTIONS
  createSection: COURSES_BASE_PATH + ":courseId/section/create",
  listUsersSections: COURSES_BASE_PATH + ":courseId/user/section",
  listSections: COURSES_BASE_PATH + ":courseId/section",
  sectionById: COURSES_BASE_PATH + ":courseId/section/:sectionId",
  updateSection: COURSES_BASE_PATH + ":courseId/section/:sectionId",
  deleteSection: COURSES_BASE_PATH + ":courseId/section/:sectionId",
  patchSection: COURSES_BASE_PATH + ":courseId/section/:sectionId",

  //LESSON
  listLesson: COURSES_BASE_PATH + ":courseId/section/:sectionId/lesson",
  createlesson: COURSES_BASE_PATH + ":courseId/section/:sectionId/create",
  lessonById: COURSES_BASE_PATH + ":courseId/section/:sectionId/lesson/:lessonId",
  updatelesson: COURSES_BASE_PATH + ":courseId/section/:sectionId/lesson/:lessonId",
  deletelesson: COURSES_BASE_PATH + ":courseId/section/:sectionId/lesson/:lessonId",

  //ORDER
  enrollSection: ORDER_BASE_PATH + "section/enroll",
  approveOrder: ORDER_BASE_PATH + "section/approve",
  rejectOrder: ORDER_BASE_PATH + "section/reject",
  listUserOrders: ORDER_BASE_PATH + ":userId/list",
  listOrders: ORDER_BASE_PATH + "search",

  //STREAMING
  videoStream: COURSES_BASE_PATH + "video",
  //UPLOAD_BASE_PATH
  uploadlessonDoc: COURSES_BASE_PATH + ":courseId/section/:sectionId/lesson/:lessonId/document"
};

export const redirects = {
  [environment.createUser]: AdminRouteEndpoints.ADMIN_USER_MANAGEMENT,
  [environment.createCourse]: AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT,
  [environment.updateCourse]: AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT,
  [environment.courseById]: AdminRouteEndpoints.ADMIN_ADD_SECTIONS_FOR_COURSE,
  [environment.profile]: "/home",
  [environment.createlesson]: AdminRouteEndpoints.ADMIN_ADD_SECTIONS_FOR_COURSE,
  [environment.deletelesson]: AdminRouteEndpoints.ADMIN_ADD_SECTIONS_FOR_COURSE,
  courseEdit: AdminRouteEndpoints.COURSE_EDIT,
  [environment.register]: "/login"
};

export default environment;
