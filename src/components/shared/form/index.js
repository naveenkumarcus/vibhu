import { Form }from "antd";

const VAForm = ({ name="form", children, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form
      id={`${name}Id`}
      form={form}
      name={name}
      layout={props.layout || "vertical"}
      scrollToFirstError
      {...props}
    >
      <>{children}</>
    </Form>
  );
};

export default VAForm;
