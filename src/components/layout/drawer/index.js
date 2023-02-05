import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Footer = () => {
  return (
    <div className="va-drawer__footer">
      <h6>
        Copyright © {new Date().getFullYear()} Vibhu Academy, All Rights
        Reserved
      </h6>
    </div>
  );
};

const VADrawer = ({
  title = "Drawer Title",
  width = 800,
  show = false,
  children,
}) => {
  return (
    <Drawer
      title={title}
      closeIcon={<CloseOutlined />}
      onClose={console.log}
      width={width}
      visible={show}
      footer={<Footer />}
    >
      {children}
    </Drawer>
  );
};

export default VADrawer;
