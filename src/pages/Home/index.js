import AppCarousel from "../../components/shared/carousel";
import Divider from "../../components/shared/divider";
import HorizontalList from "../../components/shared/horizantal-list";

const Home = () => {

  return (
    <>
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
