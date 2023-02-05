import { FIELD_CONSTANTS } from "../../../config/constants";
import { Col, Form, Input, Select, Row, DatePicker } from "antd";
import Uploader from "../uploader";
const { Option } = Select;

const DisplayField = ({ label, value }) => {
  return (
    <div className="va-displayfield">
      <b className="va-displayfield__key">{label}</b>
      <span className="va-displayfield__value">{value}</span>
    </div>
  );
};

export default function getFields(field, object = {}, isDisplay = false) {
  if (isDisplay) {
    return <DisplayField key={field.name} label={field.label} value={object[field.name]} />;
  }
  switch (field.type) {
    case FIELD_CONSTANTS.ROW:
      return (
        <Row gutter={24}>
          {field.fields.map((fld, idx) => (
            <Col key={"col_" + idx} span={24 / field.fields.length}>
              {getFields(fld, object)}
            </Col>
          ))}
        </Row>
      );
    case FIELD_CONSTANTS.SELECT:
      return (
        <Form.Item initialValue={object[field.name]} key={field.name} colon={true} name={field.name} rules={field.rules}>
          <Select prefix={field.prefix} placeholder={field.placeholder} allowClear>
            {(field.options || []).map((opt, idx) => (
              <Option key={`name_opts_${idx}`} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    case FIELD_CONSTANTS.INPUT:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]} hasFeedback>
          <Input size="large" prefix={field.prefix} placeholder={field.placeholder} />
        </Form.Item>
      );
    case FIELD_CONSTANTS.DATE:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]} hasFeedback>
          <DatePicker style={{ width: "100%" }} size="large" prefix={field.prefix} placeholder={field.placeholder} />
        </Form.Item>
      );

    case FIELD_CONSTANTS.CONFIRM_PASSWORD:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} dependencies={field.dependencies} rules={field.rules} initialValue={object[field.name]} hasFeedback>
          <Input size="large" type={FIELD_CONSTANTS.PASSWORD} prefix={field.prefix} placeholder={field.placeholder} />
        </Form.Item>
      );
    case FIELD_CONSTANTS.PASSWORD:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]} hasFeedback>
          <Input size="large" type={FIELD_CONSTANTS.PASSWORD} prefix={field.prefix} placeholder={field.placeholder} initialValue={object[field.name]} />
        </Form.Item>
      );
    case FIELD_CONSTANTS.TEXTAREA:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]}>
          <Input.TextArea prefix={field.prefix} rows={field.row || 6} placeholder={field.placeholder} />
        </Form.Item>
      );
    case FIELD_CONSTANTS.UPLOAD:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]}>
          <Uploader {...field} />
        </Form.Item>
      );
    default:
      return (
        <Form.Item key={`${field.name}_id`} colon={true} name={field.name} tooltip={field.tooltip} rules={field.rules} initialValue={object[field.name]}>
          <Input size="large" prefix={field.prefix} placeholder={field.placeholder} />
        </Form.Item>
      );
  }
}
