import { createContext, useContext, useEffect, useState } from "react";
import { apiFetch } from "../services/api";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { user, loadingUser } = useAuth();

  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);

  async function getCartItems() {
    if (!user) {
      setCartItems([]);
      return;
    }

    try {
      setLoadingCart(true);

      const response = await apiFetch("/get-cart-items");
      const data = await response.json();

      if (!response.ok) {
        setCartItems([]);
        return;
      }

      if (Array.isArray(data)) {
        setCartItems(data);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.log("Erro ao buscar carrinho:");
      console.log(error);

      setCartItems([]);
    } finally {
      setLoadingCart(false);
    }
  }

  async function addToCart(productId) {
    try {
      const response = await apiFetch("/create-cart-item", {
        method: "POST",
        body: JSON.stringify({
          productId: productId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Erro ao adicionar proudto ao carrinho",
        };
      }

      await getCartItems();

      return {
        success: true,
        message: data.message,
      };
    } catch (error) {
      console.log("Erro ao adicionar produto ao carrinho:");
      console.log(error);

      return {
        success: false,
        message: "Não foi possível conectar ao servidor",
      };
    }
  }

  useEffect(() => {
    if (!loadingUser) {
      getCartItems();
    }
  }, [user, loadingUser]);

  const value = {
    cartItems,
    loadingCart,
    getCartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
