export function getItemsCountLabel(items) {
  const totalItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  if (totalItems === 1) {
    return "1 item no pedido";
  }

  return `${totalItems} itens no pedido`;
}
