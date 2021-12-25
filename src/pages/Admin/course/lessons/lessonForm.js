import React, { useEffect } from "react";
import { Form, Button, Row, Col, Space, Card, PageHeader } from "antd";
import VAForm from "../../../../components/shared/form";
import { ADMIN_CONFIG } from "../../../../config/admin";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import getFields from "../../../../components/shared/fields";
import { createLesson, updateLesson } from "../../../../store/effects/course-detail";
import { resetSelectedLesson } from "../../../../store/actions/course-detail";

const LessonForm = () => {
  const history = useHistory();
  const { lessonId } = useParams();
  const dispatch = useDispatch();
  const { selectedSection, selectedLesson } = useSelector(({ courseDetail }) => courseDetail);

  const onFinish = values => {
    if (!lessonId) dispatch(createLesson(values));
    else dispatch(updateLesson({...selectedLesson, ...values}))
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    return function () {
      dispatch(resetSelectedLesson());
    };
  }, []);

  return (
    <Card>
      <PageHeader onBack={() => history.goBack()} title={<h1>{selectedSection.title || ""}</h1>} />
      <VAForm name={ADMIN_CONFIG.lesson.name} onFinish={onFinish} onFinishFailed={console.log} layout={"horizontal"}>
        {ADMIN_CONFIG.lesson.fields.map(field => getFields(field, selectedLesson))}
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

export default LessonForm;
