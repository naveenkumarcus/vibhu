import {
  RESET_APPROVED_ORDERS,
  RESET_DENIED_ORDERS,
  RESET_PENDING_ORDERS,
  SET_APPROVED_ORDERS,
  SET_APPROVED_ORDERS_FILTER,
  SET_DENIED_ORDERS,
  SET_DENIED_ORDERS_FILTER,
  SET_NEXT_APPROVED_ORDERS,
  SET_NEXT_DENIED_ORDERS,
  SET_NEXT_PENDING_ORDERS,
  SET_PENDING_ORDERS,
  SET_PENDING_ORDERS_FILTER,
} from "../../actions/order";

const orderInitState = {
  pending: {
    list: [],
    Limit: 20,
    orderStatus: "ORDER_PENDING",
    LastEvaluatedKey: null,
    filter: null,
  },
  approved: {
    list: [],
    Limit: 20,
    orderStatus: "ORDER_APPROVED",
    LastEvaluatedKey: null,
    filter: null,
  },
  denied: {
    list: [],
    Limit: 20,
    orderStatus: "ORDER_DENIED",
    LastEvaluatedKey: null,
    filter: null,
  },
  selectedOrder: {
    id: "",
    title: "",
    description: "",
    createdOn: "",
    updatedOn: "",
  },
};

//Pending Orders
const updatePendingOrders = (state, payload) => {
  const { pending } = state;
  const { list, LastEvaluatedKey } = payload;
  const _pending = { ...pending, ...{ list, LastEvaluatedKey } };
  return { ...state, ...{ pending: _pending } };
};

const updateNextPendingOrders = (state, payload) => {
  const { pending } = state;
  const { list, LastEvaluatedKey } = payload;
  const _pendingList = [...pending.list, ...list];
  let _pending = { list: _pendingList, LastEvaluatedKey };
  return { ...state, ...{ pending: _pending } };
};

const resetPendingOrders = state => {
  return { ...state, ...{ pending: orderInitState.pending } };
};

const updatePendingOrdersFilter = (state, payload) => {
  const { pending } = state;
  let _pending = { ...pending, ...payload };
  return { ...state, ...{ pending: _pending } };
};

//Approve Orders
const updateApprovedOrders = (state, payload) => {
  const { approved } = state;
  const { list, LastEvaluatedKey } = payload;
  const _approved = { ...approved, ...{ list, LastEvaluatedKey } };
  return { ...state, ...{ approved: _approved } };
};

const updateNextApprovedOrders = (state, payload) => {
  const { approved } = state;
  const { list, LastEvaluatedKey } = payload;
  const _approvedList = [...approved.list, ...list];
  let _approved = { list: _approvedList, LastEvaluatedKey };
  return { ...state, ...{ approved: _approved } };
};

const resetApprovedOrders = state => {
  return { ...state, ...{ approved: orderInitState.approved } };
};

const updateApprovedOrdersFilter = (state, payload) => {
  const { approved } = state;
  let _approved = { ...approved, ...payload };
  return { ...state, ...{ approved: _approved } };
};

//Denied Orders
const updateDeniedOrders = (state, payload) => {
  const { denied } = state;
  const { list, LastEvaluatedKey } = payload;
  const _denied = { ...denied, ...{ list, LastEvaluatedKey } };
  return { ...state, ...{ denied: _denied } };
};

const updateNextDeniedOrders = (state, payload) => {
  const { denied } = state;
  const { list, LastEvaluatedKey } = payload;
  const _deniedList = [...denied.list, ...list];
  let _denied = { list: _deniedList, LastEvaluatedKey };
  return { ...state, ...{ denied: _denied } };
};

const resetDeniedOrders = state => {
  return { ...state, ...{ denied: orderInitState.denied } };
};

const updateDeniedOrdersFilter = (state, payload) => {
  const { denied } = state;
  let _denied = { ...denied, ...payload };
  return { ...state, ...{ denied: _denied } };
};

export default function orderReducer(state = orderInitState, action) {
  switch (action.type) {
    case SET_PENDING_ORDERS:
      return updatePendingOrders(state, action.payload);
    case SET_NEXT_PENDING_ORDERS:
      return updateNextPendingOrders(state, action.payload);
    case RESET_PENDING_ORDERS:
      return resetPendingOrders(state);
    case SET_PENDING_ORDERS_FILTER:
      return updatePendingOrdersFilter(state, action.payload);
    case SET_APPROVED_ORDERS:
      return updateApprovedOrders(state, action.payload);
    case SET_NEXT_APPROVED_ORDERS:
      return updateNextApprovedOrders(state, action.payload);
    case RESET_APPROVED_ORDERS:
      return resetApprovedOrders(state);
    case SET_APPROVED_ORDERS_FILTER:
      return updateApprovedOrdersFilter(state, action.payload);
    case SET_DENIED_ORDERS:
      return updateDeniedOrders(state, action.payload);
    case SET_NEXT_DENIED_ORDERS:
      return updateNextDeniedOrders(state, action.payload);
    case RESET_DENIED_ORDERS:
      return resetDeniedOrders(state);
    case SET_DENIED_ORDERS_FILTER:
      return updateDeniedOrdersFilter(state, action.payload);
    default:
      return state;
  }
}
