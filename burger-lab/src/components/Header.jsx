import Container from "./Container";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-xl font-black tracking-tight text-white">
            Burger <span className="text-orange-500">Lab</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#"
              className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
            >
              Home
            </a>

            <a
              href="#"
              className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
            >
              Cardápio
            </a>

            <a
              href="#"
              className="text-sm font-medium text-zinc-300 transition hover:text-orange-400"
            >
              Carrinho
            </a>
          </nav>

          <button className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600">
            Entrar
          </button>
        </div>
      </Container>
    </header>
  );
}
