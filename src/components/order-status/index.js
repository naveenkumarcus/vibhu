import { ClockCircleFilled } from "@ant-design/icons";
import { Button, Tag } from "antd";
import React from "react";
import useOrderStatus from "../../hooks/useOrderStatus";

const OrderStatus = ({ section = "", handleEnroll }) => {
  const { checkIfEnrolled, checkIfPending } = useOrderStatus();

  if (checkIfEnrolled(section.id)) return <></>;
  else if (checkIfPending(section.id))
    return (
      <Tag icon={<ClockCircleFilled />} color="processing">
        Pending Approval
      </Tag>
    );
  else
    return (
      <Button type="primary" shape="round" onClick={() => handleEnroll(section)}>
        Enroll
      </Button>
    );
};

export default OrderStatus;