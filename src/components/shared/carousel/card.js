import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { COURSE_DETAIL } from "../../../config";

const CarouselCard = ({ data }) => {
  const history = useHistory();
  return (
    <>
      <div className="carousel__container" style={{ backgroundImage: `url(${data.bannerURL || ''})` , backgroundSize: 'cover'}}>
        <div className="carousel__content">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="carousel__action">
            <Button type="primary" shape="round" onClick={() => history.push(COURSE_DETAIL.path.replace(":id", data.id))}>
              Watch Now
            </Button>
            <Button shape="round" icon={<PlusCircleOutlined />}>
              Add to List
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
