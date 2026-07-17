import { Link } from "react-router"

import { calculateCartQuantity } from "../utils/calculateCartQuantity"
import { formatCurrency } from "../utils/formatCurrency"
import { formatDateTime } from "../utils/formatDateTime"
import { getOrderStatusLabel } from "../utils/getOrderStatusLabel"

export default function OrderConfirmation({ order }) {
  return (
    <div
      className="
        mt-12 rounded-4xl border border-green-500/40 bg-green-500/10 p-8
        text-center
      "
    >
      <div
        className="
          mx-auto flex h-20 w-20 items-center justify-center rounded-full
          bg-green-500/20 text-4xl
        "
      >
        ✅
      </div>

      <h3 className="mt-6 text-3xl font-black text-green-300">
        Pedido confirmado!
      </h3>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-green-100">
        Obrigado pelo pedido. Em breve iniciaremos o preparo e entraremos em
        contato se necessário.
      </p>

      <div
        className="
          mx-auto mt-6 max-w-md rounded-2xl border border-green-500/30
          bg-black/30 p-5 text-left
        "
      >
        <p className="text-sm font-bold text-green-100">
          Código do pedido:
          <span className="ml-2 text-green-300">
            {order.id.slice(0, 8)}
          </span>
        </p>

        <p className="mt-2 text-sm font-bold text-green-100">
          Data do pedido:
          <span className="ml-2 text-green-300">
            {formatDateTime(order.createdAt)}
          </span>
        </p>

        <p className="mt-2 text-sm font-bold text-green-100">
          Status:
          <span className="ml-2 text-green-300">
            {getOrderStatusLabel(order.status)}
          </span>
        </p>

        <p className="mt-2 text-sm font-bold text-green-100">
          Total do pedido:
          <span className="ml-2 text-green-300">
            {formatCurrency(order.total)}
          </span>
        </p>

        <p className="mt-2 text-sm font-bold text-green-100">
          Forma de pagamento:
          <span className="ml-2 text-green-300">
            {order.customer.paymentMethod}
          </span>
        </p>

        <p className="mt-2 text-sm font-bold text-green-100">
          Quantidade de itens:
          <span className="ml-2 text-green-300">
            {calculateCartQuantity(order.items)}
          </span>
        </p>
      </div>

      <Link
        to="/"
        className="
          mt-6 inline-block rounded-full bg-green-500 px-8 py-3
          font-black text-white transition hover:bg-green-400
        "
      >
        Voltar ao cardápio
      </Link>
    </div>
  )
}

