import { formatCurrency } from "../utils/formatCurrency";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  function handleRemove() {
    const confirmRemove = window.confirm(
      `Tem certeza que deseja remover ${item.name} do carrinho?`,
    );

    if (!confirmRemove) {
      return;
    }

    onRemove(item.id);
  }

  return (
    <article className="flex flex-col gap-4 rounded-4xl border border-yellow-400/20 bg-zinc-950 p-5 md:flex-row md:items-center">
      <div className="flex h-28 w-full items-center justify-center rounded-3xl bg-black text-5xl md:w-32">
        {item.image}
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-black text-yellow-50">{item.name}</h3>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center overflow-hidden rounded-full border border-yellow-400/30">
            <button
              onClick={() => onDecrease(item.id)}
              className="cursor-pointer px-4 py-2 text-lg font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-zinc-950"
            >
              -
            </button>

            <span className="min-w-10 px-3 text-center text-sm font-black text-yellow-50">
              {item.quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)}
              className="cursor-pointer px-4 py-2 text-lg font-black text-yellow-400 transition hover:bg-yellow-400 hover:text-zinc-950"
            >
              +
            </button>
          </div>

          <button
            onClick={handleRemove}
            className="cursor-pointer rounded-full border border-red-500/40 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Remover
          </button>
        </div>

        <p className="mt-3 text-sm text-yellow-50/70">
          Preço unitário: {formatCurrency(item.price)}
        </p>
      </div>

      <strong className="text-2xl font-black text-yellow-400">
        {formatCurrency(item.price * item.quantity)}
      </strong>
    </article>
  );
}
