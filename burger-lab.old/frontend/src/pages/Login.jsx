import { useState } from "react";
import { Link, useNavigate } from "react-router";

import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { apiFetch } from "../services/api";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { checkAuth } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await apiFetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.message || "Erro ao fazer login");
        return;
      }

      await checkAuth();

      navigate("/");
    } catch (error) {
      console.log("Erro ao fazer login:");
      console.log(error);

      setErrorMessage("Não foi possível conectar ao servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <di>
      <main className="auth-page">
        <section className="auth-card">
          <span className="auth-label">BURGER LAB</span>
          <h1>Entrar na conta</h1>
          <p>
            Acesse sua conta para adicionar produtos ao carrinho e acompanhar
            seus pedidos.
          </p>
          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              E-mail
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </label>
            {errorMessage && <p className="auth-error">{errorMessage}</p>}
            <Button title={loading ? "Entrando..." : "Entrar"} type="submit" />
          </form>
          <p className="auth-link">
            Ainda não tem conta? <Link to="/register">Criar conta</Link>
          </p>
        </section>
      </main>
    </di>
  );
}
