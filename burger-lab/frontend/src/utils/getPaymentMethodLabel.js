export function getPaymentMethodLabel(paymentMethod) {
  const normalizedPaymentMethod = paymentMethod?.trim().toLowerCase();

  const paymentMethods = {
    pix: "Pix",

    cash: "Dinheiro",
    money: "Dinheiro",
    dinheiro: "Dinheiro",

    "credit-card": "Cartão de crédito",
    credit: "Cartão de crédito",
    credito: "Cartão de crédito",
    "cartao-credito": "Cartão de crédito",

    "debit-card": "Cartão de débito",
    debit: "Cartão de débito",
    debito: "Cartão de débito",
    "cartao-debito": "Cartão de débito",
  };

  return paymentMethods[normalizedPaymentMethod] || "Não informado";
}
