import { Table } from "antd";

const VATable = ({ columns = [], actions = [], data = [], ...props }) => {
  return (
    <>
      <Table
        columns={[...columns, ...actions]}
        dataSource={data}
        pagination={false}
        {...props}
      />
    </>
  );
};

export default VATable;
