import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

const list = [
  { name: "item1" },
  { name: "item2" },
  { name: "item3" },
  { name: "item4" },
  { name: "item5" },
  { name: "item6" },
  { name: "item7" },
  { name: "item8" },
  { name: "item9" },
];

const Item = (props) => {
  return (
    <div className="horizontal-card">
      <div className="horizontal-card__content">
        <h3>title - {props.name}</h3>
      </div>
    </div>
  );
};

export const getMenuItems = (category, list, selected) => {
    return list.map((el, idx) => <Item key={`${category}_${idx}_id`} {...el} />);
}
const HorizontalList = ({category}) => {
  const menuItems = getMenuItems(category, list, "item1");
  const [selected, setSelected] = useState("item1");

  const onSelect = (key) => {
    setSelected(key);
  };

  return (
    <div className="App">
      <ScrollMenu
        data={menuItems}
        arrowLeft={<CaretLeftOutlined />}
        arrowRight={<CaretRightOutlined />}
        selected={selected}
        onSelect={onSelect}
      />
    </div>
  );
};

export default HorizontalList;
