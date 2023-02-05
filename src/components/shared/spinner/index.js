import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import APP_CONSTANTS from "../../../config/constants";
import { useSelector } from "react-redux";

const Spinner = () => {
  const show = useSelector(({ app }) => app.spinner);
  return show ? (
    <Loader
      style={{
        position: "fixed",
        zIndex: "1000000000000000000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100vw",
        background: "rgb(0 0 0 / 30%)",
      }}
      type="RevolvingDot"
      color={APP_CONSTANTS.colorScheme.primaryColor}
      height={100}
      width={100}
    />
  ) : null;
};
export default Spinner;
