// 4 - Navegação entre páginas
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
}
