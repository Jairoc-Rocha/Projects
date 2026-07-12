// Formatar preço
export const formatterPrice = (value) => {
  return `R$${value.toFixed(2).replace(".", ",")}`;
};
