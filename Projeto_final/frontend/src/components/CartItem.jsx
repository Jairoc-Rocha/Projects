import { ChevronLeft, Trash } from "lucide-react";
import { formatterPrice } from "../utils/formatterPrice";

const CartItem = ({ title, price, img, id, quantity }) => {
  return (
    <div className="cart-item">
      <img src={`./${img}`} alt={title} className="cart-item-img" />

      <div className="cart-item-info">
        <p className="cart-item-title">{title}</p>
        <p className="cart-item-price">{formatterPrice(price)}</p>
        <div className="quantity-controls">
          <ChevronLeft className="quantity-icon" size={25} />
          <p className="quantity-text">{quantity}</p>
          <ChevronLeft className="quantity-icon quantity-icon-right" size={25} />
        </div>
      </div>

      <Trash size={18} className="cursor-pointer" onClick={() => alert(id)} />
    </div>
  );
};

export default CartItem;
