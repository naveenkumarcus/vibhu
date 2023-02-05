import AppCarousel from "../../components/shared/carousel";
import Divider from "../../components/shared/divider";
import HorizontalList from "../../components/shared/horizantal-list";
import logo from "../../assets/png/logo.png";

const Moto = ({ text, subText }) => {
  return (
    <div className="va-home-banner-moto">
      <legend>{text}</legend>
      <p>{subText}</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="va-home-banner">
        <div>
          <img src={logo} alt="Vibhu Academy" />
        </div>
        <Moto key={"moto_1"} text={"Nothing is more purifying than wisdom"} subText={"- Bhagavad-Gita"} />
        <Moto key={"moto_2"} text={"ज्ञान से बढ़कर कुछ भी शुद्ध नहीं है"} subText={"- भगवद गीता"} />
      </div>
      <AppCarousel />
      <div className="horizontal-list__container">
        <section>
          <Divider orientation="left">Recent Courses</Divider>
          <HorizontalList key={"list_1"} category="recent" />
        </section>
        <section>
          <Divider orientation="left">Top Picks</Divider>
          <HorizontalList key={"list_2"} category="top" />
        </section>
        <section>
          <Divider orientation="left">Category</Divider>
          <HorizontalList key={"list_3"} category="category" />
        </section>
      </div>
    </>
  );
};

export default Home;
