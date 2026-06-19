import { useNavigate } from "react-router";

import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { apiFetch } from "../services/api";
import { formatterPrice } from "../utils/formatterPrice";

import "./ProductCard.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const { user } = useAuth();
  const { addToCart } = useCart();

  async function handleAddToCart() {
    if (!user) {
      navigate("/login");
      return;
    }

    const result = await addToCart(product.id);

    if (!result.success) {
      console.log("Erro ao adicionar: ", result.message);
      return;
    }

    console.log("Produto adicionado: ", result.message);
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
