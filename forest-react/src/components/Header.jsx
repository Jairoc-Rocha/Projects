import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-verde-200">
          Forest
        </a>

        {/* Menu normal */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li>
              <a
                href="#acomodacoes"
                className="transition hover:text-verde-200"
              >
                Acomodações
              </a>
            </li>

            <li>
              <a href="#eventos" className="transition hover:text-verde-200">
                Eventos
              </a>
            </li>

            <li>
              <a
                href="#experiencias"
                className="transition hover:text-verde-200"
              >
                Experiências
              </a>
            </li>

            <li>
              <a href="#contato" className="transition hover:text-verde-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          className="rounded-md border border-verde-700 px-3 py-2 text-verde-200 transition hover:bg-verde-900 md:hidden"
        >
          ☰
        </button>
      </div>

      {menuAberto && (
        // Menu do mobel
        <nav className="mt-4 rounded-lg bg-verde-900 p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <a
                href="#acomodacoes"
                className="transition hover:text-verde-200"
              >
                Acomodações
              </a>
            </li>

            <li>
              <a href="#eventos" className="transition hover:text-verde-200">
                Eventos
              </a>
            </li>

            <li>
              <a
                href="#experiencias"
                className="transition hover:text-verde-200"
              >
                Experiências
              </a>
            </li>

            <li>
              <a href="#contato" className="transition hover:text-verde-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
