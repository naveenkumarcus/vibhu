import { Form, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import loginImg from "../../../assets/img/guru.png";
import { useHistory } from "react-router";
import { LANDING_PATH } from "../../../config";
import VAForm from "../../shared/form";
import { USER_CONFIG } from "../../../config/user";
import getFields from "../../shared/fields";
import { loginAction } from "../../../store/effects/user";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const { login } = USER_CONFIG;

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn);

  const onFinish = (values) => {
    dispatch(loginAction(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isLoggedIn) history.push(LANDING_PATH);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  return (
    <>
      <div className="va-login">
        <div>
          <Card>
            <div className="va-login__img-container">
              <img height="250" src={loginImg} alt="Login" />
            </div>
            <VAForm
              name={login.name}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              {login.fields.map((field) => getFields(field))}
              <Form.Item>
                <div className="va-login__action">
                <Button
                  type="primary"
                  shape="round"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                <Link to="/register"> Register now</Link>
                </div>
              </Form.Item>
            </VAForm>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
