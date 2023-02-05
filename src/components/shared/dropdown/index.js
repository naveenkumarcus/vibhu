import { Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { LOGOUT_ROUTE, USR_PROFILE } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../../store/effects/user";

const VAUseroptions = () => {
  const profile = useSelector(({ user }) => user.profile);
  const dispatch = useDispatch();
  function handleMenuClick(e) {
    if(e.key === "2"){
      dispatch(logoutAction());
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to={USR_PROFILE.path}>{USR_PROFILE.label}</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={LOGOUT_ROUTE.icon}>
        {LOGOUT_ROUTE.label}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Menu selectedKeys={[11]}>
        <Menu.Item key={11}>
          <UserOutlined />
          {"  "} {profile.name || "User"}
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default VAUseroptions;
