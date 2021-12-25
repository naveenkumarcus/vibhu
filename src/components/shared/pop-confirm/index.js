import { Popconfirm } from "antd";

const VAPopConfirm = ({onConfirm=console.log, onCancel=console.log, children, title, okText="Yes", cancelText="No"}) => {
  return (
    <Popconfirm
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
    {children}
    </Popconfirm>
  );
};

export default VAPopConfirm;
