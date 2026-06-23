import Button from "./Button";

export default function ProductCard({ product }) {
  return (
    <article className="group rounded-4xl border-yellow-400/20 bg-zinc-950 p-5 transition hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10">
      <div className="flex h-48 items-center justify-center rounded-3xl bg-black text-7xl">
        {product.image}
      </div>

      <div className="mt-6">
        <span className="text-xs font-black uppercase tracking-[0.2rem] text-yellow-400 ">
          {product.category}
        </span>

        <h3 className="mt-3 text-2xl font-black text-yellow-50">
          {product.name}
        </h3>

        <p className="mt-3 min-h-14 text-sm leading-6 text-yellow-50/70">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <strong className="text-2xl font-black text-yellow-400">
            R$ {product.price.fixed(2).replace(".", ",")}
          </strong>

          <Button>Adicionar</Button>
        </div>
      </div>
    </article>
  );
}
