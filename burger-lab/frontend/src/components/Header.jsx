import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-yellow-400/10 bg-black/90 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tight text-white">
            Burger <span className="text-yellow-400">Lab</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-yellow-50/80 transition hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-yellow-50/80 transition hover:text-yellow-400"
            >
              Cardápio
            </a>

            <a
              href="#"
              className="text-sm font-medium text-yellow-50/80 transition hover:text-yellow-400"
            >
              Carrinho
            </a>
          </nav>

          <button className="rounded-full border border-yellow-400 px-5 py-2.5 text-sm font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-zinc-950">
            Entrar
          </button>
        </div>
      </Container>
    </header>
  );
}
