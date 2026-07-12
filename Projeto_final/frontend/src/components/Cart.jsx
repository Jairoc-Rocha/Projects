import { X, TicketPercent, ShieldCheck } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";
import { useContext, useEffect } from "react";
import { CartItemContext } from "../contexts/CartItemsContext";
import { formatterPrice } from "../utils/formatterPrice";

const Cart = ({ setShowCart, showCart }) => {
  const { cartItems, setCartItems } = useContext(CartItemContext);

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

  useEffect(() => {
    getCartItems();
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const delivery = cartItems.length > 0 ? 5 : 0;
  const total = subtotal + delivery;

  return (
    <aside className="cart-sidebar">
      <div className="cart-header">
        <div>
          <p className="cart-eyebrow">Seu pedido</p>
          <p className="font-bold uppercase">Meu carrinho</p>
        </div>
        <X className="cursor-pointer" onClick={() => setShowCart(!showCart)} />
      </div>

      <div className="cart-items">
        {cartItems.length === 0 && <p className="empty-cart">Seu carrinho está vazio.</p>}
        {cartItems.map((item) => (
          <CartItem
            key={item.product.id}
            title={item.product.name}
            price={item.product.price}
            img={item.product.img}
            quantity={item.quantity}
            id={item.product.id}
          />
        ))}
      </div>

      <div className="cart-summary">
        <div className="promo-line">
          <TicketPercent size={16} />
          <span>Cupom disponível no checkout</span>
        </div>
        <div className="summary-row">
          <span>Subtotal</span>
          <strong>{formatterPrice(subtotal)}</strong>
        </div>
        <div className="summary-row">
          <span>Entrega</span>
          <strong>{formatterPrice(delivery)}</strong>
        </div>
        <div className="summary-row summary-total">
          <span>Total</span>
          <strong>{formatterPrice(total)}</strong>
        </div>
        <Button title="Finalizar pedido" />
        <div className="secure-line">
          <ShieldCheck size={14} />
          <span>Pagamento seguro</span>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
