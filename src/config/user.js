import { FIELD_CONSTANTS } from "./constants";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const USER_CONFIG = {
  login: {
    title: "User Login",
    name: "loginForm",
    className: "login-form",
    fields: [
      {
        type: FIELD_CONSTANTS.INPUT,
        name: "username",
        label: "Username",
        prefix: <UserOutlined />,
        required: true,
        placeholder: "Email address.",
        rules: [
            { required: true, 
                message: "Please provide your Username." ,
                minLength: 3,
                maxLength: 50,
            },
          ]
      },
      {
        type: FIELD_CONSTANTS.PASSWORD,
        name: "password",
        label: "Password",
        prefix: <LockOutlined />,
        required: true,
        placeholder: "Password.",
        rules: [
            { required: true, 
                message: "Please provide your Password" ,
                minLength: 3,
                maxLength: 50,
            },
          ]
      }
    ],
  },
  register: {
    title: "User Registerion",
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
            inputProps: {
              minLength: 3,
              maxLength: 50,
            },
            rules: [
              {
                required: true,
                message: "Please provide course title",
              },
            ],
          },
          {
            type: FIELD_CONSTANTS.INPUT,
            name: "instructors",
            label: "Instructor(s)",
            required: true,
            inputProps: {
              minLength: 3,
              maxLength: 50,
            },
            placeholder: "Course instructor(s) name",
            rules: [
              {
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
        inputProps: {
          minLength: 3,
          maxLength: 50,
        },
        placeholder: "Short description about course",
        rules: [
          {
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
        inputProps: {
          minLength: 3,
          maxLength: 50,
        },
        placeholder: "Course category",
        rules: [
          {
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
      },
    ],
  },
};
