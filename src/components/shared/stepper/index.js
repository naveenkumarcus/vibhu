import { Steps } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

const Stepper = () => {
  return (
    <Steps>
      <Step status="finish" title="Login" icon={<UserOutlined />} />
      <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
      <Step status="process" title="Pay" icon={<LoadingOutlined />} />
      <Step status="wait" title="Done" icon={<SmileOutlined />} />
    </Steps>
  );
};

export default Stepper;
