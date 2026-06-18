export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
      <a href="/" className="text-2xl font-bold text-verde-200">
        Forest
      </a>
      <nav>
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#acomodacoes" className="transition hover:text-verde-200">
              Acomodações
            </a>
          </li>
          <li>
            <a href="#eventos" className="transition hover:text-verde-200">
              Eventos
            </a>
          </li>
          <li>
            <a href="#experiencias" className="transition hover:text-verde-200">
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
    </header>
  );
}
