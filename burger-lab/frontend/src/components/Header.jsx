import { Link, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { apiFetch } from "../services/api.js";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser, loadingUser } = useAuth();

  async function handleLogout() {
    try {
      const response = await apiFetch("/logout", {
        method: "POST",
      });

      if (!response.ok) {
        console.log("Erro ao fazer logout");
        return;
      }

      setUser(null);
      navigate("/login");
    } catch (error) {
      console.log("Erro ao fazer logout:");
      console.log(error);
    }
  }
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        BURGER LAB
      </Link>
      <nav className="header-nav">
        {loadingUser ? (
          <span className="header-loading">Carregando...</span>
        ) : user ? (
          <>
            <span className="header-user">Olá, {user.name}</span>
            <Link to="/pedidos">Pedidos</Link>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Entrar</Link>
            <Link to="/register" className="header-register">
              Criar conta
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
