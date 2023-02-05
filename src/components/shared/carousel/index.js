import { Carousel } from "antd";
import CarouselCard from "./card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../../store/effects/course";

const AppCarousel = () => {
  const dispatch = useDispatch();
  const list = useSelector(({ course }) => course.list.slice(0, 5));

  useEffect(() => {
    if (!list.length) {
      dispatch(getAllCourses());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Carousel autoplay>
      {list.map((itm, idx) => (
        <CarouselCard key={`carousel_${idx}`} data={itm} />
      ))}
    </Carousel>
  );
};

export default AppCarousel;
