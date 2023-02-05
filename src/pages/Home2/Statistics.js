import React from "react";
import {
  PlusOutlined,
  ThunderboltOutlined,
  UserAddOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";

const statistics = [
  {
    title: "Unique Courses",
    value: 100,
    prefix: <ThunderboltOutlined />,
    suffix: <PlusOutlined />,
  },
  {
    title: "Enrollment",
    value: 100,
    prefix: <UserAddOutlined />,
    suffix: <PlusOutlined />,
  },
  {
    title: "Hours of Videos",
    value: 100,
    prefix: <VideoCameraAddOutlined />,
    suffix: <PlusOutlined />,
  },
];

const Statistics = () => (
  <div style={{ marginTop: "4rem" }}>
    <Row gutter={24}>
      {statistics.map((stats) => (
        <Col span={24 / statistics.length}>
          <Card
            bordered={false}
            style={{ margin: "0.5rem", borderRadius: "0.5rem" }}
          >
            <Statistic
              {...stats}
              valueStyle={{ color: "#F37335", fontWeight: "bolder" }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Statistics;
