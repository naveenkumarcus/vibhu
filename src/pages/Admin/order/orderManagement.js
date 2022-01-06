import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import OrderDetail from "../../../components/order-detail";
import VATable from "../../../components/shared/table";
import { CloseCircleOutlined, CheckCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, PageHeader, Popconfirm, Space, Tabs, Tooltip } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import VASearch from "../../../components/shared/search";
import { ADMIN_CONFIG } from "../../../config/admin";
import { approveOrder, getAllOrders, getNextSetOrders, rejectOrder } from "../../../store/effects/order";
import { resetApprovedOrders, resetDeniedOrders, resetPendigOrders } from "../../../store/actions/order";
const { TabPane } = Tabs;

const OrderList = ({ data }) => {
  const [showDetail, setshowDetail] = useState(false);
  const dispatch = useDispatch();
  const { list, LastEvaluatedKey } = useSelector(({ order }) => order[data.key], shallowEqual);

  const onSearch = payload => {
    console.log(payload);
  };

  const actions = [
    {
      title: "Action",
      key: "action",
      render: (text, data) => <Actions data={data} />,
    },
  ];

  const refresAllOrder = () => dispatch(getAllOrders(data.key, data.actions.list));
  const loadAllOrder = () => dispatch(getNextSetOrders(data.key, data.actions.nextList));
  
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadAllOrder}
      hasMore={LastEvaluatedKey ? true : false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <div className="course-management__action">
        <VASearch
          placeholder="Search Users"
          onSearch={onSearch}
          loadAll={refresAllOrder}
        />
        <Tooltip placement="right" title={"Refresh"}>
          <Button icon={<ReloadOutlined />} type="primary" shape="round" onClick={refresAllOrder} />
        </Tooltip>
      </div>
      <VATable key={data.key} columns={ADMIN_CONFIG.order.columns} actions={actions} data={list} rowKey="orderId" />
      <OrderDetail show={showDetail} onCallback={() => setshowDetail(!showDetail)} />
    </InfiniteScroll>
  );
};

const Actions = ({data}) => {
  const dispatch = useDispatch();

  const onApprove = () => dispatch(approveOrder(data));
  const onReject = () => dispatch(rejectOrder(data));

  return (
    <Space size="middle">
      <Tooltip placement="bottomLeft" title={"Approve"}>
        <Button color="green" onClick={onApprove} icon={<CheckCircleOutlined />} type="primary" shape="round" />
      </Tooltip>
      <Popconfirm title="Are you sure to deny this order?" onConfirm={onReject} okText="Yes" cancelText="No">
        <Tooltip placement="bottomLeft" title={"Deny"}>
          <Button icon={<CloseCircleOutlined />} type="primary" shape="round" danger />
        </Tooltip>
      </Popconfirm>
    </Space>
  );
};

const OrderManagement = () => {
  const dispatch = useDispatch();
  const order = useSelector(({ order }) => order, shallowEqual);

  const onChange = (key) => {
    const _tab = ADMIN_CONFIG.order.tabs[key]; 
    if(!order[_tab.key].list.length) dispatch(getAllOrders(_tab.key, _tab.actions.list));
  }

  useEffect(() => {
    onChange(0);
    return () => {
      dispatch(resetApprovedOrders());
      dispatch(resetPendigOrders());
      dispatch(resetDeniedOrders());
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div>
        <PageHeader title={<h2>{ADMIN_CONFIG.order.title}</h2>} />
      </div>
      <div style={{ marginBottom: 32 }}>
        <Tabs defaultActiveKey="0" type="card" onChange={onChange}>
          {ADMIN_CONFIG.order.tabs.map((tab, idx) => (
            <TabPane tab={tab.label} key={idx}>
              <OrderList data={tab} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default OrderManagement;
