import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Collapse, Form, Button, Table, Card } from "antd";
import APP_CONSTANTS from "../../config/constants";
import Avatar from "antd/lib/avatar/avatar";
import { CaretRightOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import VADivider from "../../components/shared/divider";
import { ADMIN_CONFIG } from "../../config/admin";
import getFields from "../../components/shared/fields";
import Title from "../../components/shared/title";
import { getUserOrders } from "../../store/effects/order";
import { Link } from "react-router-dom";
import { COURSE_DETAIL } from "../../config";
import StatusTag from "../../components/shared/status";
const { Panel } = Collapse;

const columns = [
  {
    title: "Order Id",
    dataIndex: "orderId",
    key: "orderId",
  },
  {
    title: "Course Title",
    dataIndex: "courseTitle",
    key: "courseTitle",
    render: (text, data) => <Link to={COURSE_DETAIL.path.replace(":id", data.courseId)}>{text}</Link>,
  },
  {
    title: "Section Title",
    dataIndex: "sectionTitle",
    key: "sectionTitle",
    render: (text, data) => <Link to={COURSE_DETAIL.path.replace(":id", data.courseId)}>{text}</Link>,
  },
  {
    title: "Status",
    dataIndex: "orderStatus",
    key: "orderStatus",
    render: text => <StatusTag status={text} />,
  },
  {
    title: "Ordered By",
    dataIndex: "orderedBy",
    key: "orderedBy",
  },
  {
    title: "Ordered On",
    dataIndex: "createdOn",
    key: "createdOn",
  },
];

const Profile = () => {
  const user = useSelector(({ user }) => user, shallowEqual);
  const { profile, orders } = user;
  const dispatch = useDispatch();
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    dispatch(getUserOrders());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card>
      <Title>PROFILE</Title>
      <VADivider />
      <div className="va-profile--card">
        <div>
          <Avatar size={150}>
            <h1>
              {(profile.name || "")
                .split(" ")
                .map(wrd => wrd[0])
                .join("")}
            </h1>
          </Avatar>
        </div>
        <div className="va-profile--card__content">
          <h1>{profile.name}</h1>
          <p style={{ color: APP_CONSTANTS.colorScheme.primaryColor }}>
            <MailOutlined /> {profile.email}
          </p>
          <p>
            <PhoneOutlined /> {profile.phone || " - "}
          </p>
        </div>
        <div className="va-profile--card__password">
          <Collapse bordered={false} defaultActiveKey={["1"]} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />} className="site-collapse-custom-collapse">
            <Panel header={<h3>CHANGE PASSWORD</h3>} key="1">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                {ADMIN_CONFIG.profile.fields.map(field => getFields(field))}
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Panel>
          </Collapse>
        </div>
      </div>
      <Title>MY Orders</Title>
      <VADivider />
      <Table
        columns={columns}
        dataSource={orders.list}
        locale={{
          emptyText: "No courses found",
        }}
      />
    </Card>
  );
};

export default Profile;
