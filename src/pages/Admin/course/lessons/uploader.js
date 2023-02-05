import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import environment from "../../../../environment";

const Uploader2 = ({ selectedLesson }) => {
  const { courseId, sectionId, id } = selectedLesson;
  const props = {
    name: "file",
    action: environment.uploadlessonDoc.replace(":courseId", courseId).replace(":sectionId", sectionId).replace(":lessonId", id),
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: percent => `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};
export default Uploader2;
