import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, PageHeader, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import VASearch from "../../../components/shared/search";
import VATable from "../../../components/shared/table";
import { AdminRouteEndpoints, ADMIN_CONFIG } from "../../../config/admin";
import { getAllCourses, getCourseById, searchCourses } from "../../../store/effects/course";
import { getNextSetCourses } from "../../../store/effects/course";
import { resetCourseDetail } from "../../../store/actions/course-detail";
import environment, { redirects } from "../../../environment";
import InfinitePageScroll from "../../../components/shared/infinite-scroll";

const CourseManagement = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [hasMore, setHasMore] = useState(true);
  const { list, LastEvaluatedKey } = useSelector(({ course }) => course);

  const getCoursesAction = (id, record) => {
    const onAddSection = () => {
      history.push(redirects[environment.courseById].replace(":id", id));
    };

    const onEdit = () => {
      dispatch(getCourseById(id));
    };

    return (
      <Space size="middle">
        <Button onClick={onAddSection} icon={<PlusCircleOutlined />} type="primary" shape="round">
          Add Sections
        </Button>
        <Button onClick={onEdit} icon={<EditOutlined />} type="primary" shape="round" />
      </Space>
    );
  };

  const onCreate = () => history.push(`${AdminRouteEndpoints.COURSE_CREATE}`);
  const onSearch = payload => {
    dispatch(searchCourses(payload));
  };

  const actions = [
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: getCoursesAction,
    },
  ];

  useEffect(() => {
    if (!list.length) {
      refresAllCourses();
    }
    return function () {
      dispatch(resetCourseDetail());
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresAllCourses = () => dispatch(getAllCourses());

  const loadAllCourses = () => dispatch(getNextSetCourses());

  useEffect(() => {
    if (!LastEvaluatedKey) setHasMore(false);
    else setHasMore(true);
  }, [LastEvaluatedKey]);

  return (
    <InfinitePageScroll items={list} next={loadAllCourses} hasMore={hasMore}>
      <div>
        <PageHeader title={<h2>{ADMIN_CONFIG.course.title}</h2>} />
      </div>
      <div className="course-management__action">
        <VASearch placeholder="Search by course name" onSearch={onSearch} loadAll={refresAllCourses} />
        <Button icon={<PlusCircleOutlined />} type="primary" shape="round" onClick={onCreate} label="Create">
          Create
        </Button>
      </div>
      <VATable columns={ADMIN_CONFIG.course.columns} actions={actions} data={list} rowKey="id" />
    </InfinitePageScroll>
  );
};

export default CourseManagement;
