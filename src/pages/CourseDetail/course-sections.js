import { Collapse, Image, Space, Badge, Button, Tag } from "antd";
import React, { useEffect } from "react";
import SectionDetail from "../Admin/course/sections/sectionDetail";
import inprogress from "../../assets/img/brickwall.png";
import VADivider from "../../components/shared/divider";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { enrollASection } from "../../store/effects/order";
import { useHistory, useParams } from "react-router";
import { LOGIN_ROUTE } from "../../config";
import { getCourseById } from "../../store/effects/course-detail";
import useOrderStatus from "../../hooks/useOrderStatus";
import { CheckCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import OrderStatus from "../../components/order-status";
const { Panel } = Collapse;

const NoContent = () => {
  return (
    <div className="va_coursedetail__no_content">
      <Space direction="vertical" align="center">
        <Image width={400} src={inprogress} preview={false} />
        <p>We are in progress of creating the content related to this topic.</p>
      </Space>
    </div>
  );
};

const BadeWrapper = ({ data, children }) => {
  const { checkIfEnrolled } = useOrderStatus();

  return data.isPaid && !checkIfEnrolled(data.id) ? (
    <Badge.Ribbon color="cyan" text="Paid Section">
      {children}
    </Badge.Ribbon>
  ) : (
    children
  );
};

const SectionTitle = ({ title = "", ...props }) => {
  return (
    <BadeWrapper data={props}>
      <Space direction="horizontal" align="baseline">
        <h3>{title}</h3>
      </Space>
    </BadeWrapper>
  );
};

const CourseSections = ({ data = [] }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn, shallowEqual);
  const { id: courseId } = useSelector(({ courseDetail }) => courseDetail, shallowEqual);
  const { checkIfEnrolled } = useOrderStatus();

  const handleEnroll = section => {
    if (isLoggedIn) dispatch(enrollASection(section));
    else history.push(LOGIN_ROUTE.path);
  };

  useEffect(() => {
    if (!courseId) dispatch(getCourseById(id));
  }, [courseId]);

  const getActions = section => {
    console.log(section.isPaid, checkIfEnrolled(section.id));
    return [
    !section.isPaid ? null : <OrderStatus section={section} handleEnroll={handleEnroll} />
  ];
}
  return (
    <section>
      <VADivider orientation="left">Course Details:</VADivider>
      {data.length ? (
        <Collapse bordered={false} defaultActiveKey={[0]}>
          {data.map((sec, idx) => (
            <Panel header={<SectionTitle {...sec} />} key={sec.id}>
              <SectionDetail key={`section_${sec.id}_id`} data={sec} actions={getActions(sec)} />
            </Panel>
          ))}
        </Collapse>
      ) : (
        <NoContent />
      )}
    </section>
  );
};

export default CourseSections;
