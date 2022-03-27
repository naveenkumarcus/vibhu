import Dashboard from "../pages/Admin/dashboard/dashboard";
import OrderManagement from "../pages/Admin/order/orderManagement";
import UserManagement from "../pages/Admin/user/userManagement";
import CourseManagement from "../pages/Admin/course/courseManagement";
import { UserOutlined, ReadOutlined, ProjectOutlined, WalletOutlined, LockOutlined, MailOutlined, PhoneOutlined, QuestionOutlined } from "@ant-design/icons";
import { FIELD_CONSTANTS } from "./constants";
import { Link } from "react-router-dom";
import RegistrationForm from "../components/layout/RegisterForm";
import CourseForm from "../pages/Admin/course/courseForm";
import SectionList from "../pages/Admin/course/sections/sectionList";
import LessonForm from "../pages/Admin/course/lessons/lessonForm";
import environment, { redirects } from "../environment";
import LessonContent from "../pages/Admin/course/lessons/lessonContent";
import EdituserForm from "../components/layout/EdituserForm";
import { COURSE_DETAIL } from ".";
import {
  resetApprovedOrders,
  resetDeniedOrders,
  resetPendigOrders,
  setApprovedOrders,
  setApprovedOrdersFilter,
  setDeniedOrders,
  setDeniedOrdersFilter,
  setNextApprovedOrders,
  setNextDeniedOrders,
  setNextPendigOrders,
  setPendigOrders,
  setPendigOrdersFilter,
} from "../store/actions/order";
import { Tag } from "antd";

export const AdminRouteEndpoints = {
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_ORDER_MANAGEMENT: "/admin/order-management",
  ADMIN_USER_MANAGEMENT: "/admin/user-management",
  ADMIN_COURSE_MANAGEMENT: "/admin/course-management",
  USER_CREATE: "/admin/user-management/create",
  COURSE_CREATE: "/admin/course-management/create",
  COURSE_EDIT: "/admin/course-management/:id/edit",
  ADMIN_USER_MANAGEMENT_EDIT: "/admin/user-management/:id/edit",
  ADMIN_ADD_SECTIONS_FOR_COURSE: "/admin/course-management/:id/sections",
  ADMIN_ADD_LESSON_FOR_SECTION: "/admin/course-management/:id/section/:sectionId/add",
  ADMIN_EDIT_LESSON_FOR_SECTION: "/admin/course-management/:id/section/:sectionId/:lessonId/edit",
  ADD_LESSON_CONTENT: "/admin/course-management/:id/section/:sectionId/:lessonId/content",
};

const securityQuestion = [
  {
    value: "What Is your favorite book?",
    label: "What Is your favorite book?",
  },
  {
    value: "What is your mother’s maiden name?",
    label: "What is your mother’s maiden name?",
  },
  {
    value: "What was the name of your first/current/favorite pet?",
    label: "What was the name of your first/current/favorite pet?",
  },
  {
    value: "What was the first company that you worked for?",
    label: "What was the first company that you worked for?",
  },
  {
    value: "Where did you meet your spouse",
    label: "Where did you meet your spouse",
  },
  {
    value: "Where did you go to high school/college?",
    label: "Where did you go to high school/college?",
  },
  {
    value: "What is your favorite food?",
    label: "What is your favorite food?",
  },
];

