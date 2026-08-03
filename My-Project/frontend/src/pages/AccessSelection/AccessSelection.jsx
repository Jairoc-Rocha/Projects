import { Link } from "react-router";

import "./AccessSelection.css";

export default function AccessSelection() {
  return (
    <main className="access-selection-page">
      <section className="access-selection-content">
        <span className="project-label">Burger Lab</span>

        <h1>Como você deseja acessar?</h1>

        <p className="access-selection-description">
          Escolha o tipo de acesso para continuar.
        </p>

        <div className="access-options">
          <article className="access-card">
            <span className="access-icon" aria-hidden="true">
              C
            </span>

            <h2>Cliente</h2>

            <p>
              Acesse nossos produtos, monte seu carrinho e acompanhe seus
              pedidos.
            </p>

            <Link className="access-button" to="/login/customer">
              Entrar como cliente
            </Link>
          </article>

          <article className="access-card">
            <span className="access-icon" aria-hidden="true">
              A
            </span>

            <h2>Administrador</h2>

            <p>Gerencie os produtos, clientes e pedidos realizados na loja.</p>

            <Link className="access-button" to="/login/admin">
              Entrar como administrador
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
