import { Link } from "react-router";

export default function Contact() {
  return (
    <div>
      <h1>Página de contatos</h1>
      {/* 5 - Rotas aninhadas / nested routes utiliza o :id o outro campo*/}
      <p>
        <Link to="/contact/1">Forma de contato 1</Link>
        <Link to="/contact/2">Forma de contato 2</Link>
        <Link to="/contact/3">Forma de contato 3</Link>
      </p>
    </div>
  );
}
