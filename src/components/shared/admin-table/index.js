import { Button, List, Table } from "antd";
import { useState } from "react";
import VAList from "../list";
import VAModal from "../modal";

const getEnrollmentItem = (item) => {
  return (
    <List.Item
      actions={[
        <Button onClick={console.log} type="link">
          Approve
        </Button>,
        <Button onClick={console.log} type="link">
          Deny
        </Button>,
      ]}
    >
      {item}
    </List.Item>
  );
};

const AdminTable = ({ columns = [], data = [] }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedUser, setselectedUser] = useState({ enrollmentRequest: [] });
  const [show, setShow] = useState(false);

  const onRowClick = (rec, idx) => ({
    onClick: (e) => {
      if (e.target.innerText === "Deny") {
        setselectedUser(rec);
        setShow(true);
      }
    },
  });

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
      <VAModal
        title="Enrollment Review"
        show={show}
        onCallback={() => setShow(false)}
      >
        {show && (
          <VAList
            data={selectedUser.enrollmentRequest}
            renderItemComponent={getEnrollmentItem}
            itemOnClick={console.log}
          />
        )}
      </VAModal>
    </>
  );
};

export default AdminTable;
