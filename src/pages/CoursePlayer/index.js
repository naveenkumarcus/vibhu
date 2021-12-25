import { Card, Col, Descriptions, Divider, Skeleton, Row, Tag } from "antd";
import ShakaPlayer2 from "../../components/player/shaka2";
import LessonListforSection from "./lessonListForSection";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourseById } from "../../store/effects/course-detail";
import { setSelectedLesson, setSelectedSectionFromKey } from "../../store/actions/course-detail";
import { useParams } from "react-router-dom";
import SamplePlayer from "../../components/player/sample";
import MediaPlayer from "../../components/media-player";

const CoursePlayer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const courseDetail = useSelector(({ courseDetail }) => courseDetail, shallowEqual);
  const { selectedSection, selectedLesson } = courseDetail;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (!courseDetail?.title) {
      dispatch(getCourseById(param.id));
    }
  }, []);

  useEffect(() => {
    if (courseDetail?.sections?.length) {
      dispatch(setSelectedSectionFromKey(param.sectionId));
    }
  }, [courseDetail.sections, param.sectionId]);

  useEffect(() => {
    if (selectedSection?.title && !selectedLesson?.id) {
      let _selectedSection = selectedSection.lessons.find(les => les.id === param.lessonId);
      dispatch(setSelectedLesson(_selectedSection));
    }
  }, [selectedSection]);

  useEffect(() => {
    if (selectedSection?.title) {
      let _selectedSection = selectedSection.lessons.find(les => les.id === param.lessonId);
      dispatch(setSelectedLesson(_selectedSection));
    }
  }, [param.lessonId]);

  return courseDetail && courseDetail?.title ? (
    <Card>
      <Row>
        <Col  xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 16 }}>
        <MediaPlayer key={selectedLesson.id} src={selectedLesson.contentURL} />
          {/* {selectedLesson && selectedLesson.id && <ShakaPlayer2 key={selectedLesson.id} src={selectedLesson.contentURL} />} */}
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
          <LessonListforSection />
        </Col>
      </Row>
      <Divider />
      <Row style>
        <h1>{courseDetail.title}</h1>
        <Divider />
        <Descriptions title="Course Details" column={1}>
          <Descriptions.Item label="Category">
            <Tag color="orange">{courseDetail.category || "General"}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Instructors">
            {(courseDetail.instructors || "Vibhu Instructors").split(",").map((itm, i) => (
              <Tag key={`instructor_${i}_id`} color="cyan">
                {itm}
              </Tag>
            ))}
          </Descriptions.Item>
          <Descriptions.Item label="Section Description">{selectedSection?.about || ""}</Descriptions.Item>
          <Descriptions.Item label="Course Description">{courseDetail.description}</Descriptions.Item>
        </Descriptions>
        <Divider />
      </Row>
    </Card>
  ) : (
    <Skeleton active avatar paragraph={{ rows: 8 }} />
  );
};

export default CoursePlayer;
