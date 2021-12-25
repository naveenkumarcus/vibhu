import { Card } from "antd";
import React from "react";
import registerImg from "../../../assets/img/om.png";
import UserForm from "../../shared/userForm";

export default function RegistrationForm(){
  return (
    <Card>
      <div className="va_registration">
          <UserForm />
        <div>
          <img src={registerImg} alt="Register" />
        </div>
      </div>
    </Card>
  );
};
