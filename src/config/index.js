import React from "react";
import {
  ClusterOutlined,
  HomeOutlined,
  LogoutOutlined,
  PicRightOutlined,
  ReconciliationOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Home from "../pages/Home";
import AllCourses from "../pages/AllCourses";
import MyCourses from "../pages/MyCourses";
import About from "../pages/About";
import CourseDetail from "../pages/CourseDetail";
import APP_CONSTANTS from "./constants";
import CoursePlayer from "../pages/CoursePlayer";
import Admin from "../pages/Admin";
import LoginForm from "../components/layout/LoginForm";
import RegistrationForm from "../components/layout/RegisterForm";
import Profile from "../pages/Profile";
import Home2 from "../pages/Home2";

export const LANDING_PATH = "/home";
export const ADMIN_ROLE = "VIBHU_ADMIN";

export const HOME_ROUTE = {
  isMenu: true,
  label: "Home",
  component: Home2,
  icon: <HomeOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "home",
  path: "/home",
};
const ALL_COURSES_ROUTE = {
  isMenu: true,
  label: "All Courses",
  component: AllCourses,
  icon: <SnippetsOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "allcourses",
  path: "/allcourses",
};
export const MY_COURSES_ROUTE = {
  isMenu: true,
  label: "My Courses",
  exact: true,
  component: MyCourses,
  icon: <ReconciliationOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "myCourses",
  path: "/myCourses",
};
const ABOUT_US_ROUTE = {
  isMenu: true,
  label: "About Us",
  exact: true,
  component: About,
  icon: <PicRightOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "about",
  path: "/about",
};

export const LOGIN_ROUTE = {
  isMenu: true,
  label: "Login",
  exact: true,
  component: LoginForm,
  icon: <UserOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "login",
  path: "/login",
};

export const REGISTER_ROUTE = {
  label: "Register",
  exact: true,
  component: RegistrationForm,
  icon: <UserOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "register",
  path: "/register",
};

export const LOGOUT_ROUTE = {
  isMenu: true,
  label: "Logout",
  icon: <LogoutOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  key: "logout",
  path: "/home",
};

export const ADMIN_ROUTE = {
  isMenu: true,
  key: "admin",
  label: "Admin",
  path: "/admin",
  icon: <ClusterOutlined twoToneColor={APP_CONSTANTS.colorScheme.primaryColor} />,
  exact: false,
  component: Admin
};

export const COURSE_DETAIL = {
  isMenu: false,
  key: "courseDetail",
  path: "/course/:id",
  exact: true,
  component: CourseDetail
};

export const COURSE_PLAYER = {
  isMenu: false,
  key: "coursePlayer",
  path: "/course/:id/section/:sectionId/:lessonId/palyer",
  exact: true,
  component: CoursePlayer
};

export const USR_PROFILE = {
  isMenu: false,
  key: "userProfile",
  label: "My Profile",
  path: "/profile",
  exact: true,
  component: Profile
};

const config = {
  header: {
    logo: "Vibhu Academy"
  },
  routes: [
    HOME_ROUTE,
    ALL_COURSES_ROUTE,
    REGISTER_ROUTE,
    ABOUT_US_ROUTE,
    LOGIN_ROUTE,
    COURSE_DETAIL,
    COURSE_PLAYER,
    USR_PROFILE
    // ADMIN_ROUTE
  ],
};

export default config;
