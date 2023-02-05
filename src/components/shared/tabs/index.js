import { Tabs } from "antd";

const { TabPane } = Tabs;

const VATabs = ({tabList = [], ...props}) => {
  return (
    <div className="card-container">
      <Tabs type="card">
        {tabList.map((tab, idx) => (
          <TabPane tab={tab.title} key={idx}>
            {tab.children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default VATabs;
