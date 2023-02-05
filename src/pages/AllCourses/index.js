import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import VACard from "../../components/shared/card";
import InfinitePageScroll from "../../components/shared/infinite-scroll";
import VASearch from "../../components/shared/search";
import { COURSE_DETAIL } from "../../config";
import { resetCourseDetail } from "../../store/actions/course-detail";
import { getAllCourses, getNextSetCourses, searchCourses } from "../../store/effects/course";

const AllCourses = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);

  const [courses, setCourses] = useState([]);
  const { list, LastEvaluatedKey } = useSelector(({ course }) => course);

  const showCourseDetail = itm => {
    history.push(COURSE_DETAIL.path.replace(":id", itm.id));
  };

  useEffect(() => {
    setCourses(list);
  }, [list]);

  useEffect(() => {
    if (!list.length) {
      refresAllCourses()
      setCourses(new Array(10).fill({ loading: true }));
    }
    dispatch(resetCourseDetail());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearch = payload => {
    dispatch(searchCourses(payload));
  };
  const loadAllCourses = () => dispatch(getNextSetCourses());
  const refresAllCourses = () => dispatch(getAllCourses());

  useEffect(() => {
    if (!LastEvaluatedKey) setHasMore(false);
    else setHasMore(true);
  }, [LastEvaluatedKey]);

  return (
    <InfinitePageScroll items={list} next={loadAllCourses} hasMore={hasMore}>
      <div className="va_courses">
        <VASearch placeholder="Search for Courses..." onSearch={onSearch} loadAll={refresAllCourses} />
        <section className="va_courses__container">
          {courses.map((itm, idx) => (
            <article key={"category_card_" + idx}>
              <VACard
                data={itm}
                loading={itm.loading}
                onClick={() => showCourseDetail(itm)}
                // actions={[
                //   <Tooltip title="Add to wishlist">
                //     <HeartOutlined />
                //   </Tooltip>,
                //   <Tooltip title="Checkout">
                //     <ShoppingCartOutlined />
                //   </Tooltip>,
                //   <Tooltip title="View Detail">
                //     <MoreOutlined />
                //   </Tooltip>,
                // ]}
              />
            </article>
          ))}
        </section>
      </div>
    </InfinitePageScroll>
  );
};

export default AllCourses;
