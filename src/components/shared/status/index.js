import React from "react";
import { Tag } from "antd";
import { ORDER_STATUS } from "../../../config/admin";

const StatusTag = ({ status }) => {
  switch (status) {
    case ORDER_STATUS.ORDER_PENDING:
      return <Tag color="blue">{status}</Tag>;
    case ORDER_STATUS.ORDER_DENIED:
      return <Tag color="red">{status}</Tag>;
    case ORDER_STATUS.ORDER_APPROVED:
      return <Tag color="green">{status}</Tag>;
    default:
      return <Tag>{status}</Tag>;
  }
};
export default StatusTag;
