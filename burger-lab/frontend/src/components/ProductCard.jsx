import Button from "./Button";
import { apiFetch } from "../services/api";
import { formatterPrice } from "../utils/formatterPrice";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  async function handleAddToCart() {
    try {
      const response = await apiFetch("/create-cart-item", {
        method: "POST",
        body: JSON.stringify({
          productId: product.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Erro da API: ", data.message);
        return;
      }

      console.log("Produto adicionado: ", data);
    } catch (error) {
      console.log("Erro ao adicionar produtono carrinho:");
      console.log(error);
    }
  }

  return (
    <article className="product-card" key={product.id}>
      <div className="product-image">🍔</div>
      <div className="product-info">
        <span>{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>{formatterPrice(product.price)}</strong>
          <Button title={`Adicionar`} onClick={handleAddToCart} />
        </div>
      </div>
    </article>
  );
}
