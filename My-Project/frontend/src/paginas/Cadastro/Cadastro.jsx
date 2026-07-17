import { Link } from "react-router";

import "./Cadastro.css";

export default function Cadastro() {
  return (
    <main className="pagina-cadastro">
      <section className="cartao-cadastro">
        <span className="identificacao-projeto">Burger Lab</span>

        <h1>Criar conta</h1>

        <p>Cadastre-se para acessar nossos produtos e realizar seus pedidos.</p>

        <Link className="link-navegacao" to="escolher-acesso">
          Continuar
        </Link>
      </section>
    </main>
  );
}
