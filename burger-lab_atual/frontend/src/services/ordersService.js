import { API_BASE_URL } from "./api";

export async function createOrderRequest(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  return data;
}

export async function getUserOrders() {
  const response = await fetch(`${API_BASE_URL}/orders`);

  const orders = await response.json();

  return orders;
}
