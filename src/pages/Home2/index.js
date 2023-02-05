import { Carousel, Button } from "antd";
import React from 'react';
import { CourseTitleCard } from "./CourseTitleCard";
import styledComponents from "styled-components";
import Statistics from "./Statistics";
import { Footer } from "antd/lib/layout/layout";
import { CopyrightCircleFilled } from "@ant-design/icons";
import bookImg from '../../assets/new/book.png';
import hinduImg from '../../assets/new/hindu.png';
import suryaImg from '../../assets/new/surya.png';
import swastikaImg from '../../assets/new/swastika.png';
const TitleContainer = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const courseary = [
  {
    title: "Course 1",
    description: `orem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`,
  },
  {
    title: 'Course 2',
    description: `orem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
  },
  {
    title: 'Course 3',
    description: `orem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
  },
  {
    title: 'Course 4',
    description: `lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`
  }
];

const titleList = [
  {
    title: 'Vedanta',
    titleHindi: 'वेदान्त',
    icon: hinduImg
  },
  {
    title: 'Bhagavad-Gita',
    titleHindi: 'भागवद गीता',
    icon: bookImg
  },
  {
    title: 'Sanaatana Dharma',
    titleHindi: 'सनातन धर्',
    icon: suryaImg
  },
  {
    title: 'Bala Samskrita',
    titleHindi: 'सही संस्कृत',
    icon: swastikaImg
  },
]
const CarouselCard = ({ data }) => {
  return (
    <>
      <div
        className="carousel__container"
        style={{
          backgroundImage: `url(${data.bannerURL || ""})`,
          backgroundSize: "cover",
          background: 'linear-gradient(to right, #F37335, #FDC830)'
        }}
      >
        <div className="carousel__content">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div
            className="carousel__action"
            style={{ justifyContent: "center" }}
          >
            <Button
              type="primary"
              shape="round"
              style={{
                justifyContent: "center",
                color: "#F39226",
                fontWeight: 800,
                backgroundColor: "#ffdf6b",
              }}
            >
              Know more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
const Home2 = () => {
  return (
    <>
      <Carousel autoplay>
        {courseary.map((course) => (
          <CarouselCard data={course} />
        ))}
      </Carousel>
      <TitleContainer>
      {titleList.map((titleData) => (
          <CourseTitleCard data={titleData} />
        ))}
      </TitleContainer>
      <div>
        <Statistics />
      </div>
      <Footer style={{ height: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div><CopyrightCircleFilled /> vibhuacademy@vibhu.com</div>
        <div>v1.1.0 - {new Date().getFullYear()}</div>
      </Footer>
    </>
  );
};

export default Home2;
