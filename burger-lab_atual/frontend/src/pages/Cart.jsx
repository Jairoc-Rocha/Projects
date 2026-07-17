import CartActions from "../components/CartActions";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import EmptyCartMessage from "../components/EmptyCartMessage";
import PageLayout from "../components/PageLayout";
import SectionTitle from "../components/SectionTittle";
import useCart from "../hooks/useCart";
import { calculateCartTotal } from "../utils/calculateCartTotal";

function Cart() {
  const {
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeFromCart,
    clearCart,
  } = useCart();

  const cartTotal = calculateCartTotal(cartItems);

  function handleClearCart() {
    const confirmClearCart = window.confirm(
      "Tem certeza que deseja limpar o carrinho?",
    );

    if (!confirmClearCart) {
      return;
    }

    clearCart();
  }

  return (
    <PageLayout>
      <SectionTitle
        eyebrow="Carrinho"
        title="Seu pedido"
        description="Confira os itens escolhidos antes de finalizar."
      />

      {cartItems.length === 0 ? (
        <EmptyCartMessage
          title="Seu carrinho está vazio."
          description="Adicione algum produto do cardápio para começar seu pedido no Burger Lab."
        />
      ) : (
        <div
          className="
          mt-12 grid grid-cols-1 gap-8
          lg:grid-cols-[1fr_360px]
        "
        >
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={increaseCartItem}
                  onDecrease={decreaseCartItem}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <CartActions onClearCart={handleClearCart} />
          </div>

          <CartSummary total={cartTotal} />
        </div>
      )}
    </PageLayout>
  );
}

export default Cart;
