import { createContext, useEffect, useState } from "react";

const CART_STORAGE_KEY = "@burger-lab:cart";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return [];
    }

    try {
      return JSON.parse(storedCart);
    } catch {
      localStorage.removeItem(CART_STORAGE_KEY);

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product) {
    setCartItems((currentCartItems) => {
      const productAlreadyInCart = currentCartItems.find(
        (item) => item.id === product.id,
      );

      if (productAlreadyInCart) {
        return currentCartItems.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
      }

      const newProduct = {
        ...product,
        quantity: 1,
      };

      return [...currentCartItems, newProduct];
    });
  }

  function increaseCartItem(productId) {
    setCartItems((currentCartItems) =>
      currentCartItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      }),
    );
  }

  function decreaseCartItem(productId) {
    setCartItems((currentCartItems) =>
      currentCartItems
        .map((item) => {
          if (item.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(productId) {
    setCartItems((currentCartItems) =>
      currentCartItems.filter((item) => item.id !== productId),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  //   Entendendo o Provider - Essa parte fornece os dados do carrinho para o projeto.
  return (
    // O value é muito importante:
    // Tudo que estiver dentro do CartProvider poderá acessar: cartItems e addToCart
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseCartItem,
        decreaseCartItem,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Exportando o Provider Isso permite importar o CartProvider em outro arquivo.
// Vamos usar ele no main.jsx.
export default CartProvider;
