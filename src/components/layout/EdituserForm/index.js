import { Button, Card, Col, Row, Space, Form } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ADMIN_CONFIG } from "../../../config/admin";
import { createUser, getUserDetail } from "../../../store/effects/user";
import getFields from "../../shared/fields";
import VAForm from "../../shared/form";

export default function EdituserForm(){

  const history = useHistory();
  const { id } = useParams()
  const dispatch = useDispatch()
  const onFinish = (payload) => {
    dispatch(createUser(payload))
  };


  useEffect(() => {
    if(id){
      dispatch(getUserDetail(id))
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Card title="Edit User">
    <VAForm
      name={ADMIN_CONFIG.user.name}
      onFinish={onFinish}
      onFinishFailed={console.log}
    >
      {ADMIN_CONFIG.user.fields.map((field) => getFields(field))}
      <Row>
        <Col offset={16}>
          <Space>
            <Form.Item>
              <Button type="primary" shape="round" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

            <Form.Item>
              <Button shape="round" onClick={()=> history.goBack()}>
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
