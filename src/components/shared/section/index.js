import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const Section = ({ children }) => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      children
    </Collapse>
  );
};
