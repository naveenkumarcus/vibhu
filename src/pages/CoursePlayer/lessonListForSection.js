import { List, PageHeader, Skeleton } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { shallowEqual, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { COURSE_PLAYER } from "../../config";
import { useHistory } from "react-router-dom";

const LessonListforSection = () => {
  const courseDetail = useSelector(({ courseDetail }) => courseDetail, shallowEqual);
  const { selectedSection, selectedLesson } = courseDetail;
  const history = useHistory();
  return selectedSection && selectedSection.title ? (
    <div style={{ paddingLeft: 20 }}>
      <List
        header={<PageHeader onBack={() => history.goBack()} title={<h2>{selectedSection.title || ""}</h2>} />}
        itemLayout="horizontal"
        size="large"
        dataSource={selectedSection.lessons || []}
        renderItem={item => (
          <List.Item actions={["10.50"]}>
            <List.Item.Meta
              avatar={<PlayCircleOutlined style={{ fontSize: 24 }} />}
              title={
                item.contentURL !== "" ? (
                  <Link to={COURSE_PLAYER.path.replace(":id", item.courseId).replace(":sectionId", item.sectionId).replace(":lessonId", item.id)}>
                    <span className={item.id === selectedLesson.id ? "va-courseplayer__active" : ""}>{item.title}</span>
                  </Link>
                ) : null
              }
            />
          </List.Item>
        )}
      />
    </div>
  ) : (
    <Skeleton active paragraph={{ rows: 8 }} />
  );
};

export default LessonListforSection;
