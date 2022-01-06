import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, PageHeader, Popconfirm, Space } from "antd";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import InfiniteScroll from "react-infinite-scroller";
import VASearch from "../../../components/shared/search";
import VATable from "../../../components/shared/table";
import { AdminRouteEndpoints, ADMIN_CONFIG } from "../../../config/admin";
import { getAllUsers, getNextSetUsers, searchUsers } from "../../../store/effects/admin";
import { setSelectedUser } from "../../../store/actions/admin";
import { deleteUser } from "../../../store/effects/user";

const UserManagement = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { list, LastEvaluatedKey } = useSelector(({ admin }) => admin.users, shallowEqual);

  const getCoursesAction = (text, record) => {
    const onEditClick = () => {
      history.push(AdminRouteEndpoints.ADMIN_USER_MANAGEMENT_EDIT.replace(":id", record.id));
      dispatch(setSelectedUser(record));
    };

    function confirm(e) {
      dispatch(deleteUser(record));
    }

    return (
      <Space size="middle">
        <Button onClick={onEditClick} icon={<EditOutlined />} type="primary" shape="round">
          Edit
        </Button>
        <Popconfirm title="Are you sure to delete this user?" onConfirm={confirm} okText="Yes" cancelText="No">
          <Button icon={<DeleteOutlined />} type="primary" shape="round">
            Delete
          </Button>
        </Popconfirm>
      </Space>
    );
  };

  const onCreate = () => history.push(AdminRouteEndpoints.USER_CREATE);

  const onSearch = payload => {
    dispatch(searchUsers(payload));
  };

  const actions = [
    {
      title: "Action",
      key: "action",
      render: getCoursesAction,
    },
  ];

  useEffect(() => {
    if (!list.length) {
      refresAllUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const refresAllUsers = () => dispatch(getAllUsers());
  const loadAllUsers = () => dispatch(getNextSetUsers());

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadAllUsers}
      hasMore={LastEvaluatedKey ? true : false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <div>
        <PageHeader title={<h2>{ADMIN_CONFIG.user.title}</h2>} />
      </div>
      <div className="course-management__action">
        <VASearch placeholder="Search Users" onSearch={onSearch} loadAll={refresAllUsers} />
        <Button icon={<PlusCircleOutlined />} type="primary" shape="round" onClick={onCreate} label="Create">
          Create
        </Button>
      </div>
      <VATable columns={ADMIN_CONFIG.user.columns} actions={actions} data={list} rowKey="id" />
    </InfiniteScroll>
  );
};

export default UserManagement;
