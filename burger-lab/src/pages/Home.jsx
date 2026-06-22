import Container from "../components/Container";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center pt-20 text-center">
        <Container className="flex flex-col items-center">
          <span className="mb-4 inline-block rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Burger Lab
          </span>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            O laboratório dos burgers artesanais
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
            Monte seu pedido com burgers especiais, acompanhamentos e bebidas.
            Um projeto completo criado com React, Tailwind CSS, Node.js e
            PostgreSQL.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-8 py-3 font-bold text-white transition hover:bg-orange-600">
              Ver cardápio
            </button>

            <button className="rounded-full border border-zinc-700 px-8 py-3 font-bold text-zinc-200 transition hover:border-orange-500 hover:text-orange-400">
              Conhecer projeto
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
