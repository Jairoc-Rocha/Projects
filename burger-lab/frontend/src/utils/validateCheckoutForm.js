export function validateCheckoutForm(formData, isCartEmpty) {
  if (isCartEmpty) {
    return "Adicione pelo menos um produto ao carrinho.";
  }

  if (!formData.name.trim()) {
    return "Preencha o nome.";
  }

  if (!formData.phone.trim()) {
    return "Preencha o telefone.";
  }

  if (!formData.address.trim()) {
    return "Preencha o endereço.";
  }

  if (!formData.paymentMethod.trim()) {
    return "Selecione uma forma de pagamento.";
  }

  return "";
}
