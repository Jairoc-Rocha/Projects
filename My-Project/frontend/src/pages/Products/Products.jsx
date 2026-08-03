import { useAuth } from "../../contexts/AuthContext";

import "./Products.css";

export default function Products() {
  const { user } = useAuth();

  return (
    <main className="temporary-page">
      <span className="project-label">Burger Lab</span>

      <h1>Produtos</h1>

      <p>
        Login realizado como cliente: <strong>{user?.name}</strong>
      </p>
    </main>
  );
}
