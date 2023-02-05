import React from "react";
import { Divider, List } from "antd";
import LessonDetail from "./lessonDetail";

const LessonList = ({ data = [], showAction = false }) => {
  return (
    <>
      <Divider />
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={item => <LessonDetail data={item} key={data.id} showAction={showAction} />}
      />
    </>
  );
};

export default LessonList;
