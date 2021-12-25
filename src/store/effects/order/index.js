import { message } from "antd";
import { ADMIN_CONFIG } from "../../../config/admin";
import environment from "../../../environment";
import restService from "../../../service";
import { setUserOrders } from "../../actions/user";

const refreshOrders = (idx, dispatch) => {
  const { key, actions } = ADMIN_CONFIG.order.tabs[idx];
  dispatch(getAllOrders(key, actions.list));
};

export const enrollASection = payload => async (dispatch, getState) => {
  const { courseDetail } = getState();
  let body = {
    courseId: courseDetail.id,
    courseTitle: courseDetail.title,
    sectionId: payload.id,
    sectionTitle: payload.title,
  };
  let url = environment.enrollSection;
  await restService(url, "POST", body);
  message.success("Section enrolled successfully.");
  // refreshOrders(0, dispatch);
};

export const approveOrder = payload => async (dispatch, getState) => {
  let url = environment.approveOrder;
  await restService(url, "POST", payload);
  message.success("Section approved successfully.");
  refreshOrders(0, dispatch);
};

export const rejectOrder = payload => async (dispatch, getState) => {
  let url = environment.rejectOrder;
  await restService(url, "POST", payload);
  message.success("Section rejected successfully.");
  refreshOrders(1, dispatch);
};

export const searchOrders = _payload => async dispatch => {
  let payload = { ..._payload };
  // dispatch(setOrderFilter(payload));
  let result = await restService(environment.listOrders, "POST", payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(response);
};

export const getUserOrders = id => async (dispatch, getState) => {
  const { user } = getState();
  const _userId = id ? id : user.profile.id;
  let url = environment.listUserOrders.replace(":userId", _userId);
  let result = await restService(url, "GET");
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(setUserOrders({ orders: response }));
};

export const getAllOrders = (key, nextAction) => async (dispatch, getState) => {
  const { orderStatus } = getState().order[key];
  let payload = {
    orderStatus,
  };
  let result = await restService(environment.listOrders, "POST", payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };

  dispatch(nextAction(response));
};

export const getNextSetOrders = (key, nextAction) => async (dispatch, getState) => {
  const { orderStatus, LastEvaluatedKey, filter } = getState().order[key];
  let _payload = {
    Limit: 20,
    orderStatus,
  };
  if (LastEvaluatedKey) {
    _payload.LastEvaluatedKey = LastEvaluatedKey;
  }
  if (filter && filter !== "") {
    _payload.filter = filter;
  }
  let result = await restService(environment.listOrders, "POST", _payload);
  let response = {
    list: result.data.Items,
    LastEvaluatedKey: result.data.LastEvaluatedKey || null,
  };
  dispatch(nextAction(response));
};
