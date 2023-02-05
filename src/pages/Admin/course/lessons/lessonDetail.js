import React, { useState } from "react";
import { List, Button, Popconfirm } from "antd";
import { PlayCircleOutlined, DeleteOutlined, PlusCircleOutlined, EditOutlined, CloseCircleOutlined, FileProtectOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setSelectedLesson, setSelectedSectionFromKey } from "../../../../store/actions/course-detail";
import { useHistory } from "react-router";
import { AdminRouteEndpoints } from "../../../../config/admin";
import { deleteLesson } from "../../../../store/effects/course-detail";
import { Link } from "react-router-dom";
import { COURSE_PLAYER } from "../../../../config";
import LessonContent from "./lessonContent";

const Attachment = ({ docURL }) =>
  docURL ? (
    <a href={docURL} download>
      <FileProtectOutlined style={{ fontSize: 24, marginLeft: 10 }} />
    </a>
  ) : null;

const VideoContent = ({ data }) =>
  data.contentURL ? (
    <Link to={COURSE_PLAYER.path.replace(":id", data.courseId).replace(":sectionId", data.sectionId).replace(":lessonId", data.id)}>
      <PlayCircleOutlined style={{ fontSize: 24 }} />
    </Link>
  ) : null;

const ButtonIcon = ({ icon, text, onClick }) => (
  <Button onClick={onClick} type="link" icon={React.createElement(icon)}>
    {text}
  </Button>
);

const LessonDetail = ({ data, showAction = false }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showAdd, setShowAdd] = useState(false);

  const updateSelectedSectionAndLesson = () => {
    dispatch(setSelectedSectionFromKey(data.sectionId));
    dispatch(setSelectedLesson(data));
  };

  const addContent = () => {
    updateSelectedSectionAndLesson();
    setShowAdd(flg => !flg);
  };
  const deleteContent = () => {
    dispatch(deleteLesson(data));
  };
  const editLesson = () => {
    updateSelectedSectionAndLesson();
    history.push(AdminRouteEndpoints.ADMIN_EDIT_LESSON_FOR_SECTION.replace(":id", data.courseId).replace(":sectionId", data.sectionId).replace("lessonId", data.id));
  };

  return (
    <>
      <List.Item
        key={data.title}
        actions={
          showAction
            ? [
                <ButtonIcon onClick={addContent} icon={showAdd ? CloseCircleOutlined : PlusCircleOutlined} text={showAdd ? "Hide Content" : "Add Content"} key="list-vertical-star-o" />,
                <ButtonIcon onClick={editLesson} icon={EditOutlined} text="Edit Lesson" key="list-vertical-star-o" />,
                <Popconfirm title="Are you sure to delete this lesson?" onConfirm={deleteContent} okText="Yes" cancelText="No">
                  <Button icon={<DeleteOutlined />} type="link" shape="round">
                    Delete
                  </Button>
                </Popconfirm>,
              ]
            : []
        }
      >
        <List.Item.Meta
          avatar={
            <>
              <VideoContent data={data} />
              <Attachment docURL={data.docURL} />
            </>
          }
          title={<a href={data.href}>{data.title}</a>}
          description={data.about}
        />
      </List.Item>
      {showAdd && <LessonContent toggle={addContent} />}
    </>
  );
};

export default LessonDetail;
