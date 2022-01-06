import React, { useEffect } from "react";
import { Form, Button, Row, Col, Space, Card } from "antd";
import getFields from "../../../components/shared/fields";
import VAForm from "../../../components/shared/form";
import { AdminRouteEndpoints, ADMIN_CONFIG } from "../../../config/admin";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createCourse, updateCourse } from "../../../store/effects/admin";
import { useHistory, useParams } from "react-router";
import { resetSelectedCourse } from "../../../store/actions/course";
import { getCourseById } from "../../../store/effects/course";

const CourseForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const course = useSelector(({ course }) => course.selectedCourse, shallowEqual);

  const onFinish = values => {
    if (course.id) dispatch(updateCourse(id, values));
    else dispatch(createCourse(values));
  };

  useEffect(() => {
    if (!course.id && id) {
      dispatch(getCourseById(id));
    }
    return function () {
      dispatch(resetSelectedCourse());
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (course.id) setDisplayFields({ title: true });
  //   else setDisplayFields({});
  // }, [course]);

  return (
    <Card title={`${course.id ? "Edit" : "Create"} Course Detail`}>
      <VAForm name={ADMIN_CONFIG.course.name} onFinish={onFinish} onFinishFailed={console.log}>
        {ADMIN_CONFIG.course.fields.map(field => getFields(field, course))}
        <Row>
          <Col offset={18}>
            <Space>
              <Form.Item>
                <Button type="primary" shape="round" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>

              <Form.Item>
                <Button shape="round" onClick={() => history.push(AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT)}>
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

export default CourseForm;
