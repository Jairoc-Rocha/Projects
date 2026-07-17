import { useState } from "react";

import CheckoutEmptyCart from "../components/CheckoutEmptyCart";
import CheckoutForm from "../components/CheckoutForm";
import OrderConfirmation from "../components/OrderConfirmation";
import PageLayout from "../components/PageLayout";
import SectionTitle from "../components/SectionTittle";
import { initialCheckoutFormData } from "../data/initialCheckoutFormData";
import { paymentMethods } from "../data/paymentMethods";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { addOrder } from "../utils/addOrder";
import { calculateCartTotal } from "../utils/calculateCartTotal";
import { createOrder } from "../utils/createOrder";
import { validateCheckoutForm } from "../utils/validateCheckoutForm";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();

  const cartTotal = calculateCartTotal(cartItems);
  const isCartEmpty = cartItems.length === 0;

  const [checkoutFormData, setCheckoutFormData] = useState(() => ({
    ...initialCheckoutFormData,
    name: user?.name || "",
    email: user?.email || "",
  }));

  const [error, setError] = useState("");
  const [order, setOrder] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setCheckoutFormData({
      ...checkoutFormData,
      [name]: value,
    });

    setError("");
    setIsSubmitting(false);
  }

  function handleSubmit() {
    if (isSubmitting) {
      return;
    }

    const validationError = validateCheckoutForm(checkoutFormData);

    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder = createOrder(checkoutFormData, cartItems, cartTotal);

      addOrder(newOrder);

      setOrder(newOrder);
      clearCart();
      setIsSubmitting(false);
    }, 1000);
  }

  if (isCartEmpty && !order) {
    return (
      <PageLayout centered>
        <CheckoutEmptyCart />
      </PageLayout>
    );
  }

  if (order) {
    return (
      <PageLayout>
        <OrderConfirmation order={order} />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionTitle
        eyebrow="Finalização"
        title="Finalize seu pedido"
        description="Preencha os dados abaixo para concluir sua compra no Burger Lab."
      />

      <CheckoutForm
        formData={checkoutFormData}
        cartTotal={cartTotal}
        paymentMethods={paymentMethods}
        error={error}
        isSubmitting={isSubmitting}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </PageLayout>
  );
}
