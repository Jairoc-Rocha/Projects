import { useState, useContext } from "react";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";
import BrandMark from "../components/BrandMark";
import { FlaskConical, ShieldCheck, Flame } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("E-mail e senha são obrigatórios");
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.status === 404) return setError("Usuário não encontrado");
      if (response.status === 400) return setError("Usuário e senha são obrigatórios");
      if (response.status === 401) return setError("Credenciais inválidas");
      if (response.status === 500) return setError("Erro no servidor");

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        setUser(data);
      }
    } catch (error) {
      console.log(error);
      setError("Não foi possível conectar ao servidor");
    }
  }

  return (
    <main className="auth-page auth-login">
      <section className="auth-visual">
        <BrandMark />

        <div className="auth-hero-copy">
          <span className="hero-eyebrow">
            <FlaskConical size={16} />
            laboratório de sabores
          </span>

          <h1>Experimente. Descubra. Vicie-se.</h1>

          <p>
            Uma experiência moderna para pedir hambúrgueres artesanais,
            acompanhar pedidos e explorar combinações criativas.
          </p>

          <div className="auth-benefits">
            <div>
              <ShieldCheck size={18} />
              <span>Login seguro</span>
            </div>
            <div>
              <Flame size={18} />
              <span>Pedidos em tempo real</span>
            </div>
          </div>
        </div>

        <div className="auth-burger-showcase">
          <img src="./duplo-da-casa.png" alt="Burger destaque Kitchen Lab" />
        </div>
      </section>

      <form className="auth-box" onSubmit={handleSubmit}>
        <Link to="/" className="auth-logo-link">
          <BrandMark compact />
        </Link>

        <div className="auth-title">
          <span>Acesso ao laboratório</span>
          <h2>Bem-vindo de volta</h2>
          <p>Entre na sua conta para continuar seu pedido.</p>
        </div>

        <div className="login-fields">
          <Input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} type="email" />
          <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />
          <p className="error-text error-text-small">{error}</p>
        </div>

        <Button title="Entrar no sistema" type="submit" className="login-submit" />

        <Link to="/register" className="full-width">
          <Button title="Criar uma nova conta" variant="outline" />
        </Link>
      </form>
    </main>
  );
};

export default Login;
