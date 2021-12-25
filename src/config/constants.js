export const FIELD_CONSTANTS = {
  INPUT: "input",
  UPLOAD: "upload",
  DATE: "date",
  PASSWORD: "password",
  DEPENDENT: "dependent", // should have dependencies=['field'], rule=[{},(val)=>{}]
  TEXTAREA: "textarea",
  SELECT: "select",
  SWITCH: "switch",
  ROW: "row",
};

const APP_CONSTANTS = {
  colorScheme: {
    primaryColor: "#f39237",
    secondaryColor: "rgb(255, 255, 255)",
  },
};

export const MESSAGES = {
  NO_COURSE_CONTENT: "No content available for the selected Course",
};

export default APP_CONSTANTS;
