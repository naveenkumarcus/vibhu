import React from "react";
import { Form, Button, Row, Col, Space, Card } from "antd";
import getFields from "../fields";
import VAForm from "../form";
import { ADMIN_CONFIG } from "../../../config/admin";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { createUser, registerUser } from "../../../store/effects/user";
import { useLocation } from "react-router-dom";
import { REGISTER_ROUTE } from "../../../config";

const UserForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const onFinish = payload => {
    if (location.pathname === REGISTER_ROUTE.path) dispatch(registerUser(payload));
    else dispatch(createUser(payload));
  };

  return (
    <Card title="User Registeration">
      <VAForm name={ADMIN_CONFIG.user.name} onFinish={onFinish} onFinishFailed={console.log}>
        {ADMIN_CONFIG.user.fields.map(field => getFields(field))}
        <Row>
          <Col offset={16}>
            <Space>
              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

              <Form.Item>
                <Button shape="round" onClick={() => history.goBack()}>
                  Cancel
                </Button>
              </Form.Item>
            </Space>
          </Col>
        </Row>
      </VAForm>
    </Card>
  );
};

export default UserForm;
