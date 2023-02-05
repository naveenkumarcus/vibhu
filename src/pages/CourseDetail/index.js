import { Button, message, PageHeader, Skeleton, Tooltip } from "antd";
import { useHistory, useParams } from "react-router";
import { FolderAddOutlined, PlayCircleOutlined } from "@ant-design/icons";
import HorizontalList from "../../components/shared/horizantal-list";
import music from "../../assets/img/music.jpg";
import APP_CONSTANTS, { MESSAGES } from "../../config/constants";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../../store/effects/course-detail";
import CourseSections from "./course-sections";
import { COURSE_PLAYER } from "../../config";
import VADivider from "../../components/shared/divider";

const CourseDetail = () => {
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [ isLoading, setLoading] = useState(false);

  const course = useSelector(({ courseDetail }) => courseDetail, shallowEqual);

  const onPlayNow = () => {
    if (course.sections) {
      let _section = course?.sections[0];
      let _lesson = _section?.lessons[0];
      if (_section && _lesson) {
        history.push(COURSE_PLAYER.path.replace(":id", param.id).replace(":sectionId", _section.id).replace(":lessonId", _lesson.id));
      } else {
        message.info(MESSAGES.NO_COURSE_CONTENT);
      }
    } else {
      message.info(MESSAGES.NO_COURSE_CONTENT);
    }
  };
  useEffect(() => {
    if (!course.title) {
      dispatch(getCourseById(param.id));
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if(course.title) setLoading(false);
  }, [course])

  return (
    <>
      <div className="va_coursedetail" style={{ backgroundImage: `url(${course.bannerURL || music})` , backgroundSize: 'cover'}}>
        <div className="va_coursedetail__container">
          {/* <Skeleton active loading={isLoading}> */}
            <PageHeader onBack={() => history.goBack()} title={<h1>{course.title}</h1>} />
            <p>{course.description}</p>
            <div className="va_coursedetail__actions">
              <Tooltip title="Watch Now">
                <PlayCircleOutlined
                  onClick={onPlayNow}
                  style={{
                    fontSize: "3rem",
                    color: APP_CONSTANTS.colorScheme.primaryColor,
                  }}
                />
              </Tooltip>
              <Button type="primary" shape="round" icon={<FolderAddOutlined />}>
                ADD TO WATCHLIST
              </Button>
              {/* <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                  Download
                </Button> */}
            </div>
          {/* </Skeleton> */}
        </div>
      </div>
      <div className="va_coursedetail__detail">
        <CourseSections data={course.sections} />
        <section>
          <VADivider orientation="left">Related Videos</VADivider>
          <HorizontalList key={"list_3"} category="category" />
        </section>
      </div>
    </>
  );
};

export default CourseDetail;
