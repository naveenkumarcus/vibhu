import React from "react";
import { Modal } from "antd";

const VAModal = ({title="Modal Title", show = false, width = 750, onCallback, children }) => {

  return (
    <>
      <Modal
        title={title}
        visible={show}
        onOk={onCallback}
        onCancel={onCallback}
        width={width}
        maskClosable={false}
      >
        {children}
      </Modal>
    </>
  );
};

export default VAModal;
