import { Link } from "react-router";

import PageLayout from "../components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout centered>
      <div
        className="
          mx-auto max-w-2xl rounded-4xl border border-yellow-400/20 bg-zinc-950 p-8
          text-center
        "
      >
        <div
          className="
            mx-auto flex h-20 w-20 items-center justify-center rounded-full
            bg-yellow-400/10 text-4xl
          "
        >
          🍔
        </div>

        <span
          className="
            mt-6 inline-block text-sm font-black uppercase tracking-[0.2em]
            text-yellow-400
          "
        >
          Erro 404
        </span>

        <h1
          className="
            mt-4 text-4xl font-black uppercase leading-tight text-yellow-50
            md:text-5xl
          "
        >
          Página não encontrada
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-yellow-50/70">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <Link
          to="/"
          className="
            mt-8 inline-block rounded-full bg-yellow-400 px-8 py-3
            font-black text-zinc-950 transition hover:bg-yellow-300
          "
        >
          Voltar para Home
        </Link>
      </div>
    </PageLayout>
  );
}
