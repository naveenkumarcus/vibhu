import { Divider } from "antd";
import APP_CONSTANTS from "../../../config/constants";

const VADivider = ({ orientation = "left", label = "", children="" }) => (
  <Divider style={{borderTopColor: APP_CONSTANTS.colorScheme.primaryColor}} orientation={orientation}>{label || children}</Divider>
);

export default VADivider;