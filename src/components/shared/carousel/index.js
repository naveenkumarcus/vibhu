import { Carousel } from "antd";
import CarouselCard from "./card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { COURSE_DETAIL } from "../../../config";
import { getAllCourses } from "../../../store/effects/course";

const ary = [
  {
    title: "Arthashastra",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro modi amet optio illo culpa ratione sint ullam, incidunt ex voluptatum dicta officiis quam, quasi tempore, tenetur non ipsam facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestias, quaerat soluta unde nemo alias explicabo odio doloribus culpa illum veritatis. Veritatis in autem quibusdam eveniet veniam. Earum, quasi vitae.",
  },
  {
    title: "Natyashastra",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro modi amet optio illo culpa ratione sint ullam, incidunt ex voluptatum dicta officiis quam, quasi tempore, tenetur non ipsam facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestias, quaerat soluta unde nemo alias explicabo odio doloribus culpa illum veritatis. Veritatis in autem quibusdam eveniet veniam. Earum, quasi vitae.",
  },
  {
    title: "Sanskrt study through popular Kavyas",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro modi amet optio illo culpa ratione sint ullam, incidunt ex voluptatum dicta officiis quam, quasi tempore, tenetur non ipsam facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestias, quaerat soluta unde nemo alias explicabo odio doloribus culpa illum veritatis. Veritatis in autem quibusdam eveniet veniam. Earum, quasi vitae.",
  },
  {
    title: "Agama shastras",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed porro modi amet optio illo culpa ratione sint ullam, incidunt ex voluptatum dicta officiis quam, quasi tempore, tenetur non ipsam facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum molestias, quaerat soluta unde nemo alias explicabo odio doloribus culpa illum veritatis. Veritatis in autem quibusdam eveniet veniam. Earum, quasi vitae.",
  },
];

const AppCarousel = () => {
  const dispatch = useDispatch();
  const list = useSelector(({ course }) => course.list.slice(0, 5));

  useEffect(() => {
    if (!list.length) {
      dispatch(getAllCourses());
    }
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
