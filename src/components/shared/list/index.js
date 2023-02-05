import { List } from "antd";

const getRenderItem = (item, itemOnClick) => {
  return <List.Item onClick={itemOnClick}>{item}</List.Item>;
};

const VAList = ({ data = [], renderItemComponent, itemOnClick }) => {
  return (
    <List
      bordered
      dataSource={data}
      renderItem={
        renderItemComponent
          ? renderItemComponent
          : (item) => getRenderItem(item, itemOnClick)
      }
    ></List>
  );
};

export default VAList;
