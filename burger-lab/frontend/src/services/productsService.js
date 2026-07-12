import { API_BASE_URL } from "./api";

export async function getProducts() {
  const response = await fetch(`${API_BASE_URL}/products`);

  const products = await response.json();

  return products;
}
