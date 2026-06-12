import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </>
  );
}
