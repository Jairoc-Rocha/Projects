import { getOrders } from "./getOrders";
import { saveOrders } from "./saveOrders";

export function addOrder(order) {
  const currentOrders = getOrders();

  const updatedOrders = [order, ...currentOrders];

  saveOrders(updatedOrders);
}
