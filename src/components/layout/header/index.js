import { useEffect, useState } from "react";
import { Menu } from "antd";
import config, { HOME_ROUTE, LOGOUT_ROUTE } from "../../../config";
import { useHistory } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { resetUserProfile } from "../../../store/actions/user";
import { resetRoutes, setConfigObj } from "../../../store/actions/app";
import VAUseroptions from "../../shared/dropdown";
import logo from "../../../assets/png/logo.png";

const { header } = config;

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [current, setCurrent] = useState(HOME_ROUTE.key);

  const [routes, isLoggedIn] = useSelector(({ app, user }) => [app.routes.filter(rt => rt.isMenu), user.isLoggedIn], shallowEqual);

  useEffect(() => {
    dispatch(setConfigObj({ history }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menuClick = mn => {
    if (mn.key === LOGOUT_ROUTE.key) {
      dispatch(resetUserProfile());
      dispatch(resetRoutes());
    }
    history.push(mn.path);
  };

  return (
    <header id="header" className="flex-evenly">
      <div>
        {/* <h1>{header.logo}</h1> */}
        <img src={logo} alt="Vibhu Academy" height={100} />
      </div>
      <div className="va-header__menu">
        <Menu onClick={e => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
          {routes.map((mn, idx) => (
            <Menu.Item key={`${mn.key}_${idx}_id`} icon={mn.icon} onClick={() => menuClick(mn)}>
              <span>{mn.label}</span>
            </Menu.Item>
          ))}
        </Menu>
        {isLoggedIn && <VAUseroptions />}
      </div>
    </header>
  );
};

export default Header;
