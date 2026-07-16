import { useState } from "react";

import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const handleDecrement = () => {
    setCount((currentCount) => currentCount - 1);
  };

  const handleAddTen = () => {
    setCount((currentCount) => currentCount + 10);
  };

  const handleRemoveTen = () => {
    setCount((currentCount) => currentCount - 10);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
      <section className="max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-xl">
        <span className="text-sm font-semibold uppercase tracking-widest text-amber-400">
          Curso React + JS + Tailwind
        </span>

        <h1 className="mt-4 text-4xl font-bold text-white">
          Renderização condicional
        </h1>

        <p className="mt-4 text-base leading-7 text-zinc-300">
          Agora vamos mostrar mensagens diferentes de acordo com o valor do
          estado.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-500 bg-zinc-950 p-6">
          <p className="text-sm font-medium text-zinc-400">Quantidade atual</p>

          <strong className="mt-2 block text-6xl font-bold text-white">
            {count}
          </strong>

          <div className="mt-4">
            {count === 0 && (
              <p className="rounded-xl bg-zinc-800 px-4 py-3 text-sm font-medium text-zinc-300">
                O contador está zerado.
              </p>
            )}

            {count > 0 && (
              <p className="rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-zinc-950">
                O contador está positivo.
              </p>
            )}

            {count < 0 && (
              <p className="rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white">
                O contador está negativo.
              </p>
            )}

            {count >= 10 && (
              <p className="mt-3 rounded-xl bg-amber-400 px-4 py-3 text-sm font-bold text-zinc-950">
                Você chegou em 10 ou mais!
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <Button className="w-full" onClick={handleIncrement}>
            Aumentar
          </Button>

          <Button variant="danger" className="w-full" onClick={handleDecrement}>
            Diminuir
          </Button>

          <Button variant="warning" className="w-full" onClick={handleAddTen}>
            Somar 10
          </Button>

          <Button variant="danger" className="w-full" onClick={handleRemoveTen}>
            Diminuir 10
          </Button>

          <Button variant="secondary" className="w-full" onClick={handleReset}>
            Zerar
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
