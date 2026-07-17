import { Link } from "react-router";

import { formatCurrency } from "../utils/formatCurrency";

export default function CartSummary({ total }) {
  return (
    <aside
      className="
        h-fit rounded-4xl border border-yellow-400/20 bg-zinc-950 p-6
      "
    >
      <h2 className="text-xl font-black text-yellow-50">Resumo do pedido</h2>

      <div className="mt-6 flex items-center justify-between border-t border-yellow-400/10 pt-6">
        <span className="text-sm font-bold text-yellow-50/70">Total</span>

        <strong className="text-2xl font-black text-yellow-400">
          {formatCurrency(total)}
        </strong>
      </div>

      <Link
        to="/checkout"
        className="
          mt-6 inline-block w-full rounded-full bg-yellow-400 px-8 py-3
          text-center font-black text-zinc-950 transition hover:bg-yellow-300
        "
      >
        Finalizar pedido
      </Link>
    </aside>
  );
}
