import React, { useEffect, useState } from "react";
import { Button, Card, Collapse, PageHeader, Space, Image } from "antd";
import { useHistory, useParams } from "react-router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCourseById } from "../../../../store/effects/course-detail";
import { addSection } from "../../../../store/actions/course-detail";
import Section from ".";
import { AdminRouteEndpoints } from "../../../../config/admin";
import addSectionImg from "../..//../../assets/svg/addSection.svg";
const { Panel } = Collapse;

const SectionTitle = ({ title = "" }) => {
  return (
    <Space direction="horizontal" align="baseline">
      <h3>{title}</h3>
    </Space>
  );
};

const NoContent = () => {
  return (
    <div className="va_coursedetail__no_content">
      <Space direction="vertical" align="center">
        <Image width={400} src={addSectionImg} preview={false} />
        <p>Please add sections.</p>
      </Space>
    </div>
  );
};

const SectionList = () => {
  const [addSectionFlag, setaddSectionFlag] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const course = useSelector(({ courseDetail }) => courseDetail, shallowEqual);

  const addCourseSection = () => {
    dispatch(addSection());
  };

  useEffect(() => {
    if (course.sections.length === 0) setaddSectionFlag(true);
    else if (course.sections.some(sec => !sec.id)) setaddSectionFlag(false);
    else if (course.sections.every(sec => sec.completeted || sec.id)) setaddSectionFlag(true);
    else setaddSectionFlag(false);
  }, [course.sections]);

  useEffect(() => {
    if (course.title === "") {
      dispatch(getCourseById(id));
    }
  }, [course.title, id, dispatch]);

  return (
    <Card>
      <PageHeader onBack={() => history.push(AdminRouteEndpoints.ADMIN_COURSE_MANAGEMENT)} title={<h1>{course.title}</h1>} />
      <Collapse bordered={false} defaultActiveKey={[0]} accordion>
        {course.sections?.length? 
        (course.sections.map(sec => (
          <Panel header={<SectionTitle {...sec} />} key={sec.id}>
            <Section key={`section_${sec.id}_id`} data={sec} />
          </Panel>
        ))): <NoContent />}
      </Collapse>
      <div className="section-action">
        <Button type="primary" shape="round" disabled={!addSectionFlag} onClick={addCourseSection}>
          Add Section
        </Button>
      </div>
    </Card>
  );
};

export default SectionList;
