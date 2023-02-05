import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { adminRoutes } from "../../config/admin";
const defaultMenu = adminRoutes[0];

const AdminMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const history = useHistory();

  const onMenuClick = (menu) => {
    history.push(menu.path);
  };

  return (
    <div className="va-admin__menu" style={{ width: !collapsed ? 200 : 80 }}>
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        style={{ marginBottom: 16, width: '100%', fontSize: '1.2rem' }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={[defaultMenu.key]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        {adminRoutes.filter(route => route.isMenu).map((menu,idx) => (
          <Menu.Item
            key={`menu_${idx}`}
            icon={menu.icon}
            onClick={() => onMenuClick(menu)}
          >
            {menu.label}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default AdminMenu;
