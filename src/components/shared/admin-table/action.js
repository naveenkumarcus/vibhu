import { Button, Space, message } from "antd";
import VAPopConfirm from "../pop-confirm";

const getAdminActions = (text, record) => {
  function confirm(e) {
    message.success("Click on Yes");
  }

  function cancel(e) {
    message.error("Click on No");
  }

  return (
    <Space size="middle">
      <VAPopConfirm
        title="Are you sure Deny the request ?"
        onConfirm={confirm}
        onCancel={cancel}
      >
        <Button type="link  ">Deny</Button>
      </VAPopConfirm>
      <Button type="primary" shape="round">
        Review
      </Button>
    </Space>
  );
};

export default getAdminActions;