export const ORDER_STATUS = {
  ORDER_PENDING: "ORDER_PENDING",
  ORDER_APPROVED: "ORDER_APPROVED",
  ORDER_DENIED: "ORDER_DENIED",
};
export const ADMIN_CONFIG = {
  course: {
    title: "Course Management",
    create: "create course",
    name: "course",
    columns: [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: (text, rec) => <Link to={redirects[environment.courseById].replace(":id", rec.id)}>{text}</Link>,
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
      },
      {
        title: "Instructor",
        dataIndex: "instructors",
        key: "instructors",
      },
      {
        title: "Created Date",
        dataIndex: "createdOn",
        key: "createdOn",
        render: (val, rec) => {
          return new Date(val).toLocaleDateString();
        },
      },
      {
        title: "Updated Date",
        dataIndex: "updatedOn",
        key: "updatedOn",
        render: (val, rec) => {
          return new Date(val).toLocaleDateString();
        },
      },
    ],
    fields: [
      {
        type: FIELD_CONSTANTS.ROW,
        fields: [
          {
            type: FIELD_CONSTANTS.INPUT,
            name: "title",
            label: "Title",
            required: true,
            placeholder: "Course title",
            rules: [
              {
                min: 3,
                max: 50,
                required: true,
                message: "Please provide course title",
              },
            ],
          },
          {
            type: FIELD_CONSTANTS.INPUT,
            name: "instructors",
            label: "Instructor(s)",
            placeholder: "Course instructor(s) name",
            rules: [
              {
                min: 3,
                max: 100,
                required: true,
                message: "Please provide about course category",
              },
            ],
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "about",
        label: "About course",
        required: true,
        placeholder: "Short description about course",
        rules: [
          {
            min: 3,
            max: 300,
            required: true,
            message: "Please provide about course",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "category",
        label: "Category",
        required: true,
        placeholder: "Course category",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide about course category",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.TEXTAREA,
        name: "description",
        label: "Description",
        placeholder: "Detailed description about course",
      }
    ],
  },
  section: {
    title: "Section Management",
    create: "create section",
    name: "section",
    fields: [
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "title",
        label: "Section Title",
        required: true,
        placeholder: "Section title",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide Section title",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.TEXTAREA,
        name: "about",
        label: "About Section",
        required: true,
        placeholder: "Short description about section",
        row: 3,
        rules: [
          {
            min: 3,
            max: 300,
            required: true,
            message: "Please provide about section",
          },
        ],
      },
    ],
  },
  lesson: {
    title: "Lesson Management",
    create: "create lesson",
    name: "lesson",
    fields: [
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "title",
        label: "Lesson Title",
        required: true,
        placeholder: "Lesson title",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide lesson title",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.TEXTAREA,
        name: "about",
        label: "About Lesson",
        required: false,
        placeholder: "Short description about lesson",
        row: 3,
        rules: [
          {
            min: 3,
            max: 300,
            required: false,
            message: "Please provide about section",
          },
        ],
      },
    ],
    content: {
      fields: [
        {
          type: FIELD_CONSTANTS.INPUT,
          name: "contentURL",
          label: "Content URL (mpd/hsl) format:",
          required: true,
          placeholder: "Please provide .mpd/.hsl endpoint.",
          rules: [
            {
              min: 5,
              required: true,
              message: "Please provide .mpd/.hsl endpoint.",
            },
          ],
        },
      ],
    },
  },
  user: {
    title: "User Management",
    create: "create user",
    name: "users",
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        // render: (value, record) => <Link to={AdminRouteEndpoints.ADMIN_USER_MANAGEMENT_EDIT.replace(":id", record.id)}>{value}</Link>,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (value, record) => {
          let color = value ? "geekblue" : "green";
          return (
            <Tag color={color} key={record.id}>
              {value || "Active"}
            </Tag>
          );
        },
      },
      {
        title: "Created Date",
        dataIndex: "createdOn",
        key: "createdOn",
        render: (val, rec) => {
          return new Date(val).toLocaleDateString();
        },
      },
      {
        title: "Updated Date",
        dataIndex: "updatedOn",
        key: "updatedOn",
        render: (val, rec) => {
          return new Date(val).toLocaleDateString();
        },
      },
    ],
    fields: [
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "name",
        label: "Name",
        required: true,
        prefix: <UserOutlined />,
        placeholder: "Full Name",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide full name",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "email",
        label: "Email",
        required: true,
        prefix: <MailOutlined />,
        placeholder: "Email Address",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide Email Address",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.ROW,
        fields: [
          {
            type: FIELD_CONSTANTS.INPUT,
            name: "phone",
            label: "Phone",
            required: false,
            prefix: <PhoneOutlined />,
            placeholder: "Phone number with code",
            rules: [
              {
                min: 10,
                max: 15,
                required: true,
                message: "Please provide Phone number with code",
              },
            ],
          },
          // {
          //   type: FIELD_CONSTANTS.DATE,
          //   name: "dob",
          //   label: "dob",
          //   prefix: <CalendarOutlined />,
          //   placeholder: "Date of Birth",
          // },
        ],
      },
      {
        type: FIELD_CONSTANTS.ROW,
        fields: [
          {
            type: FIELD_CONSTANTS.PASSWORD,
            name: "password",
            label: "Password",
            required: true,
            prefix: <LockOutlined />,
            placeholder: "Password",
            rules: [
              {
                min: 8,
                max: 50,
                required: true,
                message: "Please provide valid password.",
              },
            ],
          },
          {
            type: FIELD_CONSTANTS.CONFIRM_PASSWORD,
            name: "confirm",
            label: "Confirm Password",
            required: true,
            dependencies: ["password"],
            prefix: <LockOutlined />,
            placeholder: "Confirm Password",
            rules: [
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Confirm Password do not match!"));
                },
              }),
            ],
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.SELECT,
        name: "secuityQuestion",
        label: "Secuity Question",
        required: true,
        prefix: <QuestionOutlined />,
        options: securityQuestion,
        placeholder: "Security question for account recovery",
        rules: [
          {
            required: true,
            message: "Please select secuity question for account recovery.",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "secuityAnswer",
        label: "Secuity Answer",
        required: true,
        prefix: <QuestionOutlined />,
        placeholder: "Security answer for account recovery",
        rules: [
          {
            min: 3,
            max: 50,
            required: true,
            message: "Please provide security answer for account recovery",
          },
        ],
      },
    ],
  },
  profile: {
    title: "Profile",
    name: "profile",
    columns: [],
    fields: [
      {
        type: FIELD_CONSTANTS.PASSWORD,
        name: "oldPassword",
        label: "Old Password",
        required: true,
        prefix: <LockOutlined />,
        placeholder: "Old Password",
        rules: [
          {
            min: 8,
            max: 50,
            required: true,
            message: "Please provide old password.",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.PASSWORD,
        name: "newPassword",
        label: "New Password",
        required: true,
        prefix: <LockOutlined />,
        placeholder: "New Password",
        rules: [
          {
            min: 8,
            max: 50,
            required: true,
            message: "Please provide new password.",
          },
        ],
      },
      {
        type: FIELD_CONSTANTS.CONFIRM_PASSWORD,
        name: "confirm",
        label: "Confirm Password",
        required: true,
        dependencies: ["newPassword"],
        prefix: <LockOutlined />,
        placeholder: "Confirm Password",
        rules: [
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Confirm Password do not match!"));
            },
          }),
        ],
      },
    ],
  },
  order: {
    title: "Order Management",
    name: "order",
    columns: [
      {
        title: "Order Id",
        dataIndex: "orderId",
        key: "orderId",
      },
      {
        title: "Course Title",
        dataIndex: "courseTitle",
        key: "courseTitle",
        render: (text, data) => <Link to={COURSE_DETAIL.path.replace(":id", data.courseId)}>{text}</Link>,
      },
      {
        title: "Section Title",
        dataIndex: "sectionTitle",
        key: "sectionTitle",
        render: (text, data) => <Link to={COURSE_DETAIL.path.replace(":id", data.courseId)}>{text}</Link>,
      },
      {
        title: "Ordered By",
        dataIndex: "orderedBy",
        key: "orderedBy",
      },
      {
        title: "Ordered On",
        dataIndex: "createdOn",
        key: "createdOn",
      },
    ],
    status: ORDER_STATUS,
    tabs: [
      {
        id: 1,
        key: "pending",
        label: "Pending",
        status: ORDER_STATUS.ORDER_PENDING,
        actions: {
          list: setPendigOrders,
          nextList: setNextPendigOrders,
          filter: setPendigOrdersFilter,
          reset: resetPendigOrders,
        },
      },
      {
        id: 2,
        key: "approved",
        label: "Approved",
        status: ORDER_STATUS.ORDER_APPROVED,
        actions: {
          list: setApprovedOrders,
          nextList: setNextApprovedOrders,
          filter: setApprovedOrdersFilter,
          reset: resetApprovedOrders,
        },
        filterList: (data = []) => data.filter(item => ["ORDER_COMPLETED"].indexOf(item.status) > -1),
      },
      {
        id: 3,
        key: "denied",
        label: "Denied",
        status: ORDER_STATUS.ORDER_DENIED,
        actions: {
          list: setDeniedOrders,
          nextList: setNextDeniedOrders,
          filter: setDeniedOrdersFilter,
          reset: resetDeniedOrders,
        },
        filterList: (data = []) => data.filter(item => ["ORDER_INITIATED_FAILED"].indexOf(item.status) > -1),
      },
    ],
  },
};

