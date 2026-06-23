import Button from "../components/Button";
import Container from "../components/Container";
import SectionTittle from "../components/SectionTittle";

export default function Home() {
  return (
    <main>
      <section className="min-h-screen pt-20">
        <Container className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="mb-4 inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Burger Lab
            </span>

            <h1 className="mx-auto max-w-4xl text-4xl font-black uppercase leading-none tracking-tight text-yellow-50 md:text-6xl lg:mx-0">
              Experimente. Descubra. Vicie-se.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-yellow-50/80 md:text-lg lg:mx-0">
              Hambúrgueres artesanais criados como experiências de laboratório:
              ingredientes selecionados, combinações intensas e sabor de
              verdade.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button>Ver cardápio</Button>

              <Button variant="secondary">Criar conta</Button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <strong className="block text-2xl font-black text-yellow-400">
                  100%
                </strong>
                <span className="mt-1 block text-sm text-yellow-50/70">
                  Artesanal
                </span>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <strong className="block text-2xl font-black text-yellow-400">
                  25min
                </strong>
                <span className="mt-1 block text-sm text-yellow-50/70">
                  Entrega média
                </span>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <strong className="block text-2xl font-black text-yellow-400">
                  +12
                </strong>
                <span className="mt-1 block text-sm text-yellow-50/70">
                  Combos
                </span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-yellow-400/10 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-4xl border border-yellow-400/20 bg-zinc-950 p-6 shadow-2xl">
              <span className="mb-6 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-400">
                Mais pedido
              </span>

              <div className="flex h-52 items-center justify-center rounded-3xl bg-black">
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-yellow-400/10 text-7xl">
                  🍔
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-black text-yellow-50">
                  Lab Smash
                </h2>

                <p className="mt-4 text-base leading-7 text-yellow-50/75">
                  Burger artesanal com cheddar, cebola caramelizada e molho
                  especial da casa.
                </p>

                <strong className="mt-6 block text-3xl font-black text-yellow-400">
                  R$ 29,90
                </strong>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionTittle
            eyebrow={`Cardápio`}
            title={`Experimentos disponíveis`}
            description={`Escolha seu burger, porção ou bebiba favorita.`}
          />
        </Container>
      </section>
    </main>
  );
}
