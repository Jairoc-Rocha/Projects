export function getOrderStatusLabel(status) {
  const statusLabels = {
    pending: "Pendente",
    preparing: "Em preparo",
    delivered: "Entregue",
    cancelled: "Cancelado",
  };

  return statusLabels[status] || status;
}
