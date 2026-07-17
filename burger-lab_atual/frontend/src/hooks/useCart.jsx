// O useContext serve para acessar informações que estão dentro de um contexto
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

export default function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }

  return context;
}
