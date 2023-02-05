import { Table } from "antd";
import { useState } from "react";
import VAList from "../list";
import VAModal from "../modal";

const VATable = ({ columns = [], data = [] }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [show, setShow] = useState(false);

  const onRowClick = (rec, idx) => {};

  const rowSelection = {
    selectedRowKeys,
    onChange: setSelectedRowKeys,
  };
  return (
    <>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        onRow={onRowClick}
      />
      <VAModal show={show}>
      </VAModal>
    </>
  );
};

export default VATable;
