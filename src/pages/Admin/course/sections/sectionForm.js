import React from "react";
import { Form, Button, Row, Col, Space, Card } from "antd";
import VAForm from "../../../../components/shared/form";
import { ADMIN_CONFIG } from "../../../../config/admin";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { createSection } from "../../../../store/effects/course-detail";
import { updateSection } from "../../../../store/effects/course-detail";
import getFields from "../../../../components/shared/fields";

const SectionForm = ({ data, toggleEdit }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const onFinish = values => {
    if (data.id) dispatch(updateSection(id, data.id, values));
    else dispatch(createSection(id, values));
    toggleEdit();
  };

  const onCancel = () => {
    if (data.id) toggleEdit();
    else history.goBack();
  };

  return (
    <Card>
      <VAForm name={ADMIN_CONFIG.section.name} onFinish={onFinish} onFinishFailed={console.log} layout={"horizontal"}>
        {ADMIN_CONFIG.section.fields.map(field => getFields(field, data))}
        <Row>
          <Col offset={20}>
            <Space>
              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
              <Form.Item>
                <Button shape="round" onClick={onCancel}>
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

export default SectionForm;
