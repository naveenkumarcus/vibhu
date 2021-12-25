import { Card } from "antd";
import inpregress from "../../assets/img/brickwall.png";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const MyCourses = () => {
  return (
    <Card>
      <div style={styles}>
        <img src={inpregress} alt="Work in Progress" height="600px" />
        <h1>Work in Progress</h1>
      </div>
      {/* <AllCourses /> */}
    </Card>
  );
};

export default MyCourses;
