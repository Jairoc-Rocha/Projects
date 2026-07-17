import { useNavigate } from "react-router";

import { scrollToMenu } from "../utils/scrollToMenu";

export default function CartActions({ onClearCart }) {
  const navigate = useNavigate();

  function handleContinueShopping() {
    navigate("/");
    scrollToMenu();
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={handleContinueShopping}
        className="
          cursor-pointer rounded-full border border-yellow-400 px-6 py-3
          text-sm font-black text-yellow-400 transition
          hover:bg-yellow-400 hover:text-zinc-950
        "
      >
        Continuar comprando
      </button>

      <button
        type="button"
        onClick={onClearCart}
        className="
          cursor-pointer rounded-full border border-red-500/40 px-6 py-3
          text-sm font-black text-red-400 transition
          hover:bg-red-500 hover:text-white
        "
      >
        Limpar carrinho
      </button>
    </div>
  );
}
