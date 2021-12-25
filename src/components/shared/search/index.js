import { Form, Input, Button } from "antd";
import { useRef } from "react";

const VASearch = ({ name, placeholder, onSearch, loadAll }) => {
  const ref = useRef(null);
  const onFinish = (values) => {
    console.log("values:", values);
    onSearch(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onValuesChange = (fld) => {
    if (fld.filter === "") {
      loadAll();
    }
  };

  return (
    <Form
      className="search-form-field"
      name={name}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
    >
      <Form.Item name="filter">
        <Input placeholder={placeholder} ref={ref} allowClear />
      </Form.Item>
      <Form.Item>
        <Button shape="round" type="primary" htmlType="submit">
          Search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VASearch;
