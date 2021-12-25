import React from "react";

const Title = ({ title, children }) => <h1 style={{ fontSize: "1.3rem" }}>{children || title}</h1>;
export default Title;
