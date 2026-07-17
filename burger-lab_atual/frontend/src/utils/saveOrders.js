import { ORDERS_STORAGE_KEY } from "../constants/orderStorageKeys";

export function saveOrders(orders) {
  localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}
