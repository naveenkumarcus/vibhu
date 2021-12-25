import { useState } from "react";
import Login from "../LoginForm";
import VADrawer from "../drawer";
import RegistrationForm from "../RegisterForm";
import { useSelector, shallowEqual } from "react-redux";

const EndUserForm = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const toggleRegistration = () => setIsRegistration(!isRegistration);
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn, shallowEqual);

  return (
    <VADrawer
      title={isRegistration ? "User Registration Form" : "User Login Form"}
      show={!isLoggedIn}
    >
      {isRegistration ? (
        <RegistrationForm onCancel={toggleRegistration} />
      ) : (
        <Login registerClick={toggleRegistration} />
      )}
    </VADrawer>
  );
};

export default EndUserForm;
