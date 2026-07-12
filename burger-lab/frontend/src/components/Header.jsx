import { Link, NavLink, useNavigate } from "react-router";

import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { calculateCartQuantity } from "../utils/calculateCartQuantity";
import { getFirstName } from "../utils/getFirstName";
import { scrollToMenu } from "../utils/scrollToMenu";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const cartQuantity = calculateCartQuantity(cartItems);
  const firstName = getFirstName(user?.name);

  function handleGoToMenu() {
    navigate("/");

    setTimeout(() => {
      scrollToMenu();
    }, 100);
  }

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <header
      className="
        sticky top-0 z-50 border-b border-yellow-400/10
        bg-zinc-950/90 backdrop-blur
      "
    >
      <div
        className="
          mx-auto flex max-w-7xl items-center justify-between px-6 py-4
        "
      >
        <Link to="/" className="flex items-center gap-3">
          <div
            className="
              flex h-11 w-11 items-center justify-center rounded-full
              bg-yellow-400 text-2xl text-zinc-950
            "
          >
            🍔
          </div>

          <div>
            <strong className="block text-lg font-black text-yellow-50">
              Burger Lab
            </strong>

            <span className="block text-xs font-bold text-yellow-400">
              Kitchen Experience
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
                text-sm font-bold transition
                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-yellow-50/70 hover:text-yellow-400"
                }
              `
            }
          >
            Início
          </NavLink>

          <button
            type="button"
            onClick={handleGoToMenu}
            className="
              cursor-pointer text-sm font-bold text-yellow-50/70
              transition hover:text-yellow-400
            "
          >
            Cardápio
          </button>

          {user && (
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `
                  text-sm font-bold transition
                  ${
                    isActive
                      ? "text-yellow-400"
                      : "text-yellow-50/70 hover:text-yellow-400"
                  }
                `
              }
            >
              Meus pedidos
            </NavLink>
          )}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `
                text-sm font-bold transition
                ${
                  isActive
                    ? "text-yellow-400"
                    : "text-yellow-50/70 hover:text-yellow-400"
                }
              `
            }
          >
            Carrinho ({cartQuantity})
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <span className="text-sm font-bold text-yellow-50/80">
                Olá, {firstName}
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  rounded-full border border-red-500/40 px-5 py-2.5
                  text-sm font-bold text-red-400 transition
                  hover:bg-red-500 hover:text-white
                "
              >
                Sair
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="
                rounded-full bg-yellow-400 px-5 py-2.5 text-sm
                font-black text-zinc-950 transition hover:bg-yellow-300
              "
            >
              Entrar
            </Link>
          )}
        </div>
      </div>

      <div className="border-t border-yellow-400/10 px-6 py-4 md:hidden">
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
                rounded-2xl px-4 py-3 text-sm font-bold transition
                ${
                  isActive
                    ? "bg-yellow-400 text-zinc-950"
                    : "text-yellow-50/70 hover:bg-yellow-400/10 hover:text-yellow-400"
                }
              `
            }
          >
            Início
          </NavLink>

          <button
            type="button"
            onClick={handleGoToMenu}
            className="
              rounded-2xl px-4 py-3 text-left text-sm font-bold
              text-yellow-50/70 transition hover:bg-yellow-400/10
              hover:text-yellow-400
            "
          >
            Cardápio
          </button>

          {user && (
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `
                  rounded-2xl px-4 py-3 text-sm font-bold transition
                  ${
                    isActive
                      ? "bg-yellow-400 text-zinc-950"
                      : "text-yellow-50/70 hover:bg-yellow-400/10 hover:text-yellow-400"
                  }
                `
              }
            >
              Meus pedidos
            </NavLink>
          )}

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `
                rounded-2xl px-4 py-3 text-sm font-bold transition
                ${
                  isActive
                    ? "bg-yellow-400 text-zinc-950"
                    : "text-yellow-50/70 hover:bg-yellow-400/10 hover:text-yellow-400"
                }
              `
            }
          >
            Carrinho ({cartQuantity})
          </NavLink>
        </nav>

        <div className="mt-4">
          {user ? (
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-yellow-50/80">
                Olá, {firstName}
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="
                  rounded-full border border-red-500/40 px-4 py-2
                  text-xs font-bold text-red-400 transition
                  hover:bg-red-500 hover:text-white
                "
              >
                Sair
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="
                inline-block rounded-full bg-yellow-400 px-5 py-2.5
                text-sm font-black text-zinc-950 transition hover:bg-yellow-300
              "
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
