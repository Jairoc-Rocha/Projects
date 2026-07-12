import OrderCustomerInfo from "./OrderCustomerInfo";
import OrderItemsAccordion from "./OrderItemsAccordion";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDateTime } from "../utils/formatDateTime";
import { getOrderStatusLabel } from "../utils/getOrderStatusLabel";

export default function OrderCard({ order }) {
  return (
    <article
      className="
        rounded-4xl border border-yellow-400/20 bg-zinc-950 p-6
      "
    >
      <div
        className="
          flex flex-col gap-4 md:flex-row md:items-center
          md:justify-between
        "
      >
        <div>
          <span className="text-xs font-bold uppercase text-yellow-400">
            Pedido
          </span>

          <h2 className="mt-1 text-xl font-black text-yellow-50">
            #{order.id.slice(0, 8)}
          </h2>

          <p className="mt-2 text-sm text-yellow-50/60">
            {formatDateTime(order.createdAt)}
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <span
            className="
              w-fit rounded-full bg-yellow-400/10 px-4 py-2
              text-xs font-black uppercase text-yellow-400
            "
          >
            {getOrderStatusLabel(order.status)}
          </span>

          <strong className="text-2xl font-black text-yellow-50">
            {formatCurrency(order.total)}
          </strong>
        </div>
      </div>

      <OrderCustomerInfo customer={order.customer} />
      <OrderItemsAccordion items={order.items} />
    </article>
  );
}
