export const SET_PENDING_ORDERS = "SET_PENDING_ORDERS";
export const SET_NEXT_PENDING_ORDERS = "SET_NEXT_PENDING_ORDERS";
export const RESET_PENDING_ORDERS = "RESET_PENDING_ORDERS";
export const SET_PENDING_ORDERS_FILTER = "SET_PENDING_ORDERS_FILTER";

export const setPendigOrders = payload  => ({ type: SET_PENDING_ORDERS, payload }); 
export const setNextPendigOrders = payload  => ({ type: SET_NEXT_PENDING_ORDERS, payload }); 
export const resetPendigOrders = payload  => ({ type: RESET_PENDING_ORDERS, payload }); 
export const setPendigOrdersFilter = payload  => ({ type: SET_PENDING_ORDERS_FILTER, payload }); 

export const SET_APPROVED_ORDERS = "SET_APPROVED_ORDERS";
export const SET_NEXT_APPROVED_ORDERS = "SET_NEXT_APPROVED_ORDERS";
export const RESET_APPROVED_ORDERS = "RESET_APPROVED_ORDERS";
export const SET_APPROVED_ORDERS_FILTER = "SET_APPROVED_ORDERS_FILTER";

export const setApprovedOrders = payload  => ({ type: SET_APPROVED_ORDERS, payload }); 
export const setNextApprovedOrders = payload  => ({ type: SET_NEXT_APPROVED_ORDERS, payload }); 
export const resetApprovedOrders = payload  => ({ type: RESET_APPROVED_ORDERS, payload }); 
export const setApprovedOrdersFilter = payload  => ({ type: SET_APPROVED_ORDERS_FILTER, payload }); 

export const SET_DENIED_ORDERS = "SET_DENIED_ORDERS";
export const SET_NEXT_DENIED_ORDERS = "SET_NEXT_DENIED_ORDERS";
export const RESET_DENIED_ORDERS = "RESET_DENIED_ORDERS";
export const SET_DENIED_ORDERS_FILTER = "SET_DENIED_ORDERS_FILTER";

export const setDeniedOrders = payload  => ({ type: SET_DENIED_ORDERS, payload }); 
export const setNextDeniedOrders = payload  => ({ type: SET_NEXT_DENIED_ORDERS, payload }); 
export const resetDeniedOrders = payload  => ({ type: RESET_DENIED_ORDERS, payload }); 
export const setDeniedOrdersFilter = payload  => ({ type: SET_DENIED_ORDERS_FILTER, payload }); 