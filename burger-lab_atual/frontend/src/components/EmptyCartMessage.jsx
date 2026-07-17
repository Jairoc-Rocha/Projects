import { useNavigate } from "react-router";

import { scrollToMenu } from "../utils/scrollToMenu";

export default function EmptyCartMessage({
  title = "Seu carrinho está vazio.",
  description = "Adicione algum produto do cardápio para começar seu pedido.",
}) {
  const navigate = useNavigate();

  function handleGoToMenu() {
    navigate("/");
    scrollToMenu();
  }

  return (
    <div
      className="
        mt-12 rounded-4xl border border-yellow-400/20 bg-zinc-950 p-8
        text-center
      "
    >
      <div
        className="
          mx-auto flex h-20 w-20 items-center justify-center rounded-full
          bg-yellow-400/10 text-4xl
        "
      >
        🛒
      </div>

      <p className="mt-6 text-xl font-black text-yellow-50">{title}</p>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-yellow-50/70">
        {description}
      </p>

      <button
        type="button"
        onClick={handleGoToMenu}
        className="
          mt-6 inline-block rounded-full bg-yellow-400 px-8 py-3
          font-black text-zinc-950 transition hover:bg-yellow-300
        "
      >
        Ver cardápio
      </button>
    </div>
  );
}
