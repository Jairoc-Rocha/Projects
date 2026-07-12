import { ORDERS_STORAGE_KEY } from "../constants/orderStorageKeys";

export function getOrders() {
  const storedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);

  if (!storedOrders) {
    return [];
  }

  try {
    return JSON.parse(storedOrders);
  } catch {
    localStorage.removeItem(ORDERS_STORAGE_KEY);

    return [];
  }
}
