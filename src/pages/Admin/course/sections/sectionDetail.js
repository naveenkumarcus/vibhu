import React from "react";
import { Card, List } from "antd";
import { BookOutlined } from "@ant-design/icons";
import LessonList from "../lessons/lessonList";

const SectionDetail = ({ data, toggleEdit, actions = [], showAction=false }) => {
  return (
    <Card>
      <List.Item
        title={data.title}
        actions={actions}
      >
        <List.Item.Meta avatar={<BookOutlined style={{ fontSize: 30 }} />} title={data.title} description={data.about} />
      </List.Item>
      <LessonList data={data.lessons} showAction={showAction} />
    </Card>
  );
};

export default SectionDetail;
