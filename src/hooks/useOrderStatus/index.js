import { useSelector } from "react-redux";
import { ORDER_STATUS } from "../../config/admin";

function useOrderStatus() {
  const orders = useSelector(({ user }) => user.orders.list);
  const pendingSections = orders.filter(order => order.orderStatus === ORDER_STATUS.ORDER_PENDING ).map(order => order.sectionId);
  const enrolledSections = orders.filter(order => order.orderStatus === ORDER_STATUS.ORDER_APPROVED ).map(order => order.sectionId);
  const checkIfEnrolled = sectionId => enrolledSections.includes(sectionId);
  const checkIfPending = sectionId => pendingSections.includes(sectionId);
  return { orders, checkIfEnrolled, checkIfPending };
}
export default useOrderStatus;