export const adminRoutes = [
  {
    isMenu: true,
    icon: <ProjectOutlined />,
    label: "Dashboard",
    key: "dash",
    component: Dashboard,
    path: AdminRouteEndpoints.ADMIN_DASHBOARD,
  },
  {
    isMenu: true,
    icon: <WalletOutlined />,
    label: "Order",
    key: "order",
    component: OrderManagement,
    path: AdminRouteEndpoints.ADMIN_ORDER_MANAGEMENT,
  },
  {
    isMenu: true,
    icon: <UserOutlined />,
    label: "User",
    key: "user",
    component: UserManagement,
    path: AdminRouteEndpoints.ADMIN_USER_MANAGEMENT,
  },
  {
    isMenu: true,
    icon: <ReadOutlined />,
    label: "Course",
    key: "course",
    component: CourseManagement,
    path: AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT,
  },
  {
    icon: <ReadOutlined />,
    label: "Create Course",
    key: "courseCreate",
    component: CourseForm,
    path: AdminRouteEndpoints.COURSE_CREATE,
  },
  {
    icon: <ReadOutlined />,
    label: "Edit Course",
    key: "courseEdit",
    component: CourseForm,
    path: AdminRouteEndpoints.COURSE_EDIT,
  },
  {
    icon: <ReadOutlined />,
    label: "Create Sections",
    key: "sectionCreate",
    component: SectionList,
    path: AdminRouteEndpoints.ADMIN_ADD_SECTIONS_FOR_COURSE,
  },
  {
    icon: <UserOutlined />,
    label: "Create User",
    key: "userCreate",
    component: RegistrationForm,
    path: AdminRouteEndpoints.USER_CREATE,
  },
  {
    icon: <UserOutlined />,
    label: "Edit User",
    key: "userUpdate",
    component: EdituserForm,
    path: AdminRouteEndpoints.ADMIN_USER_MANAGEMENT_EDIT,
  },
  {
    label: "Add Lesson",
    key: "addLesson",
    component: LessonForm,
    path: AdminRouteEndpoints.ADMIN_ADD_LESSON_FOR_SECTION,
  },
  {
    label: "Edit Lesson",
    key: "editLesson",
    component: LessonForm,
    path: AdminRouteEndpoints.ADMIN_EDIT_LESSON_FOR_SECTION,
  },
  {
    label: "Add Lesson Content",
    key: "addLessonContent",
    component: LessonContent,
    path: AdminRouteEndpoints.ADD_LESSON_CONTENT,
  },
];