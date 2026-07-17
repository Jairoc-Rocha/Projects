import OrderCard from "../components/OrderCard";
import OrdersEmptyState from "../components/OrdersEmptyState";
import PageLayout from "../components/PageLayout";
import SectionTitle from "../components/SectionTittle";
import { getOrders } from "../utils/getOrders";

export default function Orders() {
  const orders = getOrders();

  if (orders.length === 0) {
    return (
      <PageLayout centered>
        <OrdersEmptyState />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <SectionTitle
        eyebrow="Histórico"
        title="Meus pedidos"
        description="Veja os pedidos que você já realizou no Burger Lab."
      />

      <div className="mt-10 space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </PageLayout>
  );
}
