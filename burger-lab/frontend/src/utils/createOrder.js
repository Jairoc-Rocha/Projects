export function createOrder(formData, cartItems, cartTotal) {
  return {
    id: crypto.randomUUID(),
    customer: formData,
    items: cartItems,
    total: cartTotal,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
}
