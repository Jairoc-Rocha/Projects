import { Link } from "react-router";

export default function OrdersEmptyState() {
  return (
    <div
      className="
        mx-auto max-w-xl rounded-4xl border border-yellow-400/20
        bg-zinc-950 p-8 text-center
      "
    >
      <span
        className="
          text-sm font-black uppercase tracking-[0.2em] text-yellow-400
        "
      >
        Meus pedidos
      </span>

      <h1 className="mt-4 text-3xl font-black text-yellow-50">
        Você ainda não possui pedidos
      </h1>

      <p className="mt-4 text-sm leading-6 text-yellow-50/70">
        Escolha seus produtos favoritos e finalize seu primeiro pedido.
      </p>

      <Link
        to="/"
        className="
          mt-8 inline-block rounded-full bg-yellow-400 px-8 py-3
          font-black text-zinc-950 transition hover:bg-yellow-300
        "
      >
        Ver cardápio
      </Link>
    </div>
  );
}
