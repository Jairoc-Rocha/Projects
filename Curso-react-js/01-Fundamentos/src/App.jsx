import Button from "./components/Button";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
      <section className="max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
          Curso React + JS + Tailwind
        </span>

        <h1 className="mt-4 text-4xl font-bold text-white">
          Minha primeira aula prática
        </h1>

        <p className="mt-4 text-base leading-7 text-zinc-300">
          Agora nosso botão recebe uma prop chamada variant para mudar o visual
          usando JavaScript ES6+ e Tailwind CSS.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button>Salvar</Button>
          <Button variant="secondary">Cancelar</Button>
          <Button variant="danger">Excluir</Button>
          <Button>Continuar</Button>
          <Button variant="warning" className="w-full">
            Atenção
          </Button>
          <Button variant="danger" className="w-full">
            Excluir definitivamente
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
