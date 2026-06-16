export function formatterPrice(price) {
  return new Intl.NumberFormat("pr-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price / 100);
}
