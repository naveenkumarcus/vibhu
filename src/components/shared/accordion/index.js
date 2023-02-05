import { Collapse } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import VAList from "../list";

const { Panel } = Collapse;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const PANEL_LIST = [
  {
    title: "Course Section",
    list: data,
  },
  {
    title: "Course Section",
    list: data,
  },
  {
    title: "Course Section",
    list: data,
  },
];

const Accordion = () => {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      {PANEL_LIST.map((panel, idx) => (
        <Panel header={<h3>{panel.title}</h3>} key={idx}>
          <VAList data={panel.list}  itemOnClick={console.log} />
        </Panel>
      ))}
    </Collapse>
  );
};

export default Accordion;
