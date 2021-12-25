import React from "react";
import { Tabs, Card, message, Button, Row, Col, Space, Form, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PlayCircleOutlined, BookOutlined, DeleteOutlined, FolderOpenOutlined } from "@ant-design/icons";
import Uploader from "../../../../components/shared/uploader";
import { updateLessonContent, uploadLessonDocument } from "../../../../store/effects/course-detail";
// import { useState } from "react";
import VAForm from "../../../../components/shared/form";
import { ADMIN_CONFIG } from "../../../../config/admin";
import getFields from "../../../../components/shared/fields";
import environment from "../../../../environment";
const { TabPane } = Tabs;

const documentUpload = {
  name: "file",
  label: "Documents",
  accept: ".pdf, .doc, .txt",
  uploadText: "Click or drag file to this area to upload banner image",
  uploadHint: "Please upload one image in one of the following formats .pdf, .doc, .txt",
};

const FilePrview = ({ url }) => {
  function confirm(e) {
    message.success("Click on Yes");
  }

  function cancel(e) {
    message.error("Click on No");
  }
  return (
    url && (
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

const   LessonContent = ({ toggle }) => {
  // const [file, setFile] = useState(null);
  // const [fileName, setFileName] = useState(null);

  const dispatch = useDispatch();
  const { selectedLesson } = useSelector(({ courseDetail }) => courseDetail);

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

  function onUpload(file) {
    dispatch(uploadLessonDocument(file.file, selectedLesson));
  }

  function saveContentEndpoint(val) {
    dispatch(updateLessonContent({ ...selectedLesson, ...val }));
  }

  return (
    <Card>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <PlayCircleOutlined />
              Upload Videos
            </span>
          }
          key="1"
        >
          <>
            <VAForm name={ADMIN_CONFIG.lesson.name} onFinish={saveContentEndpoint} layout={"horizontal"}>
              {ADMIN_CONFIG.lesson.content.fields.map(field => getFields(field, selectedLesson))}
              <Row>
                <Col offset={20}>
                  <Space>
                    <Form.Item>
                      <Button type="primary" shape="round" htmlType="submit">
                        Save
                      </Button>
                    </Form.Item>
                  </Space>
                </Col>
              </Row>
            </VAForm>
          </>
          {/* <Uploader key={"video_upload"} customRequest={onUpload} onChange={onChange} onDrop={onDrop} {...videoUpload} /> */}
        </TabPane>
        <TabPane
          tab={
            <span>
              <BookOutlined />
              Upload Documents
            </span>
          }
          key="2"
        >
          <FilePrview url={selectedLesson.docURL} />
          <Uploader
            name="file"
            action={environment.uploadlessonDoc.replace(":courseId", selectedLesson.courseId).replace(":sectionId", selectedLesson.sectionId).replace(":lessonId", selectedLesson.id)}
            key={"doc _upload"}
            onChange={onChange}
            onDrop={onDrop}
            {...documentUpload}
          />
        </TabPane>
      </Tabs>
    </Card>
  );
};

export default LessonContent;
