import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const Uploader = ({ name, multiple, uploadText, uploadHint, ...props}) => {
  return (
    <Dragger name={name} multiple={multiple} {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">{uploadText}</p>
      <p className="ant-upload-hint">{uploadHint}</p>
    </Dragger>
  );
};

export default Uploader;
