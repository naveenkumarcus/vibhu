import React, { useEffect } from "react";
import { Form, Button, Row, Col, Space, Card, message, Popconfirm } from "antd";
import getFields from "../../../components/shared/fields";
import VAForm from "../../../components/shared/form";
import { AdminRouteEndpoints, ADMIN_CONFIG } from "../../../config/admin";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createCourse, updateCourse } from "../../../store/effects/admin";
import { useHistory, useParams } from "react-router";
import { resetSelectedCourse } from "../../../store/actions/course";
import { getCourseById } from "../../../store/effects/course";
import environment from "../../../environment";
import { DeleteOutlined, FolderOpenOutlined } from "@ant-design/icons";
import Uploader from "../../../components/shared/uploader";

const documentUpload = {
  name: "banner",
  label: "Banner",
  accept: ".png, .jpeg, .svg",
  uploadText: "Click or drag file to this area to upload banner image",
  uploadHint: "Please upload one image in one of the following formats .png, .jpeg, .svg",
};

const FilePrview = ({ url }) => {
  function confirm(e) {
    message.success("Click on Yes");
  }

  function cancel(e) {
    message.error("Click on No");
  }
  if(!url) return null;
  return (
     (
      <p>
        <a style={{ marginRight: 25 }} href={url} download>
          <FolderOpenOutlined style={{ marginRight: 5 }} />
          {decodeURIComponent(url.split("/").pop())}
        </a>
        <Popconfirm title="Are you sure to delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
          <DeleteOutlined />
        </Popconfirm>
      </p>
    )
  );
};

const CourseForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const course = useSelector(({ course }) => course.selectedCourse, shallowEqual);

  const onFinish = values => {
    if (course.id) dispatch(updateCourse(id, values));
    else dispatch(createCourse(values));
  };

  function onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  function onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  }

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
        {course.id && <Row>
          <FilePrview url={course.bannerURL} />
          <Uploader
            name="banner"
            action={environment.uploadCourseBanner.replace(":id", id)}
            key={"banner_upload"}
            onChange={onChange}
            onDrop={onDrop}
            {...documentUpload}
          />
        </Row>}
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
