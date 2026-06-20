import Header from "../components/Header";
import { useCart } from "../contexts/CartContext";
import { formatterPrice } from "../utils/formatterPrice.js";

import "/.Cart.css";

export default function Cart() {
  const { cartItems, loadingCart } = useCart();

  const totalCart = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  return (
    <main className="cart-page">
      <Header />

      <section className="cart-container">
        <div className="cart-heading">
          <span>Carrinho</span>
          <h1>Seu pedido</h1>
          <p>Confira os produtos escolhidos antes de finalizar.</p>
        </div>

        {loadingCart ? (
          <p className="cart-feedback">Carregand carrinho...</p>
        ) : cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2>Seu carrinho está vazio</h2>
            <p>Adicione alguns experimentos do cardápio para começar.</p>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-image">🍔</div>

                  <div className="cart-item-info">
                    <span>{item.product.category}</span>
                    <h2>{item.product.name}</h2>
                    <p>{item.product.description}</p>
                  </div>

                  <div className="cart-tem-values">
                    <p>
                      Quantidade: <strong>{item.product.price}</strong>
                    </p>

                    <p>
                      Preço:{" "}
                      <strong>{formatterPrice(item.product.price)}</strong>
                    </p>

                    <p>
                      Subtotal:{" "}
                      <strong>
                        {formatterPrice(item.product.price * item.quantity)}
                      </strong>
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <span>Resumo</span>

              <h2>Total do pedido</h2>

              <strong>{formatterPrice(totalCart)}</strong>

              <button type="button">Finalizar pedido</button>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}
