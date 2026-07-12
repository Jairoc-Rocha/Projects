import { ShoppingBag, Trash2, Sparkles } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { CartItemContext } from "../contexts/CartItemsContext";

const Product = ({ id, name, description, price, img, category, setProducts }) => {
  const { user } = useContext(UserContext);
  const { setCartItems } = useContext(CartItemContext);

  const handleDeleteProduct = async (id) => {
    try {
      if (!id) return;

      const response = await fetch(`http://localhost:3000/delete-product/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) return;
      getProduct();
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/get-cart-items", { credentials: "include" });
      if (!response.ok) return;
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const newCartItem = async () => {
    try {
      const response = await fetch("http://localhost:3000/create-cart-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ productId: id }),
      });

      if (!response.ok) return;
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={`./${img}`} className="product-img" alt={name} />
        <span className="product-chip">{category}</span>
      </div>

      <div className="product-content">
        <div className="product-header">
          <p className="product-title">{name}</p>
          {user?.admin && (
            <button className="delete-product" type="button" onClick={() => handleDeleteProduct(id)}>
              <Trash2 size={14} />
              Deletar
            </button>
          )}
        </div>

        <p className="product-description">{description}</p>

        <div className="product-footer">
          <p className="product-price">{formatterPrice(price)}</p>
          <button className="add-product-button" type="button" onClick={() => newCartItem()}>
            <ShoppingBag size={18} />
            <span>Adicionar</span>
          </button>
        </div>

        <div className="product-meta">
          <Sparkles size={14} />
          <span>Feito na hora</span>
        </div>
      </div>
    </article>
  );
};

export default Product;
