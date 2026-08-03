import { useAuth } from "../../contexts/AuthContext";

import "./AdminDashboard.css";

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <main className="admin-temporary-page">
      <span className="project-label">Burger Lab</span>

      <h1>Painel administrativo</h1>

      <p>
        Login realizado como administrador: <strong>{user?.name}</strong>
      </p>
    </main>
  );
}
